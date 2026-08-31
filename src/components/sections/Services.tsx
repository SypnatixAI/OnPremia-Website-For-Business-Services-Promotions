import { useState } from 'react'
import { ChevronDown, FileSearch, PenLine, ShieldCheck, Workflow } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Section, SectionHeading } from '@/components/common/Section'
import { Stagger, StaggerItem } from '@/components/motion/Reveal'
import { useT } from '@/i18n/LocaleProvider'
import type { ServiceCard } from '@/i18n/types'

const ICONS = [FileSearch, Workflow, PenLine, ShieldCheck] as const

/**
 * Four boxes, identical by construction: icon -> result title -> one line ->
 * exactly three points. The count is fixed in the type, not by convention —
 * a fourth point wouldn't fit the grid, so it's a compile error instead.
 *
 * What keeps them the same size:
 *
 * - `auto-rows-fr` makes every row the same height, so a card never sizes
 *   itself independently of its neighbours.
 * - Title and gain reserve their lines up front — two each on tablet, three
 *   for the title in the narrow four-column layout — so the hairline and the
 *   list start at the same y in all four cards whether the text wraps or not.
 * - The two layers of the list are stacked in ONE grid cell, so the box is as
 *   tall as the taller layer at all times. Hovering swaps the content without
 *   moving a single pixel of layout.
 *
 * Only min-heights are fixed, never heights: longer copy grows the row rather
 * than being clipped.
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

      <Stagger className="mt-16 grid gap-5 sm:auto-rows-fr sm:grid-cols-2 lg:grid-cols-4">
        {t.services.items.map((service, i) => (
          <ServiceTile
            key={service.title}
            service={service}
            icon={ICONS[i] ?? FileSearch}
            detailCta={t.services.detailCta}
          />
        ))}
      </Stagger>
    </Section>
  )
}

/**
 * The detail is revealed three ways on purpose: hover for a mouse,
 * `focus-within` for a keyboard, and the button for a finger — a hover-only
 * affordance is invisible to half the audience and unreachable on a phone.
 *
 * The swap is plain CSS on opacity and transform, not Motion. Two reasons: it
 * animates nothing but those two properties, and setting `animate` on a Motion
 * child would sever it from the entrance cascade it inherits from the card.
 */
function ServiceTile({
  service,
  icon: Icon,
  detailCta,
}: {
  service: ServiceCard
  icon: (typeof ICONS)[number]
  detailCta: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <StaggerItem className="h-full" hover>
      <Card
        data-open={open}
        className="group h-full border-[var(--color-hairline)] shadow-none transition-colors hover:border-[var(--color-indigo-brand)]/40 focus-within:border-[var(--color-indigo-brand)]/40 data-[open=true]:border-[var(--color-indigo-brand)]/40"
      >
        <CardContent className="flex flex-1 flex-col">
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

          <h3 className="mt-5 font-display text-xl text-[var(--color-ink)] sm:min-h-[2lh] lg:min-h-[3lh]">
            {service.title}
          </h3>
          <p className="mt-2 text-sm text-[var(--color-slate-muted)] sm:min-h-[2lh]">
            {service.gain}
          </p>

          {/* One grid cell, two layers: the box can't change height on hover. */}
          <div className="mt-5 grid flex-1 border-t border-[var(--color-hairline)] pt-5">
            <ul className="col-start-1 row-start-1 space-y-2.5 transition-[opacity,transform] duration-300 group-hover:-translate-y-1 group-hover:opacity-0 group-focus-within:-translate-y-1 group-focus-within:opacity-0 group-data-[open=true]:-translate-y-1 group-data-[open=true]:opacity-0 motion-reduce:transition-none motion-reduce:transform-none">
              {service.points.map((point) => (
                <li key={point.label} className="flex gap-2.5">
                  <span
                    aria-hidden
                    className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-[var(--color-indigo-brand)]/60"
                  />
                  <span className="text-sm leading-relaxed text-[var(--color-slate-muted)]">
                    {point.label}
                  </span>
                </li>
              ))}
            </ul>

            <ul
              className="col-start-1 row-start-1 space-y-2.5 translate-y-1 opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-data-[open=true]:translate-y-0 group-data-[open=true]:opacity-100 motion-reduce:transition-none motion-reduce:transform-none"
            >
              {service.points.map((point) => (
                <li key={point.label} className="flex gap-2.5">
                  <span
                    aria-hidden
                    className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-[var(--color-indigo-brand)]"
                  />
                  <span className="text-sm leading-relaxed text-[var(--color-ink)]/80">
                    {point.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Touch has no hover; this is how a phone gets to the same content. */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mt-5 flex items-center gap-1.5 self-start rounded text-xs font-semibold tracking-[0.08em] text-[var(--color-indigo-brand)] uppercase transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-indigo-brand)] motion-reduce:transition-none"
          >
            {detailCta}
            <ChevronDown
              aria-hidden
              strokeWidth={2.5}
              className="size-3.5 transition-transform duration-300 group-hover:rotate-180 group-data-[open=true]:rotate-180 motion-reduce:transition-none"
            />
          </button>
        </CardContent>
      </Card>
    </StaggerItem>
  )
}
