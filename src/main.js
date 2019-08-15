import Vue from 'vue';
import App from './App.vue';
import Router from './router';
import Store from './store';
import globalComponent from './components/global/index';
import './plugins/index' //插件注册
import './utils/index';
import './assets/reset.css'; //重置样式
import './assets/main.scss'; //主要样式
import VueAwesomeSwiper from 'vue-awesome-swiper'; // 轮播图引入
import 'swiper/dist/css/swiper.css' // 轮播图样式

import vuescroll from 'vuescroll';//滚动条美化
import 'vuescroll/dist/vuescroll.css';

Vue.config.productionTip = false;

Vue.use(vuescroll);
Vue.use(globalComponent);
Vue.use(VueAwesomeSwiper);

new Vue({
  router: Router,
  store: Store,
  render: h => h(App)
}).$mount('#app');
