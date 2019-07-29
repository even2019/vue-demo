<template>
  <div>
    <div class="header">
      <div class="logo">logo</div>
      <div class="nav-bar">
        <div class="nav-link" v-for="(item, index) in navList" :key="index">
          <router-link :to="item.Link">{{item.Name}}</router-link>
          <span class="nav-gap"></span>
        </div>
      </div>
      <div class="login">
        <span class="content">
          <img src="../assets/images/phone.png" alt="">
          <a>下载手机客户端</a>
          <span class="down-arrow"></span>
        </span>
        <span class="content">
          <a>登录</a>或<a>注册</a>
        </span>
      </div>
    </div>
    <div class="main">
      <router-view />
    </div>
    <div class="footer">
      <div class="copyright">
        本站不提供任何视听上传服务，所有内容均来自视频分享 <br />
        "For The Dream"|Copyright © 2014 JiuGuo Network Technology|浙ICP备14025058号-1
      </div>
    </div>
  </div>
</template>
<script>
import { Login } from '@/services/public.js';
export default {
  data() {
    return {
      navList: [
        {
          Name: '视频',
          Link: '/VideoCenter',
        },
        {
          Name: '话题',
          Link: '',
        },
        {
          Name: '竞猜',
          Link: '',
        },
        {
          Name: '直播',
          Link: '',
        },
        {
          Name: '资讯',
          Link: '',
        },
        {
          Name: '战绩',
          Link: '',
        },
      ]
    }
  },
  created() {
    Login().then((res) => {
      console.log(res);
    });
  }
}
</script>

