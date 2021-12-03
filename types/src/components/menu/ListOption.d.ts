import { Icon } from '../../components/icon/Icon';
import { MenuColor, MenuMode } from '../../components/menu/MenuList';

export interface ListOption {
  label: string;
  icon?: Icon;
  href?: string;
  active?: boolean;
  color?: MenuColor;
  mode?: MenuMode;
  isSubItem?: boolean;
  disabled?: boolean;
  children?: ListOption[];
}
