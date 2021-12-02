import { PropType } from 'vue';
import { PaginationDictionary } from '../../components/pagination/Pagination';
declare const _default: import("vue").DefineComponent<{
    currentPage: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    total: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    maxVisible: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    shift: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    dict: {
        type: PropType<Partial<PaginationDictionary>>;
        default: () => {};
    };
}, {
    dictionary: import("vue").ComputedRef<PaginationDictionary>;
    invalidPage: import("vue").Ref<boolean>;
    canDecrementPage: import("vue").ComputedRef<boolean>;
    canIncrementPage: import("vue").ComputedRef<boolean>;
    canShiftToLeft: import("vue").ComputedRef<boolean>;
    canShiftToRight: import("vue").ComputedRef<boolean>;
    hasMoreItemsRight: import("vue").ComputedRef<boolean>;
    hasMoreItemsLeft: import("vue").ComputedRef<boolean>;
    visiblePageNumbers: import("vue").ComputedRef<number[]>;
    pageNumberBoundaries: import("vue").ComputedRef<{
        lowest: number;
        highest: number;
    }>;
    maxVisibleItems: import("vue").ComputedRef<number>;
    visibleInMiddle: import("vue").ComputedRef<number>;
    allItemsFit: import("vue").ComputedRef<boolean>;
    decrementPage: () => void;
    incrementPage: () => void;
    setPage: (page: number) => void;
    onGoTo: (page: number) => void;
    shiftBy: (shift: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:currentPage"[], "update:currentPage", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    currentPage?: unknown;
    total?: unknown;
    maxVisible?: unknown;
    shift?: unknown;
    dict?: unknown;
} & {
    shift: number;
    currentPage: number;
    total: number;
    maxVisible: number;
    dict: Partial<PaginationDictionary>;
} & {}> & {
    "onUpdate:currentPage"?: ((...args: any[]) => any) | undefined;
}, {
    shift: number;
    currentPage: number;
    total: number;
    maxVisible: number;
    dict: Partial<PaginationDictionary>;
}>;
export default _default;
