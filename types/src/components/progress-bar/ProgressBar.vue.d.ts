declare const _default: import("vue").DefineComponent<{
    height: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    failedColor: {
        type: StringConstructor;
        default: string;
    };
}, {
    percent: import("vue").ComputedRef<number>;
    canSuccess: import("vue").ComputedRef<boolean>;
    show: import("vue").ComputedRef<boolean>;
    start: () => void;
    finish: () => void;
    fail: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    height?: unknown;
    color?: unknown;
    failedColor?: unknown;
} & {
    color: string;
    height: string;
    failedColor: string;
} & {}>, {
    color: string;
    height: string;
    failedColor: string;
}>;
export default _default;
