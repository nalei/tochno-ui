<template lang="pug">
DefaultLayout
  router-view
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import DefaultLayout from '@/layouts/DefaultLayout.vue';

  export default defineComponent({
    components: { DefaultLayout },
  });
</script>
