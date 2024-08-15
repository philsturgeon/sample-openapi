/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as BumpshApi from "../../../../api/index";
import * as core from "../../../../core";
export declare const GetBookingResponse: core.serialization.ObjectSchema<serializers.GetBookingResponse.Raw, BumpshApi.GetBookingResponse>;
export declare namespace GetBookingResponse {
    interface Raw extends serializers.Booking.Raw {
        links?: serializers.LinksSelf.Raw | null;
    }
}
