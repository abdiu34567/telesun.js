/**
 * @Temporary Session
 *
 */
var TSession = {
  get id() {
    return Context.from?.id || Context.chat?.id || Context.message?.id || Context.message?.user || 'unknown'
  },

  /**@returns Object */
  getSession() {
    //keeps from double stringfying object when sending to bot

    let _Cache = CacheService.getScriptCache().get(this.id);
    if (_Cache && typeof _Cache === "string") _Cache = JSON.parse(_Cache);

    return {
      user: this.id,
      data: _Cache,
    };
  },

  /**
   * @param {string|number} key - key to retrieve
   * @returns specific value
   */
  getSessionValue(key) {
    let Data = this.getSession();
    let data = Data.data;

    if (!data) return null;

    return data[key];
  },
  /**
   *
   * @param {string|number} key
   * @param {string|number} value
   * @param {number} timer - in millisecond
   * @returns
   */
  setSessionValue(key, value, timer) {
    let Data = this.getSession();
    let data = Data.data;
    let user = Data.user;
    let Obj;

    //if No Data
    if (!data) {
      data = {};
      data[key] = value; //insert new property
      Obj = data;
    } else {
      data[key] = value; //update object
      Obj = data;
    }

    let _Tostring = JSON.stringify(Obj); //must to store on cache
    let _time = timer ? timer : 600000; //default expire time


    CacheService.getScriptCache().put(user, _Tostring, _time);
    return Obj
  },

  /**
   *
   * @param {object} keyObj
   * @param {number} timer - in millisecond
   * @returns
   */
  setSessionValues(keyObj, timer) {
    let Data = this.getSession();
    let data = Data.data;
    let user = Data.user;
    let Obj;

    //must be object
    if (typeof keyObj !== "object") throw "Objext Expected";

    //if No Data
    if (!data) Obj = keyObj; //insert new property
    else {
      Object.keys(keyObj).map((element) => {
        data[element] = keyObj[element];
      });

      Obj = data; //update object
    }

    let ToString = JSON.stringify(Obj);
    let _time = timer ? timer : 600000; //default expire time

    CacheService.getScriptCache().put(user, ToString, _time);
    return Obj
  },

  /**
   * Removes Single Key
   * @param {string|number} key
   *
   */
  removeSessionValue(key) {
    let Data = this.getSession();
    let data = Data.data;
    let user = Data.user;

    //imposible to remove not found key
    if (!data) throw "Nothing To Remove";

    try {
      delete data[key]; //removing property
      CacheService.getScriptCache().put(user, JSON.stringify(data));
      return data

    } catch (err) { throw new Error("-- ❌ Key Not Found --"); }
  },

  deleteSession() {
    CacheService.getScriptCache().remove(this.id);
    return { "ok": true }
  },
};

/**
 * @Permanent Session
 */
var PSession = {
  get id() {
    return Context.from?.id || Context.chat?.id || Context.message?.id || Context.message?.user || 'unknown'
  },

  getSession() {
    //keeps from double stringfying object when sending to bot
    let _Cache = PropertiesService.getScriptProperties().getProperty(
      this.id
    );
    if (_Cache && typeof _Cache === "string") _Cache = JSON.parse(_Cache);

    return {
      user: this.id,
      data: _Cache,
    };
  },

  /**
   * @param {string|number} key - key to retrieve
   * @returns specific value
   */
  getSessionValue(key) {
    let Data = this.getSession();
    let data = Data.data;

    //no saved session found
    if (!data) return null;

    return data[key];
  },

  /**
   *
   * @param {string|number} key
   * @param {string|number} value
   * @param {number} timer - in millisecond
   * @returns
   */
  setSessionValue(key, value) {
    let Data = this.getSession();
    let data = Data.data;
    let user = Data.user;
    let Obj;

    //if No Data
    if (!data) {
      data = {};
      data[key] = value; //insert new property
      Obj = data;
    } else {
      data[key] = value; //update object
      Obj = data;
    }

    PropertiesService.getScriptProperties().setProperty(user, JSON.stringify(Obj));
    return Obj;
  },

  /**
   *
   * @param {object} keyObj
   * @param {number} timer - in millisecond
   * @returns object
   */
  setSessionValues(keyObj) {
    let Data = this.getSession();
    let data = Data.data;
    let user = Data.user;
    let Obj;

    if (typeof keyObj !== "object") throw "Objext Expected";

    //if No Data
    if (!data) Obj = keyObj; //insert new property
    else {
      Object.keys(keyObj).map((element) => {
        data[element] = keyObj[element];
      });

      Obj = data; //update object
    }

    PropertiesService.getScriptProperties().setProperty(user, JSON.stringify(Obj));
    return Obj
  },

  /**
   * Removes Single Key
   * @param {string|number} key
   *
   */
  removeSessionValue(key) {
    let Data = this.getSession();
    let data = Data.data;
    let user = Data.user;

    if (!data) throw "Nothing To Remove";

    try {
      delete data[key]; //removing property
      let _Session = JSON.stringify(data);
      PropertiesService.getScriptProperties().setProperty(user, _Session);
      return data

    } catch (err) { throw new Error("-- ❌ Key Not Found --"); }
  },

  deleteSession() {
    PropertiesService.getScriptProperties().deleteProperty(this.id);
    return { "ok": true }
  },
};
