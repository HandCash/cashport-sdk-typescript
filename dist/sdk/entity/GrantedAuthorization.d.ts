import { PersonalInfo } from "./PersonalInfo";
import { BaseEntity } from "./BaseEntity";
export declare class GrantedAuthorization extends BaseEntity {
    private _channelId;
    private _authToken;
    private _expirationTimestamp;
    private _spendLimitInSatoshis;
    private _personalInfo;
    constructor(channelId?: string, authToken?: string, expirationTimestamp?: number, spendLimitInSatoshis?: number, personalInfo?: PersonalInfo);
    channelId: string;
    authToken: string;
    expirationTimestamp: number;
    spendLimitInSatoshis: number;
    personalInfo: PersonalInfo;
}
