<template>
  <div class="head_wrap">
    <div class="head_width">
      <span @click="back">返回</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style>
.head_wrap {
  height: 50px;
  line-height: 50px;
  background-color: #eeeeee;
}
.head_width {
  width: 90%;
  margin: auto;
  color: #8B8682;
}
</style>
