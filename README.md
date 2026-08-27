# OnPremia — marketing site

Bilingual (FR/EN) marketing site for OnPremia. French is the default and the
authoritative language; English is type-checked against it.

## Stack

| Layer | Choice |
| --- | --- |
| Build | Vite 8 + `vite-react-ssg` (static prerender) |
| UI | React 19, TypeScript 6 |
| Styling | Tailwind CSS v4 (`@theme` in `src/index.css`) |
| Components | shadcn/ui (`src/components/ui`) |
| Animation | `motion` v13 via `LazyMotion` + `domAnimation` |
| Icons | `lucide-react`, 2px stroke |
| Forms | `react-hook-form` + `zod` |

## Commands

```bash
npm run dev        # dev server
npm run build      # prerender to dist/
npm run preview    # serve dist/
npm run typecheck  # tsc -b
```

## Routing & i18n

`/` redirects to `/fr/`. `/fr/` and `/en/` are **prerendered to real HTML** at
build time, so crawlers get full content and reciprocal `hreflang` without
executing JavaScript.

`src/i18n/fr.ts` is the source of truth. `src/i18n/en.ts` is declared as
`Dictionary` (derived from `typeof fr`), so a missing or renamed key is a
**compile error**, not a silent runtime fallback. Fixed-length collections use
`Tuple2/3/4` so English can't ship fewer items than French.

To change copy, edit the dictionaries — no component changes needed.

## Animation contract

- Only `transform` and `opacity` are animated. Never `width`/`height`/`top`/`left`.
- Scroll entrances: `whileInView` + `viewport={{ once: true, amount: 0.5 }}`.
- Grids stagger at `0.1s` via `staggerChildren`.
- `MotionConfig reducedMotion="user"` wraps the app.
- `LazyMotion` uses `strict`, which **forbids `motion.*`** — use `m.*`. This is
  what keeps the feature bundle at ~4.6kb instead of ~34kb. `domMax` is
  deliberately unused; nothing here needs drag or layout animation.

## Decisions worth knowing

**React Router is pinned to v6.** `vite-react-ssg@0.9.2` peer-depends on
`react-router-dom@^6.14.1` and imports `react-router-dom/server.js`, which v7
removed from its `exports` map — upgrading breaks the build (verified).

`npm audit` therefore reports two *moderate* React Router advisories. Both are
unreachable in this architecture:

- *Open redirect via backslash in `<Link>`/`useNavigate`* — requires
  attacker-controlled navigation targets. Every target here is a literal
  (`/fr/`, `/en/`, `#anchor`).
- *Constructor injection via `deserializeErrors()` during SSR hydration* —
  requires runtime SSR error serialization. This site is prerendered at build
  time and ships as static files; there is no server.

If a clean audit is required for client-facing reasons, the alternative is
dropping `vite-react-ssg` for a small custom prerender script with no router at
all — this two-page site does not otherwise need routing.

**Sovereignty wording.** Copy says *"dans votre périmètre"* — never "never
leaves your infrastructure" — because deployment is either on-prem hardware
**or** the client's own Azure tenant, and the latter is cloud. The FAQ answers
"Is this cloud?" directly rather than dodging it. Do not strengthen this
language without confirming it matches what is actually deployed.

## Before launch

Nothing reads as "PLACEHOLDER" on the rendered page — every unset value
degrades to something sensible. These are the real gaps:

**Set in `src/lib/site.ts`** (each is an empty string with a working fallback):

| Constant | Fallback while empty |
| --- | --- |
| `BOOKING_URL` | every booking CTA points at `#contact` |
| `CONTACT_ENDPOINT` | the form opens a prefilled email to `CONTACT_EMAIL` |
| `LINKEDIN_URL` | the link is hidden rather than 404ing |

`SITE_URL` and `CONTACT_EMAIL` are set to `onpremia.ca` /
`bonjour@onpremia.ca` — confirm both.

**Content that can't be invented:**

- **4th co-founder.** Three are listed. Add a fourth object to
  `founders.members` in both dictionaries; the grid adjusts on its own.
- **Founder portraits.** Set `photo: '/images/founders/<name>.avif'`. Until
  then cards show initials. Never substitute stock photography here.
- **Case studies.** `Proof.tsx` offers references instead of claiming results.
  Each real study needs: client, problem, what was built, one measured
  outcome, and written permission to be named.
- **Photography.** `<Figure>` renders a designed panel until given a `src`.
  Drop files in `public/images/` and pass `src` — the hero one should be
  `priority` so it stays the LCP element. Unsplash queries are in comments
  beside each `imageQuery`.

**Already real:** the adoption statistic in the problem section cites
Statistics Canada, *Canadian Survey on Business Conditions*, Q2 2026
(13.4% cite cybersecurity/privacy as a barrier; adoption tripled to 19.2%
since 2024). Replace only with another sourced figure.
