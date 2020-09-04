import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant'
import 'vant/lib/index.css'
import { Lazyload } from 'vant';
// import { Notify } from 'vant';
import { Notify } from 'vant';

// 全局注册
Vue.use(Notify);

Vue.use(Lazyload);

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
