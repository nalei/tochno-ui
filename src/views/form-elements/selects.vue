<template lang="pug">
.selects.storybook-card
  section.selects-component-usage
    h2.section-title.h-800 Component usage
    .usage-example
      pre.code-usage
        code
          | Select(
          | &nbsp;&nbsp;v-model:active='activeItem'
          | &nbsp;&nbsp;size='l'
          | &nbsp;&nbsp;placeholder='Choose number'
          | &nbsp;&nbsp;label='Favorite number'
          | &nbsp;&nbsp;:options='items'
          | &nbsp;&nbsp;:max-height='maxHeight'
          | &nbsp;&nbsp;:invalid='activeItemIsNaN'
          | &nbsp;&nbsp;:caption='caption'
          | )
      Select(
        v-model:active='activeItem'
        size='l'
        placeholder='Choose number'
        label='Favorite number'
        :options='options'
        :max-height='maxHeight'
        :invalid='activeItemIsNaN'
        :caption='caption'
      )
  section.selects-preview
    Multiselect#hsjdf(
      v-model:active='activeMultiselectItems'
      size='m'
      placeholder='Choose numbers'
      label='Multiselect'
      :options='options'
    )
    Multiselect#sfsdf(
      v-model:active='activeMultiselectItems'
      style='margin-top: 24px'
      size='m'
      searchable
      mode='sort'
      label='Numbers:'
      :options='options'
    )
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from 'vue';
  import Select from '@/components/select/Select.vue';
  import Multiselect from '@/components/multiselect/Multiselect.vue';
  import { DropdownOptionProps } from '@/components/dropdown/DropdownOption';

  export default defineComponent({
    name: 'selects-view',
    components: { Multiselect, Select },
    setup() {
      const activeItem = ref<DropdownOptionProps | null>(null);
      const activeMultiselectItems = ref<DropdownOptionProps[]>([]);
      const activeItemIsNaN = computed(() => activeItem.value?.value === 'NaN');
      const caption = computed(() => (!activeItemIsNaN.value ? 'Choose your favorite number' : 'Not a number'));
      const shortDropdown = ref(false);
      const maxHeight = computed(() => (shortDropdown.value ? '100px' : '310px'));
      const options: DropdownOptionProps[] = [
        {
          label: 'One',
          value: 1,
        },
        {
          label: 'Two',
          value: 2,
        },
        {
          label: 'Three',
          value: 3,
          disabled: true,
        },
        {
          label: 'Four',
          value: 4,
        },
        {
          label: 'Five',
          value: 5,
        },
        {
          label: 'NaN',
          value: 'NaN',
        },
      ];

      return {
        activeItem,
        activeMultiselectItems,
        options,
        activeItemIsNaN,
        caption,
        shortDropdown,
        maxHeight,
      };
    },
  });
</script>

<style scoped>
  .selects-component-usage {
    margin-bottom: 48px;
  }
  .selects-preview {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    column-gap: 20px;
    row-gap: 20px;
    justify-content: start;
    grid-auto-flow: row;
  }
</style>
