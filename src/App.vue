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
        <span class="login" v-if="log===false" v-on:click="showModal">登录</span>
        <div class="loging" v-if="log===true">
          <img :src="avatarUrl" @click="showlogout" class="avatar">
          <div @click="logout" class="logout">退出</div>
        </div>
        <input class="search" placeholder="搜索">
      </div>
    </div>
    <router-view/>
    <Login v-if="modal === 'login'" v-on:close="close" v-on:login="login"/>
    <AudioBottom :id="id"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Login from '@/components/Login.vue'; // @ is an alias to /src
import AudioBottom from '@/components/AudioBottom.vue';
import axios from 'axios';
import store from './store';

export default Vue.extend({
  components: {
    Login,
    AudioBottom,
  },
  computed: {
    id() {
      return store.state.id;
    },
  },
  data() {
    return {
      modal: '',
      log: true,
      showOut: false,
      avatarUrl:
        'http://img5.imgtn.bdimg.com/it/u=1248132760,1946083297&fm=26&gp=0.jpg',
    };
  },
  created() {
    sessionStorage.setItem('id', '507815173');
    axios.get('http://localhost:3000/login/status').then(({ data }) => {
      if (!!data.avatarUrl) {
        this.log = true;
        this.avatarUrl = data.avatarUrl;
      }
    });
  },
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
    },
  },
  methods: {
    showModal() {
      // `this` 在方法里指向当前 Vue 实例
      this.modal = 'login';
    },
    close() {
      this.modal = '';
    },
    login(phone: string, password: string) {
      axios
        .get(
          'http://localhost:3000/login/cellphone?phone=' +
            phone +
            '&password=' +
            password,
        )
        .then(({ data }) => {
          this.modal = '';
          this.log = true;
          this.avatarUrl = data.profile.avatarUrl;
        });
    },
    logout() {
      axios.get('http://localhost:3000/logout').then(() => {
        this.log = false;
      });
    },
    showlogout() {
      this.showOut = true;
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
  // text-align: center;
  color: #2c3e50;
  min-width: 1200px;
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
      cursor: pointer;
    }
    .loging {
      float: right;
      position: relative;
      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 15px;
        cursor: pointer;
      }
      &:hover .logout {
        display: block;
      }
      .logout {
        display: none;
        position: absolute;
        top: 100%;
        left: -20px;
        width: 80px;
        height: 30px;
        background-color: #242424;
        color: #ffffff;
        line-height: 30px;
        cursor: pointer;
      }
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
