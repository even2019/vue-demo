<template>
  <div class="video-center">
    <MapSearch Title="视频中心"/>
    <div class="vid-container">
      <div class="crumbs">
        <div class="control-left" :style="{background:clb}" @click="goStep(1)"></div>
        <div class="video-title-list">
          <ul :style="{width:ulWidth,left:ulLeft}">
            <li v-for="(item,index) in this.crumbsData" @click="routerTo(item,index)" :class="{active:item.active}" :key="index">
              <img :src="item.url" alt="">
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
        <div class="control-right" :style="{background:crb}" @click="goStep(-1)"></div>
      </div>
      <div class="vid-play-content">
        <div class="play-left">
          <div class="img-big">
            <ul :style="{top:ulTop}">
              <li v-for="(item,index) in playData" @mouseleave="continueInterval()" @mouseover="stopInterval()" :style="{backgroundImage:'url('+imgList[index]+')'}" :key="index" >
                <span class="img-info">{{item.desc}}</span>
              </li>
            </ul>
          </div>

          <ul class="img-small">
            <li v-for="(item,index) in imgList" :key="index" @click="dropTo(index)" :class="{active:index==nowIndex}">
              <span :style="{backgroundImage:'url('+item+')'}"></span>  
            </li>       
          </ul>
        </div>
        <div class="play-right">
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
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
import { setInterval, clearInterval } from 'timers';

export default {
  data() {
    return {
      crumbsData:'',
      ulLeft:'0',
      playData:'',
      timer1:'',
      imgList:[
        require('../../assets/images/video/u1692.jpg'),
        require('../../assets/images/video/u1696.jpg'),
        require('../../assets/images/video/u1698.jpg'),
        require('../../assets/images/video/u1705.jpg'),
        require('../../assets/images/video/u6536.jpg')
      ],
      nowIndex:0
    }
  },
  computed: {
    ulWidth(){
      return this.crumbsData.length*100+'px';
    },
    maxUlLeft(){
      return 1000-this.crumbsData.length*100;
    },
    ulTop(){
      return -this.nowIndex*385+"px";
    },
    clb(){
      return parseInt(this.ulLeft)==0?'rgb(100, 100, 100)':'#303131'
    },
    crb(){
      return parseInt(this.ulLeft)==1000-this.crumbsData.length*100?'rgb(100, 100, 100)':'#303131'
    }
  },
  created() {
    Video().then((res)=>{
      if(res.code==200){
        this.crumbsData=res.list;
        this.playData=res.playData;
        console.log(this.playData)
      }else{
        console.log(res.message)
      }
    });
  },
  mounted(){
    const _this=this;
    this.timer1=setInterval(this.carousel,3000)
  },
  methods: {
    carousel(){
       if(this.nowIndex<=3){
        this.nowIndex++
      }else if(this.nowIndex>3){
        
        this.nowIndex=0;
      }
    },
    dropTo(i){
      clearInterval(this.timer1);
      this.nowIndex=i;
      this.timer1=setInterval(this.carousel,3000);
    },
    stopInterval(){
      clearInterval(this.timer1)
    },
    continueInterval(){
      this.timer1=setInterval(this.carousel,3000);
    },
    goStep(dirc){
      if(dirc==1&&parseInt(this.ulLeft)<0){
        this.ulLeft=parseInt(this.ulLeft)+100+"px";
      }else if(dirc==-1&&parseInt(this.ulLeft)>this.maxUlLeft){
        this.ulLeft=parseInt(this.ulLeft)-100+"px";
      } 
    },
    routerTo(item,index){
      this.crumbsData.forEach(i => {
        i.active=false;
      });
      item.active=true;
      console.log('跳转至'+item.name)
    }
  },
  beforeDestroy(){
    if(this.timer1){
      clearInterval(this.timer1);
    }
  }
}
</script>

<style lang="scss" scope> 

</style>
