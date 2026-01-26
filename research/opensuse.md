# openSUSE Research - Linux Chooser App

**Research Date:** January 2026
**Distribution Family:** Independent (RPM-based)
**Origin:** Germany (Nuremberg)
**Sponsor:** SUSE Software Solutions Germany GmbH

---

## 1. Current Versions and Release Dates

### openSUSE Leap 16.0
- **Release Date:** October 1, 2025
- **Base:** SUSE Linux Enterprise (SLE) 16
- **Support:** 24 months of community support per release
- **End of Life:** Expected October 2027 (Leap 16.0)
- **Lifecycle Plan:** Annual minor releases expected until 2031 (Leap 16.6), with Leap 17 successor expected in 2032

### openSUSE Leap 15.6 (Previous Stable)
- **End of Life:** April 30, 2026 (6-month overlap with Leap 16.0)

### openSUSE Tumbleweed
- **Version:** Rolling release (current snapshot as of January 2026: 84.87.20260105.db2bc39)
- **Updates:** Continuous, often daily when QA passes
- **Lifetime:** "Forever" - rolling release with no EOL

### openSUSE Slowroll (Experimental)
- **Status:** Still labeled "experimental" as of 2025
- **Update Cadence:** Big updates once per month, continuous security fixes
- **Delay:** Updates arrive 5-10 days after Tumbleweed

---

## 2. Leap vs Tumbleweed - Key Differences

| Aspect | Leap | Tumbleweed |
|--------|------|------------|
| **Release Model** | Point releases (annual) | Rolling release |
| **Stability** | Enterprise-grade (SLE base) | Tested rolling, cutting-edge |
| **Software Age** | Older, LTS versions | Latest stable versions |
| **Update Frequency** | Infrequent, security-focused | Daily or near-daily |
| **Testing** | Extensive, enterprise-level | openQA automated testing |
| **Support Length** | 24 months per release | Continuous |
| **Kernel** | LTS kernels | Latest stable kernels |

### Who Should Use Which?

**openSUSE Leap is best for:**
- Production servers where downtime is costly
- Enterprise environments needing stability
- Developers requiring consistent, reliable platforms
- Business desktops and workstations
- Users migrating from SUSE Linux Enterprise
- Sysadmins managing multiple systems

**openSUSE Tumbleweed is best for:**
- Enthusiasts wanting cutting-edge software
- Developers leveraging latest features
- Desktop users wanting newest GNOME/KDE/kernel
- Those comfortable with rolling release maintenance
- Hardware requiring newest drivers
- Users who enjoy Snapper rollback capabilities

**openSUSE Slowroll is best for:**
- Users wanting newer software than Leap but slower pace than Tumbleweed
- Those who prefer monthly update batches over daily updates
- Desktop users wanting a middle ground

---

## 3. YaST - What Makes It Special?

### Overview
YaST (Yet another Setup Tool) was the iconic all-in-one system administration tool for openSUSE, handling:
- Hard disk partitioning
- System setup and configuration
- RPM package management
- Online updates
- Network and firewall configuration
- User administration
- Service management

### Dual Interface
- **GUI (Qt-based):** Graphical interface for desktop users
- **TUI (ncurses):** Text-based interface for servers and remote administration

### Major Change in Leap 16 (2025)
YaST has been **deprecated** starting with openSUSE Leap 16:
- Qt graphical interface removed
- ncurses text interface still available
- Replaced by new tool suite

### New Replacement Tools (Leap 16+)

| Old Tool | New Tool | Function |
|----------|----------|----------|
| YaST Installer | **Agama** | System installation |
| YaST Control Center | **Cockpit** | System configuration |
| YaST Software | **Myrlyn** | Package management |

### Agama Installer Features (2025-2026)
- Web-based interface (accessible locally or remotely)
- Modern RESTful API architecture
- Multi-product installer (Tumbleweed, Leap, MicroOS, Slowroll)
- Wayland-exclusive display protocol
- Automated/unattended installation via JSON profiles
- Cleaner storage configuration UI (Agama 18, November 2025)

