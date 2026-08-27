import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/motion/Reveal'

export function Section({
  id,
  children,
  className,
  tone = 'paper',
}: {
  id?: string
  children: ReactNode
  className?: string
  tone?: 'paper' | 'tinted' | 'ink'
}) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-24 py-20 md:py-28',
        tone === 'tinted' && 'bg-[var(--color-paper-2)]',
        tone === 'ink' && 'bg-[var(--color-ink)] text-white',
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
    <Reveal className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      <p
        className={cn(
          'text-xs font-semibold tracking-[0.14em] uppercase',
          invert ? 'text-indigo-300' : 'text-[var(--color-indigo-brand)]',
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-4 text-3xl md:text-4xl lg:text-[2.75rem]',
          invert ? 'text-white' : 'text-[var(--color-ink)]',
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            'mt-5 text-lg leading-relaxed',
            invert ? 'text-slate-300' : 'text-[var(--color-slate-muted)]',
          )}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  )
}
