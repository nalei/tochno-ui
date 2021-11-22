<template lang="pug">
.icons.storybook-card
  section.icon-component-usage
    h2.section-title.h-800 Component usage
    .usage-example
      pre.code-usage
        code
          | Icon(
          | &nbsp;&nbsp;name="ic24-setting"
          | &nbsp;&nbsp;color="--blue-500"
          | )
      Icon.sprite-icon(name='ic24-setting' color='--blue-500')

  section.icons-preview
    h2.section-title.h-800 Icons
    .icon-size-block(v-for='[size, nameSet] of icons.entries()' :key='size')
      .icon-block
        .icon-example(v-for='icon of nameSet' :key='icon')
          figure.icon
            Icon(:name='icon')
          figcaption.icon-caption.caption-13px-medium {{ icon }}
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Icon from '@/components/icon/Icon.vue';
  import ICON_LIST from '@/common/iconNameList';

  export default defineComponent({
    components: { Icon },
    setup() {
      return { ...useIcons() };
    },
  });

  const useIcons = () => {
    const getIconSizeFromName = (fullIconName: string) => {
      const nameParts = fullIconName.split('-');
      const iconSize = nameParts.length > 1 && nameParts[0]?.match(/\d+/) ? `${nameParts[0].replace('ic', '')}` : '';

      return iconSize;
    };

    const icons = new Map<string, Set<string>>();

    for (const iconName of ICON_LIST) {
      const iconSize = getIconSizeFromName(iconName);
      let size = icons.get(iconSize) || new Set<string>();
      size.add(iconName);
      icons.set(iconSize, size);
    }

    return {
      icons,
    };
  };
</script>

<style scoped>
  .icons {
    .icon-component-usage {
      margin-bottom: 48px;
    }
    .icon-size-block {
      margin-bottom: 30px;
    }

    .icon-block {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      grid-auto-rows: minmax(124px, auto);
      grid-gap: 10px;

      .icon-example {
        display: flex;
        width: 100px;
        flex-direction: column;
        background: var(--gray-100);
        border-radius: 4px;

        .icon {
          margin: 0;
          min-height: 60%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .icon-caption {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          flex-grow: 1;
          background: var(--gray-200);
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          font-size: 11px;
          text-align: center;
        }
      }
    }
  }
</style>
