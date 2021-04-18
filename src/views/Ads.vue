<template>
  <section class="similar-ads container">
    <h1 class="similar-ads__title">Похожие объявления</h1>
    <transition appear name="fade">
      <ul class="ads">
        <li
          v-for="ad in limitedAds"
          :id="ad.id"
          :key="ad.id"
          class="ads__item"
        >
          <Ad :data="ad"/>
        </li>
      </ul>
    </transition>
    <p class="similar-ads__empty-message" v-if="!ads.length">Похожие объявления отсутсвтуют :(</p>
    <ShowMore @showAll="showAll" v-show="this.limit < this.allAdsAmount"/>
  </section>
</template>

<script>
import { getData } from "@/helpers.js";
import Ad from "@/components/Ad";
import ShowMore from "@/components/ShowMore";
export default {
  name: "Ads",
  components: {
    Ad,
    ShowMore
  },
  created: async function() {
    this.ads = await getData("https://6075786f0baf7c0017fa64ce.mockapi.io/products");
    this.allAdsAmount = this.ads.length;
  },
  data() {
    return {
      ads: [],
      allAdsAmount: null,
      limit: 16,
    }
  },
  computed: {
   limitedAds() {
     return this.ads.slice(0, this.limit)
   },
  },
  methods: {
    showAll() {
      return this.limit = this.allAdsAmount;
    }
  }
}
</script>

<style lang="scss">
.similar-ads {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 33px;

  &__title {
    @include text(22px, 24px, 700);
  }
}

.ads {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @include list-reset();

  @include viewport--md {
    justify-content: center;
  }

  &__item {
    margin-bottom: 24px;

    @include viewport--md {
      margin-left: 12px;
      margin-right: 12px;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
