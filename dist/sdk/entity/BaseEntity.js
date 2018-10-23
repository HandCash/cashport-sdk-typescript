"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseEntity {
    toJSON() {
        return BaseEntity.normalizeNames(this);
    }
    static normalizeNames(data) {
        if (BaseEntity.isPrimitive(data)) {
            return data;
        }
        if (Array.isArray(data)) {
            return BaseEntity.handleNormalization(data, {
                createNewData: () => {
                    return [];
                },
                insertItem: (data, key, value) => {
                    data.push(value);
                }
            });
        }
        else {
            return BaseEntity.handleNormalization(data, {
                createNewData: () => {
                    return {};
                },
                insertItem: (data, key, value) => {
                    data[key] = value;
                }
            });
        }
    }
    static handleNormalization(data, handler) {
        if (BaseEntity.isPrimitive(data)) {
            return data;
        }
        let newData = handler.createNewData();
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                let value = BaseEntity.normalizeNames(data[key]);
                if (key.startsWith("_")) {
                    key = key.substr(1);
                }
                handler.insertItem(newData, key, value);
            }
        }
        return newData;
    }
    static isPrimitive(value) {
        return (value !== Object(value));
    }
    ;
}
exports.BaseEntity = BaseEntity;
//# sourceMappingURL=BaseEntity.js.map