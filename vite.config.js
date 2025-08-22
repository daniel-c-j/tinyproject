import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  return {
    base: (mode === "dev") ? undefined : '/tinyproject/',
    plugins: [react(), tailwindcss()],
    test: {
      environment: 'jsdom',
      coverage: {
        exclude: [
          "src/util/**",
          "src/main.jsx",
          "src/App.jsx",
          "dist/assets/**",
          "**.config.js"
        ]
      }
    }
  }
})


