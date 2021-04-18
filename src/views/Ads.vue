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
        <article class="ad">
          <div class="ad__top-wrapper">
            <Slider />
            <Actions />
          </div>

          <div class="ad__bottom-wrapper">
            <div class="ad__desc-top">
              <Price :data="card" />
              <div class="ad__desc-icons"> <!-- заменить на спрайт -->
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.421 19.436a1.96 1.96 0 100-3.92 1.96 1.96 0 000 3.92zM19.668 7.157a1.632 1.632 0 00-1.443-.863h-2.291V9.36c0 .342.3.618.64.618h4.603l-1.509-2.82zM17.5 15.516a1.96 1.96 0 101.96 1.96 1.962 1.962 0 00-1.96-1.96z" fill="#C7C7C7"/><path d="M22.647 12.064l-1.013-1.291h-5.06c-.78 0-1.437-.633-1.437-1.414V5.59A.576.576 0 0014.54 5H2.635C2.293 5 2 5.248 2 5.59v10.895c0 .341.293.608.635.608H3.69a2.755 2.755 0 015.46 0h5.62a2.755 2.755 0 015.46 0h2.134c.342 0 .635-.267.635-.608V13.07a1.654 1.654 0 00-.353-1.007z" fill="#C7C7C7"/></svg>
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 5l7-3 7 3v7.5C18 20 12 21 12 21s-6-1-7-8.5V5zm8.133 4.077l-.694-1.272a.5.5 0 00-.878 0l-.694 1.272a.5.5 0 01-.346.252l-1.424.266a.5.5 0 00-.271.835l.995 1.053a.5.5 0 01.132.407l-.186 1.437a.5.5 0 00.71.516l1.309-.621a.5.5 0 01.428 0l1.309.62a.5.5 0 00.71-.515l-.186-1.437a.5.5 0 01.132-.407l.995-1.053a.5.5 0 00-.27-.835l-1.425-.266a.5.5 0 01-.346-.252z" fill="#C4C4C4"/></svg>
              </div>
            </div>
            <ItemName :data="card.title"/>
            <div class="ad__desc-bottom">
              <City :data="card.locality"/>
              <Date :data="card.date"/>
            </div>
          </div>
        </article>

      </li>
    </ul>
  </section>
</template>

<script>
import Slider from "@/components/Slider.vue";
import Actions from "@/components/Actions.vue";
import Price from "@/components/Price.vue";
import ItemName from "@/components/ItemName";
import City from "@/components/City";
import Date from "@/components/Date";
export default {
  name: "Ads",
  components: {
    Slider,
    Actions,
    Price,
    ItemName,
    City,
    Date,
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
          locality: "Roobmouth",
          date: 1618313574
        },
      ]
    }
  },
}
</script>

<style lang="scss">
  .ad {
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

    &__top-wrapper {
      position: relative;
    }

    &__bottom-wrapper {
      padding: 0 12px 12px;
    }

    &__desc-top {
      display: flex;
      justify-content: space-between;
    }
  }

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
