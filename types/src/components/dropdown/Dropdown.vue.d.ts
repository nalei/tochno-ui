import { PropType } from 'vue';
import { DropdownDictionary } from '../../components/dropdown/Dropdown';
import { DropdownOptionProps } from '../../components/dropdown/DropdownOption';
declare const _default: import("vue").DefineComponent<{
    opened: {
        type: BooleanConstructor;
        default: boolean;
    };
    active: {
        type: PropType<DropdownOptionProps<unknown> | null>;
        default: null;
    };
    options: {
        type: PropType<DropdownOptionProps<unknown>[]>;
        default: () => never[];
    };
    maxHeight: {
        type: StringConstructor;
        default: string;
    };
    noResults: {
        type: BooleanConstructor;
        default: boolean;
    };
    dictionary: {
        type: PropType<Partial<DropdownDictionary>>;
        default: () => {};
    };
    openOnTop: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    dropdownDictionary: import("vue").ComputedRef<DropdownDictionary>;
    dropdownStyles: import("vue").ComputedRef<{
        '--dropdown-max-height': string;
    }>;
    chooseItem: (item: DropdownOptionProps) => void;
    onBlur: (event: FocusEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:opened")[], "change" | "update:opened", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    opened?: unknown;
    active?: unknown;
    options?: unknown;
    maxHeight?: unknown;
    noResults?: unknown;
    dictionary?: unknown;
    openOnTop?: unknown;
} & {
    opened: boolean;
    active: DropdownOptionProps<unknown> | null;
    options: DropdownOptionProps<unknown>[];
    maxHeight: string;
    noResults: boolean;
    dictionary: Partial<DropdownDictionary>;
    openOnTop: boolean;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:opened"?: ((...args: any[]) => any) | undefined;
}, {
    opened: boolean;
    active: DropdownOptionProps<unknown> | null;
    options: DropdownOptionProps<unknown>[];
    maxHeight: string;
    noResults: boolean;
    dictionary: Partial<DropdownDictionary>;
    openOnTop: boolean;
}>;
export default _default;
