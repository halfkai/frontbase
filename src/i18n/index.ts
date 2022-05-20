import { createI18n } from 'vue-i18n';

const messages = {
  cn: {
    Hi: '你好',
  },
  en: {
    Hi: 'Hi',
  },
};

const i18n = createI18n({
  locale: 'cn',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
