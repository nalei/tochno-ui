<template lang="pug">
ul.menu-list(:class='menuListClasses')
  .marker(v-if='color === "black" && mode === "tablet"' :style='{ transform: `translateY(${markerTranslate + 4}px)` }')
  li.menu-list__li(
    v-for='({ label, icon, href, active, children, disabled }, index) in options'
    @keydown.up.prevent='onPageUp'
    @keydown.down.prevent='onPageDown'
    :ref='active ? "activeLi" : null'
    :key='index'
  )
    template(v-if='children')
      ListOption.children-includes(
        v-bind='{ label, icon, href, active, color, mode, disabled }'
        @keydown.enter='expandSubmenu(index)'
        @click.prevent='expandSubmenu(index)'
        :class='`item-${index + 1}`'
      )
        Icon.chevron(
          v-if='children && mode === "desktop"'
          name='ic24-chevron-less-small'
          :color='disabled ? "--gray-300" : color'
          :class='{ "chevron-open": index === activeOptionIndex }'
        )
      TransitionExpand
        MenuList.submenu(
          v-show='index === activeOptionIndex || mode === "tablet"'
          v-if='!disabled'
          :options='children'
        )

    template(v-else)
      ListOption(v-bind='{ label, icon, href, active, color, mode, disabled }')
</template>

