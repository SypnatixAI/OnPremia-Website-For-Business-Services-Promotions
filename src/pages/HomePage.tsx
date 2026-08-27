import { LocaleProvider } from '@/i18n/LocaleProvider'
import type { Locale } from '@/i18n/types'
import { SeoHead } from '@/lib/seo'
import { MotionProvider } from '@/components/motion/MotionProvider'
import { ScrollToHash } from '@/components/common/ScrollToHash'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Sovereignty } from '@/components/sections/Sovereignty'
import { Services } from '@/components/sections/Services'
import { Comparison } from '@/components/sections/Comparison'
import { Process } from '@/components/sections/Process'
import { Industries } from '@/components/sections/Industries'
import { Founders } from '@/components/sections/Founders'
import { Proof } from '@/components/sections/Proof'
import { Faq } from '@/components/sections/Faq'
import { ContactCta } from '@/components/sections/ContactCta'

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
          <Sovereignty />
          <Services />
          <Comparison />
          <Process />
          <Industries />
          <Founders />
          <Proof />
          <Faq />
          <ContactCta />
        </main>
        <SiteFooter />
      </MotionProvider>
    </LocaleProvider>
  )
}
