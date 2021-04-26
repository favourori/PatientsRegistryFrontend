import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueOtp2 from 'vue-otp-2';
import axios from "axios";
import Vuelidate from 'vuelidate'
import Notifications from 'vue-notification'

import vueCountryRegionSelect from 'vue-country-region-select'
Vue.use(vueCountryRegionSelect)
Vue.use(Vuelidate)
Vue.use(VueOtp2)
Vue.use(axios);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
