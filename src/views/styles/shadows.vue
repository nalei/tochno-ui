<template lang="pug">
.shadows.storybook-card
  .shadow.caption-13px-medium(
    v-for='([customPropKey, customPropValue]) of getShadows'
    :style='{ boxShadow: customPropValue }'
    :key='customPropKey'
  ) {{ `Shadow ${onlyNumberTail(customPropKey)}` }}
    span.prop-key {{ `var(${customPropKey})` }}
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted, ref } from 'vue';
  import getCssCustomProps from '@/utils/getCssCustomProps';

  export default defineComponent({
    setup() {
      const cssCustomProps = ref<[string, string][]>([]);

      onMounted(() => {
        cssCustomProps.value = getCssCustomProps();
      });

      const getShadows = computed(() => {
        return cssCustomProps.value.filter(([key]) => key.includes('shadow'));
      });

      const onlyNumberTail = (name: string) => /\d+$/.exec(name);

      return {
        cssCustomProps,
        getShadows,
        onlyNumberTail,
      };
    },
  });
</script>

<style scoped>
  .shadows {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 40px;
    justify-content: center;
  }
  .shadow {
    align-items: center;
    border-radius: 5px;
    display: flex;
    height: 80px;
    justify-content: space-between;
    padding: 0 16px;
    text-align: left;
  }
</style>