### AutoYaST
Still available for automated installations using control files with installation and configuration data.

### Ongoing Development
Hack Week 25 (October 2025) project aims to bridge gaps between YaST capabilities and Cockpit, bringing popular configuration features into the new toolset.

---

## 4. Btrfs/Snapper - Snapshot Features

### Default Setup
openSUSE uses **Btrfs** as the default filesystem for the root partition with **Snapper** for snapshot management.

### Snapper Capabilities
- Create, delete, and compare snapshots
- Undo changes between snapshots
- System rollback via GRUB 2 boot menu
- Both CLI and graphical interface

### Snapshot Types

| Type | Description | Default |
|------|-------------|---------|
| **Timeline** | Hourly snapshots, auto-cleanup (keeps first of last 10 days/months/years) | Disabled on partitions >16GB |
| **Installation** | Pre/Post pairs when installing via YaST/Zypper | Enabled |
| **Administration** | Pairs for system changes | Enabled |

### Automatic Snapshot Creation
Every YaST or Zypper operation automatically creates:
- **Pre-snapshot:** Before changes
- **Post-snapshot:** After changes
- Important changes (kernel updates) are marked

### Rollback Process
1. Boot from GRUB 2 snapshot menu
2. Select desired snapshot (read-only mount)
3. Perform rollback to restore system state
4. Non-snapshot directories remain unaffected

### Data Protection
Excluded from snapshots by default:
- `/home` (user data)
- `/opt` and `/usr/local` (third-party software)
- `/var/log` (log files)
- Web/FTP server contents

### Critical for Tumbleweed Users
Understanding Snapper is essential for Tumbleweed maintenance - occasional system-breaking updates can be quickly resolved via rollback.

---

## 5. Desktop Environment Options

### Installation System Roles (Primary Options)

| Desktop | Leap 16 | Tumbleweed | Notes |
|---------|---------|------------|-------|
| **KDE Plasma** | Yes | Yes | Modern, highly customizable, familiar to Windows/macOS users |
| **GNOME** | Yes | Yes | Clean, less customizable, easy to learn |
| **Xfce** | Via Software Selection | Yes | Lightweight, best for older hardware |
| **Generic Desktop** | Yes | Yes | IceWM base, select DE later |

### Additional Desktop Environments
Available via YaST/Myrlyn (supported but not fully tested):
- LXDE
- LXQt
- Enlightenment
- Cinnamon
- MATE
- Pantheon

### Installation Process
Desktop selection occurs during the **System Role** section of installation. Additional options available in the expanded Software selection view.

---

## 6. Gaming Setup - Packman Repository

### Packman Repository
The **largest external repository** for openSUSE, essential for desktop users.

#### Repository Sections
| Section | Contents |
|---------|----------|
| **Essentials** | Codecs, audio/video players |
| **Multimedia** | Extended multimedia applications |
| **Extra** | Non-multimedia apps (network tools) |
| **Games** | Gaming-related software |

### Adding Packman (Tumbleweed)
```bash
sudo zypper addrepo -cfp 90 'https://ftp.gwdg.de/pub/linux/misc/packman/suse/openSUSE_Tumbleweed/' packman
```

### Steam Installation
- Available in the **Non-OSS** repository
- Steam includes **Proton** (Wine fork) for Windows game support
- Steam client updated September 2025 (v1.0.0.85)
- `steam-devices` package for controller support

### Games Repository
Separate repository containing:
- Mumble (voice chat)
- Steam
- Level editors
- Server browsers
- Pixel art tools
- Asset extractors
- Game development SDKs

### Important Warning
**Packman can cause update issues.** Users should be prepared to resolve dependency conflicts. The repository is unofficial and may have signing/packaging differences from official repos.

---

## 7. Target Audience

### Primary Audiences

| User Type | Recommended Edition | Why |
|-----------|---------------------|-----|
| **System Administrators** | Leap | Enterprise stability, SLE compatibility, 24-month support |
| **Enterprise/Business** | Leap | Production-ready, matches SLES |
| **Developers** | Both | Leap for consistency, Tumbleweed for latest tools |
| **Desktop Enthusiasts** | Tumbleweed | Cutting-edge software |
| **Linux Newcomers** | Leap | Stability, extensive documentation |
| **Server Operators** | Leap | Web, database, email server support |

