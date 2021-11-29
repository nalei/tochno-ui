import Vue from 'vue';
import { Icon } from '@/components/icon/Icon';

export type ButtonSize = 's' | 'm' | 'l';

export type ButtonMode = 'primary' | 'secondary' | 'info' | 'state';

export declare class Button extends Vue {
  size?: ButtonSize;
  mode?: ButtonMode;
  icon?: Icon;
  loading?: boolean;
  iconOnly?: boolean;
}
