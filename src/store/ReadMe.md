#状态管理使用说明#

1. 入口 index.js
   store 文件夹下的全局 modules, state, getters, actions,和 mutations 方法都 import 到入口文件 index.js 中， index.js 统一在 main.js 中引入注册

2. modules
   在 modules 文件夹中按需创建模块(子文件夹)，每个模块都应包含 index 入口以及必要的局部 actions, getters, mutations 等方法。

#modules 包含模块:
...
