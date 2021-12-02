import { IMessage } from '../../components/messenger/Messenger';
declare const _default: import("vue").DefineComponent<{}, {
    messages: import("vue").ComputedRef<{
        _id?: number | undefined;
        message: string;
        visible?: boolean | undefined;
        type?: any;
        timer?: {
            pause: () => void;
            resume: () => void;
            stop: () => void;
        } | undefined;
    }[]>;
    getColor: ({ type }: IMessage) => "red" | "yellow" | "blue" | "green";
    getIconProps: ({ type }: IMessage) => {
        name: string;
        color: string;
    } | undefined;
    deleteMessage: ({ _id, timer }: IMessage) => void;
    pauseHold: () => void;
    resumeHold: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
export default _default;
