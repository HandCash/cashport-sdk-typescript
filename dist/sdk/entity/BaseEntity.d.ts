export declare class BaseEntity {
    toJSON(): any;
    static normalizeNames(data: Object): Object;
    private static handleNormalization;
    static isPrimitive(value: any): boolean;
}
