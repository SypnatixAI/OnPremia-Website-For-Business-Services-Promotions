import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import './index.css'

/*
  The router has to know it is mounted under a sub-path, otherwise hydrating
  /<repo>/fr/ against a route table that says /fr matches nothing and the page
  comes up blank. React Router wants the basename without a trailing slash.
*/
const base = import.meta.env.BASE_URL
const basename = base === '/' ? '/' : base.replace(/\/$/, '')

export const createRoot = ViteReactSSG({ routes, basename })
