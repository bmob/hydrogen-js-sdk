declare let Bmob: any;
declare const request: any;
declare const isObject: any, isString: any, isNumber: any, isUndefined: any, isArray: any;
declare const Error: any;
declare const storage: any;
declare const query: {
    new (parmas: string): {
        init(): void;
        get(ObjectId: any): Promise<unknown>;
        destroy(ObjectId: any): Promise<unknown>;
        set(key: any, val: any): void;
        add(key: any, val: any): void;
        addUnique(key: any, val: any): void;
        current(): any;
        updateStorage(id: any): Promise<unknown>;
        save(parmas?: {}): Promise<unknown>;
        saveAll(items: any): Promise<unknown>;
        withinKilometers(field: any, { latitude, longitude }: {
            latitude: any;
            longitude: any;
        }, km?: number): {};
        withinGeoBox(field: any, { latitude, longitude }: {
            latitude: any;
            longitude: any;
        }, s: any): {};
        statTo(key: any, val: any): any;
        equalTo(key: string, operator: string, val: any): {};
        containedIn(key: any, val: any): any;
        notContainedIn(key: any, val: any): any;
        exists(key: any): any;
        doesNotExist(key: any): any;
        or(...querys: any[]): void;
        and(...querys: any[]): void;
        limit(parmas: any): void;
        skip(parmas: any): void;
        order(...key: any[]): void;
        include(...key: any[]): void;
        select(...key: any[]): void;
        field(key: any, objectId: any): void;
        relation(tableName: any): Promise<unknown>;
        getParams(): {};
        find(): Promise<unknown>;
        count(limit?: number): Promise<unknown>;
    };
};
declare function queryData(key: any, operator: any, val: any): {};
