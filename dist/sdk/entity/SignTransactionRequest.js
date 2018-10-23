"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseEntity_1 = require("./BaseEntity");
class SignTransactionRequest extends BaseEntity_1.BaseEntity {
    get apiId() {
        return this._apiId;
    }
    set apiId(value) {
        this._apiId = value;
    }
    get authToken() {
        return this._authToken;
    }
    set authToken(value) {
        this._authToken = value;
    }
    get channelId() {
        return this._channelId;
    }
    set channelId(value) {
        this._channelId = value;
    }
    get handle() {
        return this._handle;
    }
    set handle(value) {
        this._handle = value;
    }
    get payments() {
        return this._payments;
    }
    set payments(value) {
        this._payments = value;
    }
}
exports.SignTransactionRequest = SignTransactionRequest;
//# sourceMappingURL=SignTransactionRequest.js.map