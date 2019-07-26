#公用方法使用说明#

1. 公用方法需按照开发规范定义

2. 入口 index.js
   utils 文件夹下的公用 js 方法都 import 到入口文件 index.js 中， index.js 统一在 main.js 中引入注册

3. 默认方法 tools.js
   未确定分类的公用方法都在 tools.js 中定义

4. 分类公用方法
   确定分类(同一类型)的方法可以单独创建新的 js 文件，参考 tools.js 引入 index.js 中

#tools.js 包含方法:

1. 简单数组去重
