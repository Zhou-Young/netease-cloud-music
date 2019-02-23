<template>
  <div class="discover">
    <Carousel/>
    <div class="discover-wrap">
      <div class="discover-right"></div>
      <div class="recommend">
        <div class="nav">
          <span class="title">热门推荐</span>
          <ul class="category clearfix">
            <li>华语</li>
            <li>流行</li>
            <li>摇滚</li>
            <li>民谣</li>
            <li>电子</li>
          </ul>
        </div>
        <div class="content clearfix">
          <PlayItem
            :coverImgUrl="item.coverImgUrl"
            :key="item.id"
            :name="item.name"
            :playCount="item.playCount"
            v-for="item in hotPlayList"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import Carousel from '@/components/Carousel.vue'; // @ is an alias to /src
import PlayItem from '@/components/PlayItem.vue';
import AudioBottom from '@/components/AudioBottom.vue';

@Component({
  components: {
    Carousel,
    PlayItem,
    AudioBottom,
  },
})
export default class Discover extends Vue {
  public hotPlayList = [];
  private created() {
    axios
      .get('http://localhost:3000/top/playlist?limit=8&order=hot')
      .then(({ data }) => {
        this.hotPlayList = data.playlists;
      });
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/common.scss';
.discover-wrap {
  width: 980px;
  background-color: #ffffff;
  margin: 0 auto;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
}

.recommend {
  margin-right: 250px;
  padding: 20px 20px 40px;
  .nav {
    height: 33px;
    padding: 0 10px 0 34px;
    // background-position: -225px -156px;
    border-bottom: 2px solid #c10d0c;
    .title {
      float: left;
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
      position: relative;
      &:before {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: solid 5px #c10d0c;
        position: absolute;
        left: -27px;
        top: 3px;
      }
    }
    .category {
      margin: 5px 0 0 20px;
      float: left;
      li {
        float: left;
        color: #666;
        cursor: pointer;
        list-style: none;
        position: relative;
        margin: 0 10px;

        &:before {
          content: '';
          width: 2px;
          height: 16px;
          background-color: #ccc;
          position: absolute;
          top: 2px;
          right: -12px;
        }
        &:last-child {
          &:before {
            display: none;
          }
        }
      }
    }
  }
  .content {
    margin-top: 20px;
  }
}

.discover-right {
  float: right;
  width: 250px;
  border: solid 1px #999999;
  height: 100px;
}
</style>


