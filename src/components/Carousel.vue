<template>
  <div class="carousel">
    <div class="wrap">
      <div class="main clearfix">
        <div class="check-left">
          <i class="icon-yduifanhui iconfont"/>
        </div>
        <img :src="imgItem" class="img-item">
        <div class="check-bottom">
          <span :key="item.id" class="dot" v-for="item in imgList"></span>
        </div>
        <div class="check-right">
          <i class="icon-yduiqianjin iconfont"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Carousel extends Vue {
  private imgList = [
    'http://p1.music.126.net/Da21wY8V4HUiNUxSV1Y4Jg==/109951163848202195.jpg',
    'http://p1.music.126.net/o8WLCslgIVykSaK2QmO7tA==/109951163850898172.jpg',
    'http://p1.music.126.net/9hwCql3JuxDSrHXO2W2jlA==/109951163850935772.jpg',
    'http://p1.music.126.net/0m-SPT2k61mHDuQSYPiWKg==/109951163848172301.jpg',
    'http://p1.music.126.net/HWIXMqEjC6vOgvP1-EJ7iA==/109951163850919012.jpg',
    'http://p1.music.126.net/4PNlIUg6klhX2FFfPBTEbg==/109951163848175039.jpg',
    'http://p1.music.126.net/Vrnfq5heqzm7DwQTeJcKUQ==/109951163850906347.jpg',
    'http://p1.music.126.net/eLPa1AISkPAQ7xYvCR6UZg==/109951163850913933.jpg',
    'http://p1.music.126.net/7ZZSG_4Tn1cUM_V8t6Ynuw==/109951163850910454.jpg',
  ];
  private imgItem = this.imgList[0];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/common.scss';
.carousel {
  .wrap {
    height: 336px;
    width: 100%;
    background-color: #cc2200;
    .main {
      margin: 0 auto;
      width: 1100px;
      position: relative;
      .check-left,
      .check-right {
        float: left;
        width: 50px;
        .iconfont {
          font-size: 40px;
          color: rgba(255, 255, 255, 0.5);
          line-height: 336px;
        }
      }
      .check-bottom {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin: 20px;
          display: inline-block;
          background-color: rgba(255, 255, 255, 0.5);
        }
      }
      .img-item {
        float: left;
        width: 1000px;
        height: 336px;
      }
    }
  }
}
</style>
