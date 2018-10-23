"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CashportResponseCode_1 = require("../entity/CashportResponseCode");
const GrantedAuthorization_1 = require("../entity/GrantedAuthorization");
const PersonalInfo_1 = require("../entity/PersonalInfo");
class AuthorizationResponseHandler {
    constructor(authorizationRequestCallback) {
        this._authorizationRequestCallback = authorizationRequestCallback;
    }
    handle(response) {
        switch (response.statusCode) {
            case CashportResponseCode_1.CashportResponseCode.ACCEPTED:
                let authorization = AuthorizationResponseHandler._buildGrantedAuthorization(response);
                this._authorizationRequestCallback.onSuccess(authorization);
                break;
            case CashportResponseCode_1.CashportResponseCode.NOT_AUTHORIZED:
                this._authorizationRequestCallback.onDeny();
                break;
        }
    }
    static _buildGrantedAuthorization(response) {
        let authorization = new GrantedAuthorization_1.GrantedAuthorization();
        authorization.authToken = response.parameters['authToken'];
        authorization.channelId = response.parameters['channelId'];
        authorization.expirationTimestamp = response.parameters['expirationTimestamp'];
        authorization.spendLimitInSatoshis = response.parameters['spendLimitInSatoshis'];
        authorization.personalInfo = new PersonalInfo_1.PersonalInfo();
        authorization.personalInfo.handle = response.parameters['handle'];
        if (response.parameters.hasOwnProperty('firstName')) {
            authorization.personalInfo.firstName = response.parameters['firstName'];
        }
        if (response.parameters.hasOwnProperty('lastName')) {
            authorization.personalInfo.lastName = response.parameters['lastName'];
        }
        if (response.parameters.hasOwnProperty('email')) {
            authorization.personalInfo.email = response.parameters['email'];
        }
        return authorization;
    }
}
exports.AuthorizationResponseHandler = AuthorizationResponseHandler;
//# sourceMappingURL=AuthorizationResponseHandler.js.map