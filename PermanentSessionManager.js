class PermanentSessionManager {

  constructor(instance) {
    this.instance = instance.getScriptProperties()
  }


  getOperations() {
    const self = this; // Capture the current instance context
    return {
      getPSession: () => self.getPSession(),
      getPSessionValue: (key) => self.getPSessionValue(key),
      setPSessionValue: (key, value) => self.setPSessionValue(key, value),
      setPSessionValues: (keyObj) => self.setPSessionValues(keyObj),
      removePSessionValue: (key) => self.removePSessionValue(key),
      deletePSession: () => self.deletePSession()
    };
  }


  getPSession() {
    const userId = UpdateManager.userId();
    if (!this.instance || !userId) {
      throw new TelesunError("USER_ID_NOT_FOUND", ERRORS.USER_ID_NOT_FOUND);
    }

    let session = this.instance.getProperty(userId)
    if (session) session = JSON.parse(session);

    return { user: userId, data: session };
  }


  getPSessionValue(key) {
    const userId = UpdateManager.userId();

    if (!this.instance || !userId) {
      throw new TelesunError("USER_ID_NOT_FOUND", ERRORS.USER_ID_NOT_FOUND);
    }

    if (!key) {
      throw new TelesunError("KEY_NOT_FOUND", ERRORS.KEY_NOT_FOUND);
    }

    let session = this.getPSession(userId);
    let data = session.data;
    return data ? data[key] : null;
  }


  setPSessionValue(key, value) {
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

    let session = this.getPSession(userId);
    let data = session.data || {}; // If data is falsy, use an empty object
    data[key] = value;

    this.instance.setProperty(userId, JSON.stringify(data))

    return { ok: true, user: userId, data: data };
  }


  setPSessionValues(objectOfKeyValuePairs) {
    const userId = UpdateManager.userId();

    if (!this.instance || !userId) {
      throw new TelesunError("USER_ID_NOT_FOUND", ERRORS.USER_ID_NOT_FOUND);
    }

    if (typeof objectOfKeyValuePairs !== "object") {
      throw new TelesunError("OBJECT_OF_KEY_VALUE_PAIRS_REQUIRED", ERRORS.OBJECT_OF_KEY_VALUE_PAIRS_REQUIRED);
    }

    let session = this.getPSession(userId);
    let data = session.data || {}; // If no existing data, start with an empty object
    Object.assign(data, objectOfKeyValuePairs);

    this.instance.setProperty(userId, JSON.stringify(data))

    return { ok: true, user: userId, data: data };
  }


  removePSessionValue(key) {
    const userId = UpdateManager.userId();

    if (!this.instance || !userId) {
      throw new TelesunError("USER_ID_NOT_FOUND", ERRORS.USER_ID_NOT_FOUND);
    }

    if (!key) {
      throw new TelesunError("KEY_NOT_FOUND", ERRORS.KEY_NOT_FOUND);
    }

    let session = this.getPSession(userId);
    let data = session.data;
    if (!data) { return; }

    if (!(key in data)) { return; }

    delete data[key];
    this.instance.setProperty(userId, JSON.stringify(data))

    return { ok: true, user: userId, data: data };
  }


  deletePSession() {
    const userId = UpdateManager.userId();
    if (!this.instance || !userId) {
      throw new TelesunError("USER_ID_NOT_FOUND", ERRORS.USER_ID_NOT_FOUND);
    }

    this.instance.deleteProperty(userId)
    return { ok: true, user: userId, data: null }
  }

}
