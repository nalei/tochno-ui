import Vue from 'vue';

export type TextareaState = 'default' | 'error';

export declare class Textarea extends Vue {
  id: string;
  modelValue: boolean;
  label?: string;
  caption?: string;
  disabled?: boolean;
  state?: TextareaState;
  focus: () => void;
}
