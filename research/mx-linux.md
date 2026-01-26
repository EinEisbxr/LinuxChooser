# MX Linux - Detailed Research

**Research Date:** January 2026
**Current Version:** MX Linux 25.1 "Infinity"

---

## 1. Current Version and Release Date

- **Latest Version:** MX Linux 25.1 "Infinity"
- **Release Date:** January 21, 2026 (general availability announced January 19, 2026)
- **Previous Major Version:** MX Linux 25 "Infinity" released November 9, 2025
- **Versioning Scheme:** MX Linux matches the year of release (21 was released in 2021, 23 in 2023, 25 in 2025)
- **Release Cycle:** Major versions happen when Debian Stable changes (approximately every 2 years), with point releases in between and monthly snapshots for software updates

---

## 2. Debian Base - Stable or Testing?

**MX Linux is based on Debian Stable.**

- **MX Linux 25.x:** Built on Debian 13 "Trixie" (released August 9, 2025)
- **Current Base:** Debian 13.3 (released January 10, 2026)
- **Previous MX-23:** Was based on Debian 12 "Bookworm"

### Why Debian Stable Matters
- Maximum stability and reliability
- Debian Stable is known for being "tested, proven, and dependable"
- Less vulnerable to breaking changes compared to Testing/Unstable
- 5-year support cycle (Debian 13 supported until 2030)

**Note:** The current Debian Testing is "Forky" (will become Debian 14). MX Linux does NOT use Testing as its base.

---

## 3. Desktop Editions

MX Linux offers three official editions:

### Xfce Edition (Flagship)
- **Version:** Xfce 4.20
- **Architecture:** 64-bit only
- **Characteristics:** Midweight desktop, fast, low-resource, user-friendly
- **AHS Variant:** Advanced Hardware Support edition with Liquorix kernel 6.18 for newer AMD/Intel hardware
- **Best For:** Most users, good balance of features and performance

### KDE Plasma Edition
- **Version:** KDE Plasma 6.3.6
- **Architecture:** 64-bit only (AHS by default)
- **Kernel:** Linux 6.12 (or later)
- **Sessions:** Wayland (default) and X11 available
- **Package Manager:** Uses Discover instead of Synaptic
- **Best For:** Users wanting a modern, feature-rich desktop

### Fluxbox Edition
- **Version:** Fluxbox 1.3.7
- **Architecture:** 64-bit
- **Characteristics:** Window manager (not full desktop environment), extremely lightweight
- **Resource Usage:** 100-150MB less RAM than Xfce/KDE
- **Configuration:** Mix of GUI tools and text file editing (~/.fluxbox/)
- **Best For:** Older hardware, minimalists, power users who want maximum control

### Edition Comparison

| Feature | Xfce | KDE Plasma | Fluxbox |
|---------|------|------------|---------|
| Resource Usage | Medium | Medium-High | Very Low |
| Ease of Use | High | High | Medium |
| Customization | High | Very High | Very High (manual) |
| Modern Look | Good | Excellent | Minimal |
| Wayland Support | No | Yes (default) | No |

---

## 4. MX Tools - The Complete Suite

MX Tools is a collection of **37+ custom utilities** that distinguish MX Linux from other distributions. Many were developed specifically for MX Linux or forked from antiX.

### Tool Categories

#### Live Tools
- **MX Live USB Maker** - Create bootable USB drives with persistence
- **MX Snapshot** - Create bootable ISO backups of your system (flagship feature)

#### Maintenance Tools
- **MX Chroot Rescue Scan** - Repair broken systems
- **MX Disk Manager** - Partition and disk management
- **MX Job Scheduler** - Cron job GUI
- **MX Boot Options** - Configure boot parameters
- **MX Boot Repair** - Fix GRUB and boot issues
- **MX Cleanup** - Remove unnecessary files
- **MX Samba Config** - Network sharing setup
- **MX Service Manager** - Enable/disable system services
- **MX User Manager** - User account management

