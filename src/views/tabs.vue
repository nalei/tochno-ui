<template lang="pug">
.inputs.storybook-card
  section.tabs-component-usage
    h2.section-title.h-800 Component usage

  section.tabs-preview
    Tabs(
      v-model:activeItem='activeItem'
      size='m'
      :items='items'
    )
    pre.code-usage
      code item: {{ JSON.stringify(items[activeItem], null, 2) }}
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import Tabs from '@/components/tabs/Tabs.vue';
  import { TabsItem } from '@/components/tabs/Tabs';

  export default defineComponent({
    components: { Tabs },
    setup() {
      const activeItem = ref(0);

      const items: TabsItem[] = [
        {
          title: 'Simple tab',
        },
        {
          title: 'Icon tab',
          icon: {
            name: 'ic24-user-circle',
          },
        },
        {
          title: 'Disabled tab',
          icon: {
            name: 'ic24-user-circle',
          },
          disabled: true,
        },
        {
          title: 'Simple tab',
        },
      ];

      return {
        items,
        activeItem,
      };
    },
  });
</script>

<style scoped>
  .tabs-component-usage {
    margin-bottom: 48px;
  }
</style>
