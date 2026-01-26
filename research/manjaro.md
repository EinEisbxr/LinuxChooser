# Manjaro Linux - Comprehensive Research

**Research Date:** January 2026
**Current Version:** Manjaro 26.0 "Anh-Linh" (Released January 4, 2026)

---

## 1. Current Version and Release Information

### Manjaro 26.0 "Anh-Linh"
- **Release Date:** January 4, 2026
- **Kernel:** Linux 6.18 LTS (default), with 6.12 LTS and 6.6 LTS available
- **Major Changes:**
  - Wayland is now the default session for KDE Plasma and GNOME editions
  - X11 support dropped for KDE Plasma 6.5 and GNOME 49 (Xfce still supports X11)
  - NVIDIA 590 drivers (drops pre-Turing GPU support)
  - Mesa 25.3.2 graphics drivers
  - Firefox 146.0.1, LibreOffice 25.8.4

### Previous Version
- Manjaro 25.0 "Zetar" (April 15, 2025) with Linux 6.12 LTS, GNOME 48, KDE Plasma 6.13

---

## 2. Available Editions

### Official Editions (Maintained by Manjaro Team)
| Edition | Desktop Environment | Version in 26.0 | Session Default |
|---------|---------------------|-----------------|-----------------|
| **Xfce** (Flagship) | Xfce | 4.20 | X11 supported |
| **KDE Plasma** | KDE Plasma | 6.5 | Wayland only |
| **GNOME** | GNOME | 49 | Wayland only |

All official editions available in **Full** and **Minimal** variants.

### Community Editions (Maintained by Community Members)
| Edition | Type | Notes |
|---------|------|-------|
| **Cinnamon** | Desktop Environment | Traditional desktop experience |
| **i3** | Tiling Window Manager | Keyboard-driven workflow |
| **Sway** | Tiling Window Manager | Wayland-native i3 alternative |

### Additional Desktop Option
- **COSMIC 1.0.1** - System76's new Rust-based desktop environment included in 26.0

---

## 3. Arch Linux Relationship

### How Manjaro Differs from Arch
Manjaro is developed **independently from Arch** by a completely different team. The official documentation states that differences between Manjaro and Arch are "far greater than the differences between Ubuntu and its many derivatives like Mint and Zorin."

### Three-Branch Package System
| Branch | Description | Delay from Arch |
|--------|-------------|-----------------|
| **Unstable** | Synced several times daily with Arch | ~0 days |
| **Testing** | Packages tested by community users | ~1 week |
| **Stable** | Vetted by development team | ~2-4 weeks |

### Stability Philosophy
- Packages undergo testing in Unstable/Testing before reaching Stable users
- Problematic packages caught at Arch Stable / Manjaro Unstable stage never reach Manjaro Stable
- Manjaro Stable users effectively benefit from Arch users as additional testers
- Uses **own dedicated repositories** (not Arch repos, except AUR)

### Switching Branches
Users can switch between branches via Manjaro Settings Manager or command line, allowing choice between bleeding-edge (Unstable) or stability-focused (Stable) experiences.

---

## 4. Pamac - GUI Package Manager

### Overview
Pamac (Add/Remove Software) is Manjaro's native graphical package manager built on libalpm.

### Features
- **Multi-source support:** Official repos, AUR, Flatpak, Snap
- **User-friendly GUI:** Search, install, update with mouse clicks
- **Available variants:**
  - `pamac-gtk3` - GTK3 version
  - `pamac-gtk` - GTK4 version
  - `pamac-cli` - Terminal version
  - `pamac-tray-icon-plasma` - System tray for Plasma users

### AUR Support
**To enable AUR:**
1. Open Pamac > Preferences > Third Party
2. Toggle AUR button
3. Optionally enable "Check for updates" for AUR packages
4. Install build tools: `pamac install base-devel git`

### Important Warnings
- **AUR packages are user-created, not officially supported**
- Quality not guaranteed; may harm system or fail to build
- Maintaining AUR packages is the user's responsibility
- PKGBUILDs created by Arch users for Arch Linux, not specifically Manjaro

