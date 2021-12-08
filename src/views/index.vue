<template lang="pug">
StorybookLayout
  router-view
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import StorybookLayout from '@/layouts/StorybookLayout.vue';

  export default defineComponent({
    components: { StorybookLayout },
  });
</script>
