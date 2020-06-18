declare const isString: any, isArray: any;
declare const Error: any;
declare const relation: {
    new (tableName: any): {
        add(parmas: any): any;
        remove(parmas: any): any;
    };
};
declare function operation(parmas: any, op: any): {
    __op: any;
    objects: any[];
};
