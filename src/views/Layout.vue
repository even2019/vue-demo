<template>
  <div>
    layout
    <router-view />
  </div>
</template>
<script>
import { Login } from '@/services/public.js';
export default {
  created() {
    Login().then((res) => {
      console.log(res);
    });
  }
}
</script>

