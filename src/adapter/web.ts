import { isValidKey } from '../utils/index';

class Serve {
  baseURL: any;
  headers: any;
  constructor(config: any) {
    this['baseURL'] = config.baseURL;
    this['headers'] = config.headers;
  }
  request(method: string, route: string) {
    const ajax = new XMLHttpRequest();
    const site = this['baseURL'] + route;
    const headers = this['headers'];
    ajax.open(method, site, true);
    Object.keys(headers).forEach((key) => {
      if (isValidKey(key, headers)) {
        const value = headers[key];
        ajax.setRequestHeader(key, value + '');
      }
    });
    ajax.send();
    ajax.onreadystatechange = function () {
      if (ajax.readyState == 4 && ajax.status == 200) {
        console.log(ajax.responseText);
      }
    };
  }
}

export default Serve;
