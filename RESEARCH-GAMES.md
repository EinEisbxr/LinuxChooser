# Linux Gaming Compatibility Research - January 2026

This document provides current information about popular games and their Linux compatibility status. The gaming landscape on Linux changes frequently, so always verify with the latest sources.

---

## Quick Reference Table

| Game | Works on Linux? | Anti-Cheat | ProtonDB | How to Play |
|------|-----------------|------------|----------|-------------|
| Valorant | No | Vanguard (kernel-level) | N/A | Not possible |
| League of Legends | No | Vanguard (kernel-level) | N/A | Not possible |
| Fortnite | No | Easy Anti-Cheat | N/A | Not possible |
| Call of Duty: Warzone | No | RICOCHET (kernel-level) | N/A | Not possible |
| Call of Duty: MW III | No | RICOCHET (kernel-level) | N/A | Not possible |
| PUBG | No | Zakynthos (kernel-level) | N/A | Not possible |
| Apex Legends | No | Easy Anti-Cheat | N/A | Not possible (removed Oct 2024) |
| Destiny 2 | No | BattlEye | N/A | Not possible (ban risk) |
| Rainbow Six Siege | Partial | BattlEye | N/A | Offline only |
| Counter-Strike 2 | Yes | VAC | Native | Native Linux build |
| Minecraft | Yes | None | N/A | Native (Java Edition) |
| GTA V / GTA Online | Partial | BattlEye | Gold | Single-player only (Proton) |
| The Witcher 3 | Yes | None | Platinum | Proton |
| Cyberpunk 2077 | Yes | None | Gold | Proton |
| Elden Ring | Yes | Easy Anti-Cheat | Platinum | Proton (Deck Verified) |
| Baldur's Gate 3 | Yes | None | Gold | Native (Steam Deck) / Proton |
| Hogwarts Legacy | Yes | None | Playable | Proton |
| Overwatch 2 | Yes | Non-kernel | N/A | Proton (via Steam/Battle.net) |
| EA FC 24 | No | EA Anti-Cheat (kernel-level) | N/A | Not possible |
| Roblox | No | Hyperion | N/A | Not possible |

---

## Detailed Game Analysis

### 1. Valorant

**Status: Does NOT work on Linux**

- **Anti-Cheat:** Vanguard (kernel-level, Windows-only)
- **Developer Support for Linux:** No - Riot has explicitly denied Linux support
- **ProtonDB Rating:** N/A
- **How to Play:** Not possible natively

**Details:**
Riot Games' Vanguard anti-cheat requires direct kernel access on Windows and does not work with Wine, Proton, or even virtual machines. Riot has stated that "Linux does not currently afford sufficient ability to attest boot state or kernel modules" and the "difficulty in securing it is only compounded by all the frustrating differences between distributions."

**Workarounds:**
- **Dual Boot:** Install Windows alongside Linux
- **Cloud Gaming:** Services like Shadow or GeForce NOW
- **VM with GPU Passthrough:** Will likely be blocked by Vanguard

