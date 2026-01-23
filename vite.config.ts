import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  // Esto es necesario para que 'process.env.API_KEY' funcione en el navegador
  // Tomará la variable de entorno de Netlify y la "quemará" en el código durante el build
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
})