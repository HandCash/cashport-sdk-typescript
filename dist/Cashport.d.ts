import { SignTransactionRequest } from "./sdk/entity/SignTransactionRequest";
import { ISignTransactionRequestCallback } from "./ISignTransactionRequestCallback";
import { AuthorizationRequest } from "./sdk/entity/AuthorizationRequest";
import { IAuthorizationRequestCallback } from "./IAuthorizationRequestCallback";
export declare class Cashport {
    private _channelHandler;
    private _cashportService;
    private _authorizationTemplateLoader;
    constructor();
    loadAuthorizationRequest(htmlContainerId: string, request: AuthorizationRequest, callback: IAuthorizationRequestCallback): void;
    sendSignTransactionRequest(signTransactionRequest: SignTransactionRequest, callback: ISignTransactionRequestCallback): void;
}
