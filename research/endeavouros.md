# EndeavourOS - Comprehensive Research

**Research Date:** January 2026
**Current Version:** Ganymede Neo (2026.01.12)
**Base:** Arch Linux
**Type:** Rolling Release
**Website:** https://endeavouros.com/

---

## 1. Current Version and State

### Latest Release: Ganymede Neo (2026.01.12)

EndeavourOS kicked off 2026 with the release of **Ganymede Neo**, a refresh release with core updates and upstream changes. As a rolling release distribution, these ISO releases are primarily for new installations - existing users simply update their systems regularly.

**Key Package Versions in Ganymede Neo:**
- Calamares 26.01.1.5-1 (installer)
- Firefox 146.0.1-1
- Linux Kernel 6.18.4.arch1-1
- Mesa 1:25.3.3-2
- Xorg-server 21.1.21-1
- Nvidia-utils 590.48.01-2

**Notable Changes:**
- NVIDIA proprietary drivers switched to nvidia-open due to upstream changes
- Proprietary option now only supports Turing GPUs (16xx) and later
- Earlier NVIDIA GPUs supported via Nouveau open-source drivers
- Next major release codename: **Titan** (in development)

### Rolling Release Model

EndeavourOS uses the same rolling release schedule as Arch Linux. You install it once and update forever - no need to reinstall for major version upgrades. ISO releases are periodic snapshots for new installations.

---

## 2. Arch Linux Relationship - How Close to Pure Arch?

### Very Close to Vanilla Arch

EndeavourOS is designed to be as close to vanilla Arch as possible while remaining accessible. Key aspects:

**What's the Same as Arch:**
- Uses Arch's official repositories directly
- Same package manager (pacman)
- Same rolling release schedule
- Updates arrive at the same time as Arch (no delays)
- Full AUR compatibility
- Leverages the Arch Wiki for documentation

**What's Different:**
- Uses **dracut** in place of mkinitcpio/initramfs
- Uses **NetworkManager** in place of systemd-networkd
- Has a small EndeavourOS-specific repository for their tools
- Includes yay AUR helper pre-installed
- Custom-themed desktop environments
- Welcome app and helper tools

**The Core Philosophy:**
If you install Arch Linux and EndeavourOS on the same machine, almost everything except the desktop environment/window manager themes and the install experience should stay the same. EndeavourOS adds minimal modifications - just enough to get you started.

---

## 3. Calamares Installer - Easy Installation

### GUI-Based Installation

EndeavourOS uses a customized fork of the Calamares installer, making installation dramatically easier than vanilla Arch.

**Two Installation Methods:**

1. **Offline Installation:**
   - Installs KDE Plasma (default) from the live session
   - No internet connection required
   - Faster installation
   - Uses squashfs image copy method

2. **Online Installation (Net-installer):**
   - Installs fresh from Arch repositories
   - Choice of desktop environments
   - Choice of kernels
   - Driver and firmware package selection
   - More customization options

**Installer Features:**
- Partitioning: Automatic with presets OR manual partitioning
- Bootloader options: systemd-boot (default), GRUB, or none
- LUKS encryption support
- Terminal window shows installation progress
- Deselectable EndeavourOS theming (install vanilla DE if preferred)

**Custom Calamares Implementation:**
EndeavourOS maintains their own Calamares fork with custom modules, including the pacstrap module for online installations. This allows unique features like installing directly from Arch repositories rather than from a pre-built image.

---

## 4. Desktop Environment Options

### Available During Installation

**Full Desktop Environments:**
- **KDE Plasma** (default, featured in live session)
- XFCE (former default)
- GNOME
- Cinnamon
- MATE
- Budgie
- LXQt
- LXDE

**Window Managers:**
- i3-wm (tiling)

**Previously Available Community Editions (Discontinued):**
- Sway (Wayland compositor)
- Qtile
- BSPWM
- Openbox
- Worm (EndeavourOS exclusive)

