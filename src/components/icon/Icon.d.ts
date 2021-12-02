import { DefineComponent } from 'vue';

declare const Icon: DefineComponent<
  {
    spriteUrl?: string;
    name?: string;
    url?: string;
    color?: string;
  },
  Record<string, string>,
  any
>;
