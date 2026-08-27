import { useEffect } from 'react'

/**
 * Restores anchor scrolling on first load.
 *
 * The browser's native hash scroll runs before hydration, and the router then
 * resets scroll to the top — so a shared link like /fr/#faq, or the locale
 * toggle (which carries the hash across languages), would land at the top.
 *
 * The reset happens after the first effect flush, so a single rAF isn't
 * enough: we re-apply on a short schedule and stop as soon as the target is
 * actually in place. In-page anchor clicks are plain <a href="#id"> and are
 * handled natively; this only covers the initial-load case.
 */
export function ScrollToHash() {
  useEffect(() => {
    const { hash } = window.location
    if (!hash || hash.length < 2) return

    let target: Element | null = null
    try {
      target = document.querySelector(hash)
    } catch {
      return // malformed selector in the hash
    }
    if (!target) return

    const el = target
    const timers: number[] = []

    const apply = () => {
      // 'instant' overrides the global `scroll-behavior: smooth`; a deep link
      // should land rather than animate across the whole document.
      el.scrollIntoView({ behavior: 'instant', block: 'start' })
    }

    // Re-apply across the window in which the router resets scroll.
    for (const delay of [0, 60, 160, 320]) {
      timers.push(window.setTimeout(apply, delay))
    }

    return () => timers.forEach(clearTimeout)
  }, [])

  return null
}
