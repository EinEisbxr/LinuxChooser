import { useContext, useMemo } from 'react';
import { QuizContext } from '../context/QuizContext';
import type { QuizContextType } from '../context/QuizContext';
import { calculateMatches } from '../utils/scoringAlgorithm';
import type { UserAnswers } from '../utils/scoringAlgorithm';
import { checkDealBreakers, hasCriticalDealBreakers } from '../utils/dealBreakers';

/**
 * Main hook for quiz functionality
 * Must be used within a QuizProvider
 */
export function useQuiz(): QuizContextType {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}

/**
 * Hook for accessing quiz results only (for results page)
 * Can be used independently with answers passed in
 */
export function useQuizResults(answers: UserAnswers) {
  const results = useMemo(() => {
    return calculateMatches(answers);
  }, [answers]);

  const warnings = useMemo(() => {
    return checkDealBreakers(answers);
  }, [answers]);

  const hasCritical = useMemo(() => {
    return hasCriticalDealBreakers(answers);
  }, [answers]);

  const topResults = useMemo(() => {
    return results.slice(0, 5);
  }, [results]);

  const bestMatch = useMemo(() => {
    return results.length > 0 ? results[0] : null;
  }, [results]);

  return {
    results,
    topResults,
    bestMatch,
    warnings,
    hasCritical,
    totalMatches: results.length,
  };
}

// Re-export types for convenience
export type { QuizContextType } from '../context/QuizContext';
export type { UserAnswers, DistroMatch } from '../utils/scoringAlgorithm';
export type { DealBreakerWarning } from '../utils/dealBreakers';

export default useQuiz;
