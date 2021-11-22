import Vue from 'vue';

export declare interface Crumb {
  label: string;
  link?: string;
}

export declare class Breadcrumbs extends Vue {
  crumbs: Crumb[];
}
