// Data exports for Linux Chooser

// Distros
export { distros, getDistroById, filterDistros } from './distros';
export type { Distro } from './distros';

// Desktop Environments
export { desktopEnvironments, getDEById, getLightweightDEs, getWaylandDEs } from './desktopEnvironments';
export type { DesktopEnvironment } from './desktopEnvironments';

// Questions
export { questions, getQuestionById, getVisibleQuestions } from './questions';
export type { Question, AnswerOption } from './questions';

// Games
export {
  problematicGames,
  partialGames,
  workingGames,
  allGames,
  isGameProblematic,
  getProblematicGamesFromSelection,
  getGameById,
  getGamesByStatus,
  getGamesByCategory,
  getPopularGames,
  getGamesThatWork,
  getGamesThatDontWork,
  antiCheatInfo,
} from './games';
export type { Game, CompatibilityStatus } from './games';
