import { PropType } from 'vue';
import { Icon as IconProps } from '../../components/icon/Icon';
import { InputState, InputSize, InputMask } from '../../components/input/Input';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
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
    state: {
        type: PropType<InputState>;
        default: string;
        validator: (state: InputState) => boolean;
    };
    id: {
        type: StringConstructor;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<InputSize>;
        default: string;
        validator: (value: InputSize) => boolean;
    };
    icon: {
        type: PropType<IconProps | null>;
        default: null;
    };
    badge: {
        type: StringConstructor;
        default: string;
    };
    mask: {
        type: PropType<InputMask | null>;
        default: null;
    };
}, {
    message: import("vue").WritableComputedRef<string | number | undefined>;
    boxClass: import("vue").ComputedRef<{
        [x: string]: boolean;
        focus: boolean;
        disabled: boolean;
    }>;
    labelClass: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    inputClass: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    captionClass: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    badgeClass: import("vue").ComputedRef<{
        [x: string]: boolean;
        focus: boolean;
        disabled: boolean;
    }>;
    input: import("vue").Ref<HTMLInputElement | null>;
    isFocused: import("vue").Ref<boolean>;
    focus: () => void;
    handleInput: (event: InputEvent) => void;
    handlePaste: (event: Event) => void;
    handleIconClick: () => void;
    handleFocus: () => void;
    handleBlur: () => void;
    handleMask: (event: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "paste" | "focus" | "blur" | "mask")[], "update:modelValue" | "input" | "paste" | "focus" | "blur" | "mask", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    placeholder?: unknown;
    label?: unknown;
    caption?: unknown;
    state?: unknown;
    id?: unknown;
    disabled?: unknown;
    size?: unknown;
    icon?: unknown;
    badge?: unknown;
    mask?: unknown;
} & {
    state: InputState;
    size: InputSize;
    icon: IconProps | null;
    disabled: boolean;
    label: string;
    caption: string;
    mask: InputMask | null;
    placeholder: string;
    badge: string;
} & {
    modelValue?: string | number | undefined;
    id?: string | undefined;
}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onPaste?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onMask?: ((...args: any[]) => any) | undefined;
}, {
    state: InputState;
    size: InputSize;
    icon: IconProps | null;
    disabled: boolean;
    label: string;
    caption: string;
    mask: InputMask | null;
    placeholder: string;
    badge: string;
}>;
export default _default;
