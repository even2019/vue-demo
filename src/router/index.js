import Vue from 'vue';
import Router from 'vue-router';
const Layout = () => import('../views/Layout');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [
        {
          path: '/videoCenter',
          name: 'videoCenter',
          component: () => import('../views/VideoCenter/index')
        },
        {
          path: '/lineCenter',
          name: 'lineCenter',
          component: () => import('../views/linecenter/Index')
        }
      ]
    },
  ]
});
