import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/adris-portfolio/',
  plugins: [react()],
  build: {
    outDir: 'build',
    sourcemap: true,
    minify: 'esbuild',
  }
})
