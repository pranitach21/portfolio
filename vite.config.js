import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/pranita-portfolio/' // <-- change this if your repo name is different
})
