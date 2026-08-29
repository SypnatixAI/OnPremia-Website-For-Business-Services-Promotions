import { ShieldCheck } from 'lucide-react'
import { Stagger, StaggerItem } from '@/components/motion/Reveal'
import { useLocale } from '@/i18n/LocaleProvider'
import { CONTACT_EMAIL, withBase } from '@/lib/site'

export function SiteFooter() {
  const { locale, t } = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-hairline)] bg-[var(--color-paper)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 md:px-8">
        <Stagger className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <StaggerItem>
            <a
              href={withBase(`${locale}/`)}
              className="flex items-center gap-2 font-display text-xl font-semibold text-[var(--color-ink)]"
            >
              <ShieldCheck
                aria-hidden
                strokeWidth={2}
                className="size-5 text-[var(--color-indigo-brand)]"
              />
              OnPremia
            </a>
            {/* The brand signature, verbatim. */}
            <p className="mt-3 max-w-[38ch] text-sm text-[var(--color-slate-muted)]">
              {t.signature}
            </p>
            <p className="mt-2 text-sm text-[var(--color-slate-muted)]">{t.footer.region}</p>
          </StaggerItem>

          <StaggerItem>
            <h2 className="font-display text-sm font-semibold text-[var(--color-ink)]">
              {t.footer.nav}
            </h2>
            <ul className="mt-3 space-y-2">
              {t.nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-slate-muted)] hover:text-[var(--color-ink)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem>
            <h2 className="font-display text-sm font-semibold text-[var(--color-ink)]">
              {t.footer.contactHeading}
            </h2>
            {/* PLACEHOLDER: confirm this inbox exists before launch. */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-3 inline-block text-sm text-[var(--color-indigo-brand)] hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </StaggerItem>
        </Stagger>

        <div className="mt-12 border-t border-[var(--color-hairline)] pt-6">
          <p className="text-xs text-[var(--color-slate-muted)]">
            © {year} OnPremia. {t.footer.rights}
          </p>
          <p className="mt-2 max-w-[80ch] text-xs text-[var(--color-slate-muted)]">
            {t.footer.legalNote}
          </p>
        </div>
      </div>
    </footer>
  )
}
