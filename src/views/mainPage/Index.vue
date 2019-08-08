<template>
  <div id="mainPage" class="main-page">
    <div class="mp-banner">

    </div>
    <div class="mp-content">
      <div class="mp-slider">
        <div class="left">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(slide, index) in slideList" :key="index">
              <img :src="slide.imgUrl" width="100%" height="100%" :alt="slide.imgDesc">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <!-- <div class="right">
          <ul>
            <li v-for="(item, index) in videoList" :key="index">
              <a :href="item.clickUrl">
                <img :src="item.imgUrl" width="100%" height="100%" :alt="item.imgDesc">
              </a>
            </li>
          </ul>
        </div> -->
      </div>
      <div class="mp-tabInfo">
        <!-- <g-tab :options="tabOption1" :tabs="tabList1" :titles="titleConfig1" :content="contentList1" @click="handleTab">
          <template v-slot:content>
            <span>123</span>
          </template>
        </g-tab> -->
      </div>
      <div class="mp-tabInfo">
        <g-tab :options="tabOption2" :tabs="tabList2" :titles="titleConfig2" :content="contentList2" @click="handleTab" :contentStyle="contentStyle">
          <template v-slot:title>
            <span>123</span>
          </template>
          <template v-slot:content>
            <span>123</span>
          </template>
        </g-tab>
      </div>

    </div>
  </div>