### Recent Issues (2026)
- Some compatibility issues with libalpm v16 update
- Build failures reported during manpage generation with a2x/xmllint

---

## 5. MHWD - Manjaro Hardware Detection

### Overview
MHWD (Manjaro Hardware Detection) is a unique tool that automates hardware detection and driver management.

### Key Features
- Automatic detection of PCI and USB hardware
- Graphics driver management (proprietary and open-source)
- Pre-installed driver configurations
- Integration with Manjaro Settings Manager (GUI)

### Common Commands
```bash
# Auto-install best free driver for graphics
sudo mhwd -a pci free 0300

# Auto-install best proprietary driver for graphics
sudo mhwd -a pci nonfree 0300

# List installed drivers
mhwd -li

# List available drivers for your hardware
mhwd -l
```

### Graphics Driver Notes (26.0)
- NVIDIA 590 driver included (drops pre-Turing support)
- Mesa 25.3.2 for AMD/Intel
- Manjaro Settings Manager refined for multi-GPU setups
- MHWD handles driver switches intuitively

### Driver Naming Convention
All graphics drivers have prefix `video-` (e.g., `video-nvidia`, `video-linux`)

---

## 6. Gaming Support

### Why Manjaro is Good for Gaming
- **Rolling release** = Latest Proton, Mesa, kernel updates
- **AUR access** = Obscure emulators, game mods, utilities
- **MHWD** = Easy NVIDIA/AMD driver installation
- **Steam Deck recommended** = Valve recommends Manjaro KDE for Steam Deck developers

### Driver Requirements for Gaming
| GPU | Requirement |
|-----|-------------|
| AMD | Mesa 20.3+ |
| Intel | Mesa 21.2+ |
| NVIDIA | 515.43.04+ with `nvidia-drm.modeset=1` |

### Installing Steam
```bash
# Via Pamac
pamac install steam

# Via Snap
sudo snap install steam
```

### Hybrid Graphics (Laptops)
- Automatic setup for Intel/AMD integrated + discrete GPU
- Use `DRI_PRIME=1` prefix to run applications on discrete GPU
- Example: `DRI_PRIME=1 steam`

### Gaming Performance
- Generally matches or exceeds Windows for compatible games
- Latest UE5 games reported working
- Some users report higher FPS on Linux

### Potential Issues
- Vulkan dependency issues may cause games to quit silently
- Bleeding-edge packages can occasionally break compatibility
- Careful package management recommended

---

## 7. Target Audience - Who Is Manjaro REALLY For?

### Ideal Users

**1. Linux Beginners Who Want More**
- Want Arch-based experience without Arch complexity
- Transitioning from Windows/macOS
- Prefer GUI tools over terminal

**2. Intermediate Users**
- Comfortable with occasional terminal use
- Want rolling release without Arch maintenance
- Value pre-configured, working system

**3. Developers and Tech Enthusiasts**
- Need latest software versions
- Appreciate AUR for development tools
- Steam Deck game developers (officially recommended by Valve)

**4. Gamers**
- Want latest drivers and Proton
- Need easy NVIDIA driver management
- Value performance over absolute stability

### Who Should NOT Use Manjaro

- **Mission-critical servers** - Rolling release risks
- **Pure Arch enthusiasts** - "Not real Arch"
- **Users needing absolute stability** - Updates can break things
- **AUR power users** - Package delays can cause compatibility issues
- **Users who hate any terminal** - Occasional CLI needed for issues

### The Honest Reality
Manjaro targets users who want **Arch benefits** (rolling release, AUR, fresh packages) with **Ubuntu convenience** (GUI tools, works out of box, driver management).

---

## 8. Unique Selling Points

### vs EndeavourOS

