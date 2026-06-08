# HERO SECTION REDESIGN - PIXEL PERFECT REFERENCE IMPLEMENTATION

IMPORTANT:

Use the attached reference image as the single source of truth.

Do NOT redesign.
Do NOT reinterpret.
Do NOT improve creatively.

The goal is to recreate the exact visual direction, atmosphere, spacing, typography hierarchy, background depth, and overall feeling shown in the reference.

Current hero section should be replaced completely.

---

# Design Goal

The hero should feel:

* Premium
* Minimal
* Sophisticated
* Quietly futuristic
* Founder focused
* High-end venture studio

NOT:

* Startup landing page
* SaaS template
* Agency website
* Cyberpunk
* Neon website
* AI-generated visual mess

The design must communicate confidence through simplicity.

---

# Layout Structure

Alignment:

100% Centered

Structure:

Small Label

↓

Large Headline

↓

Supporting Description

↓

Primary CTA

Everything centered vertically and horizontally.

No left-right split layout.

No illustrations.

No 3D objects.

No floating cards.

No dashboard mockups.

No product screenshots.

Only typography + atmosphere.

---

# Hero Height

Desktop:

min-height: 100vh

Content should sit perfectly centered.

Use generous whitespace.

Do not push content too high.

Do not push content too low.

---

# Typography

Hero Label

THE BUILDER STUDIO

Font Size:
14px–16px

Letter Spacing:
0.35em

Weight:
400

Color:
rgba(255,255,255,0.75)

Uppercase

Position:
Centered above headline

---

# Headline

Text:

Turn Your Idea
Into a Profitable
Startup in 4 Weeks.

Font:

Inter / Geist

Weight:
900

Size:

Desktop:
clamp(5rem, 8vw, 8rem)

Line Height:
0.95

Letter Spacing:
-0.04em

Max Width:
1100px

Alignment:
Center

---

# Headline Colors

White:

Turn Your Idea
Into a

in 4 Weeks.

Emerald:

Profitable
Startup

Use:

#10B981

No gradient text.

No glowing text.

No shadows.

Flat premium color.

---

# Supporting Text

Max Width:
700px

Font Size:
20px

Weight:
400

Line Height:
1.8

Color:

rgba(255,255,255,0.72)

Content should remain centered.

---

# CTA

Single CTA only.

Remove multiple buttons.

Button Style:

Background:
#FFFFFF

Text:
#000000

Height:
56px

Padding:
0 32px

Border Radius:
999px

Weight:
600

Hover:

translateY(-2px)

transition:
300ms

No glow.

No green button.

---

# Background System

This is the most important part.

The atmosphere from the reference image must be recreated.

---

Base Layer

Background:

radial-gradient(
circle at center,
#0A0A0A 0%,
#050505 40%,
#020202 100%
)

The entire page should remain very dark.

Almost black.

---

# Atmospheric Layer

Add extremely soft radial lights.

Opacity:
Very low

Example:

Top Center

Bottom Left

Bottom Right

Do NOT make them visible immediately.

User should feel them rather than see them.

---

# Grid Layer

Create an ultra-subtle curved grid.

The grid should barely be visible.

Opacity:
3% – 5%

The effect should resemble:

Future space
Digital architecture
Premium technology

NOT:

Graph paper
Wireframe room

The grid should curve naturally.

Very smooth.

Very elegant.

---

# Emerald Accent Arcs

Recreate the curved emerald arcs from the reference.

Rules:

* Thin lines only
* Very soft glow
* Low opacity
* Large radius
* Positioned partially outside viewport

Do not allow them to dominate the design.

They should feel like ambient lighting.

Not decorative objects.

---

# Emerald Accent Intensity

Current implementation issue:

Green is too bright.

Fix:

Reduce glow by 70%.

Reduce opacity.

Reduce saturation.

Target:

Visible but subtle.

Elegant.

Premium.

Not eye-catching.

---

# Decorative Elements

Allowed:

* Thin emerald divider under label
* Tiny emerald light point
* Soft ambient arc

Not Allowed:

* Cubes
* Floating icons
* Particles
* Geometric objects
* 3D shapes
* Animated spheres

---

# Motion

Framer Motion

Headline:

fade + blur reveal

Duration:
1.2s

---

Description:

fade up

Delay:
0.2s

---

Button:

fade up

Delay:
0.4s

---

Background:

slow moving radial gradient

Very subtle

Duration:
20s+

Infinite

---

# Responsive Behavior

Tablet:

Maintain centered layout.

Reduce headline size.

Keep same atmosphere.

---

Mobile:

Still centered.

No layout changes.

No stacking modifications.

No side elements.

Keep visual identical to desktop.

---

# Final Validation Checklist

The final hero should feel similar to:

* Linear
* Raycast
* Vercel
* Arc Browser

And should make visitors think:

"This company builds serious products."

Not:

"This is another software agency."

The hero must be driven by typography, spacing, atmosphere, and confidence.

Nothing else.
