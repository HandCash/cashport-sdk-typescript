import PubNub = require('pubnub');
export declare class PubNubCashport {
    private static SUBSCRIBE_KEY;
    private _pubnub;
    static create(): PubNubCashport;
    constructor();
    getPubNubInstance(): PubNub;
}
