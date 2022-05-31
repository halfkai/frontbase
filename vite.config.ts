import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import { resolve } from 'path';
import Unocss from 'unocss/vite';
import { presetAttributify, presetWind } from 'unocss';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
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
        presetAttributify(),
        presetWind(),
      ],
    }),
    vueI18n({
      compositionOnly: false,
      include: resolve(__dirname, 'src/i18n/locales/**'),
    }),
    // createStyleImportPlugin({
    // resolves: [AndDesignVueResolve()],
    // }),
  ],
});
