# Design System Strategy: AI-Enhanced Personal Identity Portfolio

## 1. Overview & Creative North Star
The vision for this design system is **"The Synthetic Intelligence Interface."** This is not a standard web experience; it is a high-fidelity, biometric operating system designed to visualize the digital soul. We are moving away from traditional "page-based" layouts toward a centralized, data-dense dashboard that feels like a proprietary product-level interface.

The "template" look is avoided through **Dynamic Asymmetry**—where data visualizations and profile modules are intentionally offset to create a sense of scanning and movement. We lean into the "system" aesthetic by treating every pixel as a piece of metadata, using high-contrast typography and atmospheric depth to separate the observer from the observed.

---

## 2. Colors & Surface Architecture
The palette is rooted in the deep void of `#0B0B10` (`surface`), providing a canvas where light (data) can truly pop.

*   **Primary (`primary` / `primary_container`):** A sharp Cyan used for "scanning" elements, active data streams, and primary functional triggers.
*   **Secondary (`secondary` / `secondary_container`):** A deep Purple used for "human" elements, identity markers, and secondary navigational paths.
*   **The "No-Line" Rule:** To maintain a high-end feel, **1px solid borders for sectioning are strictly prohibited.** Structural separation must be achieved through background shifts. For example, a `surface_container_low` module should sit atop the `surface` background to create a perceived boundary without a hard line.
*   **Surface Hierarchy & Nesting:** Depth is created by "stacking" container tiers. Use `surface_container_lowest` for deep, recessed background areas and `surface_container_highest` for interactive, floating data modules.
*   **The "Glass & Gradient" Rule:** All primary CTAs must utilize a gradient transition from `primary` to `primary_container`. Floating "Identity Nodes" should utilize Glassmorphism: `surface_bright` at 40% opacity with a `backdrop-filter: blur(20px)`.
*   **Signature Textures:** Apply a 3% film grain overlay and subtle horizontal scan lines (0.5px height, 4px gap) over the `background` to reinforce the "Cyber-tech" aesthetic.

---

## 3. Typography
The type system balances the brutalist geometry of **Space Grotesk** with the utilitarian precision of **Inter**.

*   **Display & Headlines:** Use `display-lg` to `headline-sm` in **Space Grotesk**. This font’s geometric quirks should be emphasized with tight tracking (-2%) to feel like a high-tech readout.
*   **Body & Titles:** Use **Inter** for all functional text (`body-md` and `title-sm`). It provides the necessary legibility to balance the "glitch" elements of the UI.
*   **Metadata Labels:** Use `label-sm` in Inter (All Caps, +5% letter spacing) for data points (e.g., "CORE ARCHITECTURE: V2.4"). This conveys an authoritative, system-generated tone.

---

## 4. Elevation & Depth
In this system, elevation is an atmospheric property, not just a shadow.

*   **Tonal Layering:** Avoid traditional shadows where possible. Instead, place a `surface_variant` card on a `surface_dim` background. The slight shift in luminosity creates a sophisticated, "quiet" elevation.
*   **Ambient Rim Lights:** When an element is focused, apply a soft, 1px inner-glow (rim light) using `primary` at 30% opacity. This mimics a screen glowing from within.
*   **Ghost Borders:** If an edge must be defined for accessibility, use a "Ghost Border"—the `outline_variant` token at 15% opacity. It should be felt, not seen.
*   **Shadows:** When floating elements require a shadow, use a tinted blur. Instead of black, use `primary_fixed_dim` at 10% opacity with a 40px blur radius to simulate neon light dispersion.

---

## 5. Components

### Buttons & Interaction
*   **Primary Action:** A full gradient fill (Cyan to Purple). On hover, a subtle "glitch" shift (2px horizontal offset) and an increase in the glow radius.
*   **Secondary Action:** "Ghost" style. No fill, only the `outline_variant` (Ghost Border) and `on_surface` text.
*   **Rounding:** Use the `xl` (1.5rem) token for buttons to create a "pill" or "product" feel, contrasting against the sharper `DEFAULT` (0.5rem) corners of data modules.

### Identity Cards
*   **Visual Style:** No dividers. Use `surface_container_high` for the card body. 
*   **Header:** Place the `title-md` text against a `primary_dim` accent bar (2px width) to the left to denote "Active Data."
*   **Data Visualization:** Incorporate "Sparklines" and "Scanning Bars" using `tertiary_container` to show AI processing status.

### Input Fields & Controls
*   **Text Inputs:** A simple bottom-bar using `outline`. On focus, the bar expands to 2px and transitions to `primary`, accompanied by a subtle "scanning" animation across the field.
*   **Progress Bars:** Use a dual-tone gradient. The "filled" portion should have a `primary` glow, while the "unfilled" portion uses `surface_container_highest`.

### Biometric Scanning Overlays
*   **The "Targeting" Component:** Use four L-shaped corners (using `primary`) to frame floating profile imagery. This creates an immediate "AI analysis" visual metaphor.

---

## 6. Do’s and Don'ts

### Do:
*   **Use Intentional Asymmetry:** If you have three data points, make one larger or offset it to break the "web template" feel.
*   **Embrace the Grain:** Use subtle noise textures to prevent the deep blacks from looking "flat" or "cheap."
*   **Leverage Micro-interactions:** Every hover should feel like a system response—slight flickers, color shifts, or data expanding.

### Don’t:
*   **Don't use 100% Opaque Borders:** This kills the "Cyber-tech" atmosphere. Boundaries should be tonal or "Ghosted."
*   **Don't use Standard Grids:** While an underlying grid exists, elements should overlap and "float" across grid lines to create depth.
*   **Don't Overuse Glitch Effects:** Glitches are for *accents* (hover states, load screens). If the text is constantly vibrating, it becomes unusable. Readability must remain the priority.
*   **Don't use Pure Grey Shadows:** Shadows must be tinted with the background color (`#0B0B10`) to maintain the "glow" of the system.