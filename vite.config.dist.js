import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { resolve } from 'path';


export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    assetsDir: 'public',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ui',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    minify: false,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
