import { ISignTransactionRequestCallback } from "../../ISignTransactionRequestCallback";
import { SignTransactionRequest } from "../entity/SignTransactionRequest";
export declare class CashportService {
    static BASE_ENDPOINT: string;
    private _axios;
    static create(): CashportService;
    constructor();
    sendSignTransactionRequest(request: SignTransactionRequest, callback: ISignTransactionRequestCallback): void;
}
