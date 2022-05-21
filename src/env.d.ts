/// <reference types="vite/client" />
/// <reference types="@intlify/vite-plugin-vue-i18n/client" />

import type { AttributifyAttributes } from '@unocss/preset-attributify';

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '@vue/runtime-dom' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface HTMLAttributes extends AttributifyAttributes {}
}
