<style>
  #cl_pie{
    position: relative;
    width: 100%;
    height: 280px;
    background: #eee;
  }
  .c-list .mu-list:first-child{
    border-top: 1px solid #ddd;
  }
  .c-list .mu-list{
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #ddd;
  }
  .c-list .mu-item-title{
    font-size: 1rem;
    color: #928c8c;
    font-weight: bold;
  }
  .c-power{
    position: absolute;
    left: 160px;
    top: 17px;
    font-size: 1rem;
    font-weight: 600;
    z-index: 99;
  }
</style>
<template>
  <div class="position-abt" style="top: 3.1rem;padding-bottom: 120px;overflow-y: auto">
    <div class="c-pie">
      <calendar :showType="showType"
                :schedules="schedules"
                @returnResult="returnResult"></calendar>
      <div id="cl_pie"></div>
    </div>
    <div class="c-list">
      <mu-list>
        <mu-list-item class="c-li" title="餐饮" describeText="77.1%" describeTextClass="c-power" afterText="1231">
          <mu-avatar src="/img/loading.png" slot="leftAvatar"/>
        </mu-list-item>
      </mu-list>
      <mu-list>
        <mu-list-item class="c-li" title="交通" describeText="77.1%" describeTextClass="c-power" afterText="1231">
          <mu-avatar src="/logo.png" slot="leftAvatar"/>
        </mu-list-item>
      </mu-list>
      <mu-list>
        <mu-list-item class="c-li" title="餐饮" describeText="77.1%" describeTextClass="c-power" afterText="1231">
          <mu-avatar src="/img/loading.png" slot="leftAvatar"/>
        </mu-list-item>
      </mu-list>
      <mu-list>
        <mu-list-item class="c-li" title="交通" describeText="77.1%" describeTextClass="c-power" afterText="1231">
          <mu-avatar src="/logo.png" slot="leftAvatar"/>
        </mu-list-item>
      </mu-list>
    </div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  import calendar from '../../components/com/calendar.vue'

  export default {
    data () {
      return {
        showType: 'm1',
        schedules: []
      }
    },
    components: {
      calendar
    },
    mounted () {
      this.$nextTick(function () {
        this.drawPie('cl_pie')
      })
    },
    methods: {
      drawPie (id) {
        this.chart = echarts.init(document.getElementById(id))
        this.chart.setOption({
          title: {
            text: '默认账本',
            left: 'center',
            top: 15,
            bottom: 10,
            textStyle: {
              fontSize: 16,
              fontFamily: 'Helvetica',
              color: '#bbb'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          graphic: [
            {
              type: 'text',
              left: 'center',
              top: '110',
              style: {
                text: '总支出 \r\n',
                textAlign: 'center',
                fill: '#000',
                fontSize: 18,
                height: 30
              }
            },
            {
              type: 'text',
              left: 'center',
              top: '145',
              style: {
                text: '12312412',
                textAlign: 'center',
                fill: '#000',
                fontSize: 20,
                fontWeight: 600,
                height: 30
              }
            },
            {
              type: 'text',
              left: 'center',
              top: '180',
              style: {
                text: '123',
                textAlign: 'center',
                fill: '#000',
                fontSize: 18,
                height: 30
              }
            }
          ],
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '70%'],
              center: ['50%', '55%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
              ]
            }
          ]
        })
      },
      returnResult (val) {
        console.log(val)
      }
    }
  }
</script>