#### Setup Tools
- **MX About** - System information
- **MX Bash Config** - Shell configuration
- **MX Nvidia Installer** - Proprietary driver installation
- **MX Conky** - Desktop widgets configuration
- **MX Date & Time** - Time zone and clock settings
- **MX Locale** - Language and regional settings
- **MX Network Assistant** - Network troubleshooting
- **MX Select Sound** - Audio device configuration
- **MX System Sounds** - Sound scheme settings
- **MX Tour** - Introduction to MX Linux
- **MX Brightness Systray** - Screen brightness control
- **MX Tweak** - Desktop customization (panels, hibernation, USB mounting)
- **MX Welcome** - First-run setup assistant
- **MX Papirus Folder Colors** - Icon customization
- **MX System Keyboard** - Keyboard layout settings
- **MX User Installed Packages** - Export/import user packages for migration
- **MX Package Installer** - GUI for installing software (3,200+ apps, Flatpak support)
- **MX Boot** - GRUB menu customization (themes, kernels, timeout)

### MX Snapshot - The Killer Feature

MX Snapshot deserves special attention:

- **Function:** Creates a bootable ISO file of your entire system
- **Includes:** Operating system, installed applications, configurations, and optionally user data
- **Use Cases:**
  - System backup and disaster recovery
  - Create custom distributions
  - Deploy identical systems across multiple machines
  - Share your configured system with others
- **Advantage:** Unlike traditional backups, restores to a fully bootable state without reinstallation

---

## 5. Systemd - Dual Init System

**MX Linux 25.1 restores full dual-init capability** - one of its most distinctive features.

### Init System Options

| Init System | Description | Availability |
|-------------|-------------|--------------|
| **SysVinit** | Classic init, default in MX | All editions |
| **systemd** | Modern init, available as option | All editions |

### How It Works

- **Default:** SysVinit is the default init system
- **Boot Selection:** Choose systemd from GRUB boot menu on installed systems
- **Compatibility:** systemd is installed but inactive by default
- **systemd-shim:** Package that provides systemd compatibility for apps requiring it while keeping SysVinit as init
- **MX 25.1 Improvement:** Both init systems now available on the same ISO (dual-init restored)

### Why This Matters

- **Choice:** Users can use whichever init system they prefer
- **Compatibility:** Apps requiring systemd still work
- **Philosophy:** Respects user freedom and traditional Unix philosophy
- **Performance:** Some users report slightly faster boot with systemd option

### Available Variants (MX 25.1)
- Xfce: systemd and SysVinit versions
- Xfce-AHS: systemd and SysVinit versions
- Fluxbox: systemd and SysVinit versions
- KDE Plasma: systemd version (KDE integrates heavily with systemd)

---

## 6. Boot Speed

### Typical Boot Times

| Hardware | Boot Time |
|----------|-----------|
| Modern SSD | 10-20 seconds |
| Older SSD | 15-17 seconds (considered "quite fast") |
| HDD | 30-60 seconds |

### Historical Comparison (Same Hardware)
- MX14: ~5 seconds (text boot, no splash)
- MX16: ~7 seconds with splash
- MX19: ~9-10 seconds with splash

### Boot Speed Claims
- Ranked among the fastest booting distributions
- Often cited as "second fastest after Puppy Linux" (along with antiX)
- Significantly faster than many mainstream distributions

### Optimization Tips
- Enable AHCI mode in BIOS (not RAID or IDE)
- Use systemd boot option for potentially faster startup
- Analyze boot with `systemd-analyze time` and `systemd-analyze blame`
- Bootchart2 available for detailed analysis

### toram Mode
When using the "toram" boot parameter (copies entire filesystem to RAM):
- Initial boot takes ~1 minute 40 seconds (loading 1.2GB linuxfs to RAM)
- Once loaded, system runs extremely fast entirely from RAM
- Can remove boot media after loading

---

## 7. Live USB Features

MX Linux (inherited from antiX) offers **the most extensive Live USB system** available in any Linux distribution.

### Key Live USB Features

#### Persistence Options
- **Root Persistence (rootfs):** Save system changes
- **Home Persistence (homefs):** Save user data separately
- **Static Persistence:** Changes saved directly to USB (recommended for <4GB RAM)
- **Dynamic Persistence:** Persistence files loaded into RAM (faster but needs more RAM)

#### toram Feature
- **Function:** Copies entire compressed filesystem to RAM
- **Benefit:** Extremely fast operation, can remove USB after boot
- **Combination:** Can combine with dynamic persistence - re-insert USB only when saving changes
- **Requirement:** Sufficient RAM (2GB minimum, 4GB+ recommended)

