import { cn } from '@/lib/utils'

/**
 * Photograph slot.
 *
 * Pass `src` and it renders a real <img> with explicit dimensions (so it
 * reserves space and can't cause layout shift), lazy below the fold and
 * eager+high-priority for the hero.
 *
 * With no `src` it renders a designed panel rather than a dashed placeholder
 * box — the page reads as finished during review — while still showing the
 * intended subject so the slot is obviously a slot.
 */
export function Figure({
  src,
  alt,
  subject,
  className,
  ratio = 'aspect-[4/5]',
  priority = false,
  invert = false,
}: {
  /** Drop a file in /public/images and point here to go live. */
  src?: string
  alt: string
  /** Shown when there's no image yet; also the Unsplash search to run. */
  subject: string
  className?: string
  ratio?: string
  priority?: boolean
  invert?: boolean
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={cn('w-full rounded-lg object-cover', ratio, className)}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        {...(priority ? { fetchPriority: 'high' as const } : {})}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        'relative flex flex-col justify-end overflow-hidden rounded-lg p-6',
        invert
          ? 'bg-white/[0.05] ring-1 ring-white/12'
          : 'bg-[var(--color-paper-2)] ring-1 ring-[var(--color-hairline)]',
        ratio,
        className,
      )}
    >
      {/* Quiet diagonal wash — reads as an intentional panel, not a broken image. */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, var(--color-indigo-brand) 0 1px, transparent 1px 11px)',
        }}
      />
      <p
        className={cn(
          'relative text-xs font-semibold tracking-[0.14em] uppercase',
          invert ? 'text-indigo-300' : 'text-[var(--color-indigo-brand)]',
        )}
      >
        Photo
      </p>
      <p
        className={cn(
          'relative mt-1 text-sm',
          invert ? 'text-slate-300' : 'text-[var(--color-slate-muted)]',
        )}
      >
        {subject}
      </p>
    </div>
  )
}
