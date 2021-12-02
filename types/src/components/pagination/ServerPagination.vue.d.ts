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
    list: {
        type: ArrayConstructor;
        default: () => never[];
    };
    isPossibleSelectAll: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    totalPage: import("vue").ComputedRef<number>;
    activePerPage: import("vue").ComputedRef<DropdownOptionProps<number>>;
    perPageOptions: import("vue").ComputedRef<DropdownOptionProps<number>[]>;
    currentPage: import("vue").Ref<number>;
    handlePerPageSelect: (event: DropdownOptionProps<number>) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    perPage?: unknown;
    offset?: unknown;
    total?: unknown;
    list?: unknown;
    isPossibleSelectAll?: unknown;
} & {
    list: unknown[];
    total: number;
    perPage: number;
    offset: number;
    isPossibleSelectAll: boolean;
} & {}>, {
    list: unknown[];
    total: number;
    perPage: number;
    offset: number;
    isPossibleSelectAll: boolean;
}>;
export default _default;
