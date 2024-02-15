class TemporarySessionManager {
  constructor(instance) {
    this.instance = instance.getScriptCache()
  }

  getOperations() {
    const self = this; // Capture the current instance context

    return {
      getTSession: () => self.getTSession(),
      getTSessionValue: (key) => self.getTSessionValue(key),
      setTSessionValue: (key, value, time) => self.setTSessionValue(key, value, time),
      setTSessionValues: (keyObj, time) => self.setTSessionValues(keyObj, time),
      removeTSessionValue: (key) => self.removeTSessionValue(key),
      deleteTSession: () => self.deleteTSession(),
      setStage: (stage) => self.setStage(stage),
      clearStage: () => self.clearStage(),
      getStage: () => self.getStage()
    };
  }


  getTSession() {
    const userId = UpdateManager.userId();//update must be initiated from another place

    if (!this.instance || !userId) {
      throw new TelesunError("USER_ID_NOT_FOUND", ERRORS.USER_ID_NOT_FOUND);
    }


    let cache = this.instance.get(userId)
    if (cache) { cache = JSON.parse(cache); }

    return { user: userId, data: cache };
  }


  getTSessionValue(key) {
    const userId = UpdateManager.userId();
    if (!this.instance || !userId) {
      throw new TelesunError("USER_ID_NOT_FOUND", ERRORS.USER_ID_NOT_FOUND);
    }

    if (!key) {
      throw new TelesunError("KEY_NOT_FOUND", ERRORS.KEY_NOT_FOUND);
    }

    let session = this.getTSession(userId);
    let data = session.data;
    return data ? data[key] : null;
  }


  setTSessionValue(key, value, time = 600000) {
    const userId = UpdateManager.userId();
    if (!this.instance || !userId) {
      throw new TelesunError("USER_ID_NOT_FOUND", ERRORS.USER_ID_NOT_FOUND);
    }

    if (!key) {
      throw new TelesunError("KEY_NOT_FOUND", ERRORS.KEY_NOT_FOUND);
    }

    if (!value) {
      throw new TelesunError("VALUE_NOT_FOUND", ERRORS.VALUE_NOT_FOUND);
    }

    let session = this.getTSession(userId);
    let data = session.data || {}; // If data is falsy, use an empty object
    data[key] = value;

    let toString = JSON.stringify(data);
    this.instance.put(userId, toString, time)
    return { ok: true, user: userId, data: data };
  }


  setTSessionValues(objectOfKeyValuePairs, time = 600000) {
    const userId = UpdateManager.userId();
    if (!this.instance || !userId) {
      throw new TelesunError("USER_ID_NOT_FOUND", ERRORS.USER_ID_NOT_FOUND);
    }

    if (typeof objectOfKeyValuePairs !== "object") {
      throw new TelesunError("OBJECT_OF_KEY_VALUE_PAIRS_REQUIRED", ERRORS.OBJECT_OF_KEY_VALUE_PAIRS_REQUIRED);

    }

    let session = this.getTSession(userId);
    let data = session.data || {}; // If no existing data, start with an empty object
    Object.assign(data, objectOfKeyValuePairs);

    let toString = JSON.stringify(data);
    this.instance.put(userId, toString, time)
    return { ok: true, user: userId, data: data };
  }


  removeTSessionValue(key) {
    const userId = UpdateManager.userId();
    if (!this.instance || !userId) {
      throw new TelesunError("USER_ID_NOT_FOUND", ERRORS.USER_ID_NOT_FOUND);
    }

    if (!key) {
      throw new TelesunError("KEY_NOT_FOUND", ERRORS.KEY_NOT_FOUND);
    }

    let session = this.getTSession(userId);
    let data = session.data;
    if (!data) { return; }//no data to be removed

    if (!(key in data)) { return; }

    delete data[key];
    this.instance.put(userId, JSON.stringify(data), 600000)
    return { ok: true, user: userId, data: data };
  }


  deleteTSession() {
    const userId = UpdateManager.userId();
    if (!this.instance || !userId) {
      throw new TelesunError("USER_ID_NOT_FOUND", ERRORS.USER_ID_NOT_FOUND);
    }

    this.instance.remove(userId)
    return { ok: true, user: userId, data: null }
  }

  // =================== STAGE INCLUDED ======

  getStage() {
    return this.getTSessionValue('stage');
  }


  clearStage() {
    return this.removeTSessionValue('stage');
  }

  setStage(stage) {
    return (stage) ? this.setTSessionValue('stage', stage) : undefined
  }

}
