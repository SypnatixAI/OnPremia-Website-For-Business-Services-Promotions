import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Stagger, StaggerItem } from '@/components/motion/Reveal'

/**
 * `feature` is the dark navy surface. It stays dark in BOTH themes — it's a
 * deliberate step down, not "the dark version of paper" — so the white text
 * on it is correct either way.
 */
export function Section({
  id,
  children,
  className,
  tone = 'paper',
}: {
  id?: string
  children: ReactNode
  className?: string
  tone?: 'paper' | 'tinted' | 'feature'
}) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-24 py-24 md:py-32',
        tone === 'tinted' && 'bg-[var(--color-paper-2)]',
        tone === 'feature' && 'bg-[var(--color-feature)] text-white',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">{children}</div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  invert = false,
}: {
  eyebrow: string
  title: string
  lead?: string
  align?: 'left' | 'center'
  invert?: boolean
}) {
  return (
    /* Eyebrow, title and lead arrive one after the other rather than as one
       block — the cheapest way to stop every section reading as a slab. */
    <Stagger className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      <StaggerItem>
        <p
          className={cn(
            'text-xs font-semibold tracking-[0.14em] uppercase',
            invert ? 'text-indigo-300' : 'text-[var(--color-indigo-brand)]',
          )}
        >
          {eyebrow}
        </p>
      </StaggerItem>

      <StaggerItem>
        <h2
          className={cn(
            'mt-4 text-3xl md:text-4xl lg:text-[2.75rem]',
            invert ? 'text-white' : 'text-[var(--color-ink)]',
          )}
        >
          {title}
        </h2>
      </StaggerItem>

      {lead ? (
        <StaggerItem>
          <p
            className={cn(
              'mt-5 text-lg leading-relaxed',
              invert ? 'text-slate-300' : 'text-[var(--color-slate-muted)]',
            )}
          >
            {lead}
          </p>
        </StaggerItem>
      ) : null}
    </Stagger>
  )
}
