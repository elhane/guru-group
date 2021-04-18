<template>
  <p class="date">{{ timeConverter(data) }}</p>
</template>

<script>
export default {
  name: "Date",
  props: {
    data: {
      type: Number,
      default() {
        return 0
      },
    },
  },
  methods: {
    timeConverter(UNIX_timestamp) {
      const a = new Date(UNIX_timestamp * 1000);
      const months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
      const year = a.getFullYear() % 100;
      const month = months[a.getMonth()];
      const date = a.getDate();
      const hour = a.getHours();
      const min = a.getMinutes();
      return `${date}.${month}.${year}, ${hour}:${min}`;
    }
  }
}
</script>

<style lang="scss">
.date {
  margin: 0;
  @include text(12px, 14px);
  color: $color-suva-gray;
}
</style>
