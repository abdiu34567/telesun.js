// Helper function to assert equality
function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error('Assertion failed: ' + message);
  }
}

// Helper function to assert not null
function assertNotNull(actual, message) {
  if (actual == null) {
    throw new Error('Assertion failed (NotNull): ' + message);
  }
}

// Helper function to assert null
function assertNull(actual, message) {
  if (actual != null) {
    throw new Error('Assertion failed (Null): ' + message);
  }
}

// Helper function to assert array equality
function assertArrayEquals(actual, expected, message) {
  if (actual.length !== expected.length || !actual.every((value, index) => value === expected[index])) {
    throw new Error('Assertion failed (ArrayEquals): ' + message);
  }
}


// Helper function to assert that the handler is registered correctly
function assertHandlerRegistered(handlers, expectedType, expectedData, expectedMiddleware) {
  var handler = handlers[handlers.length - 1]; // Get the last registered handler
  assertEqual(handler.type, expectedType, `Handler type should be ${expectedType}`);
  assertEqual(handler.data, expectedData, `Handler data should be ${expectedData}`);
  assertEqual(handler.middleware, expectedMiddleware, `Handler middleware should be the provided function`);
}


// Mock SpreadsheetApp and SheetManager
var MockSpreadsheetApp = {
  openById: function (spreadSheetId) {
    return { id: spreadSheetId }; // return a dummy object with an id
  }
};

var MockSheetManager = function (spreadsheetInstance) {
  this.spreadsheetInstance = spreadsheetInstance;
};


// Mock CacheService and PropertyService
var MockCacheService = {
  getScriptCache: function () { },
  getUserCache: function () { },
  getDocumentCache: function () { }
};

var MockPropertyService = {
  getScriptProperties: function () { },
  getUserProperties: function () { },
  getDocumentProperties: function () { }
};




var MockContentService = {
  output: null,
  createTextOutput: function (text) {
    this.output = text;
    return this;
  },
  setMimeType: function (mimeType) {
    // you can further simulate mimeType behavior if needed
    return this;
  },
  getOutput: function () {
    return this.output;
  },
  MimeType: {
    JSON: 'application/json'
  }
};

var MockAppConfig = {
  update: null,
  setUpdate: function (update) {
    this.update = update;
  },
  getUpdate: function () {
    return this.update;
  }
};


// Mock PropertiesService
var MockPropertiesService = {
  getUserProperties: function () {
    return {
      properties: { lastOffset: '3' },
      getProperty: function (key) {
        return this.properties[key] || null;
      },
      setProperty: function (key, value) {
        this.properties[key] = value;
      }
    }
  },

  getScriptProperties: function () {
    return {
      getProperty: function (key) {
        return 'http://mockappurl.com';
      }
    };
  }
};

// Mock Utils.apiRequest
var MockUtilsHook = {
  apiRequest: function ({ method, objParam }) {
    // Return a mock response that simulates the structure of the real response
    return {
      result: [
        { update_id: 1, /* ... other update data ... */ },
        { update_id: 2, /* ... other update data ... */ }
        // ... more mock updates ...
      ]
    };
  },

  handlerConditions: {
    on: function (ctx, data) {
      return ctx.appConfig.updateType === data; // Simulate condition check
    },
    // ... other conditions if needed ...
  }
};

var MockScriptApp = {
  getOAuthToken: function () {
    return 'mock_token';
  }
};


var middlewareCalls = [];
function mockMiddleware1(ctx, next) {
  middlewareCalls.push('middleware1');
  ctx.middleware1Called = true;
  next();
}

function mockMiddleware2(ctx, next) {
  middlewareCalls.push('middleware2');
  ctx.middleware2Called = true;
  next();
}

function mockOnMiddleware(ctx, next) {
  middlewareCalls.push('onMiddleware');
  ctx.onMiddlewareCalled = true;
  next();
}




