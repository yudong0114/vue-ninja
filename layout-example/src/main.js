import Vue from 'vue'
import App from './App.vue'
import router from './router' /* 追加 */
Vue.config.productionTip = false
new Vue({
  router,  /* 追加 */
  render: h => h(App),
}).$mount('#app')