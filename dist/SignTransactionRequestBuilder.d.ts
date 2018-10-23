import { SignTransactionRequest } from "./sdk/entity/SignTransactionRequest";
import { PaymentRequest } from "./sdk/entity/PaymentRequest";
export declare class SignTransactionRequestBuilder {
    private _apiId;
    private _handle;
    private _authToken;
    private _channelId;
    private _payments;
    static useApiId(apiId: string): SignTransactionRequestBuilder;
    constructor(apiId: string);
    withCredentials(handle: string, authToken: string, channelId: string): SignTransactionRequestBuilder;
    addPayment(payment: PaymentRequest): SignTransactionRequestBuilder;
    build(): SignTransactionRequest;
}
