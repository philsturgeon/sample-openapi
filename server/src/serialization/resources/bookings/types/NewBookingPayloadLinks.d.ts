/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as BumpshApi from "../../../../api/index";
import * as core from "../../../../core";
export declare const NewBookingPayloadLinks: core.serialization.ObjectSchema<serializers.NewBookingPayloadLinks.Raw, BumpshApi.NewBookingPayloadLinks>;
export declare namespace NewBookingPayloadLinks {
    interface Raw extends serializers.LinksSelf.Raw, serializers.LinksPagination.Raw {
    }
}