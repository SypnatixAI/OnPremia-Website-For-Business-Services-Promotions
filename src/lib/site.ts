/**
 * Single place for every external URL and constant.
 */

/**
 * Where the built site actually lives.
 *
 * `BASE_URL` is injected by Vite from the `base` in vite.config.ts and always
 * ends with a slash: `/` on the real domain, `/<repo>/` on a GitHub Pages
 * project site. `SITE_ORIGIN` is the scheme + host, handed in at build time by
 * the Pages workflow, falling back to the production domain.
 *
 * Every root-relative path in the dictionaries stays written as `/assets/x`,
 * and goes through `withBase()` on its way to the DOM.
 */
const BASE_URL: string = import.meta.env.BASE_URL

export const SITE_ORIGIN: string = import.meta.env.VITE_SITE_ORIGIN ?? 'https://onpremia.ca'

/** `/assets/hero.jpg` -> `/<repo>/assets/hero.jpg` */
export function withBase(path: string) {
  return `${BASE_URL}${path.replace(/^\//, '')}`
}

/** Absolute URL, for canonical / hreflang / Open Graph. */
export function absoluteUrl(path: string) {
  return `${SITE_ORIGIN}${withBase(path)}`
}

export const CONTACT_EMAIL = 'bonjour@onpremia.ca'

/**
 * Booking link. Until a real one exists, every "book a call" CTA points at the
 * contact section instead, so no button is ever dead.
 *
 * Recommended: a self-hosted Cal.com link. A firm whose headline is "vos
 * données restent dans votre périmètre" should not route its own lead data
 * through a third-party US scheduler.
 */
export const BOOKING_URL = '' // e.g. 'https://cal.onpremia.ca/30min'

/**
 * Contact form POST target (a Resend route, Formspree, etc.).
 * While empty, the form falls back to opening a prefilled email — so it works
 * today rather than silently failing.
 */
export const CONTACT_ENDPOINT = '' // e.g. 'https://onpremia.ca/api/contact'

/** Company LinkedIn. Empty hides the link rather than shipping a 404. */
export const LINKEDIN_URL = ''

export const hasValue = (v: string) => v.trim().length > 0

/** Booking CTAs degrade to the on-page contact form when no link is set. */
export const bookingHref = () => (hasValue(BOOKING_URL) ? BOOKING_URL : '#contact')
