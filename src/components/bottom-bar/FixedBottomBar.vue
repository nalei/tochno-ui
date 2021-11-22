<template lang="pug">
.fixed-bottom-bar-anchor(ref='bottomBarAnchorRef')
.fixed-bottom-bar(:class='bottomBarClasses')
  slot
.fixed-bottom-bar-holder
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted, ref } from 'vue';

  export default defineComponent({
    name: 'FixedBottomBar',
    props: {
      isStick: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['update:isStick'],
    setup(props, { emit }) {
      const bottomBarAnchorRef = ref<Element | null>(null);
      const bottomBarClasses = computed(() => {
        return { stick: props.isStick };
      });

      onMounted(() => {
        const target = bottomBarAnchorRef.value;
        if (!target) return;

        const observer = new IntersectionObserver(
          (entries) => {
            emit('update:isStick', !entries[0].isIntersecting);
          },
          { threshold: [0.99] }
        );
        observer.observe(target as Element);
      });

      return { bottomBarAnchorRef, bottomBarClasses };
    },
  });
</script>

<style scoped>
  .fixed-bottom-bar {
    display: flex;
    justify-content: flex-end;
    padding: 24px 16px 8px;

    &.stick {
      position: fixed;
      background: var(--white);
      border-radius: 8px 8px 0 0;
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
      z-index: 8;
      bottom: 0;
      width: calc(100% - 288px);
      max-width: 1064px;
      padding: 16px 24px;

      @media (--viewport-sm) {
        width: calc(100% - 119px);
      }

      + .fixed-bottom-bar-holder {
        display: block;
      }
    }

    ::v-deep(.button) {
      & + .button {
        margin-left: 16px;
      }
    }
  }

  .fixed-bottom-bar-anchor {
    height: 1px;
  }

  .fixed-bottom-bar-holder {
    display: none;
    height: 76px;
  }
</style>
