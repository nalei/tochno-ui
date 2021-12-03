import { PropType } from 'vue';
import { Icon as IconProps } from '../../components/icon/Icon';
import { MenuColor, MenuMode } from './MenuList';
declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: PropType<IconProps | null>;
        default: null;
    };
    href: {
        type: StringConstructor;
        default: string;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: PropType<MenuColor>;
        default: string;
    };
    mode: {
        type: PropType<MenuMode>;
        default: string;
        validator: (type: MenuMode) => boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    label?: unknown;
    icon?: unknown;
    href?: unknown;
    active?: unknown;
    color?: unknown;
    mode?: unknown;
    disabled?: unknown;
} & {
    color: MenuColor;
    mode: MenuMode;
    icon: IconProps | null;
    disabled: boolean;
    label: string;
    active: boolean;
    href: string;
} & {}>, {
    color: MenuColor;
    mode: MenuMode;
    icon: IconProps | null;
    disabled: boolean;
    label: string;
    active: boolean;
    href: string;
}>;
export default _default;
