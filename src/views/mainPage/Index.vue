<template>
  <div id="mainPage">
    <div class="mp-search">

    </div>
    <div class="mp-banner">
      <div class="left">
        <ul>
          <li v-for="(list, index) in slideList" :key="index" v-show="index === currentIndex">
            <img :src="list.imgUrl" width="100%" height="100%" :alt="list.imgDesc">
          </li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li v-for="(item, index) in videoList" :key="index">
            <a :href="item.clickUrl">
              <img :src="item.imgUrl" width="100%" height="100%" :alt="item.imgDesc">
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
</template>
<script>
const bannerImg = require('../../assets/images/mainPage/banner.jpg');
const imgs = require('../../assets/images/mainPage/imgs.jpg');
export default {
  data() {
    return {
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

