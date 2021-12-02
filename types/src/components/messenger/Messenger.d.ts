import Vue from 'vue';
import { MessageType } from '../../components/messenger/Messenger.vue';
import Timeout from '../../utils/Timeout';

export interface IMessage {
  _id?: number;
  message: string;
  visible?: boolean;
  type?: MessageType;
  timer?: InstanceType<typeof Timeout>;
}

export declare class Messenger extends Vue {
  error: (IMessage) => void;
  warn: (IMessage) => void;
  success: (IMessage) => void;
  info: (IMessage) => void;
}
