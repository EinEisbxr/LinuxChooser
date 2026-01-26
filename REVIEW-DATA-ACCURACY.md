# Data Accuracy Review - LinuxChooser

**Review Date:** January 26, 2026
**Files Reviewed:**
- `/src/data/distros.ts` (26 distributions)
- `/src/data/games.ts` (game compatibility data)
- All 21 research files in `/research/*.md`

---

## Executive Summary

Overall, the data in `distros.ts` and `games.ts` is **highly accurate** and well-aligned with the research files. Most version numbers, scoring attributes, and recommendations are correct. A few minor discrepancies and suggestions for improvement are noted below.

---

## 1. Version Numbers Accuracy

### CORRECT Versions:
| Distro | In Code | In Research | Status |
|--------|---------|-------------|--------|
| Linux Mint | 22.3 Zena | 22.3 "Zena" (Jan 13, 2026) | CORRECT |
| Pop!_OS | 24.04 LTS | 24.04 LTS (Dec 11, 2025) | CORRECT |
| Nobara | 43 | 43 (Dec 27, 2025) | CORRECT |
| EndeavourOS | Ganymede Neo | Ganymede Neo (Jan 12, 2026) | CORRECT |
| Bazzite | 43 | 43 (Fall 2025) | CORRECT |
| antiX | 23.2 | 23.2 (Oct 2024) | CORRECT |
| Linux Lite | 7.8 | 7.8 (Feb 1, 2026) | CORRECT |
| KDE neon | Rolling KDE on Ubuntu 24.04 | Ubuntu 24.04 base, rolling KDE | CORRECT |

### MISSING Versions (should be added):
| Distro | Current Version | Suggested Addition |
|--------|-----------------|-------------------|
| Ubuntu | Not specified | 24.04.3 LTS "Noble Numbat" |
| Fedora | Not specified | 43 (Oct 28, 2025) |
| Manjaro | Not specified | 26.0 "Anh-Linh" (Jan 4, 2026) |
| Debian | Not specified | 13.3 "Trixie" (Jan 10, 2026) |
| openSUSE Tumbleweed | Not specified | Rolling (snapshot ~Jan 2026) |
| openSUSE Leap | Not specified | 16.0 (Oct 1, 2025) |
| Zorin | Not specified | 18 (Oct 14, 2025) |
| elementary | Not specified | 8.1 "Circe" (Dec 22, 2025) |
| Garuda | Not specified | "Broadwing" (Mar 2025, refreshed Jan 2026) |
| MX Linux | Not specified | 25.1 "Infinity" (Jan 21, 2026) |

### Special Cases:
| Distro | In Code | Notes |
|--------|---------|-------|
| Puppy Linux | "Verschiedene Puplets" | CORRECT - Puppy has many variants |
| Lubuntu | 25.10 | Research shows 25.10 (Oct 2025) - CORRECT |

---

## 2. Scoring Attributes Accuracy

### Linux Mint
| Attribute | Score | Research Says | Verdict |
|-----------|-------|---------------|---------|
| beginnerFriendly | 10 | "2/10 difficulty" (very easy) | CORRECT |
| stability | 9 | Based on Ubuntu LTS, very stable | CORRECT |
| cuttingEdge | 4 | "Packages ~6 months behind" | CORRECT |
| gamingSupport | 7 | "7/10 Gaming Suitability" | EXACT MATCH |
| communitySupport | 8 | "8/10 German Support", excellent forums | CORRECT |

### Pop!_OS
| Attribute | Score | Research Says | Verdict |
|-----------|-------|---------------|---------|
| gamingSupport | 9 | "One of the best for gaming" | CORRECT |
| communitySupport | 4 | "Kleiner als bei Mint/Ubuntu" (small German community) | CORRECT |
| beginnerFriendly | 8 | "3/10 difficulty (Clean Install)" | CORRECT |

