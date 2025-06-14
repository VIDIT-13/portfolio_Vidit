import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import imagemin from 'rollup-plugin-imagemin';

// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['motion', 'gsap'],
        },
      },
    },
  },
  plugins: [
    react(),
    imagemin({
      gifsicle: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.7, 0.8] },
      webp: { quality: 75 }
    }),
  ],
})
