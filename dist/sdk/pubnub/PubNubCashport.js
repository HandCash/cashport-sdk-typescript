"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PubNub = require("pubnub");
class PubNubCashport {
    constructor() {
        this._pubnub = new PubNub({
            subscribeKey: PubNubCashport.SUBSCRIBE_KEY
        });
    }
    static create() {
        return new PubNubCashport();
    }
    getPubNubInstance() {
        return this._pubnub;
    }
}
PubNubCashport.SUBSCRIBE_KEY = "sub-c-42473d70-c7e9-11e8-b02a-a6a8b6327be1";
exports.PubNubCashport = PubNubCashport;
//# sourceMappingURL=PubNubCashport.js.map