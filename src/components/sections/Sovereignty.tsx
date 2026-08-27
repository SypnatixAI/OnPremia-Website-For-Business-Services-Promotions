import { Check, Server, ShieldCheck } from 'lucide-react'
import { Section } from '@/components/common/Section'
import { Figure } from '@/components/common/Figure'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { useT } from '@/i18n/LocaleProvider'

const MODE_ICONS = [Server, ShieldCheck] as const

export function Sovereignty() {
  const t = useT()

  return (
    <Section id="souverainete" tone="ink">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.14em] text-indigo-300 uppercase">
              {t.sovereignty.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl text-white md:text-4xl lg:text-[2.75rem]">
              {t.sovereignty.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-indigo-200">{t.sovereignty.lead}</p>
            <p className="mt-5 max-w-[58ch] leading-relaxed text-slate-300">
              {t.sovereignty.body}
            </p>
          </Reveal>

          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
            {t.sovereignty.modes.map((mode, i) => {
              const Icon = MODE_ICONS[i] ?? Server
              return (
                <StaggerItem key={mode.label}>
                  <div className="h-full rounded-lg border border-white/12 bg-white/[0.04] p-5">
                    <Icon aria-hidden strokeWidth={2} className="size-5 text-indigo-300" />
                    <h3 className="mt-3 font-display text-lg text-white">{mode.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{mode.body}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </Stagger>

          <Reveal>
            <ul className="mt-8 space-y-2.5">
              {t.sovereignty.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-slate-200">
                  <Check
                    aria-hidden
                    strokeWidth={2}
                    className="mt-1 size-4 shrink-0 text-indigo-300"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal>
          <Figure
            subject={t.sovereignty.imageQuery}
            alt={t.sovereignty.imageAlt}
            ratio="aspect-[4/3]"
            invert
          />
        </Reveal>
      </div>
    </Section>
  )
}
