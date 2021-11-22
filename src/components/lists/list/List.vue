<template lang="pug">
ul.list
  li.list-item.text-14px-regular(v-for='(item, index) in data' :key='index')
    slot(
      name='listItem'
      :index='index'
      :element='item'
    )
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';

  export default defineComponent({
    name: 'List',
    props: {
      data: {
        type: Array as PropType<string[] | Record<string, unknown>[]>,
        default: () => [],
        required: true,
      },
    },
  });
</script>

<style scoped>
  .list {
    list-style: none;
    margin: 0;
    padding: 0;
    border: 1px solid var(--gray-200);
    border-radius: 4px;
  }

  .list-item {
    display: flex;
    align-items: center;
    min-height: 48px;
    padding: 0px 16px;

    & + .list-item {
      border-top: 1px solid var(--gray-200);
    }
  }
</style>
