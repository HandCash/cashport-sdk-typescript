export class BaseEntity {

    public toJSON(): any {
        return BaseEntity.normalizeNames(this);
    }

    public static normalizeNames(data: Object): Object {
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
        } else {
            return BaseEntity.handleNormalization(data, {
                createNewData: () => {
                    return {};
                },
                insertItem: (data, key, value) => {
                    data[key] = value;
                }
            })
        }
    }

    private static handleNormalization(data: Object, handler): Object {
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

    static isPrimitive(value): boolean {
        return (value !== Object(value));
    };

}