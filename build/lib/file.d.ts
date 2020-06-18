declare const request: any;
declare let Bmob: any;
declare const Error: any;
declare const utils: any;
declare let md5: any;
declare const requestHap = "xxrequire('@system.request')xx";
declare const isString: any, isArray: any;
declare let list: any[];
declare class file {
    constructor(name: any, parma: any);
    fileUpload(p?: string): Promise<unknown>;
    imgSecCheck(): Promise<unknown>;
    save(): any;
    destroy(parma: any): Promise<unknown>;
}
