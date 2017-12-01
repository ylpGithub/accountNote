<style>
  .r-tit{
    border-bottom: 1px solid #eee;
    padding-top: 5px;
    line-height: 0.6;
    z-index: 2;
    background: #fff;
  }
  .tab-title ul li{
    width: 25%;
    display: inline-block;
    font-size: 1.2rem;
    padding-top: 10px;
    line-height: 35px;
    text-align: center;
  }
  .tab-title ul li.active{
    border-bottom: 1px solid #2196f3;
    color: #2196f3;
  }
</style>
<template>
  <div>
    <div class="r-tit fixed-top">
      <mu-row gutter>
        <mu-col width="20" tablet="25" desktop="25"></mu-col>
        <mu-col width="60" tablet="50" desktop="50">
          <div class="tab-title">
            <ul>
              <li v-for="(tab,index) in tabs" @click="toggle(index ,tab.view)" :class="{active:active==index}">
                {{tab.type}}
              </li>
            </ul>
          </div>
        </mu-col>
        <mu-col width="20" tablet="25" desktop="25"></mu-col>
      </mu-row>
    </div>
    <div>
      <component :is="currentView"></component>
    </div>
  </div>
</template>
<script>
  import classify from './classify'
  import current from './current'
  import contrast from './contrast'
  import member from './member'

  export default {
    data () {
      return {
        active: 0,
        currentView: classify,
        tabs: [
          {
            type: '分类',
            view: classify
          },
          {
            type: '趋势',
            view: current
          },
          {
            type: '对比',
            view: contrast
          },
          {
            type: '成员',
            view: member
          }
        ]
      }
    },
    methods: {
      toggle (i, v) {
        this.active = i
        this.currentView = v
      }
    }
  }
</script>
