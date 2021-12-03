import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';


export default defineConfig({
  plugins: [
    vue(),
    {
      ...dts({
        skipDiagnostics: false,
        logDiagnostics: true,
        outputDir: './types',
      })
    },
  ],
  build: {
    assetsDir: 'public',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ui',
    },
    minify: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
