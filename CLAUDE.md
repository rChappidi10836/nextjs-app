# CLAUDE PROJECT MEMORY & GUIDANCE DOCUMENT

## ⚠️ CRITICAL STATEMENT ⚠️
**"I want you to not write a single line of code and just guide me"**
- This statement must be considered every time Claude thinks and generates anything
- Claude's role is to GUIDE, not to write code directly
- Always provide instructions, explanations, and step-by-step guidance
- Never directly implement or write code unless explicitly asked

---

## PROJECT OVERVIEW: Sliding Window Portfolio Website

### Ultimate Requirement
Create a sliding window themed portfolio website using the current Next.js project named "NEXTJS-APP"

### Current Project Status
- **Framework**: Next.js 15.5.2 with React 19
- **Styling**: Tailwind CSS v4
- **Linting**: Biome
- **Current Pages**: Home, Projects, Work, About Me (basic structure exists)
- **Build Tool**: Turbopack enabled

### Required Features

#### 1. Sliding Window Layout
- Tabs (home, projects, experience, contact) occupy 75% of screen
- 25% space around tabs left blank/empty
- Customizable sizing capability

#### 2. Realistic Water Effects
- Water effect at bottom of tabs
- Blurred reflection of tabs in water
- Interactive water responding to user touch/interaction
- Realistic appearance (reference: Stranger Things upside-down scenes)
- Not random colors - authentic water simulation

#### 3. Theme System
- Dark and light mode toggle
- In light mode: dark water with continued reflection
- Theme affects water appearance and overall UI

#### 4. Technical Requirements
- Responsive design
- Smooth animations and transitions
- Touch/mouse interaction support
- Performance optimized for 60fps

---

## DUAL NAVIGATION ARCHITECTURE

### Core Strategy: Enhance Don't Replace
- **Keep existing structure**: All current pages (`page.js`, `work/page.js`, etc.) remain functional
- **Add sliding window system**: New components provide immersive experience
- **Smart code reuse**: Single content components used in both navigation modes
- **User choice**: Both traditional and sliding window navigation available

### Code Reuse Pattern

#### Content Components (Write Once, Use Everywhere):
```
src/app/components/content/
├── HomeContent.jsx     (home page content)
├── WorkContent.jsx     (work experience content)  
├── ProjectsContent.jsx (projects showcase content)
└── AboutContent.jsx    (about me content)
```

#### Dual Usage:
1. **Traditional Pages**: Import content components for standard navigation
2. **Sliding Window**: Same content components in animated container

#### Benefits:
- **Development**: 20% extra code (not 100% duplication)
- **Maintenance**: Update content once, applies everywhere
- **Performance**: Shared components, smaller bundle sizes
- **Consistency**: Same content, different presentations

### User Experience Options:

#### Method 1: Traditional Navigation
- Direct URLs (`/work`, `/projects`, `/aboutme`)
- Browser back/forward buttons work
- Bookmarkable pages for sharing
- SEO benefits and accessibility
- Fast loading, works without JavaScript

#### Method 2: Sliding Window Experience  
- Interactive sliding interface with water effects
- Smooth animations between sections
- Touch/gesture navigation support
- Immersive portfolio experience
- Single-page app feel

### Technical Implementation:
- **Content components**: Pure, reusable React components
- **Layout wrappers**: Different for traditional vs sliding modes
- **Routing**: Next.js handles URLs automatically
- **State management**: Zustand for theme and active tab state
- **Animation**: Framer Motion for sliding transitions

---

## IMPLEMENTATION PHASES

### Phase 1: Project Setup & Dependencies
**What to Install:**
- `three.js` or `@react-three/fiber` - WebGL water simulation
- `framer-motion` - smooth animations and transitions
- `react-use-gesture` - touch/mouse interactions
- `zustand` or React Context - theme state management

### Phase 2: Core Layout Architecture
**Components to Create:**
- Main container with 75/25 layout
- Tab navigation system
- Sliding window mechanism
- Responsive grid system

### Phase 3: Water Effect Implementation
**Technical Approach:**
- WebGL shaders for realistic water
- Real-time reflection rendering
- Wave algorithms and physics
- Ripple effects for interactions

### Phase 4: Theme System
**Implementation Strategy:**
- Theme toggle component
- CSS custom properties for theming
- Water color logic based on theme
- localStorage for theme persistence

