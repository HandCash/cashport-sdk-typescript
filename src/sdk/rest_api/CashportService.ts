import {ISignTransactionRequestCallback} from "../../ISignTransactionRequestCallback";
import Axios, {AxiosInstance} from "axios";
import {SignTransactionRequest} from "../entity/SignTransactionRequest";

export class CashportService {

    static BASE_ENDPOINT: string = "https://hand-cash-dev.herokuapp.com/api/cashport/";

    private _axios: AxiosInstance;

    public static create(): CashportService {
        return new CashportService();
    }

    constructor() {
        this._axios = Axios.create({
            baseURL: CashportService.BASE_ENDPOINT,
            timeout: 10000,
        })
    }

    public sendSignTransactionRequest(request: SignTransactionRequest, callback: ISignTransactionRequestCallback) {
        this._axios.post('/signTransactionRequest', {
                apiId: request.apiId,
                channelId: request.channelId,
                authToken: request.authToken,
                handle: request.handle,
                payments: request.payments,
            }
        ).then((response) => {
            // we're good, let's wait for the async response!
        }).catch((error: any) => {
            callback.onEnd();
            callback.onAPICallError(error.toString());
        });
    }


}