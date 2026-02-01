import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuiz } from '../hooks/useQuiz';

export default function LiveSidebar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const { liveResults, answers } = useQuiz();

    // Get top 5 results for live preview
    const topResults = useMemo(() => liveResults.slice(0, 5), [liveResults]);
    const hasAnswers = answers.size > 0;
    const hasLiveResults = topResults.length > 0;

    // Placeholder data when no answers yet or not enough answers for live results
    const placeholderMessage = hasAnswers
        ? 'Beantworte noch ein paar Fragen für Live-Empfehlungen'
        : 'Beantworte Fragen, um Live-Empfehlungen zu sehen';

    return (
        <>
            {/* Desktop sidebar */}
            <aside
                className="live-sidebar desktop-only"
                aria-label="Live-Vorschau der Empfehlungen"
            >
                <div className="sidebar-header">
                    <h3 className="sidebar-title">
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="sidebar-icon"
                            aria-hidden="true"
                        >
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                        </svg>
                        Live-Vorschau
                    </h3>
                    <span className="sidebar-subtitle">Top 5 Empfehlungen</span>
                </div>

                <div
                    className="sidebar-content"
                    aria-live="polite"
                    aria-atomic="false"
                >
                    {hasLiveResults ? (
                        <ul className="results-list">
                            <AnimatePresence mode="popLayout">
                                {topResults.map((result, index) => (
                                    <motion.li
                                        key={`${result.distro.id}-${result.de.id}`}
                                        className="result-item"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.05,
                                        }}
                                        layout
                                    >
                                        <div className="result-rank">
                                            #{index + 1}
                                        </div>
                                        {result.distro.logo && (
                                            <img
                                                src={result.distro.logo}
                                                alt={`${result.distro.name} Logo`}
                                                className="result-logo"
                                                loading="lazy"
                                                onError={(e) => {
                                                    e.currentTarget.style.display =
                                                        'none';
                                                }}
                                            />
                                        )}
                                        <div className="result-info">
                                            <span className="result-name">
                                                {result.distro.name}
                                            </span>
                                            <span className="result-desktop">
                                                {result.de.name}
                                            </span>
                                        </div>
                                        <div className="result-score">
                                            <div className="score-bar">
                                                <motion.div
                                                    className="score-fill"
                                                    initial={{ width: 0 }}
                                                    animate={{
                                                        width: `${result.percentage}%`,
                                                    }}
                                                    transition={{
                                                        duration: 0.5,
                                                        delay: index * 0.1,
                                                    }}
                                                />
                                            </div>
                                            <span className="score-text">
                                                {result.percentage}%
                                            </span>
                                        </div>
                                    </motion.li>
                                ))}
                            </AnimatePresence>
                        </ul>
                    ) : (
                        <div className="sidebar-placeholder">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="placeholder-icon"
                                aria-hidden="true"
                            >
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                            </svg>
                            <p>{placeholderMessage}</p>
                        </div>
                    )}
                </div>
            </aside>

            {/* Mobile collapsible panel */}
            <div className="live-sidebar-mobile mobile-only">
                <motion.button
                    className="mobile-sidebar-toggle"
                    onClick={() => setIsExpanded(!isExpanded)}
                    whileTap={{ scale: 0.98 }}
                    aria-expanded={isExpanded}
                    aria-controls="mobile-live-results"
                >
                    <div className="toggle-content">
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="toggle-icon"
                            aria-hidden="true"
                        >
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                        </svg>
                        <span>Live-Vorschau</span>
                        {hasLiveResults && (
                            <span
                                className="top-result-preview"
                                aria-hidden="true"
                            >
                                #{1} {topResults[0]?.distro.name}
                            </span>
                        )}
                    </div>
                    <motion.svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="toggle-chevron"
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        aria-hidden="true"
                    >
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                    </motion.svg>
                </motion.button>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            id="mobile-live-results"
                            className="mobile-sidebar-content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            aria-live="polite"
                        >
                            {hasLiveResults ? (
                                <ul className="results-list mobile">
                                    {topResults.map((result, index) => (
                                        <li
                                            key={`${result.distro.id}-${result.de.id}`}
                                            className="result-item"
                                        >
                                            <div className="result-rank">
                                                #{index + 1}
                                            </div>
                                            {result.distro.logo && (
                                                <img
                                                    src={result.distro.logo}
                                                    alt={`${result.distro.name} Logo`}
                                                    className="result-logo"
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        e.currentTarget.style.display =
                                                            'none';
                                                    }}
                                                />
                                            )}
                                            <div className="result-info">
                                                <span className="result-name">
                                                    {result.distro.name}
                                                </span>
                                                <span className="result-desktop">
                                                    {result.de.name}
                                                </span>
                                            </div>
                                            <span className="score-text">
                                                {result.percentage}%
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="sidebar-placeholder mobile">
                                    <p>{placeholderMessage}</p>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
