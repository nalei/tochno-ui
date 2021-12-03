import { PropType } from 'vue';
import { ButtonSize, ButtonMode } from './Button';
import { Icon as IconProps } from '../../components/icon/Icon';
declare const _default: import("vue").DefineComponent<{
    size: {
        type: PropType<ButtonSize>;
        default: string;
        validator: (value: ButtonSize) => boolean;
    };
    mode: {
        type: PropType<ButtonMode>;
        default: string;
        validator: (type: ButtonMode) => boolean;
    };
    icon: {
        type: PropType<IconProps | null>;
        default: null;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    iconOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    buttonClasses: import("vue").ComputedRef<{
        [x: string]: boolean | IconProps | null;
        'with-icon': IconProps | null;
        loading: boolean;
        'icon-only': boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    size?: unknown;
    mode?: unknown;
    icon?: unknown;
    loading?: unknown;
    iconOnly?: unknown;
} & {
    mode: ButtonMode;
    size: ButtonSize;
    icon: IconProps | null;
    loading: boolean;
    iconOnly: boolean;
} & {}>, {
    mode: ButtonMode;
    size: ButtonSize;
    icon: IconProps | null;
    loading: boolean;
    iconOnly: boolean;
}>;
export default _default;
