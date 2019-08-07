# 模态框组件

## `this.$modal(options)`
`{Object} options` 参数介绍:
- `message`: `{String}` 弹窗显示的文本
- `title`: `{String}` 模态窗口的标题，如果值为空，则不显示标题
- `color`: `{String}` 控制标题栏背景色，可选值对应bootstrap的预置颜色，如：primary, secondary, success, danger, warning等（详见：  tp://getbootstrap.com/docs/4.1/utilities/colors/#color）
- `width`: `{String}` 控制窗口的宽度，默认值为当前屏幕宽度的`80%`，参数值必须含有单位或百分比
- `padding`: `{String}` 控制内容区域的内边距，该值可为style的padding值（如`1px 10% 3rem`），如果该值中属于不合法的padding值，则会当做类名（`class`）处理
- `isQuickClose`: `{Boolean}` 是否允许通过点击遮罩层关闭弹窗，默认为`true`允许
- `showCloseBtn`: `{Boolean}` 是否显示关闭按钮，默认为`false`不显示
- `showCancelBtn`: `{Boolean}` 是否显示底部关闭按钮，默认为`true`显示
- `ok`: `{Function}` 确认按钮的回调，默认值：`null`，该值为空时则该按钮不显示。当该函数返回`true`时会阻止窗口的关闭
- `okText`: `{String}` 确认按钮的文本，默认值：`确定`
- `cancel`: `{Function}` 取消按钮的回调，默认值：`null`，该值为空时则该按钮不显示。当该函数返回`true`时会阻止窗口的关闭
- `cancelText`: `{String}` 取消按钮的文本，默认值：`取消`
- `btns`: `{Array}` 数组对象。如果需要自定义按钮，可通过该值进行设置（不限制个数，数量可能会影响到ui显示）。如果该值存在(即数组长度大于0)，则`ok`与`cancel`会被忽略。元素格式如下：
  - `text`: `{String}` 按钮的文本
  - `color`: `{String}` 按钮的颜色值。与上面介绍的color参数值一样
  - `callback`: `{Function}` 点击按钮的回调。当该函数返回`true`时会阻止窗口的关闭

## `this.$modal.alert(message, callback, options)`
> 该方法只有一个确认按钮
- `message`: `{String}` 提示内容
- `callback`: `{Function}` 点击确定按钮的回调
- `options`: `{Object}` 可选， 与上面介绍的options参数一致

## `this.$modal.confirm(message, ok, cancel, options)`
> 该方法有两个按钮，一个取消，一个确认，且点击遮罩层时不能关闭窗口
- `message`: `{String}` 提示内容
- `ok`: `{Function}` 可选，点击确定按钮的回调
- `cancel`: `{Function}` 可选， 点击取消按钮的回调
- `options`: `{Object}` 可选，与上面介绍的options参数一致

# 使用demo

## 直接方法调用
```js
this.$modal({
  title: '自定义提示',
  message: '提示的内容',
  color: 'primary',
  btns: [
    {
      text: '确定',
      color: 'primary',
      callback() {
        this.$modal.alert('关闭成功!');
      },
    },
  ],
});

this.$modal.alert('<b>你点了确定</b>');

// 嵌套使用
this.$modal.confirm('这是确认弹窗', () => {
    this.$modal.alert('<b>你点了确定</b>');
  }, () => {
    this.$modal.alert('点击了取消', { width: '100%' });
  });
```

## 全局组件使用
```html
<template>
  <g-modal title="公告" :show.sync="show" :ok="ok" :cancel="ok" :show-close-btn="true">
    <div>内容</div>
  </g-modal>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods:{
    ok() {
      alert('点击了按钮');
    },
  },
}
</script>
```