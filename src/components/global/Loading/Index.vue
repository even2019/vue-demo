<style lang="scss" scoped>
.g-loading {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.4);
}
</style>

<template>
    <div v-show="show">
        <div class="g-loading d-flex align-items-center justify-content-center">
            <div class="text-center">
                <div class="spinner-border text-primary">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="text-primary small" v-if="showMessage">
                    <slot>{{message}}</slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'GLoading',
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    message: {
      type: String,
      default: '',
    },
  },
  computed: {
    showMessage() {
      return this.$slots.default || this.message;
    },
  },
};
</script>
