import { PropType } from 'vue';
import { PaginationItemType } from '../../components/pagination/PaginationItem';
declare const _default: import("vue").DefineComponent<{
    current: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<PaginationItemType>;
        default: string;
    };
    page: {
        type: NumberConstructor;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    invalid: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    paginationItemClasses: import("vue").ComputedRef<{
        current: boolean;
        disabled: boolean;
    }>;
    goToInputValue: import("vue").Ref<number>;
    goToInputStyles: import("vue").ComputedRef<{
        '--go-to-input-width': string;
    }>;
    allowOnlyNumberInput: (event: KeyboardEvent) => void;
    resetGoToInputValue: () => void;
    emitGoTo: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "goto"[], "goto", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    current?: unknown;
    type?: unknown;
    page?: unknown;
    disabled?: unknown;
    invalid?: unknown;
} & {
    type: PaginationItemType;
    disabled: boolean;
    invalid: boolean;
    current: boolean;
    page: number;
} & {}> & {
    onGoto?: ((...args: any[]) => any) | undefined;
}, {
    type: PaginationItemType;
    disabled: boolean;
    invalid: boolean;
    current: boolean;
    page: number;
}>;
export default _default;
