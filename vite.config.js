import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages: use your repo name as base, e.g. '/kunal-portfolio/'
// For local dev or custom domain, use '/'
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/kunal-portfolio/' : '/',
})
