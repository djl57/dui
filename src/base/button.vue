<template>
  <a href="javascript:;" class="d_btn" :style="bgColor()">{{ btnText }}</a>
</template>

<script>
export default {
  props: {
    bgcolor: {
      type: String,
      default: '#1AAD19'
    },
    btnText: {
      type: String,
      default: '确定'
    },
    lineHeit: {
      type: Number,
      default: 2.5
    },
    fontSize: {
      type: Number,
      default: 14
    }
  },
  methods: {
    bgColor () {
      return {
        backgroundColor: this.bgcolor,
        lineHeight: this.lineHeit,
        fontSize: this.fontSize + 'px'
      }
    }
  }
}
</script>

<style>
.d_btn {
  position: relative;
  display: block;
  margin: 0 auto;
  padding: 0 5%;
  box-sizing: border-box;
  text-align: center;
  color: #FFFFFF;
  border-radius: 5px;
  overflow: hidden;
}
</style>