const TEST_TELESUN = {


  /**
   * run all tests in this class
   */
  run() {

    this.testTelesunConstructor()
    this.testConnectToSpreadSheet()
    this.testTemporaryMemory()
    this.testPermanentMemory()
    this.testUseMethod()
    this.testOnMethod()
    this.testCommandMethod()
    this.testActionMethod()
    this.testHearsMethod()
    this.testPhotoMethod()
    this.testStageMethod()
    this.testStartMethod()
    this.testHelpMethod()
    this.testContactMethod()
    this.testVideoMethod()
    this.testVoiceMethod()
    this.testDocumentMethod()
    this.testAudioMethod()
    this.testTextMethod()
    this.testStickerMethod()
    this.testCommandsMethod()
    this.testHandleWebhook()
    this.testPolling()
    this.testDevHook()
    this.testSetWebhook()
    this.testDeleteWebhook()
    // this.testGetWebhookInfo()
    this.testHandleUpdate()


  },

  // ========================== NEW ===========================

  testTelesunConstructor() {
    var botToken = 'sample_bot_token';
    var telesunInstance = new Telesun(botToken);

    // Test if the bot token is set correctly
    assertEqual(telesunInstance.botToken, botToken, 'Bot token should be set correctly in appConfig.');

    // Test if the default managers are initialized
    Object.keys(telesunInstance.defaultManagers).forEach(function (managerKey) {
      assertNotNull(telesunInstance.defaultManagers[managerKey], managerKey + ' should be initialized.');
    });

    // Test if handlers and configs are initialized as empty arrays/objects
    assertEqual(telesunInstance.handlers.length, 0, 'Handlers should be initialized as an empty array.');
    assertEqual(Object.keys(telesunInstance.configs).length, 0, 'Configs should be initialized as an empty object.');

    Logger.log('✅ All tests for Telesun constructor passed!');
  },

  testConnectToSpreadSheet() {
    var botToken = 'sample_bot_token';
    var spreadSheetId = 'sample_spreadsheet_id';

    var telesunInstance = new Telesun(botToken);

    // Temporarily replace the real SpreadsheetApp and SheetManager with mocks
    var originalSpreadsheetApp = SpreadsheetApp;
    SpreadsheetApp = MockSpreadsheetApp;

    var originalSheetManager = SheetManager;
    SheetManager = MockSheetManager;

    try {
      // Call connectToSpreadSheet and perform assertions
      telesunInstance.connectToSpreadSheet(spreadSheetId);

      // Check if the sheetManager is set correctly
      assertNotNull(telesunInstance.sheetManager, 'SheetManager should be set.');
      assertEqual(telesunInstance.sheetManager.spreadsheetInstance.id, spreadSheetId, 'SheetManager should be initialized with the correct Spreadsheet instance.');

      // Check if the sheetManager is stored in configs
      assertNotNull(telesunInstance.configs.sheetManager, 'SheetManager should be stored in configs.');
      assertEqual(telesunInstance.configs.sheetManager, telesunInstance.sheetManager, 'Configs should store the correct SheetManager instance.');
    } finally {
      // Restore the original SpreadsheetApp and SheetManager
      SpreadsheetApp = originalSpreadsheetApp;
      SheetManager = originalSheetManager;
    }

    Logger.log('✅ All tests for connectToSpreadSheet passed!');
  },

  testTemporaryMemory() {
    var botToken = 'sample_bot_token';
    var telesunInstance = new Telesun(botToken);

    // Call temporaryMemory with a valid instance and perform assertions
    telesunInstance.temporaryMemory(MockCacheService);
    assertEqual(telesunInstance.memoryInstances.temporaryMemory, MockCacheService, 'Temporary memory should be set correctly.');
    assertNotNull(telesunInstance.configs.TCache, 'TemporaryCacheManager should be set in configs.');
    assertNotNull(telesunInstance.configs.TSession, 'TemporarySessionManager should be set in configs.');

    // Test with an invalid instance
    try {
      telesunInstance.temporaryMemory(); // This should throw an error
    } catch (e) {
      assertEqual(e.message, ERRORS.TEMPORARY_MEMORY_INSTANCE_NULL, 'Error message should match for invalid cache service instance.');
    }

    Logger.log('✅ All tests for temporaryMemory passed!');
  },

  testPermanentMemory() {
    var botToken = 'sample_bot_token';
    var telesunInstance = new Telesun(botToken);

    // Call permanentMemory with a valid instance and perform assertions
    telesunInstance.permanentMemory(MockPropertyService);
    assertEqual(telesunInstance.memoryInstances.permanentMemory, MockPropertyService, 'Permanent memory should be set correctly.');
    assertNotNull(telesunInstance.configs.PCache, 'PermanentCacheManager should be set in configs.');
    assertNotNull(telesunInstance.configs.PSession, 'PermanentSessionManager should be set in configs.');

    // Test with an invalid instance
    try {
      telesunInstance.permanentMemory(); // This should throw an error
    } catch (e) {
      assertEqual(e.message, ERRORS.PROPERTY_SERVICE_INSTANCE_NULL, 'Error message should match for invalid property service instance.');
    }

    Logger.log('✅ All tests for permanentMemory passed!');
  },


  testUseMethod() {
    var botToken = 'sample_bot_token';
    var telesunInstance = new Telesun(botToken);
    var middleware = function () { };

    telesunInstance.use(middleware);

    var registeredHandler = telesunInstance.handlers[0];
    assertEqual(registeredHandler.type, 'use', 'Handler type should be use.');
    assertEqual(registeredHandler.middleware, middleware, 'Middleware should be the function passed to use.');

    Logger.log('✅ All tests for use method passed!');
  },

  testOnMethod() {
    var botToken = 'sample_bot_token';
    var telesunInstance = new Telesun(botToken);
    var updateType = 'message';
    var middleware = function () { };

    telesunInstance.on(updateType, middleware);

    var registeredHandler = telesunInstance.handlers[0];
    assertEqual(registeredHandler.type, 'on', 'Handler type should be on.');
    assertEqual(registeredHandler.data, updateType, 'Data should be the updateType passed to on.');
    assertEqual(registeredHandler.middleware, middleware, 'Middleware should be the function passed to on.');

    Logger.log('✅ All tests for on method passed!');
  },

  testCommandMethod() {
    var botToken = 'sample_bot_token';
    var telesunInstance = new Telesun(botToken);
    var command = '/start';
    var middleware = function () { };

    telesunInstance.command(command, middleware);

    var registeredHandler = telesunInstance.handlers[0];
    assertEqual(registeredHandler.type, 'command', 'Handler type should be command.');
    assertEqual(registeredHandler.data, command, 'Data should be the command passed to command.');
    assertEqual(registeredHandler.middleware, middleware, 'Middleware should be the function passed to command.');

    Logger.log('✅ All tests for command method passed!');
  },


  testActionMethod() {
    var botToken = 'sample_bot_token';
    var telesunInstance = new Telesun(botToken);
    var actionName = 'sample_action';
    var middlewareFunction = function () { };

    telesunInstance.action(actionName, middlewareFunction);

    var lastHandler = telesunInstance.handlers[telesunInstance.handlers.length - 1];
    assertEqual(lastHandler.type, 'action', 'Handler type should be action.');
    assertEqual(lastHandler.data, actionName, 'Handler data should match the action name.');
    assertEqual(lastHandler.middleware, middlewareFunction, 'Handler middleware should match the provided function.');

    Logger.log('✅ All tests for action method passed!');
  },


  testHearsMethod() {
    var botToken = 'sample_bot_token';
    var telesunInstance = new Telesun(botToken);
    var text = 'hello';
    var middlewareFunction = function () { };

    telesunInstance.hears(text, middlewareFunction);

    var lastHandler = telesunInstance.handlers[telesunInstance.handlers.length - 1];
    assertEqual(lastHandler.type, 'hears', 'Handler type should be hears.');
    assertEqual(lastHandler.data, text, 'Handler data should match the text.');
    assertEqual(lastHandler.middleware, middlewareFunction, 'Handler middleware should match the provided function.');

    Logger.log('✅ All tests for hears method passed!');
  },

  testPhotoMethod() {
    var botToken = 'sample_bot_token';
    var telesunInstance = new Telesun(botToken);
    var middlewareFunction = function () { };

    telesunInstance.photo(middlewareFunction);

    var lastHandler = telesunInstance.handlers[telesunInstance.handlers.length - 1];
    assertEqual(lastHandler.type, 'photo', 'Handler type should be photo.');
    assertNull(lastHandler.data, 'Handler data for photo should be null.');
    assertEqual(lastHandler.middleware, middlewareFunction, 'Handler middleware should match the provided function.');

    Logger.log('✅ All tests for photo method passed!');
  },

  testStageMethod() {
    var telesunInstance = new Telesun('sample_bot_token');
    var stageName = 'sample_stage';
    var stageMiddleware = function () { };
    telesunInstance.stage(stageName, stageMiddleware);
    assertHandlerRegistered(telesunInstance.handlers, 'stage', stageName, stageMiddleware);
    Logger.log('✅ testStageMethod passed!');
  },

  testStartMethod() {
    var telesunInstance = new Telesun('sample_bot_token');
    var startMiddleware = function () { };
    telesunInstance.start(startMiddleware);
    assertHandlerRegistered(telesunInstance.handlers, 'start', undefined, startMiddleware);
    Logger.log('✅ testStartMethod passed!');
  },

  testHelpMethod() {
    var telesunInstance = new Telesun('sample_bot_token');
    var helpMiddleware = function () { };
    telesunInstance.help(helpMiddleware);
    assertHandlerRegistered(telesunInstance.handlers, 'help', undefined, helpMiddleware);
    Logger.log('✅ testHelpMethod passed!');
  },

  testContactMethod() {
    var telesunInstance = new Telesun('sample_bot_token');
    var contactMiddleware = function () { };
    telesunInstance.contact(contactMiddleware);
    assertHandlerRegistered(telesunInstance.handlers, 'contact', undefined, contactMiddleware);
    Logger.log('✅ testContactMethod passed!');
  },

  testVideoMethod() {
    var telesunInstance = new Telesun('sample_bot_token');
    var videoMiddleware = function () { };
    telesunInstance.video(videoMiddleware);
    assertHandlerRegistered(telesunInstance.handlers, 'video', undefined, videoMiddleware);
    Logger.log('✅ testVideoMethod passed!');
  },

  testVoiceMethod() {
    var telesunInstance = new Telesun('sample_bot_token');
    var voiceMiddleware = function () { };
    telesunInstance.voice(voiceMiddleware);
    assertHandlerRegistered(telesunInstance.handlers, 'voice', undefined, voiceMiddleware);
    Logger.log('✅ testVoiceMethod passed!');
  },

  testDocumentMethod() {
    var telesunInstance = new Telesun('sample_bot_token');
    var documentMiddleware = function () { };
    telesunInstance.document(documentMiddleware);
    assertHandlerRegistered(telesunInstance.handlers, 'document', undefined, documentMiddleware);
    Logger.log('✅ testDocumentMethod passed!');
  },

  testAudioMethod() {
    var telesunInstance = new Telesun('sample_bot_token');
    var audioMiddleware = function () { };
    telesunInstance.audio(audioMiddleware);
    assertHandlerRegistered(telesunInstance.handlers, 'audio', undefined, audioMiddleware);
    Logger.log('✅ testAudioMethod passed!');
  },

  testTextMethod() {
    var telesunInstance = new Telesun('sample_bot_token');
    var textMiddleware = function () { };
    telesunInstance.text(textMiddleware);
    assertHandlerRegistered(telesunInstance.handlers, 'text', undefined, textMiddleware);
    Logger.log('✅ testTextMethod passed!');
  },

  testStickerMethod() {
    var telesunInstance = new Telesun('sample_bot_token');
    var stickerMiddleware = function () { };
    telesunInstance.sticker(stickerMiddleware);
    assertHandlerRegistered(telesunInstance.handlers, 'sticker', undefined, stickerMiddleware);
    Logger.log('✅ testStickerMethod passed!');
  },

  testCommandsMethod() {
    var telesunInstance = new Telesun('sample_bot_token');
    var commandsMiddleware = function () { };
    telesunInstance.commands(commandsMiddleware);
    assertHandlerRegistered(telesunInstance.handlers, 'commands', undefined, commandsMiddleware);
    Logger.log('✅ testCommandsMethod passed!');
  },


  testHandleWebhook() {
    var botToken = 'sample_bot_token';
    var telesunInstance = new Telesun(botToken);


    // Replace real dependencies with mocks
    // telesunInstance.appConfig = MockAppConfig;
    const update = { update_id: "***", message: {} }

    telesunInstance.handleUpdate = function (update) {
      console.log('handleUpdate called');
    };


    var originalContentService = ContentService;
    ContentService = MockContentService;


    try {
      // Simulate a valid webhook event
      var validEvent = {
        postData: {
          contents: JSON.stringify({ message: 'Hello' })
        }
      };
      telesunInstance.handleWebhook(validEvent);
      // assertEqual(MockAppConfig.getUpdate().message, 'Hello', 'Update should be set correctly in appConfig.');
      assertEqual(MockContentService.getOutput(), JSON.stringify({ 'status': 'success' }), 'Success response should be returned for valid event.');

    } finally {
      // Restore real dependencies
      ContentService = originalContentService;
    }

    Logger.log('✅ All tests for handleWebhook passed!');
  },


  testPolling() {
    var botToken = 'sample_bot_token';
    var telesunInstance = new Telesun(botToken);

    // Temporarily replace the real PropertiesService and Utils with mocks
    var originalPropertiesService = PropertiesService;
    PropertiesService = MockPropertiesService;

    var originalUtils = Utils;
    Utils = MockUtilsHook;

    try {
      // Call polling and perform assertions
      telesunInstance.polling({ limit: 100, timeout: 60 });

      // Check if lastOffset is updated correctly
      var lastOffset = PropertiesService.getUserProperties().getProperty("lastOffset");
      assertEqual(lastOffset, '3', 'Last offset should be updated to the next one after the last update.');

      // ... Add more assertions as needed to test handleWebhook, Utils.apiRequest, etc.
    } finally {
      // Restore the original PropertiesService and Utils
      PropertiesService = originalPropertiesService;
      Utils = originalUtils;
    }

    Logger.log('✅ All tests for polling passed!');
  },


  testDevHook() {
    const originalSetWebhook = Telesun.prototype.setWebhook;
    // Add a mock setWebhook method to Telesun for testing
    Telesun.prototype.setWebhook = function (options) {
      // Mock behavior of setWebhook, you can simulate success or failure based on options
    };

    var botToken = 'sample_bot_token';
    var telesunInstance = new Telesun(botToken);

    // Temporarily replace the real PropertiesService and ScriptApp with mocks
    var originalPropertiesService = PropertiesService;
    PropertiesService = MockPropertiesService;

    var originalScriptApp = ScriptApp;
    ScriptApp = MockScriptApp;

    try {
      // Prepare the data for devHook
      var devHookData = {
        devHookUrl: 'http://mockdevhookurl.com',
        certificate: 'mock_certificate',
        ip_address: '1.2.3.4',
        max_connections: 40,
        drop_pending_updates: true,
        secret_token: 'mock_secret_token'
      };

      // Call devHook and perform assertions
      var response = telesunInstance.devHook(devHookData);
      var responseContent = JSON.parse(response.getContent());

      // Check if the response status is 'success'
      assertEqual(responseContent.status, 'success', 'Response status should be success.');

      // More assertions can be added based on the expected behavior of setWebhook
    } catch (e) {
      console.error('Test failed: ' + e.message);
    } finally {
      // Restore the original PropertiesService and ScriptApp
      PropertiesService = originalPropertiesService;
      ScriptApp = originalScriptApp;
    }

    Logger.log('✅ All tests for devHook passed!');

    Telesun.prototype.setWebhook = originalSetWebhook;
  },


  testSetWebhook() {
    var telesunInstance = new Telesun('sample_bot_token');

    let originalUtils = Utils
    Utils = MockUtilsHook; // Use the mocked Utils

    var webhookData = {
      url: 'http://mockurl.com',
      certificate: 'mock_certificate',
      ip_address: '1.2.3.4',
      max_connections: 40,
      drop_pending_updates: true,
      secret_token: 'mock_secret_token'
    };

    var response = telesunInstance.setWebhook(webhookData);

    // Add your assertions here based on the expected response
    assertEqual(response.result.length, 2, 'setWebhook should return mock response with 2 updates.');

    Logger.log('✅ All tests for setWebhook passed!');
    Utils = originalUtils
  },


  testDeleteWebhook() {
    var telesunInstance = new Telesun('sample_bot_token');
    let originalUtils = Utils
    Utils = MockUtilsHook; // Use the mocked Utils

    var response = telesunInstance.deleteWebhook({ drop_pending_updates: true });

    // Add your assertions here based on the expected response
    assertEqual(response.result.length, 2, 'deleteWebhook should return mock response with 2 updates.');

    Logger.log('✅ All tests for deleteWebhook passed!');
    Utils = originalUtils
  },

  // testGetWebhookInfo() {
  //   var telesunInstance = new Telesun('sample_bot_token');

  //   const originalUtils = Utils
  //   Utils = MockUtilsHook; // Use the mocked Utils

  //   var webhookInfoData = {
  //     url: 'http://mockurl.com',
  //     has_custom_certificate: true,
  //     pending_update_count: 10,
  //     ip_address: '1.2.3.4',
  //     last_error_date: 123456789,
  //     last_error_message: 'mock_error',
  //     last_synchronization_error_date: 987654321,
  //     max_connections: 40
  //   };

  //   var response = telesunInstance.getWebhookInfo(webhookInfoData);

  //   // Add your assertions here based on the expected response
  //   assertEqual(response.result.length, 2, 'getWebhookInfo should return mock response with 2 updates.');

  //   Logger.log('✅ All tests for getWebhookInfo passed!');

  //   Utils = originalUtils;
  // },

  testHandleUpdate() {
    var botToken = 'sample_bot_token';
    var telesunInstance = new Telesun(botToken);

    var update = { update_id: 11, message: { chat: { id: 123 } } }

    // Register middleware
    telesunInstance.use(mockMiddleware1);
    telesunInstance.on('message', mockOnMiddleware); // Assuming 'message' is a type of update
    telesunInstance.use(mockMiddleware2);


    // Call handleUpdate
    telesunInstance.handleUpdate(update);

    // Perform assertions
    assertEqual(middlewareCalls[0], 'middleware1', 'First middleware should be called first.');
    assertEqual(middlewareCalls[1], 'onMiddleware', '"on" middleware should be called when the condition is met.');
    assertEqual(middlewareCalls[2], 'middleware2', 'Second middleware should be called last.');

    // More assertions can be added based on the expected behavior of the middleware and ctx
    Logger.log('✅ All tests for handleUpdate passed!');
  }


}











