<template>
  <div>
    layout
    <router-view />
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$http);
    this.$http.post('/login').then((res)=>{
      console.log(res);
    });
  }
}
</script>

