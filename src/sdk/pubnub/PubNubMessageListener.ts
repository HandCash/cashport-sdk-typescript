import {ISignTransactionRequestCallback} from "../../ISignTransactionRequestCallback";
import {CashportResponse} from "../entity/CashportResponse";
import {SendTransactionResponseHandler} from "./SendTransactionResponseHandler";
import {IAuthorizationRequestCallback} from "../../IAuthorizationRequestCallback";
import {CashportResponseType} from "../entity/CashportResponseType";
import {AuthorizationResponseHandler} from "./AuthorizationResponseHandler";

export class PubNubMessageListener {

    private _signTransactionRequestCallback: ISignTransactionRequestCallback;
    private _authorizationRequestCallback: IAuthorizationRequestCallback;
    private _lastMessageTimestamp: number;

    constructor() {
        this._signTransactionRequestCallback = null;
        this._authorizationRequestCallback = null;
        this._lastMessageTimestamp = 0;
    }

    set signTransactionRequestCallback(value: ISignTransactionRequestCallback) {
        this._signTransactionRequestCallback = value;
    }

    set authorizationRequestCallback(value: IAuthorizationRequestCallback) {
        this._authorizationRequestCallback = value;
    }

    public message(m): void {
        if (m.timetoken > this._lastMessageTimestamp) {
            this._lastMessageTimestamp = m.timetoken;
            this.handleMessage(m.message);
        }
    }

    private handleMessage(payload: object): void {
        var response = payload as CashportResponse;
        if (this._signTransactionRequestCallback != null && response.type == CashportResponseType.SignTransactionResponse) {
            new SendTransactionResponseHandler(this._signTransactionRequestCallback).handle(response);
        }
        if (this._authorizationRequestCallback != null && response.type == CashportResponseType.AuthorizationResponse) {
            new AuthorizationResponseHandler(this._authorizationRequestCallback).handle(response);
        }
    }

}