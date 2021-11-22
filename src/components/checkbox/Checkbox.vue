<template lang="pug">
.checkbox(:class='boxClass')
  label.label(
    v-if='label'
    :for='id'
    :class='labelClass'
  ) {{ label }}
  input.hidden(
    type='checkbox'
    tabindex='0'
    ref='input'
    @change='onClick($event)'
    :value='modelValue'
    :id='id'
    :disabled='disabled'
  )
  label.box(
    tabindex='-1'
    :for='id'
    :class='boxClass'
  )
    img.icon(v-show='!indeterminate && modelValue' :src='imgSrc')
    .indeterminate-dash(v-show='indeterminate')
  .caption(v-if='error || caption' :class='captionClass') {{ error || caption }}
</template>

<script lang="ts">
  import { computed, defineComponent, PropType } from 'vue';
  import { CheckboxSize } from '@/components/checkbox/Checkbox';

  export default defineComponent({
    name: 'Checkbox',
    inheritAttrs: false,
    emits: ['update:modelValue'],
    props: {
      modelValue: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      indeterminate: {
        type: Boolean,
        default: false,
      },
      id: {
        type: String,
      },
      label: {
        type: String,
      },
      caption: {
        type: String,
      },
      error: {
        type: String,
      },
      size: {
        type: String as PropType<CheckboxSize>,
        default: 'm',
        validator: (value: string) => ['m', 'l'].includes(value),
      },
    },
    setup(props, { emit }) {
      const boxClass = computed(() => {
        return {
          [`${props.size}`]: true,
          checked: props.modelValue,
          error: props.error,
          indeterminate: props.indeterminate,
          disabled: props.disabled,
        };
      });

      const labelClass = computed(() => {
        return {
          checked: props.modelValue,
          indeterminate: props.indeterminate,
          disabled: props.disabled,
          'caption-16px-medium': props.size === 'l',
          'text-12px-regular': props.size === 'm',
        };
      });

      const captionClass = computed(() => {
        return {
          [`${props.size}`]: true,
          error: props.error,
          'text-12px-regular': props.size === 'l' || props.size === 'm',
        };
      });

      const imgSrc = computed(() => {
        const iconSize = props.size === 'l' ? '16' : '12';
        return require(`@/assets/icons/${iconSize}/ic${iconSize}-check.svg`);
      });

      const onClick = () => {
        emit('update:modelValue', !props.modelValue);
      };

      return {
        imgSrc,
        boxClass,
        captionClass,
        labelClass,
        onClick,
      };
    },
  });
</script>

<style>
  .checkbox {
    position: relative;
    display: inline-grid;
    grid-template-areas: 'l b';
    grid-template-rows: 14px;
    grid-template-columns: 1fr 14px;

    justify-items: start;
    align-items: center;

    &.l {
      grid-template-rows: 24px;
      grid-template-columns: 1fr 24px;
    }

    .hidden {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    input:focus + .box {
      outline: none;
      //border: 2px solid var(--blue-500);
    }

    .box {
      grid-area: b;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      box-sizing: border-box;
      cursor: pointer;
      border: 2px solid var(--gray-500);
      background-color: var(--white);
      width: 14px;
      height: 14px;
      border-radius: 4px;
      transition: background-color 0.2s, color 0.2s, border-color 0.2s, opacity 0.2s;

      &.disabled {
        pointer-events: none;
        background-color: var(--gray-100);
        border-color: var(--gray-200);
      }

      &.l {
        width: 24px;
        height: 24px;

        .indeterminate-dash {
          width: 12px;
        }
      }

      &.checked,
      &.indeterminate {
        border: 2px solid var(--blue-500);
        background-color: var(--blue-500);

        &.disabled {
          background-color: var(--gray-300);
          border-color: var(--gray-300);
        }

        &:hover {
          border: 2px solid var(--blue-500);
          background-color: var(--blue-500);
          opacity: 0.8;
        }
      }

      &:hover {
        border: 2px solid var(--gray-500);
      }

      &.error {
        border: 2px solid var(--red-500);

        &:hover {
          border-color: var(--red-500);
        }
      }

      &:focus {
        outline: none;
      }

      .indeterminate-dash {
        height: 2px;
        width: 8px;
        border-radius: 2px;
        background-color: var(--white);
      }

      .icon {
        user-select: none;
      }
    }

    .label {
      grid-area: l;
      cursor: pointer;
      white-space: nowrap;
      padding-right: 6px;

      &.disabled {
        cursor: default;
      }

      &.checked,
      &.indeterminate {
      }
    }

    .caption {
      position: absolute;
      white-space: nowrap;
      top: 14px;

      &.l {
        top: 24px;
      }

      &.error {
        color: var(--red-500);
      }
    }
  }
</style>
