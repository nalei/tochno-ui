<template lang="pug">
button.pagination-item.pagination-control(v-if='type === "control"' :disabled='disabled')
  Icon.control-icon(name='ic24-chevron-left')
.go-to-input-wrapper(
  v-else-if='type === "go-to-input"'
  :style='goToInputStyles'
  :class='{ "invalid-page": invalid }'
)
  input.pagination-item.go-to-input.text-14px-medium(
    v-model.number='goToInputValue'
    @keypress.enter='emitGoTo'
    @keypress='allowOnlyNumberInput'
  )
  button.pagination-item.go-to-button.text-14px-medium(type='button' @click.stop='emitGoTo') Go
button.pagination-item.shifter.page-number.text-14px-medium(
  v-else-if='type === "shifter"'
  :disabled='disabled'
  :class='paginationItemClasses'
)
  Icon.shifter-icon(name='ic24-double-chevron-left' color='--gray-900')
button.pagination-item.page-number.text-14px-medium(
  v-else
  :disabled='current'
  :class='paginationItemClasses'
) {{ page }}
</template>

<script lang="ts">
  import { computed, defineComponent, PropType, ref, watch } from 'vue';
  import Icon from '@/components/icon/Icon.vue';
  import { PaginationItemType } from '@/components/pagination/PaginationItem';

  export default defineComponent({
    name: 'PaginationItem',
    components: { Icon },
    emits: ['goto'],
    props: {
      current: {
        type: Boolean,
        default: false,
      },
      type: {
        type: String as PropType<PaginationItemType>,
        default: 'number',
      },
      page: {
        type: Number,
        default: 1,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      invalid: {
        type: Boolean,
        default: false,
      },
    },
    setup(props, { emit }) {
      const goToInputValue = ref(props.page);
      const paginationItemClasses = computed(() => ({
        current: props.current,
        disabled: props.disabled,
      }));

      const goToInputStyles = computed(() => ({
        '--go-to-input-width': `${String(goToInputValue.value).length}ch`,
      }));

      const resetGoToInputValue = () => {
        goToInputValue.value = props.page;
      };

      watch(() => props.page, resetGoToInputValue);

      const allowOnlyNumberInput = (event: KeyboardEvent) => {
        if ((event.key !== 'Enter' && Number.isNaN(Number(event.key))) || event.code === 'Space') event.preventDefault();
      };

      const emitGoTo = () => {
        emit('goto', Number(goToInputValue.value));
      };

      return {
        paginationItemClasses,
        goToInputValue,
        goToInputStyles,
        allowOnlyNumberInput,
        resetGoToInputValue,
        emitGoTo,
      };
    },
  });
</script>

<style scoped>
  .pagination-item {
    box-sizing: border-box;
    appearance: none;
    border: none;
    background: none;
    min-width: 32px;
    height: 32px;
    border-radius: 50%;
    padding: 5px;
    cursor: pointer;
    outline: none;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;

    &:disabled {
      cursor: default;
    }
    &:focus {
      //box-shadow: 0 0 0 2px var(--blue-500);
    }
  }
  .page-number {
    user-select: none;
    color: var(--gray-500);
    &:not(:disabled):hover {
      background-color: var(--gray-100);
    }
  }
  .current {
    background-color: var(--gray-50);
    color: var(--blue-500);
  }
  .pagination-control {
    &:hover {
      background-color: var(--gray-50);
    }
    &:active {
      .control-icon {
        --icon-color: var(--gray-500);
      }
    }
    &:disabled,
    &:disabled:hover {
      background-color: transparent;
      .control-icon {
        --icon-color: var(--gray-300);
      }
    }
  }
  .control-icon {
    --icon-color: var(--gray-900);
    width: 20px;
    height: 20px;
  }

  .go-to-input-wrapper {
    display: flex;
    box-sizing: border-box;
    border-radius: 4px;
    min-width: 64px;
    &:hover {
      .go-to-input,
      .go-to-button {
        border-color: var(--blue-500);
      }
      .go-to-button {
        background-color: var(--blue-500);
      }
    }
    &.invalid-page {
      .go-to-input,
      .go-to-button {
        border-color: var(--red-500);
      }
      &:hover {
        .go-to-input,
        .go-to-button {
          border-color: var(--red-500);
        }
      }
      .go-to-button:focus {
        box-shadow: inset 0 0 0 2px var(--blue-500);
      }
    }
  }
  .go-to-input {
    border: 1px solid var(--blue-500);
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right-color: transparent;
    width: calc(var(--go-to-input-width, 1ch) + 15px);
    cursor: text;
    text-align: center;
    &:focus {
      box-shadow: none;
      border-color: var(--blue-500);
    }
  }
  .go-to-button {
    color: var(--white);
    background-color: var(--blue-500);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border: 1px solid var(--blue-500);
    border-left: none;
  }

  .shifter {
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: '...';
    }
    &:not(:disabled):hover {
      &::before {
        content: none;
      }
      .shifter-icon {
        display: block;
        width: 20px;
        height: 20px;
      }
    }
  }
  .shifter-icon {
    display: none;
  }
</style>
