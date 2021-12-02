import Vue from 'vue';
import { Icon } from '../../components/icon/Icon';

export type TabsSize = 'm' | 'l';

export interface TabsItem {
  title: string;
  badge?: string;
  icon?: Icon;
  disabled?: boolean;
}

export declare class Tabs extends Vue {
  activeItem: number | null;
  items: TabsItem[];
  size?: TabsSize;
}