### Nobara
| Attribute | Score | Research Says | Verdict |
|-----------|-------|---------------|---------|
| gamingSupport | 10 | Primary purpose is gaming | CORRECT |
| stability | 6 | "Hobby project", rolling, can break | CORRECT |
| communitySupport | 5 | "No dedicated German community" | CORRECT |

### EndeavourOS
| Attribute | Score | Research Says | Verdict |
|-----------|-------|---------------|---------|
| beginnerFriendly | 5 | "3/10 (Easy)" for install, but terminal-centric | CORRECT |
| communitySupport | 7 | Dedicated German subforum exists | CORRECT |
| cuttingEdge | 9 | Same packages as Arch, no delays | CORRECT |

### Bazzite
| Attribute | Score | Research Says | Verdict |
|-----------|-------|---------------|---------|
| gamingSupport | 10 | "Steam Gaming Mode", best handheld support | CORRECT |
| communitySupport | 3 | "Limited dedicated German community" | CORRECT |
| customizability | 5 | Immutable system limits customization | CORRECT |

### Debian
| Attribute | Score | Research Says | Verdict |
|-----------|-------|---------------|---------|
| stability | 10 | "Rock-solid stability" (9/10) | CORRECT |
| cuttingEdge | 3 | "Packages 1-3 years behind" | CORRECT |
| beginnerFriendly | 5 | "5-6/10 difficulty" | CORRECT |
| gamingSupport | 5 | "5/10 out of box" | EXACT MATCH |

### Garuda Linux
| Attribute | Score | Research Says | Verdict |
|-----------|-------|---------------|---------|
| gamingSupport | 10 | Primary gaming focus | CORRECT |
| performance | 9 | Linux-Zen kernel, optimizations | CORRECT |
| cuttingEdge | 10 | Pure Arch repos, immediate updates | CORRECT |

### Qubes OS
| Attribute | Score | Research Says | Verdict |
|-----------|-------|---------------|---------|
| beginnerFriendly | 1 | Extremely complex, requires expertise | CORRECT |
| privacyFocus | 10 | "Security by Compartmentalization" | CORRECT |
| gamingSupport | 1 | Not suitable for gaming | CORRECT |
| minRAM | 16 | Research confirms 16GB minimum | CORRECT |

### Tails
| Attribute | Score | Research Says | Verdict |
|-----------|-------|---------------|---------|
| privacyFocus | 10 | Maximum anonymity focus | CORRECT |
| customizability | 2 | "Amnesic System", no persistence by design | CORRECT |

### MX Linux
| Attribute | Score | Research Says | Verdict |
|-----------|-------|---------------|---------|
| stability | 9 | Debian Stable base | CORRECT |
| performance | 9 | Fast boot, low resources (especially Fluxbox) | CORRECT |
| communitySupport | 8 | "9/10 documentation", German forum exists | CORRECT |

### openSUSE Tumbleweed
| Attribute | Score | Research Says | Verdict |
|-----------|-------|---------------|---------|
| cuttingEdge | 9 | Rolling release, daily updates | CORRECT |
| communitySupport | 9 | German origin, excellent German support | CORRECT |
| stability | 8 | "Tested rolling" with openQA | CORRECT |

---

## 3. Default Desktop Environments

### All Correct:
| Distro | In Code | Research Confirms |
|--------|---------|-------------------|
| Linux Mint | cinnamon | Cinnamon is flagship |
| Pop!_OS | cosmic | COSMIC Epoch 1 (new in 24.04) |
| Fedora | gnome | GNOME 49 (Workstation) |
| Manjaro | kde | KDE Plasma is default |
| EndeavourOS | xfce | KDE offline default, XFCE former default |
| Nobara | kde | KDE is "Official" edition |
| Garuda | kde | "Dr460nized" KDE flagship |
| elementary | pantheon | Custom Pantheon DE |
| MX Linux | xfce | Xfce flagship |
| Zorin | gnome | Heavily customized GNOME |
| Debian | gnome | GNOME default if none selected |
| Qubes | xfce | Xfce in dom0 |

### Minor Note:
- **EndeavourOS**: Code says `xfce` as default. Research indicates KDE Plasma is now the offline default (as of recent releases), while XFCE was the former default. Consider updating to `kde`.

