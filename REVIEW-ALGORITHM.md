# Scoring Algorithm Review

**Review Date:** 2026-01-26
**Files Reviewed:**
- `/home/morpheus/Documents/Projects/LinuxChooser/src/utils/scoringAlgorithm.ts`
- `/home/morpheus/Documents/Projects/LinuxChooser/src/utils/dealBreakers.ts`

---

## Executive Summary

The scoring algorithm is generally well-designed and thoughtfully implemented. However, there are several logic flaws and edge cases that could produce suboptimal recommendations. This review identifies 12 issues of varying severity.

---

## 1. Algorithm Logic Analysis

### Overall Structure
The algorithm follows a sensible approach:
1. Build a user profile from quiz answers
2. Calculate weighted scores for each distro
3. Match desktop environment to user preferences
4. Generate reasons and warnings
5. Filter and sort results

**Verdict:** The overall structure is sound.

---

## 2. Weight Analysis

Current weights:
```typescript
const WEIGHTS = {
  beginnerFriendly: 2.0,
  stability: 1.5,
  cuttingEdge: 1.5,
  gaming: 2.5,        // Highest weight
  privacy: 2.0,
  customization: 1.0,
  performance: 1.5,
  professional: 1.0,
  hardwareSupport: 1.5,
  communitySupport: 1.0,
  desktopMatch: 2.0,  // Declared but NEVER USED!
};
```

### Issues Found:

#### ISSUE #1 - CRITICAL: `desktopMatch` weight is declared but never used
**Location:** Line 69 and entire `calculateDistroMatch` function
**Impact:** Desktop environment matching has NO weight in the final score calculation. The DE is selected separately but doesn't influence the distro ranking.

**Recommendation:** Either remove this unused weight or integrate DE matching into the score calculation.

#### ISSUE #2 - MEDIUM: Gaming weight (2.5) may be too dominant
**Analysis:** With `gaming: 2.5`, a user who wants gaming will see gaming distros heavily favored even if other factors are important. However, this seems intentional for a tool that asks about gaming specifically.

**Verdict:** The weight is appropriate given gaming is a primary differentiator for Linux distros.

---

## 3. Mental Testing with User Profiles

### Profile A: Complete Beginner Who Just Wants to Browse

**Simulated Answers:**
- experience: 'none' (experienceLevel: 0, needsBeginnerFriendly: 10)
- primary-use: 'daily' (needsStability: 7, needsBeginnerFriendly: 12 -> capped at 10)
- learning: 'none' (wantsToLearn: false, needsBeginnerFriendly: min(10, 12) = 10)
- stability: 'stable'

**Expected Result:** Linux Mint, Zorin OS, Ubuntu
**Algorithm Behavior:**
- Filters out complex distros (beginnerFriendly < 5) because `experienceLevel < 2 && !wantsToLearn`
- Linux Mint (beginnerFriendly: 10) scores highest on beginner matching
- Target audience bonus (+8) for distros with 'beginner' audience

**Verdict:** CORRECT - Beginners will get beginner-friendly distros.

---

### Profile B: Hardcore Gamer with NVIDIA GPU

**Simulated Answers:**
- experience: 'intermediate'
- primary-use: 'gaming' (needsGaming: 10, needsCuttingEdge: 7)
- gaming-type: ['competitive', 'aaa'] (needsGaming: 10, needsPerformance: 8)
- gpu: 'nvidia' (hasNvidia: true)

**Expected Result:** Pop!_OS, Nobara, Garuda, Bazzite
**Algorithm Behavior:**
- Gaming score: `distro.gamingSupport * 1.0 * 2.5 = gamingSupport * 2.5`
- Target audience bonus (+10) for distros with 'gamer' audience
- NVIDIA bonus (+5) for pop-os, nobara, manjaro, linux-mint

**Scoring Breakdown:**
- Nobara: gamingSupport=10, gamer audience (+10), not in NVIDIA list (-0) = high
- Garuda: gamingSupport=10, gamer audience (+10), not in NVIDIA list (-0) = high
- Bazzite: gamingSupport=10, gamer audience (+10), not in NVIDIA list (-0) = high
- Pop!_OS: gamingSupport=9, gamer audience (+10), NVIDIA bonus (+5) = high

