import { ArrowRight, Lock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Figure } from '@/components/common/Figure'
import { useT } from '@/i18n/LocaleProvider'
import { bookingHref } from '@/lib/site'

/**
 * The hero entrance is CSS (`hero-beat`), deliberately not Framer Motion.
 *
 * Motion renders its `initial` state into the prerendered HTML, so a
 * motion-driven hero sits at opacity:0 until the bundle hydrates — which
 * delays LCP and leaves the page blank if JS fails. Below-the-fold sections
 * use whileInView as specified; above the fold stays on the CSS path.
 */
export function Hero() {
  const t = useT()
  const href = bookingHref()

  return (
    <section className="relative overflow-hidden border-b border-[var(--color-hairline)] bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:px-8 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="hero-beat text-xs font-semibold tracking-[0.14em] text-[var(--color-indigo-brand)] uppercase">
            {t.hero.eyebrow}
          </p>

          <h1 className="hero-beat hero-beat-1 mt-5 text-4xl leading-[1.08] text-[var(--color-ink)] sm:text-5xl lg:text-[3.4rem]">
            {t.hero.headline}
          </h1>

          <p className="hero-beat hero-beat-2 mt-6 max-w-[52ch] text-lg leading-relaxed text-[var(--color-slate-muted)]">
            {t.hero.subhead}
          </p>

          <div className="hero-beat hero-beat-3 mt-9 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <a href={href}>
                {t.hero.ctaPrimary}
                <ArrowRight aria-hidden strokeWidth={2} className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">{t.hero.ctaSecondary}</a>
            </Button>
          </div>

          <ul className="hero-beat hero-beat-4 mt-10 flex flex-wrap gap-2.5">
            {t.hero.chips.map((chip) => (
              <li key={chip}>
                <Badge
                  variant="secondary"
                  className="gap-1.5 border border-[var(--color-hairline)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--color-slate-muted)]"
                >
                  <Lock
                    aria-hidden
                    strokeWidth={2}
                    className="size-3 text-[var(--color-indigo-brand)]"
                  />
                  {chip}
                </Badge>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-beat hero-beat-2">
          {/* Add `src="/images/hero.avif"` once the photograph exists — it then
              renders eager + fetchPriority high as the LCP candidate. */}
          <Figure
            subject={t.hero.imageQuery}
            alt={t.hero.imageAlt}
            ratio="aspect-[4/5]"
            priority
          />
        </div>
      </div>
    </section>
  )
}
