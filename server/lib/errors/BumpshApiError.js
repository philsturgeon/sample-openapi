"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BumpshApiError = void 0;
class BumpshApiError extends Error {
    constructor(errorName) {
        super();
        this.errorName = errorName;
        Object.setPrototypeOf(this, BumpshApiError.prototype);
    }
}
exports.BumpshApiError = BumpshApiError;