<script lang="ts">
  import { computed, defineComponent, ref, PropType, watch, nextTick, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import Icon from '@/components/icon/Icon.vue';
  import ListOption from '@/components/menu/ListOption.vue';
  import TransitionExpand from '@/components/menu/TransitionExpand.vue';
  import { ListOption as ListOptionProps } from '@/components/menu/ListOption';
  import { MenuColor, MenuMode } from '@/components/menu/MenuList';

  export default defineComponent({
    name: 'MenuList',
    components: { Icon, ListOption, TransitionExpand },
    props: {
      options: {
        type: Array as PropType<ListOptionProps[]>,
        default: () => [],
      },
      mode: {
        type: String as PropType<MenuMode>,
        default: 'desktop',
        validator: (type: MenuMode) => {
          const types: MenuMode[] = ['desktop', 'tablet'];
          return types.includes(type);
        },
      },
      color: {
        type: String as PropType<MenuColor>,
        default: 'black',
        validator: (value: MenuColor) => {
          const colors: MenuColor[] = ['black', 'gray'];
          return colors.includes(value);
        },
      },
    },
    setup(props) {
      const route = useRoute();
      const activeOptionIndex = ref(-1);

      const activeLi = ref<HTMLLIElement | null>(null);
      const markerTranslate = ref(0);

      const menuListClasses = computed(() => ({
        [props.mode]: props.mode !== 'desktop',
      }));

      watch([activeLi, () => props.mode], ([value, mode]) => {
        nextTick(() => (markerTranslate.value = value && mode === 'tablet' ? value?.offsetTop : 0));
      });

      const expandSubmenu = (index: number) => {
        activeOptionIndex.value = activeOptionIndex.value === index ? -1 : index;
      };

      onMounted(() => {
        props.options.forEach((el, i) => {
          if (el.children) {
            el.children.forEach((p) => {
              if (p.href === route.path) {
                activeOptionIndex.value = i;
              }
            });
          }
        });
      });

      const onPageUp = (e: Event) => {
        const parent = (e.target as Element).parentElement;
        if (!parent) {
          return;
        }

        const prev = parent.previousElementSibling;
        if (prev) {
          const submenu = prev.querySelector('.submenu');
          if (submenu && submenu.clientHeight) {
            const nextInnerItem = submenu.lastElementChild;
            if (nextInnerItem) {
              const link = nextInnerItem?.querySelector('.menu-list-item');
              if (link) {
                (link as HTMLElement).focus();
              }
            }
          } else {
            const link = prev?.querySelector('.menu-list-item');
            if (link) {
              (link as HTMLElement).focus();
            }
          }
        } else {
          const externalCurrentItem = parent.parentElement?.parentElement;
          if (externalCurrentItem) {
            const link = externalCurrentItem?.querySelector('.menu-list-item');
            if (link) {
              (link as HTMLElement).focus();
            }
          }
        }
      };

      const onPageDown = (e: Event) => {
        const parent = (e.target as Element).parentElement;
        if (!parent) {
          return;
        }

        const submenu = parent.querySelector('.submenu');
        if (submenu && submenu.clientHeight) {
          const nextInnerItem = submenu.querySelector('.menu-list__li .menu-list-item');
          if (nextInnerItem) {
            (nextInnerItem as HTMLElement).focus();
          }
        } else {
          const nextItem = parent.nextElementSibling;
          if (nextItem) {
            const link = nextItem?.querySelector('.menu-list-item');
            if (link) {
              (link as HTMLElement).focus();
            }
          } else {
            const externalCurrentItem = parent.parentElement?.parentElement;
            if (externalCurrentItem) {
              const nextExternalItem = externalCurrentItem.nextElementSibling;
              if (nextExternalItem) {
                const link = nextExternalItem?.querySelector('.menu-list-item');
                if (link) {
                  (link as HTMLElement).focus();
                }
              }
            }
          }
        }
      };

      return { activeOptionIndex, menuListClasses, markerTranslate, activeLi, expandSubmenu, onPageUp, onPageDown };
    },
  });
</script>

<style scoped>
  .menu-list {
    position: relative;
    width: inherit;

    &__li {
      position: relative;
      &:not(:first-of-type) {
        margin-top: 4px;
      }

      ::v-deep(.menu-list-item) {
        &:focus {
          background-color: var(--gray-50);
        }
      }
    }

    .chevron {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%) rotate(180deg);
      transition: transform 0.3s ease;
      width: 22px;
      height: 22px;
    }

    .chevron-open {
      transform: translateY(-50%);
    }

    .submenu {
      margin-left: 14px;

      .menu-list__li:first-of-type {
        padding-top: 4px;
      }

      .marker {
        display: none;
      }

      ::v-deep(.menu-list-item) {
        margin-left: 23px;

        &.item-active {
          .menu-list-item__content-text {
            font-weight: 500;
          }
        }

        .menu-list-item__content-text {
          margin-left: 10px;
          font-weight: normal;
        }
      }
    }
  }

  .tablet {
    .menu-list__li {
      &:not(:first-of-type) {
        margin-top: 8px;
      }

      &:hover {
        .submenu {
          visibility: visible;
        }
      }

      ::v-deep(.menu-list-item) {
        &:focus {
          background-color: transparent;
        }
      }
    }

    .marker {
      display: block;
      position: absolute;
      height: 30px;
      width: 4px;
      background: var(--gray-900);
      z-index: 2;
      border-radius: 6px;
      user-select: none;
      pointer-events: none;
      top: 0;
      left: -2px;
      transition: transform 0.4s cubic-bezier(0.11, 0.11, 0.19, 1.13), height 0.3s cubic-bezier(0.42, 0, 0.24, 1.01);
      transform: translateY(4px);
    }

    .submenu {
      visibility: hidden;
      position: absolute;
      top: -2px;
      left: 70px;
      width: 176px;
      border-radius: 0 6px 6px 0;
      background: var(--gray-900);
      margin: 0;
      padding: 4px;
      color: var(--white);
      transition: visibility 0.12s ease;

      .menu-list__li {
        &:first-of-type {
          padding-top: 0;
        }
        &:not(:first-of-type) {
          margin-top: 2px;
        }
      }

      ::v-deep(.menu-list-item) {
        height: 40px;
        margin: 0;
        padding: 0 14px;

        &.black {
          color: var(--white);
        }

        &.item-active {
          background-color: var(--black);
          .menu-list-item__content-text {
            font-weight: normal;
          }
        }

        .menu-list-item__content-text {
          margin: 0;
          font-size: 13px;
          line-height: 20px;
          letter-spacing: 0.4px;
        }

        &:hover {
          background-color: var(--black);
        }
      }
    }
  }
</style>
