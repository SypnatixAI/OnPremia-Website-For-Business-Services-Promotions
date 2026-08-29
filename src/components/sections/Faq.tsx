import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Section, SectionHeading } from '@/components/common/Section'
import { m } from 'motion/react'
import { revealVariants, staggerVariants } from '@/components/motion/Reveal'
import { useT } from '@/i18n/LocaleProvider'

export function Faq() {
  const t = useT()

  return (
    <Section id="faq" tone="tinted">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} />

        {/* Each question arrives on its own. The separator moves to the motion
            wrapper so `last:` still targets the last question. */}
        <m.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 'some' }}
          variants={staggerVariants}
        >
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((item, i) => (
              <m.div
                key={item.q}
                variants={revealVariants}
                className="border-b border-[var(--color-hairline)] last:border-b-0"
              >
                <AccordionItem value={`item-${i}`} className="border-b-0">
                  <AccordionTrigger className="text-left font-display text-lg hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] leading-relaxed text-[var(--color-slate-muted)]">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              </m.div>
            ))}
          </Accordion>
        </m.div>
      </div>
    </Section>
  )
}
