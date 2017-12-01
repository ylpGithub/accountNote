<style>
  .ct-list{
    padding: 10px;
    border-top: 1px solid #ddd;
  }
  .ct-list:first-child{
    border: none;
  }
  .ct-box{
    height: 88px;
    overflow-y: auto;
    border-radius: 10px;
    background: #ef9595;
  }
  .ct-intro{
    margin-top: 15px;
    text-align: center;
  }
  .ct-circle{
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: #ef9595;
    margin-bottom: 10px;
    text-align: center;
    line-height: 40px;
    display: inline-block;
  }
  .ct-box{
    padding: 8px;
    color: #fff;
  }
  .ct-box ul li{
    line-height: 25px;
  }
  .ct-month{
    display: inline-block;
    width: 30px;
    text-align: right;
  }
  .ct-progress{
    width: 75%;
    display: inline-block;
  }
  .progress{
    height: 12px;
  }
  .progress-num{
    position: absolute;
    left: 100%;
  }
  .progress > span {
    position: relative;
    float: left;
    min-width: 22px;
    height: 12px;
    line-height: 16px;
    text-align: right;
    border-radius: 12px;
  }
  .progress > span:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 5px;
    right: 5px;
    z-index: 1;
    height: 12px;
    background: #fff;
    border-radius: 12px;
  }
  .add-item{
    height: 70px;
    background: #f8f9fe;
    margin: 0 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
    line-height: 70px;
    text-align: center;
  }
</style>
<template>
  <div class="position-abt" style="top: 3.1rem;padding-bottom: 120px;overflow-y: auto">
    <div class="c-cal">
      <calendar :showType="showType"
                :schedules="schedules"
                @returnResult="returnResult"></calendar>
    </div>
    <div class="c-box">
      <mu-list class="ct-list">
        <div class="ct-title">
          <div class="ct-circle"><i class="ct-i">1</i></div>
          <span class="ft-px18">一般</span>
        </div>
        <div class="ct-box">
          <ul>
            <li v-for="da in dataList">
              <span class="ct-month">{{da.month}}月</span>
              <div class="ct-progress">
                <div class="progress">
                  <span :style="{width: da.value + '%'}">
                    <span class="progress-num">{{da.value}}</span></span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="ct-intro">
          <mu-row gutter>
            <mu-col width="33" tablet="33" desktop="35">
              <span class="ft-px16"><b>18笔</b></span>
              <br> <small>累计消费笔数</small>
            </mu-col>
            <mu-col width="33" tablet="33" desktop="35" style="border-left: 1px solid #ddd;border-right: 1px solid #ddd">
              <span class="ft-px16"><b>532</b></span>
              <br> <small>累计消费金额</small>
            </mu-col>
            <mu-col width="33" tablet="33" desktop="35">
              <span class="ft-px16"><b>45.54</b></span>
              <br> <small>月均消费</small>
            </mu-col>
          </mu-row>
        </div>
      </mu-list>
      <mu-list class="ct-list">
        <div class="ct-title">
          <div class="ct-circle"><i class="ct-i">1</i> </div>
        </div>
        <div class="ct-box">
          <ul>
            <li v-for="da in dataList">
              <span class="ct-month">{{da.month}}月</span>
              <div class="ct-progress">
                <div class="progress">
                  <span :style="{width: da.value + '%'}">
                    <span class="progress-num">{{da.value}}</span></span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="ct-intro">
          <mu-row gutter>
            <mu-col width="33" tablet="33" desktop="35">
              <span class="ft-px16"><b>18笔</b></span>
              <br> <small>累计消费笔数</small>
            </mu-col>
            <mu-col width="33" tablet="33" desktop="35" style="border-left: 1px solid #ddd;border-right: 1px solid #ddd">
              <span class="ft-px16"><b>532</b></span>
              <br> <small>累计消费金额</small>
            </mu-col>
            <mu-col width="33" tablet="33" desktop="35">
              <span class="ft-px16"><b>45.54</b></span>
              <br> <small>月均消费</small>
            </mu-col>
          </mu-row>
        </div>
      </mu-list>
      <div class="add-item">
        <span class="ft-px20">+ 添加展示分类</span>
      </div>
    </div>
  </div>
</template>
<script>
  import calendar from '../../components/com/calendar.vue'

  export default {
    data () {
      return {
        showType: 'y',
        schedules: [],
        dataList: [
          {
            month: 11,
            value: 10
          },
          {
            month: 10,
            value: 50
          },
          {
            month: 9,
            value: 100
          },
          {
            month: 8,
            value: 0
          }
        ]
      }
    },
    components: {
      calendar
    },
    mounted () {
    },
    methods: {
      returnResult (val) {
        console.log(val)
      }
    }
  }
</script>

