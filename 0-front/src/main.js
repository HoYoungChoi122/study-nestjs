import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from "./router";
// import store from './store/index'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import VueAxios from 'vue-axios'
// import { ins as axios } from './plugins/axios'

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// Vue.use(VueAxios, axios)
Vue.use(Vuex)


Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
