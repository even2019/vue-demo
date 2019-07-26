import Vue from 'vue';
import App from './App.vue';
import Router from './router';
import Store from './store';
import './plugins/index' //模拟数据
import './utils/index';
import './assets/reset.css'; //重置样式
import './assets/main.scss'; //主要样式

Vue.config.productionTip = false;

new Vue({
  router: Router,
  store: Store,
  render: h => h(App)
}).$mount('#app');
