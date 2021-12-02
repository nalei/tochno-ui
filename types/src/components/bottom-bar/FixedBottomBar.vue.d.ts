declare const _default: import("vue").DefineComponent<{
    isStick: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    bottomBarAnchorRef: import("vue").Ref<Element | null>;
    bottomBarClasses: import("vue").ComputedRef<{
        stick: boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:isStick"[], "update:isStick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    isStick?: unknown;
} & {
    isStick: boolean;
} & {}> & {
    "onUpdate:isStick"?: ((...args: any[]) => any) | undefined;
}, {
    isStick: boolean;
}>;
export default _default;
