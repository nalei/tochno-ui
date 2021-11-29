<template lang="pug">
template(v-if='label')
  label.label.caption-13px-medium {{ label }}
.wrap-initial(:class='{ expanded: isShowAll }')
  template(v-for='(element, index) in list.initial' :key='`wrap-item-${index}`')
    slot(
      name='listItem'
      :index='index'
      :element='element'
    )
template(v-if='list.rest.length')
  .wrap-rest
    TransitionExpand
      div(v-show='isShowAll')
        template(v-for='(element, index) in list.rest' :key='`wrap-item-${list.initial.length + index}`')
          slot(
            name='listItem'
            :index='list.initial.length + index'
            :element='element'
          )
template(v-if='list.rest.length')
  .options-more-wrap
    .options-more(@click='onShowAll')
      .options-more__label.caption-13px-medium {{ showAllLabel }}
      .options-more__icon(:class='{ "options-more__icon_opened": isShowAll }')
        Icon(name='ic24-chevron-left' color='--gray-900')
template(v-else)
  .options-more-holder
</template>

<script lang="ts">
  import { computed, defineComponent, PropType, ref } from 'vue';
  import Icon from '@/components/icon/Icon.vue';
  import TransitionExpand from '@/components/menu/TransitionExpand.vue';
  import { ExpansibleWrapData } from '@/components/lists/expansible-wrap/ExpansibleWrap';

  export default defineComponent({
    name: 'ExpansibleWrap',
    components: { Icon, TransitionExpand },
    props: {
      data: {
        type: Array as PropType<ExpansibleWrapData>,
        default: () => [],
        required: true,
      },
      label: {
        type: String,
        default: '',
      },
      entityName: {
        type: String,
        default: 'элементы',
      },
      showCount: {
        type: [String, Number],
        default: 2,
        validator: (value: string | number) => {
          const types = typeof value;
          return ['string', 'number'].includes(types);
        },
      },
    },

    setup(props) {
      const isShowAll = ref<boolean>(false);
      const showAllLabel = computed<string>(() => {
        if (!isShowAll.value) {
          return `Показать все ${props.entityName} (${list.value.len})`;
        }
        return 'Показать меньше';
      });

      const onShowAll = () => {
        isShowAll.value = !isShowAll.value;
      };

      const list = computed<{ initial: ExpansibleWrapData; rest: ExpansibleWrapData; len: number }>(() => {
        const data = props.data;
        const count = props.showCount ? +props.showCount : 2;
        if (!Array.isArray(data) || !data.length) {
          return {
            initial: [],
            rest: [],
            len: 0,
          };
        }
        return {
          initial: data.slice(0, count),
          rest: data.slice(count),
          len: data.length,
        };
      });

      return {
        isShowAll,
        showAllLabel,
        onShowAll,
        list,
      };
    },
  });
</script>

<style scoped>
  ::v-deep(.expand-enter-active) {
    padding-top: 8px;
  }
  ::v-deep(.expand-leave-active) {
    padding-top: 8px;
  }

  .label {
    display: block;
    margin-bottom: 4px;
  }

  .options-more-holder {
    margin-bottom: 24px;
  }

  .options-more-wrap {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 19px 0 20px 0;
  }
  .options-more {
    color: var(--gray-500);
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    cursor: pointer;

    &__label {
      margin-right: 7px;
    }

    &__icon {
      transform: rotate(-90deg);
      transition: transform 0.2s ease;

      .sui-icon {
        display: block;
      }

      &_opened {
        transform: rotate(90deg);
        margin-bottom: -4px;
      }
    }
  }
</style>
