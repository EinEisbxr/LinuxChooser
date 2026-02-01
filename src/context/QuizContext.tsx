/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useCallback, useMemo } from 'react';
import type { ReactNode } from 'react';
import { questions, getVisibleQuestions } from '../data/questions';
import type { Question } from '../data/questions';
import {
    calculateMatches,
    calculateQuickPreview,
} from '../utils/scoringAlgorithm';
import type { UserAnswers, DistroMatch } from '../utils/scoringAlgorithm';
import {
    checkDealBreakers,
    getDealBreakerSummary,
} from '../utils/dealBreakers';
import type { DealBreakerWarning } from '../utils/dealBreakers';

// Re-export types for convenience
export type { UserAnswers, DistroMatch } from '../utils/scoringAlgorithm';
export type { DealBreakerWarning } from '../utils/dealBreakers';

// Legacy compatibility types (kept for existing components)
export interface Answer {
    questionId: string;
    selectedOptions: string[];
}

export interface DistroScore {
    distroId: string;
    desktopEnvId: string;
    score: number;
    name: string;
    desktopName: string;
    reasons?: string[];
    warnings?: string[];
}

export interface Warning {
    type: 'gaming' | 'hardware' | 'compatibility' | 'software' | 'general';
    message: string;
    severity?: 'warning' | 'critical';
}

export interface QuizContextType {
    // State
    answers: Map<string, Answer>;
    rawAnswers: UserAnswers; // New format for scoring algorithm
    currentQuestionIndex: number;
    results: DistroScore[];
    fullResults: DistroMatch[]; // Full results with all details
    warnings: Warning[];
    dealBreakerWarnings: DealBreakerWarning[];
    totalQuestions: number;

    // Current question info
    currentQuestion: Question | null;
    visibleQuestions: Question[];
    progress: number;
    isComplete: boolean;

    // Live preview
    liveResults: DistroMatch[];

    // Actions
    setAnswer: (questionId: string, selectedOptions: string[]) => void;
    nextQuestion: () => void;
    prevQuestion: () => void;
    skipQuestion: () => void;
    goToQuestion: (index: number) => void;
    calculateResults: () => void;
    resetQuiz: () => void;
    getTopResults: (count: number) => DistroScore[];

    // Computed helpers
    canGoNext: boolean;
    canGoPrev: boolean;
    hasRequiredAnswer: boolean;
    dealBreakerSummary: {
        hasCritical: boolean;
        count: number;
        criticalCount: number;
        mainIssue: string | null;
    };

    // Validation for results navigation
    answeredCount: number;
    hasEnoughAnswersForResults: boolean;
    minAnswersRequired: number;
}

export const QuizContext = createContext<QuizContextType | undefined>(
    undefined,
);

// Minimum answers needed before showing live results
const MIN_ANSWERS_FOR_PREVIEW = 2;

// Minimum answers needed before allowing navigation to results
export const MIN_ANSWERS_FOR_RESULTS = 3;

