/**
 * @Temporary Session
 *
 */
var TCache = {

  get cache() {
    return CacheService.getScriptCache()
  },

  /**
   * @param {string|number} key
   * @returns Object 
   * 
   */
  getCacheValue(key) {
    if (typeof key === 'number' || typeof key === 'string')
      return this.cache.get(key)
    throw new Error("KEY CAN BE ONLY STRING OR NUMBER")
  },

  /**
   *
   * @param {string|number} key
   * @param {string|number} value
   * @param {number} timer - in millisecond
   * @returns
   */
  setCacheValue(key, value, timer = 600000) {

    //must developers explicitly change object value to string
    if (typeof key === 'number' || typeof key === 'string' ||
      typeof value === 'number' || typeof value === 'string') {
      this.cache.put(key, value, timer)
      return { "ok": true, key: key, value: value }

    }

    throw new Error("KEY CAN NOT BE OBJECT OR ARRAY")

  },



  /**
   * @param {array} keys
   * @returns object
   */
  getCacheValues(arraykey) {
    if (!Array.isArray(arraykey)) throw new Error("MUST BE ARRAY OF KEYS")
    return this.cache.getAll(arraykey)
  },



  /**
   *
   * @param {object} keyObj
   * @param {number} timer - in millisecond
   * @returns
   */
  setCacheValues(keyObj) {

    //type must be only object
    //Arrays are not supported 
    if (Array.isArray(keyObj) || typeof keyObj !== 'object') throw new Error("MUST BE OBJECT")

    //doesn't need to be stringfied
    this.cache.putAll(keyObj)
    // return keyObj
    return { "ok": true, keyObj }


  },

  /**
   * Removes Single Key
   * @param {string|number} key
   *
   */
  removeCacheValue(key) {

    if (typeof key === 'number' || typeof key === 'string') {
      this.cache.remove(key)
      return { "ok": true }
    }

    throw new Error("KEY CAN NOT BE OBJECT OR ARRAY")

  },

  removeCacheValues(keyArray) {
    if (Array.isArray(keyArray)) {
      this.cache.removeAll(keyArray);
      return { "ok": true }
    }

    throw new Error("MUST BE ARRAY OF KEYS")
  },
};

/**
 * @Permanent Session
 */
var PCache = {
  
  get cache(){
     return PropertiesService.getScriptProperties()
  },
  
  getCacheValue(key) {
    if (typeof key === 'number' || typeof key === 'string') {
      return this.cache.getProperty(key);
    }
    throw new Error("KEY CAN NOT BE OBJECT OR ARRAY")
  },

  getCache() {
    return this.cache.getProperties()
  },



  setCacheValue(key, value) {

    //developers must explicitly change object value to string
    if (typeof key === 'number' || typeof key === 'string' ||
      typeof value === 'number' || typeof value === 'string') {

      this.cache.setProperty(key, value);
      return { "ok": true, key: key, value: value }

    } else { throw new Error("NUMBER OR STRING EXPECTED") }

  },

  /**
   *
   * @param {object} keyObj
   * @param {number} timer - in millisecond
   * @returns object
   */
  setCacheValues(keyObj) {

    //Type must be only object
    //Arrays are not supported 
    if (Array.isArray(keyObj) || typeof keyObj !== 'object') { throw new Error("MUST BE OBJECT") }

    this.cache.setProperties(keyObj)
    return { "ok": true, keyObj }

  },

  /**
   * Removes Single Key
   * @param {string|number} key
   *
   */
  removeCacheValue(key) {
    if (typeof key === 'number' || typeof key === 'string') {

      this.cache.deleteProperty(key);
      return { "ok": true }
    }

    throw new Error("KEY CAN NOT BE OBJECT OR ARRAY")

  },

  deleteCache() {
    PropertiesService.getScriptProperties().deleteAllProperties();
    return { "ok": true }
  },
};
