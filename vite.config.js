import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Le nom exact du dépôt = "aulia_website"
export default defineConfig({
  base: '/aulia_website/',
  plugins: [react()],
})
