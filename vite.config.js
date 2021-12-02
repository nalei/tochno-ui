import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import typescript2 from 'rollup-plugin-typescript2';
// import GenerateExports from 'vite-plugin-generate-exports'


export default defineConfig({
  plugins: [
    vue(),
    // {
    //   ...typescript2(),
    //   apply: 'build',
    // },
    // GenerateExports({
    //   patterns: [
    //     {
    //       matchTokens: ['// Start_Exports', '// End_Exports'],
    //       files: 'src/**/*.vue'
    //     }
    //   ]
    // }),
    {
      apply: 'build',
      ...typescript2({
        // tsconfig: './tsconfig.json',
        tsconfig: resolve(__dirname, `tsconfig.json`),
        check: true,
        // include: ["types/*"],
        // useTsconfigDeclarationDir: true,
      }),
      enforce: 'pre',
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
      external: ['vue'],
      input: {
        lib: resolve(__dirname, 'src/index.ts'),
        types: resolve(__dirname, 'types/index.ts'),
      },
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
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
