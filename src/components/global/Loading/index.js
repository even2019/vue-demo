import Vue from 'vue';
import LoadingComponent from './Index.vue';

const LoadingConstructor = Vue.extend(LoadingComponent);
let loadingConst = null;

const getInstance = () => {
  if (!loadingConst) {
    loadingConst = new LoadingConstructor({
      el: document.createElement('div'),
    });
  }
  return loadingConst;
};

const Loading = (message = '') => {
  const instance = getInstance();

  document.body.appendChild(instance.$el);

  instance.$nextTick(() => {
    instance.show = true;
    instance.message = message;
  });

  return () => {
    instance.show = false;
    instance.message = '';
  };
};

export default Loading;
