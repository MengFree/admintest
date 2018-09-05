import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './plugins/axios'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.use(ElementUI)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
