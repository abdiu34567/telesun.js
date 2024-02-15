// Mock version of Utils.replyWith and Message Sending Methods
var mockReplyWithCalls = [];
var mockSendMessageCalls = [];
var mockSendPhotoCalls = [];
var mockSendChatActionCalls = [];
var mockEditMessageTextCalls = [];

//mock version of Utils.apiRequest
var mockApiRequestCalls = [];

var MockUtils = {
  validateRequiredParams: function (param, paramName) {
    if (param && paramName) { return true }
    throw new Error("invalid params")
  },
  apiRequest: function (botToken, method, objParam) {

    // Track the calls to apiRequest and its parameters
    mockApiRequestCalls.push({ botToken, method, objParam });

    // Return a mock response
    return { status: 'success', data: 'Mock response' };
  }
};

var MockUpdateManager = {
  userId: () => 'mock_user_id',
  chatId: () => 'mock_chat_id',
  messageId: () => 'mock_message_id',
  setUpdate: function (update) {
    // Set the mock update (if needed for testing)
  },
  getChat: function () {
    // Return a mock chat object (if needed)
  }
};


// Mock API call methods (you'll need to implement these based on how they actually work)
function mockSendMessage(payload) {
  console.log("sendMessage called with payload:", payload);
  // Simulate API response
  return { success: true, payload };
}

function mockSendPhoto(payload) {
  console.log("sendPhoto called with payload:", payload);
  // Simulate API response
  return { success: true, payload };
}

function mockSendChatAction(payload) {
  console.log("sendChatAction called with payload:", payload);
  // Simulate API response
  return { success: true, payload };
}

function mockEditMessageText(payload) {
  console.log("editMessageText called with payload:", payload);
  // Simulate API response
  return { success: true, payload };
}



const TEST_REPLY_MANAGER = {
  run() {

    testReply();
    testReplyWithHtml();
    testReplyWithMarkdown();
    testReplyWithPhoto();
    testReplyWithChatAction();
    testReplyWithEditedMessage();

  }

}


function testReply() {
  const originalUpdateManager = UpdateManager;
  UpdateManager = MockUpdateManager;

  const messageManager = new MessageManager();
  messageManager.sendMessage = mockSendMessage; // Use the mock function
  try {
    messageManager.reply("Sample text");
    console.log("✅ testReply passed.");
  } catch (e) {
    console.error("❌ testReply failed:", e);
  }

  UpdateManager = originalUpdateManager
}

function testReplyWithHtml() {
  const originalUpdateManager = UpdateManager;
  UpdateManager = MockUpdateManager;

  const messageManager = new MessageManager();
  messageManager.sendMessage = mockSendMessage; // Use the mock function
  try {
    messageManager.replyWithHtml("Sample HTML text");
    console.log("✅ testReplyWithHtml passed.");
  } catch (e) {
    console.error("❌ testReplyWithHtml failed:", e);
  }

  UpdateManager = originalUpdateManager
}

function testReplyWithMarkdown() {
  const originalUpdateManager = UpdateManager;
  UpdateManager = MockUpdateManager;

  const messageManager = new MessageManager();
  messageManager.sendMessage = mockSendMessage; // Use the mock function
  try {
    messageManager.replyWithMarkdown("Sample *Markdown* text");
    console.log("✅ testReplyWithMarkdown passed.");
  } catch (e) {
    console.error("❌ testReplyWithMarkdown failed:", e);
  }

  UpdateManager = originalUpdateManager
}

function testReplyWithPhoto() {
  const originalUpdateManager = UpdateManager;
  UpdateManager = MockUpdateManager;

  const messageManager = new MessageManager();
  messageManager.sendPhoto = mockSendPhoto; // Use the mock function
  try {
    messageManager.replyWithPhoto("sample_photo_url");
    console.log("✅ testReplyWithPhoto passed.");
  } catch (e) {
    console.error("❌ testReplyWithPhoto failed:", e);
  }

  UpdateManager = originalUpdateManager
}

function testReplyWithChatAction() {
  const originalUpdateManager = UpdateManager;
  UpdateManager = MockUpdateManager;

  const messageManager = new MessageManager();
  messageManager.sendChatAction = mockSendChatAction; // Use the mock function
  try {
    messageManager.replyWithChatAction("typing");
    console.log("✅ testReplyWithChatAction passed.");
  } catch (e) {
    console.error("❌ testReplyWithChatAction failed:", e);
  }
  UpdateManager = originalUpdateManager
}

function testReplyWithEditedMessage() {
  const originalUpdateManager = UpdateManager;
  UpdateManager = MockUpdateManager;

  const messageManager = new MessageManager();
  messageManager.editMessageText = mockEditMessageText; // Use the mock function
  try {
    messageManager.replyWithEditedMessage("Edited message text");
    console.log("✅ testReplyWithEditedMessage passed.");
  } catch (e) {
    console.error("❌ testReplyWithEditedMessage failed:", e);
  }

  UpdateManager = originalUpdateManager
}

