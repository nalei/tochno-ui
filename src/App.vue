<template lang="pug">
.global-wrapper
  router-view
</template>

<style>
  @import './common/common.css';

  #app {
    font-family: var(--font-primary);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .global-wrapper {
    position: relative;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }

  @custom-media --viewport-xs (width <= 768px);
  @custom-media --viewport-sm (width < 1280px);
  @custom-media --viewport-md (width >= 1280px);
  @custom-media --viewport-lg (width >= 1440px);
</style>
