import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Section, SectionHeading } from '@/components/common/Section'
import { Reveal } from '@/components/motion/Reveal'
import { useT } from '@/i18n/LocaleProvider'

export function Faq() {
  const t = useT()

  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} />

        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-display text-lg hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-relaxed text-[var(--color-slate-muted)]">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  )
}
