import { PaymentRequestType } from "./PaymentRequestType";
import { BaseEntity } from "./BaseEntity";
export declare class PaymentRequest extends BaseEntity {
    private _type;
    private _to;
    private _satoshiValue;
    constructor(type: PaymentRequestType, to: string, satoshiValue: number);
    type: PaymentRequestType;
    to: string;
    satoshiValue: number;
}
