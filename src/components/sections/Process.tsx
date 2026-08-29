import { ArrowRight } from 'lucide-react'
import { m } from 'motion/react'
import { Section, SectionHeading } from '@/components/common/Section'
import { Stagger, StaggerItem } from '@/components/motion/Reveal'
import { useT } from '@/i18n/LocaleProvider'

export function Process() {
  const t = useT()

  return (
    <Section id="methode">
      <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} lead={t.process.lead} />

      {/* Numbering is real here: the phases are sequential and gated. */}
      <Stagger className="mt-16 grid gap-6 md:grid-cols-3">
        {t.process.phases.map((phase, i) => (
          <StaggerItem key={phase.step} hover>
            <div className="relative h-full rounded-lg border border-[var(--color-hairline)] bg-[var(--color-paper)] p-7">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm font-medium text-[var(--color-indigo-brand)]">
                  {phase.step}
                </span>
                <h3 className="font-display text-2xl text-[var(--color-ink)]">{phase.title}</h3>
              </div>

              <p className="mt-4 text-[var(--color-slate-muted)]">{phase.body}</p>

              {/* Slides in from the card it leaves, so the three phases read
                  as a sequence rather than three boxes. */}
              {i < t.process.phases.length - 1 ? (
                <m.span
                  aria-hidden
                  /* y stays in the motion target: an inline transform would
                     otherwise wipe out a `-translate-y-1/2` class. */
                  initial={{ opacity: 0, x: -6, y: '-50%' }}
                  whileInView={{ opacity: 1, x: 0, y: '-50%' }}
                  viewport={{ once: true, amount: 'some' }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-1/2 -right-[19px] hidden md:block"
                >
                  <ArrowRight
                    strokeWidth={2}
                    className="size-5 text-[var(--color-hairline)]"
                  />
                </m.span>
              ) : null}
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
