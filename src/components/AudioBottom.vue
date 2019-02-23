<template>
  <div class="AudioBottom">
    <div class="wrap">
      <div class="control clearfix">
        <i class="iconfont icon-yduishangyiqu last"/>
        <i :class="[iconPlay]" @click="playMusic" class="iconfont play"/>
        <i class="iconfont icon-yduixiayiqu next"/>
      </div>
      <div class="content clearfix">
        <img :src="musicInfo.al.picUrl" class="coverImg">
        <div class="content-right">
          <div class="info">
            <span class="title">{{musicInfo.name}}</span>
            <span class="author">{{musicInfo.ar[0].name}}</span>
          </div>
          <div>
            <div @click="clickBar" class="bar" ref="bar">
              <div :style="{width:width}" class="pre"></div>
              <div :style="{left:width}" @mousedown="dotDrop" class="dot" ref="dot"></div>
            </div>
            <span>{{currentTime}}/{{totalTime}}</span>
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
    <audio :src="'https://music.163.com/song/media/outer/url?id='+id+'.mp3'" ref="music"></audio>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Model,
  Emit,
  Watch,
} from 'vue-property-decorator';
import axios from 'axios';
import * as utils from '@/utils/utils';
import store from '@/store';

@Component
export default class AudioBottom extends Vue {
  private iconPlay = 'icon-iconset0481';
  private isDrag = false;
  private wid = 0;
  private width = this.wid + '%';
  private currentX = 0;
  private musicInfo = {};
  private totalTime = '0:00';
  private currentTime = '0:00';
  private Timer: any = {};
  private seconds = 0;
  private isplay = false;
  private musicUrl =
    'https://music.163.com/song/media/outer/url?id=507815173.mp3';
  // @Prop() private playCount!: number;
  // @Prop() private coverImgUrl!: string;
  // @Prop() private name!: string;
  @Prop() private id!: string;
  @Watch('wid')
  private onWidChange(val: number, oldVal: number) {
    if (val > 100) {
      this.wid = 100;
      clearInterval(this.Timer);
      this.iconPlay = 'icon-iconset0481';
    } else if (val < 0) {
      this.wid = 0;
      this.seconds = 0;
    }
    this.width = this.wid + '%';
  }
  @Watch('id')
  private onIdChange(val: string, oldVal: string) {
    clearInterval(this.Timer);
    axios
      .get('http://localhost:3000/song/detail?ids=' + val)
      .then(({ data }) => {
        this.musicInfo = data.songs[0];
        const audio: any = this.$refs.music;
        // console.log(audio);
        this.totalTime = utils.formatSeconds(audio.duration);
        this.seconds = 0;
        this.currentTime = utils.formatSeconds(this.seconds);
        this.wid = 0;
        this.width = this.wid + '%';
        audio.currentTime = this.seconds;
        audio.play();
        this.iconPlay = 'icon-zanting1';
        this.Timer = setInterval(() => {
          this.seconds = this.seconds + 1;
          this.currentTime = utils.formatSeconds(this.seconds);
          this.wid = 100 / audio.duration + this.wid;
          this.width = this.wid + '%';
        }, 1000);
      });
    // axios.get('http://localhost:3000/song/url?id=' + val).then(({ data }) => {
    //   this.musicUrl = data.data[0].url;
    //   console.log(this.musicUrl);
    // });
  }
  private created() {
    const dot: any = this.$refs.dot;
    axios
      .get('http://localhost:3000/song/detail?ids=' + this.id)
      .then(({ data }) => {
        this.musicInfo = data.songs[0];
      });
    document.onmousemove = e => {
      if (this.isDrag === true) {
        if ((e.clientX - this.currentX) / 490 + this.wid > 100) {
          this.wid = 100;
        } else if ((e.clientX - this.currentX) / 490 + this.wid < 0) {
          this.wid = 0;
        } else {
          this.wid = (e.clientX - this.currentX) / 490 + this.wid;
        }
      }
      this.width = this.wid + '%';
    };
    document.onmouseup = () => {
      if (this.isDrag === true) {
        this.isDrag = false;
        const audio: any = this.$refs.music;
        this.seconds = Math.round((audio.duration * this.wid) / 100);
        this.currentTime = utils.formatSeconds(this.seconds);
        audio.currentTime = this.seconds;
        audio.play();
      }
    };
  }
  private dotDrop(event: any) {
    this.isDrag = true;
    this.currentX = event.clientX;
  }
  private playMusic() {
    const audio: any = this.$refs.music;
    this.totalTime = utils.formatSeconds(audio.duration);
    if (this.iconPlay === 'icon-iconset0481') {
      if (this.wid === 100) {
        this.seconds = 0;
        this.currentTime = utils.formatSeconds(this.seconds);
        this.wid = 0;
        this.width = this.wid + '%';
        audio.currentTime = this.seconds;
      }
      audio.play();
      this.iconPlay = 'icon-zanting1';
      this.Timer = setInterval(() => {
        this.seconds = this.seconds + 1;
        this.currentTime = utils.formatSeconds(this.seconds);
        this.wid = 100 / audio.duration + this.wid;
        this.width = this.wid + '%';
      }, 1000);
    } else {
      audio.pause();
      this.iconPlay = 'icon-iconset0481';
      clearInterval(this.Timer);
    }
  }
  private clickBar(event: any) {
    const bar: any = this.$refs.bar;
    const audio: any = this.$refs.music;
    this.wid = ((event.clientX - bar.getBoundingClientRect().left) * 100) / 490;
    this.width = this.wid + '%';
    this.seconds = Math.round((audio.duration * this.wid) / 100);
    this.currentTime = utils.formatSeconds(this.seconds);
    audio.currentTime = this.seconds;
    audio.play();
    if (this.iconPlay === 'icon-iconset0481') {
      this.iconPlay = 'icon-zanting1';
      this.totalTime = utils.formatSeconds(audio.duration);
      this.Timer = setInterval(() => {
        this.seconds = this.seconds + 1;
        this.currentTime = utils.formatSeconds(this.seconds);
        this.wid = 100 / audio.duration + this.wid;
        this.width = this.wid + '%';
      }, 1000);
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
        margin-right: 15px;
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
          margin-left: -5px;
          background-color: #cc2200;
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
