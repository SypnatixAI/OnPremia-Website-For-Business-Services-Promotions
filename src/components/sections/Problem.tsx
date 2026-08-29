import { Reveal } from '@/components/motion/Reveal'
import { Section } from '@/components/common/Section'
import { CountUp } from '@/components/common/CountUp'
import { useLocale } from '@/i18n/LocaleProvider'

/**
 * One idea, two cited facts.
 *
 * The headline figure carries the argument — data is already leaking into
 * public AI tools — and the supporting line says why a Canadian buyer cares.
 * Both link to the report itself, never to press coverage of it. Never add a
 * third fact, and never add one without a source.
 */
export function Problem() {
  const { locale, t } = useLocale()
  const { stat, support } = t.problem

  /* Keeps a whole number whole and a decimal figure exact — a stat must never
     be rounded on its way to the screen. */
  const decimals = Number.isInteger(stat.value) ? 0 : 1
  const format = (n: number) => {
    const text = n.toFixed(decimals)
    return (locale === 'fr' ? text.replace('.', ',') : text) + stat.suffix
  }

  return (
    <Section id="probleme" tone="tinted">
      <Reveal className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold tracking-[0.14em] text-[var(--color-indigo-brand)] uppercase">
          {t.problem.eyebrow}
        </p>
        <h2 className="mt-4 text-3xl text-[var(--color-ink)] md:text-4xl lg:text-[2.75rem]">
          {t.problem.title}
        </h2>

        <figure className="mt-14">
          <CountUp
            value={stat.value}
            format={format}
            className="font-display block text-6xl leading-none font-semibold whitespace-nowrap text-[var(--color-indigo-brand)] md:text-8xl"
          />
          <p className="mx-auto mt-6 max-w-[54ch] text-lg leading-snug text-[var(--color-ink)]">
            {stat.claim}
          </p>
          <figcaption className="mt-4 text-xs text-[var(--color-slate-muted)]">
            <a
              href={stat.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[var(--color-ink)]"
            >
              {stat.source}
            </a>
          </figcaption>
        </figure>
      </Reveal>

      {/* Supporting fact: same rigour, deliberately quieter. */}
      <Reveal className="mx-auto mt-12 max-w-2xl">
        <figure className="border-t border-[var(--color-hairline)] pt-8 text-center">
          <p className="text-[15px] leading-relaxed text-[var(--color-slate-muted)]">
            {support.claim}
          </p>
          <figcaption className="mt-3 text-xs text-[var(--color-slate-muted)]">
            <a
              href={support.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[var(--color-ink)]"
            >
              {support.source}
            </a>
          </figcaption>
        </figure>
      </Reveal>
    </Section>
  )
}
