/**
 * Single place for every external URL and constant.
 */

export const SITE_URL = 'https://onpremia.ca'
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
