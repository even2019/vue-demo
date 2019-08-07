<template>
    <transition name="mint-toast-pop">
        <div class="mint-toast" :style="customStyle" v-show="visible" :class="customClass">
            <i class="mint-toast-icon iconfont" :class="iconClass" v-if="iconClass !== ''"></i>
            <span class="mint-toast-text" :class="{'pt-1':iconClass!==''}">{{message}}</span>
        </div>
    </transition>
</template>
<script>
export default {
  name: 'GToast',
  props: {
    message: String,
    className: {
      type: String,
      default: '',
    },
    position: {
      type: String,
      default: 'middle',
    },
    zIndex: {
      type: Number,
    },
    iconClass: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      visible: false,
    };
  },
  computed: {
    customClass() {
      const classes = [];
      switch (this.position) {
        case 'top':
          classes.push('is-placetop');
          break;
        case 'bottom':
          classes.push('is-placebottom');
          break;
        default:
          classes.push('is-placemiddle');
      }
      classes.push(this.className);

      classes.push(this.iconClass === '' ? 'p-2' : 'py-3 px-4');

      return classes.join(' ');
    },
    customStyle() {
      const zindex = parseInt(this.zIndex, 10);
      const style = {};
      if (!isNaN(zindex)) {
        style.zIndex = zindex;
      }
      return style;
    },
  },
};
</script>
<style lang="scss">
.mint-toast {
  position: fixed;
  max-width: 80%;
  border-radius: 0.3125rem;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  box-sizing: border-box;
  text-align: center;
  z-index: 100;
  transition: opacity 0.3s linear;

  .mint-toast-icon {
    display: block;
    text-align: center;
    font-size: 56px;
    line-height: 1;
  }

  .mint-toast-text {
    font-size: 14px;
    display: block;
    text-align: center;
  }

  &.is-placetop {
    top: 50px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  &.is-placemiddle {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &.is-placebottom {
    bottom: 50px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  &.mint-toast-pop-enter,
  &.mint-toast-pop-leave-active {
    opacity: 0;
  }
}
</style>