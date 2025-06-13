import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/100days_challenge/01_2025-05-01/001_murder-mystery-manager_2025-05-01/',
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  },
})
