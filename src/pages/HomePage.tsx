import { LocaleProvider } from '@/i18n/LocaleProvider'
import type { Locale } from '@/i18n/types'
import { SeoHead } from '@/lib/seo'
import { MotionProvider } from '@/components/motion/MotionProvider'
import { ScrollToHash } from '@/components/common/ScrollToHash'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Outcomes } from '@/components/sections/Outcomes'
import { Sovereignty } from '@/components/sections/Sovereignty'
import { Services } from '@/components/sections/Services'
import { Demo } from '@/components/sections/Demo'
import { Comparison } from '@/components/sections/Comparison'
import { Calculator } from '@/components/sections/Calculator'
import { Process } from '@/components/sections/Process'
import { Industries } from '@/components/sections/Industries'
import { Proof } from '@/components/sections/Proof'
import { Faq } from '@/components/sections/Faq'
import { ContactCta } from '@/components/sections/ContactCta'

/**
 * Reading order is the sales argument: the blocker, the gain, why we can
 * deliver it without moving their data, then the ask.
 *
 * Tones alternate paper / tinted, with the dark `feature` surface reserved for
 * the two moments that carry the pitch — the sovereignty promise and the close.
 *
 * There is no team section: it was removed on purpose and nothing replaces it
 * for now. Do not reintroduce founder cards without real names and portraits.
 */
export function HomePage({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <SeoHead locale={locale} />
      <MotionProvider>
        <ScrollToHash />
        <SiteHeader />
        <main id="main">
          <Hero />
          <Problem />
          <Outcomes />
          <Sovereignty />
          <Services />
          <Demo />
          <Comparison />
          <Calculator />
          <Process />
          <Industries />
          <Proof />
          <Faq />
          <ContactCta />
        </main>
        <SiteFooter />
      </MotionProvider>
    </LocaleProvider>
  )
}
