<template lang="pug">
.breadcrumbs.storybook-card
  section.breadcrumbs-component-usage
    h2.section-title.h-800 Component usage
    .usage-example
      pre.code-usage
        code
          | Breadcrumbs(
          | &nbsp;&nbsp;:crumbs='crumbs'
          | )
          |
          | const crumbs = [
          | &nbsp;&nbsp;{
          | &nbsp;&nbsp;&nbsp;&nbsp;label: 'Home',
          | &nbsp;&nbsp;&nbsp;&nbsp;link: '/',
          | &nbsp;&nbsp;},
          | &nbsp;&nbsp;{
          | &nbsp;&nbsp;&nbsp;&nbsp;label: 'Link 1',
          | &nbsp;&nbsp;&nbsp;&nbsp;link: '/storybook',
          | &nbsp;&nbsp;},
          | &nbsp;&nbsp;{
          | &nbsp;&nbsp;&nbsp;&nbsp;label: 'Link 2',
          | &nbsp;&nbsp;},
          | ];
      Breadcrumbs(:crumbs='crumbs')
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs.vue';

  export default defineComponent({
    name: 'breadcrumbs-view',
    components: { Breadcrumbs },
    setup() {
      const crumbs = [
        {
          label: 'Home',
          link: '/',
        },
        {
          label: 'Link 1',
          link: '/',
        },
        {
          label: 'Link 2',
        },
      ];

      return { crumbs };
    },
  });
</script>

<style scoped></style>
