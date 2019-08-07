<style lang="scss" scoped>
$closeSpace: 0.6rem;
.modal {
  display: block;
  .modal-dialog {
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    margin: 0;
    width: 100%;
    max-width: 100%;
    transform: translate(0%, -51%);
    .modal-content {
      margin: 0 auto;
      width: 80%;
      max-width: 30rem;
      .modal-header {
        justify-content: center;
        border-radius: 0.25rem 0.25rem 0 0;
        .close {
          padding: $closeSpace/2 $closeSpace;
          margin: -$closeSpace;
          margin-left: auto;
        }
      }
    }
  }
  .btn-group {
    > button {
      border: 1px solid rgba(0, 0, 0, 0.05);
      border-width: 0 0 0 1px;
      &:first-child {
        border-top-left-radius: 0;
      }
      &:last-child {
        border-top-right-radius: 0;
      }
    }
    &:last-child {
      border-left: none;
    }
  }
  .close {
    opacity: 0.9;
  }
  .modal-body {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
}
.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>

<template>
    <div>
        <transition name="custom-classes-transition" enter-active-class="zoomIn" leave-active-class="zoomOut">
            <div class="modal animated faster" key="a" v-if="show" @click="quickClose">
                <div class="modal-dialog modal-sm" @click.stop>
                    <div class="modal-content" :style="widthStyle()">
                        <div class="modal-header py-2" :class="headerClass()" v-if="title">
                            <span class="modal-title">{{title}}</span>
                            <button type="button" class="close" :class="{'text-white':isTextWhite}" @click.stop="close" v-if="showCloseBtn">
                                <span class="iconfont icon-remove"></span>
                            </button>
                        </div>
                        <div class="modal-body" v-bind="paddingStyle()">
                            <slot>
                                <div v-html="message"></div>
                            </slot>
                        </div>
                        <div class="modal-footer p-0" v-if="footerBtns.length>0">
                            <div class="btn-group w-100">
                                <button type="button" class="btn w-100" :class="'btn-'+(btn.color||'light')" v-for="btn in footerBtns" :key="btn.text" @click="callback(btn)">{{btn.text}}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <transition name="custom-classes-transition" enter-active-class="fadeIn" leave-active-class="fadeOut">
            <div class="modal-backdrop animated faster" key="b" v-show="show"></div>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'GModal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    message: String,
    title: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'light',
    },
    width: {
      type: String,
      default: '',
    },
    padding: {
      type: String,
      default: '',
    },
    btns: {
      type: Array,
      default: () => [],
    },
    ok: {
      type: Function,
      default: null,
    },
    okText: {
      type: String,
      default: '确定',
    },
    cancel: {
      type: Function,
      default: null,
    },
    showCancelBtn: {
      type: Boolean,
      default: true,
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    // 是否允许点击遮罩层关闭弹窗
    isQuickClose: {
      type: Boolean,
      default: true,
    },
    showCloseBtn: {
      type: Boolean,
      default: false,
    },
    minHeight: {
      type: String,
    },
  },
  data() {
    return {
      maxHeight: this.getMaxHeight(),
      bodyMinHeight: this.getMinHeight(),
    };
  },
  watch: {
    show(val) {
      this.addBodyClass(val);
    },
  },
  computed: {
    footerBtns() {
      if (this.btns.length > 0) return this.btns;
      const btns = [];
      if (this.cancel && this.showCancelBtn) {
        btns.push({
          text: this.cancelText,
          callback() {
            if (!this.cancel()) this.close();
          },
        });
      }

      if (this.ok) {
        btns.push({
          text: this.okText,
          callback() {
            if (!this.ok()) this.close();
          },
        });
      }
      return btns;
    },
    isTextWhite() {
      if (!this.color) return false;
      return this.color !== 'light';
    },
  },
  methods: {
    close() {
      if (this.cancel && this.cancel()) return;
      // 没有父组件，则属于通过方法调用
      if (!this.$parent) {
        this.show = false;
      } else {
        this.$emit('update:show', false);
      }
    },
    quickClose() {
      if (this.isQuickClose) this.close();
    },
    callback($data) {
      if (!$data.callback) return this.close();
      if (!$data.callback.call(this)) this.close();
    },
    headerClass() {
      return this.isTextWhite ? 'text-white bg-' + this.color : 'bg-light';
    },
    widthStyle() {
      if (this.width) {
        return { width: this.width };
      }
      return {};
    },
    // padding值可以是单位，也可以是class名
    paddingStyle() {
      const padding = this.padding;
      if (/^(\d+(px|rem|%|em)\s)*\d+(px|rem|%|em)$/.test(padding)) {
        return { style: { padding, maxHeight: this.maxHeight, minHeight: this.bodyMinHeight } };
      } else {
        return { 'class': padding, style: { maxHeight: this.maxHeight, minHeight: this.bodyMinHeight } };
      }
    },
    addBodyClass(val) {
      document.body.classList[val ? 'add' : 'remove']('modal-open');
    },
    getMaxHeight() {
      return document.documentElement.clientHeight * 0.8 + 'px';
    },
    getMinHeight() {
      return this.minHeight ? document.documentElement.clientHeight * this.minHeight + 'px' : undefined;
    },
  },
  created() {
    this.addBodyClass(this.show);
    // 旋转屏幕更新最大高度和最小高度
    this.$eventBus.$on('orientationchange', () => {
      setTimeout(() => {
        this.maxHeight = this.getMaxHeight();
        this.bodyMinHeight = this.getMinHeight();
      }, 0);
    });
  },
};
</script>
