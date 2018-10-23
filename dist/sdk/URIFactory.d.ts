import { AuthorizationRequest } from "./entity/AuthorizationRequest";
export declare class URIFactory {
    getAuthorizationURI(request: AuthorizationRequest, channelId?: string): string;
}
