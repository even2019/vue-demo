// 公共方法入口文件
import Vue from 'vue';
import * as tools from './tools'; // 默认公用方法引入
import formatDate from './date';//日期格式化

const utils = {
  ...tools,
  ...formatDate
};

Vue.use({
  install(vue) {
    vue.prototype.$utils = utils;
  }
});
