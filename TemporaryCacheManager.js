class TemporaryCacheManager {
  constructor(instance) {
    this.instance = instance.getScriptCache();
  }

  getOperations() {
    const self = this; // Capture the current instance context
    return {
      getTCacheValue: (key) => self.getTCacheValue(key),
      setTCacheValue: (key, value, time) =>
        self.setTCacheValue(key, value, time),
      getTCacheValues: (arrayOfKeys) => self.getTCacheValues(arrayOfKeys),
      setTCacheValues: (objectOfKeyValuePairs, time) =>
        self.setTCacheValues(objectOfKeyValuePairs, time),
      removeTCacheValue: (key) => self.removeTCacheValue(key),
      removeTCacheValues: (arrayOfKeys) => self.removeTCacheValues(arrayOfKeys),
    };
  }

  getTCacheValue(key) {
    if (typeof key === "number" || typeof key === "string") {
      return this.instance.get(key);
    }
    throw new TelesunError("KEY_TYPE_ERROR", ERRORS.KEY_TYPE_ERROR);
  }

  setTCacheValue(key, value, time = 600000) {
    if (
      typeof key === "number" ||
      typeof key === "string" ||
      typeof value === "number" ||
      typeof value === "string"
    ) {
      this.instance.put(key, value, time);
      return { ok: true, [key]: value };
    }
    throw new TelesunError("KEY_VALUE_TYPE_ERROR", ERRORS.KEY_VALUE_TYPE_ERROR);
  }

  getTCacheValues(arrayOfKeys) {
    if (Array.isArray(arrayOfKeys)) {
      return this.instance.getAll(arrayOfKeys);
    }
    throw new TelesunError(
      "ARRAY_OF_KEYS_TYPE_ERROR",
      ERRORS.ARRAY_OF_KEYS_TYPE_ERROR
    );
  }

  setTCacheValues(objectOfKeyValuePairs, time = 600000) {
    if (
      typeof objectOfKeyValuePairs === "object" &&
      !Array.isArray(objectOfKeyValuePairs)
    ) {
      this.instance.putAll(objectOfKeyValuePairs, time);
      return { ok: true, ...objectOfKeyValuePairs };
    }
    throw new TelesunError(
      "OBJECT_OF_KEYVALUEPAIRS_TYPE_ERROR",
      ERRORS.OBJECT_OF_KEYVALUEPAIRS_TYPE_ERROR
    );
  }

  removeTCacheValue(key) {
    if (typeof key === "number" || typeof key === "string") {
      this.instance.remove(key);
      return { ok: true, [key]: null };
    }
    throw new TelesunError("KEY_TYPE_ERROR", ERRORS.KEY_TYPE_ERROR);
  }

  removeTCacheValues(arrayOfKeys) {
    if (Array.isArray(arrayOfKeys)) {
      this.instance.removeAll(arrayOfKeys);
      return { ok: true, data: null };
    }
    throw new TelesunError(
      "ARRAY_OF_KEYS_TYPE_ERROR",
      ERRORS.ARRAY_OF_KEYS_TYPE_ERROR
    );
  }
}
