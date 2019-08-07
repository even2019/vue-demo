# 使用说明

## 参数:

- `{Object} options`: 基本参数配置
  - `{Boolean} hasTitle`: 是否开启标题栏，默认 false 不显示，true 显示
  - `{Boolean} editTitle`: 开启标题栏后，是否自定义，默认 false 不自定义，true 自定义
  - `{Boolean} hasContent`: 是否开启标签页下内容栏，默认 false 不显示，true 显示
  - `{Boolean} editContent`: 开启内容栏后，是否自定义，默认 false 不自定义，true 自定义
- `{Array} tabs`: 标签数据配置
  - `{String} text`: tab 标签文字
- `{Array} titles`: 标题数据配置
  - `{String} iconUrl1`: 标题栏左侧图片地址
  - `{String} text`: 标题栏左侧标题文字
  - `{String} IconUrl2`: 标题栏右侧图表地址
  - `{String} enterText`: 标题栏右侧文字
- `{Array} content`: 内容数据配置 -暂无

## 方法：
在组件中添加click事件方法，即可在方法中监听点击tab

## 默认tab配置样式参考首页<正在直播>模块

## 自定义标题栏和内容栏通过 v-slot 插槽实现：：

tab 组件中已经定义 title 和 content 插槽，自定义这两部分需要通过在 template 标签中输入 v-slot:title 或者 v-slot:content 自定义相应部分
例如：
<g-tab :options="tabOption" :tabs="tabList" :titles="titleConfig" :content="contentList" @click="handleTab">
  <template v-slot:title>
    <div>自定义标题部分</div>
  </template>
  <template v-slot:content>
    <div>自定义内容部分</div>
  </template>
</g-tab>

脚本中配置 例如：
<script>
export default {
  data() {
    return {
      tabOption: {
        // 不配置或都为false 则只有tab栏
        hasTitle: true,
        editTitle: true, // hasTitle=true editTitle=false 为默认自带标题框 |||| hasTitle=true editTitle=true   为自定义标题框
        hasContent: true,
        editContent: true, // hasContent=true editContent=false 为默认自带内容框 |||| hasContent=true editContent=true   为自定义内容框
      },
      titleConfig: {  // 自带标题框配置
        iconUrl1: liveIcon, // 左侧图标地址
        text: '正在直播',   // 左侧标题
        IconUrl2: arrow,   // 右侧标题地址
        enterText: '直播大厅', // 右侧标题
        enterUrl: '/videoCenter' // 右侧跳转地址
      },
      contentList: [  // 内容框数据
        { 
          imgUrl: contentImg, // 视频图片地址
          videoUrl: '#',      // 视频跳转地址
          userIcon: contentUser, // 用户头像图标
          userName: '2009', // 用户昵称
          populationIcon: populationIcon, // 人数图标
          populationNum: '32.1万', // 人数显示
          tvIcon: tvIcon // 直播频道图标
        }
      ],
      tabList: [ // tab框数据
        {
          text: '全部', // tab显示的文字
          value: 1     // tab数据
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
    }
  }
}
</script>

## 样式编辑暂不支持 