| Aspect | Manjaro | EndeavourOS |
|--------|---------|-------------|
| **Arch Proximity** | Far from Arch | Close to pure Arch |
| **Package Delay** | 2-4 weeks behind | Immediate from Arch |
| **GUI Tools** | Comprehensive (Pamac, MHWD, Settings Manager) | Minimal (Welcome app, few helpers) |
| **Driver Setup** | Automatic via MHWD | Manual, terminal-based |
| **Desktop Options** | 3 official + 3 community | 9+ official options |
| **Target User** | Wants things to work | Wants to learn Arch way |
| **Resource Usage** | Slightly higher | Lighter, faster boot |

**Choose Manjaro over EndeavourOS if:** You want polished experience, automatic hardware setup, and stability through delayed packages.

**Choose EndeavourOS over Manjaro if:** You want closer-to-Arch experience, immediate updates, minimal bloat, and learning opportunity.

### vs Ubuntu

| Aspect | Manjaro | Ubuntu |
|--------|---------|--------|
| **Base** | Arch Linux | Debian |
| **Release Model** | Rolling | Fixed (LTS every 2 years) |
| **Package Manager** | Pacman + Pamac | APT |
| **Software Freshness** | Cutting edge | Stable, older versions |
| **AUR Access** | Yes (huge advantage) | No equivalent |
| **Server Use** | Not recommended | Excellent (LTS) |
| **Stability** | Good but updates can break | Very stable |
| **Performance** | Generally faster | Reliable |
| **Community Ranking (Slant)** | #8 | #23 |

**Choose Manjaro over Ubuntu if:** You want latest software, AUR access, better performance, rolling updates.

**Choose Ubuntu over Ubuntu if:** You need stability, server deployment, LTS support, massive corporate backing.

---

## 9. Honest Downsides and Controversies

### Technical Issues

**AUR Compatibility Problems**
- Manjaro's 2-4 week package delay causes AUR issues
- AUR packages built for current Arch libraries
- Manjaro stable may have older libraries = build failures
- "Partial upgrade" state is problematic

**Partial Upgrade Risks**
- Installing single packages without full system sync causes dependency mismatches
- Mixing AUR helpers (yay, pamac) can create unsynchronized states
- **Solution:** Always use `sudo pacman -Syu` before installing packages

### Historical Controversies

**SSL Certificate Incidents**
- Multiple occasions of letting SSL certificates expire
- Once advised users to set system clock back to bypass expired certificate

**Security Concerns**
- Critics claim security advisories forwarded without review
- Critical issues allegedly left in stable repos longer than Arch

**Upstream Contribution**
- Criticized for contributing "nothing upstream"
- Takes from Arch but doesn't give back

**Unstable Kernel Incident**
- Shipped unstable kernel build that caused user problems
- Damaged trust with community

**Financial Transparency Questions**
- Questions about Manjaro GmbH company finances
- Treasure controversy in past

### Documented Criticism Resources
- GitHub repository "manjarno" - "Reasons for which I don't use Manjaro anymore"
- Rentry.co/manjaro-controversies - compiled list of issues

### Community Response
Manjaro forum acknowledges criticism exists. Most issues are from 2019-2022 era. Recent years show improved practices, but skepticism remains in broader Linux community.

---

## 10. Installation Difficulty

### Rating: 2/10 (Very Easy)

### Why It's Easy
- **GUI Installer (Calamares):** Same installer as many beginner distros
- **Hardware Detection:** MHWD pre-configures drivers
- **Pre-configured:** Desktop ready to use immediately
- **"Install Alongside":** Easy dual-boot option for beginners

### Installation Options
| Method | Difficulty | Who It's For |
|--------|------------|--------------|
| Calamares GUI | 2/10 | Everyone |
| CLI Installer | 5/10 | Advanced users |
| Manjaro Architect | 6/10 | Customization enthusiasts |

### Installation Steps (GUI)
1. Boot from USB
2. Click "Install"
3. Choose language, timezone, keyboard
4. Partition (or select "Install Alongside")
5. Create user account
6. Wait ~15-20 minutes
7. Reboot into working system

### Comparison
- Easier than: Arch (9/10), Gentoo (10/10), Debian minimal (6/10)
- Similar to: Ubuntu (2/10), Fedora (2/10), Linux Mint (2/10)
- Slightly harder than: Nothing - it's one of the easiest

---

