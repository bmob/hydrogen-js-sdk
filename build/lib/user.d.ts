declare const request: any;
declare const storage: any;
declare const query: any;
declare const Bmob: any;
declare const Error: any;
declare const isObject: any, isString: any, isNumber: any;
declare const user: {
    new (): {
        set(key: any, val?: string): void;
        requestEmailVerify(email: any): Promise<unknown>;
        register(parma: any): Promise<unknown>;
        login(username: any, password: any): Promise<unknown>;
        logout(): void;
        users(): Promise<unknown>;
        decryption(e: any): Promise<unknown>;
        signOrLoginByMobilePhone(mobilePhoneNumber: any, smsCode: any): Promise<unknown>;
        requestOpenId(code: any, a?: string): Promise<unknown>;
        linkWith(data: any): Promise<unknown>;
        loginWithWeapp(code: any, a: string, str: any): Promise<unknown>;
        upInfo(userInfo: any): Promise<unknown>;
        openId(): void;
        auth(str?: string): Promise<unknown>;
    };
};
