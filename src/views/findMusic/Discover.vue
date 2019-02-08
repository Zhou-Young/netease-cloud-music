<template>
  <div class="discover">
    <h1>This is an discover page</h1>
    <Carousel msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Carousel from '@/components/Carousel.vue'; // @ is an alias to /src

@Component({
  components: {
    Carousel,
  },
})
export default class Discover extends Vue {}
</script>
