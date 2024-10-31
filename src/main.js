import { createApp } from 'vue';
import App from  ""
import router from './router.js';
import BaseCard from "./components/ui/BaseCard.vue";
import store from './store/index.js';
import BaseButton from "./components/ui/BaseButton.vue";

const app = createApp(App);


app.use(router);
app.use(store);

app.component('base-card', BaseCard)
app.component('base-button', BaseButton);

app.mount('#app');
