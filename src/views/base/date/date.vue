<template>
  <div>
    <Head></Head>
    <input type="date" v-model="date" @change="init"/>
    <input type="month" v-model="month" @change="init"/>
    <input type="week" v-model="week" @change="init"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: '2018-10-10',
      month: '2018-10',
      week: '2018-W12'
    }
  },
  methods: {
    init () {
      console.log(this.date)
      console.log(this.month)
      console.log(this.week)
    }
  }
}
</script>
