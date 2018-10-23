import {PersonalInfo} from "./PersonalInfo";
import {BaseEntity} from "./BaseEntity";

export class GrantedAuthorization extends BaseEntity {

    private _channelId: string;
    private _authToken: string;
    private _expirationTimestamp: number;
    private _spendLimitInSatoshis: number;
    private _personalInfo: PersonalInfo;

    constructor(channelId?: string, authToken?: string, expirationTimestamp?: number,
                spendLimitInSatoshis?: number, personalInfo?: PersonalInfo) {
        super();
        this._channelId = channelId;
        this._authToken = authToken;
        this._expirationTimestamp = expirationTimestamp;
        this._spendLimitInSatoshis = spendLimitInSatoshis;
        this._personalInfo = personalInfo;
    }

    get channelId(): string {
        return this._channelId;
    }

    set channelId(value: string) {
        this._channelId = value;
    }

    get authToken(): string {
        return this._authToken;
    }

    set authToken(value: string) {
        this._authToken = value;
    }

    get expirationTimestamp(): number {
        return this._expirationTimestamp;
    }

    set expirationTimestamp(value: number) {
        this._expirationTimestamp = value;
    }

    get spendLimitInSatoshis(): number {
        return this._spendLimitInSatoshis;
    }

    set spendLimitInSatoshis(value: number) {
        this._spendLimitInSatoshis = value;
    }

    get personalInfo(): PersonalInfo {
        return this._personalInfo;
    }

    set personalInfo(value: PersonalInfo) {
        this._personalInfo = value;
    }
}