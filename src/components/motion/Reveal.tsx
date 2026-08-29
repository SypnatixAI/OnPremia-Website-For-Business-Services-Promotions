import { m, type TargetAndTransition, type Variants } from 'motion/react'
import type { ElementType, ReactNode } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

/** Only transform + opacity are animated — never width/height/top/left. */
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE },
  },
}

export const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

/**
 * Discreet card lift on hover. Transform-only, and the transition lives inside
 * the target so it can't override the entrance transition on the variants.
 *
 * `MotionConfig reducedMotion="user"` drops the transform for anyone who asked
 * for reduced motion — no separate media query needed here.
 */
export const hoverLift: TargetAndTransition = {
  scale: 1.02,
  y: -2,
  transition: { duration: 0.18, ease: EASE },
}

/**
 * `amount: 'some'` rather than the specified 0.5, deliberately.
 *
 * `amount` is the fraction of THE ELEMENT that must be visible, so any block
 * taller than 2x the viewport can never reach 0.5 — the observer never fires
 * and the content stays at opacity:0 permanently. That happened to the
 * comparison table on desktop, and would hit every card grid on mobile.
 *
 * 'some' fires as soon as the element enters. Pass `amount` explicitly for
 * short elements where a later trigger reads better.
 */
type ViewportAmount = 'some' | 'all' | number

type RevealProps = {
  children: ReactNode
  className?: string
  as?: ElementType
  delay?: number
  amount?: ViewportAmount
}

export function Reveal({ children, className, as, delay = 0, amount = 'some' }: RevealProps) {
  const Component = m[(as ?? 'div') as 'div']
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={revealVariants}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </Component>
  )
}

export function Stagger({
  children,
  className,
  amount = 'some',
}: {
  children: ReactNode
  className?: string
  amount?: ViewportAmount
}) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={staggerVariants}
    >
      {children}
    </m.div>
  )
}

/** `hover` adds the card lift. Leave it off for anything that isn't a card. */
export function StaggerItem({
  children,
  className,
  hover = false,
}: {
  children: ReactNode
  className?: string
  hover?: boolean
}) {
  return (
    <m.div className={className} variants={revealVariants} whileHover={hover ? hoverLift : undefined}>
      {children}
    </m.div>
  )
}
