import { createContext, use, type ReactNode } from 'react'
import { fr } from './fr'
import { en } from './en'
import { DEFAULT_LOCALE, type Dictionary, type Locale } from './types'

const DICTIONARIES: Record<Locale, Dictionary> = { fr, en }

type LocaleContextValue = {
  locale: Locale
  t: Dictionary
  /** Same path in the other language, for the toggle and hreflang. */
  otherLocale: Locale
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale
  children: ReactNode
}) {
  const value: LocaleContextValue = {
    locale,
    t: DICTIONARIES[locale],
    otherLocale: locale === 'fr' ? 'en' : 'fr',
  }
  return <LocaleContext value={value}>{children}</LocaleContext>
}

export function useLocale(): LocaleContextValue {
  const ctx = use(LocaleContext)
  if (!ctx) {
    // Should be unreachable: every route renders inside LocaleProvider.
    return { locale: DEFAULT_LOCALE, t: DICTIONARIES[DEFAULT_LOCALE], otherLocale: 'en' }
  }
  return ctx
}

/** Shorthand for the common case: `const t = useT()`. */
export function useT(): Dictionary {
  return useLocale().t
}

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale]
}
