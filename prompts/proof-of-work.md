# Proof Of Work Section Redesign

IMPORTANT:

Remove the current Proof Of Work card layout completely.

Do NOT use:

- 3 cards
- Feature cards
- Portfolio cards
- Visit project cards

This section should feel like:

Apple Product Showcase
Stripe Product Reveal
Linear Product Presentation

The goal is to showcase REAL PRODUCTS.

Visitors should immediately understand:

"We build products.
We don't just talk about building them."

---

# Section Position

Place immediately after Hero Section.

Keep same dark background system from Hero.

Continue:

- dark radial gradients
- subtle grid lines
- emerald ambient accents

The transition between Hero and Proof Of Work should feel seamless.

---

# Section Header

Small Label:

PROOF OF WORK

Color:
Emerald Green

Letter spacing:
0.3em

Uppercase

---

Main Heading:

Real Products. Real Impact.

Font Weight:
900

Size:
64px - 80px

Color:
White

Centered

---

Subheading:

We don't show case studies.
We show products we've actually built.

Max Width:
700px

Centered

Color:
rgba(255,255,255,0.7)

---

# Product Switcher

Below heading.

Create premium tab navigation.

Center aligned.

Container:

Glass dark panel.

Background:

rgba(255,255,255,0.03)

Border:

rgba(255,255,255,0.08)

Border Radius:

999px

Padding:

8px

---

Tabs

1. Plugio
2. ContextNode
3. Study Wings

Each tab contains:

- Product icon
- Product name

Active tab:

- Emerald border
- Emerald glow
- Dark glass background

Animation:

Smooth sliding active indicator.

Framer Motion.

Duration:
300ms

---

# Product Showcase Area

Below tabs.

Only ONE product visible at a time.

No grids.

No cards.

No multiple products.

Show selected product only.

---

# Layout

Desktop:

40% Left Content

60% Right Screenshot

Gap:
48px

Container:

Max Width:
1400px

Centered

---

# Left Content Area

Product Icon

↓

Product Name

↓

Short Description

↓

Feature List

↓

Tech Stack

↓

CTA Button

---

# Plugio Content

Title:

Plugio

Subtitle:

AI Powered Social Media Distribution Platform

Description:

Create, optimize and distribute content across multiple platforms from one intelligent dashboard.

Features:

✓ AI Content Generation

✓ Multi-platform Publishing

✓ Unified Inbox

✓ Analytics Dashboard

Tech Stack:

Next.js
Spring Boot
Python
PostgreSQL

Button:

Visit Plugio

---

# ContextNode Content

Title:

ContextNode

Subtitle:

AI Assets Marketplace

Description:

Structured prompts, context packs and AI assets designed for modern builders.

Features:

✓ Prompt Marketplace

✓ Context Packs

✓ AI Workflows

✓ Developer Assets

Tech Stack:

Next.js
Laravel
MySQL
OpenAI

Button:

Visit ContextNode

---

# Study Wings Content

Title:

Study Wings

Subtitle:

AI Learning Platform

Description:

Transform YouTube learning into structured learning journeys with analytics and AI assistance.

Features:

✓ Learning Analytics

✓ RAG Assistant

✓ Progress Tracking

✓ Personalized Learning

Tech Stack:

Next.js
Spring Boot
RAG
PostgreSQL

Button:

Visit Study Wings

---

# Screenshot Area

CRITICAL

Do NOT use placeholder browser graphics.

Load actual screenshots from:

public/assets/plugio.png

public/assets/contextnode.png

public/assets/study-wings.png

These are real product screenshots.

Use them directly.

---

# Screenshot Container

Premium browser mockup.

Top Browser Bar:

● ● ●

URL Bar

Subtle glass styling.

Border:

rgba(255,255,255,0.08)

Background:

#0A0A0A

Radius:

24px

Overflow Hidden

---

# Screenshot Presentation

Width:

100%

Object Fit:

Contain

No cropping.

No zooming.

No distortion.

Show actual UI clearly.

---

# Tab Switching Animation

When switching products:

1. Fade Out
2. Slide Up
3. Fade In

Duration:
300ms

Use Framer Motion AnimatePresence.

---

# Mobile Design

Stack layout:

Content

↓

Screenshot

Keep tabs horizontally scrollable.

Maintain screenshot visibility.

Do not shrink screenshots excessively.

---

# Final Experience

The visitor should feel:

These are not concepts.

These are real SaaS products already built by The Builder Studio. :contentReference[oaicite:0]{index=0}

The section should communicate execution capability, product quality and engineering standards before the user scrolls further.