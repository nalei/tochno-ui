import { PropType } from 'vue';
import { TableDataSource } from '../../components/table/use/TableDataSource';
import { TableRow } from '../../components/table/Table';
import { DropdownOptionProps } from '../../components/dropdown/DropdownOption';
declare const _default: import("vue").DefineComponent<{
    perPage: {
        type: NumberConstructor;
        default: number;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    total: {
        type: NumberConstructor;
        default: number;
    };
    dataSource: {
        type: PropType<TableDataSource<TableRow>>;
        default: TableDataSource<never>;
    };
}, {
    perPageCount: import("vue").Ref<{
        label: string;
        value: number;
        subtitle?: string | undefined;
        active?: boolean | undefined;
        disabled?: boolean | undefined;
        icon?: {
            spriteUrl?: string | undefined;
            name?: string | undefined;
            url?: string | undefined;
            color?: string | undefined;
        } | undefined;
        isAdmin?: boolean | undefined;
    }>;
    perPageOptions: DropdownOptionProps<number>[];
    currentPage: import("vue").Ref<number>;
    tableData: {
        perPage: number;
        offset: number;
        readonly total: number;
        readonly tableData: {
            [x: string]: unknown;
            checked: boolean;
            _id: number;
        }[];
        readonly pageData: {
            [x: string]: unknown;
            checked: boolean;
            _id: number;
        }[];
        readonly totalPages: number;
        readonly selectedItems: {
            [x: string]: unknown;
            checked: boolean;
            _id: number;
        }[];
        readonly areAllSelected: boolean;
        selectAll: () => void;
        unSelectAll: () => void;
        removeRow: (id: number) => void;
    };
    handlePerPageSelect: (event: DropdownOptionProps<number>) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    perPage?: unknown;
    offset?: unknown;
    total?: unknown;
    dataSource?: unknown;
} & {
    total: number;
    perPage: number;
    offset: number;
    dataSource: TableDataSource<TableRow>;
} & {}>, {
    total: number;
    perPage: number;
    offset: number;
    dataSource: TableDataSource<TableRow>;
}>;
export default _default;
