<template lang="pug">
.pagination.storybook-card
  section.pagination-component-usage
    h2.section-title.h-800 Component usage
    .usage-example
      pre.code-usage
        code
          | Pagination(
          | &nbsp;&nbsp;v-model:currentPage='currentPage'
          | &nbsp;&nbsp;:total='total'
          | &nbsp;&nbsp;:shift='shift'
          | )
      Pagination(
        v-model:currentPage='currentPage'
        :total='total'
        :shift='shift'
      )
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import Pagination from '@/components/pagination/Pagination.vue';

  export default defineComponent({
    components: { Pagination },
    setup() {
      const currentPage = ref(1);
      const total = ref(30);
      const shift = ref(5);

      return {
        currentPage,
        total,
        shift,
      };
    },
  });
</script>

<style scoped>
  .pagination-component-usage {
    margin-bottom: 48px;
  }
  .pagination-preview {
    display: flex;
    .table-header {
      align-items: center;
      display: flex;
      justify-content: space-between;

      &::v-deep(.button) {
        margin-left: 16px;
      }
    }
  }
</style>
