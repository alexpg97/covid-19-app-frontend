import BootstrapVue from 'bootstrap-vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'primevue/resources/themes/nova-vue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Vue.filter('capitalize', (value: string) => {
  console.log({ value });
  if (!value) return '';
  const result = value.toString();
  return result.charAt(0).toUpperCase() + result.slice(1);
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
