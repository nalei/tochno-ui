import { PropType } from 'vue';
import { DropdownOptionProps } from '../../components/dropdown/DropdownOption';
import { SelectMode, SelectSize } from '../../components/select/Select';
declare const _default: import("vue").DefineComponent<{
    size: {
        type: PropType<SelectSize>;
        default: string;
    };
    mode: {
        type: PropType<SelectMode>;
        default: string;
        validator: (type: SelectMode) => boolean;
    };
    active: {
        type: PropType<DropdownOptionProps<unknown> | null>;
        default: null;
    };
    options: {
        type: PropType<DropdownOptionProps<unknown>[]>;
        default: () => never[];
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    caption: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    invalid: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxHeight: {
        type: StringConstructor;
        default: string;
    };
    openOnTop: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    selectClasses: import("vue").ComputedRef<{
        [x: string]: boolean;
        searchable: boolean;
        opened: boolean;
        filled: boolean;
        disabled: boolean;
        invalid: boolean;
        'open-on-top': boolean;
    }>;
    headClasses: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    searchInputRef: import("vue").Ref<HTMLInputElement | null>;
    searchInputValue: import("vue").Ref<string>;
    opened: import("vue").Ref<boolean>;
    select: import("vue").Ref<HTMLDivElement | null>;
    filteredOptions: import("vue").ComputedRef<DropdownOptionProps<unknown>[]>;
    openDropdown: () => void;
    toggleDropdown: () => void;
    onChange: (item: DropdownOptionProps) => void;
    onBlur: (event: FocusEvent) => void;
    onSearch: (event: InputEvent) => void;
    onFocus: () => void;
    onEnter: () => void;
    focusUp: (event: KeyboardEvent) => void;
    focusDown: (event: KeyboardEvent) => void;
    resetState: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:active" | "select")[], "update:active" | "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    size?: unknown;
    mode?: unknown;
    active?: unknown;
    options?: unknown;
    placeholder?: unknown;
    label?: unknown;
    caption?: unknown;
    disabled?: unknown;
    invalid?: unknown;
    searchable?: unknown;
    maxHeight?: unknown;
    openOnTop?: unknown;
    loading?: unknown;
} & {
    mode: SelectMode;
    size: SelectSize;
    loading: boolean;
    disabled: boolean;
    label: string;
    caption: string;
    active: DropdownOptionProps<unknown> | null;
    options: DropdownOptionProps<unknown>[];
    maxHeight: string;
    openOnTop: boolean;
    placeholder: string;
    invalid: boolean;
    searchable: boolean;
} & {}> & {
    "onUpdate:active"?: ((...args: any[]) => any) | undefined;
    onSelect?: ((...args: any[]) => any) | undefined;
}, {
    mode: SelectMode;
    size: SelectSize;
    loading: boolean;
    disabled: boolean;
    label: string;
    caption: string;
    active: DropdownOptionProps<unknown> | null;
    options: DropdownOptionProps<unknown>[];
    maxHeight: string;
    openOnTop: boolean;
    placeholder: string;
    invalid: boolean;
    searchable: boolean;
}>;
export default _default;
