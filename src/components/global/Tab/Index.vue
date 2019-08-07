<template>
  <div class="tabAll">
    <div v-if="options.hasTitle != null ? options.hasTitle:false" class="title">
      <div v-if="options.editTitle != null ? options.editTitle:false">
        <slot name="title"></slot>
      </div>
      <div v-else>
        <div class="left">
          <img :src="titles.iconUrl1 != null ? titles.iconUrl1:''" alt="">
          <span class="text">{{titles.text != null ? titles.text:'请编辑标题'}}</span>
        </div>
        <div class="right">
          <span class="text" @click="goTo(titles.enterUrl)">{{titles.enterText != null ? titles.enterText:'请编辑跳转文字'}}</span>
          <img :src="titles.IconUrl2 != null ? titles.IconUrl2:''" alt="">
        </div>
      </div>
    </div>
    <div class="tab">
      <ul>
        <li v-for="(tab, index) in tabs" :key="index" @click="selectTab(tab, index)" :class="{'active': index === currentIndex}">
          <span>{{tab.text}}</span>
        </li>
      </ul>
    </div>
    <div v-if="options.hasContent != null ? options.hasContent:false" class="content">
      <div v-if="options.editContent != null ? options.editContent:false">
        <slot name="content"></slot>
      </div>
      <div v-else class="video">
        <ul>
          <li v-for="(item, index) in content" :key="index">
            <div>
              <img :src="item.imgUrl" alt="" class="videoImg">
              <div class="middle">
                <img :src="item.userIcon" alt="" class="userIcon">
                <div class="userName">{{item.userName}}</div>
              </div>
              <div class="bottom">
                <img :src="item.populationIcon" alt="" class="populationIcon">
                <span class="populationName">{{item.populationNum}}</span>
                <img :src="item.tvIcon" alt="" class="tvIcon">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GTab',
  props: {
    options: { // 参数配置
      type: Object,
      default: function () {
        return {}
      }
    },
    tabs: { // tab数据
      type: Array,
      default: function () {
        return []
      }
    },
    titles: { // 标题数据
      type: Object,
      default: function () {
        return {}
      }
    },
    content: { // 内容数据
      type: Array,
      default: function () {
        return []
      }
    },
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    selectTab(val, ind) {
      this.currentIndex = ind;
      this.$emit('click', val);
    },
    goTo(val) {
      this.$router.push(val);
    }
  }
}
</script>
<style lang="scss" scoped>
.tabAll {
  width: 100%;
  .title {
    height: 50px;
    background: #1c3a44;
    .left {
      float: left;
      line-height: 50px;
      text-align: center;
      img {
        width: 30px;
        height: 30px;
        margin-left: 10px;
        vertical-align: middle;
      }
      .text {
        margin-left: 20px;
      }
    }
    .right {
      float: right;
      line-height: 50px;
      text-align: center;
      img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        vertical-align: middle;
      }
      .text {
        color: #8d9ca1;
        margin-left: right;
        &:hover {
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
  .tab {
    height: 60px;
    background: #12252b;
    ul {
      li {
        float: left;
        text-align: center;
        line-height: 60px;
        width: 90px;
        height: 60px;
        color: #a2abaf;
        &.active {
          color: #fff;
          background: #162e36;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  .content {
    height: 370px;
    background: #162e36;
    .video {
      ul {
        padding: 10px;
        li {
          float: left;
          margin: 10px;
          width: 160px;
          height: 160px;
          background: #142931;
          .videoImg {
            width: 160px;
            height: 100px;
          }
          .middle {
            padding: 5px 0 0 5px;
            height: 30px;
            line-height: 30px;
            .userIcon {
              float: left;
              width: 30px;
              height: 30px;
            }
            .userName {
              float: left;
              margin-left: 10px;
              vertical-align: middle;
            }
          }
          .bottom {
            height: 22px;
            line-height: 22px;
            .populationIcon {
              width: 22px;
              height: 22px;
            }
            .populationName {
              font-size: 5%;
              color: #8a9498;
              vertical-align: top;
            }
            .tvIcon {
              width: 33px;
              height: 14px;
              padding: 0 0 5px 20px;
            }
          }
        }
      }
    }
  }
}
</style>

