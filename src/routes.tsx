import type { RouteRecord } from 'vite-react-ssg'
import { Navigate } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'

/**
 * Two prerendered, independently indexable locale routes.
 * `/` redirects to the default locale; crawlers reach /fr/ and /en/ directly
 * via the reciprocal hreflang pair emitted in SeoHead.
 */
export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Navigate to="/fr/" replace />,
    entry: 'src/routes.tsx',
  },
  {
    path: '/fr',
    element: <HomePage locale="fr" />,
    entry: 'src/routes.tsx',
  },
  {
    path: '/en',
    element: <HomePage locale="en" />,
    entry: 'src/routes.tsx',
  },
]
