<template>
  <div class="home_wrap">
    <ul class="home_navs">
      <li v-for="(item, index) in navs" :key="index" class="home_nav">
        <div class="item_wrap" :style="bgColor(item.bgColor)" @click="into(item.link)">
          <p>{{ item.name }}</p>
          <p>{{ item.nav }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navs: [
        { name: '按钮',          nav: 'button',       link: '/button',    bgColor: '#FFEC8B' },
        { name: '单选',          nav: 'radio',        link: '/radio',     bgColor: '#FFB5C5' },
        { name: '复选',          nav: 'checkbox',     link: '/checkbox',  bgColor: '#FF7F50' },
        { name: '时间选择器',    nav: 'time',         link: '/time',       bgColor: '#EE8262' },
        { name: '日期选择器',    nav: 'date',         link: '/date',       bgColor: '#BFEFFF' },
        { name: '选择器',        nav: 'picker',       link: '/picker',     bgColor: '#89c997' },
        { name: '弹出式菜单',    nav: 'sheet',        link: '/sheet',      bgColor: '#CD96CD' },
        { name: '输入框',        nav: 'textarea',     link: '/textarea',   bgColor: '#8FBC8F' },
        { name: '开关',          nav: 'switch',        link: '/switch',     bgColor: '#4F94CD' },
        { name: '选择',          nav: 'select',        link: '/select',     bgColor: '#5F9EA0' },
        { name: '滑块',          nav: 'slider',        link: '/slider',     bgColor: '#4EEE94' },
        { name: '图片上传',      nav: 'img-uploader', link: '/imgUploader', bgColor: '#6CA6CD' },
        { name: '图标',          nav: 'icons',         link: '/icons',      bgColor: '#90EE90' },
        { name: '加载中',        nav: 'loading',       link: '/loading',    bgColor: '#87CEFA' },
        { name: '上拉加载更多',   nav: 'loadmore',     link: '/loadmore',    bgColor: '#1E90FF' },
        { name: '暂无数据',     nav: 'nodata',        link: '/nodata',      bgColor: '#00CDCD' },
        { name: '进度条',       nav: 'progress',      link: '/progress',    bgColor: '#CDC8B1' },
        { name: '弹窗',         nav: 'dialog',        link: '/dialog',     bgColor: '#63B8FF' },
        { name: '弹出式提示',   nav: 'toast',         link: '/toast',       bgColor: '#8fc320' },
        { name: '顶部选项卡',   nav: 'navbar',        link: '/navbar',      bgColor: '#D8BFD8' },
        { name: '底部选项卡',   nav: 'tabbar',        link: '/tabbar',      bgColor: '#FFD700' },
        { name: '搜索栏',      nav: 'search',         link: '/search',      bgColor: '#DEB887' },
        { name: '轮播',        nav: 'slide',          link: '/slide',      bgColor: '#C1FFC1' },
      ]
    }
  },
  methods: {
    bgColor (bgColor) {
      return {
        backgroundColor: bgColor
      }
    },
    into (link) {
      this.$router.push({
        path: link
      })
    }
  }
}
</script>

<style scoped>
.home_wrap {
  width: 90%;
  margin: 10px auto;
}
.home_navs {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.home_nav {
  width: 19%;
  text-align: center;
  height: 50px;
  padding: 3%;
  line-height: 16px;
  font-size: 14px;
  color: #313131;
}
.item_wrap {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  padding: 5px 3px;
}
</style>

