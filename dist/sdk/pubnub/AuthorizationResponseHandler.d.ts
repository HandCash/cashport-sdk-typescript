import { CashportResponse } from "../entity/CashportResponse";
import { IAuthorizationRequestCallback } from "../../IAuthorizationRequestCallback";
export declare class AuthorizationResponseHandler {
    private _authorizationRequestCallback;
    constructor(authorizationRequestCallback: IAuthorizationRequestCallback);
    handle(response: CashportResponse): void;
    private static _buildGrantedAuthorization;
}
