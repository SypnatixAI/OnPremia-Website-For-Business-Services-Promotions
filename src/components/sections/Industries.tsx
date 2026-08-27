import { Calculator, Car, Factory, Stethoscope } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Section, SectionHeading } from '@/components/common/Section'
import { Reveal } from '@/components/motion/Reveal'
import { useT } from '@/i18n/LocaleProvider'

const ICONS = [Factory, Car, Calculator, Stethoscope] as const

export function Industries() {
  const t = useT()
  const first = t.industries.tabs[0]

  return (
    <Section id="secteurs" tone="tinted">
      <SectionHeading
        eyebrow={t.industries.eyebrow}
        title={t.industries.title}
        lead={t.industries.lead}
      />

      <Reveal className="mt-12">
        <Tabs defaultValue={first.id}>
          <TabsList className="flex h-auto w-full flex-wrap justify-start gap-1 bg-white p-1.5">
            {t.industries.tabs.map((tab, i) => {
              const Icon = ICONS[i] ?? Factory
              return (
                <TabsTrigger key={tab.id} value={tab.id} className="gap-2 px-4 py-2">
                  <Icon aria-hidden strokeWidth={2} className="size-4" />
                  {tab.label}
                </TabsTrigger>
              )
            })}
          </TabsList>

          {t.industries.tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-6">
              <div className="rounded-lg border border-[var(--color-hairline)] bg-white p-7 md:p-9">
                <p className="font-display text-xl leading-snug text-[var(--color-ink)] italic md:text-2xl">
                  {tab.quote}
                </p>

                <ul className="mt-7 grid gap-3 md:grid-cols-3">
                  {tab.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-md bg-[var(--color-paper-2)] p-4 text-sm text-[var(--color-ink)]"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>

                <p className="mt-7 border-l-2 border-[var(--color-indigo-brand)] pl-3 font-medium text-[var(--color-indigo-deep)]">
                  {tab.outcome}
                </p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Reveal>

      <Reveal>
        <p className="mt-8 max-w-[62ch] text-sm text-[var(--color-slate-muted)]">
          {t.industries.dataNote}
        </p>
      </Reveal>
    </Section>
  )
}
