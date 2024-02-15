let singletonCacheInstance = null;

var mockInstance = {
  getScriptCache: () => {
    if (!singletonCacheInstance) {
      singletonCacheInstance = new MockScriptCache();
    }
    return singletonCacheInstance;
  },
};

const TEST_TEMPORARY_SESSION_VALUE = {
  run() {
    testTemporarySessionManager();
  },
};

function testTemporarySessionManager() {
  const originalUpdateManager = UpdateManager;
  UpdateManager = MockUpdateManager;

  let manager = new TemporarySessionManager(mockInstance);

  // Test setting a session value
  //includes <put>
  manager.setTSessionValue("testKey", "testValue");
  console.log("✅ After setTSessionValue:", manager.getTSession().data);

  // Test getting a session value
  console.log("✅ getTSessionValue:", manager.getTSessionValue("testKey"));

  // Test removing a session value
  manager.removeTSessionValue("testKey");
  console.log("✅ After removeTSessionValue:", manager.getTSession().data);

  // Test deleting the session
  manager.deleteTSession();
  console.log("✅ After deleteTSession:", manager.getTSession().data);

  // Additional tests for setTSessionValues and other methods as needed

  UpdateManager = originalUpdateManager;
}