export function QuizProvider({ children }: { children: ReactNode }) {
    const [answers, setAnswersMap] = useState<Map<string, Answer>>(new Map());
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [results, setResults] = useState<DistroScore[]>([]);
    const [fullResults, setFullResults] = useState<DistroMatch[]>([]);
    const [warnings, setWarnings] = useState<Warning[]>([]);
    const [dealBreakerWarnings, setDealBreakerWarnings] = useState<
        DealBreakerWarning[]
    >([]);

    // Convert Map<Answer> to UserAnswers format for scoring algorithm
    const rawAnswers = useMemo((): UserAnswers => {
        const result: UserAnswers = {};
        answers.forEach((answer, questionId) => {
            // If single selection, store as string; if multiple, store as array
            const question = questions.find((q) => q.id === questionId);
            if (
                question?.type === 'single' &&
                answer.selectedOptions.length === 1
            ) {
                result[questionId] = answer.selectedOptions[0];
            } else {
                result[questionId] = answer.selectedOptions;
            }
        });
        return result;
    }, [answers]);

    // Computed: Visible questions based on current answers
    const visibleQuestions = useMemo(() => {
        return getVisibleQuestions(rawAnswers);
    }, [rawAnswers]);

    // Helper function to clean orphaned answers when setting a new answer
    // This runs during state update, not in an effect
    const cleanOrphanedAnswers = useCallback(
        (
            currentAnswers: Map<string, Answer>,
            newQuestionId: string,
            newSelectedOptions: string[],
        ): Map<string, Answer> => {
            // First, create the new answers map with the new answer
            const tempAnswers = new Map(currentAnswers);
            tempAnswers.set(newQuestionId, {
                questionId: newQuestionId,
                selectedOptions: newSelectedOptions,
            });

            // Convert to raw format to compute visible questions
            const tempRawAnswers: UserAnswers = {};
            tempAnswers.forEach((answer, questionId) => {
                const question = questions.find((q) => q.id === questionId);
                if (
                    question?.type === 'single' &&
                    answer.selectedOptions.length === 1
                ) {
                    tempRawAnswers[questionId] = answer.selectedOptions[0];
                } else {
                    tempRawAnswers[questionId] = answer.selectedOptions;
                }
            });

            // Get the new visible questions based on the updated answers
            const newVisibleQuestions = getVisibleQuestions(tempRawAnswers);
            const newVisibleIds = new Set(newVisibleQuestions.map((q) => q.id));

            // Remove answers for questions that are no longer visible
            const cleanedAnswers = new Map<string, Answer>();
            tempAnswers.forEach((answer, questionId) => {
                if (newVisibleIds.has(questionId)) {
                    cleanedAnswers.set(questionId, answer);
                }
            });

            return cleanedAnswers;
        },
        [],
    );

    // Computed: Safe current question index - ensures we never go out of bounds
    // This derives a valid index from the stored index, avoiding the need for
    // effect-based state synchronization which can cause infinite loops.
    const safeCurrentQuestionIndex = useMemo(() => {
        if (visibleQuestions.length === 0) return 0;
        // Clamp the index to valid bounds
        return Math.min(currentQuestionIndex, visibleQuestions.length - 1);
    }, [currentQuestionIndex, visibleQuestions.length]);

    // Computed: Current question
    const currentQuestion = useMemo(() => {
        return visibleQuestions[safeCurrentQuestionIndex] || null;
    }, [visibleQuestions, safeCurrentQuestionIndex]);

    // Computed: Total questions
    const totalQuestions = visibleQuestions.length;

    // Computed: Progress percentage
    const progress = useMemo(() => {
        if (totalQuestions === 0) return 0;
        return Math.round((safeCurrentQuestionIndex / totalQuestions) * 100);
    }, [safeCurrentQuestionIndex, totalQuestions]);

    // Computed: Is quiz complete?
    const isComplete = useMemo(() => {
        return safeCurrentQuestionIndex >= totalQuestions;
    }, [safeCurrentQuestionIndex, totalQuestions]);

    // Computed: Live results preview
    const liveResults = useMemo(() => {
        if (answers.size < MIN_ANSWERS_FOR_PREVIEW) {
            return [];
        }
        return calculateQuickPreview(rawAnswers);
    }, [rawAnswers, answers.size]);

    // Computed: Deal-breaker summary
    const dealBreakerSummary = useMemo(() => {
        return getDealBreakerSummary(rawAnswers);
    }, [rawAnswers]);

    // Computed: Can navigate?
    const canGoNext = safeCurrentQuestionIndex < totalQuestions;
    const canGoPrev = safeCurrentQuestionIndex > 0;

    // Computed: Has required answer for current question?
    const hasRequiredAnswer = useMemo(() => {
        if (!currentQuestion) return true;
        if (!currentQuestion.required) return true;
        const answer = answers.get(currentQuestion.id);
        if (!answer) return false;
        return answer.selectedOptions.length > 0;
    }, [currentQuestion, answers]);

    // Computed: Number of answered questions
    const answeredCount = answers.size;

    // Computed: Has enough answers to navigate to results?
    const hasEnoughAnswersForResults = answeredCount >= MIN_ANSWERS_FOR_RESULTS;

    // Actions
    const setAnswer = useCallback(
        (questionId: string, selectedOptions: string[]) => {
            setAnswersMap((prev) =>
                cleanOrphanedAnswers(prev, questionId, selectedOptions),
            );
        },
        [cleanOrphanedAnswers],
    );

    const nextQuestion = useCallback(() => {
        setCurrentQuestionIndex((prev) => Math.min(prev + 1, totalQuestions));
    }, [totalQuestions]);

    const prevQuestion = useCallback(() => {
        setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
    }, []);

    const skipQuestion = useCallback(() => {
        if (currentQuestion) {
            setAnswersMap((prev) => {
                const newAnswers = new Map(prev);
                newAnswers.delete(currentQuestion.id);
                return newAnswers;
            });
        }
        nextQuestion();
    }, [currentQuestion, nextQuestion]);

    const goToQuestion = useCallback(
        (index: number) => {
            if (index >= 0 && index < totalQuestions) {
                setCurrentQuestionIndex(index);
            }
        },
        [totalQuestions],
    );

    const calculateResults = useCallback(() => {
        // Use the actual scoring algorithm
        const matches = calculateMatches(rawAnswers);
        setFullResults(matches);

        // Convert to legacy format for compatibility
        const legacyResults: DistroScore[] = matches.map((match) => ({
            distroId: match.distro.id,
            desktopEnvId: match.de.id,
            score: match.percentage,
            name: match.distro.name,
            desktopName: match.de.name,
            reasons: match.reasons,
            warnings: match.warnings,
        }));
        setResults(legacyResults);

        // Get deal-breaker warnings
        const dealBreakers = checkDealBreakers(rawAnswers);
        setDealBreakerWarnings(dealBreakers);

        // Convert to legacy warning format
        const legacyWarnings: Warning[] = dealBreakers.map((db) => ({
            type:
                db.type === 'game'
                    ? 'gaming'
                    : db.type === 'software'
                      ? 'compatibility'
                      : db.type,
            message: db.message,
            severity: db.severity,
        }));
        setWarnings(legacyWarnings);
    }, [rawAnswers]);

    const resetQuiz = useCallback(() => {
        setAnswersMap(new Map());
        setCurrentQuestionIndex(0);
        setResults([]);
        setFullResults([]);
        setWarnings([]);
        setDealBreakerWarnings([]);
    }, []);

    const getTopResults = useCallback(
        (count: number) => {
            return results.slice(0, count);
        },
        [results],
    );

    return (
        <QuizContext.Provider
            value={{
                // State
                answers,
                rawAnswers,
                currentQuestionIndex: safeCurrentQuestionIndex,
                results,
                fullResults,
                warnings,
                dealBreakerWarnings,
                totalQuestions,

                // Current question info
                currentQuestion,
                visibleQuestions,
                progress,
                isComplete,

                // Live preview
                liveResults,

                // Actions
                setAnswer,
                nextQuestion,
                prevQuestion,
                skipQuestion,
                goToQuestion,
                calculateResults,
                resetQuiz,
                getTopResults,

                // Computed helpers
                canGoNext,
                canGoPrev,
                hasRequiredAnswer,
                dealBreakerSummary,

                // Validation for results navigation
                answeredCount,
                hasEnoughAnswersForResults,
                minAnswersRequired: MIN_ANSWERS_FOR_RESULTS,
            }}
        >
            {children}
        </QuizContext.Provider>
    );
}
