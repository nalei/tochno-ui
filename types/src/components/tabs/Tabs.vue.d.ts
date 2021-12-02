import { PropType } from 'vue';
import { TabsItem } from '../../components/tabs/Tabs';
import { SelectSize } from '../../components/select/Select';
declare const _default: import("vue").DefineComponent<{
    activeItem: {
        type: NumberConstructor;
        default: null;
    };
    items: {
        type: PropType<TabsItem[]>;
        default: () => never[];
    };
    size: {
        type: PropType<SelectSize>;
        default: string;
    };
}, {
    activeTabRef: import("vue").Ref<HTMLElement | null>;
    activeTabWidth: import("vue").ComputedRef<number | undefined>;
    tabTranslate: import("vue").Ref<number>;
    onItemClick: (index: number, item: TabsItem) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:activeItem")[], "change" | "update:activeItem", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    activeItem?: unknown;
    items?: unknown;
    size?: unknown;
} & {
    size: SelectSize;
    activeItem: number;
    items: TabsItem[];
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:activeItem"?: ((...args: any[]) => any) | undefined;
}, {
    size: SelectSize;
    activeItem: number;
    items: TabsItem[];
}>;
export default _default;
