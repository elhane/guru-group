<template>
  <p class="city" :title="data">{{ data | cut }}</p>
</template>

<script>
export default {
  name: "City",
  props: {
    data: {
      type: String,
      default() {
        return ""
      },
    },
  },
  filters: {
    cut: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.length > 14 ? value.slice(0, 15)+"..." : value
    }
  }
}
</script>

<style lang="scss">
.city {
  margin: 0;
  @include text(12px, 14px);
  color: $color-suva-gray;
}
</style>
