import { Calculator, Car, Check, Factory, Stethoscope } from 'lucide-react'
import { m } from 'motion/react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Section, SectionHeading } from '@/components/common/Section'
import { Reveal, hoverLift } from '@/components/motion/Reveal'
import { useT } from '@/i18n/LocaleProvider'
import { withBase } from '@/lib/site'

const ICONS = [Factory, Car, Calculator, Stethoscope] as const

const EASE = [0.16, 1, 0.3, 1] as const

/**
 * Two columns: the sector's photo on one side, the pain quote + three
 * outcomes + the result line on the other. Stacks on mobile.
 *
 * Radix unmounts the inactive tab, so the panel remounts on every switch and
 * the entrance animation replays on its own — that is the tab transition.
 * Only opacity and transform move; `MotionConfig reducedMotion="user"` drops
 * the transform for anyone who asked for less motion.
 *
 * The four photos are cropped square at every breakpoint so the block keeps
 * the same shape whichever tab is open, whatever the source aspect ratio.
 */
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
          <TabsList className="flex h-auto w-full flex-wrap justify-start gap-1 bg-[var(--color-paper)] p-1.5">
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
              <m.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="grid items-center gap-8 rounded-lg border border-[var(--color-hairline)] bg-[var(--color-paper)] p-6 md:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10"
              >
                <img
                  src={withBase(tab.image)}
                  alt={tab.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full rounded-lg bg-[var(--color-paper-2)] object-cover"
                />

                <div>
                  <p className="font-display text-xl leading-snug text-[var(--color-ink)] italic md:text-2xl">
                    {tab.quote}
                  </p>

                  {/* Each card names one automation the way the client would
                      say it, then what it buys them. Never the technique. */}
                  <ul className="mt-7 space-y-3">
                    {tab.benefits.map((benefit) => (
                      <m.li
                        key={benefit.label}
                        whileHover={hoverLift}
                        className="flex items-start gap-3 rounded-md bg-[var(--color-paper-2)] p-4"
                      >
                        <Check
                          aria-hidden
                          strokeWidth={2}
                          className="mt-0.5 size-4 shrink-0 text-[var(--color-indigo-brand)]"
                        />
                        <span>
                          <span className="block text-sm font-medium text-[var(--color-ink)]">
                            {benefit.label}
                          </span>
                          <span className="mt-1 block text-sm text-[var(--color-slate-muted)]">
                            {benefit.gain}
                          </span>
                        </span>
                      </m.li>
                    ))}
                  </ul>

                  <p className="mt-7 border-l-2 border-[var(--color-indigo-brand)] pl-4 font-display text-lg text-[var(--color-indigo-deep)]">
                    {tab.outcome}
                  </p>
                </div>
              </m.div>
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
