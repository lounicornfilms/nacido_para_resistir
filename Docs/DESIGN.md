---
name: Nacidos para Resistir
colors:
  surface: '#0F0F0F'
  surface-dim: '#0F0F0F'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#4A1C1A'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#F5F0E6'
  on-surface-variant: '#e3beb8'
  inverse-surface: '#F5F0E6'
  inverse-on-surface: '#313030'
  outline: '#797D62'
  outline-variant: '#5a403c'
  surface-tint: '#8B0000'
  primary: '#8B0000'
  on-primary: '#F5F0E6'
  primary-container: '#8B0000'
  on-primary-container: '#ff907f'
  inverse-primary: '#b52619'
  secondary: '#797D62'
  on-secondary: '#0F0F0F'
  secondary-container: '#4A1C1A'
  on-secondary-container: '#bcb8af'
  tertiary: '#5D3FD3'
  on-tertiary: '#F5F0E6'
  tertiary-container: '#5D3FD3'
  on-tertiary-container: '#b2a3ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#8B0000'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#920703'
  secondary-fixed: '#e7e2d8'
  secondary-fixed-dim: '#797D62'
  on-secondary-fixed: '#1d1c16'
  on-secondary-fixed-variant: '#494740'
  tertiary-fixed: '#e6deff'
  tertiary-fixed-dim: '#5D3FD3'
  on-tertiary-fixed: '#1c0062'
  on-tertiary-fixed-variant: '#4723be'
  background: '#0F0F0F'
  on-background: '#F5F0E6'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Bebas Neue
    fontSize: 96px
    fontWeight: '400'
    lineHeight: 90%
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Bebas Neue
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 100%
  headline-lg:
    fontFamily: Bebas Neue
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 100%
  headline-md:
    fontFamily: Bebas Neue
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 110%
  body-lg:
    fontFamily: Archivo Narrow
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: Archivo Narrow
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 150%
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 140%
    letterSpacing: 0.05em
  headline-xl-mobile:
    fontFamily: Bebas Neue
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 100%
  headline-lg-mobile:
    fontFamily: Bebas Neue
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 100%
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max: 1440px
---

## Brand & Style

The design system is rooted in the visceral, unpolished energy of underground rock documentaries. It captures the spirit of resistance, authenticity, and raw emotion. The aesthetic direction is a fusion of **Brutalism** and **High-Contrast Bold**, utilizing a restricted color palette and heavy-duty typography to create an immersive, cinematic experience.

The user interface should feel like a physical artifact—a scanned zine, a concert poster pasted on a wet brick wall, or a vintage amplifier. Visual depth is achieved not through shadows, but through high-contrast imagery, film grain overlays, and aggressive "glitch" transitions that evoke the feeling of 16mm film or analog magnetic tape. While the style is raw, the introduction of rounded surfaces adds a sense of wear and history, like a well-used guitar pick or the worn edges of a vinyl sleeve.

## Colors

This design system utilizes a high-impact, low-light palette designed for maximum legibility and emotional weight.

- **Grit Black (#0F0F0F):** The foundational void. Used for all primary backgrounds to allow high-contrast elements to pop.
- **Blood Red (#8B0000):** The pulse of the UI. Reserved for primary Calls to Action, critical highlights, and active states.
- **Bone White (#F5F0E6):** The primary ink. Used for all body text and secondary icons to provide a warm, organic contrast against the black.
- **Electric Indigo (#5D3FD3):** The digital spark. Exclusively for inline links and interactive "glitch" artifacts.
- **Secondary Tones:** High-fidelity variations include **Burnt Caramel (#4A1C1A)** for container backgrounds and **Dust Olive (#797D62)** for metadata and auxiliary labels to provide an "earthy" grit.

## Typography

The typography is architectural and utilitarian. 

- **Headlines:** Use **Bebas Neue**. It must be used in uppercase only. Headlines should feel "stacked" with tight line heights to mimic protest posters.
- **Body:** **Archivo Narrow** provides a clean, slightly condensed sans-serif that maintains readability while echoing the verticality of the headlines.
- **Utility & Metadata:** **JetBrains Mono** is used for technical data, timecodes, and labels to suggest the precision of studio equipment or film reels.

Avoid letter-spacing on headlines; they should feel dense and urgent.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop (12 columns) and a fluid 4-column structure on mobile. 

- **Grid Alignment:** Elements should align strictly to the grid edges. Avoid soft padding; use negative space aggressively to create focal points.
- **Asymmetry:** Occasionally break the grid with "taped-on" elements—images or text blocks that appear slightly rotated or offset to mimic a scrapbook or manual layout.
- **Sticky Navigation:** A minimalist, persistent top bar provides essential wayfinding, utilizing a semi-transparent Bone White background with inverted Grit Black text for high visibility.

## Elevation & Depth

This system rejects shadows and traditional depth metaphors. Instead, it uses **Tonal Layers** and **Bold Outlines**:

- **Layering:** Depth is conveyed by stacking surfaces of Grit Black, Burnt Caramel, and Dust Olive. 
- **Borders:** Active elements or containers use 2px solid Bone White or Blood Red borders.
- **Overlays:** A global noise/grain texture must be applied to the top-most layer of the UI at 3-5% opacity. 
- **Image Treatment:** All photography must be processed in high-contrast monochrome or duotone (Blood Red/Grit Black), appearing "burned-in."

## Shapes

The shape language is **Rounded (2)**. Every structural UI element—including buttons, input fields, and cards—utilizes a 0.5rem (8px) corner radius. 

This moderate rounding provides a "stamped" or "molded" industrial feel, moving away from harsh sharpness toward a more tactile, artifact-like aesthetic. Larger components may scale this rounding to `rounded-lg` (1rem) or `rounded-xl` (1.5rem) to maintain visual balance, while dividers should retain a slightly jagged or "torn" appearance to contrast the cleaner container shapes.

## Components

- **Buttons:** Large, rounded rectangular blocks of Blood Red with Bone White uppercase text. Hover states should trigger a "glitch" effect (a 2px horizontal shift and color split).
- **Audio Players:** Styled after vintage guitar amplifiers. Use knurled texture patterns for sliders, toggle switches instead of checkboxes, and analog-style needle meters for volume/levels.
- **Inputs:** Simple Bone White outlines with 0.5rem rounded corners. Focus states should turn the border Blood Red with a subtle "flicker" animation.
- **Maps:** Maps should be desaturated to Grit Black and Dust Olive, with high-contrast routes and points of interest marked in Blood Red. Use a stipple-dot texture for landmasses.
- **Cards:** Use "Burnt Caramel" backgrounds for content cards with rounded corners. Images within cards should have a "torn edge" mask applied to the top or bottom border while respecting the outer container's rounding.
- **Glitch Animations:** Interactive elements should respond with brief, erratic movements (100-200ms) that suggest a faulty signal or analog interference.