import {CashportResponse} from "../entity/CashportResponse";
import {CashportResponseCode} from "../entity/CashportResponseCode";
import {IAuthorizationRequestCallback} from "../../IAuthorizationRequestCallback";
import {GrantedAuthorization} from "../entity/GrantedAuthorization";
import {PersonalInfo} from "../entity/PersonalInfo";

export class AuthorizationResponseHandler {

    private _authorizationRequestCallback: IAuthorizationRequestCallback;

    constructor(authorizationRequestCallback: IAuthorizationRequestCallback) {
        this._authorizationRequestCallback = authorizationRequestCallback;
    }

    public handle(response: CashportResponse): void {
        switch (response.statusCode) {
            case CashportResponseCode.ACCEPTED:
                let authorization = AuthorizationResponseHandler._buildGrantedAuthorization(response);
                this._authorizationRequestCallback.onSuccess(authorization);
                break;
            case CashportResponseCode.NOT_AUTHORIZED:
                this._authorizationRequestCallback.onDeny();
                break;
        }
    }

    private static _buildGrantedAuthorization(response: CashportResponse): GrantedAuthorization {
        let authorization = new GrantedAuthorization();
        authorization.authToken = response.parameters['authToken'];
        authorization.channelId = response.parameters['channelId'];
        authorization.expirationTimestamp = response.parameters['expirationTimestamp'];
        authorization.spendLimitInSatoshis = response.parameters['spendLimitInSatoshis'];
        authorization.personalInfo = new PersonalInfo();
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