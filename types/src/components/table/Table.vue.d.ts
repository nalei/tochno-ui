import { PropType } from 'vue';
import { TableDataSource } from '../../components/table/use/TableDataSource';
import { TableColumn, TableRow } from '../../components/table/Table';
declare const _default: import("vue").DefineComponent<{
    keyField: {
        type: StringConstructor;
    };
    dataSource: {
        type: PropType<TableDataSource<TableRow>>;
        default: TableDataSource<never>;
    };
    columns: {
        type: PropType<TableColumn[]>;
        default: () => never[];
    };
    withHead: {
        type: BooleanConstructor;
        default: boolean;
    };
    withSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    rowsAsLinks: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    rows: import("vue").ComputedRef<TableRow[]>;
    toggleAllOnPage: () => void;
    getColumnStyle: (column: TableColumn) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "rowClick"[], "rowClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    keyField?: unknown;
    dataSource?: unknown;
    columns?: unknown;
    withHead?: unknown;
    withSelect?: unknown;
    rowsAsLinks?: unknown;
} & {
    dataSource: TableDataSource<TableRow>;
    columns: TableColumn[];
    withHead: boolean;
    withSelect: boolean;
    rowsAsLinks: boolean;
} & {
    keyField?: string | undefined;
}> & {
    onRowClick?: ((...args: any[]) => any) | undefined;
}, {
    dataSource: TableDataSource<TableRow>;
    columns: TableColumn[];
    withHead: boolean;
    withSelect: boolean;
    rowsAsLinks: boolean;
}>;
export default _default;
