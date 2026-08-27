# CLAUDE.md — OnPremia marketing site

Context for anyone (human or Claude) picking this project up. Read this before
changing copy, animation, or the build setup — several things here look like
mistakes but are deliberate, and the reasons are non-obvious.

## What this is

Bilingual (FR-default / EN) marketing site for **OnPremia**, an AI &
automation consultancy in Quebec. Audience is non-technical SMB
owners/decision-makers in Quebec & Ontario — manufacturing first, then auto
dealerships, accounting firms, clinics.

The positioning wedge is **deployment inside the client's own perimeter**:
either on-prem hardware or the client's own Azure tenant. Everything on the
page ladders back to that.

## Hard rules

**Never invent content.** No fabricated case studies, client names, testimonials,
statistics, certifications, or people. If real content is missing, ship an
honest empty state or a labelled gap — never a plausible-sounding placeholder
that could be mistaken for fact. This applies especially to the founders
section and `Proof.tsx`.

**Never strengthen the sovereignty wording.** The copy says *"dans votre
périmètre"* and never "your data never leaves your infrastructure", because
deployment can be the client's own **Azure tenant** — which is cloud. The FAQ
answers *"Est-ce que c'est de l'infonuagique ?"* head-on rather than dodging.
A Law 25-conscious buyer will probe this; overstating it is the fastest way to
lose credibility. Do not "improve" these lines without confirming what is
actually deployed.

Unverified as of writing: whether tenants sit in Azure **Canada East**
(Quebec City). If confirmed, *"vos données restent au Québec"* becomes a
literal, verifiable claim and is the strongest line available. Until then the
copy says "votre région canadienne".

## Stack

Vite 8 · React 19 · TypeScript 6 · Tailwind v4 (`@theme` in `src/index.css`) ·
shadcn/ui · `motion` v13 · lucide-react · react-hook-form + zod ·
`vite-react-ssg` for static prerender.

```bash
npm run dev        # dev server
npm run build      # prerender to dist/
npm run preview    # serve dist/ on 4173
npm run typecheck  # tsc -b
```

`dist/` must be served over HTTP. Opening `dist/fr/index.html` via `file://`
shows a blank/unstyled page because assets are referenced from the site root.

## i18n — the contract

`src/i18n/fr.ts` is the **source of truth**. `src/i18n/en.ts` is declared as
`Dictionary` (= `typeof fr`), so a missing or renamed key is a **compile
error**, not a silent runtime fallback. Fixed-length collections use
`Tuple2/3/4` so English can't ship fewer items than French.

French is Québécois, written not translated. Keep the typographic apostrophe
(`’`) and the space before `?`/`:`/`%`.

All copy changes happen in the dictionaries. Components read from `useT()`.

## Animation contract

- Only `transform` and `opacity` animate. Never `width`/`height`/`top`/`left`.
- `LazyMotion` runs with `strict`, which **forbids `motion.*`** — use `m.*`.
  That's what holds the feature bundle at ~4.6kb instead of ~34kb.
- `MotionConfig reducedMotion="user"` wraps the app.
- `domMax` is deliberately unused; nothing needs drag or layout animation.

**Two deliberate deviations from the original brief — do not "fix" these:**

1. **`viewport={{ amount: 'some' }}`, not `0.5`.** `amount` is the fraction of
   *the element* that must be visible, so any block taller than 2× the viewport
   can never reach 0.5 — the observer never fires and content stays at
   `opacity: 0` **permanently**. This actually happened to the comparison table
   on desktop and would hit every card grid on mobile.

2. **The hero uses CSS animation (`.hero-beat`), not Motion.** Motion renders
   its `initial` state into the prerendered HTML, so a motion-driven hero sits
   at `opacity: 0` until the bundle hydrates — delaying LCP and blanking the
   page if JS fails. Above the fold stays on the CSS path. There's also a
   `<noscript>` reveal fallback in `index.html` for the same reason.

## Routing / SEO

`/` redirects to `/fr/`. `/fr/` and `/en/` are prerendered to real HTML, so
crawlers get full content plus reciprocal `hreflang` without executing JS.
`src/lib/seo.tsx` emits `<html lang>`, canonical, `hreflang` (+ `x-default →
/fr`), Open Graph and Organization JSON-LD. `<meta charSet>` is emitted first
so it lands inside the first 1024 bytes.

`ScrollToHash` re-applies the anchor target after hydration on several short
delays — the router resets scroll after the first effect flush, so a single
rAF isn't enough.

**React Router is pinned to v6.** `vite-react-ssg@0.9.2` imports
`react-router-dom/server.js`, which v7 removed from its `exports` map —
upgrading breaks the build (verified, not assumed). `npm audit` therefore
reports 2 moderate advisories; both are unreachable here (no
attacker-controlled nav targets; build-time prerender, no runtime SSR). See
README for the full reasoning before "fixing" this.

## Outstanding

Set in `src/lib/site.ts` — each is an empty string with a working fallback, so
nothing is broken while they're unset:

- `BOOKING_URL` → CTAs fall back to `#contact`. Prefer self-hosted Cal.com over
  a US SaaS scheduler, given the positioning.
- `CONTACT_ENDPOINT` → the form opens a prefilled mailto instead.
- `LINKEDIN_URL` → link hides itself.
- Confirm `SITE_URL` (`onpremia.ca`) and `CONTACT_EMAIL`.

Content gaps:

- **4th co-founder.** Three real names are listed; the brief mentions four.
  Add an object to `founders.members` in both dictionaries — the grid adjusts.
- **Founder portraits.** Set `photo: '/images/founders/<x>.avif'`. Cards show
  initials until then. Never substitute stock photography for founder faces.
- **Case studies.** `Proof.tsx` offers references rather than claiming results.
- **Photography.** `<Figure>` renders a designed panel until given `src`.
  Unsplash queries are in comments beside each `imageQuery`.

The adoption statistic in `Problem.tsx` **is real**: Statistics Canada,
*Canadian Survey on Business Conditions*, Q2 2026 — 13.4% cite
cybersecurity/privacy as a barrier; adoption tripled to 19.2% since 2024.
Replace only with another sourced figure.

## Environment gotchas on this machine

- There is a stray `C:\Users\nkol2401\node_modules\` (~1,000 packages from an
  accidental install in the home directory) containing the `node` package with
  its own **node.exe v21.7.3**. npm prepends every ancestor `node_modules/.bin`
  to PATH, so that shim outranks `C:\Program Files\nodejs\` for **every npm
  script in every project under the user folder**. The three `node*` shims were
  renamed to `*.disabled-by-claude`. If builds suddenly report a Node version
  that doesn't match `node -v`, this is why.
- A stale global npm 10.5.0 in `AppData\Roaming\npm` was renamed to `*.bak` so
  the bundled npm 11.x is used.
- Global `~/.npmrc` sets `legacy-peer-deps=true`, so peer-range violations
  install silently instead of erroring. Check peers manually.
- Avoid `&` in any parent directory name — it breaks Windows npm bin shims
  (`%dp0%` truncates at the ampersand). This is why the project sits at
  `Projects\onpremia-web` rather than inside the `AI&Automation…` tree.
