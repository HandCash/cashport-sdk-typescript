import { PersonalInfoPermission } from "./PersonalInfoPermission";
export declare class AuthorizationRequest {
    private _appId;
    private _permissions;
    constructor(permissions: Array<PersonalInfoPermission>, appId: any);
    appId: string;
    permissions: Array<PersonalInfoPermission>;
    getPermissionsAsQueryNames(): Array<String>;
}
