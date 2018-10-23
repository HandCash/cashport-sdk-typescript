"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class CashportService {
    constructor() {
        this._axios = axios_1.default.create({
            baseURL: CashportService.BASE_ENDPOINT,
            timeout: 10000,
        });
    }
    static create() {
        return new CashportService();
    }
    sendSignTransactionRequest(request, callback) {
        this._axios.post('/signTransactionRequest', {
            apiId: request.apiId,
            channelId: request.channelId,
            authToken: request.authToken,
            handle: request.handle,
            payments: request.payments,
        }).then((response) => {
            // we're good, let's wait for the async response!
        }).catch((error) => {
            callback.onEnd();
            callback.onAPICallError(error.toString());
        });
    }
}
CashportService.BASE_ENDPOINT = "https://api.handcash.io/api/cashport/";
exports.CashportService = CashportService;
//# sourceMappingURL=CashportService.js.map