<style>
  .user-c{
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background: #f5f5f5;
    padding-bottom: 55px;
  }
  .u-more{
    height: 50px;
    text-align: center;
    font-size: 20px;
    line-height: 50px;
    background: #fff;
    color: #8d5f50;
  }
  .user-c .mu-list{
    margin-bottom: 20px;
    background: #fff;
    padding: 0;
  }
  .user-c .mu-list .mu-item{
    border-top: 1px solid #eee;
    min-height: 55px;
  }
</style>
<template>
  <div class="user-c">
    <div class="u-more"><b>更多</b></div>
    <mu-list class="u-head">
      <mu-list-item title="Mike Li" describeText="你以坚持记账1231天">
        <mu-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
        <mu-icon value="navigate_next" slot="right"/>
      </mu-list-item>
    </mu-list>
    <mu-list class="u-list">
      <mu-list-item title="口袋社区" afterText="给自己的11月作总结吧">
        <mu-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
        <mu-icon value="navigate_next" slot="right"/>
      </mu-list-item>
    </mu-list>
    <mu-list class="u-list">
      <mu-list-item title="我要借钱">
        <mu-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
        <mu-icon value="navigate_next" slot="right"/>
      </mu-list-item>
      <mu-list-item title="主题皮肤">
        <mu-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
        <mu-icon value="navigate_next" slot="right"/>
      </mu-list-item>
      <mu-list-item title="提醒">
        <mu-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
        <mu-icon value="navigate_next" slot="right"/>
      </mu-list-item>
    </mu-list>
    <mu-list class="u-list">
      <mu-list-item title="设置">
        <mu-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
        <mu-icon value="navigate_next" slot="right"/>
      </mu-list-item>
      <mu-list-item title="用户反馈">
        <mu-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
        <mu-icon value="navigate_next" slot="right"/>
      </mu-list-item>
      <mu-list-item title="关于我们">
        <mu-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
        <mu-icon value="navigate_next" slot="right"/>
      </mu-list-item>
    </mu-list>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>
