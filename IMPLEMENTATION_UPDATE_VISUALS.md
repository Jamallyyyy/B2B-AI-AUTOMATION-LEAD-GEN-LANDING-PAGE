# Implementation Plan: Visual Update for B2B AI Automation Landing Page

This plan outlines the steps to transform the current landing page into a premium, high-converting experience with modern aesthetics, rich gradients, and interactive elements.

## Objective
Upgrade the visual identity of **Automation Works** to feel state-of-the-art, trustworthy, and premium for B2B founders and operators.

## Design Direction
- **Theme**: Dark mode by default using `slate-950` and `slate-900`.
- **Accents**: Deep blue to cyan gradients (`from-blue-600 to-cyan-500`).
- **Aesthetics**: Glassmorphism (blur + thin borders), mesh gradients, and subtle grid patterns.
- **Typography**: Clean, professional sans-serif (Inter/Outfit).
- **Interactions**: Smooth hover states, scroll-reveal animations, and micro-interactions for buttons.

---

## Phases & Tasks

### Phase 1: Foundation & Infrastructure
- [ ] **Modern Typography**: Import custom fonts (e.g., Outfit) via Google Fonts in `index.html`.
- [ ] **Utility Classes**: Update `index.css` with a global design system (smooth scrolling, custom selection color, core variables).
- [ ] **Tailwind Config**: Extend `tailwind.config.js` with:
    - Custom gradients.
    - Animation keyframes (fade-in, slide-up, float).
    - Custom color tokens for consistent slate and blue shades.

### Phase 2: Core Layout & Navigation
- [ ] **Premium Navigation**: Update the sticky nav with a stronger backdrop blur and a more subtle, animated border.
- [ ] **Logo Enhancement**: Style the "Automation Works" logo/icon with a subtle glow or gradient.
- [ ] **Button Global Styles**: Standardize primary and secondary buttons with hover scaling and depth effects.

### Phase 3: Hero Section Overhaul
- [ ] **Background Visuals**: Add a subtle mesh gradient or animated grid pattern to the hero background.
- [ ] **Typography Hierarchy**: Use larger, more impactful headings with improved line heights.
- [ ] **Enhanced CTA**: Make the "Request an Automation Audit" button stand out with a pulsating shadow or high-contrast gradient.

### Phase 4: Content Sections & Cards
- [ ] **Who This Is For**: Refactor cards with glassmorphism effects and enhanced icon containers.
- [ ] **How It Works**: Modernize the numbered steps with better vertical/horizontal layout and connecting lines or visual flow.
- [ ] **Credibility Stats**: Display stats with larger, vibrant typography and subtle entry animations.
- [ ] **Audit Section**: Update the "What's an Audit?" card to look more like a premium feature reveal.

### Phase 5: Form & Final Polish
- [ ] **Audit Form**: Refactor `AuditForm.tsx` to use more modern input fields (subtle borders, focus glows, improved spacing).
- [ ] **Responsive Refinement**: Ensure all sections feel spacious and premium on mobile.
- [ ] **Animations**: Integrate scroll-reveal effects (using Intersection Observer or simple CSS) for section entry.

---

## Checklist: Progress Tracker

### Infrastructure
- [ ] Add Google Fonts to `index.html`
- [ ] Configure `tailwind.config.js` (colors, animations)
- [ ] Update `index.css` with base styles

### UI Overhaul
- [ ] Update `nav` component
- [ ] Refactor Hero section
- [ ] Refactor "Who This Is For" cards
- [ ] Refactor "How It Works" steps
- [ ] Refactor "Credibility" section
- [ ] Refactor "Audit Details" section
- [ ] Refactor `AuditForm` visuals
- [ ] Update Footer

### Advanced Polish
- [ ] Add background grid/mesh patterns
- [ ] Add hover micro-animations
- [ ] Add scroll reveal animations
- [ ] Final mobile responsiveness check
