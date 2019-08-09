<template>
  <div class="video-center">
    <MapSearch Title="视频中心"/>
    <div class="vid-container">
      <div class="crumbs">
        <div class="control-left" @click="goStep(1)"></div>
        <div class="video-title-list">
          <ul :style="{width:ulWidth,left:ulLeft}">
            <li v-for="(item,index) in this.crumbsData" :key="index" :active="active">
              <img :src="item.url" alt="">
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
        
        <div class="control-right" @click="goStep(-1)"></div>
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
      crumbsData:'',
      ulLeft:'0'
    }
  },
  computed: {
    ulWidth(){
      return this.crumbsData.length*100+'px';
    }
  },
  created() {
    Video().then((res)=>{
      if(res.code==200){
        this.crumbsData=res.list;
      }else{
        console.log(res.message)
      }
    })
  },
  methods: {
    goStep(dirc){
      if(dirc==1&&parseInt(this.ulLeft)<0){
        this.ulLeft=parseInt(this.ulLeft)+100+"px";
      }else if(dirc==-1&&parseInt(this.ulLeft)>1000-this.crumbsData.length*100){
        this.ulLeft=parseInt(this.ulLeft)-100+"px";
      }
      
    }
  },
}
</script>

<style lang="scss" scope> 

</style>
