import md5 from './utils/md5';
import { randomString } from './utils/index';
import Web from './adapter/web';

const secretKey = 'c8bed465c9e6a524';
const securityCode = '999999';

function setHeader(route: string, method: string, parma: object) {
  const t = Math.round(new Date().getTime() / 1000);
  const body =
    method === 'get' || method === 'delete' ? '' : JSON.stringify(parma);
  const random = randomString();
  const sign = md5.utf8MD5(route + t + securityCode + random + body);
  const header = {
    'content-type': 'application/json',
    'X-Bmob-SDK-Type': 'wechatApp',
    'X-Bmob-Safe-Sign': sign,
    'X-Bmob-Safe-Timestamp': t,
    'X-Bmob-Noncestr-Key': random,
    'X-Bmob-Secret-Key': secretKey,
  };
  return header;
}

const route = `/1/classes/_User`;
const mehods = 'GET';
const Serve = new Web({
  baseURL: 'https://api2.bmob.cn',
  headers: setHeader(route, 'get', {}),
});

Serve.request(mehods, route);
