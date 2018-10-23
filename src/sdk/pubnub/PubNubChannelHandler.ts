import PubNub from 'pubnub';
import {ISignTransactionRequestCallback} from "../../ISignTransactionRequestCallback";
import {PubNubMessageListener} from "./PubNubMessageListener";
import {IAuthorizationRequestCallback} from "../../IAuthorizationRequestCallback";

export class PubNubChannelHandler {

    static SIGN_TRANSACTION_RESPONSE_TIMEOUT_MILLIS = 20 * 1000;

    private _pubnub: PubNub;
    private _currentChannelId: string;
    private _messageListener: PubNubMessageListener;


    constructor(pubnub: PubNub) {
        this._pubnub = pubnub;
        this._messageListener = new PubNubMessageListener();
        this._pubnub.addListener(this._messageListener);
    }

    public updateChannel(channelId: string): void {
        if (this._currentChannelId !== null) {
            this._pubnub.unsubscribe({
                channels: [this._currentChannelId],
            });
        }
        this._currentChannelId = channelId;
        this._pubnub.subscribe({
            channels: [channelId],
        });
    }

    public closeChannel(): void {
        this._pubnub.unsubscribe({
            channels: [this._currentChannelId],
        });
    }

    public registerTransactionRequestCallback(signTransactionRequestCallback: ISignTransactionRequestCallback): void {
        var isResponseReceived = false;
        this._messageListener.signTransactionRequestCallback = {
            onStart: () => {
                signTransactionRequestCallback.onStart();
            },
            onEnd: () => {
                isResponseReceived = true;
                signTransactionRequestCallback.onEnd();
            },
            onSuccess: (requestId, transactionId) => {
                signTransactionRequestCallback.onSuccess(requestId, transactionId);
            },
            onAuthorizedFundsLimitReached: (requestId) => {
                signTransactionRequestCallback.onAuthorizedFundsLimitReached(requestId);
            },
            onDeviceNotAvailable: () => {
                signTransactionRequestCallback.onDeviceNotAvailable();
            },
            onInsufficientWalletFunds: (requestId) => {
                signTransactionRequestCallback.onInsufficientWalletFunds(requestId);
            },
            onTokenExpired: (requestId) => {
                signTransactionRequestCallback.onTokenExpired(requestId);
            },
            onNotAuthorized: (requestId) => {
                signTransactionRequestCallback.onNotAuthorized(requestId);
            },
            onInternalWalletError: (requestId) => {
                signTransactionRequestCallback.onInternalWalletError(requestId);
            },
            onBadRequest: (message, errorCode) => {
                signTransactionRequestCallback.onBadRequest(message, errorCode);
            },
            onAPICallError: (message) => {
                signTransactionRequestCallback.onAPICallError(message);
            }
        };
        setTimeout(() => {
            if (!isResponseReceived) {
                signTransactionRequestCallback.onEnd();
                signTransactionRequestCallback.onDeviceNotAvailable();
                this.unregisterTransactionRequestCallback();
            }
        }, PubNubChannelHandler.SIGN_TRANSACTION_RESPONSE_TIMEOUT_MILLIS);
    }

    public unregisterTransactionRequestCallback(): void {
        this._messageListener.signTransactionRequestCallback = null;
    }

    public registerAuthorizationRequestCallback(authorizationRequestCallback: IAuthorizationRequestCallback): void {
        this._messageListener.authorizationRequestCallback = authorizationRequestCallback;
    }

    public unregisterAuthorizationRequestCallback(): void {
        this._messageListener.authorizationRequestCallback = null;
    }
}