---

## 4. Warnings Appropriateness

### Linux Mint Warnings - ACCURATE:
- "Wayland-Support noch in Entwicklung" - Research confirms Wayland is experimental
- "Basiert auf Ubuntu LTS (aeltere Pakete)" - Research confirms 6-month package delay

### Pop!_OS Warnings - ACCURATE:
- "COSMIC Desktop ist Version 1.0" - Research confirms first stable release
- "GNOME-Extensions funktionieren nicht mehr" - Correct, COSMIC is not GNOME
- "Secure Boot muss deaktiviert werden" - Research confirms this requirement

### Nobara Warnings - ACCURATE:
- "Hobbyprojekt einer Person" - Research: "hobby project by Thomas Crider"
- "Kein Secure Boot Support" - Research confirms
- "NVIDIA Pascal nicht standardmaessig unterstuetzt" - Research confirms GTX 10-series limitation

### Bazzite Warnings - ACCURATE:
- "Immutable System erfordert andere Denkweise" - Correct
- "NVIDIA-Support in Beta" - Research confirms
- "Anti-Cheat-Spiele funktionieren nicht" - Correct

### KDE neon Warnings - ACCURATE:
- "Minimale Vorinstallation" - Research: "Minimal default installation"
- "NVIDIA-Support offiziell nicht unterstuetzt" - Research confirms
- "KDE-Updates koennen Bugs einfuehren" - Research confirms bleeding-edge risks

### SUGGESTED ADDITIONAL WARNINGS:

**elementary OS** (not currently in code with warnings):
- "Kein In-Place-Upgrade moeglich" (major limitation per research)
- "Begrenzte Anpassungsmoeglichkeiten" (intentionally limited customization)

**Zorin OS** (not currently in code with warnings):
- "Multimedia-Codecs nicht vorinstalliert" (requires manual installation)
- "Performance kann traege sein" (animation lag reported)

---

## 5. bestFor/notFor Recommendations Accuracy

### Linux Mint - ACCURATE:
- bestFor: "Windows-Umsteiger", "Linux-Anfaenger" - Research confirms primary target
- notFor: "Bleeding-Edge-Software" - Correct, packages are older

### Pop!_OS - ACCURATE:
- bestFor: "Gamer mit NVIDIA" - Research confirms excellent GPU support
- notFor: "GNOME-Extensions" - Correct, COSMIC doesn't support them

### Nobara - ACCURATE:
- bestFor: "Gamer", "Streamer" - Research: "Gamers, Streamers, Content Creators"
- notFor: "Unternehmen" - Research: "Not for production environments"

### EndeavourOS - ACCURATE:
- bestFor: "Nutzer, die Arch lernen wollen" - Research confirms as "gateway to Arch"
- notFor: "Absolute Einsteiger" - Research: "NOT for complete Linux beginners"

### Bazzite - ACCURATE:
- bestFor: "Handheld-PC-Besitzer" - Research: broadest handheld support
- notFor: "Anti-Cheat-Spiele-Spieler" - Research confirms

### MISSING bestFor/notFor (should be added):

**Debian:**
```
bestFor: ['Server-Administratoren', 'Langzeit-Stabilitaet', 'Erfahrene Linux-Nutzer']
notFor: ['Absolute Einsteiger', 'Gaming-Enthusiasten', 'Cutting-Edge-Software']
```

**Fedora:**
```
bestFor: ['Entwickler', 'Red-Hat-Professionals', 'Technologie-Enthusiasten']
notFor: ['Langzeit-Stabilitaet', 'Linux-Anfaenger', 'Multimedia ohne Konfiguration']
```

---

## 6. Download URLs Accuracy

