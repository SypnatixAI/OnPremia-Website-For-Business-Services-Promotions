import { useEffect, useState } from 'react'
import { m, useScroll } from 'motion/react'
import { Menu, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { LocaleToggle } from './LocaleToggle'
import { ThemeToggle } from './ThemeToggle'
import { useLocale } from '@/i18n/LocaleProvider'
import { bookingHref, withBase } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const { locale, t } = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const href = bookingHref()

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-[var(--color-feature)] focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        {t.nav.skipToContent}
      </a>

      <header
        className={cn(
          'sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300',
          scrolled
            ? 'border-[var(--color-hairline)] bg-[var(--color-paper)]/90 shadow-[0_1px_20px_-12px_rgba(11,16,32,0.35)] backdrop-blur-md'
            : 'border-transparent bg-[var(--color-paper)]/70 backdrop-blur-sm',
        )}
      >
        <div className="mx-auto flex h-[68px] w-full max-w-6xl items-center justify-between gap-4 px-6 md:px-8">
          <a
            href={withBase(`${locale}/`)}
            className="flex items-center gap-2 font-display text-[1.35rem] font-semibold tracking-tight text-[var(--color-ink)]"
          >
            <ShieldCheck
              aria-hidden
              strokeWidth={2}
              className="size-5 text-[var(--color-indigo-brand)]"
            />
            OnPremia
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                /* `.nav-underline` wipes a 1.5px rule in from the left on
                   hover/focus — transform-only, and flat for reduced motion. */
                className="nav-underline text-sm font-medium text-[var(--color-slate-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <LocaleToggle />
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href={href}>{t.nav.cta}</a>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label={t.nav.menuLabel}
                >
                  <Menu strokeWidth={2} className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-6">
                <SheetTitle className="font-display text-lg">{t.nav.menuLabel}</SheetTitle>
                <nav className="mt-8 flex flex-col gap-1">
                  {t.nav.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-md px-3 py-2.5 text-base font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-paper-2)]"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <Button asChild className="mt-6 w-full">
                  <a href={href} onClick={() => setOpen(false)}>
                    {t.nav.cta}
                  </a>
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/*
          Reading progress. Driven straight off the scroll position rather than
          animated, so it costs one composited transform and nothing else — and
          it is a response to the visitor's own action, not decoration.
        */}
        <m.div
          aria-hidden
          style={{ scaleX: scrollYProgress }}
          className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-[var(--color-indigo-brand)]"
        />
      </header>
    </>
  )
}
