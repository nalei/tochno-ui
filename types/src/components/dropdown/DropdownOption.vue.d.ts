import { PropType } from 'vue';
import { Icon as IconProps } from '../../components/icon/Icon';
declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        default: string;
    };
    subtitle: {
        type: StringConstructor;
        default: string;
    };
    value: {
        default: null;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: PropType<IconProps | null>;
        default: null;
    };
}, {
    optionClasses: import("vue").ComputedRef<{
        active: boolean;
        disabled: boolean;
    }>;
    tabindex: import("vue").ComputedRef<-1 | 0>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    label?: unknown;
    subtitle?: unknown;
    value?: unknown;
    active?: unknown;
    disabled?: unknown;
    icon?: unknown;
} & {
    icon: IconProps | null;
    disabled: boolean;
    label: string;
    subtitle: string;
    value: null;
    active: boolean;
} & {}>, {
    icon: IconProps | null;
    disabled: boolean;
    label: string;
    subtitle: string;
    value: null;
    active: boolean;
}>;
export default _default;
