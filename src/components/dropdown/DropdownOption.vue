<template lang="pug">
li.dropdown-option.text-14px-regular(:tabindex='tabindex' :class='optionClasses')
  .option-content
    Icon.option-icon(v-if='icon' v-bind='icon')
    span.option-label {{ label }}
    .break
    small.option-subtitle.caption-10px-medium(v-if='subtitle') {{ subtitle }}
  slot(name='control')
</template>

<script lang="ts">
  import { computed, defineComponent, PropType } from 'vue';
  import { Icon as IconProps } from '@/components/icon/Icon';
  import Icon from '@/components/icon/Icon.vue';

  export default defineComponent({
    name: 'DropdownOption',
    components: { Icon },
    props: {
      label: {
        type: String,
        default: '',
      },
      subtitle: {
        type: String,
        default: '',
      },
      value: {
        default: null,
      },
      active: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      icon: {
        type: Object as PropType<IconProps | null>,
        default: null,
      },
    },
    setup(props) {
      const optionClasses = computed(() => ({
        active: props.active,
        disabled: props.disabled,
      }));

      const tabindex = computed(() => (props.disabled ? -1 : 0));

      return {
        optionClasses,
        tabindex,
      };
    },
  });
</script>

<style scoped>
  .dropdown-option {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    padding: 0 16px;
    cursor: pointer;
    user-select: none;
    min-height: 32px;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    outline: none;

    &:hover {
      background-color: var(--gray-100);
    }

    &:focus {
      position: relative;
      background-color: var(--gray-100);
    }
  }

  .option-content {
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
  }

  .option-icon {
    margin-right: 8px;
  }

  .option-label {
  }

  .option-subtitle {
    line-height: 10px;
    color: var(--gray-500);
  }

  .break {
    flex-basis: 100%;
    height: 0;
  }

  /* STATES */
  .active {
    color: var(--blue-500);
    background-color: var(--gray-100);
  }

  .disabled {
    color: var(--gray-300);
    pointer-events: none;
  }
</style>
