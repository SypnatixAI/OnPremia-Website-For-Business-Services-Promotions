import { Moon, Sun } from 'lucide-react'
import { useT } from '@/i18n/LocaleProvider'
import { cn } from '@/lib/utils'

/** Must match the key read by the inline script in index.html. */
const STORAGE_KEY = 'onpremia-theme'

/**
 * Light / dark toggle.
 *
 * The icon is chosen by CSS (`dark:` variants), not by React state — the
 * pages are prerendered, so any state-driven icon would mismatch on hydration
 * for a visitor whose stored theme differs from the prerendered one.
 * The class on <html> is the single source of truth; index.html applies it
 * before first paint so there is no flash.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const t = useT()

  function toggle() {
    const isDark = document.documentElement.classList.toggle('dark')
    try {
      localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light')
    } catch {
      // Blocked storage: the choice just won't survive a reload.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.themeToggle.label}
      title={t.themeToggle.label}
      className={cn(
        'flex size-8 items-center justify-center rounded-md border border-[var(--color-hairline)] text-[var(--color-slate-muted)] transition-colors hover:text-[var(--color-ink)]',
        className,
      )}
    >
      <Moon aria-hidden strokeWidth={2} className="size-4 dark:hidden" />
      <Sun aria-hidden strokeWidth={2} className="hidden size-4 dark:block" />
    </button>
  )
}
