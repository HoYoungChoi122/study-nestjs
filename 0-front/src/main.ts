import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {ins as axios} from './utils/axios';


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)
const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default vm
