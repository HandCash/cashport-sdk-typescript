"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PubNubChannelHandler_1 = require("./sdk/pubnub/PubNubChannelHandler");
const CashportService_1 = require("./sdk/rest_api/CashportService");
const PubNubCashport_1 = require("./sdk/pubnub/PubNubCashport");
const AuthorizationTemplateLoader_1 = require("./sdk/template/AuthorizationTemplateLoader");
const URIFactory_1 = require("./sdk/URIFactory");
const crypto = require("crypto");
class Cashport {
    constructor() {
        this._cashportService = CashportService_1.CashportService.create();
        this._channelHandler = new PubNubChannelHandler_1.PubNubChannelHandler(PubNubCashport_1.PubNubCashport.create().getPubNubInstance());
        this._authorizationTemplateLoader = new AuthorizationTemplateLoader_1.AuthorizationTemplateLoader();
    }
    loadAuthorizationRequest(htmlContainerId, request, callback) {
        let channelId = crypto.randomBytes(64).toString('hex');
        this._channelHandler.updateChannel(channelId);
        this._channelHandler.registerAuthorizationRequestCallback(callback);
        this._authorizationTemplateLoader.load(htmlContainerId, new URIFactory_1.URIFactory().getAuthorizationURI(request, channelId));
    }
    sendSignTransactionRequest(signTransactionRequest, callback) {
        this._channelHandler.updateChannel(signTransactionRequest.channelId);
        this._channelHandler.registerTransactionRequestCallback(callback);
        callback.onStart();
        this._cashportService.sendSignTransactionRequest(signTransactionRequest, callback);
    }
}
exports.Cashport = Cashport;
//# sourceMappingURL=cashport.js.map