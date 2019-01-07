// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Head from '@/views/base/head/head'
import Button from '@/base/button'
import Radio from '@/base/radio'
import Checkout from '@/base/checkout'
import Picker from '@/base/picker'
import LoadMore from '@/base/loadmore'
Vue.component('Head', Head)
Vue.component('Button', Button)
Vue.component('Radio', Radio)
Vue.component('Checkout', Checkout)
Vue.component('Picker', Picker)
Vue.component('LoadMore', LoadMore)
import './assets/css/common.css'
import './assets/style.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
