# Design

## Theme

Light, near-pure white with whisper-rose surfaces. Inspired by the way an architecture monograph is printed: matte ivory paper, deep oxblood ink for a single overlay line, charcoal for body. Dark mode is deferred. The scene: a prospective client opening the site on a 27-inch monitor in late afternoon natural light, evaluating projects across long scrolls. The brightness of the surface is intentional — the work has to read off the page like printed plates.

## Color

Strategy: **Restrained with one committed accent.** Tinted neutrals carry 90% of the surface; oxblood burgundy carries the remaining 10% as ink and structural accent. Burgundy is never a background flood except in the closing footer-CTA band, where it functions as a closing chord.

OKLCH-equivalent hex tokens (already in `globals.css`):

| Token | Value | Role |
|---|---|---|
| `--paper` | `#ffffff` | Primary background |
| `--paper-soft` | `#fbf8f8` | Alt surface (subtle whisper rose) |
| `--stone` | `#f5efef` | Wash surface behind real project media while images load |
| `--stone-light` | `#faf6f6` | Muted-section background |
| `--burgundy` | `#5a1a2b` | Primary accent ink, CTA fill, section labels |
| `--burgundy-deep` | `#3d111d` | Hover state for burgundy fills |
| `--burgundy-wash` | `#f5efef` | Tinted surface (editorial section, focus state) |
| `--charcoal` | `#1a1a1a` | Body and headline ink |
| `--muted` | `#6e6562` | Secondary body copy |
| `--line` | `rgba(90, 26, 43, 0.16)` | Hairline dividers (burgundy-tinted) |
| `--line-soft` | `rgba(90, 26, 43, 0.08)` | Section dividers |

Burgundy on white: contrast ratio 9.3:1 (passes AAA for body).
Charcoal on white: 17.4:1 (passes AAA everywhere).
Muted on white: 5.0:1 (passes AA for body).

## Typography

Continuing the existing brand commitment:

- **Display**: Spectral, weight 300, italic. Used for hero, section headings, project titles, process numerals, large meta values.
- **Body / UI**: DM Sans, weights 300, 400, 500, 600. Used for body copy, navigation, button labels, project metadata.

> Note: DM Sans is on impeccable's reflex-reject list. It is preserved here under the identity-preservation exception — the brand has already committed to it. Future variant exploration may revisit.

### Scale (fluid)

| Step | Size | Use |
|---|---|---|
| Display XL | `clamp(3.2rem, 7.5vw, 6.6rem)` | Hero, project title hero |
| Display L | `clamp(2.4rem, 4.5vw, 3.6rem)` | Section headings |
| Display M | `clamp(1.6rem, 2.4vw, 2rem)` | Editorial subheadings, service titles |
| Body L | `1.1rem` | Lead paragraphs |
| Body | `1rem` | Standard copy |
| Body S | `0.92rem` | Meta values, captions |
| Label | `0.74rem`, uppercase, +0.14em tracking | Section labels (burgundy) |

Line height: 1.6 body, 1.04 display.

## Layout

- Max content width: 1240px, fluid gutter `clamp(20px, 5vw, 56px)`.
- Asymmetric grids encouraged for portfolio and editorial sections; centered stacks are the failure mode.
- Hairline borders replace heavy boxes. Cards used only when truly the right affordance; portfolio uses image-led tiles, not card chrome.
- Section padding: `clamp(72px, 9vw, 132px)` block, varied per section to create rhythm. Avoid uniform spacing.

## Motion

Exponential ease-out only. No bounce, no elastic, no linear.

- **Reveal**: `transform: translateY(28px)` + `opacity: 0` → `translateY(0)` + `opacity: 1`. Duration 900ms, ease `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo).
- **Hover**: `transform: translateY(-2px)`, 220ms ease-out. Image hover: `transform: scale(1.02)`, 500ms ease-out-expo.
- **Parallax**: hero visual translates `-8%` vertically across viewport height. CSS-only via `translate3d`, transform-only, no JS scroll listeners on critical path.
- **Section dividers**: hairlines draw in from 0 to full width on scroll, 1200ms ease-out-quart.
- **Reduced motion**: all the above collapse to instant; no parallax, no reveals, only `opacity` change with 0ms duration.

## Components

- **Buttons**: Pill primary (burgundy fill, white text, 26px h-pad, 46px min-height). Ghost (burgundy hairline border, burgundy text, burgundy-wash fill on hover).
- **Section label**: 42px burgundy hairline + 14px gap + uppercase tracked text in burgundy.
- **Project card**: image-led, image-first, title below in Spectral italic, optional dense meta strip on hover.
- **Project meta table**: 3- or 4-column grid of `dt/dd` pairs separated by burgundy hairlines, dt in label style (burgundy), dd in charcoal.
- **Footer CTA**: full burgundy band, paper-color CTA, white-on-burgundy heading.

## Imagery

Real photography is required and now used throughout the public site. Source from verified interior, architecture, and material images with meaningful alt text in the voice of a magazine caption. Hero imagery commits to one decisive mood per project.

## Iconography

Currently none in use. If introduced, prefer hand-drawn SVG strokes (0.75–1px) over icon libraries. No icon-above-heading templates.

## Anti-patterns specific to this brand

- Identical 2×N or 4×N grids of equally-sized project tiles. Use asymmetric grids.
- Small uppercase tracked labels above EVERY heading (the editorial-typographic reflex). One per section, not every block.
- Repeated burgundy decorative elements (top-bar accents, repeated separators, accent stripes). Burgundy is structural.
- CSS-painted stand-ins where real photography belongs.
