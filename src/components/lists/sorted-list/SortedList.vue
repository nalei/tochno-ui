<template lang="pug">
Draggable.dnd-list(
  v-model='items'
  v-bind='dragOptions'
  itemKey='value'
)
  template(#item='{ element, index }')
    .dnd-list__row.dnd-list__draggable(:data-index="index")
      .dnd-list__drag-icon
        Icon(name='ic24-drop')
      span.dnd-list_order-prefix.text-14px-regular {{ index + 1 }}.
      span.dnd-list__label.text-14px-regular {{ element.label }}
      .flexspace
      .row-control
        slot(
          name='control'
          :row='element'
          :index='index'
        )
</template>

<script lang="ts">
  import { computed, defineComponent, PropType } from 'vue';
  import Draggable from 'vuedraggable';
  import Icon from '@/components/icon/Icon.vue';
  import { ISortedListRow } from '@/components/lists/sorted-list/SortedList';

  export default defineComponent({
    name: 'SortedList',
    components: { Icon, Draggable },
    props: {
      modelValue: {
        type: Array as PropType<ISortedListRow[]>,
        default: () => [],
      },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const dragOptions = {
        animation: 200,
        fallbackTolerance: 1,
        touchStartThreshold: 1,
        easing: 'cubic-bezier(0,0,1,1)',
        forceFallback: true,
        fallbackOnBody: true,
        dragClass: 'drag',
        ghostClass: 'ghost',
        group: 'description',
        disabled: false,
      };

      const items = computed({
        get: () => props.modelValue,
        set: (value) => {
          emit('update:modelValue', value);
        },
      });

      return { dragOptions, items };
    },
  });
</script>

<style scoped>
  .dnd-list {
    border-radius: 8px;

    &__row {
      display: flex;
      align-items: center;
      min-height: 48px;
      padding: 0 8px;

      &:first-child {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
      }

      &:last-child {
        border-bottom-right-radius: inherit;
        border-bottom-left-radius: inherit;
      }

      &:hover {
        .dnd-list__drag-icon {
          --icon-color: var(--blue-500);
        }
      }
    }

    &__drag-icon {
      height: 18px;
      width: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 8px;
      --icon-color: var(--gray-300);
    }

    &_order-prefix {
      margin-right: 8px;
    }

    &__draggable {
      font-size: 14px;
      background-color: var(--white);
      border: 1px solid var(--gray-200);
      user-select: none;
      cursor: grab;

      &.ghost {
        opacity: 0.5;
      }
    }
  }

  .dnd-list__row + .dnd-list__row {
    border-top-width: 0;
  }

  .row-control {
    display: flex;
    align-items: center;

    ::v-deep(.button.s.icon-only .button-icon) {
      width: 20px;
      height: 20px;
    }

    ::v-deep(.button:not(:first-of-type)) {
      margin-left: 14px;
    }
  }
</style>
