# Lux & Decibels — Typography & Layout System

## 1. What was wrong

The site was pulling in **five different font families** across its own CSS files:

| File | Fonts found |
|---|---|
| `index.css` (global) | Rajdhani, Barlow, Barlow Condensed |
| `Partners.css` | Oswald, Poppins |
| `Team.css` | Oswald, Poppins, Barlow Condensed |
| `Hero.css`, `Navbar.css`, `Projects.css` | Rajdhani, Barlow Condensed |
| `Services.css` | **locally redefined** `.section-label/.section-title/.section-subtitle` with its own size/weight (800 instead of 600), overriding the global ones |

That's why Home, Services, Team, and Partners headings all looked like they belonged to different websites — they were, technically, using different typefaces and different weight/size rules.

Layout was equally split:
- Global `.container`: `1180px` max-width, `24px` padding
- `.partners-container`: `1280px` max-width, `36px` padding
- `.team-container`: `1260px` max-width, `32px` padding

Three different "centered content" widths means paragraphs in Partners/Team don't start or end at the same horizontal line as Home/About/Services — the exact "uneven spacing" issue you flagged.

Footer text used the same near-white token as headings for body copy, and links had no distinct, brighter color — so visually nothing in the footer was differentiated or easy to scan.

## 2. Chosen typeface: **Inter**

Inter was chosen over Poppins for this brand specifically because Lux & Decibels reads as a **premium architectural-lighting / technology** brand, not a friendly consumer brand. Poppins' geometric, rounded letterforms suit playful SaaS or retail products; Inter's narrower, more technical letterforms read as engineered and high-end — closer to brands like Linear, Vercel, or premium lighting/AV manufacturers. It also has excellent number/data legibility, useful for the stat counters ("500+ Projects," "98% Satisfaction") used throughout the site.

One `@import` in `src/index.css`, four weights only:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

## 3. Typography hierarchy (now a single source of truth)

All of this lives in `:root` in `src/index.css`. Every component file references these variables — none hardcode a font, size, or weight anymore.

| Token | Value | Used for |
|---|---|---|
| `--fs-h1` | `clamp(34px, 4.8vw, 56px)` | Hero / page-level heading |
| `--fs-h2` | `clamp(28px, 3.6vw, 40px)` | Section heading (`.section-title`) — Home, About, Services, Projects, Team, Partners, Contact all use the same rule |
| `--fs-h3` | `clamp(19px, 1.8vw, 22px)` | Card titles, founder names, modal titles |
| `--fs-h4` | `clamp(15px, 1.3vw, 17px)` | Minor headings (service card titles, detail-card titles) |
| `--fs-body` | `16px` | Default body |
| `--fs-body-sm` | `14px` | Secondary/paragraph copy used inside cards and sections |
| `--fs-label` | `13px` | Eyebrow / uppercase section labels |
| `--fs-caption` | `12px` | Stat labels, meta text, footer legal links |

Weights:

| Token | Weight | Applied to |
|---|---|---|
| `--fw-bold` (700) | `h1`, `.section-label` | Main headings, eyebrow labels |
| `--fw-semibold` (600) | `h2`, `.section-title`, buttons | Section headings, all CTAs |
| `--fw-medium` (500) | `h3`, `h4` | Sub-headings |
| `--fw-regular` (400) | body text, `p` | All paragraph content |

Body line-height is `1.8` everywhere (`--lh-body`), exactly as requested. Heading line-height is `1.2` (`--lh-heading`).

## 4. Layout tokens

| Token | Value |
|---|---|
| `--container-max` | `1200px` (was 1180 / 1260 / 1280 depending on section — now one value) |
| `--container-pad` | `32px` desktop |
| `--container-pad-tablet` | `24px` (≤1024px) |
| `--container-pad-mobile` | `20px` (≤480px) |
| `--section-pad-y` | `100px` top/bottom for every section on desktop |
| `--section-pad-y-tablet` | `72px` |
| `--section-pad-y-mobile` | `56px` |
| `--heading-gap` | `16px` — space between eyebrow label and heading |
| `--subtitle-gap` | `14px` — space between heading and subtitle/body |

Every section (`About`, `Contact`, `Hero`, `Projects`, `Services`, `Team`, `Partners`, `Footer`) now reads `var(--container-max)` / `var(--container-pad)` instead of a locally hardcoded width — so paragraph edges line up identically down the page.

## 5. Footer — readability fix

```css
.footer {
  --footer-heading: #ffffff;  /* column titles */
  --footer-text: #d6d6d6;     /* paragraphs / contact lines */
  --footer-link: #e5e5e5;     /* nav links, legal links */
}
.footer-link:hover,
.footer-legal a:hover { color: var(--gold); } /* gold accent on hover, as requested */
```

This matches the brightness levels you specified and gives clear visual separation between footer headings, body copy, and links — while keeping the same gold hover accent used across the rest of the site.

## 6. Files changed

- `src/index.css` — single font import, full token system, global heading rules, unified `.container`, `.section-label/.section-title/.section-subtitle`, `.btn-primary/.btn-outline`
- `src/style/Hero.css` — removed Rajdhani/Barlow Condensed
- `src/style/Navbar.css` — removed Barlow Condensed, container aligned to global tokens
- `src/style/About.css` — removed inline Rajdhani/Barlow Condensed, body copy brightness standardized
- `src/style/Contact.css` — removed Barlow Condensed/Barlow, form inputs standardized
- `src/style/Services.css` — **removed local override** of `.section-label/.section-title/.section-subtitle` (this was the main cause of Services looking different from every other section); removed Rajdhani/Barlow Condensed elsewhere in the file
- `src/style/Projects.css` — removed Rajdhani/Barlow Condensed across cards and modal
- `src/style/Team.css` — removed Oswald/Poppins/Barlow Condensed; `.team-container` now matches global container
- `src/style/Partners.css` — removed Oswald/Poppins; `.partners-container` now matches global container
- `src/style/Footer.css` — rewritten for the brighter, premium color spec above; grid padding aligned to global container/section tokens

No `className` values were renamed and no JSX/component logic was touched — this was a pure CSS-token consolidation, so the existing markup, animations, and interactivity (modals, tabs, mobile menu) all continue to work exactly as before.

## 7. Responsive behavior

| Breakpoint | Container padding | Section vertical padding | Body font-size |
|---|---|---|---|
| Desktop (>1024px) | 32px | 100px | 16px |
| Tablet (≤1024px) | 24px | 72px | 16px |
| Mobile (≤480px) | 20px | 56px | 15px |

Heading sizes use `clamp()` so they scale fluidly between breakpoints rather than jumping at fixed media-query steps — this is why `--fs-h1`/`--fs-h2`/`--fs-h3` are defined as `clamp(min, fluid, max)` instead of fixed pixel values per breakpoint.
