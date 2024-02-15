class MockScriptProperties {
  constructor() {
    this.properties = {};
  }

  getProperty(key) {
    return this.properties[key] || null;
  }

  getProperties(key) {
    return this.properties || null;
  }

  setProperties(objectOfKeyValuePair) {
    // Merge the properties of objectOfKeyValuePair with this.properties
    this.properties = { ...this.properties, ...objectOfKeyValuePair };
  }

  setProperty(key, value) {
    this.properties[key] = value;
  }

  deleteAllProperties() {
    this.properties = null;
  }

  deleteProperty(key) {
    delete this.properties[key];
  }
}

// const mockInstance = {
//   getScriptProperties: () => new MockScriptProperties()
// };

let singletonSessionInstance = null;


const mockSessionInstance = {
  getScriptProperties: () => {
    if (!singletonSessionInstance) {
      singletonSessionInstance = new MockScriptProperties()
    }
    return singletonSessionInstance;
  }
};

// const MockUpdateManager = {
//     userId: 'mock_user_id' // Assuming this is how you plan to simulate user identification
// };

const TEST_PERMANENT_SESSION_MANAGER = {
  run() {
    testPermanentSessionManager()
  }
}


function testPermanentSessionManager() {

  const originalUpdateManager = UpdateManager;
  UpdateManager = MockUpdateManager;

  let manager = new PermanentSessionManager(mockSessionInstance);

  // Assuming userId is set correctly in UpdateManager
  manager.setPSessionValue('testKey', 'testValue');
  console.log('✅ Session after setPSessionValue:', manager.getPSession().data);

  let value = manager.getPSessionValue('testKey');
  console.log('✅ Value for testKey:', value);

  manager.removePSessionValue('testKey');
  console.log('✅ Session after removePSessionValue:', manager.getPSession().data);

  manager.setPSessionValues({ key1: 'value1', key2: 'value2' });
  console.log('✅ Session after setPSessionValues:', manager.getPSession().data);

  manager.deletePSession();
  console.log('✅ Session after deletePSession:', manager.getPSession().data);

  UpdateManager = originalUpdateManager
}


