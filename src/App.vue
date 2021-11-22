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
</style>
