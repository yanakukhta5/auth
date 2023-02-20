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
      '/auth': {
        target: 'https://test.gnzs.ru/oauth/get-token.php',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auth/, ''),
        headers: {
          'X-Client-Id': '30878566',
          'Content-Type': 'application/json'
        }
      }
    }
  }
})