### Enterprise Integration
- Active Directory and LDAP support
- Kerberos authentication
- Samba file share management
- Cloud deployment ready
- Kubernetes cluster support (OBS adopted by Kubernetes project)

### Quote from Release Manager (Lubos Kocman)
> "Vendors and developers should give Leap and Leap Micro a serious look and consider it as the target platform for their solutions. You get 24 months of free maintenance and security updates. No other community distro offers that at no cost."

---

## 8. Unique Selling Points

### Open Build Service (OBS)

The crown jewel of openSUSE infrastructure.

#### What It Does
- Build and distribute binary packages from source
- Automatic, consistent, reproducible builds
- Multi-distribution support (21 operating systems)
- Multi-architecture support (6 architectures: amd64, arm64, ppc64le, s390x, etc.)

#### Key Features
| Feature | Benefit |
|---------|---------|
| **Jailed Build Environment** | Clean, reproducible builds every time |
| **Automatic Dependency Rebuilds** | Dependent packages auto-rebuild on changes |
| **Collaboration Tools** | Clone projects, merge requests, team workflows |
| **Multiple Frontends** | Web interface for beginners, OSC CLI for power users |
| **World-wide Mirror Distribution** | Fast local downloads for users |

#### Adoption
Used by:
- openSUSE Project
- SUSE Linux Enterprise
- Kubernetes (official package generation)
- Tizen
- VideoLAN
- Dell, Cray, Intel
- Universities worldwide

### Other Unique Points
- **Hybrid Distribution Model:** Leap combines SLE source with community development
- **openQA:** Automated testing infrastructure
- **Transactional Updates:** Available in MicroOS variant
- **Longest Free Support:** 24 months - unmatched by other community distros

---

## 9. Honest Downsides

### Smaller Community
- Less online discussion compared to Ubuntu/Fedora/Arch
- Fewer tutorials and guides on general tech sites
- Stack Overflow/Reddit presence smaller

### Software Availability Challenges
- Third-party software support less common
- Some software searches return Flatpak/Flathub results rather than native packages
- Potential library dependency conflicts with external repos
- Unofficial packaging quality varies

### GUI and Configuration Issues
- YaST deprecation leaves gaps in Cockpit functionality (being addressed)
- Default firewall settings can be too restrictive (printer discovery issues)
- Some YaST/Settings overlap creates confusion

### Integration Limitations
- Active Directory integration could improve
- Windows integration less seamless than some distros
- Initial setup can be more complex

### Packman Repository
- Frequent source of update issues
- Users must be confident resolving conflicts
- Not officially supported

### Update Concerns (Tumbleweed)
- Rolling release carries inherent update risks
- Requires understanding of Snapper for safe operation
- Not suitable for production systems requiring maximum stability

---

## 10. Installation Difficulty

### Rating: 4/10 (Moderate - Beginner Friendly)

### Factors

**Making it Easier:**
- Agama installer is modern and web-based
- Clear desktop environment selection
- Automatic partitioning with Btrfs/Snapper
- Excellent hardware detection
- Multi-language support (60+ languages)
- Good default configurations

**Making it Harder:**
- More options than "simple" distros (can overwhelm)
- Btrfs/Snapper concepts unfamiliar to newcomers
- Repository management (Packman, etc.) requires learning
- Firewall defaults may need adjustment
- YaST deprecation means learning new tools

### Compared to Other Distros
- **Easier than:** Arch, Gentoo, Slackware, Debian (minimal)
- **Similar to:** Fedora, Debian (full installer)
- **Harder than:** Linux Mint, Ubuntu, Pop!_OS

---

## 11. Community and Documentation Quality

### Documentation

| Resource | Quality | Notes |
|----------|---------|-------|
| **openSUSE Wiki** | Excellent | QA-reviewed, standardized, comprehensive |
| **doc.opensuse.org** | Very Good | Official manuals and guides |
| **opensuse-guide.org** | Good | Beginner-friendly unofficial guide |
| **Release Notes** | Excellent | Detailed per-release information |

