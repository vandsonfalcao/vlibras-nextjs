import { EffectCallback, useEffect } from "react";
import { isReadyStateMatch } from "./isReadyStateMatch";
import { ExpectedReadyState } from "./ExpectedReadyState";

export type useReadyStateEffect = (
    effect: EffectCallback,
    deps?: any[],
    onState?: ExpectedReadyState
) => void;

export const useReadyStateEffect: useReadyStateEffect = (
    effect,
    deps = [],
    onState = "complete"
): void => {
    useEffect(() => {
        const destructors: Array<() => void> = [
            () => document.removeEventListener("readystatechange", listener),
        ];

        const listener = () => {
            if (!isReadyStateMatch(onState)) {
                return;
            }
            const destructor = effect();
            if (destructor) {
                destructors.push(destructor);
            }
        };

        listener();
        document.addEventListener("readystatechange", listener);

        return () => destructors.forEach((d) => d());
    }, deps);
};
