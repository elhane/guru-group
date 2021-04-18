<template>
  <p class="ad__city">{{ data }}</p>
</template>

<script>
export default {
  name: "Date",
  props: {
    data: {
      type: Number,
      default() {
        return 0      },
    },
  }
}
</script>

<style lang="scss">

</style>