*Note: Community Editions were discontinued with Galileo (November 2023) due to lack of maintainers. These WMs can still be manually installed after the base system is set up.*

### Desktop Environment Philosophy

EndeavourOS provides a closer-to-vanilla experience of desktop environments compared to Manjaro. DEs are not heavily customized, giving users flexibility to personalize as they wish.

---

## 5. yay - AUR Helper

### Pre-Installed AUR Helper

EndeavourOS comes with **yay** (Yet Another Yaourt) pre-installed, providing easy access to the Arch User Repository.

**yay Features:**
- Written in Go language
- Interface similar to pacman
- AUR tab completion
- Advanced dependency solving
- Minimal dependencies
- Searches both Arch repos and AUR simultaneously

**Usage:**
```bash
# Search packages (repos + AUR)
yay package-name

# Install from AUR
yay -S package-name

# Update all packages (repos + AUR)
yay -Syu
```

**AUR Compatibility Advantage:**
Unlike Manjaro (which delays updates), EndeavourOS receives updates at the same time as Arch. This means AUR packages work seamlessly because they're built against the same library versions the AUR maintainers use.

---

## 6. Terminal-Centric Philosophy

### What "Terminal-Centric" Means

EndeavourOS describes itself as "a terminal-centric distro with a vibrant and friendly community at its core."

**The Philosophy:**
- Encourages learning Linux through command-line interaction
- Minimal GUI tools by design
- Package management via pacman/yay in terminal
- System maintenance through terminal commands
- Deliberate choice to foster learning

**What This Means in Practice:**
- You'll use the terminal for installing software
- You'll use the terminal for system updates
- You'll use the terminal for driver installation
- You'll use the terminal for kernel management
- GUI tools are available but not the primary method

**Why This Approach:**
> "Initially, it might look like the devs are making mistakes by not developing GUI tools. However, while a Linux distribution can be easy to use, EndeavourOS helps you learn Linux. You can try different packages, settings, make mistakes, and there is an active community to help you solve issues."

**Provided GUI Tools:**
- Welcome app
- Reflector-simple (mirror selection)
- Kernel tool
- Basic notification tools

---

## 7. Welcome App Features

### Central Hub for New Users

The Welcome app is the primary GUI tool and starting point for new EndeavourOS users.

**Main Features:**

1. **Installation:**
   - Start Calamares installer
   - Access release information
   - Fetch customization files (power users)

2. **System Tools:**
   - Update Mirrors (reflector-simple or rate-mirrors)
   - Software News (important updates)
   - GParted and KDE Partition Manager access
   - Rescue tools selection

3. **Information:**
   - EndeavourOS documentation links
   - Community resources
   - Tips and tutorials

4. **Customization (Welcome 3.0+):**
   - Personal Commands feature
   - Users can add custom command buttons
   - REISUB buttons for system crash recovery (Tips tab)

5. **Resources:**
   - Links to forum
   - Links to Discovery (knowledge base)
   - Links to Arch Wiki

---

## 8. Target Audience

### Primary Audiences

**1. Arch-Curious Users:**
- Want to experience Arch without manual installation
- Want to learn the Arch way gradually
- Looking for a gateway into the Arch ecosystem

**2. Manjaro Users Ready to Move Closer to Arch:**
- Frustrated with Manjaro's update delays
- Want pure Arch repositories
- Seeking better AUR compatibility

**3. Intermediate to Advanced Users:**
- Comfortable with terminal usage
- Want customization control
- Prefer minimal systems

**4. Linux Learners:**
- Want to understand how Linux works
- Willing to learn command-line operations
- Have time and patience for learning

### Who EndeavourOS is NOT For:

- Complete Linux beginners seeking point-and-click simplicity
- Users who want everything GUI-based
- Those unwilling to use the terminal
- Users needing guaranteed stability for critical work

**Migration Path:**
Ubuntu/Mint/Fedora → EndeavourOS → (optionally) Pure Arch

---

## 9. Unique Selling Points

