<template>
  <div class="slider">
    <splide :options="options">
      <splide-slide v-for="slide in slides" :key="slide">
        <img :src=slide.src :alt=slide.alt>
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
export default {
  name: 'Slider',
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        rewind: true,
        width: 224,
        perPage: 1,
        arrows: false,
        lazyLoad: true,
        breakpoints: {
          1023: {
            width: 280,
          },
        }
      },
      slides: [
        { src: "https://source.unsplash.com/R-LK3sqLiBw/", alt: "Слайд 1" },
        { src: "https://source.unsplash.com/nWX4pKwzLoE/", alt: "Слайд 2" },
        { src: "https://source.unsplash.com/dAAk8Aqd_-I/", alt: "Слайд 3" },
        { src: "https://source.unsplash.com/kdwahpWYfQo/", alt: "Слайд 4" },
      ],
    };
  },
  methods: {
    moved( splide, newIndex ) {
      console.log( 'moved', newIndex );
    },
  },
}
</script>

<style lang="scss">
  .slider {
    cursor: pointer;

    img {
      width: 224px;
      height: 260px;
      object-fit: cover;
      object-position: center;
    }

    @include viewport--md {
      img {
        width: 280px;
        height: 280px;
      }
    }
  }
</style>
