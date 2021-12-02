import Vue from 'vue';
import { Dropdown } from '../../components/dropdown/Dropdown';

export type SelectSize = 's' | 'm' | 'l';
export type SelectMode = 'default' | 'sort';

export declare class Select extends Vue {
  active: Pick<Dropdown, 'active'>;
  options: Pick<Dropdown, 'options'>;
  placeholder?: string;
  label?: string;
  caption?: string;
  disabled?: boolean;
  invalid?: boolean;
  searchable?: boolean;
  maxHeight?: Pick<Dropdown, 'maxHeight'>;
  openOnTop?: boolean;
  size?: SelectSize;
  mode?: SelectMode;
  loading?: boolean;
}
