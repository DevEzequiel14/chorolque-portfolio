---
name: Ezequiel Chorolque
description: Portafolio como un aviso clasificado de diario, leído de arriba abajo.
colors:
  newsprint: "#cfc9bc"
  ink: "#161513"
  ink-soft: "#3a372e"
  classified-red: "#c41e3a"
  ballpoint: "#1e4d8c"
  night-paper: "#161513"
  night-ink: "#cfc9bc"
  night-ink-soft: "#b7b09f"
typography:
  display:
    fontFamily: "Archivo Black, Arial Narrow, sans-serif"
    fontSize: "clamp(2.1rem, 5.4vw, 4.35rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Archivo Black, Arial Narrow, sans-serif"
    fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.04em"
  title:
    fontFamily: "Archivo, Trebuchet MS, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Archivo, Trebuchet MS, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
  label:
    fontFamily: "Red Hat Mono, ui-monospace, monospace"
    fontSize: "0.78rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.04em"
rounded:
  none: "0px"
spacing:
  sm: "0.55rem"
  md: "1.25rem"
  lg: "2.25rem"
  column: "52rem"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.65rem 0.95rem"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.newsprint}"
    rounded: "{rounded.none}"
  edition-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.classified-red}"
    rounded: "{rounded.none}"
    padding: "0 0.6rem"
    height: "2.4rem"
---

# Design System

## Overview

The site reads as one classified advertisement on dirty newsprint. The person opens the page: mugshot, name, oficio. The two shipped works appear as the next lines of the same ad. Everything else is further down the same column. Night edition inverts the paper to ink.

This is not a developer-portfolio shell (hero, cards, logo row, CTA). Navigation is newspaper chrome. Projects are pasted clippings that lift off the sheet.

## Colors

- **Newsprint** `#cfc9bc` is the page, not a card surface. Grain sits on it as 3px speckle.
- **Ink** `#161513` is type, rules, and borders. Secondary copy tints toward the paper (`#3a372e`), never gray.
- **Classified red** `#c41e3a` is the masthead word, the edition toggle, dates, and underlines that mean “this is an ad.”
- **Ballpoint** `#1e4d8c` underlines the surname only.
- Night: paper `#161513`, type `#cfc9bc`, red unchanged.

## Typography

- **Archivo Black** for the name and section titles (Argentine grotesk, condensed by weight not by a costume display face).
- **Archivo** for body. Measure stays inside the 52rem column.
- **Red Hat Mono** only for measurements: dates, tech labels, the contact hint.
- The surname is uppercase, slight negative tracking, ballpoint underline. No kicker above the name; “Avisos” belongs to the masthead, not the heading.

## Layout

- Single column, `max-width: 52rem`, centered. Desktop lead is mugshot | copy with a 2px column rule. Below 480px the portrait stacks above the name.
- Home is a vertical ritual: mast → identity/proof → clippings → stack → about teaser → door.
- `/about` and `/work/[slug]` continue the same column; they are not a different layout language.
- Breakpoints in use: 700px, 640px, 480px.

## Elevation & Depth

Almost flat print. The only lift is a clipping shadow `3px 5px 12px rgba(22, 21, 19, 0.18)` that grows on hover. No hard offset neo-brutalist blocks, no glass.

## Shapes

Radius is zero. Photo boxes and buttons are squared. Rules are 1–3px solid ink or classified red. Portrait is a ruled photo box, not a circle or organic mask.

## Components

### Edition toggle
Print mark in the masthead. Border 2px classified red, words “EDICIÓN DÍA / NOCHE”. Checked fills the mark with red.

### Proof lines
The two projects as underlined body links in the opening ad, not cards.

### Project clipping
A squared sheet with a grayscale multiply image and an Archivo Black title. Hover lifts and rotates −0.4deg. Dots remain the accessible slider.

### Door
Inline text links for LinkedIn, GitHub, CV, mail. The discovery form is a classified heading plus a squared “Empezar la encuesta” control.

## Do's and Don'ts

### Do:
- **Do** open with the person (name + mugshot + oficio) and put work in the same first column-inches.
- **Do** keep reading as one downward column on every route.
- **Do** treat screenshots as pasted clippings on newsprint.

### Don't:
- **Don't** rebuild a developer portfolio (hero, card grid, logo wall, primary CTA in the first viewport).
- **Don't** use cream+serif+terracotta, neon-on-black, or the discarded bento/Merriweather system.
- **Don't** put a kicker/eyebrow above the name.
- **Don't** invent metrics, extra projects, or testimonials.
