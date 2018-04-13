import axios from 'axios'
export default class Bmob {
  constructor() {
    this.url = 'http://apitest.bmob.cn'
    this.objectClass = '';
  };
  initialize(applicationId, applicationKey, masterKey) {
    this.applicationId = applicationId
    console.log("init...")
    this.Object = this.Object()
    // console.log(this.abc())
  };

  Object() {
    return {
      _classMap: {},
      _getSubclass: function () {
        // if (!_.isString(className)) {
        if (!typeof className === 'string') {
          throw "Bmob.Object._getSubclass requires a string argument.";
        }
        var ObjectClass = Bmob.Object._classMap[className];
        if (!ObjectClass) {
          ObjectClass = Bmob.Object.extend(className);
          Bmob.Object._classMap[className] = ObjectClass;
        }
        return ObjectClass;
      },
      inherits: function (parent, protoProps, staticProps) {
        var child;

        if (protoProps && protoProps.hasOwnProperty('constructor')) {
          child = protoProps.constructor;
        } else {
          /** @ignore */
          child = function () {
            parent.apply(this, arguments);
          };
        }


        Object.assign(child, parent);



        return child;
      },
      _extend: function (protoProps, classProps) {
        var child = this.inherits(this, protoProps, classProps);
        child.extend = this.extend;
        return child;
      },
      extend(className, protoProps, classProps) {

        console.log("extend...")

        // Handle the case with only two args.
        // if (!_.isString(className)) {
        // 判断是否字符类型
        if (!typeof className === 'string') {
          // if (className && _.has(className, "className")) {
          if (className && className.hasOwnProperty('className')) {
            console.log('ok1')
            return this.Object.extend(className.className, className, protoProps);
          } else {
            console.log('ok2')
            throw new Error("this.Object.extend's first argument should be the className.");
          }
        }

        // console.log(this._classMap,'_classMap')

        // If someone tries to subclass "User", coerce it to the right type.
        if (className === "User") {
          className = "_User";
        }

        var NewClassObject = null;

        // if (_.has(this.Object._classMap, className)) {

        console.log(this._classMap)

        // 是否包含
        if (this._classMap.hasOwnProperty(className)) {
          var OldClassObject = this._classMap[className];
          // This new subclass has been told to extend both from "this" and from
          // OldClassObject. This is multiple inheritance, which isn't supported.
          // For now, let's just pick one.
          NewClassObject = OldClassObject._extend(protoProps, classProps);
        } else {
          protoProps = protoProps || {};
          protoProps.className = className;
          NewClassObject = this._extend(protoProps, classProps);
        }
        // Extending a subclass should reuse the classname automatically.
        NewClassObject.extend = function (arg0) {
          if (_.isString(arg0) || (arg0 && _.has(arg0, "className"))) {
            return this.Object.extend.apply(NewClassObject, arguments);
          }
          var newArguments = [className].concat(this._.toArray(arguments));
          return this.Object.extend.apply(NewClassObject, newArguments);
        };
        this._classMap[className] = NewClassObject;
        return NewClassObject;
      }


    }

  };


  _request({ method = 'post', url, data, success, error }) {
    console.log(method, url, data, success, error)
    // 请求网络
    return new Promise(
      /* executor */
      function (resolve, reject) {
        axios({
          method: method,
          url: url,
          data: { "where": { "objectId": "Fg2elllC" }, "limit": 1, "_Method": "GET", "_ApplicationId": "39ee83f92ff3a195130596a4eaec5ddf", "_RestKey": "a1223fca87f5d229953817f5c2493446", "_ClientVersion": "js0.0.1", "_InstallationId": "5c404f21-cbbf-9a0e-9a5c-433e6e27d554" }
        }).then(function (response) {
          console.log(response);
          resolve(response.data);
        })
          .catch(function (error) {
            console.log(error);
            reject(error);
          });

      }
    );
  };


  //查询对象
  Query(objectClass) {


    console.log("query...", objectClass.prototype.className)

    // 查询对象

    if (typeof objectClass === 'string') {
      objectClass = Bmob.Object._getSubclass(objectClass);
    }


    this.objectClass = objectClass;

    this.className = objectClass.prototype.className;

    this._where = {};
    this._include = [];
    this._limit = -1; // negative limit means, do not send a limit
    this._skip = 0;
    this._extraOptions = {};
    console.log(objectClass)
    return {
      get: (id) => {
        console.log("get", id)
        var url = this.url + '/1/classes/test999';
        return this._request({ url: url })
      }
    };

  };

}



