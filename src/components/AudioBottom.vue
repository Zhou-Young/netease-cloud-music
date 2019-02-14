<template>
  <div class="AudioBottom">
    <div class="wrap">
      <div class="control clearfix">
        <i class="iconfont icon-yduishangyiqu last"/>
        <i :class="[iconPlay]" @click="playMusic" class="iconfont play"/>
        <i class="iconfont icon-yduixiayiqu next"/>
      </div>
      <div class="content clearfix">
        <img
          class="coverImg"
          src="http://p2.music.126.net/hDo0S_gPxpNaPJXE98fS8w==/109951163826485303.jpg"
        >
        <div class="content-right">
          <div class="info">
            <span class="title">歌名</span>
            <span class="author">作者</span>
          </div>
          <div>
            <div class="bar">
              <div :style="{width:width}" class="pre"></div>
              <div :style="{left:width}" @mousedown="dotDrop" class="dot" ref="dot"></div>
            </div>
            <span>2:11/3:30</span>
          </div>
        </div>
      </div>
      <div class="option clearfix">
        <i class="iconfont icon-yinliang"/>
        <i class="iconfont icon-yduifenxiang1"/>
        <i class="iconfont icon-zengjia"/>
        <i class="iconfont icon-xihuan"/>
        <i class="iconfont icon-mulu"/>
      </div>
    </div>
    <audio ref="music">
      <source src="https://music.163.com/song/media/outer/url?id=445546453.mp3" type="audio/mpeg">
    </audio>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model, Emit } from 'vue-property-decorator';

@Component
export default class AudioBottom extends Vue {
  private iconPlay = 'icon-iconset0481';
  private isDrag = false;
  private width = '30%';
  @Prop() private playCount!: number;
  @Prop() private coverImgUrl!: string;
  @Prop() private name!: string;
  @Prop() private id!: string;
  private created() {
    const dot: any = this.$refs.dot;
    document.onmousemove = () => {
      if (this.isDrag == true) {
        console.log('???');
        // this.width = 70;
      }
    };
    document.onmouseup = () => {
      this.isDrag = false;
    };
  }
  private dotDrop() {
    this.isDrag = true;
    console.log('..');
  }
  private playMusic() {
    const audio: any = this.$refs.music;

    if (this.iconPlay === 'icon-iconset0481') {
      audio.play();
      this.iconPlay = 'icon-zanting1';
    } else {
      audio.pause();
      this.iconPlay = 'icon-iconset0481';
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/common.scss';
.AudioBottom {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: #cccccc;
  width: 100%;
  height: 50px;
  .wrap {
    width: 980px;
    margin: 0 auto;
  }
  .control {
    width: 137px;
    padding: 6px 0 0 0;
    float: left;
    margin-left: 10px;
    .last,
    .next {
      float: left;
      font-size: 28px;
      margin-right: 8px;
      margin-top: 5px;
    }
    .play {
      font-size: 36px;
      float: left;
      margin-right: 8px;
    }
  }
  .content {
    float: left;
    margin-top: 8px;
    .coverImg {
      width: 35px;
      height: 35px;
      border-radius: 4px;
      float: left;
    }
    .content-right {
      margin-left: 45px;
      .info {
        text-align: left;
        margin-top: -2px;
        .title {
          margin-right: 5px;
        }
      }
      .bar {
        margin-top: 5px;
        width: 490px;
        height: 9px;
        border-radius: 5px;
        background-color: #333333;
        float: left;
        margin-right: 5px;
        position: relative;
        .pre {
          // width: 100px;
          height: 100%;
          border-radius: 5px;
          background-color: #cc2200;
        }
        .dot {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          border: solid 5px #ffffff;
          position: absolute;
          // left: 90px;
          top: -3px;
          margin-left: -10px;
        }
      }
    }
  }
  .option {
    float: left;
    line-height: 50px;
    margin-left: 20px;
    .iconfont {
      margin: 0 8px;
      font-size: 22px;
      font-size: 800;
    }
  }
}
</style>
