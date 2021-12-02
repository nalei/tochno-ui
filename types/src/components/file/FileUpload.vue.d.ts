declare const _default: import("vue").DefineComponent<{
    fileName: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    file: import("vue").Ref<{
        readonly lastModified: number;
        readonly name: string;
        readonly webkitRelativePath: string;
        readonly size: number;
        readonly type: string;
        arrayBuffer: () => Promise<ArrayBuffer>;
        slice: (start?: number | undefined, end?: number | undefined, contentType?: string | undefined) => Blob;
        stream: () => ReadableStream<any>;
        text: () => Promise<string>;
    } | null>;
    name: import("vue").ComputedRef<string>;
    onChangeFile: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    fileName?: unknown;
    disabled?: unknown;
} & {
    disabled: boolean;
    fileName: string;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    fileName: string;
}>;
export default _default;
