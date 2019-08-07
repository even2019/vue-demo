<template>
  <div>
    <g-header :navList="navList"></g-header>
    <div class="main">
      <router-view />
    </div>
    <g-footer></g-footer>
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
          Link: '/LineCenter',
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
