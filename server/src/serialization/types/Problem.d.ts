/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as BumpshApi from "../../api/index";
import * as core from "../../core";
export declare const Problem: core.serialization.ObjectSchema<serializers.Problem.Raw, BumpshApi.Problem>;
export declare namespace Problem {
    interface Raw {
        type?: string | null;
        title?: string | null;
        detail?: string | null;
        instance?: string | null;
        status?: number | null;
    }
}
