import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    bottomNav: 'account' // 底部导航默认显示
  },
  getters: {
  },
  mutations: {
    setBottomNav (state, value) {
      state.bottomNav = value
    }
  },
  // 异步的数据操作
  actions: {
  }
})
export default store
