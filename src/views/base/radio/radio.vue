<template>
  <div>
    <Head></Head>
    <div class="radio_radio">
      <Radio @on-change="change" :value="value" :cells="cells"></Radio>
    </div>
    {{ value }}
    <!-- <div class="radio_btn" @click="showValue">
      <Button :btnText="btnText"></Button>
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 1,
      cells: [
        { cellBdName: '北京', labelFor: 'option1', inputName: 'option', value: 1 },
        { cellBdName: '上海', labelFor: 'option2', inputName: 'option', value: 2 },
        { cellBdName: '杭州', labelFor: 'option3', inputName: 'option', value: 3 }
      ],
      btnText: '打印所选value的值'
    }
  },
  methods: {
    change (val) {
      this.value = val
    },
    showValue () {
      console.log('this.value', this.value)
    }
  }
}
</script>

<style>
.radio_radio {
  width: 100%;
  margin: 10px 0;
}
.radio_btn {
  width: 50%;
  margin: auto;
}
</style>
