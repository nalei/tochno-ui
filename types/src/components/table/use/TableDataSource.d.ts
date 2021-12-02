import { TableDataMapper, TableDataRow } from '../../../components/table/Table';
export declare class TableDataSource<T> {
    perPage: number;
    offset: number;
    private _data;
    constructor(data: T[], mapper?: TableDataMapper<T>);
    get total(): number;
    get tableData(): TableDataRow<T>[];
    get pageData(): TableDataRow<T>[];
    get totalPages(): number;
    get selectedItems(): TableDataRow<T>[];
    get areAllSelected(): boolean;
    selectAll(): void;
    unSelectAll(): void;
    removeRow(id: number): void;
}
