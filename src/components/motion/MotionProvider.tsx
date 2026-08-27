import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import type { ReactNode } from 'react'

/**
 * `strict` forbids the full `motion.*` components, so any accidental import
 * throws at dev time instead of silently pulling the ~34kb bundle in.
 * Everything in this app uses `m.*` and the ~4.6kb domAnimation feature set.
 *
 * Nothing here needs drag or layout animation, so `domMax` is deliberately unused.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}