#### Live USB Creation
- **MX Live USB Maker:** GUI tool for creating bootable USBs
- **Unique Feature:** Can create a new persistent live USB while running from the same USB (via toram)
- **Formats:** Can create live USB from Windows using included instructions

### Persistence Configuration Recommendations

| RAM | Recommended Mode |
|-----|------------------|
| <4GB | Static persistence |
| 4-8GB | Either mode |
| >8GB | Dynamic persistence (faster) |

### Frugal Install
- Hybrid between live USB and full install
- Live system installed to local hard drive
- Can boot from RAM and use persistence
- Best of both worlds: live flexibility + HDD speed

---

## 8. Target Audience

### Primary Target Users

#### Intermediate Users
- Users with some Linux experience
- Those comfortable reading documentation
- Users who want control over their system
- People who appreciate well-documented tools

#### System Administrators
- Excellent system rescue and recovery tools
- MX Snapshot for system imaging and deployment
- Chroot rescue capabilities
- Service and user management GUIs

#### Power Users
- Init system choice
- Extensive customization options
- Advanced boot parameters
- Low-level system access

### Secondary Target Users

#### Beginners (with Caveats)
- "MX is relatively newbie-friendly IF the newbie is willing to do some of the work themselves"
- Excellent documentation and manual
- GUI tools for most tasks
- Helpful community

#### Hardware Recyclers
- Fluxbox edition for older hardware
- 32-bit support available (in antiX, sister project)
- Low resource requirements
- Excellent hardware detection

#### Users Avoiding systemd
- SysVinit as default
- Full functionality without systemd as init
- Popular among systemd-skeptics

### Not Ideal For

- Users wanting "just works" without any learning
- Those expecting Ubuntu/Mint-style experience
- Users who want cutting-edge software (use Debian Testing/Unstable instead)

---

## 9. Unique Selling Points

### vs Linux Mint

| Aspect | MX Linux | Linux Mint |
|--------|----------|------------|
| **Base** | Debian Stable | Ubuntu LTS |
| **Init System** | Choice (SysVinit/systemd) | systemd only |
| **Resource Usage** | Lower (especially Fluxbox) | Higher baseline |
| **Custom Tools** | 37+ MX Tools | Mint X-Apps suite |
| **Snapshot/Backup** | MX Snapshot (creates bootable ISO) | Timeshift (system restore) |
| **32-bit Support** | Via antiX | Discontinued |
| **Upgrade Path** | Clean install recommended | In-place upgrades (tricky) |
| **Live USB** | Advanced persistence options | Basic live USB |
| **Boot Speed** | Generally faster | Slower |
| **Polish/Look** | Functional | More polished |

**Choose MX Linux over Mint if:**
- You want lower resource usage
- You prefer avoiding systemd
- You need advanced live USB features
- You value MX Snapshot functionality
- You have older hardware

**Choose Linux Mint over MX if:**
- You're completely new to Linux
- You want more modern aesthetics out-of-box
- You prefer Ubuntu ecosystem
- You want Cinnamon desktop

### vs Debian

| Aspect | MX Linux | Debian |
|--------|----------|--------|
| **Ease of Use** | Easier (MX Tools) | Steeper learning curve |
| **Out-of-Box Experience** | Ready to use | Requires configuration |
| **Multimedia Codecs** | Included | Manual installation |
| **Proprietary Drivers** | MX Nvidia Installer | Manual process |
| **Documentation** | Excellent, beginner-friendly | Comprehensive but technical |
| **Init System** | Choice available | systemd (default) or choose at install |
| **Custom Tools** | MX Tools suite | None |
| **Hardware Support** | AHS editions | Standard |
| **Community** | Smaller, very friendly | Large, varies |

**Choose MX Linux over Debian if:**
- You want Debian stability with easier setup
- You need the MX Tools suite
- You want included codecs and drivers
- You prefer better documentation for beginners

**Choose Debian over MX if:**
- You want maximum control from the start
- You prefer a "purer" experience
- You need specific desktop environments not in MX
- You want Testing/Unstable branches

---

## 10. Honest Downsides

### Visual/Aesthetic Issues

- **Dated Appearance:** Default theme can look dated compared to Mint or Fedora
- **Installer UI:** Graphical installer looks old; partitioning step described as "awfully ugly"
- **Improvement in 25:** New themes make it "look very slick" - "no longer looks like it came from Windows 3"

