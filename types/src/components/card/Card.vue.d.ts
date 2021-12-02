declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    number: {
        type: StringConstructor;
        default: string;
    };
    first: {
        type: BooleanConstructor;
        default: boolean;
    };
    last: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    cardClasses: import("vue").ComputedRef<{
        'with-sidebar': string;
        'card-first': boolean;
        'card-last': boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title?: unknown;
    number?: unknown;
    first?: unknown;
    last?: unknown;
} & {
    number: string;
    title: string;
    first: boolean;
    last: boolean;
} & {}>, {
    number: string;
    title: string;
    first: boolean;
    last: boolean;
}>;
export default _default;
