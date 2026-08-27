import { Head } from 'vite-react-ssg'
import { getDictionary } from '@/i18n/LocaleProvider'
import { LOCALES, type Locale } from '@/i18n/types'
import { SITE_URL } from './site'

const HREFLANG: Record<Locale, string> = { fr: 'fr-CA', en: 'en-CA' }

/**
 * Per-locale head. Emits <html lang>, canonical, reciprocal hreflang
 * (plus x-default -> /fr) and Open Graph. Rendered into the static HTML
 * at build time, so crawlers see it without executing JS.
 */
export function SeoHead({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  const canonical = `${SITE_URL}/${locale}/`

  return (
    <Head>
      {/* First, so the encoding declaration lands inside the first 1024 bytes:
          helmet injects this block ahead of index.html's own <head> content. */}
      <meta charSet="UTF-8" />
      <html lang={HREFLANG[locale]} />
      <title>{t.meta.title}</title>
      <meta name="description" content={t.meta.description} />
      <link rel="canonical" href={canonical} />

      {LOCALES.map((l) => (
        <link key={l} rel="alternate" hrefLang={HREFLANG[l]} href={`${SITE_URL}/${l}/`} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/fr/`} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={t.meta.title} />
      <meta property="og:description" content={t.meta.description} />
      <meta property="og:locale" content={locale === 'fr' ? 'fr_CA' : 'en_CA'} />
      <meta name="twitter:card" content="summary_large_image" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'OnPremia',
          url: SITE_URL,
          description: t.meta.description,
          areaServed: ['Quebec', 'Ontario'],
        })}
      </script>
    </Head>
  )
}
