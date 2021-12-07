import Vue from 'vue';

export type PopupSize = 's' | 'm' | 'l';
export type PopupMode = 'notice' | 'content';

export declare class Popup extends Vue {
  mode: PopupMode;
  title?: string;
  opened?: boolean;
  strict?: boolean;
  size?: PopupSize;
}
