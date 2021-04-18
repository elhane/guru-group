<template>
  <button class="show-more" type="button">Показать еще</button>
</template>

<script>
export default {
name: "ShowMore"
}
</script>

<style lang="scss">
.show-more {
  position: relative;
  padding-right: 20px;
  color: $color-bondi-blue;
  @include text(14px, 16px, 500);
  background-color: transparent;
  border: 0;
  outline: 0;
  transition: opacity $default-transition-settings;
  cursor: pointer;

  &::after {
    @include pseudo();
    right: 0;
    top: 2px;
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
