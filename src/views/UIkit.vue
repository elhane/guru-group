<template>
  <section class="ui-kit container">
    <router-link class="link-back" to="/" tag="a">Вернуться назад </router-link>
    <h1 class="ui-kit__title">UI-kit components</h1>
      <ul class="ui-kit__list">
        <li class="ui-kit__item">
          <h2>Слайдер</h2>
          <p>Класс <code>.slider</code>, компонент <code>Slider</code></p>
          <Slider />
        </li>
        <li class="ui-kit__item">
          <h2>Кнопки сравнение/избранное</h2>
          <p>Класс <code>.actions</code>, компонент <code>Actions</code></p>
          <div class="ad__top-wrapper">
            <Actions />
          </div>
        </li>
        <li class="ui-kit__item">
          <h2>Кнопка</h2>
          <p>Класс <code>.show-more</code>, компонент <code>ShowMore</code></p>
          <ShowMore />
        </li>
        <li class="ui-kit__item">
          <h2>Иконки доставка/безопасная сделка</h2>
          <p>Класс <code>.marks</code>, компонент <code>Marks</code></p>
          <Marks />
        </li>
        <li class="ui-kit__item">
          <h2>Цены</h2>
          <p>Класс <code>.prices</code> , компонент <code>Prices</code></p>
          <Prices :data="{oldPrice: '1000.00', price: '1000.00'}"/>
        </li>
        <li class="ui-kit__item">
          <h2>Название товарной позиции</h2>
          <p>Класс <code>.item-name</code>, компонент <code>ItemName</code></p>
          <ItemName :data="itemName"/>
        </li>
        <li class="ui-kit__item">
          <h2>Город (15 символов)</h2>
          <p>Класс <code>.city</code>, компонент <code>City</code></p>
          <City :data="city"/>
        </li>
        <li class="ui-kit__item">
          <h2>Дата</h2>
          <p>Класс <code>.date</code>, компонент <code>Date</code></p>
          <Date :data="1618313694" />
        </li>
      </ul>
  </section>
</template>

<script>
import ShowMore from "@/components/ShowMore";
import Slider from "@/components/Slider";
import Actions from "@/components/Actions";
import Prices from "@/components/Prices";
import ItemName from "@/components/ItemName";
import City from "@/components/City";
import Date from "@/components/Date";
import Marks from "@/components/Marks";

export default {
  name: "UIkit",
  components: {
    ShowMore,
    Slider,
    Actions,
    Prices,
    ItemName,
    City,
    Date,
    Marks,
  },
  data() {
    return {
      itemName: "Наименование товара",
      city: "Название города"
    }
  }
}
</script>

<style lang="scss">
.ui-kit {
  &__title {
    font-weight: 700;
    margin-bottom: 40px;
    margin-top: 50px;
    @include text(44px, 48px, 700);
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 0;
  }

  &__item {
    display: block;
    position: relative;
    border: 1px solid $color-silver;
    padding: 30px;
    margin: 15px;
    border-radius: 8px;
    width: 45%;

    @include viewport--sm {
      width: 100%;
    }

    h2 {
      font-size: 22px;
      margin-top: 0;
      margin-bottom: 10px;
    }

    h2 + p {
      border-bottom: 1px solid $color-silver;
      padding-bottom: 10px;
      margin-bottom: 20px;
    }

    code {
      color: $color-zambezi;
    }

    .ad__top-wrapper {
      width: 50px;
      height: 120px;
    }
  }
}

.link-back {
  position: relative;
  padding: 10px 0 10px 15px;
  max-width: 200px;
  text-align: left;
  color: $color-bondi-blue;
  @include text(14px, 16px, 500);
  transition: opacity $default-transition-settings;
  cursor: pointer;

  &::after {
    @include pseudo();
    left: 0;
    top: 13px;
    width: 10px;
    height: 10px;
    border: 2px solid $color-bondi-blue;
    border-top-style: none;
    border-right-style: none;
    transform: rotate(45deg);
  }
}
</style>
