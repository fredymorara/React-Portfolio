---
name: React Portfolio
description: A dark, sleek, tech-forward portfolio with sunset accents.
colors:
  background: "#050505"
  card-bg: "#0a0a0a"
  accent-sunset-start: "#FF512F"
  accent-sunset-end: "#DD2476"
  text-primary: "#ffffff"
  text-muted: "#a5a5a5"
typography:
  display:
    fontFamily: "Outfit, sans-serif"
    fontWeight: 700
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Outfit, sans-serif"
    fontWeight: 400
    lineHeight: "1.75"
    letterSpacing: "-0.15px"
  code:
    fontFamily: "Silkscreen, monospace"
rounded:
  full: "9999px"
  card-outer: "2rem"
  card-inner: "calc(2rem - 6px)"
spacing:
  sm: "6px"
  md: "16px"
  lg: "32px"
components:
  vanguard-btn:
    backgroundColor: "{colors.text-primary}"
    textColor: "{colors.background}"
    rounded: "{rounded.full}"
    padding: "16px 32px"
  double-bezel:
    backgroundColor: "{colors.card-bg}"
    rounded: "{rounded.card-inner}"
---

# Design System: React Portfolio

## Overview

**Creative North Star: "The Cyber-Vanguard"**

This system represents a sleek, restrained, and tech-forward environment. It operates primarily in deep, cinematic darkness, offset by vivid sunset gradients that provide sudden, high-contrast focal points. The aesthetic philosophy emphasizes subtle depth—achieved through double-bezel architectures and fine inset shadows—paired with crisp, highly legible typography. 

**Key Characteristics:**
- Dark, cinematic canvas (`#050505`) with minimal ambient noise.
- Sleek and restrained component philosophy.
- Vivid sunset gradient accents (`#FF512F` to `#DD2476`) used sparingly.
- Bold, tightly-tracked display typography.
- Subdued structural depth through double-bezel nesting rather than heavy drop shadows.

## Colors

Cinematic darkness (deep space blacks) punctuated by vivid sunset gradients.

### Primary
- **Sunset Gradient Start** (#FF512F): Used as the primary vivid accent and the start of the sunset gradient.
- **Sunset Gradient End** (#DD2476): Used to complete the sunset gradient effect on text and hover states.

### Neutral
- **Deep Void Background** (#050505): The primary canvas.
- **Card Surface** (#0A0A0A): The interior surface of double-bezel containers.
- **Silver Text** (#a5a5a5): The relaxed, legible color for body paragraphs.
- **White** (#FFFFFF): Used for high-contrast primary text and the default state of the vanguard button.

### Named Rules
**The Void Rule.** The background must remain deep and unpolluted. Let the gradients and white text provide all the contrast necessary; do not introduce mid-tone grays that muddy the depth.

## Typography

**Display Font:** Outfit
**Body Font:** Outfit
**Code/Label Font:** Silkscreen

**Character:** Crisp, bold, and modern. Outfit provides a highly legible and geometric foundation, while Silkscreen injects a sharp, tech-forward aesthetic for code snippets and labels.

### Hierarchy
- **Display** (Bold, 5xl to 8xl, tracking-tighter): Hero headlines and massive focal points.
- **Headline** (Bold, 4xl to 7xl, tracking -0.025em): Section headers.
- **Title** (Bold, 3xl to 4xl, tracking -0.005em): Card titles and sub-sections.
- **Body** (Regular, md to 2xl, tracking -0.15px, leading 1.75): Relaxed and readable paragraph text in silver.
- **Code** (Silkscreen): Distinctive, pixelated monoline type for technical accents.

## Layout

The layout embraces high-impact spacing with clear focal points. It relies heavily on flexbox centering (`flex-between`) for navigation and headers, and structured grids for projects and blogs. Background grid and dot patterns are masked with radial and linear gradients to fade smoothly into the void, maintaining the cinematic darkness.

## Elevation & Depth

The system uses a hybrid of tonal layering and extremely subtle inset shadows, rather than broad drop shadows. 

### Shadow Vocabulary
- **Double Bezel Inner Shadow** (`inset 0 1px 1px rgba(255,255,255,0.15)`): Creates a subtle debossed effect, placing the card interior slightly deeper than its glowing outer rim.
- **Vanguard Hover Glow** (`0 0 30px rgba(221,36,118,0.3)`): A diffuse, glowing aura that only appears on hover, providing a neon-like response to interaction.

### Named Rules
**The Structural Restraint Rule.** Depth is structural, not decorative. Use double-bezel borders and inset shadows to define containers; reserve glowing drop shadows exclusively for interactive hover states.

## Shapes

Forms are overwhelmingly rounded to contrast with the sharp typography. The signature shape is the pill (fully rounded buttons) and the highly rounded card (`2rem` radius).

## Components

### Vanguard Button
- **Shape:** Pill (fully rounded).
- **Default:** White background with black text, padding 16px by 32px.
- **Hover / Focus:** Scales down slightly (`scale-[0.98]`) while projecting a magenta hover glow. Its internal icon wrapper turns vibrant sunset orange (`#FF512F`).
- **Feel:** Sleek and restrained, relying on subtle depth and crisp typography.

### Double Bezel Cards
- **Corner Style:** Highly rounded (`2rem` outer, slightly less inner).
- **Background:** Outer rim uses `white/5` with a subtle white ring; the inner container drops back to `#0A0A0A`.
- **Shadow Strategy:** Inset top highlight on the inner container.
- **Internal Padding:** 6px gap between the outer and inner bezels.

## Do's and Don'ts

### Do:
- **Do** rely on the sunset gradient (`#FF512F` to `#DD2476`) for primary visual interest.
- **Do** use the Double Bezel architecture for prominent cards and containers.
- **Do** track display typography tightly (`tracking-tighter`) for a cohesive, block-like appearance.

### Don't:
- **Don't** use flat, saturated colors outside of the sunset gradient family.
- **Don't** apply heavy drop shadows to static elements.
- **Don't** mix multiple display fonts; let Outfit and Silkscreen carry the entire typographic load.
