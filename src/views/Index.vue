<template lang="pug">
Button.demo-button(size='l' mode='primary') Button
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Button from '@/components/button/Button.vue';

  export default defineComponent({
    components: { Button },
  });
</script>

<style scoped>
  .demo-button {
    max-width: 100px;
  }
</style>
