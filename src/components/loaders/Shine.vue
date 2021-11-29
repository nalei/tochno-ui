<template lang="pug">
.shine-target
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({ name: 'Shine' });
</script>

<style scoped>
  .shine-target {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--gray-50);
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      background-image: linear-gradient(90deg, var(--gray-50), var(--white), var(--gray-50));
      animation: shine 1500ms linear infinite;
    }
  }

  @keyframes shine {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
</style>
