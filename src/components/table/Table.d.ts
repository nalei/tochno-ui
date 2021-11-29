import Vue from 'vue';
import { TableDataSource } from '@/components/table/use/TableDataSource';

export type TableRow = Record<string, unknown>;
export type TableDataRow<T> = T & { checked: boolean; _id: number };
export type TableDataMapper<T> = (item: IVoxTableDataRow) => IVoxTableDataRow<T>;

export interface TableColumn {
  name: string;
  label?: string;
  subLabel?: string | number;
  info?: string;
  align?: string;
  columnBehavior?: 'fit' | 'fill';
  slot?: boolean;
  hidden?: boolean;
  expander?: boolean;
  className?: string;
}

export declare class Table extends Vue {
  keyField: string;
  columns: TableColumn[];
  dataSource: TableDataSource<TableRow>;
  withHead: boolean;
  withSelect: boolean;
}
