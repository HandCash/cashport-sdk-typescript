import {PersonalInfoPermission} from "./PersonalInfoPermission";

export class AuthorizationRequest {
    private _appId: string;
    private _permissions: Array<PersonalInfoPermission>;

    constructor(permissions: Array<PersonalInfoPermission>, appId: any) {
        this._permissions = permissions;
        this._appId = appId;
    }

    get appId(): string {
        return this._appId;
    }

    set appId(value: string) {
        this._appId = value;
    }

    get permissions(): Array<PersonalInfoPermission> {
        return this._permissions;
    }

    set permissions(value: Array<PersonalInfoPermission>) {
        this._permissions = value;
    }

    public getPermissionsAsQueryNames(): Array<String> {
        let queryNames = [];
        for (let permission in this._permissions) {
            queryNames.push(this._permissions[permission]);
        }
        return queryNames;
    }

}
