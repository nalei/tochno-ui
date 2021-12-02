import { PropType } from 'vue';
import { ListOption as ListOptionProps } from '../../components/menu/ListOption';
import { MenuColor, MenuMode } from '../../components/menu/MenuList';
declare const _default: import("vue").DefineComponent<{
    options: {
        type: PropType<ListOptionProps[]>;
        default: () => never[];
    };
    mode: {
        type: PropType<MenuMode>;
        default: string;
        validator: (type: MenuMode) => boolean;
    };
    color: {
        type: PropType<MenuColor>;
        default: string;
        validator: (value: MenuColor) => boolean;
    };
}, {
    activeOptionIndex: import("vue").Ref<number>;
    menuListClasses: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    markerTranslate: import("vue").Ref<number>;
    activeLi: import("vue").Ref<HTMLLIElement | null>;
    expandSubmenu: (index: number) => void;
    onPageUp: (e: Event) => void;
    onPageDown: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    options?: unknown;
    mode?: unknown;
    color?: unknown;
} & {
    color: MenuColor;
    mode: MenuMode;
    options: ListOptionProps[];
} & {}>, {
    color: MenuColor;
    mode: MenuMode;
    options: ListOptionProps[];
}>;
export default _default;
