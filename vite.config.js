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
      }),
    },
  ],
  build: {
    assetsDir: 'public',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ui',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', 'vuedraggable'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          vuedraggable: 'Draggable'
        },
      },
    },
    minify: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
