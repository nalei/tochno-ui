<template lang="pug">
.tabs-wrapper
  .tabs(role='tablist')
    button.tab(
      v-for='(item, i) of items'
      @click='onItemClick(i, item)'
      :ref='i === activeItem ? "activeTabRef" : null'
      :key='item.title'
      :disabled='item.disabled'
      :class='{ active: i === activeItem, [`${size}`]: true }'
    )
      .marker(v-if='i === 0' :style='{ transform: `translateX(${tabTranslate}px)`, width: `${activeTabWidth}px` }')
      span.tab-content
        Icon.tab-icon(v-if='item.icon' v-bind='{ ...item.icon }')
        .tab-title(:class='size === "l" ? "caption-16px-medium" : "caption-14px-medium"') {{ item.title }}
  slot(name='actions')
</template>

<script lang="ts">
  import { computed, defineComponent, nextTick, PropType, ref, watch } from 'vue';
  import Icon from '@/components/icon/Icon.vue';
  import { TabsItem } from '@/components/tabs/Tabs';
  import { SelectSize } from '@/components/select/Select';

  export default defineComponent({
    name: 'Tabs',
    emits: ['update:activeItem', 'change'],
    props: {
      activeItem: {
        type: Number,
        default: null,
      },
      items: {
        type: Array as PropType<TabsItem[]>,
        default: () => [],
      },
      size: {
        type: String as PropType<SelectSize>,
        default: 'm',
      },
    },
    components: { Icon },
    setup(props, { emit }) {
      const activeTabRef = ref<HTMLElement | null>(null);
      const tabTranslate = ref(0);

      const activeTabWidth = computed(() => activeTabRef.value?.offsetWidth);

      watch(activeTabRef, (value) => {
        nextTick(() => (tabTranslate.value = value?.offsetLeft || 0));
      });

      const onItemClick = (index: number, item: TabsItem) => {
        if (props.activeItem === index) {
          return;
        }
        emit('update:activeItem', index);
        emit('change', item, index);
      };

      return {
        activeTabRef,
        activeTabWidth,
        tabTranslate,
        onItemClick,
      };
    },
  });
</script>

<style scoped>
  .tabs-wrapper {
    position: relative;
    display: flex;
    align-items: flex-start;
    margin-bottom: 24px;
  }

  .tabs {
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
  }

  .tab {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--gray-150);
    border: none;
    box-sizing: border-box;
    color: var(--gray-500);
    cursor: pointer;
    height: fit-content;
    margin: 0;
    max-width: fit-content;
    padding: 8px 12px;
    user-select: none;
    transition: color var(--transition);

    &.l {
      padding: 12px 24px;
    }

    &:first-of-type {
      border-radius: 6px 0 0 6px;
    }

    &:last-of-type {
      border-radius: 0 6px 6px 0;
    }

    .tab-content {
      z-index: 3;
      align-items: center;
      box-sizing: border-box;
      display: flex;
      height: 24px;
    }

    .tab-icon {
      margin-right: 8px;

      &::v-deep(path) {
        --icon-color: var(--gray-500);
      }
    }

    .tab-title {
      white-space: nowrap;
    }

    &:hover {
      color: var(--blue-500);

      &::v-deep(path) {
        --icon-color: var(--blue-500);
      }
    }

    &:active,
    &.active {
      color: var(--blue-500);

      &::v-deep(path) {
        --icon-color: var(--blue-500);
      }
    }

    &:disabled {
      background-color: transparent;
      color: var(--gray-300);
      pointer-events: none;

      &::v-deep(path) {
        --icon-color: var(--gray-300);
      }
    }
  }
  .marker {
    display: block;
    height: 100%;
    background: var(--white);
    position: absolute;
    z-index: 0;
    box-shadow: -2px 2px 8px rgba(67, 80, 91, 0.16);
    border-radius: 6px;
    user-select: none;
    pointer-events: none;
    left: 0;
    transition: transform 0.5s cubic-bezier(0.11, 0.11, 0.19, 1.13), width 0.3s cubic-bezier(0.42, 0, 0.24, 1.01);
    transform: translateX(0);
  }
</style>