## 11. Community and Documentation Quality

### Documentation

**Manjaro Wiki**
- Comprehensive, community-driven
- Covers installation to advanced configuration
- Continuously updated for new releases
- Guidelines ensure quality and consistency
- **Quality:** Good, but not as extensive as Arch Wiki

**Arch Wiki Access**
- Manjaro users can reference Arch Wiki for most things
- ~90% of Arch Wiki applies to Manjaro
- Caveat: Package names/locations may differ slightly

### Community Forums

**Official Forum (forum.manjaro.org)**
- Very friendly and welcoming
- Newcomers and experienced users both welcome
- Developers participate directly
- Can post without registration
- Moderation based on Arch forum rules
- Multiple language sections

**Response Quality**
- Quick responses for common issues
- Developers accessible
- "Short line to the devs"

### Documentation Rating: 7/10
- Good but relies on Arch Wiki for depth
- Wiki occasionally outdated
- Community calls for more proofreading

### Community Rating: 8/10
- Friendly and helpful
- Active forums
- Developer engagement
- Some occasional toxicity towards criticism

---

## 12. German Community Presence

### Excellent German Support

**Official German Forum Section**
- URL: forum.manjaro.org/c/languages/deutsch/64
- Active German-speaking moderators
- Welcome message: "Informiere und beteilige Dich in unserem deutschsprachigem Forum - jeder ist willkommen"

**Unofficial German Forum**
- URL: manjaro-forum.de
- Dedicated German Manjaro community
- Sections include:
  - Allgemeine Diskussion (General Discussion)
  - Tutorials (user-created guides)
  - KDE Edition support
  - Native Linux Gaming
  - News und Updates
  - Feedback, Lob, Kritik (Praise/Criticism)

**Community Quality**
- Described as "top"
- Direct access to developers
- Forum server located in Germany (under German law)

### German Language Support
- Full German locale support
- German keyboard layouts
- German translations in installer and system

### German Community Rating: 9/10
- Strong presence
- Multiple active forums
- Native language support throughout

---

## Summary Assessment

### Manjaro at a Glance

| Category | Rating | Notes |
|----------|--------|-------|
| Installation | 2/10 difficulty | Very easy, GUI installer |
| Hardware Support | 9/10 | MHWD is excellent |
| Software Freshness | 8/10 | Delayed but still fresh |
| Stability | 7/10 | Good, but rolling release risks |
| Gaming | 8/10 | Great, Valve-recommended |
| Documentation | 7/10 | Good + Arch Wiki access |
| Community | 8/10 | Friendly, active |
| German Support | 9/10 | Excellent |

### Best For
- Users wanting Arch benefits without Arch complexity
- Gamers wanting easy driver management
- Developers needing fresh packages
- Intermediate users seeking balance

### Avoid If
- You need mission-critical stability
- You want pure Arch experience
- You heavily rely on AUR
- You distrust the project's history

---

## Sources

- [9to5Linux - Manjaro 26.0 Release](https://9to5linux.com/manjaro-26-0-released-with-linux-6-18-lts-xfce-4-20-kde-plasma-6-5-and-gnome-49)
- [Manjaro Official Website](https://manjaro.org/)
- [Manjaro Wiki](https://wiki.manjaro.org/)
- [Manjaro Forum](https://forum.manjaro.org/)
- [German Manjaro Forum](https://www.manjaro-forum.de/)
- [Phoronix - Manjaro 26.0](https://www.phoronix.com/news/Manjaro-Linux-26.0)
- [It's FOSS - Manjaro vs Ubuntu](https://itsfoss.com/ubuntu-vs-manjaro/)
- [It's FOSS - EndeavourOS vs Manjaro](https://itsfoss.com/endeavouros-vs-manjaro/)
- [Linuxiac - Manjaro 26](https://linuxiac.com/manjaro-26-released-with-plasma-6-5-and-gnome-49-on-wayland/)
- [GitHub - Pamac](https://github.com/manjaro/pamac)
- [DistroWatch - Manjaro](https://distrowatch.com/manjaro)
