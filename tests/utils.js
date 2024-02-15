function assert(condition, message) {
    if (!condition) {
        throw new Error(message || "Assertion failed");
    }
}

function mockFetch(url, options) {
    // Simulate a successful API response
    const mockResponse = {
        getContentText: function () {
            return JSON.stringify({
                ok: true,
                result: {
                    message_id: 123,
                    // Add more fields as needed for your tests
                }
            });
        }
        // Implement other methods of HTTPResponse if needed
    };

    return mockResponse;
}


const TEST_UTILS = {
    run() {
        testValidateToken()
        testMergeObjects()
        testApiRequest()
        testReplyWithEditedMessage()
        testRegisterHandler()
        testEnsureValidService()
        testCommandCondition()
        testPhotoCondition()
        testActionCondition()
        testStartAndHelpConditions()
        testContactCondition()
        testTextCondition()
    }

}

function testValidateToken() {
    const validToken = "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11";
    const invalidToken = "   ";
    const invalidTypeToken = 12345;

    try {
        assert(Utils.validateToken(validToken) === validToken, "Valid token should pass.");
        console.log("✅ validateToken with valid token passed.");
    } catch (e) {
        console.error("validateToken with valid token failed.");
    }

    try {
        Utils.validateToken(invalidToken);
        console.error("validateToken with invalid token did not throw.");
    } catch (e) {
        console.log("✅ validateToken with invalid token passed.");
    }

    try {
        Utils.validateToken(invalidTypeToken);
        console.error("validateToken with non-string token did not throw.");
    } catch (e) {
        console.log("✅ validateToken with non-string token passed.");
    }
}


function testMergeObjects() {
    const defaults = { a: 1, b: 2 };
    const additionalParams = { b: 3, c: 4 };
    const expected = { a: 1, b: 3, c: 4 };

    const result = Utils.mergeObjects(defaults, additionalParams);
    assert(JSON.stringify(result) === JSON.stringify(expected), "Objects should be merged correctly.");
    console.log("✅ mergeObjects passed.");
}





// Assuming CONFIG and UrlFetchApp are correctly set up
function testApiRequest() {
    // Back up the original fetch function
    const originalFetch = UrlFetchApp.fetch;

    // Override fetch with the mock function
    UrlFetchApp.fetch = mockFetch;

    try {
        // Now calling apiRequest will use the mockFetch function instead
        const result = Utils.apiRequest("test-token", "sendMessage",
            objParam = { chat_id: "123456", text: "Hello" }
        );

        // Perform assertions based on the expected result
        // For example, check if 'ok' is true in the mocked response
        assert(result.ok === true, "apiRequest should return success.");
        Logger.log("✅ apiRequest test passed with mock.");
    } catch (error) {
        Logger.log("apiRequest test failed: " + error.message);
    } finally {
        // Restore the original fetch function
        UrlFetchApp.fetch = originalFetch;
    }
}


function testRegisterHandler() {
    const handlers = [];
    const type = "command";
    const data = "/start";
    const middleware = () => { };

    try {
        Utils.registerHandler(handlers, type, data, middleware);
        assert(handlers.length === 1 && handlers[0].type === type, "registerHandler failed to register");
        Logger.log("✅ registerHandler passed.");
    } catch (e) {
        Logger.log("registerHandler error: " + e.message);
    }
}


function testEnsureValidService() {
    const instance = {
        testMethod: () => { }
    };
    const expectedMethods = ["testMethod"];
    const serviceName = "TestService";

    try {
        Utils.ensureValidService(instance, expectedMethods, serviceName);
        Logger.log("✅ ensureValidService passed.");
    } catch (e) {
        Logger.log("❌ ensureValidService failed: " + e.message);
    }

    // Test with a missing method
    try {
        Utils.ensureValidService({}, expectedMethods, serviceName);
    } catch (e) {
        assert(e instanceof Error, "❌ ensureValidService should throw error on missing method");
        Logger.log("✅ ensureValidService correctly identified missing method.");
    }
}



function testCommandCondition() {
    // const Utils = yourUtilsClassHere; // Ensure this points to your Utils class

    // Mock context for command '/start'
    const ctxStart = { message: { text: '/start' } };

    // Test the 'command' condition for '/start'
    assert(Utils.handlerConditions['command'](ctxStart, 'start') === true, "'command' condition failed for '/start'");

    // Mock context for command with RegExp
    const ctxHello = { message: { text: '/hello' } };

    // Test the 'command' condition with RegExp
    assert(Utils.handlerConditions['command'](ctxHello, /^hello/) === true, "'command' condition failed for RegExp /^hello/");

    console.log("✅ Testing 'command' condition passed.");
}



function testPhotoCondition() {
    // const Utils = yourUtilsClassHere; // Ensure this points to your Utils class

    // Mock context for photo message
    const ctxPhoto = { message: { photo: true } };

    // Test the 'photo' condition
    assert(Utils.handlerConditions['photo'](ctxPhoto) === true, "'photo' condition failed");

    console.log("✅ Testing 'photo' condition passed.");
}


function testActionCondition() {
    const ctxAction = { callback_query: { data: 'myAction' } };

    // Test the 'action' condition for a matching action
    assert(Utils.handlerConditions['action'](ctxAction, 'myAction') === true, "'action' condition failed for matching action");

    // Test with non-matching action
    assert(Utils.handlerConditions['action'](ctxAction, 'otherAction') === false, "'action' condition failed for non-matching action");

    console.log("✅ Testing 'action' condition passed.");
}


// function testStageCondition() {
//     const ctxStage = { stage: 'onboarding' };

//     // Test the 'stage' condition for a matching stage
//     assert(Utils.handlerConditions['stage'](ctxStage, 'onboarding') === true, "'stage' condition failed for matching stage");

//     // Test with non-matching stage
//     assert(Utils.handlerConditions['stage'](ctxStage, 'registration') === false, "'stage' condition failed for non-matching stage");

//     console.log("✅ Testing 'stage' condition passed.");
// }


function testStartAndHelpConditions() {
    const ctxStart = { message: { text: '/start' } };
    const ctxHelp = { message: { text: '/help' } };

    // Test 'start' condition
    assert(Utils.handlerConditions['start'](ctxStart) === true, "'start' condition failed");

    // Test 'help' condition
    assert(Utils.handlerConditions['help'](ctxHelp) === true, "'help' condition failed");

    console.log("✅ Testing 'start' and 'help' conditions passed.");
}


function testContactCondition() {
    const ctxContact = { message: { contact: { phone_number: "1234567890" } } };

    // Test the 'contact' condition
    assert(Utils.handlerConditions['contact'](ctxContact), "'contact' condition failed");

    console.log("✅ Testing 'contact' condition passed.");
}



function testTextCondition() {
    const ctxText = { message: { text: 'Hello' } };

    // Test the 'text' condition
    assert(Utils.handlerConditions['text'](ctxText), "'text' condition failed");

    console.log("✅ Testing 'text' condition passed.");
}

