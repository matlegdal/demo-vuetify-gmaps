// import '@babel/polyfill';
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import * as env from './env';
import './plugins/vuetify';
import App from './App.vue';
import store from './store/store';

Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: env.GMAPS_KEY,
  },
});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
