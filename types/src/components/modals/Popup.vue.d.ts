import { PropType } from 'vue';
import { PopupSize, PopupMode } from '../../components/modals/Popup';
declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    opened: {
        type: BooleanConstructor;
        default: boolean;
    };
    strict: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<PopupSize>;
        default: string;
        validator: (value: PopupSize) => boolean;
    };
    mode: {
        type: PropType<PopupMode>;
        default: string;
        validator: (value: PopupMode) => boolean;
    };
}, {
    popupClasses: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    wrapperClasses: import("vue").ComputedRef<{
        content: boolean;
        notice?: undefined;
    } | {
        notice: boolean;
        content?: undefined;
    }>;
    closePopup: () => void;
    onMousedownHandler: () => false | void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:opened" | "close")[], "update:opened" | "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title?: unknown;
    opened?: unknown;
    strict?: unknown;
    size?: unknown;
    mode?: unknown;
} & {
    opened: boolean;
    mode: PopupMode;
    size: PopupSize;
    title: string;
    strict: boolean;
} & {}> & {
    "onUpdate:opened"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    opened: boolean;
    mode: PopupMode;
    size: PopupSize;
    title: string;
    strict: boolean;
}>;
export default _default;
