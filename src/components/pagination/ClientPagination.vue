<template lang="pug">
.client-pagination
  .grid.grid_gap_16
    .grid-6-12.grid-sm-12-12.left-block
      Select(
        v-model:active='perPageCount'
        v-if='dataSource.totalPages > dataSource.perPage'
        mode='sort'
        label='Показать:'
        @select='handlePerPageSelect'
        :options='perPageOptions'
        :openOnTop='true'
      )
    .grid-6-12.grid-sm-12-12.right-block
      transition(name='fade' mode='out-in')
        span.pagination-info.caption-13px-medium
          | {{ tableData.offset + 1 }}-{{ tableData.offset + tableData.pageData.length }} из {{ tableData.total }}
      Pagination(
        v-model:currentPage='currentPage'
        v-if='dataSource.total > dataSource.perPage'
        :total='dataSource.totalPages'
      )
</template>

<script lang="ts">
  import { defineComponent, PropType, reactive, ref, toRef, watch } from 'vue';
  import { TableDataSource } from '@/components/table/use/TableDataSource';
  import Pagination from '@/components/pagination/Pagination.vue';
  import Select from '@/components/select/Select.vue';
  import { TableRow } from '@/components/table/Table';
  import { DropdownOptionProps } from '@/components/dropdown/DropdownOption';

  export default defineComponent({
    name: 'ClientPagination',
    components: { Select, Pagination },
    props: {
      perPage: {
        type: Number,
        default: 20,
      },
      offset: {
        type: Number,
        default: 0,
      },
      total: {
        type: Number,
        default: 0,
      },
      dataSource: {
        type: Object as PropType<TableDataSource<TableRow>>,
        default: new TableDataSource([]),
      },
    },
    setup(props, { emit }) {
      const currentPage = ref(1);

      const tableData = reactive(props.dataSource);

      tableData.perPage = toRef(props, 'perPage').value;

      const perPageOptions: DropdownOptionProps<number>[] = [
        { label: `по ${tableData.perPage}`, value: tableData.perPage },
        { label: 'Все', value: tableData.total },
      ];

      const perPageCount = ref<DropdownOptionProps<number>>(perPageOptions[0]);

      watch(
        () => currentPage.value,
        (page) => {
          const offset = (page - 1) * tableData.perPage;
          tableData.offset = offset;
          emit('changePage');
        }
      );

      const handlePerPageSelect = (event: DropdownOptionProps<number>) => {
        currentPage.value = 1;
        tableData.perPage = event.value;
        emit('changePage');
      };

      return { perPageCount, perPageOptions, currentPage, tableData, handlePerPageSelect };
    },
  });
</script>

<style scoped>
  .left-block {
    display: flex;
    align-items: center;
    .select {
      @media (--viewport-xs) {
        width: 100%;
      }
    }
  }

  .right-block {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .pagination-info {
    color: var(--gray-300);
    margin-right: 16px;
    white-space: nowrap;
  }
</style>
