import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import { resolve } from 'path';
import Unocss from 'unocss/vite';
import { presetAttributify, presetWind } from 'unocss';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    Unocss({
      presets: [
        presetAttributify(),
        presetWind(),
      ],
    }),
  ],
});
