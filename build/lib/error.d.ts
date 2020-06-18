declare class error {
    constructor(code: any, msg: any);
    errorMsg(code: any): "incorrect parameter type." | "Parameter is null." | "There is no upload content." | "Log in failure." | "Bmob.GeoPoint location error." | "unknown error";
}
