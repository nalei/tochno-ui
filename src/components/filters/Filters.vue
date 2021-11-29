<template lang="pug">
.sticky-wrapper
  .filters
    slot
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue';

  export default defineComponent({
    name: 'Filters',
    setup() {
      onMounted(() => {
        const observer = new IntersectionObserver(
          ([e]) => {
            e.target.toggleAttribute('stuck', e.intersectionRatio < 1);
          },
          { threshold: [1] }
        );
        const element = document.querySelector('.sticky-wrapper');
        element && observer.observe(element);
      });

      return {};
    },
  });
</script>

<style scoped>
  .sticky-wrapper {
    padding: 24px 20px 0 24px;
    margin: -40px -36px 8px -40px;
    position: sticky;
    top: -1px;
    z-index: 8;
    background-color: var(--gray-50);
    transition: box-shadow var(--transition);
  }

  .sticky-wrapper[stuck] {
    .filters {
      box-shadow: var(--shadow-02);
      padding: 16px;
    }
  }

  .filters {
    padding: 16px 16px 8px 16px;
    background: var(--white);
    border-radius: 8px 8px 0 0;
    box-shadow: 0 8px 0 #fff, var(--shadow-02);
    transition: padding var(--transition);
  }
</style>
