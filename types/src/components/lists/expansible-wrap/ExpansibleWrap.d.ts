import Vue from 'vue';

export type ExpansibleWrapData = string[] | Record<string, unknown>[];

export declare class ExpansibleWrap extends Vue {
  data: ExpansibleWrapData;
  label?: string;
  entityName?: string;
  showCount?: string | number;
}
