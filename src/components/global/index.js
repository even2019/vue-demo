// 全局组件入口
import Header from './Header/Index.vue';
import Footer from './Footer/Index.vue';
import Toast from './Toast/index.js';
import Modal from './Modal/index.js';
import Tab from './Tab/Index.vue';
import Loading from './Loading/Index.vue';
import $Loading from './Loading/index.js';

const components = [
  Header, 
  Footer,
  Toast,
  Modal,
  Tab,
  Loading,
];

export default {
  install(Vue) {
    components.forEach(comp => Vue.component(comp.name, comp));

    Vue.$toast = Vue.prototype.$toast = Toast;
    Vue.$modal = Vue.prototype.$modal = Modal;
    Vue.$loading = Vue.prototype.$loading = $Loading;
  }
};
