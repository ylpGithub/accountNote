<style>
  #cu_line{
    position: relative;
    width: 100%;
    height: 250px;
    background: #eee;
  }
  .c-table .mu-table .mu-thead{
    background: #f5f5f5;
  }
  .c-table .mu-table .mu-thead .mu-tr,
  .c-table .mu-table .mu-thead .mu-th{
    height: 40px;
  }
  .c-table .mu-thead .mu-th-wrapper{
    font-size: 16px;
    padding: 0;
    line-height: 40px;
  }
  .c-table tbody .mu-th,
  .c-table tbody .mu-td{
    padding: 5px 0;
    text-align: center;
  }
  .c-table .mu-tr{
    padding: 7px 0;
  }
</style>
<template>
  <div class="position-abt" style="top: 3.1rem;padding-bottom: 120px;overflow-y: auto">
    <div class="c-cal">
      <calendar :showType="showType"
                :schedules="schedules"
                @returnResult="returnResult"></calendar>
      <div id="cu_line"></div>
    </div>
    <div class="c-table">
      <mu-table :selectable=true :showCheckbox=false>
        <mu-thead slot="header">
          <mu-tr>
            <mu-th tooltip="月份">月份</mu-th>
            <mu-th tooltip="收入">收入</mu-th>
            <mu-th tooltip="支出">支出</mu-th>
            <mu-th tooltip="结余">结余</mu-th>
          </mu-tr>
        </mu-thead>
        <mu-tbody>
          <mu-tr v-for="item,index in tableData"  :key="index" :selected="item.selected">
            <mu-td>{{index + 1}}<br><small>11.1-11.30</small></mu-td>
            <mu-td>{{item.name}}</mu-td>
            <mu-td>{{item.status}}</mu-td>
            <mu-td>{{item.status}}</mu-td>
          </mu-tr>
        </mu-tbody>
      </mu-table>
    </div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  import calendar from '../../components/com/calendar.vue'

  export default {
    data () {
      return {
        showType: 'y',
        schedules: [],
        tableData: [
          {
            name: 'John Smith',
            status: 'Employed'
          },
          {
            name: 'Randal White',
            status: 'Unemployed'
          },
          {
            name: 'Stephanie Sanders',
            status: 'Employed'
          },
          {
            name: 'Steve Brown',
            status: 'Employed'
          }
        ]
      }
    },
    components: {
      calendar
    },
    mounted () {
      this.$nextTick(function () {
        this.drawPie('cu_line')
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
            bottom: 20,
            textStyle: {
              fontSize: 16,
              fontFamily: 'Helvetica',
              color: '#bbb'
            }
          },
          legend: {
            orient: 'horizontal',
            x: 'center',
            y: '40',
            data: ['最高气温', '最低气温']
          },
          grid: {
            x: 40,
            y: 80
          },
          xAxis: {
            type: 'category',
            axisLine: {show: false}, // 控制网格线是否显示
            splitLine: {
              show: false
            },
            axisTick: { // 去除y轴上的刻度线
              show: false
            },
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value}k'
            },
            axisLine: {show: false}, // 控制网格线是否显示
            splitLine: {
              show: true
            },
            axisTick: { // 去除y轴上的刻度线
              show: false
            }
          },
          series: [
            {
              name: '最高气温',
              type: 'line',
              data: [11, 11, 15, 13, 12, 13, 10]
            },
            {
              name: '最低气温',
              type: 'line',
              data: [5, 5, 11, 11, 7, 8, 5]
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

