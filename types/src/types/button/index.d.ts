/* eslint-disable */
import { DefineComponent } from 'vue';

export type ButtonSize = 's' | 'm' | 'l';

export type ButtonMode = 'primary' | 'secondary' | 'info' | 'state';

declare const Button: DefineComponent<
  {
    size?: ButtonSize;
    mode?: ButtonMode;
    icon?: Icon;
    loading?: boolean;
    iconOnly?: boolean;
  },
  {},
  any
>;

export default Button;
