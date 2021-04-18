<template>
  <section class="main-page container">
    <h1 class="main-page__title">Тестовое задание</h1>
    <p>тут будет ссылка на компоненты и объявления</p>
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
  }

  &__link {
    display: block;
  }
}
</style>

