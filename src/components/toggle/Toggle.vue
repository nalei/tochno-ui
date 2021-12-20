<template lang="pug">
label.toggle(:class='toggleClass')
  input(
    type='checkbox'
    ref='checkboxRef'
    @change='onClick'
    :value='modelValue'
    :id='id'
    :disabled='disabled'
  )
  span.slider.round
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted, ref } from 'vue';

  export default defineComponent({
    name: 'Toggle',
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
      id: {
        type: String,
      },
    },
    setup(props, { emit }) {
      const checkboxRef = ref<HTMLInputElement | null>(null);

      const toggleClass = computed(() => {
        return {
          disabled: props.disabled,
        };
      });

      onMounted(() => {
        if (!checkboxRef.value) {
          return;
        }
        checkboxRef.value.checked = props.modelValue;
      });

      const onClick = () => {
        emit('update:modelValue', !props.modelValue);
      };

      return { checkboxRef, toggleClass, onClick };
    },
  });
</script>

<style scoped>
  .toggle {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    input:checked + .slider {
      background-color: var(--blue-500);
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(20px);
      -ms-transform: translateX(20px);
      transform: translateX(20px);
    }

    input:disabled + .slider {
      background-color: var(--gray-300);
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--gray-500);
    -webkit-transition: 0.4s;
    transition: 0.4s;

    &:before {
      position: absolute;
      content: '';
      height: 16px;
      width: 16px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    &.round {
      border-radius: 34px;
    }

    &.round:before {
      border-radius: 50%;
    }
  }
</style>
