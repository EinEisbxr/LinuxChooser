// Utils exports for Linux Chooser

// Scoring Algorithm
export {
  buildUserProfile,
  calculateDistroMatch,
  findBestDE,
  generateMatchReasons,
  generateWarnings,
  calculateMatches,
  getTopMatches,
  calculateQuickPreview,
} from './scoringAlgorithm';
export type { UserAnswers, UserProfile, DistroMatch } from './scoringAlgorithm';

// Deal Breakers
export {
  checkGameCompatibility,
  checkSoftwareCompatibility,
  checkHardwareCompatibility,
  checkCompetitiveGaming,
  checkDealBreakers,
  hasCriticalDealBreakers,
  getDealBreakerSummary,
} from './dealBreakers';
export type { DealBreakerWarning } from './dealBreakers';
