import {PaymentRequest} from "./PaymentRequest";
import {BaseEntity} from "./BaseEntity";

export class SignTransactionRequest extends BaseEntity {

    private _apiId: string;
    private _authToken: string;
    private _channelId: string;
    private _handle: string;
    private _payments: Array<PaymentRequest>;

    get apiId(): string {
        return this._apiId;
    }

    set apiId(value: string) {
        this._apiId = value;
    }

    get authToken(): string {
        return this._authToken;
    }

    set authToken(value: string) {
        this._authToken = value;
    }

    get channelId(): string {
        return this._channelId;
    }

    set channelId(value: string) {
        this._channelId = value;
    }

    get handle(): string {
        return this._handle;
    }

    set handle(value: string) {
        this._handle = value;
    }

    get payments(): Array<PaymentRequest> {
        return this._payments;
    }

    set payments(value: Array<PaymentRequest>) {
        this._payments = value;
    }
}