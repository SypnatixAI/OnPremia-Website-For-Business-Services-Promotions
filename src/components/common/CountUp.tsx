import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'motion/react'

/**
 * Counts up to `value` the first time it scrolls into view.
 *
 * The final value is what gets prerendered, so the number is correct with no
 * JS at all and correct for crawlers — the animation only ever replaces it
 * once, on the client, at the moment the element enters the viewport.
 *
 * After that first run the component renders `value` directly, so a number
 * driven by a slider stays instant instead of re-animating on every drag.
 * `useReducedMotion` skips the animation entirely.
 */
export function CountUp({
  value,
  format,
  className,
}: {
  value: number
  format: (n: number) => string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 'some' })
  const reducedMotion = useReducedMotion()
  const introDone = useRef(false)
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    if (!inView) return

    if (introDone.current || reducedMotion) {
      introDone.current = true
      setDisplay(value)
      return
    }

    const target = value
    const duration = 900
    let start: number | null = null
    let frame = 0

    const tick = (now: number) => {
      start ??= now
      const progress = Math.min((now - start) / duration, 1)
      // easeOutExpo — fast out of the gate, settles rather than stops.
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setDisplay(target * eased)
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        introDone.current = true
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reducedMotion, value])

  return (
    <span ref={ref} className={className}>
      {format(display)}
    </span>
  )
}
