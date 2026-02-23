import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carga todas las variables de entorno, incluyendo las del sistema (Netlify)
  // El tercer parámetro '' permite cargar variables que no tienen el prefijo VITE_
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    build: {
      outDir: 'dist',
    },
    // Reemplaza process.env.GEMINI_API_KEY en el código del cliente con el valor real obtenido
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    }
  }
})