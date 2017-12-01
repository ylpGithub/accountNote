<style>
  .calendar-control {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    line-height: 35px;
    letter-spacing: 1px;
    font-size: 1.2rem;
    color: #fff;
    background: #2196f3;
  }
  .calendar-control .calendar-arrow {
    display: inline-block;
    margin: 0 20px;
  }
  .calendar-weekdays {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: 11px;
  }
  .calendar-weekday {
    width: 14.2%;
    flex: 1 0 auto;
    text-align: center;
    line-height: 40px;
    font-size: 1.2rem;
    color: #fff;
  }
  .calendar-days{
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10px;
  }
  .calendar-day {
    position: relative;
    flex: 0 0 auto;
    display: inline-block;
    width: 14.2%;
    margin: 5px 0;
    text-align: center;
    color: #fff;
    height: 35px;
    line-height: 35px;
    font-size: 1rem;
  }
  .calendar-day span{
    display: inline-block;
    width: 35px;
    height: 35px;
  }
  .calendar-day-now span{
    background: #0a6cfb;
    border-radius: 100%;
  }
  .calendar-day-otherMonth span {
    color: #d0c6c6;
  }
  .calendar-day-selected span {
    border-radius: 100%;
    border: 2px solid #fff;
  }
</style>
<template>
  <div id="calendars">
    <div class="calendars">
      <div class="calendar-control" v-if="showType==='y'">
        <div class="calendar-arrow left" @click="prevView"> < </div>
        <div class="calendar-title">
          <span class="calendar-year-title">{{currentDate.year}}年</span>
        </div>
        <div class="calendar-arrow right" @click="nextView"> > </div>
      </div>
      <div class="calendar-control" v-if="showType==='m'">
        <div class="calendar-arrow left" @click="prevView"> < </div>
        <div class="calendar-title">
          <span class="calendar-year-title">{{currentDate.year}}年</span>
          <span class="calendar-month-title">{{currentDate.month}}月</span>
        </div>
        <div class="calendar-arrow right" @click="nextView"> > </div>
      </div>
      <div class="calendar-control" v-if="showType==='m1'">
        <div class="calendar-arrow left" @click="prevView"> < </div>
        <div class="calendar-title">
          <span class="calendar-month-title">{{currentDate.month}}月{{currentDate.startDay}}日~{{currentDate.endDay}}日</span>
        </div>
        <div class="calendar-arrow right" @click="nextView"> > </div>
      </div>
      <div class="calendar-control" v-if="showType==='w'">
        <div class="calendar-arrow left" @click="prevView"> < </div>
        <div class="calendar-title">
          <!--<span class="calendar-year-title">{{currentDate.year}}年</span>-->
          <span class="calendar-month-title">{{currentDate.startDay | formatDate}}</span>
          <span> ~ </span>
          <span class="calendar-date-title">{{currentDate.endDay | formatDate}}</span>
        </div>
        <div class="calendar-arrow right" @click="nextView"> > </div>
      </div>
      <div class="calendar-control" v-if="showType==='d'">
        <div class="calendar-arrow left" @click="prevView"> < </div>
        <div class="calendar-title">
          <span class="calendar-month-title">{{currentDate.year}}年 {{currentDate.month}}月</span>
          <span class="calendar-date-title">{{currentDate.day}}日</span>
        </div>
        <div class="calendar-arrow right" @click="nextView"> > </div>
      </div>
      <div class="calendar-control" v-if="showType==='f'">
        <div id="calendar-arrow-left" class="calendar-arrow left" @click="prevView"> < </div>
        <div class="calendar-title">
          <span class="calendar-year-title">{{currentDate.year}}年</span>
          <span class="calendar-month-title">{{currentDate.month}}月</span>
        </div>
        <div id="calendar-arrow-right" class="calendar-arrow right" @click="nextView"> > </div>
      </div>
    </div>
    <div class="calendar-content" v-if="showType==='f'">
      <div class="calendar-week" style="background: #2196f3">
        <ul class="calendar-weekdays">
          <li v-for="weekDay in weekDays" class="calendar-weekday">{{weekDay}}</li>
        </ul>
        <div class="calendar-days">
          <div class="calendar-day" v-for="day in days"
               :class="{'calendar-day-now ': checkToday(day),
                 'calendar-day-otherMonth': checkOtherMonth(day),
                 'calendar-day-selected': checkSelected(day),
                 'calendar-day-hasSchedule': checkHasSchedule(day)
                 }"  @click="selectDay(day)">
            <span>{{day.getDate()}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {formatDate} from '../../js/filter.js'
  const I18N = {
    'zh-cn': ['日', '一', '二', '三', '四', '五', '六'],
    'en': ['SUN', 'MON', 'TUN', 'WED', 'THU', 'FRI', 'SAT']
  }

  export default {
    props: {
      view: { // 展示'月'或'周'
        type: String,
        'default': 'month'
      },
      showType: {  // 展示日历控制条
        type: String,
        'default': 'w'
      },
      schedules: {}
    },
    data () {
      return {
        i18n: 'zh-cn',
        selected: new Date(),
        startDate: new Date(),
        returnResult: []
      }
    },
    computed: {
      currentDate: {
        get () {
          let curDate = {}
          let result = []
          curDate.year = this.startDate.getFullYear()
          curDate.month = this.startDate.getMonth() + 1
          if (this.showType === 'y') {
            result.push('' + curDate.year)
          } else if (this.showType === 'm' || this.showType === 'm1') {
            curDate.startDay = '01'
            this.startDate.setMonth(curDate.month)
            this.startDate.setDate(0)
            curDate.endDay = this.startDate.getDate()
            let nowMonth = new Date(curDate.year, curDate.month - 1, 1)
            result.push(formatDate(nowMonth, 'yyyyMM'))
          } else if (this.showType === 'w') {
            curDate.day = this.startDate.getDate()
            curDate.startDay = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate() - this.startDate.getDay() + 1)
            curDate.endDay = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate() - this.startDate.getDay() + 7)
            result.push(formatDate(curDate.startDay, 'yyyyMMdd'))
            result.push(formatDate(curDate.endDay, 'yyyyMMdd'))
          } else if (this.showType === 'd') {
            curDate.day = this.startDate.getDate()
            result.push(formatDate(this.startDate, 'yyyyMMdd'))
          }
          this.returnResult = result
          this.$emit('returnResult', this.returnResult)
          return curDate
        }
      },
      weekDays: {  // 生成日历头部星期信息
        get () {
          let weekDayNames = JSON.parse(JSON.stringify(I18N[this.i18n]))
          if (this.startMonday) {
            let sunday = weekDayNames.shift()
            weekDayNames.push(sunday)
          }
          return weekDayNames
        }
      },
      days: {
        get () {
          let days = []
          let daysLen
          let startDay
          let leftPadding
          let startDate
          if (this.view === 'month') {   // 显示一个月的日历
            daysLen = 35
            startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth())
            startDay = startDate.getDay()
          } else {    // 显示一周的日历
            daysLen = 7
            startDate = this.startDate
            startDay = startDate.getDay()
          }
          if (this.startMonday) {
            leftPadding = startDay ? startDay - 1 : 6
          } else {
            leftPadding = startDay
          }

          Array.from({length: leftPadding}, (v, k) => -(k + 1)).reverse().forEach((minus) => {
            days.push(new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + minus))
          })
          days.push(startDate)
          Array.from({length: daysLen - days.length}, (v, k) => k + 1).forEach((plus) => {
            days.push(new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + plus))
          })
          this.returnResult = days
          this.$emit('returnResult', days)
          return days
        }
      }
    },
    created: function () {
    },
    methods: {
      checkToday (day) {   // 检查是不是今天的日期
        let now = new Date()
        return !!(  // 强制转换为布尔型
          day.getFullYear() === now.getFullYear() && day.getMonth() === now.getMonth() && day.getDate() === now.getDate()
        )
      },
      checkOtherMonth (day) {  // 检查是否是别的月份日期
        return day.getMonth() !== this.startDate.getMonth()
      },
      checkSelected (day) {  // 检查是否选中该日期
        return !!(  // 强制转换为布尔型
          day.getFullYear() === this.selected.getFullYear() && day.getMonth() === this.selected.getMonth() && day.getDate() === this.selected.getDate()
        )
      },
      selectDay (day) {  // 选择日期
        this.selected = day
        this.$emit('clickDay', day)
      },
      goToday () { // 回到今天
        this.startDate = new Date()
        this.selected = new Date()
        this.$nextTick(() => {
          this.$emit('today')
        })
      },
      // 判断日期是否有日程 有的话画上圈圈
      checkHasSchedule (day) {
//        if (this.schedules.length === 0) {
//          return
//        }
//        if (!!this.schedules[0].BEGIN_DATE) {
//          for (let i in this.schedules) {
//            let d = this.schedules[i].BEGIN_DATE
//            let end = this.schedules[i].END_DATE
//            let sDate = d.substring(0, 4) + '/' + d.substring(4, 6) + '/' + d.substring(6, 8)
//            let sEndDate = end.substring(0, 4) + '/' + end.substring(4, 6) + '/' + end.substring(6, 8)
//            let date = new Date(sDate)
//            let enddata = new Date(sEndDate)
//            if (day.getTime() === date.getTime() || day.getTime() === enddata.getTime()) {
//              return true
//            }
//          }
//        } else {
//          for (let i in this.schedules) {
//            let d = this.schedules[i].CALENDAR_ID || this.schedules[i].dateing
//            let sDate = d.substring(0, 4) + '/' + d.substring(4, 6) + '/' + d.substring(6, 8)
//            let date = new Date(sDate)
//            if (day.getTime() === date.getTime()) {
//              return true
//            }
//          }
//        }
      },
      prevView () {
        switch (this.showType) {
          case 'y':
            this.startDate = new Date(this.startDate.getFullYear() - 1, 1, 1)
            break
          case 'm':
            this.startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth() - 1, 1)
            break
          case 'm1':
            this.startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth() - 1, 1)
            break
          case 'w':
            this.startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate() - 7)
            break
          case 'd':
            this.startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate() - 1)
            break
          case 'f':
            if (this.view === 'month') {
              this.startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth() - 1, this.startDate.getDate())
            } else {
              this.startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate() - 7)
            }
            break
        }

        this.$nextTick(() => {
          this.$emit('prev')
        })
      },
      nextView () {
        switch (this.showType) {
          case 'y':
            this.startDate = new Date(this.startDate.getFullYear() + 1, 1, 1)
            break
          case 'm':
            this.startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth() + 1, 1)
            break
          case 'm1':
            this.startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth() + 1, 1)
            break
          case 'w':
            this.startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate() + 7)
            break
          case 'd':
            this.startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate() + 1)
            break
          case 'f':
            if (this.view === 'month') {
              this.startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth() + 1, this.startDate.getDate())
            } else {
              this.startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate() + 7)
            }
            break
        }
        console.log('startDate', this.startDate)
        this.$nextTick(() => {
          this.$emit('next')
        })
      }
    },
    activated () {
      this.$emit('returnResult', this.returnResult)
    },
    filters: {
      formatDate (time) {
        var date = new Date(time)
        return formatDate(date, 'yyyy/MM/dd')
      }
    }
  }
</script>
