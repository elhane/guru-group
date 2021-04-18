<template>
  <p class="ad__city">{{ data }}</p>
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
  }
}
</script>

<style lang="scss">

</style>
