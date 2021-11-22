<template lang="pug">
.sort-list.storybook-card
  section.sort-list-component-usage
    h2.section-title.h-800 Component usage
    SortedList(v-model='optionsList')
      template(#control='{ row }')
        Checkbox(v-model='row.checked' :id='row.value')
        Button.control-button(
          size='s'
          mode='info'
          iconOnly
          @click='removeRow(row)'
          :icon='{ name: "ic24-close-delete" }'
        )
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import SortedList from '@/components/lists/sorted-list/SortedList.vue';
  import Icon from '@/components/icon/Icon.vue';
  import Checkbox from '@/components/checkbox/Checkbox.vue';
  import { ISortedListRow } from '@/components/lists/sorted-list/SortedList';
  import Button from '@/components/button/Button.vue';

  export default defineComponent({
    components: { Button, Checkbox, Icon, SortedList },
    setup() {
      const optionsList = ref<ISortedListRow[]>([
        {
          label: 'Поклейка обоев',
          value: 'operation1',
        },
        {
          label: 'Оштукатуривание поверхности с глянцеванием',
          value: 'operation2',
        },
        {
          label: 'Оштукатуривание поверхности',
          value: 'operation3',
        },
      ]);

      const removeRow = (row: ISortedListRow) => {
        optionsList.value = optionsList.value.filter(({ value }) => row.value !== value);
      };

      return { optionsList, removeRow };
    },
  });
</script>

<style scoped>
  .sort-list-component-usage {
    margin-bottom: 48px;
  }
  .sort-list-preview {
    display: flex;
  }
  .control-button {
    margin-left: 14px;
  }
</style>
