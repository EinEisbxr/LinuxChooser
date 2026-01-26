# KDE neon - Detailed Research

**Research Date:** January 2026
**Sources:** Official KDE websites, DistroWatch, community forums, tech reviews

---

## 1. Current Version and Base

### Ubuntu Base
- **Current Base:** Ubuntu 24.04 LTS (Noble Numbat)
- KDE neon rebases on the latest Ubuntu LTS every two years
- The Ubuntu base provides well-tested kernel, system libraries, and core utilities with regular security updates

### Latest Release
- As of January 2026: KDE neon 20260122
- Ships with **KDE Plasma 6.5.5**
- Built on Qt 6.9.2
- KDE Frameworks 6.18
- KDE Gear/Release Service 25.08.1

### 64-bit Only
KDE neon is restricted to 64-bit (x86_64) builds only - no 32-bit support.

---

## 2. KDE Plasma Version - Always Latest?

### Yes - Rolling KDE Updates
KDE neon delivers the **absolute latest** KDE software:
- Plasma desktop updates arrive within **days** of upstream release
- KDE Frameworks updates immediately
- KDE Applications (KDE Gear) updated as released
- Currently ships Plasma 6.5.5 (with 6.6 expected February 2026)

### Update Channels
KDE neon offers three editions:
1. **User Edition** - Stable, slightly delayed releases (recommended for most users)
2. **Testing Edition** - Beta testing of pre-release KDE software
3. **Unstable Edition** - Cutting-edge upstream changes for developers/testers

---

## 3. Rolling KDE on Stable Base - How It Works

### The Hybrid Model
KDE neon employs a **unique hybrid release model**:

**Stable Foundation (Ubuntu LTS):**
- Core system packages (kernel, drivers, base libraries) come from Ubuntu LTS repositories
- Security updates through Ubuntu's established channels
- Base system remains "frozen" for 2 years between LTS upgrades

**Rolling Top Layer (KDE Software):**
- Plasma desktop, KDE Frameworks, and KDE Applications are rolling
- Sourced directly from KDE's own repositories
- Updated continuously as KDE releases new versions
- Only KDE-related packages receive rolling updates

### Selective Library Updates
- Certain system packages (Qt, specific libraries) may be updated ahead of Ubuntu schedule
- Only when required by KDE software dependencies
- This targeted approach keeps most system elements stable

### Trade-off: Non-KDE Apps
- Apps from main Ubuntu repositories can be up to 2 years old
- Some non-KDE apps may break after KDE updates (library version mismatches)
- **Recommended:** Use Flatpak or Snap for non-KDE applications
- Discover software center is configured to show only Flatpak/Snap by default

---

## 4. Official KDE Project - What Does This Mean?

### Developed by KDE e.V.
- KDE neon is developed and maintained by the **KDE community itself**
- Hosted on KDE's official infrastructure (Invent Git repositories)
- Built using KDE's continuous integration tools (Jenkins)
- Contributors can directly commit to neon-specific branches

### History
- Announced at **FOSDEM 2016** by Jonathan Riddell
- Riddell led development for nearly a decade
- In September 2025, Riddell announced his departure from KDE after 25 years
- Current leadership is being restructured within the community

### Important Distinction
KDE officially states: **"KDE neon is NOT 'the KDE distro'"**
- It's described as "one KDE project out of hundreds"
- Primarily a software repository with installable images
- Intended as a showcase/testing ground for KDE software
- KDE developers use it as the reference platform for development

### KDE Linux - The Future?
- In August 2025, KDE announced **"KDE Linux"** (formerly "Project Banana")
- Arch-based, immutable/atomic operating system
- Meant to be the official "reference implementation OS with Plasma"
- Alpha released September 2025 at Akademy
- KDE neon's long-term future is uncertain but development continues

---

## 5. Included Apps - KDE Apps Only?

### Minimalist Default Installation
KDE neon takes a **deliberately minimal approach**:

**Included by Default:**
- KDE Plasma desktop environment
- **Dolphin** - File manager
- **Kate** - Text editor
- **Konsole** - Terminal emulator
- **Firefox** - Web browser (only browser included)
- **VLC** - Media player (only media player)
- **Discover** - Software center

**NOT Included:**
- No office suite (LibreOffice must be installed)
- No calculator (KCalc not included, unlike Kubuntu)
- No email client
- No image editor
- Minimal utility applications

### Philosophy
- Clean, bloat-free installation
- Users install what they need
- Significant post-installation work required
- Compare to Kubuntu which comes with many more pre-installed apps

### Software Sources
- KDE apps from KDE neon repositories (latest versions)
- Non-KDE apps recommended via **Flatpak** or **Snap**
- Discover configured to hide repository apps, showing only Flatpak/Snap

---

## 6. Target Audience

### Primary Audience: KDE Enthusiasts & Developers

**Ideal For:**
- KDE Plasma enthusiasts who want the absolute latest features
- KDE developers testing their work
- Bug reporters who need to verify issues on latest versions
- Users who want "pure" KDE as designed by KDE developers
- Testers willing to experience cutting-edge software
- Users who enjoy customizing and configuring their system

