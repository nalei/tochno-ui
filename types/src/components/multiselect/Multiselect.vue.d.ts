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
        type: PropType<DropdownOptionProps<unknown>[]>;
        default: () => never[];
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
}, {
    opened: import("vue").Ref<boolean>;
    selectRef: import("vue").Ref<HTMLDivElement | null>;
    searchInputRef: import("vue").Ref<HTMLInputElement | null>;
    searchInputValue: import("vue").Ref<string>;
    selected: import("vue").Ref<DropdownOptionProps<unknown>[]>;
    selectClasses: import("vue").ComputedRef<{
        [x: string]: number | boolean;
        opened: boolean;
        filled: number;
        disabled: boolean;
        invalid: boolean;
        'open-on-top': boolean;
    }>;
    headClasses: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    filteredOptions: import("vue").ComputedRef<DropdownOptionProps<unknown>[]>;
    openDropdown: () => void;
    toggleDropdown: () => void;
    onChange: (item: DropdownOptionProps) => void;
    onBlur: (event: FocusEvent) => void;
    focusUp: (event: KeyboardEvent) => void;
    focusDown: (event: KeyboardEvent) => void;
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
} & {
    mode: SelectMode;
    size: SelectSize;
    disabled: boolean;
    label: string;
    caption: string;
    active: DropdownOptionProps<unknown>[];
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
    disabled: boolean;
    label: string;
    caption: string;
    active: DropdownOptionProps<unknown>[];
    options: DropdownOptionProps<unknown>[];
    maxHeight: string;
    openOnTop: boolean;
    placeholder: string;
    invalid: boolean;
    searchable: boolean;
}>;
export default _default;
