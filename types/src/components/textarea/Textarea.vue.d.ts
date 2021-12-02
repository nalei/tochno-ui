import { PropType } from 'vue';
import { TextareaState } from '../../components/textarea/Textarea';
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
        type: PropType<TextareaState>;
        default: string;
        validator: (state: TextareaState) => boolean;
    };
    id: {
        type: StringConstructor;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    message: import("vue").WritableComputedRef<string | number | undefined>;
    boxClass: import("vue").ComputedRef<{
        [x: string]: boolean;
        focus: boolean;
        disabled: boolean;
    }>;
    textareaClass: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    captionClass: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    textarea: import("vue").Ref<HTMLTextAreaElement | null>;
    isFocused: import("vue").Ref<boolean>;
    focus: () => void;
    handleInput: (event: InputEvent) => void;
    handlePaste: (event: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "paste")[], "update:modelValue" | "input" | "paste", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    placeholder?: unknown;
    label?: unknown;
    caption?: unknown;
    state?: unknown;
    id?: unknown;
    disabled?: unknown;
} & {
    state: TextareaState;
    disabled: boolean;
    label: string;
    caption: string;
    placeholder: string;
} & {
    modelValue?: string | number | undefined;
    id?: string | undefined;
}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onPaste?: ((...args: any[]) => any) | undefined;
}, {
    state: TextareaState;
    disabled: boolean;
    label: string;
    caption: string;
    placeholder: string;
}>;
export default _default;
