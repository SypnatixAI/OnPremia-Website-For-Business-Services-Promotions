import { ArrowUpRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Section, SectionHeading } from '@/components/common/Section'
import { Stagger, StaggerItem } from '@/components/motion/Reveal'
import { useT } from '@/i18n/LocaleProvider'

export function Founders() {
  const t = useT()

  return (
    <Section id="equipe">
      <SectionHeading
        eyebrow={t.founders.eyebrow}
        title={t.founders.title}
        lead={t.founders.lead}
      />

      {/* Column count follows the data, so adding a 4th founder needs no layout change. */}
      <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.founders.members.map((member) => {
          return (
            <StaggerItem key={member.name}>
              <Card className="h-full overflow-hidden border-[var(--color-hairline)] shadow-none">
                {/* Real portraits only — stock faces where founders belong destroys
                    the trust this section exists to build. Shoot all of them in one
                    sitting: same lens, same light, same background. Then set
                    `photo: '/images/founders/<name>.avif'` in the dictionary. */}
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="aspect-[4/5] w-full border-b border-[var(--color-hairline)] object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="flex aspect-[4/5] items-end border-b border-[var(--color-hairline)] bg-[var(--color-paper-2)] p-5">
                    <span
                      aria-hidden
                      className="font-display text-5xl leading-none font-semibold text-[var(--color-indigo-brand)]/25"
                    >
                      {member.name
                        .split(' ')
                        .map((part) => part[0])
                        .slice(0, 2)
                        .join('')}
                    </span>
                  </div>
                )}

                <CardContent className="pt-5">
                  <h3 className="font-display text-lg text-[var(--color-ink)]">{member.name}</h3>
                  <p className="mt-0.5 text-sm font-medium text-[var(--color-indigo-brand)]">
                    {member.role}
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-slate-muted)]">{member.focus}</p>

                  {member.linkedIn ? (
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-indigo-brand)] hover:underline"
                    >
                      LinkedIn
                      <ArrowUpRight aria-hidden strokeWidth={2} className="size-4" />
                    </a>
                  ) : null}
                </CardContent>
              </Card>
            </StaggerItem>
          )
        })}
      </Stagger>
    </Section>
  )
}
