<template lang="pug">
.progress(:style='{ width: percent + "%", height: height, "background-color": canSuccess ? color : failedColor, opacity: show ? 1 : 0 }')
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useProgressBar } from '@/components/progress-bar/use/progressBar';

  export default defineComponent({
    name: 'ProgressBar',
    props: {
      height: {
        type: String,
        default: '2px',
      },
      color: {
        type: String,
        default: '#393d43',
      },
      failedColor: {
        type: String,
        default: '#ff0000',
      },
    },
    setup() {
      const { percent, canSuccess, show, start, finish, fail } = useProgressBar();
      return { percent, canSuccess, show, start, finish, fail };
    },
  });
</script>

<style scoped>
  .progress {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    width: 0%;
    transition: width 0.2s, opacity 0.4s;
    opacity: 1;
    background-color: #efc14e;
    z-index: 999;
  }
</style>
