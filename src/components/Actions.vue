<template>
  <div class="actions">
    <button class="actions__button" type="button" title="Добавить в список сравнения" aria-label="Добавить в избранное">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 2.737v18.53c0 .113 0 .635.233 1.145.12.265.312.543.613.753.304.214.689.335 1.154.335.465 0 .85-.121 1.154-.335.3-.21.492-.488.613-.753.233-.51.233-1.032.233-1.145V2.737a2.66 2.66 0 00-.375-1.35C12.82.9 12.295.5 11.5.5c-.796 0-1.321.4-1.625.887a2.66 2.66 0 00-.375 1.35zM16.5 7.342v14.319c0 .096 0 .543.257.979.286.483.834.86 1.743.86.91 0 1.457-.377 1.743-.86.257-.436.257-.883.257-.98V7.343a1.89 1.89 0 00-.41-1.152c-.327-.406-.85-.69-1.59-.69-.74 0-1.263.284-1.59.69a1.89 1.89 0 00-.41 1.152zM2.5 10.105V21.896c0 .088 0 .497.281.89.304.422.851.714 1.719.714.868 0 1.415-.292 1.719-.715.281-.392.281-.8.281-.889V10.105c0-.302-.118-.708-.442-1.04C5.72 8.721 5.208 8.5 4.5 8.5c-.708 0-1.221.221-1.558.565a1.523 1.523 0 00-.442 1.04z" fill="#fff" stroke="#2C2C2C"/></svg>
    </button>
    <button class="actions__button" type="button" title="Добавить в избранное" aria-label="Добавить в список сравнения">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.714 22.378l.32.277.327-.27c1.4-1.158 3.55-3.04 5.458-4.923.954-.942 1.853-1.89 2.57-2.753.705-.85 1.273-1.663 1.513-2.326 1.083-2.987.895-6.645-2.29-8.654-2.012-1.27-4.023-.94-5.481-.326a9.021 9.021 0 00-2.079 1.236l-.088-.076a14.2 14.2 0 00-1.057-.821 9.202 9.202 0 00-1.432-.837C8.97 2.675 8.412 2.5 7.87 2.5c-1.672 0-3.859.683-5.109 2.522-1.68 2.473-1.68 6.15 0 8.623.663.974 2.315 2.644 4.06 4.299a160.233 160.233 0 004.894 4.434z" fill="#fff" stroke="#2C2C2C"/></svg>
    </button>
  </div>
</template>

<script>
export default {
name: "Actions"
}
</script>

<style lang="scss">
.actions {
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  padding: 19px 7px;
  flex-direction: column;

  &__button {
    margin-bottom: 10px;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    outline: 0;

    svg path {
      fill: $color-default-white;
      transition: fill $default-transition-settings;
    }

    &:hover,
    &:focus {
      svg path {
        fill: $color-bondi-blue;
      }
    }
  }
}
</style>
