import { DefineComponent, Directive } from "vue";

export type TableRow = Record<string, unknown>;
export type TableDataRow<T> = T & { checked: boolean; _id: number };
export type TableDataMapper<T> = (item: IVoxTableDataRow) => IVoxTableDataRow<T>;

export declare class TableDataSource<T> {
  perPage: number;
  offset: number;
  private _data!: TableDataRow<T>[];

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

export const BottomBar: DefineComponent;
export const FixedBottomBar: DefineComponent;
export const Breadcrumbs: DefineComponent;
export const Button: DefineComponent;
export const Card: DefineComponent;
export const Checkbox: DefineComponent;
export const Dropdown: DefineComponent;
export const DropdownOption: DefineComponent;
export const FileUpload: DefineComponent;
export const Filters: DefineComponent;
export const Icon: DefineComponent;
export const Input: DefineComponent;
export const PageShell: DefineComponent;
export const PageSidebar: DefineComponent;
export const ExpansibleList: DefineComponent;
export const ExpansibleWrap: DefineComponent;
export const List: DefineComponent;
export const SortedList: DefineComponent;
export const Bubbles: DefineComponent;
export const Shine: DefineComponent;
export const ListOption: DefineComponent;
export const MenuList: DefineComponent;
export const TransitionExpand: DefineComponent;
export const Messenger: DefineComponent;
export const useMessenger: any;
export const Popup: DefineComponent;
export const Multiselect: DefineComponent;
export const ClientPagination: DefineComponent;
export const Pagination: DefineComponent;
export const PaginationItem: DefineComponent;
export const ServerPagination: DefineComponent;
export const ProgressBar: DefineComponent;
export const useProgressBar: any;
export const Select: DefineComponent;
export const Table: DefineComponent;
export const Tabs: DefineComponent;
export const Textarea: DefineComponent;
export const Timer: DefineComponent;
export const Tooltip: Directive<any, any>;