### vs. Pure Arch Linux

| Aspect | Pure Arch | EndeavourOS |
|--------|-----------|-------------|
| Installation | Manual CLI (hours) | GUI installer (minutes) |
| Initial Setup | Build from scratch | Ready to use |
| Learning Curve | Steep from day one | Gradual learning |
| Hardware Detection | Manual | Automatic |
| Desktop Setup | Manual | Pre-configured options |
| AUR Helper | Install yourself | yay pre-installed |
| Community | RTFM culture | Beginner-friendly |

**EndeavourOS Advantage:** Get the Arch experience without the challenging installation. Learn at your own pace.

### vs. Manjaro

| Aspect | Manjaro | EndeavourOS |
|--------|---------|-------------|
| Update Timing | 2-4 weeks delayed | Same as Arch |
| Repositories | Own repos | Arch repos |
| AUR Compatibility | Can cause issues | Seamless |
| GUI Tools | Extensive | Minimal |
| Modifications | Heavily modified | Minimal |
| Bloat | More pre-installed | Very lean |
| Stability Testing | Yes | No (Arch testing) |
| Philosophy | User-friendly | Learning-focused |

**EndeavourOS Advantage:** Closer to vanilla Arch, faster updates, better AUR compatibility, lighter system.

### Key Differentiators

1. **True Arch Experience** - No delays, same repos
2. **Friendly Community** - Welcoming to beginners
3. **Minimal Footprint** - No bloatware
4. **Learning Platform** - Teaches Linux fundamentals
5. **Flexible Installation** - Online/offline, many DE choices
6. **AUR Just Works** - No compatibility issues

---

## 10. Honest Downsides

### It's Still Arch Linux

**1. Requires Knowledge/Willingness to Learn:**
- Terminal proficiency needed (or willingness to develop it)
- Must understand pacman commands
- Need to read Arch news before updates
- Troubleshooting requires research

**2. Rolling Release Challenges:**
- Updates can break things (rare but happens)
- Must update regularly (not weekly updates = potential issues)
- Need to monitor Arch news for manual interventions
- Not ideal for set-and-forget systems

**3. No Hand-Holding:**
- Less GUI tools than Manjaro or Ubuntu
- Must be proactive about system maintenance
- Arch Wiki is your primary documentation
- Some assembly required for advanced setups

**4. Potential Issues:**
- Smaller team than major distros
- Less extensive testing than Ubuntu/Fedora
- Some users report installation issues (VM and hardware)
- Not enterprise-focused

**5. AUR Caveats:**
- AUR packages are user-maintained
- Updates aren't extensively tested
- Can cause system issues if not careful
- Requires understanding of PKGBUILD process

### The Reality Check

> "Going in with zero Linux knowledge is not really recommended when wanting to install Arch, though it can be a good learning experience for those that are dedicated to trial and error as well as reading many FAQs. This applies to EndeavourOS as well."

---

## 11. Installation Difficulty Rating

### Rating: 3/10 (Easy)

**Compared to:**
- Pure Arch Linux: 8-9/10
- Gentoo: 10/10
- Manjaro: 2/10
- Ubuntu: 1-2/10

**Why It's Easy:**
- Graphical Calamares installer
- Automatic hardware detection
- Guided partitioning options
- Pre-configured desktop options
- LUKS encryption in installer
- Progress shown in terminal

**Installation Time:**
- Offline: 10-15 minutes
- Online: 20-30 minutes (depends on internet)

**What Makes It Harder Than Ubuntu/Manjaro:**
- Fewer hand-holding features
- Requires understanding of partitioning concepts
- Online install requires stable internet
- Some driver situations need manual intervention

**Post-Installation:**
- Terminal skills needed for ongoing management
- The installation is easy; using and maintaining requires more knowledge
- Learning curve continues after installation

---

## 12. Community and Documentation Quality

### Community - Known for Being Helpful!

**Reputation:**
> "EndeavourOS Community is the best Linux Community so far."

