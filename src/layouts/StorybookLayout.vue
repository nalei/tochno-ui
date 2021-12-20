<template lang="pug">
PageShell
  template(#sidebar)
    PageSidebar
      template(#header)
        .brand
          .brand-icon
            img(src='@/assets/somerset.jpeg' height='40')
          span.h-500 Tochno UI
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
    name: 'StorybookLayout',
    components: { MenuList, PageShell, PageSidebar },
    setup() {
      const screenMode = ref<MenuMode>('desktop');
      const route = useRoute();

      onMounted(() => {
        if (window.innerWidth < 1280) {
          screenMode.value = 'tablet';
        }

        window.addEventListener('resize', () => (screenMode.value = window.innerWidth < 1280 ? 'tablet' : 'desktop'), { passive: true });
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
            active: ['button', 'checkbox', 'input', 'select', 'textarea', 'toggle'].includes(String(route.name)),
            children: [
              {
                label: 'Button',
                href: '/button',
                active: route.name === 'button',
              },
              {
                label: 'Checkbox',
                href: '/checkbox',
                active: route.name === 'checkbox',
              },
              {
                label: 'Input',
                href: '/input',
                active: route.name === 'input',
              },
              {
                label: 'Select',
                href: '/select',
                active: route.name === 'select',
              },
              {
                label: 'Textarea',
                href: '/textarea',
                active: route.name === 'textarea',
              },
              {
                label: 'Toggle',
                href: '/toggle',
                active: route.name === 'toggle',
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

    span {
      padding-top: 4px;
      font-weight: 600;
    }
  }

  .brand-icon {
    position: relative;
    overflow: hidden;
    border-radius: 3px;
    height: 40px;
    width: 40px;
    min-width: 40px;
    line-height: 40px;
    white-space: nowrap;
    margin: 0 12px 0 4px;

    &:after {
      box-shadow: inset 0 0 0 1px var(--gray-300);
      border-radius: 3px;
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
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