"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseEntity_1 = require("./BaseEntity");
class PaymentRequest extends BaseEntity_1.BaseEntity {
    constructor(type, to, satoshiValue) {
        super();
        this._type = type;
        this._to = to;
        this._satoshiValue = satoshiValue;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get to() {
        return this._to;
    }
    set to(value) {
        this._to = value;
    }
    get satoshiValue() {
        return this._satoshiValue;
    }
    set satoshiValue(value) {
        this._satoshiValue = value;
    }
}
exports.PaymentRequest = PaymentRequest;
//# sourceMappingURL=PaymentRequest.js.map