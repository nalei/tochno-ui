<template lang="pug">
.messenger__wrapper
  transition-group.messenger__container(
    tag='div'
    name='messenger'
    @mouseleave.native='resumeHold'
    @mouseenter.native='pauseHold'
  )
    .messenger(
      v-for='message in messages'
      @mouseleave.stop
      :key='message._id'
      :class='[message ? "visible" : "", getColor(message)]'
    )
      Icon.messenger__icon(v-bind='getIconProps(message)')

      p.messenger__message(v-html='message.message')
      span.messenger__close(@click.stop='deleteMessage(message)')
        Icon(name='ic24-close-delete' color='--gray-500')
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Icon from '@/components/icon/Icon.vue';
  import { MessageType, useMessenger } from '@/components/messenger/use/messenger';
  import { IMessage } from '@/components/messenger/Messenger';

  export default defineComponent({
    name: 'Messenger',
    components: { Icon },
    setup() {
      const { messages, deleteMessage } = useMessenger();

      const getColor = ({ type }: IMessage) => {
        switch (type) {
          case MessageType.Error:
            return 'red';
          case MessageType.Warning:
            return 'yellow';
          case MessageType.Info:
            return 'blue';
          case MessageType.Success:
            return 'green';
          default:
            return 'blue';
        }
      };

      const getIconProps = ({ type }: IMessage) => {
        switch (type) {
          case MessageType.Error:
            return {
              name: 'ic24-warning',
              color: '--red-500',
            };
          case MessageType.Warning:
            return {
              name: 'ic24-warning',
              color: '--yellow-500',
            };
          case MessageType.Info:
            return {
              name: 'ic24-info',
              color: '--blue-500',
            };
          case MessageType.Success:
            return {
              name: 'ic24-success',
              color: '--green-500',
            };
        }
      };

      const pauseHold = () => {
        messages.value.forEach(({ timer }) => {
          if (timer) {
            timer.pause();
          }
        });
      };

      const resumeHold = () => {
        messages.value.forEach(({ timer }) => {
          if (timer) {
            timer.resume();
          }
        });
      };

      return { messages, getColor, getIconProps, deleteMessage, pauseHold, resumeHold };
    },
  });
</script>

<style scoped>
  .messenger {
    position: relative;
    margin-top: 16px;
    max-width: 480px;
    transition: all 0.3s ease;
    opacity: 1;
    background: white;
    border-radius: 4px;
    display: flex;
    padding: 16px;
    padding-right: 56px;
    border: 1px solid;
    line-height: 20px;

    @media screen and (max-width: 767px) {
      max-width: calc(100vw - 32px);
    }

    &:hover {
      .messenger__close {
        opacity: 1;
      }
    }

    &__wrapper {
      position: fixed;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 102;
      pointer-events: none;
    }

    &__container {
      max-width: 480px;
      display: flex;
      align-items: center;
      flex-direction: column;
      pointer-events: auto;
    }

    &-enter-from,
    &-leave-to {
      margin-top: -10px;
      opacity: 0;
    }

    &-enter-active,
    &-leave-active {
      transition: all 0.3s;
    }

    &-leave-active {
      position: absolute;
    }

    &-enter-to {
      margin-top: 16px;
      opacity: 1;
    }

    &.blue {
      border-color: var(--blue-500);
    }

    &.yellow {
      border-color: var(--yellow-500);
    }

    &.green {
      border-color: var(--green-500);
    }

    &.red {
      border-color: var(--red-500);
    }

    &__icon {
      flex-shrink: 0;
      margin-right: 8px;
      align-self: flex-start;
    }

    &__message {
      margin-top: 3px;
      font-size: 14px;
      color: var(--gray-900);
      word-break: break-word; /* for chrome */

      b {
        word-wrap: anywhere; /* for ff */
      }
    }

    &__close {
      position: absolute;
      top: 16px;
      right: 16px;
      cursor: pointer;
      transition: all 0.3s ease;
      opacity: 0;
    }

    &__link {
      text-decoration: none;
      color: var(--blue-500);

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
