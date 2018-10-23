import {PubNubChannelHandler} from "./sdk/pubnub/PubNubChannelHandler";
import {SignTransactionRequest} from "./sdk/entity/SignTransactionRequest";
import {ISignTransactionRequestCallback} from "./ISignTransactionRequestCallback";
import {CashportService} from "./sdk/rest_api/CashportService";
import {PubNubCashport} from "./sdk/pubnub/PubNubCashport";
import {AuthorizationRequest} from "./sdk/entity/AuthorizationRequest";
import {IAuthorizationRequestCallback} from "./IAuthorizationRequestCallback";
import {AuthorizationTemplateLoader} from "./sdk/template/AuthorizationTemplateLoader";
import {URIFactory} from "./sdk/URIFactory";
import * as crypto from "crypto";

export class Cashport {

    private _channelHandler: PubNubChannelHandler;
    private _cashportService: CashportService;
    private _authorizationTemplateLoader: AuthorizationTemplateLoader;

    public constructor() {
        this._cashportService = CashportService.create();
        this._channelHandler = new PubNubChannelHandler(PubNubCashport.create().getPubNubInstance());
        this._authorizationTemplateLoader = new AuthorizationTemplateLoader();
    }

    public loadAuthorizationRequest(htmlContainerId: string, request: AuthorizationRequest, callback: IAuthorizationRequestCallback): void {
        let channelId = crypto.randomBytes(64).toString('hex');
        this._channelHandler.updateChannel(channelId);
        this._channelHandler.registerAuthorizationRequestCallback(callback);
        this._authorizationTemplateLoader.load(htmlContainerId, new URIFactory().getAuthorizationURI(request, channelId));
    }

    public sendSignTransactionRequest(signTransactionRequest: SignTransactionRequest, callback: ISignTransactionRequestCallback): void {
        this._channelHandler.updateChannel(signTransactionRequest.channelId);
        this._channelHandler.registerTransactionRequestCallback(callback);
        callback.onStart();
        this._cashportService.sendSignTransactionRequest(signTransactionRequest, callback);
    }

}
