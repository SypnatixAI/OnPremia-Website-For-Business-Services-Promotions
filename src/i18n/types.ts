import type { fr } from './fr'

export const LOCALES = ['fr', 'en'] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'fr'

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value)
}

/** Fixed-length helpers so EN can't quietly ship fewer items than FR. */
export type Tuple2<T> = readonly [T, T]
export type Tuple3<T> = readonly [T, T, T]
export type Tuple4<T> = readonly [T, T, T, T]
export type Tuple5<T> = readonly [T, T, T, T, T]

export type DeploymentMode = {
  label: string
  body: string
}

export type NavLink = {
  href: string
  label: string
}

/** Result-first card: what the client walks away with, never a feature. */
export type OutcomeCard = {
  title: string
  body: string
}

/**
 * Real, cited figure. Never populate this with an unsourced number.
 * `value` is numeric so the counter can animate to it; `suffix` carries the
 * unit with its French spacing. `claim` continues the sentence the figure
 * starts, so the two read as one line.
 */
export type Stat = {
  value: number
  suffix: string
  claim: string
  source: string
  sourceUrl: string
}

/**
 * A cited claim with no headline figure. Same rule as `Stat`: it never ships
 * without a source, and the link points at the report itself.
 */
export type SourcedClaim = {
  claim: string
  source: string
  sourceUrl: string
}

/**
 * Title is the result the client gets, `gain` is what it buys. `examples` is
 * the evidence: each line must describe a COMPLETE business process, first
 * request to closed file — never a single isolated gesture, never a technique.
 * Length is fixed per card by a tuple in fr.ts, so EN cannot ship fewer.
 */
export type ServiceCard = {
  eyebrow: string
  title: string
  gain: string
  examples: readonly string[]
}

export type ComparisonRow = {
  criterion: string
  onpremia: string
  saas: string
  diy: string
}

export type ProcessPhase = {
  step: string
  title: string
  body: string
}

/**
 * One automation, said the way a client would say it, plus what it buys them.
 * `label` names what stops being done by hand — never the technique behind it.
 * `gain` is the payoff. If `gain` restates `label`, one of the two is wrong.
 */
export type IndustryBenefit = {
  label: string
  gain: string
}

export type IndustryTab = {
  id: string
  label: string
  /**
   * Illustrative first-person pain line. NOT a testimonial: it is attributed
   * to nobody and must never be presented as a quote from a named client.
   */
  quote: string
  benefits: Tuple4<IndustryBenefit>
  outcome: string
  /** Path under /public. All four are cropped square, so they stay consistent. */
  image: string
  /** Describes what is actually in the photo, per locale. */
  imageAlt: string
}

export type FaqItem = {
  q: string
  a: string
}

/**
 * FR is authoritative. EN is declared as `Dictionary`, so a missing or
 * renamed key is a compile error rather than a silent runtime fallback.
 */
export type Dictionary = typeof fr
