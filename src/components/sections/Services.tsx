import { m } from 'motion/react'
import { FileSearch, PenLine, ShieldCheck, Workflow } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Section, SectionHeading } from '@/components/common/Section'
import { Stagger, StaggerItem, subItemVariants, subStaggerVariants } from '@/components/motion/Reveal'
import { useT } from '@/i18n/LocaleProvider'

const ICONS = [FileSearch, Workflow, PenLine, ShieldCheck] as const

/**
 * Title is the result the client sees, one line says what it buys, then a
 * short list of the processes we actually take over — each one a full chain,
 * from the first request to the closed file. Nothing here names a technique:
 * that conversation belongs in the audit.
 *
 * The list is deliberately quiet (small, muted, hairline-separated) so the
 * result line stays the thing you read first.
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

      <Stagger className="mt-16 grid items-start gap-5 sm:grid-cols-2">
        {t.services.items.map((service, i) => {
          const Icon = ICONS[i] ?? FileSearch
          return (
            <StaggerItem key={service.title} hover>
              <Card className="group border-[var(--color-hairline)] shadow-none transition-colors hover:border-[var(--color-indigo-brand)]/40">
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

                  {/* Inherits the card's variant state — no viewport hook of its own. */}
                  <m.ul
                    variants={subStaggerVariants}
                    className="mt-5 space-y-2.5 border-t border-[var(--color-hairline)] pt-5"
                  >
                    {service.examples.map((example) => (
                      <m.li key={example} variants={subItemVariants} className="flex gap-3">
                        <span
                          aria-hidden
                          className="mt-[0.5rem] size-1.5 shrink-0 rounded-full bg-[var(--color-indigo-brand)]/60"
                        />
                        <span className="text-sm leading-relaxed text-[var(--color-slate-muted)]">
                          {example}
                        </span>
                      </m.li>
                    ))}
                  </m.ul>
                </CardContent>
              </Card>
            </StaggerItem>
          )
        })}
      </Stagger>
    </Section>
  )
}
