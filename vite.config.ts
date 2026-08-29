/// <reference types="vite-react-ssg" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

/*
  Where the site is served from.

  GitHub Pages hands this in as BASE_PATH: `/<repo>/` for a project site, `/`
  once a custom domain is configured in the repo settings. Nothing in the code
  hardcodes either one, so moving to onpremia.ca is a settings change, not a
  code change. Vite needs the trailing slash; the Pages action doesn't send it.
*/
const rawBase = process.env.BASE_PATH ?? '/'
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname, './src') },
  },
  ssgOptions: {
    // /fr/index.html + /en/index.html rather than /fr.html — clean indexable URLs
    dirStyle: 'nested',
    formatting: 'none',
  },
})
