import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import typescript2 from 'rollup-plugin-typescript2';
// import GenerateExports from 'vite-plugin-generate-exports'


export default defineConfig({
  plugins: [
    vue(),
    {
      apply: 'build',
      ...typescript2({
        // tsconfig: './tsconfig.json',
        tsconfig: resolve(__dirname, `tsconfig.json`),
        check: true,
        // include: ["types/*"],
        // useTsconfigDeclarationDir: true,
        tsconfigOverride: {
          outDir: "./types",
          include: ["*.ts"],
        },
      }),
      enforce: 'pre',
    },
  ],
  build: {
    assetsDir: 'public',
    lib: {
      entry: resolve(__dirname, 'types/index.ts'),
      name: 'ui',
    },
    // rollupOptions: {
    //   external: ['vue'],
    //   output: {
    //     globals: {
    //       vue: 'Vue',
    //     },
    //   },
    // },
    minify: false,
  },
  // resolve: {
  //   alias: {
  //     '@': resolve(__dirname, 'src'),
  //   },
  // },
});
