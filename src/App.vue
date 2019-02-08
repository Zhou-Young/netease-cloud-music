<template>
  <div id="app">
    <div id="nav">
      <div class="wrap">
        <span class="logo">网易云音乐</span>
        <ul class="nav-ul">
          <li class="nav-li">
            <router-link to="/findMusic">发现音乐</router-link>
          </li>
          <li class="nav-li">
            <router-link to="/myMusic">我的音乐</router-link>
          </li>
          <li class="nav-li">
            <router-link to="/friends">朋友</router-link>
          </li>
          <li class="nav-li">
            <router-link to="/mall">商城</router-link>
          </li>
          <li class="nav-li">
            <router-link to="/musician">音乐人</router-link>
          </li>
          <li class="nav-li">
            <router-link to="/download">下载客户端</router-link>
          </li>
        </ul>
        <span class="login">登录</span>
        <input class="search" placeholder="搜索">
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
    },
  },
});
</script>

<style lang="scss">
@import './assets/scss/common.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  position: relative;
  z-index: 1000;
  height: 70px;
  box-sizing: border-box;
  background: #242424;
  border-bottom: 1px solid #000;
  .wrap {
    width: 1100px;
    margin: 0 auto;
    .logo {
      line-height: 69px;
      color: #ffffff;
      font-size: 28px;
      margin-right: 20px;
      float: left;
    }
    .nav-ul {
      float: left;
      height: 70px;
      .nav-li {
        float: left;
        list-style: none;
        a {
          font-weight: bold;
          color: #ffffff;
          line-height: 70px;
          display: inline-block;
          padding: 0 20px;
          position: relative;

          &.router-link-active {
            background-color: #000;
            &::before {
              content: '';
              width: 0;
              height: 0;
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              bottom: 0;
              border-left: solid 6px transparent;
              border-bottom: solid 6px #c20c0c;
              border-right: solid 6px transparent;
            }
          }
        }
      }
    }
    .login {
      float: right;
      color: #ffffff;
      line-height: 70px;
    }
    .search {
      float: right;
      margin-top: 19px;
      background-position: 0 -99px;
      background-color: #fff;
      border-radius: 32px;
      width: 158px;
      height: 32px;
      border: none;
      padding: 0 10px;
      margin-right: 20px;
    }
  }
}
</style>
