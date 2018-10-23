import PubNub from 'pubnub';
import { ISignTransactionRequestCallback } from "../../ISignTransactionRequestCallback";
import { IAuthorizationRequestCallback } from "../../IAuthorizationRequestCallback";
export declare class PubNubChannelHandler {
    static SIGN_TRANSACTION_RESPONSE_TIMEOUT_MILLIS: number;
    private _pubnub;
    private _currentChannelId;
    private _messageListener;
    constructor(pubnub: PubNub);
    updateChannel(channelId: string): void;
    closeChannel(): void;
    registerTransactionRequestCallback(signTransactionRequestCallback: ISignTransactionRequestCallback): void;
    unregisterTransactionRequestCallback(): void;
    registerAuthorizationRequestCallback(authorizationRequestCallback: IAuthorizationRequestCallback): void;
    unregisterAuthorizationRequestCallback(): void;
}