#### ISSUE #3 - MEDIUM: Garuda not in NVIDIA bonus list
**Location:** Line 429
**Analysis:** Garuda Linux has excellent NVIDIA support out-of-the-box but is not in the NVIDIA bonus list.

**Current List:** `['pop-os', 'nobara', 'manjaro', 'linux-mint']`
**Missing:** `garuda`, `bazzite`

**Recommendation:** Add 'garuda' and 'bazzite' to the NVIDIA bonus list.

**Verdict:** MOSTLY CORRECT - Gamers will get gaming distros, but NVIDIA bonuses are incomplete.

---

### Profile C: Privacy-Focused Journalist

**Simulated Answers:**
- experience: 'intermediate'
- primary-use: 'privacy' (needsPrivacy: 10)
- privacy-level: 'paranoid' (needsPrivacy: 10)

**Expected Result:** Tails, Qubes OS
**Algorithm Behavior:**
- Privacy score: `distro.privacyFocus * 1.0 * 2.0`
- Target audience bonus (+10) for distros with 'privacy' audience
- Tails/Qubes NOT filtered out because `needsPrivacy >= 8`

#### ISSUE #4 - MEDIUM: Privacy distros shown to users who may not want them
**Location:** Lines 706-708
**Analysis:** Tails and Qubes are only filtered when `needsPrivacy < 8`. But a user with `needsPrivacy: 7` (privacy-level: 'important') will still see Tails in results, even though it's not suitable for daily use.

**Recommendation:** Consider adding daily-use warnings more prominently or lowering the threshold to 9.

**Verdict:** MOSTLY CORRECT - Privacy users get privacy distros, but edge cases exist.

---

### Profile D: Developer Who Wants Cutting-Edge

**Simulated Answers:**
- experience: 'advanced' (experienceLevel: 3, needsBeginnerFriendly: 2)
- primary-use: 'development' (needsProfessional: 8, needsCuttingEdge: 6, wantsToLearn: true)
- stability: 'bleeding-edge' (needsStability: 2, needsCuttingEdge: 10)

**Expected Result:** Arch, Fedora, openSUSE Tumbleweed, NixOS
**Algorithm Behavior:**
- Cutting edge score active (needsCuttingEdge > 5)
- Advanced user bonus (+5) for arch, gentoo, void, nixos
- AUR bonus for cutting-edge users

#### ISSUE #5 - LOW: EndeavourOS not in advanced user bonus list
**Location:** Line 454
**Analysis:** EndeavourOS is nearly pure Arch and great for learning, but it's not in the advanced learner bonus list.

**Current List:** `['arch', 'gentoo', 'void', 'nixos']`
**Missing:** `endeavouros`

**Recommendation:** Consider adding 'endeavouros' to the learning bonus list.

**Verdict:** CORRECT - Developers get cutting-edge distros.

---

### Profile E: User with Very Old Hardware (2GB RAM)

**Simulated Answers:**
- ram: '2gb' (hasLimitedRAM: true, ramAmount: 2, needsPerformance: 10)
- computer-age: 'vintage' (hasOldHardware: true, needsPerformance: 9 -> 10)

**Expected Result:** antiX, Puppy Linux, MX Linux, Lubuntu
**Algorithm Behavior:**
- Performance score active (hasOldHardware || hasLimitedRAM)
- RAM penalty (-20) if distro.minRAM > profile.ramAmount
- DE selection penalizes heavy DEs

**Distro minRAM values:**
- antiX: 0.25 GB - PASS
- Puppy: 0.128 GB - PASS
- MX Linux: 1 GB - PASS
- Lubuntu: 1 GB - PASS
- Linux Mint: 2 GB - PASS (exactly)
- Ubuntu: 4 GB - FAIL (-20 penalty)
- Qubes: 16 GB - FAIL (-20 penalty)

#### ISSUE #6 - HIGH: RAM penalty not severe enough for some cases
**Location:** Lines 410-412
**Analysis:** A -20 penalty may not be enough. If Qubes has minRAM: 16 and user has 2GB, they should NEVER see Qubes recommended.

**Example Calculation:**
- Qubes with 2GB user: Gets -20 penalty but could still score decently on other metrics if user wants privacy.
- A privacy user with `needsPrivacy: 10` gets huge privacy scores, potentially overriding the RAM penalty.

**Recommendation:** Consider filtering out distros where `minRAM > ramAmount * 2` or increase penalty to -50.

