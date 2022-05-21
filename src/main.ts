import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import stores from './stores';
import i18n from './i18n';
import 'uno.css';

const app = createApp(App);

app.use(router);
app.use(stores);
app.use(i18n);

app.mount('#app');