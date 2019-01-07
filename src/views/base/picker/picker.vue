<template>
  <div ref="picker" class="picker_wrap">
    <Head></Head>
    <ul>
      <li v-for="(item, index) in 200" :key="index">{{ index }}</li>
    </ul>

    <div @click="openPicker">
      <Button btnText="点击弹出"></Button>
    </div>
    <div v-show="pickerShow">
      <div class="mask" @click="closePicker">
        <li v-for="(item, index) in 100" :key="index">{{ item }}</li>
      </div>
      <!-- <div class="picker">
        <Picker></Picker>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pickerShow: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initSize()
    })
  },
  methods: {
    openPicker () {
      this.pickerShow = true;
    },
    closePicker () {
      this.pickerShow = false;
    },
    initSize () {
      // let picker = this.$refs.picker;
      // let height = window.screen.height;
      // let width = window.screen.width;
      // picker.style.height = height + 'px';
      // picker.style.width = width + 'px';
    }
  }
}
</script>

<style>
.picker_wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
}
</style>
