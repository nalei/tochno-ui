<template lang="pug">
.checkboxes.storybook-card
  section.checkboxes-component-usage
    h2.section-title.h-800 Component usage
    .usage-example
      pre.code-usage
        code
          | Checkbox#checkbox-id(
          | &nbsp;&nbsp;v-model='checkboxValue'
          | &nbsp;&nbsp;size='l'
          | &nbsp;&nbsp;label='Label'
          | &nbsp;&nbsp;caption='Caption for checkbox'
          | )
      Checkbox#checkbox-id(
        v-model='checkboxValue'
        size='l'
        label='Label'
        caption='Caption for checkbox'
      )

  section.checkboxes-preview
    .checkboxes
      Checkbox#l(v-model='checkboxValue' size='l')
      Checkbox#m(v-model='checkboxValue')

    .checkboxes
      Checkbox#l-error(
        v-model='checkboxValue'
        size='l'
        label='Label'
        error='Some error text'
      )
      Checkbox#m-error(
        v-model='checkboxValue'
        label='Label'
        error='Some error text'
      )

    .checkboxes
      Checkbox#l-disabled(
        v-model='checkboxValue'
        size='l'
        label='Label'
        caption='Disabled checkbox'
        :disabled='true'
      )
      Checkbox#m-disabled(
        v-model='checkboxValue'
        size='m'
        label='Label'
        caption='Disabled checkbox'
        :disabled='true'
      )

    .checkboxes
      Checkbox#l-indeterminate(
        size='l'
        label='Label'
        caption='Indeterminate checkbox l'
        @update:modelValue='indeterminateClick'
        :modelValue='indeterminateValue'
        :indeterminate='indeterminateStatus'
      )
      Checkbox#m-indeterminate(
        size='m'
        label='Label'
        caption='Indeterminate checkbox m'
        @update:modelValue='indeterminateClick'
        :modelValue='indeterminateValue'
        :indeterminate='indeterminateStatus'
      )
</template>

<script lang="ts">
  import { defineComponent, toRefs, reactive } from 'vue';
  import Checkbox from '@/components/checkbox/Checkbox.vue';

  export default defineComponent({
    components: { Checkbox },
    setup() {
      const state = reactive({
        checkboxValue: false,
        indeterminateValue: true,
        indeterminateStatus: true,
      });

      const indeterminateClick = (value: boolean) => {
        if (state.indeterminateStatus) {
          state.indeterminateStatus = false;
        } else {
          state.indeterminateValue = value;
          state.indeterminateStatus = value;
        }
      };

      return { ...toRefs(state), indeterminateClick };
    },
  });
</script>

<style scoped>
  .checkboxes-component-usage {
    margin-bottom: 48px;
  }
  .checkboxes-preview {
    .checkboxes {
      display: grid;
      grid-template-columns: repeat(2, 250px);
      grid-column-gap: 20px;
      column-gap: 20px;
      grid-row-gap: 20px;
      row-gap: 20px;
      justify-content: start;
      grid-auto-flow: row;
      margin-top: 40px;
      justify-items: start;
      align-items: center;
    }
  }
</style>
