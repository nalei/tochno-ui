declare const _default: import("vue").DefineComponent<{
    spriteUrl: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    url: {
        type: StringConstructor;
        default: null;
        validator: (url: string) => boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
}, {
    iconStyle: import("vue").ComputedRef<{
        '--icon-color'?: string | undefined;
    }>;
    svgContent: import("vue").Ref<string>;
    svgAttrs: import("vue").Ref<{
        [x: string]: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    spriteUrl?: unknown;
    name?: unknown;
    url?: unknown;
    color?: unknown;
} & {
    name: string;
    spriteUrl: string;
    url: string;
    color: string;
} & {}>, {
    name: string;
    spriteUrl: string;
    url: string;
    color: string;
}>;
export default _default;
