<template lang="pug">
button.button(:type='$attrs.type || "button"' :class='buttonClasses')
  span.button-content.caption-14px-medium
    slot
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue';
  import { ButtonSize, ButtonMode } from './Button';

  export default defineComponent({
    name: 'Button',
    props: {
      size: {
        type: String as PropType<ButtonSize>,
        default: 's',
        validator: (value: ButtonSize) => {
          const sizes: ButtonSize[] = ['s', 'm', 'l'];
          return sizes.includes(value);
        },
      },
      mode: {
        type: String as PropType<ButtonMode>,
        default: 'primary',
        validator: (type: ButtonMode) => {
          const types: ButtonMode[] = ['primary', 'secondary', 'info', 'state'];
          return types.includes(type);
        },
      },
      loading: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      const buttonClasses = computed(() => ({
        [`${props.size}`]: true,
        [`${props.mode}`]: props.mode !== 'primary',
        loading: props.loading,
      }));

      return { buttonClasses };
    },
  });
</script>

<style scoped>
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: none;
    height: fit-content;
    user-select: none;
    cursor: pointer;
    transition: background-color var(--transition), color var(--transition), border-color var(--transition), box-shadow var(--transition);
    border-radius: 4px;
    padding: 8px 16px;

    color: var(--white);
    background-color: var(--black);

    &:hover:enabled {
      background-color: var(--gray-900);
    }

    &:active:enabled,
    &.active:enabled {
      background-color: var(--gray-900);
      .button-icon {
        --icon-color: var(--gray-300);
      }
      .button-content {
        color: var(--gray-300);
      }
    }

    &:disabled {
      cursor: default;
      background-color: var(--gray-200);
      .button-icon {
        --icon-color: var(--gray-500);
      }
      .button-content {
        color: var(--gray-500);
      }
    }

    &:focus:enabled {
      outline: none;
    }

    .button-icon {
      width: 20px;
      height: 20px;
      min-width: 20px;
      background-repeat: no-repeat;
      background-size: 100%;
      font-size: 20px;
      --icon-color: var(--white);
    }

    .button-content {
      transition: color var(--transition);
      white-space: nowrap;
      /* flex-grow: 1; */
    }

    .button-icon {
      margin-left: 6px;
    }

    &.with-icon {
      padding-right: 16px;
    }

    &.icon-only {
      padding: 6px;
      border-radius: 50%;
      width: fit-content;
      .button-icon {
        width: 24px;
        height: 24px;
        margin: 0;
      }
    }
  }

  .secondary {
    color: var(--gray-900);
    background-color: var(--white);
    border: 1px solid var(--gray-200);

    .button-icon {
      --icon-color: var(--gray-900);
    }

    &:hover:enabled {
      background-color: var(--white);
      border-color: var(--blue-500);
    }

    &:active:enabled,
    &.active:enabled {
      background-color: var(--blue-500);
      border-color: var(--blue-500);
      .button-icon {
        --icon-color: var(--white);
      }
      .button-content {
        color: var(--white);
      }
    }

    &:disabled {
      background-color: var(--white);
      .button-icon {
        --icon-color: var(--gray-200);
      }
      .button-content {
        color: var(--gray-200);
      }
    }

    &:focus:enabled {
      outline: none;
    }

    &.s {
      padding: 7px 15px;
      &.with-icon {
        padding-right: 15px;
      }
      &.icon-only {
        padding: 5px;
      }
    }

    &.m {
      padding: 9px 19px;
      &.icon-only {
        padding: 7px;
      }
    }

    &.l {
      padding: 11px 23px;
    }

    &.loading::before {
      border-color: var(--blue-500);
      border-right-color: transparent;
    }
  }

  .info {
    color: var(--gray-500);
    background-color: var(--gray-50);
    border-color: var(--gray-50);

    .button-icon {
      --icon-color: var(--gray-500);
    }

    &:hover:enabled {
      background-color: var(--gray-200);
      .button-icon {
        --icon-color: var(--blue-500);
      }
      .button-content {
        color: var(--blue-500);
      }
    }

    &:active:enabled,
    &.active:enabled {
      background-color: var(--gray-500);
      .button-icon {
        --icon-color: var(--white);
      }
      .button-content {
        color: var(--white);
      }
    }
  }

  .state {
    color: var(--blue-500);
    background-color: var(--gray-50);
    border-color: var(--gray-50);

    .button-icon {
      --icon-color: var(--blue-500);
    }

    &:hover:enabled {
      background-color: var(--gray-50);
      .button-icon {
        --icon-color: var(--blue-500);
      }
      .button-content {
        color: var(--blue-500);
      }
    }

    &:active:enabled,
    &.active:enabled {
      background-color: var(--white);
      .button-icon {
        --icon-color: var(--blue-500);
      }
      .button-content {
        color: var(--blue-500);
      }
    }
  }

  .m {
    padding: 10px 20px;

    .button-icon {
      margin-left: 8px;
    }

    &.with-icon {
      padding-right: 17px;
    }

    &.icon-only {
      padding: 8px;
    }

    &.loading::before {
      width: 22px;
      height: 22px;
    }
  }

  .l {
    padding: 12px 24px;

    .button-icon {
      margin-left: 10px;
    }

    &.with-icon {
      padding-right: 17px;
    }

    &.icon-only {
      padding: 10px;
    }

    &.loading::before {
      width: 24px;
      height: 24px;
    }
  }

  .loading {
    position: relative;
    &::before {
      content: '';
      display: block;
      position: absolute;
      box-sizing: border-box;
      border: 3px solid var(--white);
      border-right-color: transparent;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      animation: 1.5s linear infinite rotation;
    }
    .button-icon,
    .button-content {
      visibility: hidden;
    }
  }

  @keyframes rotation {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
</style>
