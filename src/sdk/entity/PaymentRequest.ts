import {PaymentRequestType} from "./PaymentRequestType";
import {BaseEntity} from "./BaseEntity";

export class PaymentRequest extends BaseEntity {

    private _type: PaymentRequestType;
    private _to: string;
    private _satoshiValue: number;

    constructor(type: PaymentRequestType, to: string, satoshiValue: number) {
        super();
        this._type = type;
        this._to = to;
        this._satoshiValue = satoshiValue;
    }

    get type(): PaymentRequestType {
        return this._type;
    }

    set type(value: PaymentRequestType) {
        this._type = value;
    }

    get to(): string {
        return this._to;
    }

    set to(value: string) {
        this._to = value;
    }

    get satoshiValue(): number {
        return this._satoshiValue;
    }

    set satoshiValue(value: number) {
        this._satoshiValue = value;
    }
}