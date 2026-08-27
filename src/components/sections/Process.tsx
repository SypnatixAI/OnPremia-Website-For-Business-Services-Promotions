import { ArrowRight } from 'lucide-react'
import { Section, SectionHeading } from '@/components/common/Section'
import { Stagger, StaggerItem } from '@/components/motion/Reveal'
import { useT } from '@/i18n/LocaleProvider'

export function Process() {
  const t = useT()

  return (
    <Section id="methode">
      <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} lead={t.process.lead} />

      {/* Numbering is real here: the phases are sequential and gated. */}
      <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
        {t.process.phases.map((phase, i) => (
          <StaggerItem key={phase.step}>
            <div className="relative h-full rounded-lg border border-[var(--color-hairline)] bg-white p-6">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm font-medium text-[var(--color-indigo-brand)]">
                  {phase.step}
                </span>
                <h3 className="font-display text-2xl text-[var(--color-ink)]">{phase.title}</h3>
              </div>

              <p className="mt-4 text-[var(--color-slate-muted)]">{phase.body}</p>

              <p className="mt-5 border-l-2 border-[var(--color-indigo-brand)] pl-3 text-sm font-medium text-[var(--color-ink)]">
                {phase.deliverable}
              </p>

              {i < t.process.phases.length - 1 ? (
                <ArrowRight
                  aria-hidden
                  strokeWidth={2}
                  className="absolute top-1/2 -right-[19px] hidden size-5 -translate-y-1/2 text-[var(--color-hairline)] md:block"
                />
              ) : null}
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
