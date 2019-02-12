<template>
  <div class="login">
    <div class="top">
      <div class="login-phone">手机号登录</div>
      <span class="iconfont icon-guanbijiantou" v-on:click="$emit('close')"></span>
    </div>
    <div class="main">
      <input class="input" placeholder="请输入手机号" type="tel" v-model="phone">
      <input class="input" placeholder="请输入密码" type="password" v-model="password">
      <div class="button-login" v-on:click="$emit('login',phone,password)">登录</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model, Emit } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  private phone = '';
  private password = '';
  @Prop() private close!: () => void;
  @Prop() private login!: () => void;
  // @Prop() private phone!: number;
  // @Prop() private password!: string;
  // @Emit()
  // public changePhone(phone: string) {
  //   this.phone = phone;
  //   console.log(this.phone);
  // }
  // public changePwd(password: string) {
  //   this.password = password;
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login {
  width: 530px;
  height: 300px;
  background-color: #ffffff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  border-radius: 4px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
  border: none;
  .top {
    position: relative;
    z-index: 10;
    border-bottom: 1px solid #191919;
    border-radius: 4px 4px 0 0;
    background: #2d2d2d;
    .login-phone {
      padding-right: 45px;
      margin: 0;
      height: 38px;
      line-height: 38px;
      padding-left: 18px;
      border-radius: 4px 4px 0 0;
      font-weight: bold;
      font-size: 14px;
      color: #fff;
      background-position: 50% 0;
    }
    .iconfont {
      position: absolute;
      right: 0;
      top: 0;
      line-height: 35px;
      margin-right: 20px;
      color: #ffffff;
    }
  }
  .main {
    position: relative;
    // height: 260px;
    .input {
      display: block;
      width: 222px;
      height: 30px;
      margin: 40px auto 0;
      padding: 5px 6px 6px;
      border: 1px solid #cdcdcd;
      border-radius: 2px;
      line-height: 30px;
    }
    .button-login {
      width: 222px;
      height: 30px;
      background-color: #3b79ec;
      color: #ffffff;
      border-radius: 4px;
      line-height: 30px;
      margin: 40px auto 0;
    }
  }
}
</style>
