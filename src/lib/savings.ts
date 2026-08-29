import type { Locale } from '@/i18n/types'

/*
  PLACEHOLDER : à fournir par Luc — les deux coefficients ci-dessous sont des
  hypothèses de travail, pas des données mesurées. Ils sont affichés en toutes
  lettres sous le calculateur (`calculator.assumptions`) pour que le visiteur
  sache exactement d'où sort le chiffre. Si la valeur change, changer aussi la
  phrase dans les deux dictionnaires.
*/

/** Minutes saved on each email once triage and drafting are automated. */
export const MINUTES_SAVED_PER_EMAIL = 2

/** Share of weekly admin hours a workflow can realistically absorb. */
export const ADMIN_AUTOMATED_SHARE = 0.3

export const WEEKS_PER_YEAR = 52

/** Slider defaults: a mid-sized SMB back office. Every one is user-editable. */
export const DEFAULTS = { emails: 200, adminHours: 12, hourlyRate: 35 }

export const RANGES = {
  emails: { min: 0, max: 1500, step: 25 },
  adminHours: { min: 0, max: 60, step: 1 },
  hourlyRate: { min: 20, max: 120, step: 5 },
}

export function estimateWeeklyHours(emails: number, adminHours: number) {
  return (emails * MINUTES_SAVED_PER_EMAIL) / 60 + adminHours * ADMIN_AUTOMATED_SHARE
}

/*
  Number formatting is done by hand rather than with Intl.

  The page is prerendered in Node and hydrated in the browser; ICU versions can
  disagree on the group separator, which shows up as a React hydration warning
  and a flash of re-rendered text. This is deterministic on both sides.
*/
function group(value: number, separator: string) {
  return Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, separator)
}

export function formatInteger(value: number, locale: Locale) {
  return group(value, locale === 'fr' ? ' ' : ',')
}

/** One decimal — weekly hours are small enough that rounding hides the gain. */
export function formatHours(value: number, locale: Locale) {
  const text = value.toFixed(1)
  return locale === 'fr' ? text.replace('.', ',') : text
}

export function formatMoney(value: number, locale: Locale) {
  const amount = group(value, locale === 'fr' ? ' ' : ',')
  return locale === 'fr' ? `${amount} $` : `$${amount}`
}
