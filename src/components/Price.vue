<template>
  <div class="price">
    <p v-if="data.oldPrice" class="price__old">{{ data.oldPrice }}&nbsp;<span class="price__currency">₽</span></p>
    <p class="price__current">{{ data.price }}&nbsp;<span class="price__currency">₽</span></p>
  </div>
</template>

<script>
export default {
  name: "Price",
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
.price {
  display: flex;
  flex-direction: column;

  &__current {
    margin: 0;
    @include text(22px, 24px, 700);
  }

  &__old {
    position: relative;
    display: inline-block;
    align-self: flex-start;
    padding: 0 5px;
    @include text(14px, 24px, 400);
    color: $color-zambezi;
    text-align: center;
    text-decoration: line-through;

    &::after {
      @include pseudo();
      top: 50%;
      left: 0;
      //right: 0;
      margin: 0 auto;
      width: 100%;
      //height: 1px;
      border: 1px solid $color-zambezi;
      //background-color: $color-zambezi;
    }
  }
}
</style>
