declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        type: StringConstructor;
    };
}, {
    checkboxRef: import("vue").Ref<HTMLInputElement | null>;
    toggleClass: import("vue").ComputedRef<{
        disabled: boolean;
    }>;
    onClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    disabled?: unknown;
    id?: unknown;
} & {
    modelValue: boolean;
    disabled: boolean;
} & {
    id?: string | undefined;
}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: boolean;
    disabled: boolean;
}>;
export default _default;
