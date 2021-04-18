<template>
  <div class="slider">
    <splide :options="options">
      <splide-slide>
        <img src="https://source.unsplash.com/R-LK3sqLiBw/" alt="слайд">
      </splide-slide>
      <splide-slide>
        <img src="https://source.unsplash.com/nWX4pKwzLoE/" alt="слайд">
      </splide-slide>
      <splide-slide>
        <img src="https://source.unsplash.com/dAAk8Aqd_-I/" alt="слайд">
      </splide-slide>
      <splide-slide>
        <img src="https://source.unsplash.com/kdwahpWYfQo/" alt="слайд">
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
export default {
  name: 'Slider',
  props: {
    msg: String
  },
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        rewind : true,
        width  : 224,
        perPage: 1,
        arrows: false,
        lazyLoad: true,
      },
    };
  },
  methods: {
    moved( splide, newIndex ) {
      console.log( 'moved', newIndex );
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .slider {
    cursor: pointer;

    img {
      width: 224px;
      height: 260px;
      object-fit: cover;
      object-position: center;
    }
  }
</style>
