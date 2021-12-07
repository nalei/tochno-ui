<template lang="pug">
.textarea-wrapper
  label.label.caption-13px-medium(v-if='label' :for='id') {{ label }}
  .textarea-box(:class='boxClass')
    slot(name='prefix')
    textarea.text-14px-regular(
      v-model='message'
      v-bind='$attrs'
      ref='textarea'
      @paste='handlePaste'
      @input='handleInput'
      @focus='isFocused = true'
      @blur='isFocused = false'
      :placeholder='placeholder'
      :id='id'
      :disabled='disabled'
    )
  .caption.text-12px-regular(v-if='caption' :class='captionClass') {{ caption }}
</template>

<script lang="ts">
  import { computed, defineComponent, PropType, ref, watchEffect } from 'vue';
  import { TextareaState } from '@/components/textarea/Textarea';

  export default defineComponent({
    name: 'Textarea',
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
        type: String as PropType<TextareaState>,
        default: 'default',
        validator: (state: TextareaState) => {
          const states: TextareaState[] = ['default', 'error'];
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
    },
    emits: ['update:modelValue', 'input', 'paste'],
    setup(props, { emit }) {
      const textarea = ref<HTMLTextAreaElement | null>(null);
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
          disabled: props.disabled,
        };
      });

      const textareaClass = computed(() => {
        return {
          [`${props.state}`]: true,
        };
      });

      const captionClass = computed(() => {
        return {
          [`${props.state}`]: true,
        };
      });

      watchEffect(() => {
        if (!textarea.value?.scrollHeight) return;
        adjustHeight(textarea.value);
      });

      const focus = () => {
        textarea.value?.focus();
      };

      const handleInput = (event: InputEvent) => {
        adjustHeight(event.target as HTMLTextAreaElement);
        emit('input', (event.target as HTMLTextAreaElement).value);
      };

      const handlePaste = (event: Event) => {
        emit('paste', event);
      };

      const adjustHeight = (textarea: HTMLTextAreaElement) => {
        if (textarea.scrollHeight > textarea.clientHeight) {
          textarea.style.height = textarea.scrollHeight + 'px';
        }
      };

      return {
        message,
        boxClass,
        textareaClass,
        captionClass,
        textarea,
        isFocused,
        focus,
        handleInput,
        handlePaste,
      };
    },
  });
</script>

<style scoped>
  .textarea-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    label {
      margin-bottom: 4px;
    }

    .textarea-box {
      position: relative;
      width: 100%;
      box-sizing: border-box;
      border-radius: 4px;
      border: 1px solid var(--gray-50);
      background-color: var(--gray-50);
      padding: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      transition: border-color var(--transition), background-color var(--transition);

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
      }

      &.error {
        border-color: var(--red-500);

        &:hover {
          border-color: var(--red-500);
        }
      }
    }

    textarea {
      margin: 0;
      padding: 11px 12px;
      outline: none;
      border: none;
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      background-color: transparent;
      resize: vertical;
      min-height: 80px;
      border-radius: 4px;

      &::placeholder {
        font-weight: 500;
        color: var(--gray-500);
      }

      &:disabled {
        pointer-events: none;
        color: var(--gray-500);
        background-color: var(--white);
        &::placeholder {
          color: var(--gray-300);
        }
      }

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        transition: background-color 5000s ease-in-out 0s;
      }
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
