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

export type DeploymentMode = {
  label: string
  body: string
}

export type NavLink = {
  href: string
  label: string
}

export type ProblemCard = {
  title: string
  body: string
}

/** Real, cited figure. Never populate this with an unsourced number. */
export type Stat = {
  figure: string
  claim: string
  context: string
  source: string
  sourceUrl: string
}

export type ServiceCard = {
  eyebrow: string
  title: string
  body: string
  output: string
  bestFor: string
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
  deliverable: string
}

export type IndustryTab = {
  id: string
  label: string
  quote: string
  bullets: Tuple3<string>
  outcome: string
}

export type Founder = {
  name: string
  role: string
  focus: string
  linkedIn: string | null
  /** Real portrait only. Null renders initials — never stock photography. */
  photo: string | null
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