**Sources:**
- [GamingOnLinux - Riot Vanguard](https://www.gamingonlinux.com/2024/04/riot-games-talk-vanguard-anti-cheat-for-league-of-legends-and-why-its-a-no-for-linux/)
- [League of Linux - Vanguard FAQ](https://leagueoflinux.org/faq/vanguard/)

---

### 2. League of Legends

**Status: Does NOT work on Linux**

- **Anti-Cheat:** Vanguard (kernel-level, implemented with Patch 14.4 in 2024)
- **Developer Support for Linux:** No - Officially unsupported
- **ProtonDB Rating:** N/A
- **How to Play:** Not possible

**Details:**
League of Legends used to work on Linux via Wine/Lutris before Vanguard was implemented in early 2024. Riot noted that there were "just over 800 Linux users on League" and evaluated the risk "not worth the payoff." The same restrictions that apply to Valorant now apply to LoL.

**Workarounds:**
- **Dual Boot:** Install Windows
- **Cloud Gaming:** GeForce NOW, Shadow

**Sources:**
- [League of Linux - Post Vanguard](https://leagueoflinux.org/post_vanguard/)
- [AltChar - LoL Ends Linux Support](https://www.altchar.com/game-news/league-of-legends-ends-linux-support-with-patch-14.4-due-to-vanguard-anti-cheat-introduction-aIYhf2E68z39)

---

### 3. Fortnite

**Status: Does NOT work on Linux**

- **Anti-Cheat:** Easy Anti-Cheat (Linux support NOT enabled by Epic)
- **Developer Support for Linux:** No - Despite owning EAC, Epic refuses to enable it
- **ProtonDB Rating:** N/A
- **How to Play:** Not possible

**Details:**
Ironically, Epic Games owns Easy Anti-Cheat and has made it compatible with Linux/Proton for other developers. However, they deliberately choose not to enable this support for their own game. Tim Sweeney has cited concerns about kernel customization in Linux making it "easier for cheat utilities to embed themselves."

**Workarounds:**
- **Dual Boot:** Install Windows
- **Cloud Gaming:** GeForce NOW, Xbox Cloud Gaming
- **Android Version:** Available on mobile

**Sources:**
- [GamingOnLinux - Epic Ignoring Linux](https://www.gamingonlinux.com/2025/03/as-epic-games-continue-ignoring-linux-steam-deck-for-fortnite-theyre-putting-it-on-windows-arm/)
- [Epic Online Services - EAC Linux Support](https://onlineservices.epicgames.com/en-US/news/epic-online-services-launches-anti-cheat-support-for-linux-mac-and-steam-deck)

---

### 4. Call of Duty: Warzone

**Status: Does NOT work on Linux**

- **Anti-Cheat:** RICOCHET (kernel-level, Windows-only)
- **Developer Support for Linux:** No
- **ProtonDB Rating:** N/A (Broken status)
- **How to Play:** Not possible

**Details:**
RICOCHET Anti-Cheat requires TPM 2.0, Secure Boot, and Windows kernel access. These requirements fundamentally prevent Linux compatibility. Activision has not made any moves to support Linux/Proton.

**Workarounds:**
- **Dual Boot:** Install Windows
- **Cloud Gaming:** Limited options

**Sources:**
- [Call of Duty RICOCHET Overview](https://www.callofduty.com/ricochet)
- [GamingOnLinux - Warzone](https://www.gamingonlinux.com/itemdb/app/40320/call-of-duty-warzone/)

---

### 5. Call of Duty: Modern Warfare III (2023)

**Status: Does NOT work on Linux**

- **Anti-Cheat:** RICOCHET (kernel-level)
- **Developer Support for Linux:** No
- **ProtonDB Rating:** N/A (Broken status)
- **How to Play:** Not possible

**Details:**
Same restrictions as Warzone. The Steam Deck "lacks the necessary kernel information at its core to get a pass from the anti-cheat."

**Workarounds:**
- **Dual Boot:** Install Windows on Steam Deck or PC
- **Cloud Gaming:** Limited options

**Sources:**
- [Dexerto - MW3 Steam Deck](https://www.dexerto.com/tech/modern-warfare-3-steam-deck-2325614/)
- [GamingOnLinux - MW3](https://www.gamingonlinux.com/itemdb/app/40319/)

---

### 6. PUBG: Battlegrounds

**Status: Does NOT work on Linux**

- **Anti-Cheat:** Zakynthos (proprietary kernel-level anti-cheat)
- **Developer Support for Linux:** No
- **ProtonDB Rating:** N/A (Broken)
- **How to Play:** Not possible

**Details:**
PUBG previously used BattlEye (which supports Linux) but has moved to their proprietary Zakynthos system with kernel drivers that are Windows-only. This effectively blocks all Linux/Steam Deck play.

**Workarounds:**
- **Dual Boot:** Install Windows
- **Cloud Gaming:** Limited options

**Sources:**
- [GamingOnLinux - PUBG Anti-Cheat](https://www.gamingonlinux.com/2021/12/pubgs-newer-anti-cheat-sounds-problematic-for-the-steam-deck-and-linux/)
- [PC Gamer - Steam Deck Anti-Cheat](https://www.pcgamer.com/unless-something-changes-steam-deck-wont-run-destiny-apex-pubg-or-siege/)

---

### 7. Apex Legends

**Status: Does NOT work on Linux (support REMOVED in October 2024)**

- **Anti-Cheat:** Easy Anti-Cheat (Linux support deliberately disabled)
- **Developer Support for Linux:** Removed - Was working, then EA pulled support
- **ProtonDB Rating:** N/A (Broken)
- **How to Play:** Not possible

**Details:**
Apex Legends previously worked on Linux and Steam Deck with Easy Anti-Cheat support enabled. In October 2024, EA made the controversial decision to block Linux entirely, citing that "the openness of the Linux operating systems makes it an attractive one for cheaters and cheat developers." This was a significant blow to the Linux gaming community.

**Workarounds:**
- **Dual Boot:** Install Windows
- **Cloud Gaming:** GeForce NOW, EA Play via cloud

**Sources:**
- [EA Forums - Linux & Anti-Cheat](https://forums.ea.com/blog/apex-legends-game-info-hub-en/dev-team-update-linux--anti-cheat/9468053)
- [NotebookCheck - EA Pulls Apex Linux](https://www.notebookcheck.net/EA-pulls-plug-on-Apex-Legends-Linux-version-due-to-anti-cheat-concerns.911756.0.html)

---

### 8. Destiny 2

**Status: Does NOT work on Linux (BAN RISK)**

- **Anti-Cheat:** BattlEye (supports Linux, but Bungie disabled it)
- **Developer Support for Linux:** No - Bungie actively bans Linux players
- **ProtonDB Rating:** N/A (Broken)
- **How to Play:** Not possible without risk of account ban

**Details:**
BattlEye officially supports Linux and Steam Deck on an opt-in basis. However, Bungie has chosen NOT to enable this support and actively bans players who attempt to play on Linux/Proton. This is a deliberate business decision, not a technical limitation.

**Workarounds:**
- **Dual Boot:** Install Windows (recommended to avoid bans)
- **Cloud Gaming:** GeForce NOW (officially supported)

**WARNING:** Do NOT attempt to play Destiny 2 on Linux - you WILL be banned.

**Sources:**
- [Steam Community - BattlEye Support](https://steamcommunity.com/app/1085660/discussions/0/3111416678592496812/)
- [IT'S FOSS - Bungie Bans](https://itsfoss.gitlab.io/post/want-to-play-destiny-2-on-steam-deck-or-linux-bungie-will-ban-you-if-you-try/)

---

### 9. Rainbow Six Siege

**Status: PARTIAL - Offline modes only**

- **Anti-Cheat:** BattlEye (supports Linux, but Ubisoft disabled it)
- **Developer Support for Linux:** No official support
- **ProtonDB Rating:** N/A for online play
- **How to Play:** Offline modes via Proton

**Details:**
Rainbow Six Siege launches and runs well through Proton. However, online multiplayer is blocked because Ubisoft has not enabled BattlEye's Linux support. Training Grounds, Situations, Shooting Range, and Custom Games work fine.

Ubisoft stated: "We've seen your requests... Our primary concern is the protection of the players' experience... Unfortunately, at the moment, Linux is an open door for cheaters."

Interestingly, Rainbow Six Extraction (another Ubisoft game) DOES have Linux support with BattlEye enabled.

**Workarounds:**
- **Offline Play:** Works via Proton
- **Dual Boot:** For online play

**Sources:**
- [ProtonDB - R6 Siege](https://www.protondb.com/app/359550)
- [Steam Community - Linux Support Discussion](https://steamcommunity.com/app/359550/discussions/0/5875531492227160377)

---

### 10. Counter-Strike 2

**Status: WORKS - Native Linux support**

- **Anti-Cheat:** VAC (Valve Anti-Cheat - works on Linux)
- **Developer Support for Linux:** Yes - Native Linux build
- **ProtonDB Rating:** Native (no Proton needed)
- **How to Play:** Native Linux client

**Details:**
Counter-Strike 2 has a native Linux version. Being a Valve game, it receives first-class Linux support. The game works best on Debian-based distributions. Some users report the native build runs better than Proton, while others have the opposite experience.

**Known Issues:**
- Nvidia users may experience more problems
- Some compositor issues reported
- May need kernel parameter: `sudo sysctl -w vm.max_map_count=16777216`

**Important:** Do NOT run CS2 through Proton on VAC-secured servers - use the native build only to avoid VAC issues.

**Workarounds:**
- Use the native Linux build (default)
- Liquorix kernel recommended for best performance
- AMD GPUs generally work better than Nvidia

**Sources:**
- [ProtonDB - CS2](https://www.protondb.com/app/730)
- [Steam Community - CS2 Linux](https://steamcommunity.com/app/730/discussions/0/4517757938654555582/)

---

### 11. Minecraft

**Status: WORKS - Native Linux support**

- **Anti-Cheat:** None (server-side only)
- **Developer Support for Linux:** Yes - Official native support (Java Edition)
- **ProtonDB Rating:** N/A (Native)
- **How to Play:** Native Java Edition client

**Details:**
Minecraft Java Edition has excellent native Linux support. One purchase works across Windows, macOS, and Linux. The game runs natively without any compatibility layers. Performance is often better on Linux due to lower system overhead.

**Editions:**
- **Java Edition:** Full native Linux support
- **Bedrock Edition:** No official Linux support, but unofficial launchers exist (mcpelauncher)

**Requirements:**
- Java 21 (for Minecraft 1.20.5+ and 1.21+)
- Available via .deb package, Flatpak, or Snap

**Sources:**
- [Arch Wiki - Minecraft](https://wiki.archlinux.org/title/Minecraft)
- [Ubuntu Handbook - Install Minecraft](https://ubuntuhandbook.org/index.php/2024/11/install-minecarft-ubuntu/)

---

### 12. GTA V / GTA Online

**Status: PARTIAL - Single-player only**

- **Anti-Cheat:** BattlEye (for GTA Online, not enabled for Linux)
- **Developer Support for Linux:** No
- **ProtonDB Rating:** Gold (single-player)
- **How to Play:** Single-player via Proton with `-nobattleye` flag

**Details:**
In September 2024, Rockstar added BattlEye kernel anti-cheat to GTA Online, breaking Linux/Steam Deck compatibility for multiplayer. Single-player still works perfectly with the `-nobattleye` launch option.

Despite BattlEye supporting Linux in other games (DayZ, ARK, ArmA 3), Rockstar has chosen not to enable it for GTA Online.

**Workarounds:**
- **Single-player:** Add `-nobattleye` to launch options
- **Use Proton Experimental** (not Proton-GE)
- **GTA Online:** Requires Windows dual boot

**Sources:**
- [NotebookCheck - GTA Online Anti-Cheat](https://www.notebookcheck.net/GTA-V-Online-s-new-kernel-anti-cheat-rug-pull-unnecessarily-breaks-Steam-Deck-and-Linux-compatibility.890175.0.html)
- [GamingOnLinux - Proton Experimental GTA V](https://www.gamingonlinux.com/2025/03/proton-experimental-adds-fixes-for-gta-v-enhanced-and-more-for-linux-steam-deck/)

---

### 13. The Witcher 3: Wild Hunt

**Status: WORKS - Excellent Proton support**

- **Anti-Cheat:** None
- **Developer Support for Linux:** No native version, but works great via Proton
- **ProtonDB Rating:** Platinum
- **How to Play:** Proton

**Details:**
The Witcher 3 has a Platinum rating on ProtonDB and works out of the box with Proton. Both DirectX 11 and DirectX 12 modes work, though DX12 mode may require Proton Experimental.

**Tips:**
- Add `--launcher-skip` to skip the launcher
- Use `-windowed` flag if experiencing fullscreen issues
- Requires Mesa 22+ or Nvidia drivers 510.47+

**Sources:**
- [ProtonDB - Witcher 3](https://www.protondb.com/app/292030)
- [GamingOnLinux - Proton Experimental Witcher 3](https://www.gamingonlinux.com/2022/12/proton-experimental-fixes-the-witcher-3-plus-better-steering-wheel-support/)

---

### 14. Cyberpunk 2077

**Status: WORKS - Excellent Proton support**

- **Anti-Cheat:** None
- **Developer Support for Linux:** No native version, but CD Projekt RED provided early Proton access
- **ProtonDB Rating:** Gold
- **How to Play:** Proton

**Details:**
Cyberpunk 2077 runs very well on Linux through Proton. CD Projekt RED worked with Valve to ensure day-one Proton compatibility. The 2.0 update and Phantom Liberty DLC work on both desktop Linux and Steam Deck.

**Performance:**
- Steam Deck: 30-40 FPS on Low/Medium with FSR2
- Desktop: 60+ FPS at 1440p on High with FSR2
- AMD GPUs often outperform their Windows counterparts

**Tips:**
- Use Proton Experimental or Proton 8.0-1+
- Add `--launcher-skip` to skip the launcher
- FSR2 Quality recommended for Steam Deck

**Sources:**
- [ProtonDB - Cyberpunk 2077](https://www.protondb.com/app/1091500)
- [GamingOnLinux - Cyberpunk 2077 2.0](https://www.gamingonlinux.com/2023/09/cyberpunk-2077-2-0-on-steam-deck-and-desktop-linux/)

---

### 15. Elden Ring

**Status: WORKS - Steam Deck Verified**

- **Anti-Cheat:** Easy Anti-Cheat (Linux support ENABLED by FromSoftware)
- **Developer Support for Linux:** Yes - EAC enabled for Linux
- **ProtonDB Rating:** Platinum
- **How to Play:** Proton (Steam Deck Verified)

**Details:**
Elden Ring is one of the success stories for Linux gaming. FromSoftware enabled Easy Anti-Cheat support for Linux, making both offline and online play work. The game is officially Steam Deck Verified.

**Performance:**
- Steam Deck: Stable 30 FPS recommended (40 FPS possible with tweaks)
- Desktop: Excellent performance with Proton

**Note:** Elden Ring: Nightreign (2025) also works on Linux with EAC enabled.

**Sources:**
- [ProtonDB - Elden Ring](https://www.protondb.com/app/1245620)
- [GamingOnLinux - Elden Ring Nightreign](https://www.gamingonlinux.com/2025/05/elden-ring-nightreign-launches-today-and-works-on-linux-steamos-steam-deck/)

---

### 16. Baldur's Gate 3

**Status: WORKS - Native Steam Deck version**

- **Anti-Cheat:** None
- **Developer Support for Linux:** Yes - Native Steam Deck build (September 2025)
- **ProtonDB Rating:** Gold
- **How to Play:** Native (Steam Deck) or Proton (Desktop)

**Details:**
Larian Studios released a native Steam Deck version in September 2025, providing improved performance, lower loading times, and smoother gameplay compared to Proton. For desktop Linux, the Windows version runs excellently through Proton.

**Important Notes:**
- The native build is Steam Deck-specific and may not work on other Linux distros
- Desktop Linux users should use the Windows version via Proton
- Larian has moved on from the Baldur's Gate franchise, so no dedicated desktop Linux port is expected

**Sources:**
- [Larian Support - Steam Deck Native](https://larian.com/support/faqs/steam-deck-native-version_121)
- [gHacks - BG3 Native Steam Deck](https://www.ghacks.net/2025/09/24/baldurs-gate-3-gets-a-native-build-for-the-steam-deck/)

---

### 17. Hogwarts Legacy

**Status: WORKS - Good Proton support**

- **Anti-Cheat:** None
- **Developer Support for Linux:** No native version
- **ProtonDB Rating:** Playable (Gold-tier)
- **How to Play:** Proton

**Details:**
Hogwarts Legacy runs well on Linux through Proton, though it can be crash-prone. Many users report that it actually runs better on Linux than Windows in some cases.

**Performance:**
- Steam Deck: 30-40 FPS with FSR2
- Desktop: 60 FPS achievable with proper settings

**Recommended Settings:**
- Proton: GE-Proton7-49 or Steam Proton 9.0-2+
- Enable FSR2 Quality with max sharpness
- Lock to 30 FPS on Steam Deck for stability

**Known Issues:**
- Random crashes, especially during loading screens
- Memory errors on some systems
- FPS drops that don't recover (disable upscaling if this occurs)

**Sources:**
- [ProtonDB - Hogwarts Legacy](https://www.protondb.com/app/990080)
- [Steam Community - Linux Tips](https://steamcommunity.com/sharedfiles/filedetails/?id=2932332194)

---

### 18. Overwatch 2

**Status: WORKS - Via Proton**

- **Anti-Cheat:** Non-kernel level (works with Proton)
- **Developer Support for Linux:** No official support, but works
- **ProtonDB Rating:** N/A (works via workaround)
- **How to Play:** Proton via Steam or Battle.net

**Details:**
Overwatch 2 works on Linux and Steam Deck because it does NOT use a kernel-level anti-cheat. The game can be played through Steam (with Proton) or by adding Battle.net as a non-Steam game.

**Performance:**
- Steam Deck: 60 FPS with some drops during combat
- Desktop: Full performance achievable

**Setup Options:**
1. **Steam Version:** Easier setup, just enable Proton
2. **Battle.net:** Add as non-Steam game, use GE-Proton 7-39+

**Sources:**
- [GamingOnLinux - Overwatch 2 Steam](https://www.gamingonlinux.com/2023/07/overwatch-2-heads-to-steam-making-it-even-easier-on-steam-deck-linux/)
- [Steam Deck HQ - Install Guide](https://steamdeckhq.com/tips-and-guides/how-to-install-overwatch-2-using-steam-and-proton-ge/)

---

### 19. EA FC 24 (formerly FIFA)

**Status: Does NOT work on Linux**

- **Anti-Cheat:** EA Anti-Cheat (kernel-level, Windows-only)
- **Developer Support for Linux:** No
- **ProtonDB Rating:** N/A (Broken)
- **How to Play:** Not possible

**Details:**
EA FC 24 uses EA's kernel-level anti-cheat system which does not work on Linux regardless of Proton version. This affects all EA Sports titles using their proprietary anti-cheat, including EA FC 23, EA FC 24, and EA FC 25.

**Workarounds:**
- **Dual Boot:** Install Windows
- **Cloud Gaming:** Limited options
- **Older FIFA Games:** Some older titles may work (check ProtonDB)

**Sources:**
- [ProtonDB - EA FC 24](https://www.protondb.com/app/2195250)
- [EA Answers - Linux Compatibility](https://answers.ea.com/t5/General-Discussion/Steam-Deck-Linux-Proton-compatibility-with-EA-AntiCheat/td-p/11828775)

---

### 20. Roblox

**Status: Does NOT work on Linux**

- **Anti-Cheat:** Hyperion (actively blocks Wine/Proton)
- **Developer Support for Linux:** No - Deliberately blocked
- **ProtonDB Rating:** N/A (Broken)
- **How to Play:** Not possible

**Details:**
Roblox used to work on Linux via Wine until May 2023 when Roblox acquired Byfron Technologies and implemented their Hyperion anti-cheat. This anti-cheat specifically detects and blocks Wine/Proton.

A Roblox staff member stated: "Unfortunately that answer is essentially 'no.' From a personal perspective, a lot of people at Roblox would love to support Linux (including me)."

**Workarounds:**
- **Dual Boot:** Install Windows
- **Virtual Machine:** May work with GPU passthrough (risky)
- **Android Version:** Available on mobile devices
- **Cloud Gaming:** Some services may work

**Sources:**
- [IT'S FOSS - Roblox Linux End](https://itsfoss.com/news/roblox-linux-end/)
- [GamingOnLinux - Hyperion Anti-Cheat](https://www.gamingonlinux.com/anticheat/vendor/hyperion/)
- [WinBuzzer - Roblox Linux Stance](https://winbuzzer.com/2024/03/04/roblox-clarifies-its-stance-on-linux-and-steam-deck-compatibility-amid-user-concerns-xcxwbn/)

---

## Summary by Category

### Games That Work Well on Linux

| Game | Method | Notes |
|------|--------|-------|
| Counter-Strike 2 | Native | Full online support |
| Minecraft (Java) | Native | Full support |
| The Witcher 3 | Proton | Platinum rating |
| Cyberpunk 2077 | Proton | Gold rating |
| Elden Ring | Proton | Deck Verified, online works |
| Baldur's Gate 3 | Native/Proton | Native on Deck |
| Hogwarts Legacy | Proton | Playable, some crashes |
| Overwatch 2 | Proton | Full online support |

### Games That Partially Work

| Game | What Works | What Doesn't |
|------|------------|--------------|
| GTA V | Single-player | GTA Online |
| Rainbow Six Siege | Training/Custom | Online Multiplayer |

### Games Blocked by Anti-Cheat

| Game | Anti-Cheat | Developer Stance |
|------|------------|------------------|
| Valorant | Vanguard | Explicitly no Linux |
| League of Legends | Vanguard | Linux blocked since 2024 |
| Fortnite | Easy Anti-Cheat | Epic refuses to enable |
| Warzone/MW3 | RICOCHET | No Linux support |
| PUBG | Zakynthos | Kernel-level blocks Linux |
| Apex Legends | EAC | Support removed Oct 2024 |
| Destiny 2 | BattlEye | Will ban Linux players |
| EA FC 24 | EA Anti-Cheat | Kernel-level blocks Linux |
| Roblox | Hyperion | Actively blocks Wine |

---

## Resources

- **ProtonDB:** https://www.protondb.com/ - Community compatibility reports
- **GamingOnLinux Anti-Cheat List:** https://www.gamingonlinux.com/anticheat/ - Track anti-cheat status
- **Lutris:** https://lutris.net/ - Game installer and manager
- **Steam Deck HQ:** https://steamdeckhq.com/ - Steam Deck specific guides
- **Are We Anti-Cheat Yet?:** https://areweanticheatyet.com/ - Anti-cheat compatibility tracker

---

## Conclusion

The Linux gaming landscape in January 2026 shows a clear divide:

**The Good:** Single-player games and games with cooperative anti-cheat developers (like FromSoftware with Elden Ring) work excellently through Proton. Valve's own games have native Linux support.

**The Bad:** Competitive multiplayer games, especially free-to-play titles, largely remain unplayable. Kernel-level anti-cheat systems from Riot (Vanguard), Activision (RICOCHET), EA (EA Anti-Cheat), and others fundamentally cannot work with Linux's architecture.

**The Trend:** Some developers have actively removed Linux support (Apex Legends, GTA Online) while others refuse to enable compatible solutions (Fortnite, Destiny 2). The Steam Machine's 2026 launch may push some developers to reconsider, but anti-cheat remains the biggest barrier to Linux gaming adoption.

---

*Last Updated: January 2026*
*Note: This information changes frequently. Always verify with ProtonDB and official sources before making purchasing decisions.*
