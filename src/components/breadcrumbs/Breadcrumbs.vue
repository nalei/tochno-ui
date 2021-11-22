<template lang="pug">
nav
  ul.breadcrumbs
    li.crumb(
      v-for='(crumb, i) in crumbs'
      :key='i'
      :class='{ "last-child": crumbs.length === i + 1 }'
    )
      Icon.crumb-divider(name='ic24-arrow-left')
      component.crumb-link.text-14px-medium(:to='crumb.link' :is='!crumb.link || crumbs.length === i + 1 ? "span" : "router-link"') {{ crumb.label }}
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import Icon from '@/components/icon/Icon.vue';
  import { Crumb } from '@/components/breadcrumbs/Breadcrumbs';

  export default defineComponent({
    name: 'Breadcrumbs',
    components: { Icon },
    props: {
      crumbs: {
        type: Array as PropType<Crumb[]>,
        default: () => [],
      },
    },
  });
</script>

<style scoped>
  .breadcrumbs {
    display: flex;
  }

  .crumb {
    display: flex;
    align-items: center;
    &:hover:not(.last-child) {
      .crumb-divider {
        --icon-color: var(--blue-500);
      }
      .crumb-link {
        color: var(--blue-500);
      }
    }
  }

  .crumb-divider {
    --icon-color: var(--gray-500);
    width: 16px;
    height: 16px;
  }

  .crumb-link {
    color: var(--gray-500);
    text-decoration: none;
    margin: 0 6px;
    transition: color var(--transition);
  }
</style>
