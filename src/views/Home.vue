<template>
  <section class="main-page container">
    <h1 class="main-page__title">Тестовое задание</h1>
    <router-link
        v-for="tab in tabs"
        :key="tab.link"
        :to="tab.link"
        tag="a"
        class="main-page__link"
    >{{ tab.title }}</router-link>
  </section>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      tabs: [
        {
          link: '/components',
          title: 'UI-kit'
        },
        {
          link: '/advertisements',
          title: 'Доска объявлений'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.main-page {
  &__title {
    font-weight: 700;
    margin-bottom: 40px;
    margin-top: 50px;
    @include text(44px, 48px, 700);

  }

  &__link {
    display: block;
    margin-bottom: 25px;
    @include text(26px, 30px);
    transition: $default-transition-settings;

    &:hover {
      color: $color-bondi-blue;
    }

    &:active {
      opacity: 0.7;
    }
  }
}
</style>

