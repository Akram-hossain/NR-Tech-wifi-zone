import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        contact: './contact.html',
        ftplist: './ftp-list.html',
        packages: './packages.html',
        services: './services.html', 
      },
    },
  },
});
