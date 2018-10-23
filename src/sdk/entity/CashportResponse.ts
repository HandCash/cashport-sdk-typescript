import {CashportResponseCode} from "./CashportResponseCode";
import {CashportResponseType} from "./CashportResponseType";

export class CashportResponse {

    private _requestId: string
    private _type: CashportResponseType;
    private _statusCode: CashportResponseCode;
    private _developerMessage: string;
    private _parameters: Object;


    get requestId(): string {
        return this._requestId;
    }

    set requestId(value: string) {
        this._requestId = value;
    }

    get type(): CashportResponseType {
        return this._type;
    }

    set type(value: CashportResponseType) {
        this._type = value;
    }

    get statusCode(): CashportResponseCode {
        return this._statusCode;
    }

    set statusCode(value: CashportResponseCode) {
        this._statusCode = value;
    }

    get developerMessage(): string {
        return this._developerMessage;
    }

    set developerMessage(value: string) {
        this._developerMessage = value;
    }

    get parameters(): Object {
        return this._parameters;
    }

    set parameters(value: Object) {
        this._parameters = value;
    }
}