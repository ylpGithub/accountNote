<template>
  <div  class="no-data">
    <mu-icon value="bubble_chart" color="#333"/>
    <div>{{describe}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      describe: {  // 暂无数据的描述
        default: '亲，暂时没有相关数据哦'
      }
    },
    data () {
      return {
      }
    },
    mounted () {
    },
    methods: {
    }
  }
</script>

<style>

</style>
