import { CashportResponseCode } from "./CashportResponseCode";
import { CashportResponseType } from "./CashportResponseType";
export declare class CashportResponse {
    private _requestId;
    private _type;
    private _statusCode;
    private _developerMessage;
    private _parameters;
    requestId: string;
    type: CashportResponseType;
    statusCode: CashportResponseCode;
    developerMessage: string;
    parameters: Object;
}
