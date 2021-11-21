<template lang="pug">
.home
  img(src='../assets/logo.png' alt='Vue logo')
  HelloWorld(msg='Welcome to Your Vue.js + TypeScript App')
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

  export default defineComponent({
    name: 'Home',
    components: {
      HelloWorld,
    },
  });
</script>
