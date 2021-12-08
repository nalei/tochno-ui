<template lang="pug">
.colors.storybook-card
  section.color-pallet(v-for='color of colors' :key='color')
    .color.caption-13px-medium(
      v-for='([customPropKey, customPropValue]) of getColorStepsBy(color)'
      :style='{ backgroundColor: customPropValue }'
      :key='customPropKey'
    ) {{ `${color} / ${onlyNumberTail(customPropKey)}` }}
      span.prop-key {{ `var(${customPropKey})` }}
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import getCssCustomProps from '@/utils/getCssCustomProps';

  export default defineComponent({
    setup() {
      const colors = ['Gray', 'Blue', 'Red'];
      const cssCustomProps = ref<[string, string][]>([]);

      onMounted(() => {
        cssCustomProps.value = getCssCustomProps();
      });

      const getColorStepsBy = (colorName: string) => {
        return cssCustomProps.value.filter(([key]) => key.includes(colorName.toLocaleLowerCase()));
      };

      const onlyNumberTail = (name: string) => /\d+$/.exec(name);

      return {
        colors,
        cssCustomProps,
        getColorStepsBy,
        onlyNumberTail,
      };
    },
  });
</script>

<style scoped>
  .colors {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 40px;
    justify-content: center;
  }
  .color-pallet {
    display: grid;
    grid-auto-rows: 40px;
    grid-row-gap: 20px;
  }
  .color {
    display: flex;
    align-items: center;
    text-align: left;
    justify-content: space-between;
    padding: 0 16px;
    border-radius: 5px;
    color: var(--white);
    &:nth-child(-n + 4) {
      color: var(--black);
    }
  }
</style>