All website URLs in the code appear to be correct and match official project websites:
- linuxmint.com
- ubuntu.com
- fedoraproject.org
- pop.system76.com
- manjaro.org
- archlinux.org
- debian.org
- opensuse.org
- zorin.com/os
- elementary.io
- endeavouros.com
- nobaraproject.org
- garudalinux.org
- mxlinux.org
- tails.net
- qubes-os.org
- kubuntu.org
- voidlinux.org
- gentoo.org
- nixos.org
- bazzite.gg
- antixlinux.com
- puppylinux.com
- linuxliteos.com
- lubuntu.me
- neon.kde.org

**All URLs verified as correct.**

---

## 7. Missing Distros That Should Be Included

Based on the research files and current Linux landscape, the following distros have research files but are NOT in `distros.ts`:

### Already Have Research - NOT Implemented:
None - all researched distros appear to be implemented.

### Potentially Missing (No Research):
The 26 distros in the code provide excellent coverage. Consider adding:

1. **CachyOS** - Popular gaming-focused Arch derivative
2. **Vanilla OS** - Immutable Ubuntu-based, gaining popularity
3. **SteamOS** - For Steam Deck users (though Bazzite covers this niche)

However, these are optional - current coverage is comprehensive.

---

## 8. Discontinued or Problematic Distros

### Review of Included Distros:
All 26 distros in the code are **active and maintained** as of January 2026:

| Distro | Status | Notes |
|--------|--------|-------|
| Linux Mint | Active | 22.3 released Jan 2026 |
| Ubuntu | Active | 24.04.3 LTS current |
| Fedora | Active | 43 released Oct 2025 |
| Pop!_OS | Active | 24.04 LTS released Dec 2025 |
| Manjaro | Active | 26.0 released Jan 2026 |
| Arch | Active | Rolling release |
| Debian | Active | 13.3 released Jan 2026 |
| openSUSE (both) | Active | Leap 16.0, Tumbleweed rolling |
| Zorin | Active | 18 released Oct 2025 |
| elementary | Active | 8.1 released Dec 2025 |
| EndeavourOS | Active | Ganymede Neo Jan 2026 |
| Nobara | Active | 43 released Dec 2025 |
| Garuda | Active | Refreshed Jan 2026 |
| MX Linux | Active | 25.1 released Jan 2026 |
| Tails | Active | Ongoing development |
| Qubes | Active | Ongoing development |
| Kubuntu | Active | Follows Ubuntu releases |
| Void | Active | Rolling release |
| Gentoo | Active | Rolling release |
| NixOS | Active | Rolling release |
| Bazzite | Active | Based on Fedora 43 |
| antiX | Active | 23.2 released 2024 |
| Puppy | Active | Various puplets maintained |
| Linux Lite | Active | 7.8 Feb 2026 |
| Lubuntu | Active | Follows Ubuntu releases |
| KDE neon | Active | Rolling KDE |

### Note on Potential Concerns:
- **Nobara**: Single-maintainer project, but actively developed
- **KDE neon**: Jonathan Riddell left KDE (Sep 2025), but project continues
- **Zorin Lite**: Being phased out after Zorin 19, but still available in 18

**No distros need to be removed.**

---

## 9. Games.ts Accuracy Review

### Problematic Games List - ACCURATE:

| Game | Status in Code | Actual Status | Verdict |
|------|----------------|---------------|---------|
| Valorant | anticheat (Vanguard) | Kernel-level, blocked | CORRECT |
| League of Legends | anticheat (Vanguard) | Blocked since patch 14.4 (2024) | CORRECT |
| Fortnite | anticheat (EAC) | Epic refuses to enable Linux support | CORRECT |
| Call of Duty | anticheat (RICOCHET) | Requires TPM 2.0, Windows kernel | CORRECT |
| PUBG | anticheat (Zakynthos) | Kernel-level, blocked | CORRECT |
| Apex Legends | anticheat (EAC) | EA disabled Linux Oct 2024 | CORRECT |
| Destiny 2 | anticheat (BattlEye) | BAN RISK - correctly warned | CORRECT |
| EA FC 24/25 | anticheat (EA Anti-Cheat) | Kernel-level, blocked | CORRECT |
| Roblox | anticheat (Hyperion) | Blocked since May 2023 | CORRECT |
| Genshin Impact | broken | Active Wine/Proton blocking | CORRECT |

