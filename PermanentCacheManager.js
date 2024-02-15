//uses property service
class PermanentCacheManager {
  constructor(instance) {
    this.instance = instance.getScriptProperties();
  }


  getOperations() {
    const self = this; // Capture the current instance context

    return {
      getPCacheValue: (key) => self.getPCacheValue(key),
      getPCache: () => self.getPCache(),
      setPCacheValue: (key, value) => self.setPCacheValue(key, value),
      setPCacheValues: (objectOfKeyValuePairs) => self.setPCacheValues(objectOfKeyValuePairs),
      removePCacheValue: (key) => self.removePCacheValue(key),
      deletePCache: () => self.deletePCache()
    };
  }


  getPCacheValue(key) {
    if (typeof key === 'number' || typeof key === 'string') {
      return this.instance.getProperty(key)
    }
    throw new TelesunError("KEY_TYPE_ERROR", ERRORS.KEY_TYPE_ERROR);
  }


  getPCache() {
    if (!this.instance) {
      throw new TelesunError("TEMPORARY_MEMORY_INSTANCE_NULL", ERRORS.TEMPORARY_MEMORY_INSTANCE_NULL);
    }
    return this.instance.getProperties()
  }


  setPCacheValue(key, value) {
    if (typeof key !== 'number' && typeof key !== 'string') {
      throw new TelesunError("KEY_TYPE_ERROR", ERRORS.KEY_TYPE_ERROR);
    }
    if (typeof value !== 'number' && typeof value !== 'string') {
      throw new TelesunError("VALUE_TYPE_ERROR", ERRORS.VALUE_TYPE_ERROR);
    }

    this.instance.setProperty(key, value);
    return { ok: true, [key]: value }

  }


  setPCacheValues(objectOfKeyValuePairs) {
    if (typeof objectOfKeyValuePairs !== 'object' || Array.isArray(objectOfKeyValuePairs)) {
      throw new TelesunError("OBJECT_OF_KEYVALUEPAIRS_TYPE_ERROR", ERRORS.OBJECT_OF_KEYVALUEPAIRS_TYPE_ERROR);
    }

    this.instance.setProperties(objectOfKeyValuePairs)
    return { ok: true, ...objectOfKeyValuePairs }
  }


  removePCacheValue(key) {
    if (typeof key !== 'number' && typeof key !== 'string') {
      throw new TelesunError("KEY_TYPE_ERROR", ERRORS.KEY_TYPE_ERROR);
    }

    this.instance.deleteProperty(key)
    return { ok: true, [key]: null }
  }


  deletePCache() {
    if (!this.instance) {
      throw new TelesunError("TEMPORARY_MEMORY_INSTANCE_NULL", ERRORS.TEMPORARY_MEMORY_INSTANCE_NULL);
    }

    this.instance.deleteAllProperties()
    return { ok: true, data: null }
  }

}