import { Button } from '@/components/ui/button'
import { Section, SectionHeading } from '@/components/common/Section'
import { Reveal } from '@/components/motion/Reveal'
import { useT } from '@/i18n/LocaleProvider'
import { bookingHref } from '@/lib/site'

export function Demo() {
  const t = useT()

  return (
    <Section id="demo" tone="tinted">
      <SectionHeading eyebrow={t.demo.eyebrow} title={t.demo.title} lead={t.demo.lead} />

      <Reveal className="mt-12">
        <video
          aria-label={t.demo.title}
          className="aspect-video w-full rounded-lg border border-[var(--color-hairline)] bg-black object-contain"
          controls
          playsInline
          preload="metadata"
          src={`${import.meta.env.BASE_URL}video/demo.mp4`}
        />
      </Reveal>

      <Reveal>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <a href={bookingHref()}>{t.demo.cta}</a>
          </Button>
        </div>
      </Reveal>
    </Section>
  )
}
