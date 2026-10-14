import { Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section, SectionHeading } from '@/components/common/Section'
import { Reveal } from '@/components/motion/Reveal'
import { useT } from '@/i18n/LocaleProvider'
import { bookingHref } from '@/lib/site'

/**
 * Demo slot.
 *
 * PLACEHOLDER : à fournir par Luc — capture d'écran ou vidéo de la plateforme.
 *
 * To go live, replace the panel below with either:
 *   <video className="aspect-video w-full rounded-lg" controls preload="none"
 *          poster="/images/demo-poster.avif" src="/video/demo.mp4" />
 *   — self-hosted, so the demo page doesn't ship a third-party tracker; or
 *   <img src="/images/demo.avif" ... /> for a still capture.
 * Keep the 16/9 box either way: the space is already reserved, so swapping in
 * the real asset causes no layout shift.
 */
export function Demo() {
  const t = useT()

  return (
    <Section id="demo" tone="tinted">
      <SectionHeading eyebrow={t.demo.eyebrow} title={t.demo.title} lead={t.demo.lead} />

      <Reveal className="mt-12">
        <div
          role="img"
          aria-label={t.demo.placeholderNote}
          className="relative flex aspect-video w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-[var(--color-hairline)] bg-[var(--color-paper)]"
        >
          {/* Same quiet diagonal wash as <Figure> — reads as a designed panel,
              not a broken embed. */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(135deg, var(--color-indigo-brand) 0 1px, transparent 1px 11px)',
            }}
          />

          <span className="relative flex size-14 items-center justify-center rounded-full bg-[var(--color-indigo-soft)]">
            <Play
              aria-hidden
              strokeWidth={2}
              className="size-6 translate-x-[1px] text-[var(--color-indigo-deep)]"
            />
          </span>

          <p className="relative mt-5 text-xs font-semibold tracking-[0.14em] text-[var(--color-indigo-brand)] uppercase">
            {t.demo.placeholderLabel}
          </p>
          <p className="relative mt-2 max-w-[46ch] px-6 text-center text-sm text-[var(--color-slate-muted)]">
            {t.demo.placeholderNote}
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <a href={bookingHref()}>{t.demo.cta}</a>
          </Button>
        </div>
      </Reveal>
    </Section>
  )
}