#### ISSUE #7 - MEDIUM: DE RAM check uses wrong comparison
**Location:** Lines 517-519
```typescript
const requiredGB = de.idleRAM / 1000;
if (requiredGB > profile.ramAmount * 0.5) {
  score -= 10;
}
```
**Analysis:** This converts idleRAM (in MB) to GB by dividing by 1000, but 1GB = 1024MB. This makes the comparison slightly off.

**Example:** GNOME idleRAM = 800MB, requiredGB = 0.8GB, 2GB * 0.5 = 1GB. Check passes (0.8 < 1), but 800MB is 40% of 2GB which is significant.

**Recommendation:** Use 1024 for accurate conversion OR accept that this is a rough heuristic.

**Verdict:** MOSTLY CORRECT - Old hardware users get lightweight distros, but extreme cases (Qubes for 2GB user) could slip through.

---

## 4. Desktop Environment Matching Logic

### Analysis

```typescript
export function findBestDE(profile: UserProfile, distro: Distro): DesktopEnvironment
```

**Process:**
1. Gets available DEs from the distro
2. Scores each DE based on user preferences
3. Returns highest-scoring DE

**Scoring Logic:**
- Windows-like preference: `de.windowsLike * 2`
- Mac-like preference: `de.macLike * 2`
- Modern preference: `de.modernLook * 2`
- Tiling preference: +20 if `de.tilingSupport`
- Resource constraints: `(10 - de.resourceUsage) * 3`
- Gaming preference: `de.gamingFriendly` (no multiplier)
- Beginner-friendliness: `de.beginnerFriendly * 1.5`
- Customization: `de.customizability`

#### ISSUE #8 - LOW: Gaming weight in DE selection is too low
**Location:** Lines 525-527
**Analysis:** For users with `needsGaming > 5`, the gaming score is just `de.gamingFriendly` (no multiplier), while other factors have multipliers of 1.5-3.

**Impact:** A gamer might get Cinnamon (gamingFriendly: 7) over KDE (gamingFriendly: 9) because of other factors.

**Recommendation:** Add multiplier: `de.gamingFriendly * 1.5`

#### ISSUE #9 - MEDIUM: Tiling WM check for beginners is weak
**Location:** Lines 539-542
```typescript
if (profile.experienceLevel < 2 && de.tilingSupport && !de.beginnerFriendly) {
  score -= 15;
}
```
**Analysis:** The condition `!de.beginnerFriendly` is checking for falsy value (0, null, undefined). Since `de.beginnerFriendly` is always a number (2 for i3/sway), this condition is `!2` which is `false`.

**Impact:** Beginners could get tiling WMs recommended because the penalty never applies.

**Recommendation:** Change to `de.beginnerFriendly < 5`:
```typescript
if (profile.experienceLevel < 2 && de.tilingSupport && de.beginnerFriendly < 5) {
  score -= 15;
}
```

**Verdict:** DE matching mostly works but has bugs preventing beginner protection from tiling WMs.

---

## 5. Match Reasons Analysis

### Analysis
The `generateMatchReasons()` function produces German text explaining why a distro was recommended.

**Issues Found:**

#### ISSUE #10 - LOW: German community reason could be misleading
**Location:** Lines 615-617
```typescript
if (profile.needsGermanCommunity && distro.communitySupport >= 8) {
  reasons.push(`Grosse deutschsprachige Community fuer Support und Hilfe.`);
}
```
**Analysis:** This checks `communitySupport` (general community strength) and assumes it implies German community support. But Ubuntu has communitySupport: 10 and a large German community, while Arch has communitySupport: 9 but a massive German wiki.

**Impact:** Minor - the statement is generally true for high-community distros.

**Recommendation:** Consider adding a separate `germanCommunity` field to distros.

**Verdict:** Reasons are generally accurate and helpful.

---

## 6. Deal-Breakers Analysis

### Analysis
The `dealBreakers.ts` file handles critical compatibility warnings.

**Strengths:**
- Properly identifies kernel-level anti-cheat games
- Good software compatibility warnings (Adobe, MS Office)
- Hardware warnings for NVIDIA and old computers
- Severity levels (warning vs critical) are appropriate
- Helpful German explanations with links

**Issues Found:**

