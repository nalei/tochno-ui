<template lang="pug">
.select(ref='selectRef' :class='selectClasses')
  label.label.caption-13px-medium(v-if='label && mode !== "sort"') {{ label }}
  .select-head.text-14px-regular(
    @keyup.tab='openDropdown'
    @keypress.enter.space='toggleDropdown'
    @click='toggleDropdown'
    @blur='onBlur'
    :tabindex='disabled ? -1 : 0'
    :class='headClasses'
  )
    label.label.text-14px-medium(v-if='label && mode === "sort"') {{ label }}
    input.select-input.text-14px-regular(
      :value='active?.map((item) => item.label).join("/")'
      :tabindex='-1'
      :readonly='true'
      :placeholder='placeholder'
      :disabled='disabled'
      @blur='onBlur'
    )
    Icon.arrow-icon(:name='mode === "sort" ? "ic24-sort" : "ic24-chevron-less-small"')
  Dropdown(
    v-model:opened='opened'
    @keydown.up.prevent='focusUp'
    @keydown.down.prevent='focusDown'
    @change='onChange'
    :options='filteredOptions'
    :no-results='!filteredOptions.length'
    :max-height='maxHeight'
  )
    template(#header)
      Input.search-input.text-14px-regular(
        v-model='searchInputValue'
        v-if='searchable'
        size='s'
        ref='searchInputRef'
        :disabled='disabled'
      )
    template(#optionControl='{ option, index }')
      Checkbox(
        size='m'
        :modelValue='!!selected.find((item) => option.label === item.label && option.value === item.value)'
        :id='`${option.label}-${index}`'
        :disabled='option.disabled'
      )
  p.caption.text-12px-regular(v-if='caption') {{ caption }}
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted, PropType, ref, onBeforeUnmount, toRef } from 'vue';
  import Input from '@/components/input/Input.vue';
  import Dropdown from '@/components/dropdown/Dropdown.vue';
  import Icon from '@/components/icon/Icon.vue';
  import Checkbox from '@/components/checkbox/Checkbox.vue';
  import { DropdownOptionProps } from '@/components/dropdown/DropdownOption';
  import { SelectMode, SelectSize } from '@/components/select/Select';

  export default defineComponent({
    name: 'Multiselect',
    components: { Checkbox, Input, Dropdown, Icon },
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
        type: Array as PropType<DropdownOptionProps[]>,
        default: () => [],
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
    },
    emits: ['update:active', 'select'],
    setup(props, { emit }) {
      const opened = ref(false);
      const selectRef = ref<HTMLDivElement | null>(null);
      const searchInputRef = ref<HTMLInputElement | null>(null);
      const searchInputValue = ref('');

      const selected = toRef(props, 'active');

      const selectClasses = computed(() => ({
        [`${props.size}`]: true,
        [`${props.mode}`]: props.mode !== 'default',
        opened: opened.value,
        filled: props.active?.length,
        disabled: props.disabled,
        invalid: props.invalid,
        'open-on-top': props.openOnTop,
      }));

      const headClasses = computed(() => ({
        [`${props.size}`]: true,
      }));

      const filteredOptions = computed(() => {
        return props.searchable
          ? props.options.filter((opt) => opt.label.toLowerCase().includes(searchInputValue.value.toLowerCase()))
          : props.options;
      });

      const onChange = (item: DropdownOptionProps) => {
        const index = selected.value.findIndex((el) => el.label === item.label && el.value === item.value);
        if (index < 0) {
          selected.value.push(item);
        } else {
          selected.value.splice(index, 1);
        }
        emit('update:active', selected.value);
        emit('select', selected.value);
      };

      const openDropdown = () => {
        if (!props.disabled && !opened.value) opened.value = true;
      };

      const toggleDropdown = () => {
        if (!props.disabled) opened.value = !opened.value;
      };

      const onClickOutside = (e: MouseEvent) => {
        if (selectRef.value && opened.value && e.target instanceof Node && e.target !== selectRef.value && !selectRef.value.contains(e.target)) {
          opened.value = false;
        }
      };

      onMounted(() => {
        document.addEventListener('click', onClickOutside, { capture: true });
      });

      onBeforeUnmount(() => {
        document.removeEventListener('click', onClickOutside);
      });

      const onBlur = (event: FocusEvent) => {
        searchInputValue.value = '';
        if (!(event.relatedTarget instanceof Element) || !selectRef.value?.contains(event.relatedTarget)) {
          opened.value = false;
        }
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
        opened,
        selectRef,
        searchInputRef,
        searchInputValue,
        selected,
        selectClasses,
        headClasses,
        filteredOptions,
        openDropdown,
        toggleDropdown,
        onChange,
        onBlur,
        focusUp,
        focusDown,
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

  .search-input {
    margin: 0 8px 6px 8px;
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
