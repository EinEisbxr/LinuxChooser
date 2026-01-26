# PLANNING.md - Linux Chooser Web Application

## 1. Project Overview

### What We're Building
Linux Chooser is a friendly, approachable web application that helps everyday computer users discover which Linux distribution and desktop environment best fits their needs. Think of it as a "personality quiz" for finding your perfect Linux match.

### Why We're Building It
The Linux ecosystem is vast and intimidating for newcomers. Most "distro chooser" tools assume technical knowledge and use jargon like "rolling release," "systemd," or "Wayland vs X11." This creates a barrier for the very people who might benefit most from Linux.

Linux Chooser flips this approach: we ask about what users actually care about - how they use their computer, what they value, and what feels right to them - then translate those preferences into concrete recommendations.

### Target Audience
- **Primary**: Non-technical users curious about trying Linux
- **Secondary**: Windows/Mac users frustrated with their current OS
- **Tertiary**: People helping friends/family choose a Linux distro

### Success Criteria
- Users can complete the questionnaire in under 5 minutes
- Zero technical jargon in user-facing content
- Recommendations feel personalized and actionable
- Users leave with clear next steps (not just a distro name)

---

## 2. Core Features (v1)

### 2.1 Questionnaire Flow
- **Progressive disclosure**: Start simple, add depth based on answers
- **Conversational tone**: Questions feel like chatting with a knowledgeable friend
- **Visual aids**: Use images/icons to illustrate concepts where helpful
- **Skip-friendly**: Allow "I don't know" or "No preference" options
- **Progress indicator**: Show users where they are in the process

### 2.2 Distribution Matching
- Score-based matching algorithm
- Weight factors based on question importance
- Support for "deal-breaker" preferences (hard requirements)
- Return top 3 matches with confidence scores

### 2.3 Desktop Environment Matching
- Separate but integrated with distro matching
- Visual previews of each DE style
- Consider distro-DE combinations (some work better together)

### 2.4 Results Presentation
- Primary recommendation with clear "why this fits you" explanation
- 2-3 alternative options with comparison
- Visual preview of what the desktop looks like
- Clear, jargon-free next steps for trying it
- "Share your result" functionality

---

## 3. User Experience Flow

### 3.1 Navigation Structure

```
Landing Page
    ↓
Introduction (set expectations, ~30 seconds)
    ↓
Question Categories (branching based on answers)
    ├── About You (comfort level, goals)
    ├── How You Use Your Computer
    ├── What Matters To You (values/priorities)
    └── Look & Feel Preferences
    ↓
Processing Animation (build anticipation)
    ↓
Results Page
    ├── Your Match
    ├── Why It Fits
    ├── Alternatives
    └── Next Steps
```

### 3.2 Question Categories to Explore

**Category 1: About You**
- How comfortable are you with computers in general?
- Have you ever tried Linux before?
- How do you feel about learning new things on your computer?

**Category 2: How You Use Your Computer**
- What do you mainly use your computer for? (browsing, gaming, creative work, programming, office tasks)
- Do you need specific software that only runs on Windows/Mac?
- How old is your computer? (performance considerations)

**Category 3: What Matters To You**
- Do you prefer things to "just work" or do you like to customize?
- How important is it that your computer looks modern and polished?
- Would you rather have rock-solid stability or the latest features?
- How do you feel about asking for help online if you get stuck?
- Is privacy/security a major concern for you?

**Category 4: Look & Feel**
- Show visual examples of different desktop styles
- Traditional (like Windows), Modern (like macOS), Unique, Minimal
- Do you like lots of options visible, or a clean simple interface?

### 3.3 Interaction Patterns
- Single question per screen (mobile-friendly, focused)
- Large, tappable answer options
- Visual answer choices where possible
- Smooth transitions between questions
- Back button always available
- "Why are we asking this?" expandable hints

---

## 4. Technical Architecture

