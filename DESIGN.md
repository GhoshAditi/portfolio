---
name: Aditi Portfolio
description: A modern, refined, and kinetic portfolio showcase.
colors:
  primary: "#FF1313"
  neutral-bg: "#020605"
  neutral-fg: "#FEF5F8"
  secondary-fg: "#83868F"
typography:
  display:
    fontFamily: "Mozilla Text, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 8vw, 5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Mozilla Text, system-ui, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "2px"
  md: "4px"
  lg: "8px"
spacing:
  sm: "12px"
  md: "24px"
  lg: "48px"
---

# Design System: Aditi Portfolio

## 1. Overview

**Creative North Star: "The Kinetic Editorial"**

A high-performance portfolio system that merges the precision of modern editorial design with the fluid, responsive energy of a Framer-style interactive experience. The aesthetic is built on extreme contrast, clean typography, and intentional, snappy motion.

**Key Characteristics:**
- **Extreme Contrast:** Bold red (#FF1313) paired with deep, near-black neutrals.
- **Mozilla Modernism:** Clean, contemporary type using Mozilla Text for an authoritative yet refined voice.
- **Snappy Kineticism:** Motion that feels immediate and physics-based, never decorative or slow.

## 2. Colors

The palette is committed and high-impact, using a striking red accent against deep ink and warm off-white neutrals.

### Primary
- **Impact Red** (#FF1313): Used for high-priority calls to action, focus states, and critical brand moments. Used sparingly to maintain its power.

### Neutral
- **Deep Ink** (#020605): The primary background color for dark mode. Solid, authoritative, and deep.
- **Warm Shell** (#FEF5F8): The primary foreground color in dark mode (text) and background color for light mode.
- **Muted Steel** (#83868F): Used for secondary text, borders, and UI elements that need to recede.

### Named Rules
**The 10% Red Rule.** The Impact Red is used on ≤10% of any screen. Its rarity is what gives the interface its premium, deliberate feel.

## 3. Typography

**Display Font:** Mozilla Text (with system-ui fallback)
**Body Font:** Mozilla Text (with system-ui fallback) , No Bold Fonts

**Character:** Editorial and authoritative. The use of a single, contemporary family creates a cohesive, high-end feel.

### Hierarchy
- **Display** (800, clamp(2.5rem, 8vw, 5rem), 0.95): Hero headlines and major section titles. High impact, tight tracking.
- **Headline** (700, 2rem, 1.1): Secondary headings and card titles.
- **Body** (400, 1.1rem, 1.6): All long-form content. Max line length capped at 65ch for readability.
- **Label** (700, 0.75rem, 0.1em, UPPERCASE): Small metadata, eyebrow text, and interactive labels.

## 4. Elevation

The system rejects traditional glassmorphism and heavy drop shadows in favor of tonal layering and stark borders.

### Named Rules
**The Flat-Border Rule.** Depth is conveyed through subtle tonal shifts or 1px solid borders using Muted Steel (#83868F). No blurs, no "frosted glass."

## 5. Components

[Component extraction pending implementation. Seed components will be resolved during the build.]

## 6. Do's and Don'ts

### Do:
- **Do** use Mozilla Text for all UI elements to maintain editorial consistency.
- **Do** ensure all transitions use snappy, exponential easing (Framer-style).
- **Do** maintain high contrast between Impact Red and the background.

### Don't:
- **Don't** use teal or orange accents from previous iterations.
- **Don't** use glassmorphism or heavy blurs.
- **Don't** allow animations to exceed 300ms; keep them snappy and kinetic.
- **Don't** use generic card shadows; use 1px borders for structure.
