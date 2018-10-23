"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseEntity_1 = require("./BaseEntity");
class GrantedAuthorization extends BaseEntity_1.BaseEntity {
    constructor(channelId, authToken, expirationTimestamp, spendLimitInSatoshis, personalInfo) {
        super();
        this._channelId = channelId;
        this._authToken = authToken;
        this._expirationTimestamp = expirationTimestamp;
        this._spendLimitInSatoshis = spendLimitInSatoshis;
        this._personalInfo = personalInfo;
    }
    get channelId() {
        return this._channelId;
    }
    set channelId(value) {
        this._channelId = value;
    }
    get authToken() {
        return this._authToken;
    }
    set authToken(value) {
        this._authToken = value;
    }
    get expirationTimestamp() {
        return this._expirationTimestamp;
    }
    set expirationTimestamp(value) {
        this._expirationTimestamp = value;
    }
    get spendLimitInSatoshis() {
        return this._spendLimitInSatoshis;
    }
    set spendLimitInSatoshis(value) {
        this._spendLimitInSatoshis = value;
    }
    get personalInfo() {
        return this._personalInfo;
    }
    set personalInfo(value) {
        this._personalInfo = value;
    }
}
exports.GrantedAuthorization = GrantedAuthorization;
//# sourceMappingURL=GrantedAuthorization.js.map