<template lang="pug">
.modal-wrapper(v-show='opened' @mousedown.self='!strict && closePopup')
  .popup(:class='popupClasses')
    .popup-header
      h4.popup-title.h-500(v-if='title') {{ title }}
      .popup-close(v-if='!strict' @click.prevent.stop='closePopup')
        Icon(name='ic24-close-delete')
    .popup-body.scroll
      .popup-content
        slot
      .popup-footer
        slot(name='footer')
</template>

<script lang="ts">
  import { computed, defineComponent, PropType } from 'vue';
  import Icon from '@/components/icon/Icon.vue';
  import { PopupSize } from '@/components/modals/Popup';

  export default defineComponent({
    name: 'Popup',
    components: {
      Icon,
    },
    emits: ['update:opened', 'close'],
    props: {
      title: {
        type: String,
        default: '',
      },
      opened: {
        type: Boolean,
        default: false,
      },
      strict: {
        type: Boolean,
        default: false,
      },
      size: {
        type: String as PropType<PopupSize>,
        default: 'm',
        validator: (value: PopupSize) => {
          const sizes: PopupSize[] = ['s', 'm', 'l'];
          return sizes.includes(value);
        },
      },
    },
    setup(props, { emit }) {
      const popupClasses = computed(() => ({
        [`${props.size}`]: true,
      }));

      const closePopup = () => {
        emit('update:opened', false);
        emit('close');
      };

      return { popupClasses, closePopup };
    },
  });
</script>

<style>
  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(1, 1, 1, 0.4);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .popup {
    position: relative;
    min-width: 500px;
    width: min-content;
    max-width: calc(100vw - 32px);
    min-height: 130px;
    padding: 34px;
    background: var(--white);
    border-radius: 8px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
    z-index: 101;

    &.s {
      width: 335px;
      min-width: 335px;
    }

    &.m {
      width: 600px;
    }

    &.l {
      width: 800px;
    }

    @media screen and (max-width: 767px) {
      width: calc(100% - 16px);
      max-height: calc(100% - 16px);
      min-width: auto;
    }
  }

  .popup-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .popup-close {
    width: 24px;
    height: 24px;
    cursor: pointer;
    --icon-color: var(--gray-900);

    &:hover {
      --icon-color: var(--black);
    }
  }

  .popup-content {
    margin-right: 1px; /* to fix firefox display lags */
  }

  .popup-error {
    color: var(--red-500);
    font-size: 12px;
    padding-top: 16px;
  }

  .popup-footer {
    display: flex;
    padding-top: 24px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;

    @media screen and (max-width: 767px) {
      & > * {
        display: flex;
        flex-wrap: wrap;
      }
    }

    &.gray {
      border-top: 1px solid var(--gray-300);
    }

    .button:not(:first-child) {
      margin-left: 16px;
    }
  }

  .popup-body {
    height: 100%;
    overflow-x: initial;

    &.scroll {
      margin: 0;
      overflow-y: initial;
    }

    @media screen and (max-width: 767px) {
      overflow-y: auto;
      overflow-x: hidden;

      &.scroll {
        margin: 0 -32px;
        padding: 16px;
      }
    }
  }
</style>
