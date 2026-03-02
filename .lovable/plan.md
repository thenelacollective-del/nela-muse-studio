## Plan: Rebrand Theme to Match Logo Colors + Add Tagline + Fix Build Error

### What's Changing

The uploaded image shows the Nela Collective logo with a **dark forest green** background, **white** text, and **gold/orange** accent for "Collective". The entire site theme needs to shift from the current warm cream/terracotta palette to this new dark green + white + gold color scheme. The tagline "Education Through Exploration" will replace the current subtitle text.

### 1. Fix Build Error

### 2. Update Color Theme (`src/index.css`)

Replace the current warm cream/terracotta CSS variables with a dark green-based palette:

- **Background**: Dark forest green (~`hsl(140, 30%, 8%)`)
- **Foreground/text**: Off-white/cream
- **Primary (accent)**: Gold/amber (~`hsl(38, 75%, 55%)`) matching the "Collective" text color
- **Card backgrounds**: Slightly lighter green
- **Muted text**: Soft green-grey
- Remove terracotta tokens, replace with green-based ones

### 3. Update Tailwind Config (`tailwind.config.ts`)

- Replace `terracotta` and `warm` custom color tokens with new `forest` / `deep-green` tokens matching the new palette

### 4. Update Hero Section (`src/components/Hero.tsx`)

- Change tagline from "Architectural Study Tours · Community · Craft" to **"Education Through Exploration"**
- Adjust gradient overlay to complement new green theme

### 5. Update Navbar (`src/components/Navbar.tsx`)

- Adjust nav background gradient for dark green context
- Button colors to use gold accent

### 6. Update Footer (`src/components/Footer.tsx`)

- Subtitle text updated to include "Education Through Exploration"
- Colors adjusted to new palette

### 7. Update All Section Components

- `Problem.tsx`, `WhatWeAre.tsx`, `TourOfferings.tsx`, `SampleTour.tsx`, `BeyondTheTour.tsx`: Section backgrounds and accent colors will naturally update via CSS variable changes, but any hardcoded references to `warm-dark`, `terracotta`, or `terracotta-light` will be updated to new tokens.

### 8. Copy Logo Image

- Copy the uploaded logo image to `src/assets/nela-logo.jpg` for potential use in the navbar or footer.

### Technical Notes

- All color changes are centralized in CSS variables, so most components update automatically.
- Only components with hardcoded color class references (e.g., `bg-warm-dark`, `hover:bg-terracotta-light`) need manual updates.
- The dark theme (`.dark` class) variables will also be updated to maintain consistency.