### Technical Issues

- **Memory Usage:** Has become "a real memory hog compared to earlier releases" according to some users
- **CPU Usage:** Some report higher CPU usage than other Debian-based Xfce distros
- **Upgrade Issues:** Upgrading between major versions can break MX Tools
- **AMD Graphics:** Screen brightness issues on some AMD laptops during boot

### Community/Ecosystem

- **Smaller Community:** Compared to Ubuntu, Mint, or Fedora
- **Less Third-Party Support:** Fewer tutorials and Stack Overflow answers
- **Niche Position:** Not as widely known or discussed

### User Experience Issues

- **Default Taskbar:** Side panel by default frustrates some users
- **Menu Organization:** Some complain about duplicate app names in menus
- **Learning Curve:** MX Tools and configurations differ from mainstream distros
- **"Bloat" Perception:** Some find it "overcomplicated, full of bloatware" - though others appreciate the tools

### Installation

- **Intimidating Installer:** "It's straightforward once you log in but installing it is a little intimidating"
- **Longer Than Ubuntu:** Installation process takes longer
- **Partitioning:** Manual partitioning interface is dated

### Firefox Issues
- Reported freezing on older hardware with 4GB RAM when using Firefox
- May need to switch to lighter browsers

---

## 11. Installation Difficulty

**Rating: 4/10** (1 = very easy, 10 = very difficult)

### Breakdown

| Aspect | Difficulty | Notes |
|--------|------------|-------|
| Downloading/Creating USB | 2/10 | Straightforward |
| Booting Live Environment | 2/10 | Standard process |
| Installer Launch | 2/10 | Easy to find |
| Language/Keyboard | 2/10 | Well-implemented |
| Partitioning | 5/10 | Dated UI, can be confusing |
| User Setup | 3/10 | Standard process |
| Installation Time | 3/10 | Relatively fast |
| First Boot Configuration | 3/10 | MX Welcome helps |

### Compared to Other Distros

| Distribution | Installation Difficulty |
|--------------|------------------------|
| Linux Mint | 2/10 |
| Ubuntu | 2/10 |
| **MX Linux** | **4/10** |
| Fedora | 4/10 |
| Debian | 5/10 |
| Arch Linux | 8/10 |

### Key Points

- **Pros:**
  - Graphical installer with clear steps
  - Well-documented installation process
  - GParted available for partition preparation
  - Fast installation once started

- **Cons:**
  - Installer appearance is dated
  - Partitioning interface can be confusing
  - More prompts than Ubuntu/Mint installers
  - Some options may overwhelm beginners

### Recommendation
Beginners can install MX Linux successfully if they:
1. Read the installation chapter in the MX Users Manual first
2. Use "auto" partitioning if unsure
3. Have someone experienced nearby for the partitioning step

---

## 12. Community and Documentation Quality

### Documentation

**Rating: 9/10** - Among the best in the Linux world

#### Available Resources

1. **MX Users Manual**
   - Installed with the OS (launch with Alt-F1)
   - Comprehensive coverage for beginners to intermediate users
   - Available in multiple languages

2. **MX/antiX Wiki**
   - Technical documentation
   - Extended support beyond the manual
   - Boot parameters, advanced topics

3. **MX-Fluxbox Documentation**
   - Specific to Fluxbox edition
   - Launch with F1 in Fluxbox session

4. **Video Tutorials**
   - Official video guides
   - YouTube content from community

### Languages Available
- English (primary)
- German
- French
- Spanish
- Italian
- Portuguese
- Russian
- Polish
- Dutch
- Chinese (Simplified)

### Documentation Quality Notes
- "Extensive support is available through videos, documentation and a very friendly Forum"
- "Created a user manual with a load of information, and forums which will be searchable, immediately placing it way above [other distros]"
- Translations use DeepL for quality; French translation praised as "very nice"

### Community

**Rating: 8/10** - Friendly and helpful

#### MX Linux Forum
- **URL:** https://forum.mxlinux.org/
- **Structure:** Well-organized with subforums
- **How-To Section:** Step-by-step guides
- **Language Forums:**
  - English (main)
  - Deutsches Forum (German)
  - Forum en Espanol
  - Forum Francais
  - Forum Italiano
  - Chinese Forum
  - Arabic Forum
  - Other Languages

