import { Boxes, FileSearch, SlidersHorizontal, Workflow } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Section, SectionHeading } from '@/components/common/Section'
import { Stagger, StaggerItem } from '@/components/motion/Reveal'
import { useT } from '@/i18n/LocaleProvider'

const ICONS = [FileSearch, Workflow, SlidersHorizontal, Boxes] as const

export function Services() {
  const t = useT()

  return (
    <Section id="services">
      <SectionHeading
        eyebrow={t.services.eyebrow}
        title={t.services.title}
        lead={t.services.lead}
      />

      <Stagger className="mt-14 grid gap-5 lg:grid-cols-2">
        {t.services.items.map((service, i) => {
          const Icon = ICONS[i] ?? FileSearch
          return (
            <StaggerItem key={service.title}>
              <Card className="h-full border-[var(--color-hairline)] shadow-none transition-colors hover:border-[var(--color-indigo-brand)]/40">
                <CardHeader>
                  <div className="flex items-center gap-2.5">
                    <Icon
                      aria-hidden
                      strokeWidth={2}
                      className="size-5 text-[var(--color-indigo-brand)]"
                    />
                    <span className="text-xs font-semibold tracking-[0.12em] text-[var(--color-slate-muted)] uppercase">
                      {service.eyebrow}
                    </span>
                  </div>
                  <CardTitle className="mt-3 font-display text-2xl">{service.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-[var(--color-slate-muted)]">{service.body}</p>

                  <Separator className="my-5" />

                  <dl className="space-y-3 text-sm">
                    <div>
                      <dt className="font-semibold tracking-[0.1em] text-[var(--color-indigo-deep)] uppercase">
                        {t.services.outputLabel}
                      </dt>
                      <dd className="mt-1 text-[var(--color-ink)]">{service.output}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold tracking-[0.1em] text-[var(--color-slate-muted)] uppercase">
                        {t.services.bestForLabel}
                      </dt>
                      <dd className="mt-1 text-[var(--color-slate-muted)]">{service.bestFor}</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </StaggerItem>
          )
        })}
      </Stagger>
    </Section>
  )
}
