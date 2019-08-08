<template>
  <div class="text-group">
    <!-- 组件结构 -->
    <!-- 组件容器 -->
    <div class="input-group"
         :class="{'is-invalid':error}">
      <!-- 输入框 -->
      <input :type="type"
             :value="value"
             :placeholder="placeholder"
             :name="name"
             @input="$emit('input',$event.target.value)" />
      <!-- 输入框后面的按钮 -->
      <button v-if="btnTitle"
              :disabled="disabled"
              @click="$emit('btnClick')">{{btnTitle}}</button>
      <!-- 错误提醒 -->
      <div v-if="error"
           class="invalid-feedback">{{error}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "inputGroup",
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: String,
    placeholder: String,
    name: String,
    btnTitle: String,
    disabled: Boolean,
    error: String
  }
}
</script>

<style>
.is-invalid {
  border: 1px solid #e53c55 !important;
}
</style>
