<template>
  <div class="prices">
    <p v-if="data.oldPrice" class="prices__price prices__price--old">{{ divideNumberByPieces(data.oldPrice) }}&nbsp;<span class="price__currency">₽</span></p>
    <p class="prices__price prices__price--current">{{ divideNumberByPieces(data.price) }}&nbsp;<span class="price__currency">₽</span></p>
  </div>
</template>

<script>
export default {
  name: "Prices",
  props: {
    data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    divideNumberByPieces(x, delimiter) {
      let num = x.split('.').join('') / 100
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter || ' ');
    }
  }
}
</script>

<style lang="scss">
.prices {
  display: flex;
  flex-direction: column;

  &__price {
    @include text(22px, 24px, 700);
    margin: 0;

    &--current {
      margin-top: 5px;
    }

    &--old {
      position: relative;
      display: inline-block;
      align-self: flex-start;
      padding: 0 5px;
      @include text(14px, 16px, 400);
      color: $color-zambezi;
      text-align: center;
      text-decoration: line-through;

      &::after {
        @include pseudo();
        top: 50%;
        left: 0;
        margin: 0 auto;
        width: 100%;
        height: 1px;
        background-color: $color-zambezi;
      }
    }
  }
}
</style>
