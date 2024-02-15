function validateApiRequestCall(expectedParams, methodName) {
  var actualParams = mockApiRequestCalls.shift(); // Get the next apiRequest call
  assertEqual(
    JSON.stringify(actualParams),
    JSON.stringify(expectedParams),
    `Utils.apiRequest should be called with correct parameters for ${methodName}.`
  );
}

const TEST_BOT_INFO_MANAGER = {
  run() {
    this.testBotInfoManager();
  },

  testBotInfoManager() {
    mockApiRequestCalls = [];

    // Replace the real Utils.apiRequest with the mock version
    var originalApiRequest = Utils.apiRequest;
    Utils.apiRequest = MockUtils.apiRequest;

    var token = "sample_bot_token";
    var botInfoManager = new BotInfoManager(token);

    // Test setMyCommands
    var myCommandsParams = { commands: ["start", "help"] };
    botInfoManager.setMyCommands(myCommandsParams);
    var expectedSetMyCommandsParams = {
      botToken: token,
      method: "setMyCommands",
      objParam: myCommandsParams,
    };
    validateApiRequestCall(expectedSetMyCommandsParams, "setMyCommands");

    // Test getMyCommands
    var getMyCommandsParams = {};
    botInfoManager.getMyCommands(getMyCommandsParams);
    var expectedGetMyCommandsParams = {
      botToken: token,
      method: "getMyCommands",
      objParam: getMyCommandsParams,
    };
    validateApiRequestCall(expectedGetMyCommandsParams, "getMyCommands");

    // Test deleteMyCommands
    var getdeleteMyCommandsParams = {};
    botInfoManager.deleteMyCommands(getMyCommandsParams);
    var expectedDeleteMyCommandsParams = {
      botToken: token,
      method: "deleteMyCommands",
      objParam: getdeleteMyCommandsParams,
    };
    validateApiRequestCall(expectedDeleteMyCommandsParams, "deleteMyCommands");

    // Test getMyName
    var getsetMyNameParams = {};
    botInfoManager.setMyName(getMyCommandsParams);
    var expectedsetMyNameParams = {
      botToken: token,
      method: "setMyName",
      objParam: getsetMyNameParams,
    };
    validateApiRequestCall(expectedsetMyNameParams, "setMyName");

    // Test deleteMyCommands
    var getgetMyNameParams = {};
    botInfoManager.getMyName(getMyCommandsParams);
    var expectedgetMyNameParams = {
      botToken: token,
      method: "getMyName",
      objParam: getgetMyNameParams,
    };
    validateApiRequestCall(expectedgetMyNameParams, "getMyName");

    // Test setMyDescription
    var getsetMyDescriptionParams = {};
    botInfoManager.setMyDescription(getMyCommandsParams);
    var expectedsetMyDescriptionParams = {
      botToken: token,
      method: "setMyDescription",
      objParam: getsetMyDescriptionParams,
    };
    validateApiRequestCall(expectedsetMyDescriptionParams, "setMyDescription");

    // Test getMyDescription
    var getgetMyDescriptionParams = {};
    botInfoManager.getMyDescription(getMyCommandsParams);
    var expectedgetMyDescriptionParams = {
      botToken: token,
      method: "getMyDescription",
      objParam: getgetMyDescriptionParams,
    };
    validateApiRequestCall(expectedgetMyDescriptionParams, "getMyDescription");

    // Test setMyShortDescription
    var getsetMyShortDescriptionParams = {};
    botInfoManager.setMyShortDescription(getMyCommandsParams);
    var expectedsetMyShortDescriptionParams = {
      botToken: token,
      method: "setMyShortDescription",
      objParam: getsetMyShortDescriptionParams,
    };
    validateApiRequestCall(
      expectedsetMyShortDescriptionParams,
      "setMyShortDescription"
    );

    // Test getMyShortDescription
    var getgetMyShortDescriptionParams = {};
    botInfoManager.getMyShortDescription(getMyCommandsParams);
    var expectedgetMyShortDescriptionParams = {
      botToken: token,
      method: "getMyShortDescription",
      objParam: getgetMyShortDescriptionParams,
    };
    validateApiRequestCall(
      expectedgetMyShortDescriptionParams,
      "getMyShortDescription"
    );

    // Test setMyDescription
    var getsetMyDefaultAdministratorRightsParams = {};
    botInfoManager.setMyDefaultAdministratorRights(getMyCommandsParams);
    var expectedsetMyDefaultAdministratorRightsParams = {
      botToken: token,
      method: "setMyDefaultAdministratorRights",
      objParam: getsetMyDefaultAdministratorRightsParams,
    };
    validateApiRequestCall(
      expectedsetMyDefaultAdministratorRightsParams,
      "setMyDefaultAdministratorRights"
    );

    // Test getMyDefaultAdministratorRights
    var getgetMyDefaultAdministratorRightsParams = {};
    botInfoManager.getMyDefaultAdministratorRights(getMyCommandsParams);
    var expectedgetMyDefaultAdministratorRightsParams = {
      botToken: token,
      method: "getMyDefaultAdministratorRights",
      objParam: getgetMyDefaultAdministratorRightsParams,
    };
    validateApiRequestCall(
      expectedgetMyDefaultAdministratorRightsParams,
      "getMyDefaultAdministratorRights"
    );

    // Test getMe
    botInfoManager.getMe();
    var expectedGetMeParams = { botToken: token, method: "getMe" };
    validateApiRequestCall(expectedGetMeParams, "getMe");

    // Test logOut
    botInfoManager.logOut();
    var expectedLogOutParams = { botToken: token, method: "logOut" };
    validateApiRequestCall(expectedLogOutParams, "logOut");

    // Test logOut
    botInfoManager.close();
    var expectedLogOutParams = { botToken: token, method: "close" };
    validateApiRequestCall(expectedLogOutParams, "close");

    Logger.log("✅ All tests for BotInfoManager passed!");

    // Restore the original Utils.apiRequest
    Utils.apiRequest = originalApiRequest;
  },
};
