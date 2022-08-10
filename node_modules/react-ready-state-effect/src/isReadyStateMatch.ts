import { ExpectedReadyState } from "./ExpectedReadyState";

export const isReadyStateMatch = (expected?: ExpectedReadyState): boolean => {
    if (!expected) {
        return true;
    }
    if (("string" === typeof expected) && document.readyState === expected) {
        return true;
    }
    return expected.indexOf(document.readyState) !== -1;
};