#### ISSUE #11 - LOW: `rainbow6` in problematic games list but file has it in `partialGames`
**Location:** `scoringAlgorithm.ts` line 192
```typescript
const problematicGameIds = ['valorant', 'fortnite', 'destiny2', 'pubg', 'rainbow6', 'cod', 'genshin'];
```
**Analysis:** Rainbow Six Siege (`rainbow6`) is listed as problematic here, but in `games.ts` it's in `partialGames` with status 'partial' (offline modes work).

**Impact:** Users who select Rainbow Six Siege get a "doesn't work" warning when it partially works.

**Recommendation:** Remove 'rainbow6' from problematicGameIds OR clarify the warning for partial games.

#### ISSUE #12 - LOW: League of Legends not in problematic game list
**Location:** `scoringAlgorithm.ts` line 192
**Analysis:** League of Legends (`league`) has status 'anticheat' in games.ts but is NOT in the hardcoded `problematicGameIds` list.

**Current List:** `['valorant', 'fortnite', 'destiny2', 'pubg', 'rainbow6', 'cod', 'genshin']`
**Missing:** `league`, `apex`, `fifa`, `roblox`

**Recommendation:** Either add all anticheat games OR use the `getProblematicGamesFromSelection()` helper consistently.

**Verdict:** Deal-breaker detection works but has hardcoded list inconsistencies.

---

## 7. Summary of Issues

| # | Severity | Description |
|---|----------|-------------|
| 1 | CRITICAL | `desktopMatch` weight declared but never used |
| 2 | MEDIUM | Gaming weight (2.5) - ACCEPTABLE |
| 3 | MEDIUM | Garuda/Bazzite missing from NVIDIA bonus list |
| 4 | MEDIUM | Privacy distros shown with needsPrivacy: 7 |
| 5 | LOW | EndeavourOS missing from learning bonus list |
| 6 | HIGH | RAM penalty (-20) not severe enough for extreme cases |
| 7 | MEDIUM | DE RAM check uses wrong MB to GB conversion |
| 8 | LOW | Gaming weight in DE selection too low |
| 9 | MEDIUM | Tiling WM check for beginners never triggers (bug) |
| 10 | LOW | German community reason based on general community score |
| 11 | LOW | rainbow6 listed as problematic but it's partial |
| 12 | LOW | League of Legends and others missing from problematic list |

---

## 8. Recommended Fixes (Priority Order)

### Priority 1 - Critical
1. **Fix tiling WM beginner check** (Issue #9):
   ```typescript
   if (profile.experienceLevel < 2 && de.tilingSupport && de.beginnerFriendly < 5) {
   ```

### Priority 2 - High
2. **Increase RAM penalty or add hard filter** (Issue #6):
   ```typescript
   if (profile.ramAmount && distro.minRAM > profile.ramAmount) {
     score -= 50; // Increased from -20
   }
   if (profile.ramAmount && distro.minRAM > profile.ramAmount * 2) {
     continue; // Skip distro entirely
   }
   ```

### Priority 3 - Medium
3. **Add missing distros to NVIDIA bonus list** (Issue #3):
   ```typescript
   if (['pop-os', 'nobara', 'manjaro', 'linux-mint', 'garuda', 'bazzite'].includes(distro.id)) {
   ```

4. **Sync problematic games list with games.ts** (Issues #11, #12):
   - Use `getProblematicGamesFromSelection()` consistently OR
   - Update hardcoded list to match `problematicGames` array

5. **Lower privacy distro threshold** (Issue #4):
   ```typescript
   if (profile.needsPrivacy < 9) { // Changed from 8
     eligibleDistros = eligibleDistros.filter(d => !['tails', 'qubes'].includes(d.id));
   }
   ```

### Priority 4 - Low
6. **Either use or remove `desktopMatch` weight** (Issue #1)
7. **Fix MB to GB conversion** (Issue #7): Use 1024 instead of 1000
8. **Add gaming multiplier to DE selection** (Issue #8)
9. **Add EndeavourOS to learning bonus** (Issue #5)

---

## 9. Conclusion

The scoring algorithm is fundamentally sound and will produce good recommendations in most cases. The main concerns are:

1. **Bug in tiling WM protection** - Beginners could get i3/sway recommended
2. **Insufficient RAM filtering** - Extreme cases like Qubes for 2GB users
3. **Hardcoded lists out of sync** - NVIDIA distros and problematic games

With the recommended fixes, the algorithm should produce consistently appropriate recommendations for all user profiles tested.
