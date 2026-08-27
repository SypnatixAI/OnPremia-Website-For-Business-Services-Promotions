import { Check, Minus, X } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Section, SectionHeading } from '@/components/common/Section'
import { Reveal } from '@/components/motion/Reveal'
import { useT } from '@/i18n/LocaleProvider'

export function Comparison() {
  const t = useT()
  const c = t.comparison

  return (
    <Section id="comparatif" tone="tinted">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

      <Reveal className="mt-12">
        {/* Wide table scrolls inside its own container so the page body never
            scrolls sideways on mobile. */}
        <div className="overflow-x-auto rounded-lg border border-[var(--color-hairline)] bg-white">
          <Table className="min-w-[720px]">
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[26%]" />
                <TableHead className="w-[26%] bg-[var(--color-indigo-soft)] align-top">
                  <span className="block font-display text-base font-semibold text-[var(--color-indigo-deep)]">
                    {c.colOnpremia}
                  </span>
                  <span className="mt-0.5 block text-xs font-normal normal-case text-[var(--color-slate-muted)]">
                    {c.colOnpremiaNote}
                  </span>
                </TableHead>
                <TableHead className="w-[24%] align-top">
                  <span className="block font-display text-base font-semibold text-[var(--color-ink)]">
                    {c.colSaas}
                  </span>
                  <span className="mt-0.5 block text-xs font-normal normal-case text-[var(--color-slate-muted)]">
                    {c.colSaasNote}
                  </span>
                </TableHead>
                <TableHead className="w-[24%] align-top">
                  <span className="block font-display text-base font-semibold text-[var(--color-ink)]">
                    {c.colDiy}
                  </span>
                  <span className="mt-0.5 block text-xs font-normal normal-case text-[var(--color-slate-muted)]">
                    {c.colDiyNote}
                  </span>
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {c.rows.map((row) => (
                <TableRow key={row.criterion} className="align-top">
                  <TableCell className="font-medium text-[var(--color-ink)]">
                    {row.criterion}
                  </TableCell>
                  <TableCell className="bg-[var(--color-indigo-soft)]/50">
                    <span className="flex gap-2">
                      <Check
                        aria-hidden
                        strokeWidth={2}
                        className="mt-1 size-4 shrink-0 text-[var(--color-indigo-brand)]"
                      />
                      <span className="font-medium text-[var(--color-ink)]">{row.onpremia}</span>
                    </span>
                  </TableCell>
                  <TableCell className="text-[var(--color-slate-muted)]">
                    <span className="flex gap-2">
                      <X aria-hidden strokeWidth={2} className="mt-1 size-4 shrink-0 opacity-50" />
                      <span>{row.saas}</span>
                    </span>
                  </TableCell>
                  <TableCell className="text-[var(--color-slate-muted)]">
                    <span className="flex gap-2">
                      <Minus
                        aria-hidden
                        strokeWidth={2}
                        className="mt-1 size-4 shrink-0 opacity-50"
                      />
                      <span>{row.diy}</span>
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Reveal>
    </Section>
  )
}
