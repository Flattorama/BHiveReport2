# BHive 2025 Annual Report Design Guidelines

## Design Approach
**Reference-Based Scrollytelling Experience**: Draw inspiration from immersive annual reports like Stripe, Apple's product pages, and premium scrollytelling sites. The narrative should feel like "entering a hive" with interconnected hexagonal cells revealing stories of adaptation and growth.

## Color System
```
Primary Accent: #f6c614 (BHive Gold) - Dominant brand color
Secondary Accent: #ff6617 (Bright Yellow) - Supporting highlights
Action/CTA: #ff9100 (Action Orange) - Buttons ONLY
Text/Backgrounds: #000000 (BHive Black)
Background/Forms: #f0f6f0 (BHive Grey) - 10-15% usage
```

## Typography Hierarchy

**Headlines (Bebas Neue - Bold, ALL CAPS, Condensed)**
- H1: Large, impactful section titles
- H2: Sub-section headers
- Navigation: All uppercase

**Body Text (Montserrat)**
- Body: Regular (400), sentence case
- Subheadings: Semi-Bold (600), sentence case
- Data Labels: Medium (500), uppercase
- Pull Quotes: Bold emphasis on key statements

## Hexagon Design System
**Pervasive Throughout Experience:**
- Section containers with hexagonal frames
- Photo masks using hexagonal clip-paths
- Background patterns with subtle honeycomb grids (60px × 104px, 5% opacity)
- Data point markers as small hexagon icons
- Transition wipes using hexagon animations
- Loading states with pulsing hexagon cells
- Industry sector icons within hexagonal shapes

## Layout & Spacing
- Full-viewport sections with smooth scroll transitions
- Generous whitespace between major sections
- Content max-width: 1280px centered
- Consistent vertical rhythm with 80-120px section padding
- Responsive breakpoints: Mobile (stack vertically), Tablet (2-column), Desktop (full layouts)

## Section Specifications

### Hero Section
- Full-viewport dark background with floating golden hexagons
- Large animated counter cards for 6 key metrics (66 companies, 14 startups, 3,578 hours, 5,781 leads, 69 mentors, 23 events)
- Headline: "WHERE GLOBAL FOUNDERS TAKE FLIGHT" in Bebas Neue
- Scroll CTA at bottom with animated arrow
- Hexagons converge into BHive logo on scroll transition

### The IRCC Pivot Section
- Interactive funnel visualization narrowing from 5,781 to 14
- Visual "cut line" labeled "IRCC Cap" with animated scissors effect
- Pull quote in standout typography
- Tooltip overlays on hover for each funnel stage
- BHive Gold to Action Orange gradient through funnel stages

### Global Footprint Section
- Interactive 3D globe OR stylized 2D map
- Hexagonal hotspots pulsing on delegation countries (Poland, Nigeria, Thailand, Philippines, Kenya, Sierra Leone)
- Animated connection arcs from countries to Brampton marker
- Auto-rotate on idle, pause on interaction
- Expandable info panels with delegation details

### Cohort Ecosystem Section
- Tabbed interface for Winter/Spring/Fall 2025
- Stacked horizontal bar charts showing Phase 1/2/3 distribution
- Industry sector hexagonal icons (EdTech, HealthTech, CleanTech, AI, SaaS, FinTech, Social Impact, D2C)
- Icon + text cards for program innovations (4 cards: Townhalls, SURF Sessions, Pitch Feedback, 1:1 Support)

### Digital Growth Section
- Dramatic line graphs with upward trajectories
- Bold percentage increases (+653%, +77%, +410%, +102%)
- Mini-funnel for Altitude Accelerator partnership (138 → 69 → 48)
- Animated graph drawing on scroll-in
- Particle burst effects at peak numbers

### Timeline Section
- Horizontal or vertical milestone cards
- Chronological flow through 2025 events
- Hexagonal date markers
- Event cards with photos (when available), descriptions, and impact metrics

## Animations & Interactions
- **Smooth Scroll**: Lenis implementation for buttery transitions
- **Counter Animations**: Numbers count up on viewport entry (2-3 second duration)
- **Graph Animations**: Line paths draw progressively, bars grow on scroll
- **Hexagon Effects**: Floating, pulsing, converging patterns
- **Scroll-Triggered**: Section reveals at 60-80% viewport entry
- **Hover States**: Subtle scale (1.02x) and glow effects on interactive elements
- **Minimal Motion**: Respect reduced motion preferences

## Images
**Strategic Placement:**
- Hero: Background texture or abstract hexagon pattern (no large hero image needed - focus on animated counters)
- Global Section: Globe visualization (3D rendered or illustrated)
- Cohort Section: Possible founder photos in hexagonal masks
- Timeline: Event photos within milestone cards
- All images use hexagonal clip-paths where applicable

## Component Patterns
- Cards: Elevated with subtle shadow, hexagonal accent borders
- Buttons: Action Orange background, white text, rounded corners, no hover blur needed
- Tooltips: Dark background, white text, hexagonal pointer
- Modals: Centered overlay, hexagonal frame, blur backdrop
- Progress indicators: Hexagonal step markers
- Data visualizations: BHive Gold primary, gradients to orange for emphasis

## Responsive Behavior
- Mobile: Single column, vertically stacked sections, simplified animations
- Tablet: 2-column grids where appropriate, scaled-down globe
- Desktop: Full multi-column layouts, rich interactions, 3D effects
- All interactive elements maintain touch-friendly 44px minimum tap targets