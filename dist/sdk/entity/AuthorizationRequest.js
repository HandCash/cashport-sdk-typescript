"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthorizationRequest {
    constructor(permissions, appId) {
        this._permissions = permissions;
        this._appId = appId;
    }
    get appId() {
        return this._appId;
    }
    set appId(value) {
        this._appId = value;
    }
    get permissions() {
        return this._permissions;
    }
    set permissions(value) {
        this._permissions = value;
    }
    getPermissionsAsQueryNames() {
        let queryNames = [];
        for (let permission in this._permissions) {
            queryNames.push(this._permissions[permission]);
        }
        return queryNames;
    }
}
exports.AuthorizationRequest = AuthorizationRequest;
//# sourceMappingURL=AuthorizationRequest.js.map