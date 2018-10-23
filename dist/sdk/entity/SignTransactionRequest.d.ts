import { PaymentRequest } from "./PaymentRequest";
import { BaseEntity } from "./BaseEntity";
export declare class SignTransactionRequest extends BaseEntity {
    private _apiId;
    private _authToken;
    private _channelId;
    private _handle;
    private _payments;
    apiId: string;
    authToken: string;
    channelId: string;
    handle: string;
    payments: Array<PaymentRequest>;
}
