import { FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section, SectionHeading } from '@/components/common/Section'
import { Reveal } from '@/components/motion/Reveal'
import { useT } from '@/i18n/LocaleProvider'

/**
 * Deliberately empty of content.
 *
 * The brief forbids inventing case studies, client names or results, and no
 * real ones have been supplied. Showing an honest empty state is better than
 * shipping fabricated proof — especially for a firm selling trust.
 */
export function Proof() {
  const t = useT()

  return (
    <Section id="realisations" tone="tinted">
      <SectionHeading eyebrow={t.proof.eyebrow} title={t.proof.title} lead={t.proof.lead} />

      <Reveal className="mt-10">
        <div className="rounded-lg border border-[var(--color-hairline)] bg-white p-8 md:p-10">
          <FileText
            aria-hidden
            strokeWidth={2}
            className="size-6 text-[var(--color-indigo-brand)]"
          />
          {/* PLACEHOLDER: case studies — Luc to provide, per study:
              client name (with written permission), the problem, what was built,
              one measured result, and whether the client agrees to be named. */}
          <p className="mt-4 max-w-[60ch] text-[var(--color-slate-muted)]">
            {t.proof.placeholderNote}
          </p>
          <Button asChild variant="outline" className="mt-6">
            <a href="#contact">{t.proof.askCta}</a>
          </Button>
        </div>
      </Reveal>
    </Section>
  )
}
