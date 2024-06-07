const utils = require("./utils");
const Bmob = require('./bmob')
const Error = require('./error')
const md5 = require("./utf8md5");
 


const setHeader = (config, route, method, parma) => {

  let sdkType = 'h5'
  if (typeof (tt) !== 'undefined') {
    sdkType = 'toutiao'
  } else if (typeof (qq) !== 'undefined') {
    sdkType = 'qqApp'
  } else if (Bmob.type === "wx") {
    sdkType = 'wechatApp'
  } else {
    sdkType = 'h5'
  }
  const t = Math.round(new Date().getTime() / 1000)
  const rand = Bmob.utils.randomString()
  let body = (method === 'get' || method === 'delete') ? '' : JSON.stringify(parma)

  const sign = md5.utf8MD5(route + t + config.securityCode + rand + body + config.serverVersion)

  let header = {
    'content-type': 'application/json',
    'X-Bmob-SDK-Type': sdkType,
    'X-Bmob-Safe-Sign': sign,
    'X-Bmob-Safe-Timestamp': t,
    'X-Bmob-Noncestr-Key': rand,
    'X-Bmob-SDK-Version': config.serverVersion,
    'X-Bmob-Secret-Key': config.secretKey
  }
  if (config.applicationMasterKey) {
    header['X-Bmob-Master-Key'] = config.applicationMasterKey
  }
  return header
}
 
// AI 请求封装
class webSocketAiClient {
  constructor() {

    // 连接状态
    this.connected = false;

    this.url = Bmob._config.host + Bmob._config.parameters.Ai;
    this.type = utils.getAppType(); //获取当前应用类型

    this.socket = null;


    this.header = {}

    this.onOpenCallback = () => {
      console.log("连接成功...");
      this.connected = true
    };
    this.onMessageCallback = () => {
    };
    this.onCloseCallback = () => { this.connected = false };
    this.onErrorCallback = () => { this.connected = false };
    this.connect()
  }

  connect() {
    console.log("connect", this.url);
    const config = Bmob._config
    const header = setHeader(config, config.parameters.Ai, "get", {})
    // const header = {}
    // console.log(this.header, 'this.header');
    // 默认h5
    var wsUrl = this.url.replace("http", "ws");
    switch (this.type) {
      case "wx":
        // 微信的链接方式
        this.socket = wx.connectSocket({
          // url: this.url,
          url: wsUrl + config.secretKey,
          header: header
        });
        this.socket.onOpen(() => {
          this.onOpenCallback();
        });
        this.socket.onMessage((event) => {
          console.log("onmessage...");
          const data = JSON.parse(event.data)
          const res = data.choices[0].delta.content
          if (res === "") {
            this.onMessageCallback('done');
          }
          this.onMessageCallback(res);

        });
        this.socket.onClose(() => {
          this.onCloseCallback();
        });
        this.socket.onError((error) => {
          this.onErrorCallback(error);
        });
        break;

      default:
        // 默认h5
        this.socket = new WebSocket(wsUrl + config.secretKey);
        this.socket.onopen = () => {
          this.onOpenCallback();
        };
        this.socket.onmessage = (event) => {
          console.log("onmessage...");
          const data = JSON.parse(event.data)
          const res = data.choices[0].delta.content
          if (res === "") {
            this.onMessageCallback('done');
          }
          this.onMessageCallback(res);
        };
        this.socket.onclose = () => {
          console.log("close...");
          this.onCloseCallback();
        };
        this.socket.onerror = (error) => {
          console.log("onerror...", error);
          this.onErrorCallback(error);
        };
        break;
    }

  }

  send(data) {
    console.log(this.connected, 'this.connect');
    if (this.connected === false) {
      console.log("不能发送数据,请重连socket");
      throw new Error(415);

    } else {
      console.log("发送", data);

      if (this.type === "wx") {
        this.socket.send({
          data: data
        });
      } else {
        this.socket.send(data);
      }
    }
  }

  close() {
    if (this.type === "wx") {
      this.socket.close({
        code: 1000,
        reason: 'Normal closure'
      });
    } else {
      this.socket.close();
    }

  }

  onOpen(callback) {
    console.log("onOpen", callback);
    this.onOpenCallback = callback;
  }

  onMessage(callback) {
    console.log("收到", callback);
    this.onMessageCallback = callback;
  }

  onClose(callback) {
    console.log("onClose", callback);
    this.onCloseCallback = callback;
  }

  onError(callback) {
    console.log("onError", callback);
    this.onErrorCallback = callback;
  }
}
module.exports = webSocketAiClient