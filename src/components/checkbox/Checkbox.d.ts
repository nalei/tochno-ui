import Vue from 'vue';

export type CheckboxSize = 'm' | 'l';

export declare class Checkbox extends Vue {
  label?: string;
  id: string;
  caption?: string;
  error?: string;
  modelValue: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  size?: CheckboxSize;
}
