/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as BumpshApi from "../../api/index";
import * as core from "../../core";
export declare const LinksSelf: core.serialization.ObjectSchema<serializers.LinksSelf.Raw, BumpshApi.LinksSelf>;
export declare namespace LinksSelf {
    interface Raw {
        self?: string | null;
    }
}