</template>
<script>
const bannerImg = require('../../assets/images/mainPage/banner.jpg');
const imgs = require('../../assets/images/mainPage/imgs.jpg');
const liveIcon = require('../../assets/images/mainPage/live.png');
const arrow = require('../../assets/images/mainPage/right-arrow.png');
const contentImg = require('../../assets/images/mainPage/tvInterface.jpg');
const contentUser = require('../../assets/images/mainPage/iconUser.png');
const populationIcon = require('../../assets/images/mainPage/smallPerson.png');
const tvIcon = require('../../assets/images/mainPage/iconTv.png');
export default {
  data() {
    return {
      tabOption1: {
        hasTitle: true,
        hasContent: true,
        editContent: true,
      },
      titleConfig1: {
        iconUrl1: liveIcon,
        text: '正在直播',
        IconUrl2: arrow,
        enterText: '直播大厅',
        enterUrl: '/videoCenter'
      },
      tabList1: [
        {
          text: '全部',
          value: 1
        },
        {
          text: '英雄联盟',
          value: 2
        },
        {
          text: '炉石传说',
          value: 3
        },
        {
          text: 'DOTA2',
          value: 4
        },
        {
          text: 'DOTA',
          value: 4
        },
      ],
      tabOption2: {
        hasTitle: true,
        hasContent: true,
      },
      titleConfig2: {
        iconUrl1: liveIcon,
        text: '正在直播',
        IconUrl2: arrow,
        enterText: '直播大厅',
        enterUrl: '/videoCenter'
      },
      contentStyle: {
        height: '1500px',
      },
      tabList2: [
        {
          text: '全部',
          value: 1
        },
        {
          text: '英雄联盟',
          value: 2
        },
        {
          text: '炉石传说',
          value: 3
        },
        {
          text: 'DOTA2',
          value: 4
        },
        {
          text: 'DOTA',
          value: 4
        },
      ],
      contentList2: [
        {
          imgUrl: contentImg,
          videoUrl: '#',
          userIcon: contentUser,
          userName: '2009',
          populationIcon: populationIcon,
          populationNum: '32.1万',
          tvIcon: tvIcon
        },
        {
          imgUrl: contentImg,
          videoUrl: '#',
          userIcon: contentUser,
          userName: '2009',
          populationIcon: populationIcon,
          populationNum: '32.1万',
          tvIcon: tvIcon
        },
        {
          imgUrl: contentImg,
          videoUrl: '#',
          userIcon: contentUser,
          userName: '2009',
          populationIcon: populationIcon,
          populationNum: '32.1万',
          tvIcon: tvIcon
        },
        {
          imgUrl: contentImg,
          videoUrl: '#',
          userIcon: contentUser,
          userName: '2009',
          populationIcon: populationIcon,
          populationNum: '32.1万',
          tvIcon: tvIcon
        },
        {
          imgUrl: contentImg,
          videoUrl: '#',
          userIcon: contentUser,
          userName: '2009',
          populationIcon: populationIcon,
          populationNum: '32.1万',
          tvIcon: tvIcon
        },
        {
          imgUrl: contentImg,
          videoUrl: '#',
          userIcon: contentUser,
          userName: '2009',
          populationIcon: populationIcon,
          populationNum: '32.1万',
          tvIcon: tvIcon
        },
        {
          imgUrl: contentImg,
          videoUrl: '#',
          userIcon: contentUser,
          userName: '2009',
          populationIcon: populationIcon,
          populationNum: '32.1万',
          tvIcon: tvIcon
        },
        {
          imgUrl: contentImg,
          videoUrl: '#',
          userIcon: contentUser,
          userName: '2009',
          populationIcon: populationIcon,
          populationNum: '32.1万',
          tvIcon: tvIcon
        },
        {
          imgUrl: contentImg,
          videoUrl: '#',
          userIcon: contentUser,
          userName: '2009',
          populationIcon: populationIcon,
          populationNum: '32.1万',
          tvIcon: tvIcon
        },
        {
          imgUrl: contentImg,
          videoUrl: '#',
          userIcon: contentUser,
          userName: '2009',
          populationIcon: populationIcon,
          populationNum: '32.1万',
          tvIcon: tvIcon
        },
        {
          imgUrl: contentImg,
          videoUrl: '#',
          userIcon: contentUser,
          userName: '2009',
          populationIcon: populationIcon,
          populationNum: '32.1万',
          tvIcon: tvIcon
        },
        {
          imgUrl: contentImg,
          videoUrl: '#',
          userIcon: contentUser,
          userName: '2009',
          populationIcon: populationIcon,
          populationNum: '32.1万',
          tvIcon: tvIcon
        },
      ],
      swiperOption: {
        width: 550,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          bulletClass: 'my-bullet',
          bulletActiveClass: 'my-bullet-active',
        },
      },
      slideList: [
        {
          'clickUrl': '#',
          'imgDesc': 'xxx',
          'imgUrl': bannerImg
        },
        {
          'clickUrl': '#',
          'imgDesc': 'xxx',
          'imgUrl': bannerImg
        },
        {
          'clickUrl': '#',
          'imgDesc': 'xxx',
          'imgUrl': bannerImg
        },
        {
          'clickUrl': '#',
          'imgDesc': 'xxx',
          'imgUrl': bannerImg
        },
      ],
      videoList: [
        {
          'clickUrl': '#',
          'imgDesc': 'xxx',
          'imgUrl': imgs,
        },
        {
          'clickUrl': '#',
          'imgDesc': 'xxx',
          'imgUrl': imgs,
        },
        {
          'clickUrl': '#',
          'imgDesc': 'xxx',
          'imgUrl': imgs,
        },
        {
          'clickUrl': '#',
          'imgDesc': 'xxx',
          'imgUrl': imgs,
        },
        {
          'clickUrl': '#',
          'imgDesc': 'xxx',
          'imgUrl': imgs,
        },
        {
          'clickUrl': '#',
          'imgDesc': 'xxx',
          'imgUrl': imgs,
        },
      ],
      currentIndex: 0,
    }
  },
  methods: {
    change(index) {
      this.currentIndex = index
    },
    handleTab(val) {
      console.log(val, 'xxxxxxxxxxxxx');
    }
  }
}
</script>
<style lang="scss" scoped>
.main-page {
  height: auto;
  overflow: hidden;
  .mp-content {
    height: auto;
    overflow: hidden;
    .mp-tabInfo {
      height: auto;
      overflow: hidden;
      .tabAll {
        height: auto;
        overflow: hidden;
      }
    }
  }
}
.my-bullet {
  width: 8px;
  height: 8px;
  margin-right: 6px;
  display: inline-block;
  border-radius: 100%;
  background: #b2b2b2;
  opacity: 0.8;
}
.my-bullet-active {
  background: #ff6600;
  opacity: 1;
}
</style>


