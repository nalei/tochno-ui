<template lang="pug">
.sui-tooltip(v-if='show' role='tooltip')
  .sui-tooltip-message.text-12px-regular {{ message }}
  .sui-tooltip-arrow(data-popper-arrow)
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Tooltip',
    inheritAttrs: false,
    props: {
      message: {
        type: String,
        default: '',
      },
      show: {
        type: Boolean,
        default: false,
      },
    },
  });
</script>

<style>
  .sui-tooltip {
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 32px;
    color: white;
    margin: 0;
    background-color: var(--gray-900);
    padding: 8px 10px;
    max-width: 300px;
    width: max-content;
    min-width: 124px;
    pointer-events: none;
    border-radius: 4px;
    box-shadow: var(--shadow-02);
    z-index: 99;

    &-arrow,
    &-arrow::before {
      position: absolute;
      width: 8px;
      height: 8px;
      right: 0;
      z-index: -1;
    }

    &-arrow::before {
      content: '';
      transform: rotate(45deg);
      background-color: var(--gray-900);
    }

    &[data-popper-placement^='left'] &-arrow {
      right: -4px;
    }

    &[data-popper-placement^='right'] &-arrow {
      left: -4px;
    }

    &[data-popper-placement^='top'] &-arrow {
      bottom: -4px;
    }

    &[data-popper-placement^='bottom'] &-arrow {
      top: -4px;
    }
  }
</style>
