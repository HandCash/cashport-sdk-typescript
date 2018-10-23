"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SignTransactionRequest_1 = require("./sdk/entity/SignTransactionRequest");
class SignTransactionRequestBuilder {
    static useApiId(apiId) {
        return new SignTransactionRequestBuilder(apiId);
    }
    constructor(apiId) {
        this._apiId = apiId;
    }
    withCredentials(handle, authToken, channelId) {
        this._handle = handle;
        this._authToken = authToken;
        this._channelId = channelId;
        this._payments = [];
        return this;
    }
    addPayment(payment) {
        this._payments.push(payment);
        return this;
    }
    build() {
        let signTransactionRequest = new SignTransactionRequest_1.SignTransactionRequest();
        signTransactionRequest.apiId = this._apiId;
        signTransactionRequest.authToken = this._authToken;
        signTransactionRequest.handle = this._handle;
        signTransactionRequest.channelId = this._channelId;
        signTransactionRequest.payments = this._payments;
        return signTransactionRequest;
    }
}
exports.SignTransactionRequestBuilder = SignTransactionRequestBuilder;
//# sourceMappingURL=SignTransactionRequestBuilder.js.map