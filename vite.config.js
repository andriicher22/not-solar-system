import { defineConfig } from 'vite'

export default defineConfig({
  base: '/not-solar-system/',
  
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three'],
          'vendor': ['three.interactive']
        }
      }
    },
  },
  
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    }
  }
})