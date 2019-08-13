<template>
  <div class="video-center">
    <MapSearch Title="视频中心"/>
    <div class="vid-container">
      <div class="crumbs">
        <div class="control-left" :style="{background:clb}" @click="goStep(1)"></div>
        <div class="video-title-list">
          <ul :style="{width:ulWidth,left:ulLeft}">
            <li v-for="(item,index) in this.crumbsData" 
                @click="routerTo(item)" 
                :class="{active:item.active}" 
                :key="index">
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
              <li v-for="(item,index) in playData" 
                  @mouseleave="continueInterval()"
                  @mouseover="stopInterval()" 
                  :style="{backgroundImage:'url('+imgList[index]+')'}" 
                  :key="index" >
                <span class="img-info">{{item.desc}}</span>
              </li>
            </ul>
          </div>

          <ul class="img-small">
            <li v-for="(item,index) in imgList" 
                :key="index" 
                @click="dropTo(index)" 
                :class="{active:index==nowIndex}">
              <span :style="{backgroundImage:'url('+item+')'}"></span>  
            </li>       
          </ul>
        </div>
        <div class="play-right">
          <div class="ranking">
            <h3>
              排行版
            </h3>
            <ul class="time-classify">
              <li :class="{active:index==timeIndex}" 
                  v-for="(item,index) in timeclassify" 
                  @click="chooseClass(index)" 
                  :key="index">
                {{item}}
              </li>            
            </ul>
          </div>
          <ul class="ranking-list">
            <li v-for="(item,index) in rankingData" 
                :class="{active:index==rankActive}" 
                :key="index" @mouseover="rankActive=index">
              <div class="order-content">
                <span class="order">{{index+1}}</span>  
              </div>             
              <div class="ranking-content">
                <div class="r-title">{{item.titie.slice(0,13)+" "+item.time}}</div>
                <div class="r-info">
                  <span class="deliver">投递：{{item.deliver}}</span>
                  <span class="playAmount">播放：{{item.playAmount}}</span>
                </div>
              </div>
            </li>
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
import { setInterval, clearInterval, setTimeout } from 'timers';

export default {
  data() {
    return {
      crumbsData:'',
      ulLeft:'0',
      playData:'',
      timer1:'',
      rankingData:'',
      timeclassify:[
        "月","周","日"
      ],
      imgList:[
        require('../../assets/images/video/u1692.jpg'),
        require('../../assets/images/video/u1696.jpg'),
        require('../../assets/images/video/u1698.jpg'),
        require('../../assets/images/video/u1705.jpg'),
        require('../../assets/images/video/u6536.jpg')
      ],
      rankActive:0,
      nowIndex:0,
      rankingData0:[],
      rankingData30:[],
      rankingData7:[],
      timeIndex:0
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
        this.rankingData=res.rankingData;
        this.rankingData.sort(this.mySort('playAmount'));
        var nowTi=new Date().getTime();
        for(var i=0;i<this.rankingData.length;i++){ 
          let timeDif=nowTi-new Date(this.rankingData[i].time).getTime()
          let day=parseInt(timeDif/(1000*60*60*24));
          window.console.log(day)
          if(day>=0&&day<1){
            this.rankingData0.push(this.rankingData[i]);
          }
          if(day>=0&&day<7){
            this.rankingData7.push(this.rankingData[i]);
          }
          if(day>=0&&day<30){
            this.rankingData30.push(this.rankingData[i]);
          } 
        }
      }else{
        alert(res.message)
      }
    });
  },
  mounted(){
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
    chooseClass(j){
      this.timeIndex=j;
      switch (j) {
        case 0:
          this.rankingData=this.rankingData30;
          break;
        case 1:
          this.rankingData=this.rankingData7; 
          break;
        case 2:
          this.rankingData=this.rankingData0;
          break;
      }
    },
    mySort(property){
      return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
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
    routerTo(item){
      this.crumbsData.forEach(i => {
        i.active=false;
      });
      item.active=true;
      window.console.log('跳转至'+item.name)
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
