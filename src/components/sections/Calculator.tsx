import { useId, useState } from 'react'
import { Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section, SectionHeading } from '@/components/common/Section'
import { CtaArrow } from '@/components/common/CtaArrow'
import { Reveal } from '@/components/motion/Reveal'
import { CountUp } from '@/components/common/CountUp'
import { useLocale } from '@/i18n/LocaleProvider'
import { bookingHref } from '@/lib/site'
import {
  DEFAULTS,
  RANGES,
  WEEKS_PER_YEAR,
  estimateWeeklyHours,
  formatHours,
  formatInteger,
  formatMoney,
} from '@/lib/savings'

function Slider({
  label,
  value,
  onChange,
  display,
  note,
  min,
  max,
  step,
}: {
  label: string
  value: number
  onChange: (next: number) => void
  display: string
  /** Clarifies what the number is. Wired to the input with aria-describedby,
   *  so a screen reader hears it as part of the field, not as loose text. */
  note?: string
  min: number
  max: number
  step: number
}) {
  const id = useId()
  const noteId = `${id}-note`

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-medium text-[var(--color-ink)]">
          {label}
        </label>
        <output htmlFor={id} className="font-display text-lg font-semibold text-[var(--color-indigo-deep)]">
          {display}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-describedby={note ? noteId : undefined}
        // Native range control, tinted with accent-color. `appearance-none`
        // would also strip the thumb in WebKit and need rebuilding by hand.
        className="mt-3 w-full cursor-pointer accent-[var(--color-indigo-brand)]"
      />
      {note ? (
        <p id={noteId} className="mt-2 text-xs leading-relaxed text-[var(--color-slate-muted)]">
          {note}
        </p>
      ) : null}
    </div>
  )
}

/**
 * Time-saved estimator. Every number on screen belongs to the VISITOR'S
 * company — their email volume, their admin hours, what an hour of their
 * staff's time costs them — and every label says so. Nothing here is an
 * OnPremia price. The hourly-cost field carries an explicit note for that
 * reason: it is the one number a reader can mistake for our rate.
 *
 * The two coefficients behind the number live in `lib/savings.ts` and are
 * spelled out under the result — an estimate a visitor can't audit is just a
 * claim. State is plain useState with fixed defaults, so the prerendered HTML
 * and the hydrated render agree.
 */
export function Calculator() {
  const { locale, t } = useLocale()
  const c = t.calculator

  const [emails, setEmails] = useState(DEFAULTS.emails)
  const [adminHours, setAdminHours] = useState(DEFAULTS.adminHours)
  const [hourlyRate, setHourlyRate] = useState(DEFAULTS.hourlyRate)

  const weeklyHours = estimateWeeklyHours(emails, adminHours)
  const yearlyHours = weeklyHours * WEEKS_PER_YEAR
  const yearlyValue = yearlyHours * hourlyRate

  return (
    <Section id="calculateur" tone="tinted">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

      <Reveal className="mt-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-lg border border-[var(--color-hairline)] bg-[var(--color-paper)] p-7 md:p-9">
            <div className="space-y-7">
              <Slider
                label={c.emailsLabel}
                value={emails}
                onChange={setEmails}
                display={formatInteger(emails, locale)}
                {...RANGES.emails}
              />
              <Slider
                label={c.adminLabel}
                value={adminHours}
                onChange={setAdminHours}
                display={`${formatInteger(adminHours, locale)} ${c.hoursUnit}`}
                {...RANGES.adminHours}
              />
              <Slider
                label={c.rateLabel}
                value={hourlyRate}
                onChange={setHourlyRate}
                display={formatMoney(hourlyRate, locale)}
                // Mandatory: without it, "35 $" reads as an OnPremia rate.
                note={c.rateNote}
                {...RANGES.hourlyRate}
              />
            </div>

            <p className="mt-8 flex gap-2.5 border-t border-[var(--color-hairline)] pt-5 text-xs leading-relaxed text-[var(--color-slate-muted)]">
              <Info aria-hidden strokeWidth={2} className="mt-0.5 size-4 shrink-0" />
              <span>{c.assumptions}</span>
            </p>
          </div>

          <div className="flex flex-col rounded-lg bg-[var(--color-feature)] p-7 text-white md:p-9">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] text-indigo-300 uppercase">
                  {c.weeklyLabel}
                </p>
                <p className="font-display mt-1 text-5xl leading-none font-semibold md:text-6xl">
                  {/* Counts up once, the first time it scrolls into view.
                      After that it tracks the sliders instantly. */}
                  <CountUp value={weeklyHours} format={(n) => formatHours(n, locale)} />
                  <span className="ml-1.5 text-2xl font-normal text-slate-400">{c.hoursUnit}</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5 border-t border-white/12 pt-6">
                <div>
                  <p className="text-xs tracking-wide text-slate-400">{c.yearlyLabel}</p>
                  <p className="font-display mt-1 text-2xl font-semibold">
                    {formatInteger(yearlyHours, locale)} {c.hoursUnit}
                  </p>
                </div>
                <div>
                  <p className="text-xs tracking-wide text-slate-400">{c.valueLabel}</p>
                  <p className="font-display mt-1 text-2xl font-semibold text-indigo-300">
                    {formatMoney(yearlyValue, locale)}
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-slate-400">{c.disclaimer}</p>

            <Button
              asChild
              size="lg"
              className="group mt-8 w-full bg-white text-[var(--color-feature)] hover:bg-slate-100"
            >
              <a href={bookingHref()}>
                {c.cta}
                <CtaArrow />
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
