import Vue from 'vue';

export type PopupSize = 's' | 'm' | 'l';

export declare class Popup extends Vue {
  title?: string;
  opened?: boolean;
  strict?: boolean;
  size?: PopupSize;
}
