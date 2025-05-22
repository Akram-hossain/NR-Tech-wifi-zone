import { defineConfig } from 'vite'; 

export default defineConfig({ 
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