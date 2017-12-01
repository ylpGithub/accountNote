<template>
  <div >
    <transition name="transitionName" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="transitionName" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>

    <foot-guide v-if="showFootGuide" v-show="$route.meta.btmNavShow"></foot-guide>
  </div>
</template>

<script>
//  import loading from './components/com/loading'
  import footGuide from './components/footer/footGuide'

  export default {
    name: 'app',
    data () {
      return {
        showFootGuide: false
      }
    },
    created () {
      setTimeout(() => {
        this.showFootGuide = true
      }, 0)
    },
    computed: {
      // 过渡name
      transitionName () {
      }
    },
    components: {
      footGuide
//      ,loading
    },
    methods: {
    },
    watch: {
    }
  }
</script>

