import { PropType } from 'vue';
import { CheckboxSize } from '../../components/checkbox/Checkbox';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        type: StringConstructor;
    };
    label: {
        type: StringConstructor;
    };
    caption: {
        type: StringConstructor;
    };
    error: {
        type: StringConstructor;
    };
    size: {
        type: PropType<CheckboxSize>;
        default: string;
        validator: (value: string) => boolean;
    };
}, {
    imgSrc: import("vue").ComputedRef<any>;
    boxClass: import("vue").ComputedRef<{
        [x: string]: string | boolean | undefined;
        checked: boolean;
        error: string | undefined;
        indeterminate: boolean;
        disabled: boolean;
    }>;
    captionClass: import("vue").ComputedRef<{
        [x: string]: string | boolean | undefined;
        error: string | undefined;
        'text-12px-regular': boolean;
    }>;
    labelClass: import("vue").ComputedRef<{
        checked: boolean;
        indeterminate: boolean;
        disabled: boolean;
        'caption-16px-medium': boolean;
        'text-12px-regular': boolean;
    }>;
    onClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    disabled?: unknown;
    indeterminate?: unknown;
    id?: unknown;
    label?: unknown;
    caption?: unknown;
    error?: unknown;
    size?: unknown;
} & {
    size: CheckboxSize;
    modelValue: boolean;
    disabled: boolean;
    indeterminate: boolean;
} & {
    id?: string | undefined;
    label?: string | undefined;
    caption?: string | undefined;
    error?: string | undefined;
}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    size: CheckboxSize;
    modelValue: boolean;
    disabled: boolean;
    indeterminate: boolean;
}>;
export default _default;
