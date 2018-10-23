"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PaymentRequest_1 = require("./sdk/entity/PaymentRequest");
const PaymentRequestType_1 = require("./sdk/entity/PaymentRequestType");
class PaymentRequestFactory {
    static create() {
        return new PaymentRequestFactory();
    }
    getPayToHandle(handle, satoshiValue) {
        return new PaymentRequest_1.PaymentRequest(PaymentRequestType_1.PaymentRequestType.PayToHandle, handle, satoshiValue);
    }
    getPayToAddress(address, satoshiValue) {
        return new PaymentRequest_1.PaymentRequest(PaymentRequestType_1.PaymentRequestType.PayToAddress, address, satoshiValue);
    }
}
exports.PaymentRequestFactory = PaymentRequestFactory;
//# sourceMappingURL=PaymentRequestFactory.js.map