<template lang="pug">
.input-wrapper
  label.label.caption-13px-medium(
    v-if='label'
    :for='id'
    :class='labelClass'
  ) {{ label }}
  .input-box(:class='boxClass')
    slot(name='prefix')
    input.input.text-14px-regular(
      v-model='message'
      v-maska='mask'
      v-bind='$attrs'
      ref='input'
      @paste='handlePaste'
      @maska='handleMask'
      @input='handleInput'
      @focus='handleFocus'
      @blur='handleBlur'
      :placeholder='placeholder'
      :id='id'
      :disabled='disabled'
      :class='inputClass'
    )
    .input-badge.text-14px-regular(v-if='badge' :class='badgeClass') {{ badge }}
    .input-icon(v-if='icon')
      Icon(v-bind='{ ...icon, color: isFocused ? "--blue-500" : "--gray-500" }' @click='handleIconClick')
  .caption.text-12px-regular(v-if='caption' :class='captionClass') {{ caption }}
</template>

<script lang="ts">
  import { computed, defineComponent, PropType, ref } from 'vue';
  import { maska } from 'maska';
  import Icon from '@/components/icon/Icon.vue';
  import { Icon as IconProps } from '@/components/icon/Icon';
  import { InputState, InputSize, InputMask } from '@/components/input/Input';

  export default defineComponent({
    name: 'Input',
    components: { Icon },
    directives: { maska },
    props: {
      modelValue: {
        type: [String, Number],
      },
      placeholder: {
        type: String,
        default: '',
      },
      label: {
        type: String,
        default: '',
      },
      caption: {
        type: String,
        default: '',
      },
      state: {
        type: String as PropType<InputState>,
        default: 'default',
        validator: (state: InputState) => {
          const states: InputState[] = ['default', 'error'];
          return states.includes(state);
        },
      },
      id: {
        type: String,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      size: {
        type: String as PropType<InputSize>,
        default: 'm',
        validator: (value: InputSize) => ['s', 'm', 'l'].includes(value),
      },
      icon: {
        type: Object as PropType<IconProps | null>,
        default: null,
      },
      badge: {
        type: String,
        default: '',
      },
      mask: {
        type: Object as PropType<InputMask | null>,
        default: null,
      },
    },
    emits: ['update:modelValue', 'input', 'paste', 'focus', 'blur', 'mask'],
    setup(props, { emit }) {
      const input = ref<HTMLInputElement | null>(null);
      const isFocused = ref(false);

      const message = computed({
        get: () => props.modelValue,
        set: (value) => {
          emit('update:modelValue', value);
        },
      });

      const boxClass = computed(() => {
        return {
          focus: isFocused.value,
          [`${props.state}`]: true,
          [`${props.size}`]: true,
          disabled: props.disabled,
        };
      });

      const labelClass = computed(() => {
        return {
          [`${props.size}`]: true,
        };
      });

      const inputClass = computed(() => {
        return {
          [`${props.size}`]: true,
          [`${props.state}`]: true,
        };
      });

      const captionClass = computed(() => {
        return {
          [`${props.state}`]: true,
        };
      });

      const badgeClass = computed(() => {
        return {
          focus: isFocused.value,
          [`${props.size}`]: true,
          disabled: props.disabled,
        };
      });

      const focus = () => {
        input.value?.focus();
      };

      const handleInput = (event: InputEvent) => {
        emit('input', (event.target as HTMLInputElement).value);
      };

      const handlePaste = (event: Event) => {
        emit('paste', event);
      };

      const handleFocus = () => {
        isFocused.value = true;
        emit('focus');
      };

      const handleBlur = () => {
        isFocused.value = false;
        emit('blur');
      };

      const handleIconClick = () => {
        console.log('icon click');
      };

      const handleMask = (event: Event) => {
        emit('mask', (event.target as HTMLInputElement).value);
      };

      return {
        message,
        boxClass,
        labelClass,
        inputClass,
        captionClass,
        badgeClass,
        input,
        isFocused,
        focus,
        handleInput,
        handlePaste,
        handleIconClick,
        handleFocus,
        handleBlur,
        handleMask,
      };
    },
  });
</script>

<style scoped>
  .input-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .label {
      margin-bottom: 4px;
    }

    .input-box {
      position: relative;
      width: 100%;
      box-sizing: border-box;
      border-radius: 4px;
      border: 1px solid var(--gray-50);
      background-color: var(--gray-50);
      padding: 0 12px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      transition: border-color var(--transition), background-color var(--transition);

      &.s {
        height: 36px;
      }

      &.m {
        height: 40px;
      }

      &.l {
        height: 44px;
      }

      &:hover {
        border-color: var(--gray-300);
      }

      &.focus {
        border-color: var(--blue-500);
        background-color: var(--white);
      }

      &.disabled {
        pointer-events: none;
        background-color: var(--white);
        border-color: var(--gray-200);

        .input-badge {
          background-color: var(--gray-100);
        }
      }

      &.error {
        border-color: var(--red-500);

        &:hover {
          border-color: var(--red-500);
        }
      }
    }

    .input {
      margin: 0;
      padding: 0;
      outline: none;
      border: none;
      width: 100%;
      box-sizing: border-box;
      background-color: transparent;

      &::placeholder {
        font-weight: 500;
        color: var(--gray-500);
      }

      &:disabled {
        pointer-events: none;
        color: var(--gray-500);
        &::placeholder {
          color: var(--gray-300);
        }
      }

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        transition: background-color 5000s ease-in-out 0s;
      }

      &.s {
        padding: 7px 0;
      }

      &.m {
        padding: 9px 0;
      }

      &.l {
        padding: 11px 0;
      }
    }

    .input-badge {
      color: var(--gray-900);
      padding: 3px 5px;
      background-color: var(--white);
      border-radius: 4px;
      transition: background-color var(--transition);
      white-space: nowrap;

      &.focus {
        background-color: var(--gray-100);
      }
    }

    .input-icon {
      margin-left: 4px;
      min-height: 20px;
      min-width: 20px;
      display: flex;
      align-items: center;
    }

    .caption {
      margin-top: 4px;
      color: var(--gray-900);
      &.error {
        color: var(--red-500);
      }
    }
  }
</style>
