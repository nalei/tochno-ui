<template lang="pug">
.page
  .page-body
    slot.page-sidebar(name='sidebar')
    main.page-main
      slot
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'PageShell',
  });
</script>

<style scoped>
  .page {
    display: flex;
    width: 100%;
    min-height: inherit;
    flex-direction: column;
    flex-grow: 1;
  }
  .page-body {
    display: flex;
    flex-grow: 1;
  }
  .page-main {
    flex-grow: 1;
    min-height: 100vh;
    background-color: var(--gray-50);
  }
</style>
