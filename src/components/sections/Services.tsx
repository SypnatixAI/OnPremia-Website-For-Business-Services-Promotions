import { FileSearch, Inbox, PenLine, SlidersHorizontal } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Section, SectionHeading } from '@/components/common/Section'
import { Stagger, StaggerItem } from '@/components/motion/Reveal'
import { useT } from '@/i18n/LocaleProvider'

const ICONS = [FileSearch, Inbox, PenLine, SlidersHorizontal] as const

/**
 * Title is the result the client sees, one line says what it buys. No
 * description paragraph: if a title needs explaining, the title is wrong.
 * Nothing here names a technique — that conversation belongs in the audit.
 */
export function Services() {
  const t = useT()

  return (
    <Section id="services">
      <SectionHeading
        eyebrow={t.services.eyebrow}
        title={t.services.title}
        lead={t.services.lead}
      />

      <Stagger className="mt-16 grid gap-5 sm:grid-cols-2">
        {t.services.items.map((service, i) => {
          const Icon = ICONS[i] ?? FileSearch
          return (
            <StaggerItem key={service.title} hover>
              <Card className="group h-full border-[var(--color-hairline)] shadow-none transition-colors hover:border-[var(--color-indigo-brand)]/40">
                <CardContent>
                  <div className="flex items-center gap-2.5">
                    <Icon
                      aria-hidden
                      strokeWidth={2}
                      className="size-5 text-[var(--color-indigo-brand)] transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                    <span className="text-xs font-semibold tracking-[0.12em] text-[var(--color-slate-muted)] uppercase">
                      {service.eyebrow}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl text-[var(--color-ink)]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[var(--color-slate-muted)]">{service.gain}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          )
        })}
      </Stagger>
    </Section>
  )
}
