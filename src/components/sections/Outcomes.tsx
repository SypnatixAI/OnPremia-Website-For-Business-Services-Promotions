import { BadgeCheck, Lock, Timer, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Section, SectionHeading } from '@/components/common/Section'
import { Stagger, StaggerItem } from '@/components/motion/Reveal'
import { useT } from '@/i18n/LocaleProvider'

const ICONS = [Timer, BadgeCheck, Zap, Lock] as const

/**
 * The "what's in it for me" section. Every card is a result the owner feels,
 * never a capability we ship — if a line describes the system, rewrite it.
 */
export function Outcomes() {
  const t = useT()

  return (
    <Section id="resultats">
      <SectionHeading
        eyebrow={t.outcomes.eyebrow}
        title={t.outcomes.title}
        lead={t.outcomes.lead}
      />

      <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.outcomes.cards.map((card, i) => {
          const Icon = ICONS[i] ?? Timer
          return (
            <StaggerItem key={card.title} hover>
              <Card className="group h-full border-[var(--color-hairline)] shadow-none transition-colors hover:border-[var(--color-indigo-brand)]/40">
                <CardContent>
                  <span className="flex size-10 items-center justify-center rounded-full bg-[var(--color-indigo-soft)] transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                    <Icon
                      aria-hidden
                      strokeWidth={2}
                      className="size-5 text-[var(--color-indigo-deep)]"
                    />
                  </span>
                  <h3 className="mt-4 font-display text-xl text-[var(--color-ink)]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-slate-muted)]">
                    {card.body}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          )
        })}
      </Stagger>
    </Section>
  )
}
