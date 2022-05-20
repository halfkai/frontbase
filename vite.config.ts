import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import Unocss from 'unocss/vite';
import { presetAttributify, presetUno } from 'unocss';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
      ],
    }),
  ],
});
