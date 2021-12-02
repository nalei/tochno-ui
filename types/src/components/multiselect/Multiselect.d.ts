import Vue from 'vue';
import { Dropdown } from '../../componentsdropdown/Dropdown';

export type SelectSize = 's' | 'm' | 'l';
export type SelectMode = 'default' | 'sort';

export declare class Multiselect extends Vue {
  active: Pick<Dropdown, 'active'>[];
  options: Pick<Dropdown, 'options'>;
  placeholder?: string;
  label?: string;
  caption?: string;
  disabled?: boolean;
  invalid?: boolean;
  maxHeight?: Pick<Dropdown, 'maxHeight'>;
  openOnTop?: boolean;
  size?: SelectSize;
  mode?: SelectMode;
}
