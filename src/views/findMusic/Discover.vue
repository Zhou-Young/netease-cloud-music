<template>
  <div class="discover">
    <Carousel/>
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
