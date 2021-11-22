import { Icon } from '@/components/icon/Icon';

export declare interface DropdownOptionProps<T = unknown> {
  label: string;
  value: T;
  subtitle?: string;
  active?: boolean;
  disabled?: boolean;
  icon?: Icon;
  isAdmin?: boolean;
}
