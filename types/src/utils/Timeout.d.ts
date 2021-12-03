export default class Timeout {
    private timer;
    private startedAt;
    private readonly callback;
    private delay;
    constructor(callback: () => void, timeout: number);
    private start;
    pause(): void;
    resume(): void;
    stop(): void;
}
