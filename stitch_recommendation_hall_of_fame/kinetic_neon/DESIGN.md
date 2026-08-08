---
name: Kinetic Neon
colors:
  surface: '#111111'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c9ac'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9379'
  outline-variant: '#444933'
  surface-tint: '#abd600'
  primary: '#ffffff'
  on-primary: '#283500'
  primary-container: '#c3f400'
  on-primary-container: '#556d00'
  inverse-primary: '#506600'
  secondary: '#d3fbff'
  on-secondary: '#00363a'
  secondary-container: '#00eefc'
  on-secondary-container: '#00686f'
  tertiary: '#ffffff'
  on-tertiary: '#67001d'
  tertiary-container: '#ffdadb'
  on-tertiary-container: '#c90041'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c3f400'
  primary-fixed-dim: '#abd600'
  on-primary-fixed: '#161e00'
  on-primary-fixed-variant: '#3c4d00'
  secondary-fixed: '#7df4ff'
  secondary-fixed-dim: '#00dbe9'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f54'
  tertiary-fixed: '#ffdadb'
  tertiary-fixed-dim: '#ffb2b8'
  on-tertiary-fixed: '#40000f'
  on-tertiary-fixed-variant: '#91002d'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  acid-green: '#CCFF00'
  electric-cyan: '#00F0FF'
  cyber-pink: '#FF0055'
  high-contrast-text: '#F4F4F5'
  muted-zinc: '#52525B'
typography:
  display-massive:
    fontFamily: Monument Extended
    fontSize: 120px
    fontWeight: '900'
    lineHeight: 110%
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Monument Extended
    fontSize: 96px
    fontWeight: '900'
    lineHeight: 100%
  headline-lg-mobile:
    fontFamily: Monument Extended
    fontSize: 48px
    fontWeight: '900'
    lineHeight: 110%
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 80px
    fontWeight: '700'
    lineHeight: 110%
  headline-sm:
    fontFamily: Monument Extended
    fontSize: 64px
    fontWeight: '900'
    lineHeight: 120%
  subheading:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 140%
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 160%
  label-ui:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 100%
    letterSpacing: 0.1em
spacing:
  unit: 4px
  xs: 8px
  sm: 16px
  md: 32px
  lg: 64px
  xl: 120px
  grid-cell: 40px
---

## Brand & Style
This design system is a high-octane, scrollytelling framework designed for maximum visceral impact. It merges the data-driven celebration of Spotify Wrapped with the sleek, polished precision of an Apple product launch. The brand personality is aggressive, technical, and undeniably confident—it does not ask for attention; it commands it.

The aesthetic follows a **Neon-Kinetic Brutalism** style. It rejects the softness of modern web trends in favor of Vantablack voids, piercing acid-neon accents, and monumental typography. Motion is not decorative but structural, using extreme scale shifts and luminous glows to guide the narrative flow. The target audience is high-performance individuals who value technical excellence and bold, forward-thinking presentation.

## Colors
The color strategy relies on "Chroma-Sectioning." Each primary accent color is tied to a specific narrative chapter to provide instant cognitive orientation.

- **Vantablack (#050505)**: The infinite void background that provides the foundation for light-based hierarchy.
- **Acid Green**: Assigned to Physics/Performance. Represents energy, kineticism, and precision.
- **Electric Cyan**: Assigned to CS/Technology. Represents logic, grids, and digital infrastructure.
- **Cyber Pink**: Assigned to Debate/Expression. Represents urgency, impact, and human voice.

Use **Surface (#111111)** for cards and interactive containers to create subtle separation from the background. All chromatic colors must be applied as light sources—using text-shadows and box-shadows to simulate neon emission rather than flat fills.

## Typography
Typography is the primary visual driver. The system utilizes **Monument Extended** for its ultra-wide, industrial presence that feels "heavy" and immovable. This is contrasted with **Space Grotesk** for narrative body text, providing a geometric, technical clarity.

**Key Rules:**
- **Kinetic Headlines:** Display-level text should often be used as a mask for background motion or as part of a "Vortex" zoom effect.
- **Mono-Metadata:** All technical data, counters, and UI labels must use **JetBrains Mono** to reinforce the hacker/high-tech aesthetic.
- **Letter-Spacing:** Tighten headings for a dense, architectural feel; expand labels for a refined, technical look.

## Layout & Spacing
The layout philosophy is based on a **Dynamic Technical Grid**. While the underlying structure is a rigid 12-column grid, elements are often broken out into "Vortex" layers that scale exponentially from the center of the screen.

- **Desktop:** 12-column fluid grid with 0px gutters for containers and 64px margins.
- **The 40px Rhythm:** Background textures should utilize a 40px CSS grid pattern to serve as a visual ruler for the layout.
- **Massive Gaps:** Section transitions use a minimum of 120px (`--spacing-xl`) to ensure narrative "breathing room" between intense data bursts.
- **Mobile:** Transition to a single-column stack. Typography scales down significantly, but maintains the 900-weight "Monument" impact.

## Elevation & Depth
This system rejects shadows and traditional depth. Depth is created through **Luminance and Scale**:

1.  **Neon Emission:** Instead of shadows, use `box-shadow: 0 0 20px {color}` to create a glow effect. Elements "rise" by increasing their glow radius and intensity (up to 60px).
2.  **Tonal layering:** Surfaces use `#111111` with a subtle glassmorphic backdrop-filter (blur: 10px) to appear as though they are floating in the Vantablack void.
3.  **CRT Texture:** A global overlay of scanlines and very light noise should be applied at 3% opacity to give the "digital glass" a physical presence.
4.  **Vortex Scaling:** Moving "deeper" into the app is represented by scaling elements from 1 to 50, literally passing through the center of the screen to the next layer.

## Shapes
The shape language is strictly **Brutalist-Sharp**. Every element—buttons, cards, inputs, and letter blocks—must have a `0px` border radius. 

- **Hard Borders:** Use 1px solid lines for secondary containers.
- **Active Edge:** Interactive elements should increase their left-border width from 1px to 4px on hover, creating a "glitch-indent" effect.
- **Geometric Accents:** Use 45-degree clipped corners for decorative elements or status tags to reinforce the high-tech, angular feel.

## Components
Consistent application of the "Glow and Sharp" rule defines the component library.

- **Buttons:** Rectangular with 0px radius. Default state is a 1px border of the section's accent color. Hover state is a full flood of the accent color with a matching glow and `#050505` text.
- **Stat Cards:** Background is `#111111`. Feature massive `headline-lg` numbers that "tick" upward on scroll.
- **Marquees:** Infinite horizontal scrolling text using `Monument Extended`. Speed increases 3x upon section activation.
- **Input Fields:** Minimalist lines. Only a bottom border (1px) in the default state, turning into a glowing full-surround border on focus.
- **Grid Lists:** Data points separated by 1px horizontal lines. Each row features a "hover flood" where the background flashes the accent color at 10% opacity.
- **Scroll Indicators:** 2px wide vertical lines that grow and shrink to indicate progress through the narrative chapters.