<template>
  <div class="playItem">
    <div class="music">
      <img :src="coverImgUrl" class="pic">
      <div class="bottom">
        <span class="count">{{playCount}}</span>
        <i class="play iconfont icon-iconset0481"></i>
      </div>
    </div>
    <div class="desc">{{name}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model, Emit } from 'vue-property-decorator';

@Component
export default class PlayItem extends Vue {
  @Prop() private playCount!: number;
  @Prop() private coverImgUrl!: string;
  @Prop() private name!: string;
  @Prop() private id!: string;
}
</script>

<style scoped lang="scss">
@import '../assets/scss/common.scss';
.playItem {
  width: 142px;
  height: 188px;
  float: left;
  overflow: hidden;
  margin: 0 0 30px 40px;
  &:first-child {
    margin-left: 0;
  }
  &:nth-child(5) {
    margin-left: 0;
  }
  .music {
    position: relative;
    width: 142px;
    height: 142px;
    border: solid rgba(0, 0, 0, 0.3) 1px;
    .pic {
      width: 140px;
      height: 140px;
    }
    .bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 142px;
      height: 27px;
      color: #ccc;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 0 10px;
      border-top: solid 1px #222222;
      margin: -1px;
      .count {
        float: left;
        line-height: 27px;
      }
      .play {
        float: right;
        line-height: 27px;
        font-weight: 800;
        cursor: pointer;
        &:hover {
          color: #ffffff;
        }
      }
    }
  }
  .desc {
    color: #000;
    font-weight: 600px;
    text-align: left;
  }
}
</style>
