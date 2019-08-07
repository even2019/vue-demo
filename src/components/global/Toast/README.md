> 代码来自mint-ui，对样式稍作了修改
# 使用说明
## `this.$toast(options)`:
- 参数：
 - `{String | Object} option`:
  - `{String} message`: 提示文字
  - `{String} position`: 显示位置，默认`middle`，可用值：`middle`、`top`、`bottom`
  - `{String} className`: 自定义样式的class
  - `{String} iconClass`: 字体图标样式，如：`icon-ok`
  - `{Number} duration`: 显示的时长，默认`3000`ms
  - `{Number} zIndex`: zIndex层级，默认为Toast组件样式中写的值

## `this.$toast.success(message, duration, zIndex)`
> 快捷方法，默认带有`icon-ok`图标

## `this.$toast.error(message, duration, zIndex)`
> 快捷方法，默认带有`icon-error`图标
