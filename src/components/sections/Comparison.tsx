import { useState } from 'react'
import { Check, Minus, X } from 'lucide-react'
import { m, type Variants } from 'motion/react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Section, SectionHeading } from '@/components/common/Section'
import { useT } from '@/i18n/LocaleProvider'
import { cn } from '@/lib/utils'

const EASE = [0.16, 1, 0.3, 1] as const

const rowGroupVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
}

/** Children inherit the row's variant state, so the icons pop with their row. */
const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.32, ease: EASE } },
}

/**
 * One template shared by the highlight layer and every row — that is what
 * keeps the indigo column band perfectly aligned under the cells.
 */
const GRID = 'grid grid-cols-[1.3fr_1.15fr_1fr_1fr]'

/**
 * Comparison table.
 *
 * Built as an ARIA grid (`role="table"`/`row`/`columnheader`/`rowheader`/`cell`)
 * rather than a <table>. A real table can't be given a column that is one
 * continuous rounded, bordered, liftable block — the highlight here is a single
 * absolutely-positioned element sitting behind the cells on the same grid
 * template. Screen readers get the same row/column semantics either way.
 *
 * Below `lg` the three columns would need horizontal scrolling, so the desktop
 * grid is display:none there — which also takes it out of the accessibility
 * tree — and a segmented selector shows one column's four criteria at a time.
 */
