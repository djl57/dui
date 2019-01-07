import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home')
    },
    {
      path: '/button',
      name: 'button',
      component: () => import('@/views/base/button/button')
    },
    {
      path: '/radio',
      name: 'radio',
      component: () => import('@/views/base/radio/radio')
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: () => import('@/views/base/checkbox/checkbox')
    },
    {
      path: '/time',
      name: 'time',
      component: () => import('@/views/base/time/time')
    },
    {
      path: '/date',
      name: 'date',
      component: () => import('@/views/base/date/date')
    },
    {
      path: '/textarea',
      name: 'textarea',
      component: () => import('@/views/base/textarea/textarea')
    },
    {
      path: '/switch',
      name: 'switch',
      component: () => import('@/views/base/switch/switch')
    },
    {
      path: '/select',
      name: 'select',
      component: () => import('@/views/base/select/select')
    },
    {
      path: '/slider',
      name: 'slider',
      component: () => import('@/views/base/slider/slider')
    },
    {
      path: '/imgUploader',
      name: 'imgUploader',
      component: () => import('@/views/base/imgUploader/imgUploader')
    },
    {
      path: '/icons',
      name: 'icons',
      component: () => import('@/views/base/icons/icons')
    },
    {
      path: '/loading',
      name: 'loading',
      component: () => import('@/views/base/loading/loading')
    },
    {
      path: '/loadmore',
      name: 'loadmore',
      component: () => import('@/views/base/loadmore/loadmore')
    },
    {
      path: '/nodata',
      name: 'nodata',
      component: () => import('@/views/base/nodata/nodata')
    },
    {
      path: '/progress',
      name: 'progress',
      component: () => import('@/views/base/progress/progress')
    },
    {
      path: '/sheet',
      name: 'sheet',
      component: () => import('@/views/base/sheet/sheet')
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: () => import('@/views/base/dialog/dialog')
    },
    {
      path: '/picker',
      name: 'picker',
      component: () => import('@/views/base/picker/picker')
    },
    {
      path: '/toast',
      name: 'toast',
      component: () => import('@/views/base/toast/toast')
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: () => import('@/views/base/navbar/navbar')
    },
    {
      path: '/tabbar',
      name: 'tabbar',
      component: () => import('@/views/base/tabbar/tabbar')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/base/search/search')
    },
    {
      path: '/slide',
      name: 'slide',
      component: () => import('@/views/base/slide/slide')
    }
  ]
})
