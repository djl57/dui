<template>
  <div>
    <Head></Head>
    <input type="time" v-model="time" @change="init"/>
    <input type="datetime" v-model="datetime" @change="init"/>
    <input type="datetime-local" v-model="datetimeLlocal" @change="init"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      time: '',
      datetime: '',
      datetimeLlocal: ''
    }
  },
  methods: {
    init () {
      console.log(this.time)
      console.log(this.datetime)
      console.log(this.datetimeLlocal)
    }
  }
}
</script>
