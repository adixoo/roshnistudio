# Typography Guidelines

Consistency in typography is key to maintaining the refined aesthetic of the Roshni Studio platform. This document outlines the standard scales used for headings and body text across different components.

## Heading Scale

| Level              | Desktop (md+) | Mobile     | Usage                                                              |
| :----------------- | :------------ | :--------- | :----------------------------------------------------------------- |
| **Hero H1**        | `text-7xl`    | `text-5xl` | Main landing page hero section.                                    |
| **Section H2**     | `text-5xl`    | `text-3xl` | Primary section headings (Expertise, Pillars, Testimonials, etc.). |
| **Philosophy H2**  | `text-5xl`    | `text-4xl` | Specialized headings where more prominence is needed.              |
| **CTA H2**         | `text-6xl`    | `text-4xl` | Call-to-action sections.                                           |
| **Sub-heading H3** | `text-xl`     | `text-lg`  | Component-level titles (Project names, etc.).                      |
| **Expertise H3**   | `text-2xl`    | `text-2xl` | Large category titles in expertise grids.                          |

## Specialized Typography

- **Decorative IDs**: Use `text-5xl` for background or decorative numbers (e.g., "01.", "02.").
- **Testimonial Quotes**: Use `text-2xl md:text-3xl` for high-impact pulled quotes.
- **Section Labels (Badge)**: Standard `Badge` component with optional `variant="text"` for smaller, uppercase contextual labels.
- **Micro-copy**: Use `text-xs` or `text-sm` with appropriate letter-spacing (`tracking-widest`) and `uppercase` for metadata like locations or labels.

## Fonts

- **Serif**: `Cormorant` (Defined as `--font-serif`) - Used for all headings and elegant highlights.
- **Sans**: `Inter` (Defined as `--font-sans`) - Used for body copy, buttons, and navigation for clarity.
