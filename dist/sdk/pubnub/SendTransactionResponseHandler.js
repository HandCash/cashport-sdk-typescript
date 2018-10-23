"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CashportResponseCode_1 = require("../entity/CashportResponseCode");
class SendTransactionResponseHandler {
    constructor(signTransactionRequestCallback) {
        this._signTransactionRequestCallback = signTransactionRequestCallback;
    }
    handle(signTransactionResponse) {
        this._signTransactionRequestCallback.onEnd();
        let requestId = signTransactionResponse.requestId;
        switch (signTransactionResponse.statusCode) {
            case CashportResponseCode_1.CashportResponseCode.ACCEPTED:
                let transactionId = signTransactionResponse.parameters['transactionId'];
                this._signTransactionRequestCallback.onSuccess(requestId, transactionId);
                break;
            case CashportResponseCode_1.CashportResponseCode.NOT_AUTHORIZED:
                this._signTransactionRequestCallback.onNotAuthorized(requestId);
                break;
            case CashportResponseCode_1.CashportResponseCode.LIMIT_REACHED:
                this._signTransactionRequestCallback.onAuthorizedFundsLimitReached(requestId);
                break;
            case CashportResponseCode_1.CashportResponseCode.TOKEN_EXPIRED:
                this._signTransactionRequestCallback.onTokenExpired(requestId);
                break;
            case CashportResponseCode_1.CashportResponseCode.INTERNAL_ERROR:
                this._signTransactionRequestCallback.onInternalWalletError(requestId);
                break;
            case CashportResponseCode_1.CashportResponseCode.INSUFFICIENT_FUNDS:
                this._signTransactionRequestCallback.onInsufficientWalletFunds(requestId);
                break;
        }
    }
}
exports.SendTransactionResponseHandler = SendTransactionResponseHandler;
//# sourceMappingURL=SendTransactionResponseHandler.js.map