export function Comparison() {
  const t = useT()
  const c = t.comparison
  const [columnHovered, setColumnHovered] = useState(false)

  const columns = [
    { key: 'onpremia', label: c.colOnpremia, note: c.colOnpremiaNote, Icon: Check },
    { key: 'saas', label: c.colSaas, note: c.colSaasNote, Icon: X },
    { key: 'diy', label: c.colDiy, note: c.colDiyNote, Icon: Minus },
  ] as const

  /** Spread on every cell of the OnPremia column so hovering any of them lifts
      the whole band — a column is not an element, so this can't be pure CSS. */
  const columnHover = {
    onMouseEnter: () => setColumnHovered(true),
    onMouseLeave: () => setColumnHovered(false),
  }

  const badge = (
    <span className="inline-flex w-fit items-center rounded-full bg-[var(--color-indigo-brand)] px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white uppercase">
      {c.recommendedBadge}
    </span>
  )

  return (
    <Section id="comparatif">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

      {/* ---------- desktop: ARIA grid ---------- */}
      <div className="relative mt-14 hidden lg:block">
        <m.div
          aria-hidden
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.5, ease: EASE }}
          className={cn('pointer-events-none absolute inset-0', GRID)}
        >
          <div />
          <div
            className={cn(
              'rounded-xl border-2 border-[var(--color-indigo-brand)]/45 bg-[var(--color-indigo-soft)] transition-shadow duration-300',
              columnHovered && 'shadow-[0_20px_45px_-25px_rgba(79,70,229,0.75)]',
            )}
          />
          <div />
          <div />
        </m.div>

        <div role="table" aria-label={c.title} className="relative">
          <div role="rowgroup">
            <m.div
              role="row"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.4, ease: EASE }}
              className={cn(GRID, 'items-end')}
            >
              <span role="columnheader" className="px-5 pt-6" />
              {columns.map((col) => {
                const highlighted = col.key === 'onpremia'
                return (
                  <span
                    key={col.key}
                    role="columnheader"
                    {...(highlighted ? columnHover : {})}
                    className="flex flex-col gap-2 px-5 pt-6 pb-5"
                  >
                    {highlighted ? badge : null}
                    <span
                      className={cn(
                        'font-display text-lg font-semibold',
                        highlighted
                          ? 'text-[var(--color-indigo-deep)]'
                          : 'text-[var(--color-ink)]',
                      )}
                    >
                      {col.label}
                    </span>
                    <span className="text-xs font-normal text-[var(--color-slate-muted)]">
                      {col.note}
                    </span>
                  </span>
                )
              })}
            </m.div>
          </div>

          <m.div
            role="rowgroup"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 'some' }}
            variants={rowGroupVariants}
          >
            {c.rows.map((row) => (
              <m.div
                key={row.criterion}
                role="row"
                variants={rowVariants}
                className={cn(GRID, 'group/row')}
              >
                <span
                  role="rowheader"
                  className="border-t border-[var(--color-hairline)] px-5 py-5 font-medium text-[var(--color-ink)] transition-colors group-hover/row:bg-[var(--color-paper-2)]"
                >
                  {row.criterion}
                </span>

                {columns.map((col) => {
                  const highlighted = col.key === 'onpremia'
                  const Icon = col.Icon
                  return (
                    <span
                      key={col.key}
                      role="cell"
                      {...(highlighted ? columnHover : {})}
                      className={cn(
                        'flex gap-2.5 border-t px-5 py-5 transition-colors',
                        highlighted
                          ? 'border-[var(--color-indigo-brand)]/20 font-medium text-[var(--color-ink)] group-hover/row:bg-[var(--color-indigo-brand)]/8'
                          : 'border-[var(--color-hairline)] text-[var(--color-slate-muted)] group-hover/row:bg-[var(--color-paper-2)]',
                      )}
                    >
                      <m.span variants={iconVariants} className="mt-0.5 shrink-0">
                        <Icon
                          aria-hidden
                          strokeWidth={2}
                          className={cn(
                            'size-4',
                            highlighted
                              ? 'text-[var(--color-indigo-brand)]'
                              : 'text-[var(--color-slate-muted)] opacity-55',
                          )}
                        />
                      </m.span>
                      {row[col.key]}
                    </span>
                  )
                })}
              </m.div>
            ))}
          </m.div>
        </div>
      </div>

      {/* ---------- mobile: one column at a time, no sideways scroll ---------- */}
      <div className="mt-12 lg:hidden">
        <Tabs defaultValue="onpremia">
          <TabsList
            aria-label={c.title}
            className="grid h-auto w-full grid-cols-3 gap-1 bg-[var(--color-paper)] p-1.5"
          >
            {columns.map((col) => (
              <TabsTrigger
                key={col.key}
                value={col.key}
                className="px-2 py-2 text-xs leading-tight whitespace-normal"
              >
                {col.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {columns.map((col) => {
            const highlighted = col.key === 'onpremia'
            const Icon = col.Icon
            return (
              <TabsContent key={col.key} value={col.key} className="mt-4">
                <m.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className={cn(
                    'rounded-xl border p-5',
                    highlighted
                      ? 'border-[var(--color-indigo-brand)]/45 bg-[var(--color-indigo-soft)]'
                      : 'border-[var(--color-hairline)] bg-[var(--color-paper)]',
                  )}
                >
                  {highlighted ? badge : null}
                  <p
                    className={cn(
                      'text-sm text-[var(--color-slate-muted)]',
                      highlighted && 'mt-3',
                    )}
                  >
                    {col.note}
                  </p>

                  <dl className="mt-5 space-y-4">
                    {c.rows.map((row) => (
                      <div
                        key={row.criterion}
                        className="border-t border-[var(--color-hairline)] pt-4 first:border-0 first:pt-0"
                      >
                        <dt className="text-xs font-semibold tracking-[0.1em] text-[var(--color-slate-muted)] uppercase">
                          {row.criterion}
                        </dt>
                        <dd
                          className={cn(
                            'mt-2 flex gap-2.5',
                            highlighted
                              ? 'font-medium text-[var(--color-ink)]'
                              : 'text-[var(--color-slate-muted)]',
                          )}
                        >
                          <Icon
                            aria-hidden
                            strokeWidth={2}
                            className={cn(
                              'mt-0.5 size-4 shrink-0',
                              highlighted
                                ? 'text-[var(--color-indigo-brand)]'
                                : 'text-[var(--color-slate-muted)] opacity-55',
                            )}
                          />
                          {row[col.key]}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </m.div>
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </Section>
  )
}
