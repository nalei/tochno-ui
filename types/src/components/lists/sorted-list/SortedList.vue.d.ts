import { PropType } from 'vue';
import { ISortedListRow } from '../../../components/lists/sorted-list/SortedList';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<ISortedListRow<unknown>[]>;
        default: () => never[];
    };
}, {
    dragOptions: {
        animation: number;
        fallbackTolerance: number;
        touchStartThreshold: number;
        easing: string;
        forceFallback: boolean;
        fallbackOnBody: boolean;
        dragClass: string;
        ghostClass: string;
        group: string;
        disabled: boolean;
    };
    items: import("vue").WritableComputedRef<ISortedListRow<unknown>[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
} & {
    modelValue: ISortedListRow<unknown>[];
} & {}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: ISortedListRow<unknown>[];
}>;
export default _default;
