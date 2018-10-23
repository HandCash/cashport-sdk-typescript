import {ISignTransactionRequestCallback} from "../../ISignTransactionRequestCallback";
import {CashportResponse} from "../entity/CashportResponse";
import {CashportResponseCode} from "../entity/CashportResponseCode";

export class SendTransactionResponseHandler {

    private _signTransactionRequestCallback: ISignTransactionRequestCallback;

    constructor(signTransactionRequestCallback: ISignTransactionRequestCallback) {
        this._signTransactionRequestCallback = signTransactionRequestCallback;
    }

    public handle(signTransactionResponse: CashportResponse): void {
        this._signTransactionRequestCallback.onEnd();
        let requestId = signTransactionResponse.requestId;
        switch (signTransactionResponse.statusCode) {
            case CashportResponseCode.ACCEPTED:
                let transactionId = signTransactionResponse.parameters['transactionId'];
                this._signTransactionRequestCallback.onSuccess(requestId, transactionId);
                break;
            case CashportResponseCode.NOT_AUTHORIZED:
                this._signTransactionRequestCallback.onNotAuthorized(requestId);
                break;
            case CashportResponseCode.LIMIT_REACHED:
                this._signTransactionRequestCallback.onAuthorizedFundsLimitReached(requestId);
                break;
            case CashportResponseCode.TOKEN_EXPIRED:
                this._signTransactionRequestCallback.onTokenExpired(requestId);
                break;
            case CashportResponseCode.INTERNAL_ERROR:
                this._signTransactionRequestCallback.onInternalWalletError(requestId);
                break;
            case CashportResponseCode.INSUFFICIENT_FUNDS:
                this._signTransactionRequestCallback.onInsufficientWalletFunds(requestId);
                break;
        }
    }
}