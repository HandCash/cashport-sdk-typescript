export interface ISignTransactionRequestCallback {
    onStart(): void;

    onEnd(): void;

    onSuccess(requestId: string, transactionId: string): void;

    onAuthorizedFundsLimitReached(requestId: string): void;

    onDeviceNotAvailable(): void;

    onInsufficientWalletFunds(requestId: string): void;

    onTokenExpired(requestId: string): void;

    onNotAuthorized(requestId: string): void;

    onInternalWalletError(requestId: string): void;

    onBadRequest(message: string, errorCode: number): void;

    onAPICallError(message: string): void;
}