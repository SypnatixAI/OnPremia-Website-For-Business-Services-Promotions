import { ArrowRight } from 'lucide-react'

/**
 * The arrow on a call to action. It nudges right when the button is hovered,
 * so the parent must carry the `group` class.
 *
 * Kept as a component so the reduced-motion guard lives in exactly one place.
 */
export function CtaArrow() {
  return (
    <ArrowRight
      aria-hidden
      strokeWidth={2}
      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
    />
  )
}
