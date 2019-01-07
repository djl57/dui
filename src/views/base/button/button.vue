<template>
  <div>
    <Head></Head>
    <div class="d_tabs">
      <div class="d_tab">
        <p class="d_tt">默认按钮：</p>
        <div class="btn_default">
          <Button></Button>
        </div>
      </div>
      <div class="d_tab">
        <p class="d_tt">自定义按钮文字：</p>
        <div class="btn_default">
          <Button :btnText="btnText"></Button>
        </div>
      </div>
      <div class="d_tab">
        <p class="d_tt">自定义按钮颜色：</p>
        <div class="btn_default">
          <Button :bgcolor="bgcolor"></Button>
        </div>
      </div>
      <div class="d_tab">
        <p class="d_tt">自定义字体大小：</p>
        <div class="btn_default">
          <Button :fontSize="fontSize"></Button>
        </div>
      </div>
      <div class="d_tab">
        <p class="d_tt">自定义按钮高度：</p>
        <div class="btn_default">
          <Button :lineHeit="lineHeit"></Button>
        </div>
      </div>
      <div class="d_tab">
        <p class="d_tt">按钮宽度由包裹的div宽度决定：</p>
        <div class="btn_div">
          <Button></Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      btnText: '取消',
      bgcolor: '#E64340',
      fontSize: 16,
      lineHeit: 1.5
    }
  }
}
</script>

<style>
.btn_default {
  width: 50%;
}
.btn_div {
  width: 80%;
}
</style>
