<template>
  <ul class="marks"> <!-- заменить на спрайт -->
    <li class="marks__mark" title="Доступна доставка">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M6.421 19.436a1.96 1.96 0 100-3.92 1.96 1.96 0 000 3.92zM19.668 7.157a1.632 1.632 0 00-1.443-.863h-2.291V9.36c0 .342.3.618.64.618h4.603l-1.509-2.82zM17.5 15.516a1.96 1.96 0 101.96 1.96 1.962 1.962 0 00-1.96-1.96z" fill="#C7C7C7"/><path d="M22.647 12.064l-1.013-1.291h-5.06c-.78 0-1.437-.633-1.437-1.414V5.59A.576.576 0 0014.54 5H2.635C2.293 5 2 5.248 2 5.59v10.895c0 .341.293.608.635.608H3.69a2.755 2.755 0 015.46 0h5.62a2.755 2.755 0 015.46 0h2.134c.342 0 .635-.267.635-.608V13.07a1.654 1.654 0 00-.353-1.007z" fill="#C7C7C7"/></svg>
    </li>
    <li class="marks__mark" title="Безопасная сделка">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 5l7-3 7 3v7.5C18 20 12 21 12 21s-6-1-7-8.5V5zm8.133 4.077l-.694-1.272a.5.5 0 00-.878 0l-.694 1.272a.5.5 0 01-.346.252l-1.424.266a.5.5 0 00-.271.835l.995 1.053a.5.5 0 01.132.407l-.186 1.437a.5.5 0 00.71.516l1.309-.621a.5.5 0 01.428 0l1.309.62a.5.5 0 00.71-.515l-.186-1.437a.5.5 0 01.132-.407l.995-1.053a.5.5 0 00-.27-.835l-1.425-.266a.5.5 0 01-.346-.252z" fill="#C4C4C4"/></svg>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Marks"
}
</script>

<style lang="scss">
.marks {
  display: flex;
  @include list-reset();

  &__mark {
    margin-left: 9px;

    svg path {
      fill: $color-very-light-gray;
      transition: fill $default-transition-settings;
    }

    &:hover {
      svg path {
        fill: $color-bondi-blue;
      }
    }
  }
}
</style>