#### Wiki Quality Assurance
- Prominent namespaces undergo formal QA process
- Multiple revisions maintained in parallel
- Only approved content shown by default
- Community-edited and refined

### Support Channels

| Channel | Purpose |
|---------|---------|
| **Forums** (forums.opensuse.org) | Primary user support, merged independent forums |
| **Mailing Lists** | support@lists.opensuse.org for user help |
| **IRC** | Real-time chat (#opensuse on Libera.Chat) |
| **Discord** | Community chat |
| **Telegram** | Group discussions |
| **Matrix** | Bridged chat rooms |

### Community Characteristics
- Welcoming to newcomers
- Strong technical expertise
- Active forum moderators
- Multilingual support available

---

## 12. German Community Presence

### Historical Roots

| Year | Event |
|------|-------|
| **1992** | SUSE founded in Germany (Nuremberg) by four German engineers |
| **1994** | First SUSE Linux release (German Slackware translation) |
| **1990s** | Became largest Linux distributor in Germany |
| **2005** | openSUSE Project launched (open development) |
| **2011** | SUSE headquarters returned to Nuremberg, Germany |

### Founders
- Hubert Mantel
- Roland Dyroff
- Burchard Steinbild
- Thomas Fehr

### Name Origin
**S.u.S.E.** = "Software und System-Entwicklung" (Software and Systems Development)

### Current German Presence
- **Headquarters:** SUSE S.A. operates out of Germany (legally Luxembourg)
- **Development:** Significant development team in Germany
- **Community:** Strong German-speaking user base
- **Forums:** Dedicated German language section (forums.opensuse.org/c/deutsch-german)
- **Regional Strength:** Popular in Germany, Austria, Switzerland, and Nordic countries

### European Influence
openSUSE remains particularly strong in:
- Germany
- Finland
- Sweden
- Other European countries

This German/European heritage contributes to:
- Strong privacy focus
- Excellent localization
- Enterprise-grade engineering culture
- Robust documentation traditions

---

## Summary Comparison Table

| Aspect | Leap 16 | Tumbleweed | Slowroll |
|--------|---------|------------|----------|
| **Release Type** | Point | Rolling | Slow Rolling |
| **Stability** | Enterprise | Tested Rolling | Middle Ground |
| **Updates** | Periodic | Daily | Monthly |
| **Support** | 24 months | Continuous | Continuous |
| **Best For** | Production, Enterprise | Enthusiasts, Developers | Balanced Users |
| **Snapshot Safety** | Yes | Critical | Yes |
| **Installation** | Agama | Agama | Agama (Beta) |

---

## Sources

- [openSUSE News - Leap 16 Release](https://news.opensuse.org/2025/10/01/next-chapter-opens-with-leap-release/)
- [openSUSE Wiki](https://en.opensuse.org/)
- [Get openSUSE](https://get.opensuse.org/)
- [openSUSE Documentation](https://doc.opensuse.org/)
- [Snapper Documentation](https://doc.opensuse.org/documentation/tumbleweed/snapper/)
- [YaST Portal](https://en.opensuse.org/Portal:YaST)
- [Open Build Service](https://build.opensuse.org/)
- [Packman Repository](http://packman.links2linux.org/)
- [openSUSE Forums](https://forums.opensuse.org/)
- [Agama Project](https://github.com/agama-project/agama)
- [openSUSE Slowroll Portal](https://en.opensuse.org/Portal:Slowroll)
- [SUSE Company History](https://www.suse.com/company/history/)
- [It's FOSS - openSUSE Leap 16 Release](https://itsfoss.com/news/opensuse-leap-16-release/)
- [Linuxiac - openSUSE Leap vs Tumbleweed](https://linuxiac.com/opensuse-leap-vs-tumbleweed-difference-between-them-explained/)
- [Linux Journal - openSUSE Leap 16](https://www.linuxjournal.com/content/opensuse-leap-16-bridging-enterprise-grade-stability-community-driven-innovation)
