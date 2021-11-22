<template lang="pug">
.bubbles
  span
  span#bubble2
  span#bubble3
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({ name: 'Bubbles' });
</script>

<style scoped>
  .bubbles {
    margin: 0 auto;
    width: 50px;
    display: flex;
    justify-content: center;

    span {
      display: inline-block;
      vertical-align: middle;
      width: 5px;
      height: 5px;
      margin: 0 3px;
      background: var(--blue-500);
      animation: bubbly 0.9s infinite alternate;
      border-radius: 50%;

      &#bubble2 {
        animation-delay: 0.27s;
      }
      &#bubble3 {
        animation-delay: 0.54s;
      }
    }
  }

  @keyframes bubbly {
    0% {
      width: 5px;
      height: 5px;
      opacity: 1;
      transform: translateY(8px);
    }
    100% {
      width: 10px;
      height: 10px;
      opacity: 0.1;
      transform: translateY(-8px);
    }
  }
</style>
