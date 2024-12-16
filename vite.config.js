import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['react-router-dom'],
      input: '../public/index.html',
    },
  },
  base: './',
  resolve: {
    extensions: ['.js', '.jsx'], // Include .js and .jsx extensions
  },
})
