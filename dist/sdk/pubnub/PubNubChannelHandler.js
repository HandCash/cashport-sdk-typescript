"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PubNubMessageListener_1 = require("./PubNubMessageListener");
class PubNubChannelHandler {
    constructor(pubnub) {
        this._pubnub = pubnub;
        this._messageListener = new PubNubMessageListener_1.PubNubMessageListener();
        this._pubnub.addListener(this._messageListener);
    }
    updateChannel(channelId) {
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
    closeChannel() {
        this._pubnub.unsubscribe({
            channels: [this._currentChannelId],
        });
    }
    registerTransactionRequestCallback(signTransactionRequestCallback) {
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
    unregisterTransactionRequestCallback() {
        this._messageListener.signTransactionRequestCallback = null;
    }
    registerAuthorizationRequestCallback(authorizationRequestCallback) {
        this._messageListener.authorizationRequestCallback = authorizationRequestCallback;
    }
    unregisterAuthorizationRequestCallback() {
        this._messageListener.authorizationRequestCallback = null;
    }
}
PubNubChannelHandler.SIGN_TRANSACTION_RESPONSE_TIMEOUT_MILLIS = 20 * 1000;
exports.PubNubChannelHandler = PubNubChannelHandler;
//# sourceMappingURL=PubNubChannelHandler.js.map