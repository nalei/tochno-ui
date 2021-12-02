import Vue from 'vue';
import { ListOption } from '../../components/menu/ListOption';

export type MenuColor = 'black' | 'gray';
export type MenuMode = 'desktop' | 'tablet';

export declare class MenuList extends Vue {
  options: ListOption[];
  color?: MenuColor;
  mode?: MenuMode;
}
