import { PaymentRequest } from "./sdk/entity/PaymentRequest";
export declare class PaymentRequestFactory {
    static create(): PaymentRequestFactory;
    getPayToHandle(handle: string, satoshiValue: number): PaymentRequest;
    getPayToAddress(address: string, satoshiValue: number): PaymentRequest;
}
