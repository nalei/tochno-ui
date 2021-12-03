import { IMessage } from '../../../components/messenger/Messenger';
export declare enum MessageType {
    Info = "info",
    Success = "success",
    Warning = "warning",
    Error = "error"
}
export declare function useMessenger(): {
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
    addMessage: (message: string, type?: MessageType) => void;
    deleteMessage: ({ _id, timer }: IMessage) => void;
    error: ({ message }: IMessage) => void;
    warn: ({ message }: IMessage) => void;
    success: ({ message }: IMessage) => void;
    info: ({ message }: IMessage) => void;
};
