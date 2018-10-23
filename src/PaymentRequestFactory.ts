import {PaymentRequest} from "./sdk/entity/PaymentRequest";
import {PaymentRequestType} from "./sdk/entity/PaymentRequestType";

export class PaymentRequestFactory {

    public static create(): PaymentRequestFactory {
        return new PaymentRequestFactory();
    }

    public getPayToHandle(handle: string, satoshiValue: number): PaymentRequest {
        return new PaymentRequest(PaymentRequestType.PayToHandle, handle, satoshiValue);
    }

    public getPayToAddress(address: string, satoshiValue: number): PaymentRequest {
        return new PaymentRequest(PaymentRequestType.PayToAddress, address, satoshiValue);
    }

}