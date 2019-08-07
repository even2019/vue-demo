<template>
  <div id="mainPage"
    class="main-page">
    <div class="mp-banner">

    </div>
    <div class="mp-content">
      <div class="mp-slider">
        <div class="left">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(slide, index) in slideList"
              :key="index">
              <img :src="slide.imgUrl"
                width="100%"
                height="100%"
                :alt="slide.imgDesc">
            </swiper-slide>
            <div class="swiper-pagination"
              slot="pagination"></div>
          </swiper>
        </div>
        <div class="right">
          <ul>
            <li v-for="(item, index) in videoList"
              :key="index">
              <a :href="item.clickUrl">
                <img :src="item.imgUrl"
                  width="100%"
                  height="100%"
                  :alt="item.imgDesc">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mp-hotNews">
        <div class="article-title">

        </div>
        <div class="article-content"></div>
      </div>
      <div class="mp-live"></div>
      <div class="mp-hotEvents"></div>
      <div class="mp-hotVideos"></div>
    </div>
  </div>
</template>
<script>
const bannerImg = require('../../assets/images/mainPage/banner.jpg');
const imgs = require('../../assets/images/mainPage/imgs.jpg');
export default {
  data() {
    return {
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
        }
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
  }
}
</script>
<style type="text/css">
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


