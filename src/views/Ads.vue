<template>
  <section class="container">
    <h2>Похожие объявления</h2>
    <ul class="ads">
      <li
        v-for="card in cards"
        :id="card.id"
        :key="card.id"
        class="ads__item"
      >
        <Card :data="card"/>
      </li>
    </ul>
    <ShowMore />
  </section>
</template>

<script>
import Card from "@/components/Card";
import ShowMore from "@/components/ShowMore";
export default {
  name: "Ads",
  components: {
    Card,
    ShowMore
  },
  data() {
    return {
      cards: [
        {
          id: "3",
          oldPrice: "911.00",
          price: "208.00",
          title: "Handcrafted Soft Pizza",
          seen: false,
          locality: "Hoegerstad",
          date: 1618313754
        },
        {
          id: "6",
          oldPrice: "8.00",
          price: "122.00",
          title: "Intelligent Rubber Tuna",
          seen: true,
          locality: "Roobmouthbsjksdhf",
          date: 1618313574
        },
      ]
    }
  },
}
</script>

<style lang="scss">
  .ads {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    @include list-reset();

    &__item {
      margin: 0 15px;
    }
  }
</style>
