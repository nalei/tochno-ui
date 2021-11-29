<template lang="pug">
component.menu-list-item(
  tabindex='0'
  :to='href'
  :is='href ? "router-link" : "div"'
  :class='{ "item-active": active, [color]: true, [`${mode}-mode`]: mode !== "desktop", disabled: disabled }'
)
  .content
    span.content-svg(v-if='icon')
      Icon.menu-list-item-icon(v-bind:='icon')
    .content-text.caption-13px-medium(:class='{ "icon-included": icon }') {{ label }}
    slot
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import Icon from '@/components/icon/Icon.vue';
  import { Icon as IconProps } from '@/components/icon/Icon';
  import { MenuColor, MenuMode } from './MenuList';

  export default defineComponent({
    name: 'ListOption',
    components: { Icon },
    props: {
      label: {
        type: String,
        default: '',
      },
      icon: {
        type: Object as PropType<IconProps | null>,
        default: null,
      },
      href: {
        type: String,
        default: '',
      },
      active: {
        type: Boolean,
        default: false,
      },
      color: {
        type: String as PropType<MenuColor>,
        default: 'black',
      },
      mode: {
        type: String as PropType<MenuMode>,
        default: 'desktop',
        validator: (type: MenuMode) => {
          const types: MenuMode[] = ['desktop', 'tablet'];
          return types.includes(type);
        },
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
  });
</script>

<style scoped>
  .menu-list-item {
    display: flex;
    align-items: center;

    margin: 0 12px;
    padding: 0 12px;

    height: 40px;
    min-width: 40px;
    border-radius: 4px;
    transition: background-color var(--transition), color var(--transition);

    color: var(--font-color-primary);
    text-decoration: none;
    cursor: pointer;

    &.black {
      color: var(--black);
      .menu-list-item-icon {
        --icon-color: var(--black);
      }
    }

    &.gray {
      color: var(--gray-500);
      .menu-list-item-icon {
        --icon-color: var(--gray-500);
      }
    }

    &:hover {
      background-color: var(--gray-50);
    }
    &.disabled {
      pointer-events: none;
      color: var(--gray-500);
      .menu-list-item-icon {
        --icon-color: var(--gray-500);
      }
    }
    &.item-active {
      background-color: var(--gray-50);
      color: var(--blue-500);
      .menu-list-item-icon {
        --icon-color: var(--blue-500);
      }
    }

    &:not(.tablet-mode).item-active.children-includes {
      color: var(--black);
      .menu-list-item-icon {
        --icon-color: var(--black);
      }
    }

    .content {
      position: relative;
      display: flex;
      align-items: center;
      flex-grow: 1;
      height: 100%;
      width: 100%;
      white-space: nowrap;
    }

    .content-svg {
      position: absolute;
      width: 22px;
      height: 22px;
      .menu-list-item-icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 22px;
        height: 22px;
      }
    }

    .content-text {
      margin-left: 22px;
      &.icon-included {
        margin-left: 34px;
      }
    }
  }

  .tablet-mode {
    margin: 0;
    width: 70px;
    height: 48px;

    &.gray {
      height: 32px;
      .content-text {
        display: none;
      }
    }

    &:hover {
      background-color: transparent;
      color: var(--blue-500);
      .menu-list-item-icon {
        --icon-color: var(--blue-500);
      }
    }

    &.item-active {
      background-color: transparent;
      color: var(--blue-500);
      .content-text {
        font-weight: 600;
      }
    }

    .content {
      flex-direction: column;
      justify-content: center;
    }

    .content-svg {
      position: relative;
    }

    .content-text {
      margin-left: 0;
      font-weight: 500;
      font-size: 9px;
      line-height: 20px;
      letter-spacing: normal;
      &.icon-included {
        margin-left: 0;
        margin-top: 2px;
      }
    }
  }
</style>
