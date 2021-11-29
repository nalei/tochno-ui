import { TableDataMapper, TableDataRow } from '@/components/table/Table';

export class TableDataSource<T> {
  public perPage = 0;
  public offset = 0;
  private _data!: TableDataRow<T>[];

  constructor(data: T[], mapper?: TableDataMapper<T>) {
    this._data = <TableDataRow<T>[]>data.map((row, idx) => ({
      ...row,
      checked: false,
      _id: idx + 1,
    }));

    if (mapper) {
      this._data = this._data.map(mapper);
    }
  }

  public get total(): number {
    return this.tableData.length;
  }

  public get tableData(): TableDataRow<T>[] {
    return this._data;
  }

  public get pageData(): TableDataRow<T>[] {
    return this.perPage ? this.tableData.slice(this.offset, this.offset + this.perPage) : this.tableData;
  }

  public get totalPages(): number {
    return Math.ceil(this.total / this.perPage);
  }

  public get selectedItems(): TableDataRow<T>[] {
    return this._data.filter((row) => row.checked);
  }

  public get areAllSelected(): boolean {
    return this.tableData.every(({ checked }) => checked);
  }

  public selectAll() {
    this._data.forEach((row) => {
      row.checked = true;
    });
  }

  public unSelectAll() {
    this._data.forEach((row) => {
      row.checked = false;
    });
  }

  // TODO: Удалить этот метод.
  public removeRow(id: number) {
    this._data = this.tableData.filter((row) => row._id !== id);
  }
}

// export function useTable() {
//   const tableState = reactive<TableState<TableRow>>({
//     _data: [],
//     _perPage: 0,
//     _offset: 0,
//   });
//
//   function build(rawData: TableRow[]) {
//     tableState._data = rawData.map((row, idx) => ({
//       ...row,
//       checked: false,
//       _id: idx + 1,
//     }));
//   }
//
//   const total = computed<number>(() => tableState._data.length);
//   const perPage = computed<number>(() => tableState._perPage);
//   const offset = computed<number>(() => tableState._offset);
//
//   const tableData = computed<TableDataRow<TableRow>[]>(() => tableState._data);
//
//   const pageData = computed<TableDataRow<TableRow>[]>(() => {
//     return perPage.value ? tableData.value.slice(offset.value, offset.value + perPage.value) : tableData.value;
//   });
//
//   return { build, total, perPage, offset, tableData, pageData };
// }
