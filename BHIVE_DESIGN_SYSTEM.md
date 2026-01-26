# BHive Visual Brand Design System

A comprehensive guide for creating applications with the BHive visual identity, featuring the iconic hexagon motif, warm gold/orange color palette, and modern typography.

---

## Table of Contents

1. [Color System](#color-system)
2. [Typography](#typography)
3. [Hexagon Design System](#hexagon-design-system)
4. [Spacing & Layout](#spacing--layout)
5. [Animation Guidelines](#animation-guidelines)
6. [Component Patterns](#component-patterns)
7. [Dark Mode & Dark Sections](#dark-mode--dark-sections)
8. [Implementation Reference](#implementation-reference)

---

## Color System

### Primary Brand Colors

The BHive brand uses a warm, energetic palette inspired by the honeybee theme.

**Important**: Always use the HSL CSS variables in your code. Hex values are approximate references only.

| Color Name | CSS Variable | HSL Value | Approx. Hex | Usage |
|------------|--------------|-----------|-------------|-------|
| **BHive Gold** | `--bhive-gold` | `45 96% 52%` | ~#F5C518 | Primary accent, CTAs, headlines, counters |
| **BHive Yellow** | `--bhive-yellow` | `22 100% 55%` | ~#FF5C1A | Secondary accent, gradients, highlights |
| **BHive Orange** | `--bhive-orange` | `33 100% 50%` | ~#FF8C00 | Tertiary accent, funnel stages, emphasis |
| **BHive Black** | `--bhive-black` | `0 0% 0%` | #000000 | Dark backgrounds, text on gold |
| **BHive Grey** | `--bhive-grey` | `120 43% 95%` | ~#EFF7EF | Light backgrounds, subtle surfaces |

> **Note**: When implementing, always reference colors via Tailwind classes (`bg-bhive-gold`, `text-bhive-gold`) or CSS variables (`hsl(var(--bhive-gold))`). Never hardcode hex values.

### Gradient Combinations

```css
/* Primary gold gradient */
background: linear-gradient(135deg, hsl(45 96% 52%), hsl(33 100% 50%));

/* Hero section gradient overlay */
background: linear-gradient(180deg, 
  rgba(0, 0, 0, 0.7) 0%, 
  rgba(0, 0, 0, 0.4) 50%, 
  rgba(0, 0, 0, 0.8) 100%
);

/* Funnel visualization gradient */
background: linear-gradient(to right, 
  hsl(var(--bhive-gold)), 
  hsl(var(--bhive-yellow))
);
```

### Semantic Color Mapping

For UI components, map brand colors to semantic tokens:

```css
:root {
  --primary: 45 98% 52%;        /* BHive Gold - main CTAs */
  --primary-foreground: 0 0% 0%; /* Black text on gold */
  --ring: 45 98% 52%;            /* Focus rings in gold */
  --chart-1: 45 98% 52%;         /* Charts use brand colors */
  --chart-2: 22 100% 55%;
  --chart-3: 33 100% 50%;
}
```

### Tailwind Color Usage

```tsx
// Primary brand colors
<div className="bg-bhive-gold text-bhive-black" />
<div className="text-bhive-gold" />
<div className="border-bhive-gold" />

// With opacity
<div className="bg-bhive-gold/10" />  // 10% opacity
<div className="bg-bhive-gold/20" />  // 20% opacity

// Gradients
<div className="bg-gradient-to-r from-bhive-gold to-bhive-orange" />
```

---

## Typography

### Font Families

| Font | Usage | CSS Variable | Weight |
|------|-------|--------------|--------|
| **Bebas Neue** | Headlines, section titles, large numbers | `font-headline` | 400 (Regular) |
| **Montserrat** | Body text, UI elements, descriptions | `font-sans` | 100-900 (Variable) |

### Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
```

### Typography Scale

```tsx
// Headlines - Bebas Neue
<h1 className="font-headline text-6xl md:text-8xl tracking-wide" />
<h2 className="font-headline text-4xl md:text-6xl tracking-wide" />
<h3 className="font-headline text-3xl md:text-4xl" />

// Large display numbers (counters, metrics)
<span className="font-headline text-5xl md:text-7xl text-bhive-gold" />

// Body text - Montserrat
<p className="font-sans text-lg leading-relaxed" />
<p className="font-sans text-base" />
<p className="font-sans text-sm text-muted-foreground" />

// Labels and captions
<span className="font-sans text-xs uppercase tracking-wider" />
```

### Typography Patterns

**Section Headlines:**
```tsx
<h2 className="font-headline text-4xl md:text-6xl text-bhive-gold text-center mb-4">
  SECTION TITLE HERE
</h2>
```

**Subheadlines:**
```tsx
<p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
  Supporting description text goes here.
</p>
```

**Counter/Metric Display:**
```tsx
<div className="font-headline text-5xl md:text-7xl text-bhive-gold">
  <CountUp end={value} duration={2.5} />
</div>
<p className="text-sm text-muted-foreground uppercase tracking-wider">
  Metric Label
</p>
```

---

## Hexagon Design System

The hexagon is the core visual motif, reflecting BHive's identity and the natural honeycomb structure.

### CSS Hexagon Clip-Path

```css
.hex-clip {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
```

### Hexagon Components

**Basic Hexagon Element:**
```tsx
<div className="hex-clip w-24 h-28 bg-bhive-gold" />
```

**Hexagonal Card/Counter:**
```tsx
<div className="relative">
  <div className="hex-clip w-32 h-36 bg-gradient-to-br from-bhive-gold to-bhive-orange flex items-center justify-center">
    <div className="text-center">
      <span className="font-headline text-4xl text-bhive-black">66</span>
      <p className="text-xs text-bhive-black/70">Companies</p>
    </div>
  </div>
</div>
```

**Floating Hexagon Decorations:**
```tsx
function FloatingHexagons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute hex-clip w-16 h-20 bg-bhive-gold/10 animate-float"
        style={{ top: '20%', left: '10%' }}
      />
      <div 
        className="absolute hex-clip w-24 h-28 bg-bhive-yellow/10 animate-float-slow"
        style={{ top: '60%', right: '15%', animationDelay: '1s' }}
      />
      <div 
        className="absolute hex-clip w-12 h-14 bg-bhive-orange/10 animate-float"
        style={{ bottom: '30%', left: '20%', animationDelay: '2s' }}
      />
    </div>
  );
}
```

### Honeycomb Background Pattern

**SVG Honeycomb Pattern:**
```tsx
function HoneycombPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="honeycomb" width="56" height="100" patternUnits="userSpaceOnUse">
          <path 
            d="M28 0L56 14v28L28 56 0 42V14L28 0z M28 44L56 58v28L28 100 0 86V58L28 44z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#honeycomb)" />
    </svg>
  );
}
```

**CSS Honeycomb Grid:**
```css
.honeycomb-bg {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 0L56 14v28L28 56 0 42V14L28 0z' fill='none' stroke='%23f6c61410' stroke-width='1'/%3E%3C/svg%3E");
  background-repeat: repeat;
}
```

### Hexagon Accent Lines

For section dividers or decorative elements:

```tsx
<div className="flex items-center justify-center gap-4 my-8">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-bhive-gold/50" />
  <div className="hex-clip w-4 h-5 bg-bhive-gold" />
  <div className="hex-clip w-6 h-7 bg-bhive-gold" />
  <div className="hex-clip w-4 h-5 bg-bhive-gold" />
  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-bhive-gold/50" />
</div>
```

---

## Spacing & Layout

### Section Spacing

```tsx
// Full-viewport sections
<section className="min-h-screen py-20 md:py-32 px-4 md:px-8" />

// Standard content sections
<section className="py-16 md:py-24 px-4 md:px-8" />

// Content container
<div className="max-w-7xl mx-auto" />
```

### Responsive Padding Scale

| Size | Mobile | Desktop | Usage |
|------|--------|---------|-------|
| Section Y | `py-16` | `py-24` to `py-32` | Vertical section padding |
| Section X | `px-4` | `px-8` | Horizontal container padding |
| Card | `p-4` | `p-6` | Internal card padding |
| Component gap | `gap-4` | `gap-6` to `gap-8` | Grid/flex spacing |

### Grid Patterns

**Metric Cards Grid:**
```tsx
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6" />
```

**Content Cards Grid:**
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" />
```

**Two-Column Layout:**
```tsx
<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center" />
```

---

## Animation Guidelines

### Animation Libraries

- **GSAP + ScrollTrigger**: Scroll-driven section reveals
- **Framer Motion**: Component-level entrance animations
- **react-countup**: Animated number counters
- **Tailwind Keyframes**: Simple looping animations

### GSAP ScrollTrigger Setup

```tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

useEffect(() => {
  const sections = document.querySelectorAll('[data-animate-section]');
  
  sections.forEach((section) => {
    gsap.fromTo(
      section,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });
}, []);
```

### Framer Motion Patterns

**Fade Up Entrance:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={isVisible ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
```

**Staggered Children:**
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants} />
  ))}
</motion.div>
```

**Scale + Fade Entrance:**
```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
  transition={{ duration: 0.5, ease: "easeOut" }}
/>
```

### Tailwind Keyframe Animations

```ts
// tailwind.config.ts
keyframes: {
  "float": {
    "0%, 100%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-20px)" },
  },
  "pulse-glow": {
    "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
    "50%": { opacity: "1", transform: "scale(1.05)" },
  },
  "hexagon-spin": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
},
animation: {
  "float": "float 6s ease-in-out infinite",
  "float-slow": "float 8s ease-in-out infinite",
  "pulse-glow": "pulse-glow 3s ease-in-out infinite",
  "hexagon-spin": "hexagon-spin 20s linear infinite",
}
```

**Usage:**
```tsx
<div className="animate-float" />
<div className="animate-float-slow" style={{ animationDelay: '1s' }} />
<div className="animate-pulse-glow" />
```

### Animated Counters

```tsx
import CountUp from 'react-countup';

<CountUp
  start={0}
  end={value}
  duration={2.5}
  delay={0.2}
  decimals={value % 1 !== 0 ? 1 : 0}
  suffix="%"
/>
```

### Timing & Easing Recommendations

| Animation Type | Duration | Easing | Delay Pattern |
|----------------|----------|--------|---------------|
| Section reveal | 0.8-1.2s | `power2.out` / `easeOut` | None |
| Card entrance | 0.5-0.6s | `easeOut` | Stagger 0.1-0.15s |
| Counter | 2-3s | Linear | 0.2s initial |
| Hover effects | 0.2-0.3s | `ease` | None |
| Floating elements | 6-8s | `ease-in-out` | Varied |

---

## Component Patterns

### Section Wrapper

```tsx
interface SectionWrapperProps {
  id: string;
  dark?: boolean;
  children: React.ReactNode;
}

function SectionWrapper({ id, dark, children }: SectionWrapperProps) {
  return (
    <section
      id={id}
      data-testid={`section-${id}`}
      className={`relative py-20 md:py-32 px-4 md:px-8 ${
        dark ? 'bg-bhive-black text-white' : 'bg-background'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
```

### Section Headlines

```tsx
function SectionHeadline({ dark, children }: { dark?: boolean; children: React.ReactNode }) {
  return (
    <h2 className={`font-headline text-4xl md:text-6xl text-center mb-4 ${
      dark ? 'text-bhive-gold' : 'text-bhive-gold'
    }`}>
      {children}
    </h2>
  );
}

function SectionSubheadline({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <p className={`text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 ${className}`}>
      {children}
    </p>
  );
}
```

### Metric Counter Card

```tsx
function MetricCard({ value, label, suffix = '' }: MetricCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <Card className="hover-elevate text-center">
        <CardContent className="p-6">
          <div className="font-headline text-4xl md:text-5xl text-bhive-gold mb-2">
            {inView ? (
              <CountUp start={0} end={value} duration={2.5} />
            ) : '0'}
            {suffix}
          </div>
          <p className="text-sm text-muted-foreground uppercase tracking-wider">
            {label}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
```

### Primary CTA Button

```tsx
<Button 
  size="lg" 
  className="bg-bhive-gold text-bhive-black font-semibold"
>
  Apply Now
</Button>
```

> **Important**: Do NOT add `hover-elevate` or `active-elevate-2` to `<Button>` or `<Badge>` components - they already have these interactions built-in. Also avoid manually setting padding (`px-*`, `py-*`) or height (`h-*`) on Buttons; use the `size` prop instead.

### Card with Gold Accent

```tsx
<Card className="hover-elevate overflow-hidden">
  <div className="h-1 bg-gradient-to-r from-bhive-gold to-bhive-orange" />
  <CardContent className="p-6">
    {/* Content */}
  </CardContent>
</Card>
```

### Badge Styles

```tsx
// Gold highlight badge
<Badge className="bg-bhive-gold text-bhive-black">FEATURED</Badge>

// Outline badge
<Badge variant="outline" className="border-bhive-gold text-bhive-gold">
  Partnership
</Badge>

// Subtle badge
<Badge className="bg-bhive-gold/10 text-bhive-gold">
  New in 2025
</Badge>
```

---

## Dark Mode & Dark Sections

### Dark Section Pattern

For sections with dark backgrounds (hero, risks, footer):

```tsx
<section className="relative bg-bhive-black text-white py-20 md:py-32">
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    <h2 className="font-headline text-4xl md:text-6xl text-bhive-gold">
      Section Title
    </h2>
    <p className="text-white/70">
      Supporting text with reduced opacity
    </p>
  </div>
</section>
```

### Color Adjustments for Dark Backgrounds

| Element | Light Background | Dark Background |
|---------|------------------|-----------------|
| Headline | `text-bhive-gold` | `text-bhive-gold` |
| Body text | `text-foreground` | `text-white` |
| Muted text | `text-muted-foreground` | `text-white/70` |
| Cards | `bg-card` | `bg-white/5` |
| Borders | `border` | `border-white/10` |

### Transparent Card on Dark

```tsx
<Card className="bg-white/5 border-white/10 backdrop-blur-sm">
  <CardContent className="p-6">
    <p className="text-white/90">Content here</p>
  </CardContent>
</Card>
```

---

## Implementation Reference

### File Structure

```
client/src/
├── index.css          # CSS variables, brand tokens
├── components/
│   ├── ui/            # Shadcn components
│   └── sections/      # Page sections
│       ├── Hero.tsx
│       ├── Challenge.tsx
│       └── ...
└── lib/
    └── data.ts        # Static content/data

tailwind.config.ts     # Brand colors, fonts, animations
```

### Required Dependencies

```json
{
  "dependencies": {
    "gsap": "^3.x",
    "framer-motion": "^11.x",
    "react-countup": "^6.x",
    "react-intersection-observer": "^9.x"
  }
}
```

### Data-testid Convention

All interactive and display elements should have stable test IDs:

```tsx
// Navigation
data-testid="button-nav-{section}"
data-testid="button-mobile-menu"

// Sections
data-testid="section-{id}"

// Interactive elements
data-testid="button-{action}"
data-testid="link-{destination}"
data-testid="tab-{name}"

// Display elements
data-testid="card-{type}-{id}"
data-testid="text-{content-type}"
data-testid="counter-{metric}"
```

### Quick Start Checklist

1. Import Google Fonts (Bebas Neue + Montserrat)
2. Add brand color CSS variables to index.css
3. Configure Tailwind with brand colors and font families
4. Add hexagon clip-path utility class
5. Set up GSAP ScrollTrigger registration
6. Use consistent section wrapper pattern
7. Apply font-headline to all major text
8. Use animate-float for decorative hexagons
9. Include CountUp for all numeric displays
10. Add data-testid to all interactive elements

---

## Do's and Don'ts

### Button & Badge Interactions

| Do | Don't |
|----|-------|
| `<Button size="lg">Text</Button>` | `<Button className="hover-elevate">` |
| `<Button className="bg-bhive-gold">` | `<Button className="px-8 py-4">` |
| `<Badge className="bg-bhive-gold">` | `<Badge className="active-elevate-2">` |
| Use `size` prop for Button sizing | Manually set `h-*` or `w-*` on Buttons |
| Use `size="icon"` for icon-only buttons | `<Button className="h-8 w-8">` |

### Color Usage

| Do | Don't |
|----|-------|
| `className="bg-bhive-gold"` | `style={{ background: '#F6C614' }}` |
| `className="text-bhive-gold"` | Hardcode hex color values |
| Use CSS variables: `hsl(var(--bhive-gold))` | Mix brand colors with arbitrary values |
| `bg-bhive-gold/20` for transparency | Guess hex equivalents |

### Typography

| Do | Don't |
|----|-------|
| `font-headline` for all major headings | Use Bebas Neue for body text |
| `font-sans` for body text | Mix fonts arbitrarily |
| Use uppercase for metric labels | ALL CAPS for body paragraphs |

### Hexagon Elements

| Do | Don't |
|----|-------|
| Use `hex-clip` utility class | Manually write clip-path every time |
| Apply to decorative elements | Overuse hexagons (1-3 per section max) |
| Use with `animate-float` for movement | Use without considering accessibility |

### Hover & Active States

| Do | Don't |
|----|-------|
| Use `hover-elevate` on Cards, divs | Add `hover-elevate` to Button or Badge |
| Let Shadcn components handle their own states | Override button hover colors manually |
| Use subtle transforms | Dramatic scale changes on hover |

---

## Brand Voice Summary

- **Visual Identity**: Hexagon-centric, warm gold/orange palette, bold headlines
- **Motion**: Smooth, purposeful animations that reveal content progressively
- **Typography**: Strong contrast between Bebas Neue headlines and Montserrat body
- **Interaction**: Subtle hover elevations, meaningful scroll-triggered reveals
- **Accessibility**: High contrast gold on dark backgrounds, clear visual hierarchy

---

*This design system document reflects the BHive 2025 Annual Report implementation. Update as the brand evolves.*
