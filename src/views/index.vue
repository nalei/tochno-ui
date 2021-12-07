<template lang="pug">
.h-500 Coming soon
  Button(:icon='{ name: "ic24-plus" }') Coming soon
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Button from '@/components/button/Button.vue';

  export default defineComponent({
    components: { Button },
  });
</script>
