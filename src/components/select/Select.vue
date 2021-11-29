<template lang="pug">
.select(ref='select' :class='selectClasses')
  label.label.caption-13px-medium(v-if='label && mode !== "sort"') {{ label }}
  .select-head.text-14px-regular(
    @keyup.tab='openDropdown'
    @keypress.enter.space='toggleDropdown'
    @click='toggleDropdown'
    :tabindex='disabled ? -1 : 0'
    :class='headClasses'
  )
    template(v-if='!loading')
      label.label.text-14px-medium(v-if='label && mode === "sort"') {{ label }}
      input.select-input.text-14px-regular(
        ref='searchInputRef'
        @keypress.enter.stop.prevent='onEnter'
        @input='onSearch'
        @focus='onFocus'
        @blur='onBlur'
        :value='searchable ? searchInputValue : active?.label'
        :tabindex='searchable ? 0 : -1'
        :readonly='!searchable'
        :placeholder='placeholder'
        :disabled='disabled'
        :class='{ searchable }'
      )
      Icon.arrow-icon(:name='mode === "sort" ? "ic24-sort" : "ic24-chevron-less-small"')
    template(v-else)
      Shine
  Dropdown(
    v-model:opened='opened'
    @keydown.up.prevent='focusUp'
    @keydown.down.prevent='focusDown'
    @change='onChange'
    :options='filteredOptions'
    :no-results='!filteredOptions.length'
    :max-height='maxHeight'
    :active='active'
  )
  p.caption.text-12px-regular(v-if='caption') {{ caption }}
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted, PropType, ref, onBeforeUnmount, nextTick, watch } from 'vue';
  import Input from '@/components/input/Input.vue';
  import Shine from '@/components/loaders/Shine.vue';
  import Dropdown from '@/components/dropdown/Dropdown.vue';
  import Icon from '@/components/icon/Icon.vue';
  import { DropdownOptionProps } from '@/components/dropdown/DropdownOption';
  import { SelectMode, SelectSize } from '@/components/select/Select';

  export default defineComponent({
    name: 'Select',
    components: {
      Input,
      Dropdown,
      Icon,
      Shine,
    },
    props: {
      size: {
        type: String as PropType<SelectSize>,
        default: 'm',
      },
      mode: {
        type: String as PropType<SelectMode>,
        default: 'default',
        validator: (type: SelectMode) => {
          const types: SelectMode[] = ['default', 'sort'];
          return types.includes(type);
        },
      },
      active: {
        type: Object as PropType<DropdownOptionProps | null>,
        default: null,
      },
      options: {
        type: Array as PropType<DropdownOptionProps[]>,
        default: () => [],
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
      disabled: {
        type: Boolean,
        default: false,
      },
      invalid: {
        type: Boolean,
        default: false,
      },
      searchable: {
        type: Boolean,
        default: false,
      },
      maxHeight: {
        type: String,
        default: '310px',
      },
      openOnTop: {
        type: Boolean,
        default: false,
      },
      loading: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['update:active', 'select'],
    setup(props, { emit }) {
      const searchInputRef = ref<HTMLInputElement | null>(null);
      const searchInputValue = ref(props.active?.label || '');
      const opened = ref(false);
      const select = ref<HTMLDivElement | null>(null);

      const selectClasses = computed(() => ({
        [`${props.size}`]: true,
        [`${props.mode}`]: props.mode !== 'default',
        searchable: props.searchable,
        opened: opened.value,
        filled: props.active?.value !== null,
        disabled: props.disabled,
        invalid: props.invalid,
        'open-on-top': props.openOnTop,
      }));

      const headClasses = computed(() => ({
        [`${props.size}`]: true,
      }));

      const filteredOptions = computed(() => {
        const isInputChanged = props.active?.label !== searchInputValue.value;

        return props.searchable && isInputChanged
          ? props.options.filter((opt) => opt.label.toLowerCase().includes(searchInputValue.value.toLowerCase()))
          : props.options;
      });

      const onChange = (item: DropdownOptionProps) => {
        searchInputValue.value = item?.label;
        emit('update:active', item);
        emit('select', item);
        closeDropdown();
      };

      const openDropdown = () => {
        if (!props.disabled && !opened.value) opened.value = true;
      };

      const toggleDropdown = () => {
        if (!props.disabled) opened.value = !opened.value;
      };

      const closeDropdown = () => {
        opened.value = false;
      };

      const resetState = () => {
        closeDropdown();
        searchInputValue.value = props.active?.label || '';
      };

      const onClickOutside = (e: MouseEvent) => {
        if (select.value && opened.value && e.target instanceof Node && e.target !== select.value && !select.value.contains(e.target)) resetState();
      };

      onMounted(() => {
        document.addEventListener('click', onClickOutside, { capture: true });
      });

      onBeforeUnmount(() => {
        document.removeEventListener('click', onClickOutside);
      });

      watch(
        () => props.active,
        () => {
          if (props.searchable) {
            nextTick(resetState);
          }
        }
      );

      const onBlur = (event: FocusEvent) => {
        if (!(event.relatedTarget instanceof Element) || !select.value?.contains(event.relatedTarget)) resetState();
      };

      const onSearch = (event: InputEvent) => {
        if (!opened.value) opened.value = true;
        searchInputValue.value = (event.target as HTMLInputElement).value;
      };

      const onFocus = () => {
        if (props.searchable) {
          searchInputRef.value?.select();
        }
      };

      const onEnter = () => {
        if (filteredOptions.value.length === props.options.length) return;
        emit('update:active', filteredOptions.value[0]);
        emit('select', filteredOptions.value[0]);
      };

      const focusUp = (event: KeyboardEvent) => {
        const option = event.target as HTMLLIElement;
        const previousOption = option.previousElementSibling as HTMLLIElement;
        previousOption?.focus();
      };

      const focusDown = (event: KeyboardEvent) => {
        const option = event.target as HTMLLIElement;
        const nextOption = option.nextElementSibling as HTMLLIElement;
        nextOption?.focus();
      };

      return {
        selectClasses,
        headClasses,
        searchInputRef,
        searchInputValue,
        opened,
        select,
        filteredOptions,
        openDropdown,
        toggleDropdown,
        onChange,
        onBlur,
        onSearch,
        onFocus,
        onEnter,
        focusUp,
        focusDown,
        resetState,
      };
    },
  });
</script>

<style scoped>
  .select {
    position: relative;
    min-height: 40px;
    text-align: left;

    &.s {
      min-height: 36px;

      .select-head {
        height: 36px;
      }
    }

    &.l {
      min-height: 44px;
    }
  }

  .select-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    border: 1px solid var(--gray-50);
    background-color: var(--gray-50);
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    outline: none;
    padding: 0 12px;
    height: 40px;
    position: relative;
    overflow: hidden;

    &.l {
      height: 44px;
    }

    &:focus {
      border-color: var(--gray-300);
    }

    &:hover {
      border-color: var(--gray-300);
    }
  }

  .select-input {
    width: 100%;
    appearance: none;
    border: none;
    font-family: inherit;
    color: var(--black);
    outline: none;
    padding: 11px 0;
    cursor: pointer;
    flex-grow: 1;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    background-color: transparent;

    &.searchable {
      cursor: text;
    }

    &::placeholder {
      font-weight: 500;
      color: var(--gray-500);
    }
  }

  .arrow-icon {
    transform: rotate(180deg);
    width: 20px;
    height: 20px;
    min-width: 20px;
    transition: background-color 0.2s, transform 0.2s;
    --icon-color: var(--gray-500);
    user-select: none;
  }

  .active-item-icon {
    margin-right: 8px;
    width: 20px;
    min-width: 20px;
  }

  .label {
    display: block;
    margin-bottom: 4px;
  }

  .caption {
    margin-bottom: 0;
    margin-top: 4px;
    color: var(--gray-900);
  }

  .sort {
    .label {
      margin-bottom: 0;
      color: var(--gray-500);
      white-space: nowrap;
    }
    .select-input {
      padding-left: 4px;
    }
  }

  .open-on-top::v-deep(.dropdown) {
    top: -8px;
    transform: translateY(-100%);
  }

  /* STATES */
  .opened {
    .select-head,
    .select-head:focus {
      border-color: var(--blue-500);
      background-color: var(--white);
    }

    .arrow-icon {
      --icon-color: var(--blue-500);
    }

    .arrow-icon {
      transform: rotate(0);
    }
  }

  .invalid {
    .select-head {
      border-color: var(--red-500);
    }

    .caption {
      color: var(--red-500);
    }
  }

  .disabled {
    .label {
      color: var(--gray-500);
    }
    .select-head {
      pointer-events: none;
      background-color: var(--white);
      border-color: var(--gray-200);
    }

    .select-input {
      color: var(--gray-500);
    }
  }
</style>
