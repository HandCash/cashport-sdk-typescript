import { ISignTransactionRequestCallback } from "../../ISignTransactionRequestCallback";
import { CashportResponse } from "../entity/CashportResponse";
export declare class SendTransactionResponseHandler {
    private _signTransactionRequestCallback;
    constructor(signTransactionRequestCallback: ISignTransactionRequestCallback);
    handle(signTransactionResponse: CashportResponse): void;
}
