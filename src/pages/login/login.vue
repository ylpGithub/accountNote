<template>
  <div>
    <div class="login"></div>
    <div class="login-form position-abt" id="login" >
      <mu-text-field hintText="请输入手机号码或者邮箱" hintTextClass="hintText" icon="person" v-model="user_code"/>
      <br/>
      <mu-text-field hintText="请输入密码" hintTextClass="hintText" icon="lock" v-model="pwd" type="password"/>
      <br/>
      <div class="pd-l20">
        <div class="text-right" ><a>修改密码</a></div>
        <mu-raised-button labelClass="login-btn" label="登录" fullWidth @click="loginOn" />
        <br/>
      </div>
    </div>
    <div class="position-abt btm-line">
      <a class="position-abt zc-hf" >注册账号</a>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user_code: '',
        pwd: ''
      }
    },
    activated () {
      // window.location.reload();
    },
    methods: {
      loginOn () {
        console.log(this.user_code, this.pwd)
        this.api.login({TRD_NAME: this.user_code, TRD_PWD: this.pwd})
          .then(function (res) {
          })
          .catch(function (err) {
            console.log(err)
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-form .mu-raised-button {
    background: #6c89f7;
    height: 40px;
    border-radius: 100px;
    margin-top: 30px;
    color: #fff;
  }
  .btm-line{
    top: auto;
    bottom: 35px;
    width: 100%;
    height: 1px;
    background-color: #ddd;
  }
  .zc-hf{
    display: inline-block;
    width: 100px;
    background: #fff;
    z-index: 100;
    top: -10px;
    margin: 0 auto;
    text-align: center;
  }
</style>
