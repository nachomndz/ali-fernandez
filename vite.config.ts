import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react()],
  base: '/ali-fernandez/', // Asegúrate de que esta línea esté correctamente configurada

})
