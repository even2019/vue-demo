<template>
  <!-- 地图搜索 -->
  <div class="map-search">
    <div class="map-wrap">
      <h1 class="map-title">注册</h1>
      <div class="sear-box">
        <div class="sear-bar">
          <input v-model="title" type="text" class="sear-input" name="title" placeholder="搜索关键字" />
          <input type="submit" value="搜索" class="sear-btn" />
        </div>
        <div class="sear-history">
          <span>热搜</span>
          <a href="javascript:;">WCA2015</a>
          <a href="javascript:;">NEWBEE</a>
          <a href="javascript:;">T15国际邀请赛</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MapSearch",
  data () {
    return {
      title: "",
    }
  }
}
</script>

<style>
</style>
