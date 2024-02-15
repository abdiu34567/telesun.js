
const TEST_INLINE_QUERY_MANAGER = {
  run() {
    this.testAnswerInlineQuery()
    this.testAnswerWebAppQuery()
  },


  testAnswerInlineQuery() {
    // Replace the real Utils.apiRequest with the mock version
    var originalApiRequest = Utils.apiRequest;
    Utils.apiRequest = MockUtils.apiRequest;
    mockApiRequestCalls = [];


    var inlineQueryManager = new InlineQueryManager("tokenvalid123");
    var objParam = { inlineQueryId: '12345', results: [] };


    // Call answerInlineQuery and perform assertions
    var response = inlineQueryManager.answerInlineQuery(objParam);

    // Check if Utils.apiRequest was called
    assertEqual(mockApiRequestCalls.length, 1, 'Utils.apiRequest should be called once for answerInlineQuery.');

    // Check if Utils.apiRequest was called with correct parameters
    var expectedRequestParams = { botToken: inlineQueryManager.token, method: "answerInlineQuery", objParam };
    assertEqual(JSON.stringify(mockApiRequestCalls[0]), JSON.stringify(expectedRequestParams), 'Utils.apiRequest should be called with correct parameters for answerInlineQuery.');

    // Check the response
    assertNotNull(response, 'Response should not be null for answerInlineQuery.');
    assertEqual(response.status, 'success', 'Response status should be success for answerInlineQuery.');

    Logger.log('✅ All tests for answerInlineQuery passed!');
    Utils.apiRequest = originalApiRequest;
  },

  testAnswerWebAppQuery() {
    // Replace the real Utils.apiRequest with the mock version
    var originalApiRequest = Utils.apiRequest;
    Utils.apiRequest = MockUtils.apiRequest;
    mockApiRequestCalls = [];

    var inlineQueryManager = new InlineQueryManager("tokenvalid123");
    var objParam = { webAppQueryId: '67890', result: 'Test result' };

    // Reset mockApiRequestCalls before the next test
    mockApiRequestCalls = [];

    // Call answerWebAppQuery and perform assertions
    var response = inlineQueryManager.answerWebAppQuery(objParam);

    // Check if Utils.apiRequest was called
    assertEqual(mockApiRequestCalls.length, 1, 'Utils.apiRequest should be called once for answerWebAppQuery.');

    // Check if Utils.apiRequest was called with correct parameters
    var expectedRequestParams = { botToken: inlineQueryManager.token, method: "answerWebAppQuery", objParam };
    assertEqual(JSON.stringify(mockApiRequestCalls[0]), JSON.stringify(expectedRequestParams), 'Utils.apiRequest should be called with correct parameters for answerWebAppQuery.');

    // Check the response
    assertNotNull(response, 'Response should not be null for answerWebAppQuery.');
    assertEqual(response.status, 'success', 'Response status should be success for answerWebAppQuery.');

    Logger.log('✅ All tests for answerWebAppQuery passed!');
    Utils.apiRequest = originalApiRequest;
  }

}
