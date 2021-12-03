import Vue from 'vue';
import { Icon } from '../../components/icon/Icon';

export type InputState = 'default' | 'error';
export type InputSize = 's' | 'm' | 'l';
export declare interface InputMask {
  mask: string;
}

export declare class Input extends Vue {
  id: string;
  modelValue: string;
  label?: string;
  caption?: string;
  state?: InputState;
  disabled?: boolean;
  size?: InputSize;
  icon?: Icon;
  badge?: string;
  mask?: InputMask;
  focus: () => void;
}
