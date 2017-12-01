<style>
  .a-body .mu-appbar{
    border: 1px solid #eee;
  }
  .a-body .mu-item-wrapper .mu-item-title{
    font-size: 20px;
  }
  .asset-box{
    position: absolute;
    top: 105px;
    bottom: 65px;
    right: 0;
    left: 0;
    overflow-y: auto;
  }
  .a-tit h3{
    text-align: center;
    font-weight: 100;
  }
  .a-zf{
    margin: 15px 15px 0 15px;
    padding: 10px 20px;
    border: 1px solid #bbb;
    border-radius: 5px;
    background: #f7f7ff;
  }
  .c-tit{
    color: #835e4c;
  }
  .a-content .mu-list{
    padding: 0;
  }
  .a-content .a-li{
    margin: 15px;
    border: 1px solid #eee;
    border-radius: 10px;
  }
  .a-li .mu-item-text,
  .a-li .mu-item-after{
    color: #fff !important
  }
  .a-li .mu-item-after{
    font-size: 16px;
  }
  .a-li .mu-flex-row{
    height: 55px;
  }
  .cash-back{
    background: #57c0ed;
  }
  .card-back{
    background: #73afe3;
  }
  .ys-back{
    background: #57c0ed;
  }
  .invest-back{
    background: #f3a97c;
  }
  .xy-back{
    background: #69c8c2;
  }
  .yf-back{
    background: #ef9dcb;
  }
  .add-back{
    background: #f7f7ff;
  }
</style>
<template>
  <div>
    <div class="a-body position-abt">
      <mu-appbar title="Title" titleClass="a-tit">
        <h3>我&nbsp;的</h3>
      </mu-appbar>
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="tab1" title="资产"/>
        <mu-tab value="tab2" title="负债"/>
      </mu-tabs>
    </div>
    <div class="asset-box" v-if="activeTab == 'tab1'">
      <div class="a-zf">
        <mu-flexbox>
          <mu-flexbox-item class="flex-demo text-left">
            <span class="ft-px20 c-tit"><b>资产</b></span>
          </mu-flexbox-item>
          <mu-flexbox-item class="flex-demo text-right">
            <span class="ft-px20 c-tit">30000</span>
            <br>
            <span>净资产：28000</span>
          </mu-flexbox-item>
        </mu-flexbox>
      </div>
      <div class="a-content">
        <mu-list>
          <mu-list-item  title="现金" titleClass="color-white" afterText="29000" describeText="现金余额" class="a-li cash-back">
            <mu-avatar icon="folder" slot="leftAvatar"/>
          </mu-list-item>
          <mu-list-item title="存蓄卡" titleClass="color-white" afterText="2000" describeText="储蓄卡余额" class="a-li card-back">
            <mu-avatar icon="folder" slot="leftAvatar"/>
          </mu-list-item>
          <mu-list-item title="应收账" titleClass="color-white" afterText="0" describeText="别人欠我的钱" class="a-li ys-back">
            <mu-avatar icon="folder" slot="leftAvatar"/>
          </mu-list-item>
          <mu-list-item title="投资中心" titleClass="color-white" afterText="0" class="a-li invest-back">
            <mu-avatar icon="folder" slot="leftAvatar"/>
          </mu-list-item>
          <mu-list-item title="添加账户" class="a-li add-back">
            <mu-avatar icon="folder" slot="leftAvatar"/>
          </mu-list-item>
        </mu-list>
      </div>
    </div>
    <div class="asset-box" v-if="activeTab == 'tab2'">
      <div class="a-zf">
        <mu-flexbox>
          <mu-flexbox-item class="flex-demo text-left">
            <span class="ft-px20 c-tit"><b>负债</b></span>
          </mu-flexbox-item>
          <mu-flexbox-item class="flex-demo text-right">
            <span class="ft-px20 c-tit">1000.0</span>
            <br>
            <span>&nbsp;</span>
          </mu-flexbox-item>
        </mu-flexbox>
      </div>
      <div class="a-content">
        <mu-list>
          <mu-list-item title="信用卡" titleClass="color-white" afterText="1000" describeText="未设置信用额度" class="a-li xy-back">
            <mu-avatar icon="folder" slot="leftAvatar"/>
          </mu-list-item>
          <mu-list-item title="应付账" titleClass="color-white" afterText="30000" describeText="我欠别人的钱" class="a-li yf-back">
            <mu-avatar icon="folder" slot="leftAvatar"/>
          </mu-list-item>
          <mu-list-item title="添加账户" class="a-li add-back">
            <mu-avatar icon="folder" slot="leftAvatar"/>
          </mu-list-item>
        </mu-list>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'asset',
    data () {
      return {
        activeTab: 'tab1'
      }
    },
    activated: {
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      }
    }
  }
</script>

