declare const request: any;
declare const Bmob: any;
declare const Error: any;
declare const isObject: any, isString: any;
/**
 * 生成小程序二维码
 * @return {Object}
 */
declare const generateCode: (data: any) => Promise<unknown>;
/**
 * 获取access_token
 * @return {Object}
 */
declare const getAccessToken: () => Promise<unknown>;
/**
 * 小程序模版信息
 * @return {Object}
 */
declare const sendWeAppMessage: (data: any) => Promise<unknown>;
/**
 * 小程序图片上传
 * @return {Object}
 */
/**
 * 微信退款
 * @return {Object}
 */
declare const refund: (data: any) => Promise<unknown>;
/**
 * 微信主人通知(主人信息推送)
 * @return {Object}
 */
declare const notifyMsg: (data: any) => Promise<unknown>;
/**
 * 密码重置
 * @return {Object}
 */
declare const requestPasswordReset: (data: any) => Promise<unknown>;
declare const resetPasswordBySmsCode: (smsCode: any, data: any) => Promise<unknown>;
declare const updateUserPassword: (objectId: any, data: any) => Promise<unknown>;
declare const checkMsg: (content: any) => Promise<unknown>;
/**
 * 获取服务器时间
 * @return {Object}
 */
declare const timestamp: () => Promise<unknown>;
/**
 * 推送消息
 * @return {Object}
 */
declare const push: (data: any) => Promise<unknown>;
/**
 * 云函数
 * @return {Object}
 */
declare const functions: (funName: any, data: any) => Promise<unknown>;
declare const geoPoint: ({ latitude, longitude }: {
    latitude: any;
    longitude: any;
}) => {
    __type: string;
    latitude: any;
    longitude: any;
};
