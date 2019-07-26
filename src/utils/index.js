// 公共方法入口文件
import Vue from 'vue';
import * as tools from './tools'; // 默认公用方法引入

const utils = {
  ...tools
};

Vue.use({
  install(vue) {
    vue.prototype.$utils = utils;
  }
});
