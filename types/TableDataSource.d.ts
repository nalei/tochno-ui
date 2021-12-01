export type TableRow = Record<string, unknown>;
export type TableDataRow<T> = T & { checked: boolean; _id: number };
export type TableDataMapper<T> = (item: IVoxTableDataRow) => IVoxTableDataRow<T>;

export declare class TableDataSource<T> {
  perPage: number;
  offset: number;
  private _data!: TableDataRow<T>[];

  constructor(data: T[], mapper?: TableDataMapper<T>);

  get total(): number

  get tableData(): TableDataRow<T>[]

  get pageData(): TableDataRow<T>[]

  get totalPages(): number

  get selectedItems(): TableDataRow<T>[]

  get areAllSelected(): boolean

  selectAll(): void

  unSelectAll(): void

  removeRow(id: number): void
}