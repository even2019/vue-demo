<template>
  <div class="header">
    <div class="h-content clear-fix">
      <div class="logo">logo</div>
      <div class="nav-bar">
        <div class="nav-link"
          v-for="(item, index) in navList"
          :key="index">
          <router-link :to="item.Link">{{item.Name}}</router-link>
          <span class="nav-gap"></span>
        </div>
      </div>
      <div class="login">
        <span class="content">
          <img src="../../../assets/images/phone.png"
            alt="">
          <a>下载手机客户端</a>
          <span class="down-arrow"></span>
        </span>
        <span class="content">
          <a>登录</a>或<a>注册</a>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GHeader',
  props: {
    navList:{
      type: Array,
      required: true
    }
  }
}
</script>

