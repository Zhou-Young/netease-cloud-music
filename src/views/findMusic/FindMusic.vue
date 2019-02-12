<template>
  <div class="findMusic">
    <div class="nav">
      <div class="wrap">
        <ul class="nav-ul">
          <li class="nav-li">
            <router-link to="/findMusic/discover">推荐</router-link>
          </li>
          <li class="nav-li">
            <router-link to="/findMusic/toplist">排行榜</router-link>
          </li>
          <li class="nav-li">
            <router-link to="/findMusic/playlist">歌单</router-link>
          </li>
          <li class="nav-li">
            <router-link to="/findMusic/djradio">主播电台</router-link>
          </li>
          <li class="nav-li">
            <router-link to="/findMusic/artist">歌手</router-link>
          </li>
          <li class="nav-li">
            <router-link to="/findMusic/album">新碟上架</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
  watch: {},
})
export default class FindMusic extends Vue {}
</script>


<style lang="scss">
@import '../../assets/scss/common.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  z-index: 90;
  height: 35px;
  box-sizing: border-box;
  background: #c20c0c;
  border-bottom: 1px solid #a40011;
  .wrap {
    width: 1100px;
    margin: 0 auto;
    .nav-ul {
      float: left;
      margin-left: 164px;
      .nav-li {
        float: left;
        list-style: none;
        line-height: 35px;
        a {
          font-weight: bold;
          color: #ffffff;
          padding: 0 13px;
          margin: 7px 17px 0;
          border-radius: 20px;
          line-height: 21px;
          &.router-link-exact-active {
            background-color: #9b0909;
          }
        }
      }
    }
  }
}
</style>