### Phase 5: Content & Polish
**Final Steps:**
- Populate page content
- Add entrance/exit animations
- Mobile optimization
- Performance testing and optimization

### Phase 6: Documentation & Memory System ✅
- Create this CLAUDE.md file
- Project roadmap documentation
- Conversation memory system

---

## TECHNICAL SPECIFICATIONS

### Dependencies Needed
```bash
# Install with pnpm:
pnpm add three @react-three/fiber @react-three/drei framer-motion @use-gesture/react zustand
```

**Installed Versions:**
- `three: ^0.180.0`
- `@react-three/fiber: ^9.3.0` 
- `@react-three/drei: ^10.7.5`
- `framer-motion: ^12.23.12`
- `@use-gesture/react: ^10.3.1`
- `zustand: ^5.0.8`

### File Structure Planning
```
src/app/
├── page.js                    (keep - home page)
├── work/page.js              (keep - traditional work page)
├── projects/page.js          (keep - traditional projects page)  
├── aboutme/page.js           (keep - traditional about page)
├── layout.js                 (keep - enhance for theme support)
├── globals.css               (keep - add water effect styles)
├── components/
│   ├── content/              (NEW - reusable content)
│   │   ├── HomeContent.jsx
│   │   ├── WorkContent.jsx
│   │   ├── ProjectsContent.jsx
│   │   └── AboutContent.jsx
│   ├── Layout/               (NEW - sliding window system)
│   │   ├── MainLayout.jsx
│   │   └── SlidingWindow.jsx
│   ├── Navigation/           (NEW - tab navigation)
│   │   └── TabNavigation.jsx
│   ├── WaterEffect/          (NEW - water simulation)
│   │   └── WaterCanvas.jsx
│   └── ThemeToggle/          (NEW - dark/light mode)
│       └── ThemeSwitch.jsx
├── hooks/                    (NEW - custom hooks)
│   └── useTheme.js
└── store/                    (NEW - state management)
    └── themeStore.js
```

### Key Technical Concepts
1. **WebGL Water Simulation**: Use vertex and fragment shaders
2. **CSS Transforms**: For sliding tab animations
3. **Backdrop Filter**: For reflection blur effects
4. **RequestAnimationFrame**: For smooth 60fps animations
5. **Touch Events**: For mobile interaction support

---

## GUIDANCE APPROACH

### When Providing Instructions:
1. Break down each step clearly
2. Explain the "why" behind each decision
3. Provide code structure guidance without writing actual code
4. Suggest file organization and naming conventions
5. Explain technical concepts and approaches
6. Give examples of what to research or look up

### Project Commands
- **Development**: `pnpm dev`
- **Build**: `pnpm build`
- **Start**: `pnpm start`
- **Lint**: `pnpm lint` (Biome)
- **Format**: `pnpm format` (Biome)
- **Install dependencies**: `pnpm install`
- **Add new packages**: `pnpm add <package-name>`

---

## CONVERSATION MEMORY

### Project Start Date
Created on: 2025-09-10

### Key Decisions Made
- Documentation-first approach chosen
- Phase 6 (documentation) moved to Phase 1
- Guidance-only approach confirmed
- CLAUDE.md created as project memory system

### Progress Completed ✅
- **Phase 1**: Dependencies installed (all required packages in package.json)
- **Phase 2 - Partial**: Content components created in `src/app/components/content/`:
  - `Home.js` ✅
  - `Work.js` ✅
  - `Projects.js` ✅
  - `About.js` ✅
- Basic content components integrated in main `page.js`

### Current Status
- Content components are basic placeholders with minimal content
- Traditional page routing structure exists but not fully utilizing content components
- Ready to move to next phase: Layout Architecture (75/25 layout system)

### Next Steps
- Complete Phase 2: Create Layout, Navigation, WaterEffect, and ThemeToggle component directories
- Implement the 75/25 sliding window layout structure
- Create the main sliding window navigation system

---

## FUTURE REFERENCE NOTES

- Always check this file before starting any task
- Remember the critical guidance-only statement
- Use this as a reference for project requirements
- Update phases as they are completed
- Document any new decisions or changes made during development

---

*This document serves as Claude's memory and guidance reference for the sliding window portfolio project.*
- can you check and update the work according to the code written?
- actually option1 but currently I just want to build the sliding window and then later build the traditional one