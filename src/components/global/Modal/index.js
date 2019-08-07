import Vue from 'vue';
import ModalComponent from './Index.vue';

const ModalConstructor = Vue.extend(ModalComponent);

let instance;

const initInstance = function () {
  instance = new ModalConstructor({
    el: document.createElement('div'),
  });
};

const showModal = options => {
  if (!instance) {
    initInstance();
  }
  Object.assign(instance.$props, {
    title: options.title,
    btns: options.btns || [],
    width: options.width,
    padding: options.padding,
    color: options.color,
    ok: options.ok || null,
    cancel: options.cancel || null,
    message: options.message,
    isQuickClose: options.isQuickClose || options.isQuickClose === undefined,
    showCloseBtn: options.showCloseBtn || false,
  });
  // instance.$slots.default = [options.message];

  document.body.appendChild(instance.$el);

  Vue.nextTick(() => {
    instance.$props.show = true;
  });
};

const ModalBox = (options) => {
  showModal(options);
};

ModalBox.alert = (message, callback, options = {}) => {
  if (typeof callback === 'object') {
    options = callback;
    callback = () => { };
  }
  return ModalBox(Object.assign({
    title: '操作提示',
    message,
    ok() {
      const status = callback && callback();
      this.show = !!status;
    },
    okText: '确定',
  }, options));
};

ModalBox.confirm = (message, ok, cancel, options = {}) => {
  const len = arguments.length;
  if (len === 3) {
    if (typeof cancel === 'object') {
      options = cancel;
      cancel = () => { };
    }
  }
  return ModalBox(Object.assign({
    title: '确认提示',
    message,
    ok() {
      const status = ok && ok();
      this.show = !!status;
    },
    okText: '确定',
    cancel() {
      const status = cancel && cancel();
      this.show = !!status;
    },
    cancelText: '取消',
    isQuickClose: false,
  }, options));
};

export default ModalBox;
