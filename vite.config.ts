/// <reference types="vite-react-ssg" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig({
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
