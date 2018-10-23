"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class URIFactory {
    getAuthorizationURI(request, channelId) {
        let permissions = request.getPermissionsAsQueryNames().join(',');
        return 'handcash://cashport.app/auth?app_id=' + request.appId +
            '&personal_info=' + permissions + (channelId ? '&channel_id=' + channelId : '');
    }
}
exports.URIFactory = URIFactory;
//# sourceMappingURL=URIFactory.js.map