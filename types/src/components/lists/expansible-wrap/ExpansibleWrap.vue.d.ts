import { PropType } from 'vue';
import { ExpansibleWrapData } from '../../../components/lists/expansible-wrap/ExpansibleWrap';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<ExpansibleWrapData>;
        default: () => never[];
        required: true;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    entityName: {
        type: StringConstructor;
        default: string;
    };
    showCount: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (value: string | number) => boolean;
    };
}, {
    isShowAll: import("vue").Ref<boolean>;
    showAllLabel: import("vue").ComputedRef<string>;
    onShowAll: () => void;
    list: import("vue").ComputedRef<{
        initial: ExpansibleWrapData;
        rest: ExpansibleWrapData;
        len: number;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
    label?: unknown;
    entityName?: unknown;
    showCount?: unknown;
} & {
    data: ExpansibleWrapData;
    label: string;
    entityName: string;
    showCount: string | number;
} & {}>, {
    data: ExpansibleWrapData;
    label: string;
    entityName: string;
    showCount: string | number;
}>;
export default _default;
