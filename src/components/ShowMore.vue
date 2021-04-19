<template>
  <a href="#"
     class="show-more"
     @click="$emit('showAll')"
  >Показать еще
  </a>
</template>

<script>
export default {
  name: "ShowMore"
}
</script>

<style lang="scss">
.show-more {
  align-self: flex-end;
  position: relative;
  padding: 10px 20px 10px 0;
  max-width: 200px;
  text-align: left;
  color: $color-bondi-blue;
  @include text(14px, 16px, 500);
  transition: opacity $default-transition-settings;
  cursor: pointer;

  &::after {
    @include pseudo();
    right: 0;
    top: 11px;
    width: 10px;
    height: 10px;
    border: 2px solid $color-bondi-blue;
    border-top-style: none;
    border-right-style: none;
    transform: rotate(-45deg);
  }

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
}
</style>
