import { PropType } from 'vue';
import { Crumb } from '../../components/breadcrumbs/Breadcrumbs';
declare const _default: import("vue").DefineComponent<{
    crumbs: {
        type: PropType<Crumb[]>;
        default: () => never[];
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    crumbs?: unknown;
} & {
    crumbs: Crumb[];
} & {}>, {
    crumbs: Crumb[];
}>;
export default _default;
