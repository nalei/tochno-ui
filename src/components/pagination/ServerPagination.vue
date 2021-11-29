<template lang="pug">
.server-pagination
  .grid.grid_gap_16
    .grid-6-12.grid-sm-12-12.left-block
      Select(
        v-model:active='activePerPage'
        mode='sort'
        label='Показать:'
        @select='handlePerPageSelect'
        :options='perPageOptions'
        :openOnTop='true'
      )
    .grid-6-12.grid-sm-12-12.right-block
      transition(name='fade' mode='out-in')
        span.pagination-info.caption-13px-medium
          | {{ offset + 1 }}-{{ offset + list.length }} из {{ total }}
      Pagination(
        v-model:currentPage='currentPage'
        v-if='total > perPage'
        :total='totalPage'
      )
</template>

<script lang="ts">
  import { computed, defineComponent, ref, watch } from 'vue';
  import Pagination from '@/components/pagination/Pagination.vue';
  import Select from '@/components/select/Select.vue';
  import { DropdownOptionProps } from '@/components/dropdown/DropdownOption';

  export default defineComponent({
    name: 'ServerPagination',
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
      list: {
        type: Array,
        default: () => [],
      },
      isPossibleSelectAll: {
        type: Boolean,
        default: true,
      },
    },
    setup(props, { emit }) {
      const currentPage = ref(1);

      const totalPage = computed(() => {
        return Math.ceil(props.total / props.perPage);
      });

      // eslint-disable-next-line
      const perPage = props.perPage;

      const perPageOptions = computed<DropdownOptionProps<number>[]>(() => {
        const options = [
          { label: `по ${perPage * 5}`, value: perPage * 5 },
          { label: `по ${perPage}`, value: perPage },
        ];
        props.isPossibleSelectAll && options.push({ label: 'Все', value: props.total });
        return options;
      });
      const activePerPage = computed<DropdownOptionProps<number>>(() => {
        return perPageOptions.value[perPageOptions.value.findIndex((el) => el.value === props.perPage)];
      });

      watch(
        () => currentPage.value,
        (page) => {
          emit('changePage', {
            offset: (page - 1) * props.perPage,
            perPage: props.perPage,
          });
        }
      );

      const handlePerPageSelect = (event: DropdownOptionProps<number>) => {
        emit('changePage', {
          offset: 0,
          perPage: event.value,
        });
      };

      return { totalPage, activePerPage, perPageOptions, currentPage, handlePerPageSelect };
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
