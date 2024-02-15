const TEST_PERMANENT_CACHE_MANAGER = {
  run() {
    testPermanentCacheManager();
  },
};

function testPermanentCacheManager() {
  const originalUpdateManager = UpdateManager;
  UpdateManager = MockUpdateManager;

  let cacheManager = new PermanentCacheManager(mockSessionInstance);

  cacheManager.setPCacheValue("testKey", "testValue");
  console.log("✅ Value for testKey:", cacheManager.getPCacheValue("testKey")); // Should log 'testValue'

  let allProps = cacheManager.getPCache();
  console.log("✅ All properties:", allProps); // Should include testKey: testValue

  cacheManager.setPCacheValues({ key1: "value1", key2: "value2" });
  console.log(
    "✅ All properties after setPCacheValues:",
    cacheManager.getPCache()
  ); // Should include key1 and key2

  cacheManager.removePCacheValue("key1");
  console.log(
    "✅ All properties after removePCacheValue:",
    cacheManager.getPCache()
  ); // Should not include key1

  cacheManager.deletePCache();
  console.log(
    "✅ All properties after deletePCache:",
    cacheManager.getPCache()
  ); // Should be empty

  UpdateManager = originalUpdateManager;
}
