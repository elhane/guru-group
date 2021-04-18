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

</style>
