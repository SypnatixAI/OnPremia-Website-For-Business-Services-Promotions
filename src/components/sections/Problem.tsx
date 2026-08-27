import { AlertTriangle, FileWarning, LogOut, Repeat } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Section, SectionHeading } from '@/components/common/Section'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { useT } from '@/i18n/LocaleProvider'

const ICONS = [LogOut, FileWarning, AlertTriangle, Repeat] as const

export function Problem() {
  const t = useT()

  return (
    <Section id="probleme" tone="tinted">
      <SectionHeading eyebrow={t.problem.eyebrow} title={t.problem.title} lead={t.problem.lead} />

      <Stagger className="mt-14 grid gap-5 sm:grid-cols-2">
        {t.problem.cards.map((card, i) => {
          const Icon = ICONS[i] ?? LogOut
          return (
            <StaggerItem key={card.title}>
              <Card className="h-full border-[var(--color-hairline)] bg-white shadow-none transition-colors hover:border-[var(--color-indigo-brand)]/40">
                <CardHeader>
                  <Icon
                    aria-hidden
                    strokeWidth={2}
                    className="size-5 text-[var(--color-indigo-brand)]"
                  />
                  <CardTitle className="mt-3 font-display text-xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[var(--color-slate-muted)]">{card.body}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          )
        })}
      </Stagger>

      <Reveal className="mt-12">
        <figure className="rounded-lg border border-[var(--color-hairline)] bg-white p-7 md:flex md:items-center md:gap-8 md:p-9">
          {/* nowrap keeps the French "13,4 %" (figure + space + sign) on one line */}
          <p className="font-display shrink-0 text-5xl leading-none font-semibold whitespace-nowrap text-[var(--color-indigo-brand)] md:text-6xl">
            {t.problem.stat.figure}
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-lg leading-snug text-[var(--color-ink)]">{t.problem.stat.claim}</p>
            <p className="mt-2 text-[var(--color-slate-muted)]">{t.problem.stat.context}</p>
            <figcaption className="mt-3 text-xs text-[var(--color-slate-muted)]">
              <a
                href={t.problem.stat.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[var(--color-ink)]"
              >
                {t.problem.stat.source}
              </a>
            </figcaption>
          </div>
        </figure>
      </Reveal>
    </Section>
  )
}
