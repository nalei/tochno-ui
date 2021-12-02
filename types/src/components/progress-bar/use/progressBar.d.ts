export declare function useProgressBar(duration?: number): {
    percent: import("vue").ComputedRef<number>;
    show: import("vue").ComputedRef<boolean>;
    canSuccess: import("vue").ComputedRef<boolean>;
    start: () => void;
    finish: () => void;
    fail: () => void;
};
