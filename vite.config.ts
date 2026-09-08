import { cloudflare } from '@cloudflare/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [cloudflare(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd()),
      },
    },
  };
});
