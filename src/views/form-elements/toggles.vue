<template lang="pug">
.storybook-card
  section
    h2.section-title.h-800 Component usage
    .usage-example
      pre.code-usage
        code
          | Toggle#toggle-id(
          | &nbsp;&nbsp;v-model='toggleValue'
          | )
      Toggle#toggle-id(v-model='toggleValue')
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import Toggle from '@/components/toggle/Toggle.vue';

  export default defineComponent({
    components: { Toggle },
    setup() {
      const toggleValue = ref(false);

      return { toggleValue };
    },
  });
</script>
