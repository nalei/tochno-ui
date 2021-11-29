<template lang="pug">
.pagination
  PaginationItem(
    type='control'
    @click='decrementPage'
    :disabled='!canDecrementPage'
  )
  template(v-if='total > 0')
    PaginationItem(
      v-if='currentPage === 1'
      type='number'
      current
      @goto='onGoTo'
      @click='setPage(1)'
      :page='1'
      :invalid='invalidPage'
    )
    PaginationItem(
      v-else
      @click='setPage(1)'
      :page='1'
    )
  PaginationItem(
    v-if='hasMoreItemsLeft && total > maxVisibleItems'
    type='shifter'
    @click='shiftBy(-shift)'
    :disabled='!canShiftToLeft || shift < 1'
  )
  template(v-for='page of visiblePageNumbers' :key='page')
    PaginationItem(
      v-if='page === currentPage'
      type='number'
      current
      @goto='onGoTo'
      @click='setPage(page)'
      :page='page'
      :invalid='invalidPage'
    )
    PaginationItem(
      v-else
      @click='setPage(page)'
      :page='page'
    )
  PaginationItem.right-icon(
    v-if='hasMoreItemsRight && total > maxVisibleItems'
    type='shifter'
    right-icon
    @click='shiftBy(shift)'
    :disabled='!canShiftToRight || shift < 1'
  )
  template(v-if='total > 1')
    PaginationItem(
      v-if='currentPage === total'
      type='number'
      current
      @goto='onGoTo'
      @click='setPage(total)'
      :page='total'
      :invalid='invalidPage'
    )
    PaginationItem(
      v-else
      @click='setPage(total)'
      :page='total'
    )
  PaginationItem.right-icon(
    type='control'
    right-icon
    @click='incrementPage'
    :disabled='!canIncrementPage'
  )
</template>

<script lang="ts">
  import { computed, defineComponent, PropType, ref, watch } from 'vue';
  import PaginationItem from '@/components/pagination/PaginationItem.vue';
  import { PaginationDictionary } from '@/components/pagination/Pagination';

  const validatorOnNaN = (value: number) => {
    const valueIsNaN = Number.isNaN(value);
    if (valueIsNaN) console.error(`Prop value is NaN`);
    return !valueIsNaN;
  };

  const DEFAULT_DICTIONARY: PaginationDictionary = {
    shiftLeft: 'Previous 10 pages',
    shiftRight: 'Next 10 pages',
    nextPage: 'Next page',
    previousPage: 'Previous page',
    goToFirstPage: 'First page',
    goToLastPage: 'Last page',
    invalidPage: 'Invalid page',
  };

  export default defineComponent({
    name: 'Pagination',
    components: { PaginationItem },
    emits: ['update:currentPage'],
    props: {
      currentPage: {
        type: Number,
        default: 1,
        validator: validatorOnNaN,
      },
      total: {
        type: Number,
        default: 1,
        validator: validatorOnNaN,
      },
      maxVisible: {
        type: Number,
        default: 5,
        validator: validatorOnNaN,
      },
      shift: {
        type: Number,
        default: 10,
        validator: validatorOnNaN,
      },
      dict: {
        type: Object as PropType<Partial<PaginationDictionary>>,
        default: () => ({}),
      },
    },
    setup(props, { emit }) {
      const ACTIVE_ITEM_OFFSET = 2; // In order to place active item from end (... 5 6 7 [8] ...) to middle position (... 7 [8] 9 10 ...)
      const invalidPage = ref(false);

      const dictionary = computed<PaginationDictionary>(() => ({
        ...DEFAULT_DICTIONARY,
        ...props.dict,
      }));

      const maxVisibleItems = computed(() => (props.maxVisible >= 5 ? props.maxVisible : 5));

      const canDecrementPage = computed(() => props.currentPage - 1 > 0);
      const canIncrementPage = computed(() => props.currentPage + 1 <= props.total);

      const canShiftToLeft = computed(() => props.currentPage - props.shift > 0);
      const canShiftToRight = computed(() => props.currentPage + props.shift <= props.total);

      const allItemsFit = computed(() => props.total <= maxVisibleItems.value);

      const hasMoreItemsLeft = computed(() => !allItemsFit.value && pageNumberBoundaries.value.lowest > 2);
      const hasMoreItemsRight = computed(() => !allItemsFit.value && pageNumberBoundaries.value.highest !== props.total - 1);

      const visibleInMiddle = computed(() => maxVisibleItems.value - 2);

      watch(
        () => props.total,
        () => {
          if (props.currentPage > props.total) {
            setPage(props.total);
          } else if (props.currentPage === 0 && props.total > 0) {
            setPage(1);
          }
        }
      );

      const range = (from: number, count: number) => Array.from(Array(count), (empty, index) => index + from);

      const pageNumberBoundaries = computed(() => {
        const isTail = props.total - props.currentPage < Math.floor(maxVisibleItems.value / 2);
        const firstMiddlePage = 2;
        const lastMiddlePage = props.total - 1;
        const lowest = props.currentPage + ACTIVE_ITEM_OFFSET - Math.ceil(visibleInMiddle.value / 2);
        const highest = lowest + Math.floor(visibleInMiddle.value / 2);

        if (allItemsFit.value) {
          return {
            lowest: firstMiddlePage,
            highest: lastMiddlePage,
          };
        }

        if (isTail) {
          return {
            lowest: props.total - visibleInMiddle.value + 1,
            highest: lastMiddlePage,
          };
        }

        return {
          lowest: lowest > 1 ? lowest : firstMiddlePage,
          highest: highest < props.total ? highest : lastMiddlePage,
        };
      });

      const visiblePageNumbers = computed(() => {
        const pageNumbersInMiddle = visibleInMiddle.value - Number(hasMoreItemsLeft.value) - Number(hasMoreItemsRight.value);
        const defaultValue = props.total - 2 > 0 ? props.total - 2 : 0;
        const count = allItemsFit.value ? defaultValue : pageNumbersInMiddle;

        return range(pageNumberBoundaries.value.lowest, count);
      });

      const decrementPage = () => {
        if (canDecrementPage.value) {
          setPage(props.currentPage - 1);
        }
      };

      const incrementPage = () => {
        if (canIncrementPage.value) {
          setPage(props.currentPage + 1);
        }
      };

      const setPage = (page: number) => {
        if (invalidPage.value) invalidPage.value = false;
        emit('update:currentPage', page);
      };

      const onGoTo = (page: number) => {
        const isValidPage = page !== 0 && page <= props.total;

        if (isValidPage) setPage(page);
        else invalidPage.value = true;
      };

      const shiftBy = (shift: number) => {
        setPage(props.currentPage + shift);
      };

      return {
        dictionary,
        invalidPage,
        canDecrementPage,
        canIncrementPage,
        canShiftToLeft,
        canShiftToRight,
        hasMoreItemsRight,
        hasMoreItemsLeft,
        visiblePageNumbers,
        pageNumberBoundaries,
        maxVisibleItems,
        visibleInMiddle,
        allItemsFit,
        decrementPage,
        incrementPage,
        setPage,
        onGoTo,
        shiftBy,
      };
    },
  });
</script>

<style scoped>
  .pagination {
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 2px;
    align-items: center;
    justify-content: start;
  }
  .right-icon::v-deep(.sui-icon) {
    transform: rotate(180deg);
  }
</style>
