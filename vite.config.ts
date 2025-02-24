import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  // server: {
  //   proxy: {
  //     // Proxy request API ke server backend Anda
  //     '/api': {
  //       target: 'http://192.168.189.171:8080/', // Ganti dengan URL server backend Anda
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''), // Opsional: jika API di backend tidak menggunakan prefix '/api'
  //     },
  //   },
  // },
})
