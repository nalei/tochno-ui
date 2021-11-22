<template lang="pug">
PageShell
  template(#sidebar)
    PageSidebar
      template(#header)
        .brand
          img(src='@/assets/somerset.jpeg' height='40')
          span.h-500 Tochno
      MenuList.sidebar-menu(:options='storybookMenu' :mode='screenMode')
  .content-wrapper
    slot
</template>

<script lang="ts">
  import { computed, defineComponent, ComputedRef, ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import PageSidebar from '@/components/layouts/page/PageSidebar.vue';
  import PageShell from '@/components/layouts/page/PageShell.vue';
  import MenuList from '@/components/menu/MenuList.vue';
  import { ListOption } from '@/components/menu/ListOption';
  import { MenuMode } from '@/components/menu/MenuList';

  export default defineComponent({
    name: 'DefaultLayout',
    components: { MenuList, PageShell, PageSidebar },
    setup() {
      const screenMode = ref<MenuMode>('desktop');
      const route = useRoute();

      onMounted(() => {
        if (window.innerWidth < 1280) {
          screenMode.value = 'tablet';
        }

        window.addEventListener(
          'resize',
          () => {
            return (screenMode.value = window.innerWidth < 1280 ? 'tablet' : 'desktop');
          },
          { passive: true }
        );
      });

      const storybookMenu: ComputedRef<ListOption[]> = computed(() => {
        return [
          {
            label: 'Styles',
            active: ['typography', 'colors', 'shadows'].includes(String(route.name)),
            children: [
              {
                label: 'Typography',
                href: '/typography',
                active: route.name === 'typography',
              },
              {
                label: 'Colors',
                href: '/colors',
                active: route.name === 'colors',
              },
              {
                label: 'Shadows',
                href: '/shadows',
                active: route.name === 'shadows',
              },
            ],
          },
          {
            label: 'Svg Icons',
            href: '/svg-icons',
            active: route.name === 'svg-icons',
          },
          {
            label: 'Form elements',
            active: ['buttons', 'checkboxes', 'inputs', 'textareas', 'selects'].includes(String(route.name)),
            children: [
              {
                label: 'Buttons',
                href: '/buttons',
                active: route.name === 'buttons',
              },
              {
                label: 'Checkboxes',
                href: '/checkboxes',
                active: route.name === 'checkboxes',
              },
              {
                label: 'Inputs',
                href: '/inputs',
                active: route.name === 'inputs',
              },
              {
                label: 'Textareas',
                href: '/textareas',
                active: route.name === 'textareas',
              },
              {
                label: 'Selects',
                href: '/selects',
                active: route.name === 'selects',
              },
            ],
          },
          {
            label: 'Breadcrumbs',
            href: '/breadcrumbs',
            active: route.name === 'breadcrumbs',
          },
          {
            label: 'Grid system',
            href: '/grid-system',
            active: route.name === 'grid-system',
          },
          {
            label: 'Pagination',
            href: '/pagination',
            active: route.name === 'pagination',
          },
          {
            label: 'Sorted list',
            href: '/sorted-list',
            active: route.name === 'sorted-list',
          },
          {
            label: 'Tables',
            href: '/tables',
            active: route.name === 'tables',
          },
          {
            label: 'Tabs',
            href: '/tabs',
            active: route.name === 'tabs',
          },
        ];
      });

      return { screenMode, storybookMenu };
    },
  });
</script>

<style scoped>
  .content-wrapper {
    padding: 16px 24px;
  }

  .brand {
    display: flex;
    align-items: center;
    flex-grow: 1;
    overflow: hidden;
    img {
      margin-right: 16px;
    }
    span {
      padding-top: 4px;
      font-weight: 600;
    }
  }
</style>

<style>
  .storybook-card {
    padding: 32px;
    border-radius: 8px;
    background-color: var(--white);
    box-shadow: var(--shadow-02);
    min-height: calc(100vh - 60px);
  }

  .section-title {
    margin-bottom: 30px;
  }

  .usage-example {
    display: flex;
    align-items: center;
  }

  .code-usage {
    background-color: var(--gray-100);
    width: min-content;
    padding: 15px;
    border-radius: 4px;
    margin-right: 15px;
  }
</style>