#### Community Characteristics
- "Very friendly Forum" - official description
- Developers active and responsive
- Weekly news updates on official blog
- antiX community overlap (sister project)

### Compared to Other Distros

| Distro | Documentation | Community Size | Helpfulness |
|--------|---------------|----------------|-------------|
| Ubuntu | Excellent | Huge | Varies |
| Linux Mint | Good | Large | Good |
| **MX Linux** | **Excellent** | **Medium** | **Very Good** |
| Debian | Excellent (technical) | Large | Good |
| Arch | Excellent (wiki) | Large | Can be harsh |

---

## 13. German Community Presence

### Dedicated German Forum
- **Deutsches Forum** - Official German-language subforum on forum.mxlinux.org
- Active German-speaking community members

### German Documentation
- MX Users Manual available in German
- MX-Fluxbox documentation translated to German
- Translations done via DeepL with good quality

### German Press Coverage
- MX Linux receives coverage in German tech press
- Some criticism that German press reviews didn't always do proper German localization testing

### Comparison to Other Distros in Germany

| Distro | German Community | German Docs | German Support |
|--------|------------------|-------------|----------------|
| Ubuntu | Excellent (ubuntuusers.de) | Excellent | Excellent |
| Linux Mint | Good | Good | Good |
| **MX Linux** | **Medium** | **Good** | **Good** |
| openSUSE | Excellent (German origin) | Excellent | Excellent |
| Debian | Good | Good | Good |

### Recommendations for German Users
- Use the Deutsches Forum for German-language support
- Documentation is translated and usable
- Community smaller than Ubuntu/openSUSE but active
- Consider openSUSE if German-language support is critical

---

## Summary for Linux Chooser App

### Quick Facts
- **Current Version:** 25.1 "Infinity" (January 2026)
- **Base:** Debian 13 "Trixie" Stable
- **Editions:** Xfce, KDE Plasma, Fluxbox
- **Init Systems:** SysVinit (default), systemd (optional)
- **Installation Difficulty:** 4/10
- **Target Audience:** Intermediate users, sysadmins, power users

### Key Strengths
1. MX Snapshot for bootable system backups
2. Dual init system choice
3. Excellent documentation
4. Fast boot times
5. Advanced live USB features
6. 37+ custom MX Tools
7. Debian stability with better usability

### Key Weaknesses
1. Dated visual appearance (improving)
2. Smaller community than major distros
3. Installation UI needs modernization
4. Upgrade path between versions can be problematic
5. Learning curve for MX-specific tools

### Best For
- Users wanting Debian stability without Debian's setup complexity
- Those who value system rescue and backup tools
- Users preferring SysVinit over systemd
- Intermediate Linux users
- Older hardware (Fluxbox edition)

### Not Recommended For
- Complete Linux beginners who want zero learning curve
- Users who prioritize modern aesthetics
- Those needing massive community support (choose Ubuntu/Mint)

---

## Sources

- [MX Linux Official Website](https://mxlinux.org/)
- [MX Linux 25.1 Release - The Register](https://www.theregister.com/2026/01/21/mx_25_1_init_diversity/)
- [MX Linux Forum](https://forum.mxlinux.org/)
- [MX Linux Wikipedia](https://en.wikipedia.org/wiki/MX_Linux)
- [DistroWatch MX Linux](https://distrowatch.com/mx)
- [MX Linux End of Life](https://endoflife.date/mxlinux)
- [Debian 13 Trixie Release](https://www.debian.org/News/2025/20250809)
- [Linux Mint vs MX Linux - Slant](https://www.slant.co/versus/18538/22501/~linux-mint_vs_mx-linux)
- [Linux Mint vs MX Linux - Android Authority](https://www.androidauthority.com/linux-mint-vs-mx-linux-3522506/)
- [MX Tools Review - Dedoimedo](https://www.dedoimedo.com/computers/mx-tools.html)
- [MX Snapshot Review - Dedoimedo](https://www.dedoimedo.com/computers/mx-snapshot.html)
- [MX Linux Boot Parameters Wiki](https://mxlinux.org/wiki/system/boot-parameters/)
- [antiX Live USB Documentation](https://antixlinux.com/the-most-extensive-live-usb-on-the-planet/)
