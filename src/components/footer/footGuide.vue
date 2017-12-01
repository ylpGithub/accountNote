<template>
  <div class="footer">
    <mu-paper>
      <mu-bottom-nav :value="bottomNav">
        <mu-bottom-nav-item value="asset" title="资产" icon="home" href="#/asset"/>
        <mu-bottom-nav-item value="report" title="报表" icon="favorite" href="#/report"/>
        <mu-bottom-nav-item value="account" title="记账" icon="book" href="#/account" />
        <mu-bottom-nav-item value="manage" title="理财" icon="location_on" href="#/manage" />
        <mu-bottom-nav-item value="me" title="我" icon="person" href="#/me" />
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    activated () {
      // window.location.reload();
    },
    computed: {
      bottomNav () {
        // 防止刷新页面时高亮错误，setBottomNav要在store里面定义，bottomNav是个全局变量
        this.$store.commit('setBottomNav', this.$route.path.split('/')[1])
        return this.$store.state.bottomNav
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
</style>
