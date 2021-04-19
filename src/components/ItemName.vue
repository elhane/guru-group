<template>
  <p class="item-name">{{ data }}</p>
</template>

<script>
export default {
  name: "ItemName",
  props: {
    data: {
      type: String,
      default() {
        return ""
      },
    },
  }
}
</script>

<style lang="scss">
.item-name {
  margin-bottom: 0;
  margin-top: 6px;
  @include text(14px, 16px, 500);
  color: $color-black;
}
</style>
