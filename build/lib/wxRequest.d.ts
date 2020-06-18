declare let Bmob: any;
declare let md5: any;
declare let sdkType: string;
declare const setHeader: (config: any, route: any, method: any, parma: any) => {
    'content-type': string;
    'X-Bmob-SDK-Type': string;
    'X-Bmob-Safe-Sign': any;
    'X-Bmob-Safe-Timestamp': number;
    'X-Bmob-Noncestr-Key': any;
    'X-Bmob-SDK-Version': any;
    'X-Bmob-Secret-Key': any;
};
declare const request: (route: any, method?: string, parma?: {}) => Promise<unknown>;
