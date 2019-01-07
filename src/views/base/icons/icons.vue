<template>
  <div>
    <Head></Head>
    <div>
      <ul class="d_tabs">
        <li v-for="(item, index) in icons" :key="index" class="d_tab">
          <i :class="item.iconClass" class="icons_item_i" :style="iconStyle(item.iconColor)"></i>
          <span class="icons_item_span">{{ item.iconName }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      icons: [
        { iconClass: 'icon_check_yes1', iconName: '选择', iconColor: '#09BB07' },
        { iconClass: 'icon_check_yes2', iconName: '成功', iconColor: '#09BB07' },
        { iconClass: 'icon_check_yes3', iconName: '选择', iconColor: '#09BB07' },
        { iconClass: 'icon_check_no', iconName: '没选择', iconColor: '#DFDFDF' },
        { iconClass: 'icon_prompt', iconName: '提示', iconColor: '#10AEFF' },
        { iconClass: 'icon_prompt2', iconName: '提示', iconColor: '#10AEFF' },
        { iconClass: 'icon_prompt3', iconName: '提示', iconColor: '#10AEFF' },
        { iconClass: 'icon_err', iconName: '普通警告', iconColor: '#FFBE00' },
        { iconClass: 'icon_err', iconName: '强烈警告', iconColor: '#F76260' },
        // { iconClass: 'icon_add', iconName: '增加', iconColor: '' },
        // { iconClass: 'icon_add2', iconName: '增加', iconColor: '' },
        // { iconClass: 'icon_add3', iconName: '增加', iconColor: '' },
        { iconClass: 'icon_switch_off', iconName: '开关', iconColor: '#DFDFDF' },
        { iconClass: 'icon_switch_on', iconName: '开关', iconColor: '#1AAD19' },
        { iconClass: 'icon_arrow_up', iconName: '上', iconColor: '#B2B2B2' },
        { iconClass: 'icon_arrow_dowm', iconName: '下', iconColor: '#B2B2B2' },
        { iconClass: 'icon_arrow_left', iconName: '左', iconColor: '#B2B2B2' },
        { iconClass: 'icon_arrow_right', iconName: '右', iconColor: '#B2B2B2' },
        { iconClass: 'icon_warn', iconName: '警告', iconColor: '#F76260' },
        { iconClass: 'icon_warn2', iconName: '警告', iconColor: '#F76260' },
        { iconClass: 'icon_search', iconName: '搜索', iconColor: '#B2B2B2' },
        { iconClass: 'icon_trash', iconName: '删除', iconColor: '' },
        { iconClass: 'icon_trash2', iconName: '删除', iconColor: '' },
      ]
    }
  },
  methods: {
    iconStyle (color) {
      return {
        color: color
      }
    }
  }
}
</script>

<style>
.icons_item_i {
  font-size: 100px;
  vertical-align: middle;
  padding-right: 20px;
}
.icons_item_span {
  vertical-align: middle;
  font-size: 20px;
  color: #333;
}
</style>
