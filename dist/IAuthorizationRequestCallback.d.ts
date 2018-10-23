import { GrantedAuthorization } from "./sdk/entity/GrantedAuthorization";
export interface IAuthorizationRequestCallback {
    onSuccess(authorization: GrantedAuthorization): void;
    onDeny(): void;
}