**NOT Ideal For:**
- Linux beginners (requires post-installation setup)
- Users needing mission-critical stability
- Production/business environments
- Users who want a "works out of the box" experience
- Those who need extensive non-KDE software support

### User Profile
- Technical Linux users comfortable with troubleshooting
- Experienced users who understand the rolling/stable hybrid model
- People who value having the newest KDE features immediately
- Users who don't mind potential bugs in exchange for latest software

---

## 7. Unique Selling Points

### vs Kubuntu

| Aspect | KDE neon | Kubuntu |
|--------|----------|---------|
| **Plasma Version** | Always latest (days after release) | Frozen per Ubuntu release |
| **Updates** | Rolling KDE, stable base | Fixed release cycle |
| **Pre-installed Apps** | Minimal | More complete |
| **Stability** | More potential bugs | More stable/tested |
| **Maintainer** | KDE Community | Kubuntu Team |
| **Focus** | Showcase latest KDE | Stable KDE experience |
| **Target** | Enthusiasts, developers | General users, enterprises |
| **Backports** | Not needed | Available for newer KDE |

**Choose KDE neon if:** You want the absolute latest KDE software immediately
**Choose Kubuntu if:** You want stability and a complete out-of-box experience

### vs Fedora KDE

| Aspect | KDE neon | Fedora KDE |
|--------|----------|------------|
| **Base** | Ubuntu LTS | Fedora (6-month cycle) |
| **Kernel** | Older (LTS) | Newer (regular updates) |
| **KDE Version** | Absolute latest | Very recent but not immediate |
| **System Updates** | Stable base | Semi-rolling everything |
| **Package Format** | DEB + Flatpak | RPM + Flatpak |
| **Hardware Support** | Good (older kernel) | Better for new hardware |
| **Nvidia Support** | Unofficial/unsupported | Better integrated |

**Choose KDE neon if:** KDE freshness is your #1 priority
**Choose Fedora KDE if:** You want newer kernel + good KDE + better Nvidia support

### KDE neon's Unique Value
1. **Fastest KDE updates** - No other distro gets KDE software faster
2. **Pure KDE experience** - Software as KDE designed it, no patches
3. **Official KDE testing ground** - What developers use
4. **Ubuntu LTS stability** - Reliable base system
5. **Direct from source** - Packages built by KDE developers

---

## 8. Customization - KDE's Famous Flexibility

### KDE Plasma Customization Overview
KDE Plasma is renowned as the **most customizable desktop environment** in Linux:

### Desktop Customization Options

**Widgets (Plasmoids):**
- Add widgets to desktop or panels
- Move, rotate, resize freely
- Download community widgets in one click
- Examples: Dynamic Wallpaper Engine, Pager, System monitors
- Written in QML for flexibility

**Panels:**
- Create multiple panels
- Position anywhere (top, bottom, sides)
- Resize and configure per-panel
- Add/remove/rearrange widgets within panels

**Themes & Appearance:**
- **Global Themes:** Complete look packages (panel layout, icons, colors, splash screen)
- **Plasma Styles:** Widget and panel appearance
- **Icon Themes:** System-wide icon sets
- **Color Schemes:** Customizable color palettes
- **Window Decorations:** Title bar styles
- **Cursor Themes:** Mouse pointer appearance
- **Splash Screens:** Boot/login animations

**Mix and Match:**
- Use icons from one theme, windows from another
- Complete flexibility in combining elements
- KDE Store offers thousands of free community themes

### Plasma 6 Features (2025/2026)

**Day/Night Theme Switching (Plasma 6.5):**
- Automatic light-to-dark switching based on time
- Location-based sunset/sunrise detection
- Custom schedule support
- Works with any theme pairs

**Other Plasma 6 Features:**
- Improved Wayland support (52.7% adoption in 2025)
- Better multi-monitor handling
- Enhanced overview mode
- Floating panels option
- Improved touchpad gestures

### Installing Themes
- Via System Settings > Appearance > Get New...
- One-click download and install
- Manual installation possible (~/.local/share/plasma/)
- KDE Store: store.kde.org

---

## 9. Honest Downsides

### Stability Concerns

**Bleeding Edge = Potential Bugs:**
- New KDE releases can introduce regressions
- Panel crashes, KWin bugs reported after major updates
- Plasma 6 upgrade caused significant issues for many users:
  - Chrome glitching
  - Logout/power buttons not working
  - Widget failures
  - Scaling issues above 100%
  - Missing icons

**Update Risks:**
- Some updates have broken installations entirely
- System getting stuck on boot reported
- Less testing than traditional distro releases

### Software Limitations

**KDE-Only Focus:**
- Non-KDE software support is limited
- Apps from Ubuntu repos may break after KDE updates
- Library version mismatches common
- Relies on Flatpak/Snap for many apps

**Thin App Layer:**
- Minimal default installation
- Significant setup required after install
- Software center is "very slow"

### Hardware & Driver Issues

