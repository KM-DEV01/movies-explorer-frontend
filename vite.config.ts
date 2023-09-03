import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  define: {
    BASE_URL: JSON.stringify(process.env.VITE_BASE_URL)
  },
  plugins: [
    react(),
    tsconfigPaths(),
  ]
})
