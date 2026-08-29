import { Check, Server, ShieldCheck } from 'lucide-react'
import { Section } from '@/components/common/Section'
import { Figure } from '@/components/common/Figure'
import { m } from 'motion/react'
import {
  Reveal,
  Stagger,
  StaggerItem,
  revealVariants,
  staggerVariants,
} from '@/components/motion/Reveal'
import { useT } from '@/i18n/LocaleProvider'

const MODE_ICONS = [Server, ShieldCheck] as const

/**
 * The brand signature lives here: "Votre IA. Vos données. Votre périmètre."
 *
 * Never upgrade this to "your data never leaves your infrastructure" — one of
 * the two deployment modes is the client's own Azure tenant, which is cloud.
 * The FAQ answers that question head-on instead of dodging it.
 */
export function Sovereignty() {
  const t = useT()

  return (
    <Section id="souverainete" tone="feature">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.14em] text-indigo-300 uppercase">
              {t.sovereignty.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl text-white md:text-4xl lg:text-[2.75rem]">
              {t.sovereignty.title}
            </h2>
            <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-indigo-200">
              {t.sovereignty.lead}
            </p>
          </Reveal>

          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
            {t.sovereignty.modes.map((mode, i) => {
              const Icon = MODE_ICONS[i] ?? Server
              return (
                <StaggerItem key={mode.label} hover>
                  <div className="group h-full rounded-lg border border-white/12 bg-white/[0.04] p-5">
                    <Icon
                      aria-hidden
                      strokeWidth={2}
                      className="size-5 text-indigo-300 transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                    <h3 className="mt-3 font-display text-lg text-white">{mode.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{mode.body}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </Stagger>

          {/* The three proofs land one at a time, not as one wall of ticks. */}
          <m.ul
            className="mt-8 space-y-2.5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 'some' }}
            variants={staggerVariants}
          >
            {t.sovereignty.points.map((point) => (
              <m.li
                key={point}
                variants={revealVariants}
                className="flex items-start gap-3 text-slate-200"
              >
                <Check aria-hidden strokeWidth={2} className="mt-1 size-4 shrink-0 text-indigo-300" />
                <span>{point}</span>
              </m.li>
            ))}
          </m.ul>
        </div>

        <Reveal>
          {/* Source is 4:3, so the box matches it exactly — no crop. */}
          <Figure
            src={t.sovereignty.image}
            alt={t.sovereignty.imageAlt}
            ratio="aspect-[4/3]"
            invert
          />
        </Reveal>
      </div>
    </Section>
  )
}