**Nvidia Support:**
- Officially **not supported**
- Users install drivers at own risk
- KDE neon team recommends different distro if Nvidia support needed

**Network Issues:**
- Random network connectivity drops reported
- Double wireless password prompts
- Samba share connection problems

**Phone Connectivity:**
- MTP inconsistencies
- KDE Connect detection issues

### Support Limitations

**Narrow Support Scope:**
- Only KDE software officially supported
- Must rely on Ubuntu documentation for system issues
- Smaller community than major distros
- Main developer (Riddell) left project in 2025

### Uncertain Future

**KDE Linux Development:**
- New official KDE distro announced (Arch-based, immutable)
- KDE neon's long-term role uncertain
- Community discussing project's future direction

---

## 10. Installation Difficulty

### Rating: 4/10 (Moderate)

**Installation Process:**
- Uses Calamares installer (same as many distros)
- Generally smooth and polished
- Live USB option available for testing
- Straightforward steps: Language > Keyboard > Network > Partitioning

**Potential Issues:**
- Manual partitioning can be problematic
- Known issues with Calamares network configuration
- Some users report installation failures

**Post-Installation Work:**
- Significant setup required (3-4/10 difficulty itself)
- Must install office suite, multimedia apps, etc.
- Configure Flatpak/Snap for non-KDE apps
- Not "ready to use out of the box"

**Compared to Other Distros:**
- Easier than Arch/Gentoo (1-2/10 vs 7-9/10)
- Similar to Ubuntu installation process
- More post-install work than Linux Mint or Kubuntu
- Requires more Linux knowledge than beginner distros

### System Requirements

**Minimum (Estimated):**
- 64-bit (x86_64) processor required
- 4 GB RAM (8 GB recommended)
- 25-30 GB storage space
- Modern GPU with 3D acceleration

**Note:** Official minimum requirements not formally published

---

## 11. Community & Documentation Quality

### Official Resources

**KDE Community:**
- **KDE Discuss:** discuss.kde.org - Active community forum
- **IRC:** #kde-neon on Libera Chat
- **Mailing List:** mail.kde.org/mailman/listinfo/neon
- **Matrix Rooms:** Real-time chat support
- **Forum:** forum.kde.org/viewforum.php?f=309

**Documentation:**
- **KDE UserBase:** General KDE usage help
- **docs.kde.org:** Complete user documentation
- **community.kde.org/Neon:** Technical wiki
- In-app help (F1 key, Handbook menu items)
- Multiple languages available (not all fully translated)

### Documentation Quality: 7/10

**Strengths:**
- Comprehensive KDE Plasma documentation
- Active community forums
- Good developer documentation
- Multiple support channels

**Weaknesses:**
- KDE neon-specific documentation limited
- Relies on Ubuntu docs for base system
- Some outdated information
- Can be scattered across multiple sites

### Third-Party Resources

- **Kubuntu Forums:** Has KDE neon section
- **DistroWatch:** Reviews and news
- **YouTube:** Many tutorial videos
- **Reddit:** r/kde, r/linux communities

---

## 12. German Community Presence

### German-Language Resources

**Dedicated German Site:**
- **kde-neon.de** - German community portal
- Links to official resources
- German-language information

**KDE in Germany:**
- KDE e.V. headquartered in Berlin
- Akademy 2024 held in Wurzburg, Germany
- Strong German developer presence in KDE community

**German Documentation:**
- docs.kde.org offers German translations
- KDE UserBase partially translated
- Not all documentation available in German

**Community:**
- German users active in KDE forums
- German-speaking Matrix/IRC channels exist
- Part of broader German Linux community (Ubuntu-de, etc.)

### Rating: 6/10 (Moderate German Presence)

**Strengths:**
- Dedicated German website exists
- KDE organization based in Germany
- Some translated documentation

**Weaknesses:**
- Forum/discussions primarily in English
- Not as strong as Ubuntu-de or Manjaro German communities
- Limited German-specific support channels

---

## Summary for Linux Chooser App

### Quick Profile

| Attribute | Value |
|-----------|-------|
| **Type** | Ubuntu LTS + Rolling KDE |
| **Base** | Ubuntu 24.04 LTS |
| **Desktop** | KDE Plasma 6.5+ (latest) |
| **Package Manager** | APT + Flatpak/Snap |
| **Release Model** | Hybrid (stable base + rolling KDE) |
| **Official** | KDE Community Project |
| **Installation** | 4/10 difficulty |
| **Beginner-Friendly** | No |
| **Target User** | KDE enthusiasts, developers |
| **German Support** | Moderate |

### Recommendation Tags
- KDE Enthusiasts
- Plasma Lovers
- Want Latest KDE
- Developers/Testers
- Customization Focused
- Intermediate/Advanced Users

### NOT Recommended For
- Beginners
- Production/Mission-Critical
- Nvidia GPU users (officially)
- "Works out of box" expectation
- Stability-first users

### Key Differentiator
"The fastest way to get the latest KDE Plasma - directly from KDE developers, on a stable Ubuntu base."
