import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'bootstrap', 
        'bootstrap/dist/css/bootstrap.min.css', 
        'bootstrap/dist/js/bootstrap.bundle.min' // Add Bootstrap JS bundle here
      ],
    },
  },
});
