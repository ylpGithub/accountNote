<style>
  .ma-p .mu-tabs{
    width: 180px;
    height: 30px;
    margin: 12px auto;
    border-radius: 15px;
    background-color: #fff;
  }
  .tab-b{
    border-bottom: 1px solid #ddd;
  }
  .tab-b .mu-tab-text{
    min-height: 30px;
    padding: 0;
    line-height: 30px;
  }
  .tab-b .mu-tab-link{
    min-height: 35px;
    padding: 0;
    background: none;
    border: 1px solid #8d5f50;
    color: #8d5f50;
  }
  .tab-b .mu-tab-link-highlight{
    display: none;
  }
  .l-tab{
    border-radius: 12px 0 0 12px;
  }
  .r-tab{
    border-radius: 0 12px 12px 0;
  }
  .tab-b .mu-tab-active{
    background: #8d5f50;
    color: #fff;
  }
  .ma-swiper .swiper-slide{
    width: 100%;
  }
</style>
<template>
  <div class="ma-p">
    <div class="tab-b">
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="tab1" title="口袋财富" class="l-tab" />
        <mu-tab value="tab2" title="理财返利" class="r-tab"/>
      </mu-tabs>
    </div>
    <div v-if="activeTab === 'tab1'">
      <!--<div class="swiper-box" ref="swiperBox">-->
        <!--<swiper class="box-container" :options="swiperOption"  ref="mySwiper">-->
          <!--&lt;!&ndash; 这部分放你要渲染的那些内容 &ndash;&gt;-->
          <!--<swiper-slide :key="">-->
            <!--<img class="swiper-image" :src="" alt="swiper-image">-->
          <!--</swiper-slide>-->
          <!--&lt;!&ndash; 这是轮播的小圆点 &ndash;&gt;-->
          <!--<div class="swiper-pagination" slot="pagination"></div>-->
          <!--<div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>-->
          <!--<div class="swiper-button-next swiper-button-white" slot="button-next"></div>-->
        <!--</swiper>-->
      <!--</div>-->
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <swiper-slide>I'm Slide 6</swiper-slide>
        <swiper-slide>I'm Slide 7</swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
      </swiper>
      <div></div>
    </div>
    <div v-if="activeTab === 'tab2'">
    </div>
  </div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data () {
      return {
        activeTab: 'tab1',
        swiperOption: {
          notNextTick: true,
          pagination: '.swiper-pagination',
          slidesPerView: 'auto',
          centeredSlides: true,
          paginationClickable: true,
          spaceBetween: 30,
          onSlideChangeEnd: swiper => {
            this.page = swiper.realIndex + 1
            this.index = swiper.realIndex
          }
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted () {
      // 这边就可以使用swiper这个对象去使用swiper官网中的那些方法
      this.swiper.slideTo(0, 0, false)
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      }
    }
  }
</script>
