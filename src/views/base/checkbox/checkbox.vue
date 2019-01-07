<template>
  <div>
    <Head></Head>
    <Checkout @on-change="change" :cells="cells" :value="value"></Checkout>
    {{ this.value }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      cells: [
        { cellBdName: '选项一', labelFor: 'select1', inputName: 'select', value: 1 },
        { cellBdName: '选项二', labelFor: 'select2', inputName: 'select', value: 2 },
        { cellBdName: '选项三', labelFor: 'select3', inputName: 'select', value: 3 },
      ],
      value: [true, false, false]
    }
  },
  methods: {
    change (val) {
      this.value = val;
    }
  }
}
</script>
