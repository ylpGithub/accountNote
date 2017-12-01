import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import routes from './router'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

import store from './store'
import FastClick from 'fastclick'

import './assets/css/main.css'
import './assets/font/material-icons.css' // 引入图标字体

import './assets/themes/theme-light.css' // 选择蓝色主题
import './assets/css/skin_bule.css'

Vue.use(MuseUI)
Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
FastClick.attach(document.body)

const router = new VueRouter({
  routes: [
    ...routes
  ],
  strict: process.env.NODE_ENV !== 'production'
})

router.beforeEach((to, from, next) => {
  // 全局导航钩子中检查 meta 字段
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.token) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

new Vue({
  router,
  store
}).$mount('#app')
