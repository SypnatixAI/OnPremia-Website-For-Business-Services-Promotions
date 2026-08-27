import { useLocation } from 'react-router-dom'
import { useLocale } from '@/i18n/LocaleProvider'
import { LOCALES } from '@/i18n/types'
import { cn } from '@/lib/utils'

/**
 * Real anchors, not JS route swaps — crawlable, and they preserve the
 * current #hash so switching language mid-page keeps your place.
 */
export function LocaleToggle({ className }: { className?: string }) {
  const { locale, t } = useLocale()
  const { hash } = useLocation()

  return (
    <div
      className={cn(
        'flex items-center rounded-md border border-[var(--color-hairline)] p-0.5',
        className,
      )}
      role="group"
      aria-label={t.localeToggle.label}
    >
      {LOCALES.map((l) => {
        const active = l === locale
        return (
          <a
            key={l}
            href={`/${l}/${hash}`}
            hrefLang={l === 'fr' ? 'fr-CA' : 'en-CA'}
            aria-current={active ? 'true' : undefined}
            className={cn(
              'rounded px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors',
              active
                ? 'bg-[var(--color-ink)] text-white'
                : 'text-[var(--color-slate-muted)] hover:text-[var(--color-ink)]',
            )}
          >
            {l.toUpperCase()}
          </a>
        )
      })}
    </div>
  )
}
