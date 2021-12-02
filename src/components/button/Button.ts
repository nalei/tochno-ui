import { DefineComponent } from 'vue';
import { Icon } from '@/components/icon/Icon';

export type ButtonSize = 's' | 'm' | 'l';

export type ButtonMode = 'primary' | 'secondary' | 'info' | 'state';

declare const Button: DefineComponent<
  {
    size?: ButtonSize;
    mode?: ButtonMode;
    icon?: typeof Icon;
    loading?: boolean;
    iconOnly?: boolean;
  },
  Record<string, string>,
  any
>;

export default Button;
