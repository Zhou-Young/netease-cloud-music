<template>
  <div class="playlist">
    <div class="right-wrap"></div>

    <div class="left-wrap">
      <div class="play-info">
        <div class="cover-img">
          <img :src="playList.coverImgUrl" class="coverImg">
        </div>
        <div class="play-desc">
          <div class="title-wrap">
            <span class="play-sign">歌单</span>
            <span class="title">{{playList.name}}</span>
          </div>
          <div class="author">
            <img :src="creator.avatarUrl" class="authorImg">
            <span class="name">{{creator.nickname}}</span>
            <span class="time">time</span>
          </div>
          <div class="button-wrap clearfix">
            <div class="button">播放</div>
            <div class="button">收藏</div>
            <div class="button">转发</div>
            <div class="button">下载</div>
            <div class="button">评论</div>
          </div>
          <div class="type">
            标签:
            <span class="type-item">民谣</span>
          </div>
          <div class="desc">介绍：{{playList.description}}</div>
        </div>
      </div>
      <div class="music-wrap">
        <div class="title">歌曲列表</div>
        <div class="music-list">
          <table>
            <tr>
              <th></th>
              <th>歌曲标题</th>
              <th>时长</th>
              <th>歌手</th>
              <th>专辑</th>
            </tr>
            <tr :key="index" v-for="(item,index) in playList.tracks">
              <td>{{index+1}}</td>
              <td>
                <span @click="playMusic(item.id)">{{item.name}}</span>
              </td>
              <td>3:00</td>
              <td>
                <span>{{item.ar[0].name}}</span>
              </td>
              <td>
                <span>{{item.al.name}}</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import store from '@/store';

@Component({
  components: {},
})
export default class PlayList extends Vue {
  private playList = {};
  private creator = {};
  private created() {
    axios
      .get('http://localhost:3000/playlist/detail?id=443357053')
      .then(({ data }) => {
        this.playList = data.playlist;
        this.creator = data.playlist.creator;
      });
  }
  private playMusic(id: string) {
    sessionStorage.setItem('id', id);
    store.commit('changeMusicId');
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/common.scss';
.playlist {
  width: 980px;
  margin: 0 auto;

  .left-wrap {
    width: 710px;
    // height: 400px;
    background-color: #ffffff;
    border-left: solid 1px #d3d3d3;
    border-right: solid 1px #d3d3d3;
    .play-info {
      padding: 40px 30px;
      .cover-img {
        width: 210px;
        height: 210px;
        padding: 5px;
        border: solid 1px #cccbcb;
        float: left;
        .coverImg {
          width: 100%;
          height: 100%;
          float: left;
        }
      }
      .play-desc {
        margin-left: 260px;
        .title-wrap {
          margin-bottom: 10px;
          .play-sign {
            width: 40px;
            height: 24px;
            line-height: 24px;
            text-align: center;
            font-weight: 600;
            background-color: #cc2200;
            color: #ffffff;
            display: inline-block;
            position: relative;
            margin-right: 20px;
            border-radius: 3px;
            vertical-align: 2px;
            &:before {
              content: '';
              width: 0;
              height: 0;
              right: -12px;
              top: 0;
              position: absolute;
              border-left: solid 13px #cc2200;
              border-top: solid 12px transparent;
              border-bottom: solid 12px transparent;
              border-radius: 2px;
            }
          }
          .title {
            // line-height: 24px;
            font-size: 20px;
            font-weight: 600;
          }
        }
        .author {
          margin-bottom: 10px;
          line-height: 35px;
          .authorImg {
            width: 35px;
            height: 35px;
            float: left;
            margin-right: 10px;
          }
          .name {
            color: #0c73c2;
            margin-right: 10px;
          }
          .time {
            color: #666666;
          }
        }
        .button-wrap {
          margin-bottom: 10px;
          height: 75px;
          .button {
            width: 58px;
            height: 30px;
            text-align: center;
            background-color: #5f5f71;
            border-radius: 4px;
            color: #ffffff;
            border: solid 1px #d3d3d3;
            line-height: 30px;
            float: left;
            margin-right: 6px;
          }
        }
        .type {
        }
      }
    }
    .music-wrap {
      padding: 30px;
      .title {
        font-size: 24px;
      }
      .music-list {
        border-top: solid 2px #cc2200;
        table {
          width: 100%;
          text-align: left;
          border: solid 1px #d3d3d3;
          span {
            vertical-align: middle;
            line-height: 30px;
          }
          tr {
            &:nth-child(2n) {
              background-color: #eeeeee;
            }
          }
          th {
            background-color: #999999;
            height: 35px;
            color: #ffffff;
            padding-left: 5px;
            &:nth-child(1) {
              width: 74px;
            }
            &:nth-child(2) {
              width: 274px;
            }
            &:nth-child(3) {
              width: 110px;
            }
            &:nth-child(4) {
              width: 90px;
            }
            &:nth-child(5) {
              width: 130px;
            }
          }

          td {
            padding-left: 5px;
            &:nth-child(1) {
              width: 74px;
            }
            &:nth-child(2) {
              span {
                @include ellipsis;
                display: inline-block;
                width: 274px;
                cursor: pointer;
                &:hover {
                  text-decoration: underline;
                }
              }
            }
            &:nth-child(3) {
              width: 110px;
            }
            &:nth-child(4) {
              width: 90px;
              span {
                @include ellipsis;
                display: inline-block;
                width: 90px;
              }
            }
            &:nth-child(5) {
              span {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                display: inline-block;
                width: 130px;
              }
            }
          }
        }
      }
    }
  }
  .right-wrap {
    width: 270px;
    float: right;
    background-color: #eeeeee;
    height: 400px;
  }
}
</style>


