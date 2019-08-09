<template>
  <div class="video-center">
    <MapSearch Title="视频中心"/>
    <div class="vid-container">
      <div class="crumbs">
        <div class="control-left"></div>
        <div class="video-title-list">
          <ul>
            <li v-for="(item,index) in this.crumbsData" :key="index">
              {{item.name}}
            </li>
          </ul>
        </div>
        
        <div class="control-right"></div>
      </div>
      <div class="vid-play-content"></div>
      <div class="vid-label"></div>
      <div class="vid-list"></div>
      <div class="advert"></div>
      <div class="comment-operate"></div>
      <div class="comment-list"></div>
    </div>
  </div>
</template>

<script>
import { Video } from '@/services/public.js';

export default {
  data() {
    return {
      crumbsData:''
    }
  },
  created() {
    Video().then((res)=>{
      if(res.code==200){
        this.crumbsData=res.list;
      }else{
        console.log(res.message)
      }
      console.log(this.crumbsData)
    })
  },
  methods: {
    
  },
}
</script>

<style lang="scss" scope> 

</style>
