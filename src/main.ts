import BootstrapVue from 'bootstrap-vue';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'primevue/resources/themes/nova-vue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