### 4.1 React Component Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Button/
│   │   ├── ProgressBar/
│   │   ├── Card/
│   │   └── Icon/
│   ├── landing/
│   │   └── LandingPage/
│   ├── questionnaire/
│   │   ├── QuestionnaireContainer/
│   │   ├── Question/
│   │   ├── AnswerOption/
│   │   ├── ImageOption/
│   │   ├── SliderOption/
│   │   └── QuestionHint/
│   └── results/
│       ├── ResultsPage/
│       ├── DistroCard/
│       ├── MatchExplanation/
│       ├── DesktopPreview/
│       └── NextSteps/
├── data/
│   ├── questions.js
│   ├── distributions.js
│   ├── desktopEnvironments.js
│   └── matchingRules.js
├── hooks/
│   ├── useQuestionnaire.js
│   └── useMatching.js
├── utils/
│   ├── matchingAlgorithm.js
│   └── scoringHelpers.js
├── context/
│   └── QuestionnaireContext.js
└── App.jsx
```

### 4.2 State Management Approach

**React Context + useReducer** (no external libraries needed for this scope)

```javascript
// State shape
{
  currentStep: 'landing' | 'questionnaire' | 'results',
  currentQuestionIndex: number,
  answers: {
    [questionId]: answerValue
  },
  results: {
    distro: { primary: Distro, alternatives: Distro[] },
    desktop: { primary: DE, alternatives: DE[] },
    matchScores: { [distroId]: number }
  }
}
```

**Why this approach:**
- Simple enough for a single-page flow
- No external dependencies
- Easy to persist to localStorage for "resume later"
- Easy to share state via URL params

### 4.3 Data Structures

**Distribution Schema:**
```javascript
{
  id: 'ubuntu',
  name: 'Ubuntu',
  tagline: 'The friendly one that just works',
  description: 'User-friendly description without jargon...',

  // Scoring attributes (0-10 scale)
  attributes: {
    beginnerFriendly: 9,
    stability: 8,
    cuttingEdge: 4,
    customizability: 6,
    lightweightness: 5,
    privacy: 5,
    gaming: 7,
    communitySupport: 10,
    documentation: 9
  },

  // For display
  logo: '/images/distros/ubuntu.svg',
  screenshot: '/images/screenshots/ubuntu.png',
  defaultDE: 'gnome',
  supportedDEs: ['gnome', 'kde', 'xfce'],

  // Next steps content
  downloadUrl: 'https://ubuntu.com/download',
  tryWithoutInstalling: true,
  installDifficulty: 'easy',
  gettingStartedSteps: [...]
}
```

**Desktop Environment Schema:**
```javascript
{
  id: 'gnome',
  name: 'GNOME',
  tagline: 'Clean, modern, and focused',
  description: 'User-friendly description...',

  attributes: {
    traditionalLayout: 2,    // vs innovative
    visualPolish: 9,
    simplicity: 8,           // vs feature-rich
    resourceUsage: 6,        // higher = lighter
    touchFriendly: 9,
    customizability: 4
  },

  screenshot: '/images/de/gnome.png',
  styleKeywords: ['modern', 'clean', 'minimal']
}
```

**Question Schema:**
```javascript
{
  id: 'stability-preference',
  category: 'values',
  text: 'What sounds better to you?',
  hint: 'This helps us understand if you prefer a computer that stays the same or one that is always evolving.',
  type: 'choice',
  options: [
    {
      id: 'stable',
      text: 'I want my computer to be reliable and predictable. I do not need the newest features.',
      icon: 'shield',
      impact: { stability: 2, cuttingEdge: -2 }
    },
    {
      id: 'cutting-edge',
      text: 'I love trying new things! I am okay with occasional hiccups if it means getting cool new features.',
      icon: 'rocket',
      impact: { stability: -1, cuttingEdge: 3 }
    },
    {
      id: 'balanced',
      text: 'Somewhere in the middle - reasonably stable with reasonably recent features.',
      icon: 'balance',
      impact: { stability: 1, cuttingEdge: 1 }
    }
  ],
  allowSkip: true
}
```

---

## 5. Content Categories & Matching Factors

### 5.1 User Skill Level / Comfort
**Why it matters:** Determines how much hand-holding vs flexibility to recommend.

| User Says | We Interpret | Distro Lean |
|-----------|-------------|-------------|
| "I barely know how to use my current computer" | Needs maximum simplicity | Linux Mint, Zorin OS |
| "I'm comfortable but not technical" | Needs good defaults, easy help | Ubuntu, Pop!_OS |
| "I can figure things out" | Can handle some complexity | Fedora, openSUSE |
| "I enjoy tinkering" | Wants control | Arch-based, Debian |

### 5.2 Stability vs Cutting-Edge
**Why it matters:** Rolling vs point releases, tested vs bleeding edge.

| User Says | We Interpret | Distro Lean |
|-----------|-------------|-------------|
| "I hate when things change" | Long-term support, stable | Debian Stable, Ubuntu LTS |
| "I like getting new stuff" | Recent but tested | Fedora, Ubuntu interim |
| "Give me everything NOW" | Rolling release | Manjaro, openSUSE TW |

### 5.3 Visual Style Preferences
**Why it matters:** Desktop environment selection.

| User Preference | DE Lean |
|-----------------|---------|
| "Like Windows" | KDE, Cinnamon, XFCE |
| "Like macOS" | GNOME, Pantheon |
| "Something unique" | GNOME, Cosmic |
| "I just want it minimal" | XFCE, LXQt |

### 5.4 Hardware Considerations
**Why it matters:** Resource requirements vary dramatically.

| Hardware | Recommendation Adjustment |
|----------|--------------------------|
| < 4GB RAM, old CPU | Lightweight DEs, lighter distros |
| 8GB+ RAM, modern | Full range available |
| Gaming GPU | Pop!_OS, Nobara, gaming-optimized |
| Laptop (battery) | Consider power management |

### 5.5 Use Case
**Why it matters:** Some distros/DEs excel at specific tasks.

| Use Case | Distro Lean | DE Lean |
|----------|-------------|---------|
| General/browsing | Ubuntu, Mint | Any |
| Gaming | Pop!_OS, Nobara | KDE, GNOME |
| Development | Fedora, Ubuntu | GNOME, KDE |
| Creative work | Ubuntu Studio | KDE |
| Privacy-focused | Tails, Fedora | GNOME |
| Old hardware revival | AntiX, Puppy | LXDE, LXQt |

### 5.6 Community/Support Preferences
**Why it matters:** Different communities have different cultures.

| Preference | Distro Lean |
|------------|-------------|
| "I want official support options" | Ubuntu, RHEL-family |
| "I'm okay asking online" | Any with active community |
| "I prefer to figure it out myself" | Well-documented distros |

---

## 6. Scope Boundaries

### 6.1 IN SCOPE for v1

**Features:**
- Complete questionnaire flow (10-15 questions)
- Distribution recommendations (8-12 distros in database)
- Desktop environment recommendations (5-7 DEs in database)
- Results page with explanations
- Mobile-responsive design
- Shareable results (URL-based)
- Local storage for resuming

**Content:**
- Beginner-friendly distros: Ubuntu, Linux Mint, Zorin OS, Pop!_OS, elementary OS
- Intermediate distros: Fedora, openSUSE, Manjaro
- Specialty distros: 2-3 based on common use cases
- Desktop environments: GNOME, KDE Plasma, Cinnamon, XFCE, Pantheon

**Quality:**
- Works on modern browsers (Chrome, Firefox, Safari, Edge)
- Accessible (keyboard navigation, screen reader friendly)
- Fast (< 2s initial load)

### 6.2 OUT OF SCOPE for v1

**Explicitly excluded:**
- User accounts / saved profiles
- Backend/database (pure static site)
- Installation guides (link to official docs instead)
- Live chat or support features
- Distro comparison tool (separate from questionnaire)
- Community features (forums, comments)
- Multiple languages (English only for v1)
- Advanced/technical mode
- Server-side analytics
- A/B testing infrastructure

**Distros NOT included in v1:**
- Expert-focused: Arch, Gentoo, Slackware, NixOS
- Server-focused: CentOS, Rocky, AlmaLinux
- Niche: Most single-purpose distros
- Discontinued or unstable projects

**Maybe for v2:**
- "Compare these distros" feature
- Installation difficulty estimator
- Hardware compatibility checker
- Community success stories
- Multiple language support

---

## 7. Implementation Phases (Suggested)

### Phase 1: Foundation
- Project setup (Vite + React)
- Basic routing and state management
- Component library foundation
- Data structure definitions

### Phase 2: Questionnaire
- Question components and flow
- Answer collection and state
- Progress indication
- Question content writing

### Phase 3: Matching Algorithm
- Scoring algorithm implementation
- Distro/DE data entry
- Match explanation generation
- Results calculation

### Phase 4: Results & Polish
- Results page design
- Next steps content
- Visual polish and animations
- Mobile optimization

### Phase 5: Launch Prep
- Testing across browsers/devices
- Performance optimization
- GitHub Pages deployment
- Share functionality

---

## 8. Open Questions & Risks

### Content Risks
- How do we keep distro information current?
- How do we handle distros that change significantly?
- Who reviews content for accuracy?

### Technical Risks
- Image assets could bloat bundle size
- Complex matching logic could have edge cases
- Browser compatibility for older devices

### UX Risks
- Question fatigue if too long
- Oversimplification could miss important nuances
- Users might not trust "quiz" format for important decisions

---

## 9. Executive Decisions (Finalized)

### Branding
- **Brand**: "The Morpheus" - warm, encouraging tone from a YouTuber documenting his Linux journey
- **Tone**: Friendly, motivating, honest - like a friend helping you try something new
- **Logo**: White transparent version (for dark mode)
- **Links**: Patreon (https://www.patreon.com/themorpheus), Website (the-morpheus.de)
- **Footer**: "Built by Morpheus"

### Language
- **EVERYTHING IN GERMAN** - all UI, questions, results, explanations

### Distro Selection
- **Include as many distros as possible** - comprehensive coverage
- **All distros treated equally** - no favoritism for commercial vs community

### Recommendations
- **Single top recommendation** with clear "this is your best match"
- **Percentage-based ranking** shown for all distros at the end
- **Distro + DE combos** - recommend the pairing, not separate choices

### Honesty Policy
- **Be honest about limitations** - if Linux won't work well for someone, tell them
- **Gaming with kernel anti-cheat** (League of Legends, Valorant, etc.) - clearly warn users
- **Suggest alternatives** when available (Google Docs instead of MS Office, etc.)

### Questionnaire Design
- **Up to 100 questions acceptable** - personalization over brevity
- **Live-updating recommendations sidebar** - Top 5 Distro+DE combos with percentages
- **Can stop early** if algorithm is confident enough
- **Users don't know what a DE is** - ask about preferences, not technical terms
- **Only ask questions that affect scoring** - no "story" questions
- **Get specific** - ask about specific games, specific software dependencies

### Hardware Questions
- Only ask if it AFFECTS distro/DE choice
- Age of computer doesn't matter (can install drivers on any system)
- GPU brand matters for some distros (NVIDIA ISO for Pop!_OS etc.)

### Software Dependencies
- Ask about software that makes Linux hard
- Always offer "Ich bin offen für Neues" option

### Games
- Research each game individually - landscape changed drastically
- Ask specifically about games that DON'T work
- Suggest dual-boot for incompatible games

### Distro+DE Matching
- Match DE based on user preferences
- Use distro's default/shipped DE when it makes sense
- Research required for current DE shipping status

### Technical Constraints
- **No analytics whatsoever** - pure static site, zero tracking
- **No maintenance planned** - launch and leave
- **Mobile-first design** - optimized for phones, works on desktop

### Results Page
- **Link to distro download page only** - no installation guides
- **Keep it simple** - the distro's own resources handle the rest

---

*Document created: January 2026*
*Status: Executive decisions finalized - Ready for research phase*
