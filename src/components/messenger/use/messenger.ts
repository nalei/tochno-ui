import { computed, ref } from 'vue';
import Timeout from '@/utils/Timeout';
import { IMessage } from '@/components/messenger/Messenger';

export enum MessageType {
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

const messages = ref<IMessage[]>([]);
const messageId = ref(0);
const delay = ref(4000);

export function useMessenger() {
  const addMessage = (message: string, type: MessageType = MessageType.Info) => {
    const _id = messageId.value++;

    const newMessage: IMessage = {
      _id,
      message,
      type,
      visible: true,
    };

    const timer = new Timeout(() => {
      deleteMessage({ ...newMessage, timer });
    }, delay.value);

    newMessage.timer = timer;

    messages.value.unshift(newMessage);
  };

  const deleteMessage = ({ _id, timer }: IMessage) => {
    if (timer) {
      timer.stop();
    }

    messages.value = messages.value.filter(({ _id: messageId }) => _id !== messageId);
  };

  const error = ({ message }: IMessage) => {
    addMessage(message, MessageType.Error);
  };

  const warn = ({ message }: IMessage) => {
    addMessage(message, MessageType.Warning);
  };

  const success = ({ message }: IMessage) => {
    addMessage(message, MessageType.Success);
  };

  const info = ({ message }: IMessage) => {
    addMessage(message, MessageType.Info);
  };

  return {
    messages: computed(() => messages.value),
    addMessage,
    deleteMessage,
    error,
    warn,
    success,
    info,
  };
}
