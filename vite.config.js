import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/SureWinBotWeb/' : '/',
  server: {
    allowedHosts: [
      'e93ce39ca037.ngrok-free.app',
    ]
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})