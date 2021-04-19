<template>
  <article
      class="ad"
      :class="{'ad--seen': data.seen }"
  >
    <span class="ad__seen-label" v-if="data.seen">Просмотрено</span>
    <div class="ad__top-wrapper">
      <Slider />
      <Actions />
    </div>

    <a class="ad__bottom-wrapper" href="#">
      <div class="ad__description-top">
        <Prices :data="data" />
        <Marks />
      </div>
      <ItemName :data="data.title"/>
      <div class="ad__description-bottom">
        <City :data="data.locality"/>
        <Date :data="data.date"/>
      </div>
    </a>
  </article>
</template>

<script>
import Slider from "@/components/Slider.vue";
import Actions from "@/components/Actions.vue";
import Prices from "@/components/Prices.vue";
import Marks from "@/components/Marks.vue";
import ItemName from "@/components/ItemName";
import City from "@/components/City";
import Date from "@/components/Date";
export default {
  name: "Ad",
  components: {
    Slider,
    Actions,
    Prices,
    ItemName,
    City,
    Date,
    Marks
  },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="scss">
.ad {
  position: relative;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: box-shadow $default-transition-settings;

  &:hover {
    box-shadow: 0 5px 10px 6px rgba(0, 0, 0, 0.15);
  }

  &:active {
    opacity: 0.8;
  }

  &--seen {
    background-color: $color-pale-prim;
  }

  &__seen-label {
    position: absolute;
    top: 12px;
    left: 0;
    right: 0;
    z-index: 5;
    display: block;
    max-width: 100px;
    margin: 0 auto;
    padding: 5px 10px;
    @include text(12px, 14px);
    text-align: center;
    color: $color-default-white;
    background-color: rgba(44, 44, 44, 0.74);
    border-radius: 8px;
  }

  &__top-wrapper {
    position: relative;
  }

  &__bottom-wrapper {
    display: block;
    padding: 0 12px 12px;
    cursor: pointer;
  }

  &__description-top,
  &__description-bottom {
    display: flex;
    justify-content: space-between;
  }

  &__description-bottom {
    margin-top: 14px;
  }
}
</style>
