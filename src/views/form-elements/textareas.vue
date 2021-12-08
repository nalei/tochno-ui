<template lang="pug">
.storybook-card
  section
    h2.section-title.h-800 Component usage
    .usage-example
      pre.code-usage
        code
          | Textarea#textarea-id(
          | &nbsp;&nbsp;v-model='inputValue'
          | &nbsp;&nbsp;label='Simple'
          | &nbsp;&nbsp;placeholder='Simple'
          | )
      Textarea#textarea-id(
        v-model='inputValue'
        placeholder='Simple'
        label='Simple'
      )
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import Textarea from '@/components/textarea/Textarea.vue';

  export default defineComponent({
    components: { Textarea },
    setup() {
      const inputValue = ref('');

      return { inputValue };
    },
  });
</script>
