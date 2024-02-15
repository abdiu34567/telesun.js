

const TEST_CALLBACK_QUERY_UPDATE = {

  run() {
    testAnswerCallbackQuery()
  }


}

function testAnswerCallbackQuery() {
  // Replace the real Utils.apiRequest with the mock version
  var originalApiRequest = Utils.apiRequest;
  Utils.apiRequest = MockUtils.apiRequest;

  var callbackQueryManager = new CallbackQueryManager("token123Valid");

  var objParam = { callbackQueryId: '12345', text: 'Test callback query' };

  // Call answerCallbackQuery and perform assertions
  var response = callbackQueryManager.answerCallbackQuery(objParam);

  // Check if Utils.apiRequest was called
  assertEqual(mockApiRequestCalls.length, 1, 'Utils.apiRequest should be called once.');

  // Check if Utils.apiRequest was called with correct parameters
  var expectedRequestParams = { botToken: callbackQueryManager.token, method: "answerCallbackQuery", objParam };
  assertEqual(JSON.stringify(mockApiRequestCalls[0]), JSON.stringify(expectedRequestParams), 'Utils.apiRequest should be called with correct parameters.');

  // Check the response
  assertNotNull(response, 'Response should not be null.');
  assertEqual(response.status, 'success', 'Response status should be success.');

  Logger.log('✅ All tests for answerCallbackQuery passed!');

  // Restore the original Utils.apiRequest
  Utils.apiRequest = originalApiRequest;
}