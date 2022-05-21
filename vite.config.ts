import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import { resolve } from 'path';
import Unocss from 'unocss/vite';
import { presetAttributify, presetUno } from 'unocss';
// import { createStyleImportPlugin, AndDesignVueResolve } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    legacy({
      targets: ['default', 'not IE 11'],
    }),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
      ],
    }),
    // createStyleImportPlugin({
    // resolves: [AndDesignVueResolve()],
    // }),
  ],
});
