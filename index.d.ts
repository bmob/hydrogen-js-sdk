export interface BmobPromise<T = any> extends Promise<BmobPromise<T>> {
}

export interface queryData {
  (key: string, operator: string, val: any): object
}

export class Query {
  new(params: string): void;
  get: (objectId: string) => BmobPromise;
  set: (filedName: string, filedValue: string) => BmobPromise;
  destroy: (objectId: string) => BmobPromise;
  save: (parmas?: object) => BmobPromise;
  find: () => BmobPromise;
  current: () => BmobPromise;
  add: (key: string, val: string[]) => void;
  addUnique: () => (key: string, val: string[]) => void;
  remove: (key: string, val: string[]) => void;
  equalTo: (key: string, operator: string, val: any) => object
  or: (...args: object[]) => void;
  and: (...args: object[]) => void;
  select: (...args: string[]) => void;
  containedIn: (key: string, val: string[]) => queryData;
  notContainedIn: (key: string, val: string[]) => queryData;
  exists: (key: string) => queryData;
  doesNotExist: (key: string) => queryData;
  limit: (params: number) => void;
  skip: (params: number) => void;
  order: (...args: string[]) => void;
  include: (...args: string[]) => void;
  count: (limit?: number) => BmobPromise;
  statTo: (key: string, val: any) => object;
  saveAll: (items: any[]) => BmobPromise;
  updateStorage: (objectId: string) => BmobPromise;
  field: (key: string, objectId: string) => object;
  withinKilometers: (field: string, coordinates: string, km?: number) => object
  withinGeoBox: (field: string, coordinates: string, s?: number) => object
  relation: (tableName: string) => BmobPromise
}

export class User extends Query {
  new(): void;
  login: (username: string, password: string) => BmobPromise;
  register: (params: object) => BmobPromise;
  signOrLoginByMobilePhone: (phone: number, smsCode: number) => BmobPromise;
  logout: () => void;
  users: () => BmobPromise;
  decryption: (params: object) => BmobPromise
  requestOpenId: (code: any, params?: string) => BmobPromise
  requestEmailVerify: (email: string) => BmobPromise
  linkWith: (params: any) => BmobPromise
  loginWithWeapp: (code: any, str: string, params?: string) => BmobPromise
  upInfo: (params: object) => BmobPromise
  openId: () => void;
  auth: (params?: string) => BmobPromise
}

export interface operation {
  (parmas: string, op: string): object
}

export class Relation {
  new(tableName: string): void;
  add: (parmas: string) => operation
}

export class Pointer {
  new(tableName: string): void;
  set: (objectId: string) => object
}

export interface functions {
  (funName: string, parmas?: object): BmobPromise
}

export class Pay {
  new(price: string, productName: string, body: any): BmobPromise
}

export class Socket {
  new(id: string): void;
  updateTable: (tableName: string) => void
  unsubUpdateTable: (tableName: string) => void
  updateRow: (tableName: string, objectId: string) => void
  unsubUpdateRow: (tableName: string, objectId: string) => void
  deleteTable: (tableName: string) => void
  unsubDeleteTable: (tableName: string) => void
  deleteRow: (tableName: string, objectId: string) => void
  unsubDeleteRow: (tableName: string, objectId: string) => void
  onUpdateTable: (tableName: string, data: any) => any
  onUpdateRow: (tableName: string, objectId: string, data: any) => any
}

export class File {
  new(name: string, params: any): void;
  save: () => BmobPromise;
  destroy: (params: string) => BmobPromise;
}


export interface Bmob {
  initialize: (secretKey: string, securityCode: string, masterKey?: string) => void;
  User: User;
  Query: (params: string) => Query;
  push: (params: object) => BmobPromise;
  Pointer: (parmas: string) => Pointer;
  Relation: (parmas: string) => Relation;
  requestPasswordReset: (email: object) => BmobPromise;
  resetPasswordBySmsCode: (smsCode: string, params: object) => BmobPromise;
  updateUserPassword: (objectId: string, params: object) => BmobPromise;
  timestamp: () => BmobPromise;
  generateCode: (params: object) => BmobPromise;
  getAccessToken: () => BmobPromise;
  sendWeAppMessage: (parmas: object) => BmobPromise;
  refund: (parmas: object) => BmobPromise;
  notifyMsg: (parmas: object) => BmobPromise;
  checkMsg: (parmas: string) => BmobPromise;
  functions: functions;
  run: functions;
  pay: Pay;
  Socket: (id: string) => Socket;
  geoPoint: (parmas: object) => object;
  requestSmsCode: (parmas: object, options?: any) => BmobPromise;
  verifySmsCode: (smscode: string, parmas: object, options?: any) => BmobPromise;
  File: (name: string, object: any) => File
}

declare const Bmob: Bmob;

export default Bmob
