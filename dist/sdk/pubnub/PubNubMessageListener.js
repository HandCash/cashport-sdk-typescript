"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SendTransactionResponseHandler_1 = require("./SendTransactionResponseHandler");
const CashportResponseType_1 = require("../entity/CashportResponseType");
const AuthorizationResponseHandler_1 = require("./AuthorizationResponseHandler");
class PubNubMessageListener {
    constructor() {
        this._signTransactionRequestCallback = null;
        this._authorizationRequestCallback = null;
        this._lastMessageTimestamp = 0;
    }
    set signTransactionRequestCallback(value) {
        this._signTransactionRequestCallback = value;
    }
    set authorizationRequestCallback(value) {
        this._authorizationRequestCallback = value;
    }
    message(m) {
        if (m.timetoken > this._lastMessageTimestamp) {
            this._lastMessageTimestamp = m.timetoken;
            this.handleMessage(m.message);
        }
    }
    handleMessage(payload) {
        var response = payload;
        if (this._signTransactionRequestCallback != null && response.type == CashportResponseType_1.CashportResponseType.SignTransactionResponse) {
            new SendTransactionResponseHandler_1.SendTransactionResponseHandler(this._signTransactionRequestCallback).handle(response);
        }
        if (this._authorizationRequestCallback != null && response.type == CashportResponseType_1.CashportResponseType.AuthorizationResponse) {
            new AuthorizationResponseHandler_1.AuthorizationResponseHandler(this._authorizationRequestCallback).handle(response);
        }
    }
}
exports.PubNubMessageListener = PubNubMessageListener;
//# sourceMappingURL=PubNubMessageListener.js.map