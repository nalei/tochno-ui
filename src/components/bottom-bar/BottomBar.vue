<template lang="pug">
transition(name='slide-top')
  .bottom-bar(v-if='opened')
    .bottom-bar__title
      slot(name='title')
    .bottom-bar__buttons
      slot
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  export default defineComponent({
    name: 'BottomBar',
    components: {},
    props: {
      opened: {
        type: Boolean as PropType<boolean>,
        default: false,
      },
    },
  });
</script>

<style scoped>
  .bottom-bar {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 56px;
    padding: 0 16px;
    background: var(--white);
    border-radius: 8px 8px 0 0;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
    z-index: 8;
    bottom: 0;

    width: calc(100% - 288px);
    max-width: 1064px;

    @media (--viewport-sm) {
      width: calc(100% - 119px);
    }

    &__title {
      font-weight: normal;
    }

    &__buttons {
      display: flex;

      ::v-deep(.button + *) {
        margin-left: 16px;
      }
    }
  }
</style>