**Community Characteristics:**
- Welcoming to beginners
- Patient with simple questions
- Dedicated "Newbie" forum category
- Multiple support channels
- Active contributors

**Support Channels:**
- Official Forum (https://forum.endeavouros.com/)
- Telegram Help Chat
- Matrix
- Mastodon
- X (Twitter)

**Why It's Different from Arch:**
- No "RTFM" attitude
- Helpers accustomed to newcomers
- Walkthroughs provided for problem-solving
- Community-driven documentation

### Documentation

**Primary Resources:**

1. **Discovery** (https://discovery.endeavouros.com/)
   - Official knowledge base
   - Easy-to-understand tutorials
   - Installation guides
   - Desktop environment guides
   - Tool documentation

2. **Arch Wiki** (https://wiki.archlinux.org/)
   - Primary technical documentation
   - EndeavourOS directs users here
   - Comprehensive Linux resource

3. **Forum Tutorials**
   - Community-contributed guides
   - Problem-solving threads
   - Tips and tricks

**Documentation Philosophy:**
EndeavourOS doesn't reinvent documentation. They focus on EOS-specific tools and point users to the excellent Arch Wiki for everything else.

---

## 13. German Community Presence

### Dedicated German Support

**German Subforum:**
- URL: https://forum.endeavouros.com/c/deutsch/45
- Active German-speaking community
- Moderated by @joekamprad (German speaker)
- Welcoming to all German-speaking users

**German News Archive:**
- URL: https://endeavouros.com/category/news/deutsch/
- Release announcements in German
- News updates translated

**Community Support:**
German users can ask questions in their native language and receive support from German-speaking community members.

---

## Summary Assessment

### Who Should Use EndeavourOS

**Perfect For:**
- Users wanting to learn Arch Linux
- Manjaro users seeking closer-to-Arch experience
- Intermediate users who enjoy terminal
- Those wanting bleeding-edge software
- Users who value helpful community support
- Customization enthusiasts

**Not Recommended For:**
- Complete Linux beginners
- Users requiring absolute stability
- Those who dislike terminal usage
- Production/enterprise environments
- Users who want extensive GUI tools

### The Bottom Line

EndeavourOS occupies a unique niche: it's the friendly on-ramp to Arch Linux. It removes the painful installation barrier while maintaining almost everything that makes Arch great. The terminal-centric approach and helpful community make it an excellent learning platform.

**If you're curious about Arch but intimidated by the installation, EndeavourOS is your answer. If you want Manjaro without the delays and modifications, EndeavourOS is your answer. Just be prepared to learn and embrace the terminal.**

---

## Sources

- [EndeavourOS Official Website](https://endeavouros.com/)
- [EndeavourOS Forum](https://forum.endeavouros.com/)
- [EndeavourOS Discovery](https://discovery.endeavouros.com/)
- [Phoronix - EndeavourOS 2026.01.12 Release](https://www.phoronix.com/news/EndeavourOS-2026.01.12)
- [DistroWatch - EndeavourOS](https://distrowatch.com/endeavour)
- [It's FOSS - EndeavourOS vs Manjaro](https://itsfoss.com/endeavouros-vs-manjaro/)
- [Linux Journal - The Arch Decision](https://www.linuxjournal.com/content/arch-decision-evaluating-if-leap-manjaro-endeavouros-right-you)
- [How-To Geek - Why I Hopped from Manjaro to EndeavourOS](https://www.howtogeek.com/896410/why-i-hopped-from-manjaro-linux-to-endeavouros/)
- [XDA Developers - EndeavourOS Review](https://www.xda-developers.com/endeavouros-is-the-arch-experience-without-the-arch-installation/)
- [EndeavourOS German Subforum](https://forum.endeavouros.com/c/deutsch/45)
- [Slant - Manjaro vs EndeavourOS 2026](https://www.slant.co/versus/2706/35116/~manjaro-linux_vs_endeavour-os)
