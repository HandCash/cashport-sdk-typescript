import {AuthorizationRequest} from "./entity/AuthorizationRequest";

export class URIFactory {

    public getAuthorizationURI(request: AuthorizationRequest, channelId?: string): string {
        let permissions = request.getPermissionsAsQueryNames().join(',');
        return 'handcash://cashport.app/auth?app_id=' + request.appId +
            '&personal_info=' + permissions + (channelId ? '&channel_id=' + channelId : '');
    }

}