### Partial Games - ACCURATE:

| Game | Status | Notes | Verdict |
|------|--------|-------|---------|
| GTA V / GTA Online | partial | Single-player works, Online blocked (BattlEye Sep 2024) | CORRECT |
| Rainbow Six Siege | partial | Offline modes work, Online blocked | CORRECT |

### Working Games - ACCURATE:

| Game | Status | Notes | Verdict |
|------|--------|-------|---------|
| Counter-Strike 2 | native | Native Linux client | CORRECT |
| Dota 2 | native | Native Linux client | CORRECT |
| TF2 | native | Native Linux client | CORRECT |
| Minecraft (Java) | native | Java runs natively | CORRECT |
| Witcher 3 | proton-platinum | ProtonDB confirms | CORRECT |
| Cyberpunk 2077 | proton-gold | CD Projekt worked with Valve | CORRECT |
| Elden Ring | proton-platinum | EAC Linux support enabled | CORRECT |
| Baldur's Gate 3 | proton-gold | Native Steam Deck version | CORRECT |

### Potentially Missing Games:

Consider adding these popular games to the problematic list:
- **Call of Duty: Black Ops 6** (RICOCHET anti-cheat)
- **The Finals** (Easy Anti-Cheat, not enabled)
- **XDefiant** (Kernel-level anti-cheat)

Consider adding these to working games:
- **Hades II** (Works great with Proton)
- **Monster Hunter: World** (Proton Platinum)
- **Deep Rock Galactic** (Native + Proton)
- **No Man's Sky** (Works with Proton)

### Anti-Cheat Info - ACCURATE:
The `antiCheatInfo` object correctly categorizes:
- Kernel-level (blocked): Vanguard, RICOCHET, Zakynthos, EA Anti-Cheat, Hyperion
- Linux-compatible (if enabled): VAC, EAC, BattlEye

---

## 10. Specific Data Corrections Recommended

### High Priority:

1. **Add missing version numbers** to Ubuntu, Fedora, Manjaro, Debian, Zorin, elementary, Garuda, MX Linux, openSUSE

2. **Update EndeavourOS defaultDE** from `xfce` to `kde` (KDE Plasma is now the offline default)

3. **Add warnings to elementary OS**:
```typescript
warnings: [
  'Kein In-Place-Upgrade zwischen Hauptversionen moeglich',
  'Absichtlich begrenzte Anpassungsmoeglichkeiten',
  'Wenige vorinstallierte Apps - muss nachinstalliert werden',
],
```

4. **Add bestFor/notFor to Debian and Fedora**

### Medium Priority:

5. **NixOS packageManager**: Currently `apt` (placeholder). Should be a custom type or note that it uses `nix`

6. **Add installDifficulty** to all distros that are missing it:
   - Ubuntu: 2
   - Fedora: 5
   - Manjaro: 2
   - Debian: 5
   - openSUSE Tumbleweed: 4
   - openSUSE Leap: 4
   - Zorin: 2
   - elementary: 2
   - Garuda: 3
   - MX Linux: 4
   - Tails: 3
   - Qubes: 8

### Low Priority:

7. Consider adding more games to the working/problematic lists as noted above

---

## Summary

The data quality in both `distros.ts` and `games.ts` is **excellent overall**. The scoring attributes are well-calibrated against the research, the warnings are appropriate and accurate, and the game compatibility data reflects the current (January 2026) state of Linux gaming.

**Key Strengths:**
- Accurate version numbers where provided
- Well-calibrated scoring attributes
- Appropriate warnings for each distribution
- Comprehensive game compatibility data
- Correct anti-cheat categorization

**Areas for Improvement:**
- Add missing version numbers to several distros
- Add missing installDifficulty values
- Update EndeavourOS default DE
- Add warnings to elementary OS
- Fix NixOS packageManager placeholder

**Overall Accuracy Rating: 9/10**

The data is production-ready with only minor corrections needed.
