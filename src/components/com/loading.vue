<template>
  <div class="loading-container">
    <div class="load-img" :style="{backgroundPositionY: -(positionY%7)*2.5 + 'rem'}">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        positionY: 0,
        timer: null
      }
    },
    mounted () {
      this.timer = setInterval(() => {
        this.positionY ++
      }, 600)
    },
    beforeDestroy () {
      clearInterval(this.timer)
    }
  }
</script>

<style lang="scss" scoped>
  @keyframes load{
    0%   {transform: translateY(0px);}
    50%  {transform: translateY(-50px);}
    100% {transform: translateY(0px);}
  }
  .loading_container{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  @include wh(2.5rem, 2.5rem);
  }
  .load_img{
  @include wh(100%, 100%);
    background: url(../../assets/img/loading.png) no-repeat 0 0;
    background-size: 2.5rem auto;
    transform: translateY(0px);
    animation: load .6s infinite ease-in-out;
    position: relative;
    z-index: 11;
  }
</style>
