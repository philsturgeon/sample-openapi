/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as errors from "../../errors/index";
import * as BumpshApi from "../index";
import express from "express";
export declare class ForbiddenError extends errors.BumpshApiError {
    private readonly body;
    constructor(body: BumpshApi.Problem);
    send(res: express.Response): Promise<void>;
}
