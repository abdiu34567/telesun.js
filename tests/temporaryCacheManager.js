class MockScriptCache {
  constructor() {
    this.cache = {};
  }

  get(key) {
    return this.cache[key] || null;
  }

  put(key, value, expirationInSeconds) {
    this.cache[key] = value;
  }

  getAll(keys) {
    let results = {};
    keys.forEach(key => {
      results[key] = this.cache[key] || null;
    });
    return results;
  }

  putAll(objectOfKeyValuePairs, expirationInSeconds) {
    Object.keys(objectOfKeyValuePairs).forEach(key => {
      this.cache[key] = objectOfKeyValuePairs[key];
    });
  }

  remove(key) {
    delete this.cache[key];
  }

  removeAll(keys) {
    keys.forEach(key => {
      delete this.cache[key];
    });
  }
}


let singletonTCacheInstance = null;


const mockTCacheInstance = {
  getScriptCache: () => {
    if (!singletonTCacheInstance) {
      singletonTCacheInstance = new MockScriptCache()
    }
    return singletonTCacheInstance;
  }
};

// const mockInstance = {
//   getScriptCache: () => new MockScriptCache()
// };

const TEST_TEMPORARY_CACHE_MANAGER = {
  run() {
    testTemporaryCacheManager()
  }
}


function testTemporaryCacheManager() {
  let cacheManager = new TemporaryCacheManager(mockTCacheInstance);

  // Test setTCacheValue
  cacheManager.setTCacheValue('testKey', 'testValue', 150);
  console.log('✅ Value for testKey:', cacheManager.getTCacheValue('testKey')); // Should log 'testValue'

  // Test getTCacheValues
  cacheManager.setTCacheValue('anotherKey', 'anotherValue', 150);
  let values = cacheManager.getTCacheValues(['testKey', 'anotherKey']);
  console.log('✅ Values:', values); // Should include both keys

  // Test setTCacheValues
  cacheManager.setTCacheValues({ key1: 'value1', key2: 'value2' }, 150);
  console.log('✅ Values after setTCacheValues:', cacheManager.getTCacheValues(['key1', 'key2'])); // Should include key1 and key2

  // Test removeTCacheValue
  cacheManager.removeTCacheValue('key1');
  console.log('✅ Values after removeTCacheValue:', cacheManager.getTCacheValues(['key1', 'key2'])); // key1 should be null

  // Test removeTCacheValues
  cacheManager.removeTCacheValues(['testKey', 'anotherKey']);
  console.log('✅ Values after removeTCacheValues:', cacheManager.getTCacheValues(['testKey', 'anotherKey'])); // Both should be null
}

