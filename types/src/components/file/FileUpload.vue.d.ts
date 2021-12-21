import { PropType } from 'vue';
import { FileUploadDictionary } from '../../components/file/FileUpload';
declare const _default: import("vue").DefineComponent<{
    fileName: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxSize: {
        type: NumberConstructor;
        default: number;
    };
    availableTypes: {
        type: PropType<string[]>;
        default: () => never[];
    };
    dictionary: {
        type: PropType<Partial<FileUploadDictionary>>;
        default: () => {};
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
    onClick: (e: Event) => void;
    fileUploadDictionary: import("vue").ComputedRef<FileUploadDictionary>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "error")[], "error" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    fileName?: unknown;
    disabled?: unknown;
    maxSize?: unknown;
    availableTypes?: unknown;
    dictionary?: unknown;
} & {
    disabled: boolean;
    dictionary: Partial<FileUploadDictionary>;
    fileName: string;
    maxSize: number;
    availableTypes: string[];
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onError?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    dictionary: Partial<FileUploadDictionary>;
    fileName: string;
    maxSize: number;
    availableTypes: string[];
}>;
export default _default;
