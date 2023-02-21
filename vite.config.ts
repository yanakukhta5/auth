import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 1234,
    strictPort: false,
    proxy: {
      '/api': {
        target: 'https://test-assignment.emphasoft.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    }
  }
})
