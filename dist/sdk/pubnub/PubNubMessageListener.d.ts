import { ISignTransactionRequestCallback } from "../../ISignTransactionRequestCallback";
import { IAuthorizationRequestCallback } from "../../IAuthorizationRequestCallback";
export declare class PubNubMessageListener {
    private _signTransactionRequestCallback;
    private _authorizationRequestCallback;
    private _lastMessageTimestamp;
    constructor();
    signTransactionRequestCallback: ISignTransactionRequestCallback;
    authorizationRequestCallback: IAuthorizationRequestCallback;
    message(m: any): void;
    private handleMessage;
}
