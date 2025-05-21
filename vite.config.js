import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  plugins: [injectHTML()],
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        contact: './contact.html', 
        packages: './packages.html',
        services: './services.html', 
      },
    },
  },
});
