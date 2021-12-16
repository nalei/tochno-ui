<template lang="pug">
.dropdown(
  v-show='opened'
  :style='dropdownStyles'
  :class='{ "dropdown_open-top": openOnTop }'
)
  slot(name='header')
  ul.options(v-if='!noResults')
    DropdownOption(
      v-for='(option, index) of options'
      v-bind='option'
      @keypress.enter.space='chooseItem(option)'
      @click.stop.prevent='chooseItem(option)'
      :key='option.label'
      :active='JSON.stringify(option.value) === JSON.stringify(active?.value)'
    )
      template(#control)
        slot(
          name='optionControl'
          :option='option'
          :index='index'
        )
    slot
  .no-results(v-show='opened' v-else)
    Icon.no-results-icon(name='ic24-search' color='--blue-500')
    h4.no-results-title.caption-16px-medium {{ dropdownDictionary.noResultsTitle }}
    p.no-results-description.text-12px-regular {{ dropdownDictionary.noResultsDescription }}
</template>

<script lang="ts">
  import { computed, defineComponent, PropType } from 'vue';
  import Icon from '@/components/icon/Icon.vue';
  import DropdownOption from '@/components/dropdown/DropdownOption.vue';
  import { DropdownDictionary } from '@/components/dropdown/Dropdown';
  import { DropdownOptionProps } from '@/components/dropdown/DropdownOption';

  const DEFAULT_DICTIONARY: DropdownDictionary = {
    noResultsTitle: 'No matching search results',
    noResultsDescription: 'Try again using more general search terms',
  };

  export default defineComponent({
    name: 'Dropdown',
    components: {
      DropdownOption,
      Icon,
    },
    emits: ['change', 'update:opened'],
    props: {
      opened: {
        type: Boolean,
        default: false,
      },
      active: {
        type: Object as PropType<DropdownOptionProps | null>,
        default: null,
      },
      options: {
        type: Array as PropType<DropdownOptionProps[]>,
        default: () => [],
      },
      maxHeight: {
        type: String,
        default: '310px',
      },
      noResults: {
        type: Boolean,
        default: false,
      },
      dictionary: {
        type: Object as PropType<Partial<DropdownDictionary>>,
        default: () => ({}),
      },
      openOnTop: {
        type: Boolean,
        default: false,
      },
    },
    setup(props, { emit }) {
      const dropdownDictionary = computed<DropdownDictionary>(() => ({
        ...DEFAULT_DICTIONARY,
        ...props.dictionary,
      }));

      const dropdownStyles = computed(() => ({
        '--dropdown-max-height': props.maxHeight,
      }));

      const chooseItem = (item: DropdownOptionProps) => {
        emit('change', item);
        // emit('update:opened', false);
      };

      const onBlur = (event: FocusEvent) => {
        if (
          event.target instanceof Element &&
          event.target.matches('.dropdown-option:last-child') &&
          (!(event.relatedTarget instanceof Element) || !event.relatedTarget?.matches('.dropdown-option'))
        ) {
          emit('update:opened', false);
        }
      };

      return {
        dropdownDictionary,
        dropdownStyles,
        chooseItem,
        onBlur,
      };
    },
  });
</script>

<style scoped>
  .dropdown {
    box-sizing: border-box;
    padding: 8px 0;
    position: absolute;
    width: 100%;
    border-radius: 4px;
    border: 1px solid var(--gray-200);
    margin-top: 4px;
    margin-bottom: 0;
    box-shadow: var(--shadow-02);
    background-color: white;
    overflow-x: hidden;
    /*overflow-y: scroll;*/
    max-height: var(--dropdown-max-height);
    z-index: 2;

    .options {
      display: grid;
      grid-template-columns: 1fr;
      list-style: none;
    }

    /* SCROLLBAR */
    scrollbar-width: thin;
    scrollbar-color: var(--gray-500) transparent;

    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      border: 3px solid rgba(0, 0, 0, 0);
      background-clip: padding-box;
      border-radius: 6px;
      background-color: var(--gray-500);
    }
    &::-webkit-scrollbar-corner {
      background-color: transparent;
    }

    &_open-top {
      bottom: 46px;
    }
  }
  .no-results {
    min-height: 165px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    &-icon {
      align-self: center;
      margin-top: 8px;
      margin-bottom: 16px;
    }
    &-title,
    &-description {
      max-width: 220px;
      align-self: center;
      text-align: center;
      padding: 0 8px;
      margin: 0;
    }
    &-title {
      margin-bottom: 6px;
    }
    &-description {
      margin-bottom: 8px;
    }
  }
</style>
