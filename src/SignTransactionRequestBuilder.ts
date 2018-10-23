import {SignTransactionRequest} from "./sdk/entity/SignTransactionRequest";
import {PaymentRequest} from "./sdk/entity/PaymentRequest";

export class SignTransactionRequestBuilder {

    private _apiId: string;
    private _handle: string;
    private _authToken: string;
    private _channelId: string;
    private _payments: Array<PaymentRequest>;

    public static useApiId(apiId: string): SignTransactionRequestBuilder {
        return new SignTransactionRequestBuilder(apiId);
    }

    constructor(apiId: string) {
        this._apiId = apiId;
    }

    public withCredentials(handle: string, authToken: string, channelId: string): SignTransactionRequestBuilder {
        this._handle = handle;
        this._authToken = authToken;
        this._channelId = channelId;
        this._payments = [];
        return this;
    }

    public addPayment(payment: PaymentRequest): SignTransactionRequestBuilder {
        this._payments.push(payment);
        return this;
    }

    public build(): SignTransactionRequest {
        let signTransactionRequest: SignTransactionRequest = new SignTransactionRequest();
        signTransactionRequest.apiId = this._apiId;
        signTransactionRequest.authToken = this._authToken;
        signTransactionRequest.handle = this._handle;
        signTransactionRequest.channelId = this._channelId;
        signTransactionRequest.payments = this._payments;
        return signTransactionRequest;
    }
}