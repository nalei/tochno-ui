<template lang="pug">
.storybook-card
  section
    h2.section-title.h-800 Component usage
    .grid(v-for='(unit, i) in 12')
      .caption-13px-medium(:class='`grid-${i + 1}-12`') .grid-{{ i + 1 }}-12

  section
    h2.section-title.h-500 Example responsive (all: 2, lg: 2, md: 2, sm: 1)
    .grid
      .grid-6-12.grid-md-6-12.grid-sm-12-12(v-for='u in 2')
        h3.h-500 Lorem Ipsum
        p {{ lorem }}

  section
    h2.section-title.h-500 Example responsive (all: 3, lg: 3, md: 1, sm: 1)
    .grid
      .grid-4-12.grid-md-12-12(v-for='u in 3')
        h3.h-500 Lorem Ipsum
        p {{ lorem }}

  section
    h2.section-title.h-500 Example responsive (all: 4, lg: 4, md: 2, sm: 1)
    .grid
      .grid-3-12.grid-lg-3-12.grid-md-6-12.grid-sm-12-12(v-for='u in 4')
        h3.h-500 Lorem Ipsum
        p {{ lorem }}

  section
    h2.section-title.h-500 Example responsive (all: 6, lg: 3, md: 2, sm: 1)
    .grid
      .grid-2-12.grid-lg-2-12.grid-md-4-12.grid-sm-12-12(v-for='u in 6')
        h3.h-500 Lorem Ipsum
        p {{ lorem }}

  section
    h2.section-title.h-500
      | Example responsive (all: 2, lg: 2, md: 2, sm: 1)
      | with 16px gap between blocks (.grid_gap_16)
    .grid.grid_gap_16
      .grid-6-12.grid-md-6-12.grid-sm-12-12(v-for='u in 2')
        h3.h-500 Lorem Ipsum
        p {{ lorem }}

  section
    h2.section-title.h-500
      | Example responsive (all: 3, lg: 3, md: 1, sm: 1)
      | with 16px gap between blocks (.grid_gap_16)
    .grid.grid_gap_16
      .grid-4-12.grid-md-12-12(v-for='u in 3')
        h3.h-500 Lorem Ipsum
        p {{ lorem }}

  section
    h2.section-title.h-500
      | Example responsive (all: 4, lg: 4, md: 2, sm: 1)
      | with 16px gap between blocks (.grid_gap_16)
    .grid.grid_gap_16
      .grid-3-12.grid-lg-3-12.grid-md-6-12.grid-sm-12-12(v-for='u in 4')
        h3.h-500 Lorem Ipsum
        p {{ lorem }}

  section
    h2.section-title.h-500
      | Example responsive (all: 6, lg: 3, md: 2, sm: 1)
      | with 16px gap between blocks (.grid_gap_16)
    .grid.grid_gap_16
      .grid-2-12.grid-lg-2-12.grid-md-4-12.grid-sm-12-12(v-for='u in 6')
        h3.h-500 Lorem Ipsum
        p {{ lorem }}

  section
    h2.section-title.h-500 Vertical alignment by stretch (default)
    .grid
      .grid-8-12
        h3.h-500 Heading
        p Text
      .grid-4-12
        p Text

  section
    h2.section-title.h-500 Vertical alignment by top (.grid_top)
    .grid.grid_top
      .grid-8-12
        h3.h-500 Heading
        p Text
      .grid-4-12
        p Text

  section
    h2.section-title.h-500 Vertical alignment by center (.grid_center)
    .grid.grid_center
      .grid-8-12
        h3.h-500 Heading
        p Text
      .grid-4-12
        p Text

  section
    h2.section-title.h-500 Vertical alignment by bottom (.grid_bottom)
    .grid.grid_bottom
      .grid-8-12
        h3.h-500 Heading
        p Text
      .grid-4-12
        p Text
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    data() {
      return {
        lorem: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
      };
    },
  });
</script>

<style scoped>
  .grid {
    background: var(--gray-100);
  }
  [class*='grid-'] {
    padding: 10px;
    background: var(--gray-500);
    border-radius: 4px;
    border: 1px solid var(--gray-200);
  }
  section {
    margin-bottom: 64px;
  }
</style>
