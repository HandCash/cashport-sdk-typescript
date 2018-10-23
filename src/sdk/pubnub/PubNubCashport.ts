import PubNub = require('pubnub');

export class PubNubCashport {

    private static SUBSCRIBE_KEY = "sub-c-42473d70-c7e9-11e8-b02a-a6a8b6327be1";

    private _pubnub: PubNub;

    public static create(): PubNubCashport {
        return new PubNubCashport();
    }

    constructor() {
        this._pubnub = new PubNub({
            subscribeKey: PubNubCashport.SUBSCRIBE_KEY
        });
    }

    public getPubNubInstance(): PubNub {
        return this._pubnub;
    }
}