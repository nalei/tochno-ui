<template lang="pug">
.inputs.storybook-card
  section.inputs-component-usage
    h2.section-title.h-800 Component usage
    .usage-example
      pre.code-usage
        code
          | Input#input-id(
          | &nbsp;&nbsp;v-model='inputValue'
          | &nbsp;&nbsp;size='l'
          | &nbsp;&nbsp;name='phone'
          | &nbsp;&nbsp;label='Masked'
          | &nbsp;&nbsp;:mask='{ mask: "### ### ## ##" }'
          | )
      Input#input-id(
        v-model='inputValue'
        size='l'
        name='phone'
        label='Masked'
        caption='{ mask: "### ### ## ##" }'
        :mask='{ mask: "### ### ## ##" }'
      )
  section.inputs-preview
    Input#uwet(
      v-model='inputValue'
      state='default'
      size='m'
      placeholder='Placeholder'
      label='Label'
      caption='Help or instruction text goes here'
      badge='minutes'
    )
    Input#rtyu(
      v-model='inputValue'
      state='default'
      size='l'
      placeholder='Placeholder'
      label='Label'
      caption='Help or instruction text goes here'
    )
    Input#sdkfb(
      v-model='inputValue'
      state='error'
      size='m'
      placeholder='Placeholder'
      label='Label'
      caption='This field is required'
    )
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import Input from '@/components/input/Input.vue';

  export default defineComponent({
    components: { Input },
    setup() {
      const inputValue = ref('');

      return { inputValue };
    },
  });
</script>

<style scoped>
  .inputs-component-usage {
    margin-bottom: 48px;
  }
  .inputs-preview {
    display: grid;
    grid-template-columns: repeat(4, max-content);
    column-gap: 20px;
    row-gap: 20px;
    justify-content: start;
    grid-auto-flow: row;
  }
</style>
