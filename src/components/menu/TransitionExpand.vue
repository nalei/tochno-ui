<template lang="pug">
transition(
  name='expand'
  @leave='leave'
  @enter='enter'
  @after-enter='afterEnter'
)
  slot
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'TransitionExpand',
    methods: {
      enter(element) {
        const width = getComputedStyle(element).width;

        element.style.width = width;
        element.style.position = 'absolute';
        element.style.visibility = 'hidden';
        element.style.height = 'auto';

        const height = getComputedStyle(element).height;

        element.style.width = null;
        element.style.position = null;
        element.style.visibility = null;
        element.style.height = '0';

        getComputedStyle(element).height;

        requestAnimationFrame(() => {
          element.style.height = height;
        });
      },
      afterEnter(element) {
        element.style.height = 'auto';
      },
      leave(element) {
        const height = getComputedStyle(element).height;

        element.style.height = height;

        getComputedStyle(element).height;

        requestAnimationFrame(() => {
          element.style.height = '0';
        });
      },
    },
  });
</script>

<style scoped>
  * {
    will-change: height;
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  .expand-enter-active,
  .expand-leave-active {
    transition: height 0.2s ease-in-out;
    overflow: hidden;
  }

  .expand-enter,
  .expand-leave-to {
    height: 0;
  }
</style>
