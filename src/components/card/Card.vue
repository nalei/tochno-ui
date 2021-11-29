<template lang="pug">
.card(:class='cardClasses')
  .card-sidebar(v-if='number')
    span.step-number.h-500 {{ number }}

  .card-content
    .card-header
      .card-title.h-500(v-if='title') {{ title }}
      .card-actions
        slot(name='actions')
      .card-description.text-14px-regular
        slot(name='description')
    slot
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue';

  export default defineComponent({
    name: 'Card',
    props: {
      title: {
        type: String,
        default: '',
      },
      number: {
        type: String,
        default: '',
      },
      first: {
        type: Boolean,
        default: false,
      },
      last: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      const cardClasses = computed(() => ({
        'with-sidebar': props.number,
        'card-first': props.first,
        'card-last': props.last,
      }));
      return { cardClasses };
    },
  });
</script>

<style scoped>
  .card {
    display: flex;
    border-radius: 8px;
    background-color: var(--white);
    box-shadow: var(--shadow-02);
  }

  .card-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 22px 30px 30px;
  }

  .card-header {
    margin-bottom: 21px;
    display: grid;
    grid-template-areas: '. .' 'd d';
    grid-template-columns: 1fr auto;
    grid-template-rows: 40px;
    align-items: center;
    grid-auto-flow: row;
  }

  .card-title {
    letter-spacing: 0.5px;
    flex-grow: 1;
  }

  .card-actions {
    display: flex;
  }

  .card-description {
    grid-area: d;
    color: var(--gray-500);
  }

  .card.with-sidebar {
    .card-content {
      padding-left: 0;
      padding-right: 54px;
      flex-grow: 1;
    }
  }

  .card-sidebar {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 66px;
    overflow: hidden;
    &:before {
      bottom: 0;
      content: '';
      position: absolute;
      top: 0;
      width: 2px;

      background: var(--gray-50);
      left: calc(50% - 1px);
      right: auto;
    }
  }

  .card-first {
    .card-sidebar {
      &:before {
        top: 26px;
      }
    }
  }

  .card-last {
    .card-sidebar {
      &:before {
        height: 36px;
        bottom: auto;
      }
    }
  }

  .step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--gray-50);
    z-index: 1;
    margin-top: 26px;
  }
</style>
