const TEST_MESSAGE_MANAGER = {
  run() {
    this.testMessageManager();
  },

  testMessageManager() {
    // Replace the real Utils.apiRequest with the mock version
    var originalApiRequest = Utils.apiRequest;
    Utils.apiRequest = MockUtils.apiRequest;

    var token = "sample_bot_token";
    var messageManager = new MessageManager(token);

    // Test sendMessage
    var sendMessageParams = { chat_id: "12345", text: "Hello" };
    messageManager.sendMessage(sendMessageParams);
    validateApiRequestCall(
      { botToken: token, method: "sendMessage", objParam: sendMessageParams },
      "sendMessage"
    );

    // Test forwardMessage
    var forwardMessageParams = {
      chat_id: "12345",
      from_chat_id: "67890",
      message_id: "111",
    };
    messageManager.forwardMessage(forwardMessageParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "forwardMessage",
        objParam: forwardMessageParams,
      },
      "forwardMessage"
    );

    // Test sendPhoto
    var sendPhotoParams = { chat_id: "12345", photo: "file_id" };
    messageManager.sendPhoto(sendPhotoParams);
    validateApiRequestCall(
      { botToken: token, method: "sendPhoto", objParam: sendPhotoParams },
      "sendPhoto"
    );

    // Test forwardMessages
    var forwardMessagesParams = { chat_id: "12345", photo: "file_id" };
    messageManager.forwardMessages(forwardMessagesParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "forwardMessages",
        objParam: forwardMessagesParams,
      },
      "forwardMessages"
    );

    // Test copyMessage
    var copyMessageParams = { chat_id: "12345", photo: "file_id" };
    messageManager.copyMessage(copyMessageParams);
    validateApiRequestCall(
      { botToken: token, method: "copyMessage", objParam: copyMessageParams },
      "copyMessage"
    );

    // Test copyMessages
    var copyMessagesParams = { chat_id: "12345", photo: "file_id" };
    messageManager.copyMessages(copyMessagesParams);
    validateApiRequestCall(
      { botToken: token, method: "copyMessages", objParam: copyMessagesParams },
      "copyMessages"
    );

    // Test sendAudio
    var sendAudioParams = { chat_id: "12345", photo: "file_id" };
    messageManager.sendAudio(sendAudioParams);
    validateApiRequestCall(
      { botToken: token, method: "sendAudio", objParam: sendAudioParams },
      "sendAudio"
    );

    // Test sendDocument
    var sendDocumentParams = { chat_id: "12345", photo: "file_id" };
    messageManager.sendDocument(sendDocumentParams);
    validateApiRequestCall(
      { botToken: token, method: "sendDocument", objParam: sendDocumentParams },
      "sendDocument"
    );

    // Test sendVideo
    var sendVideoParams = { chat_id: "12345", photo: "file_id" };
    messageManager.sendVideo(sendVideoParams);
    validateApiRequestCall(
      { botToken: token, method: "sendVideo", objParam: sendVideoParams },
      "sendVideo"
    );

    // Test sendAnimation
    var sendAnimationParams = { chat_id: "12345", photo: "file_id" };
    messageManager.sendAnimation(sendAnimationParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "sendAnimation",
        objParam: sendAnimationParams,
      },
      "sendAnimation"
    );

    // Test sendVoice
    var sendVoiceParams = { chat_id: "12345", photo: "file_id" };
    messageManager.sendVoice(sendVoiceParams);
    validateApiRequestCall(
      { botToken: token, method: "sendVoice", objParam: sendVoiceParams },
      "sendVoice"
    );

    // Test sendVideoNote
    var sendVideoNoteParams = { chat_id: "12345", photo: "file_id" };
    messageManager.sendVideoNote(sendVideoNoteParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "sendVideoNote",
        objParam: sendVideoNoteParams,
      },
      "sendVideoNote"
    );

    // Test sendMediaGroup
    var sendMediaGroupParams = { chat_id: "12345", photo: "file_id" };
    messageManager.sendMediaGroup(sendMediaGroupParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "sendMediaGroup",
        objParam: sendMediaGroupParams,
      },
      "sendMediaGroup"
    );

    // Test sendLocation
    var sendLocationParams = { chat_id: "12345", photo: "file_id" };
    messageManager.sendLocation(sendLocationParams);
    validateApiRequestCall(
      { botToken: token, method: "sendLocation", objParam: sendLocationParams },
      "sendLocation"
    );

    // Test sendVenue
    var sendVenueParams = { chat_id: "12345", photo: "file_id" };
    messageManager.sendVenue(sendVenueParams);
    validateApiRequestCall(
      { botToken: token, method: "sendVenue", objParam: sendVenueParams },
      "sendVenue"
    );

    // Test sendContact
    var sendContactParams = { chat_id: "12345", photo: "file_id" };
    messageManager.sendContact(sendContactParams);
    validateApiRequestCall(
      { botToken: token, method: "sendContact", objParam: sendContactParams },
      "sendContact"
    );

    // Test sendPoll
    var sendPollParams = { chat_id: "12345", photo: "file_id" };
    messageManager.sendPoll(sendPollParams);
    validateApiRequestCall(
      { botToken: token, method: "sendPoll", objParam: sendPollParams },
      "sendPoll"
    );

    // Test stopPoll
    var stopPollParams = { chat_id: "12345", photo: "file_id" };
    messageManager.stopPoll(stopPollParams);
    validateApiRequestCall(
      { botToken: token, method: "stopPoll", objParam: stopPollParams },
      "stopPoll"
    );

    // Test sendDice
    var sendDiceParams = { chat_id: "12345", photo: "file_id" };
    messageManager.sendDice(sendDiceParams);
    validateApiRequestCall(
      { botToken: token, method: "sendDice", objParam: sendDiceParams },
      "sendDice"
    );

    // Test sendChatAction
    var sendChatActionParams = { chat_id: "12345", photo: "file_id" };
    messageManager.sendChatAction(sendChatActionParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "sendChatAction",
        objParam: sendChatActionParams,
      },
      "sendChatAction"
    );

    // Test setMessageReaction
    var setMessageReactionParams = { chat_id: "12345", photo: "file_id" };
    messageManager.setMessageReaction(setMessageReactionParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "setMessageReaction",
        objParam: setMessageReactionParams,
      },
      "setMessageReaction"
    );

    // Test deleteMessage
    var deleteMessageParams = { chat_id: "12345", photo: "file_id" };
    messageManager.deleteMessage(deleteMessageParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "deleteMessage",
        objParam: deleteMessageParams,
      },
      "deleteMessage"
    );

    // Test deleteMessages
    var deleteMessagesParams = { chat_id: "12345", photo: "file_id" };
    messageManager.deleteMessages(deleteMessagesParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "deleteMessages",
        objParam: deleteMessagesParams,
      },
      "deleteMessages"
    );

    // Test editMessageText
    var editMessageTextParams = { chat_id: "12345", photo: "file_id" };
    messageManager.editMessageText(editMessageTextParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "editMessageText",
        objParam: editMessageTextParams,
      },
      "editMessageText"
    );

    // Test editMessageCaption
    var editMessageCaptionParams = { chat_id: "12345", photo: "file_id" };
    messageManager.editMessageCaption(editMessageCaptionParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "editMessageCaption",
        objParam: editMessageCaptionParams,
      },
      "editMessageCaption"
    );

    // Test editMessageMedia
    var editMessageMediaParams = { chat_id: "12345", photo: "file_id" };
    messageManager.editMessageMedia(editMessageMediaParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "editMessageMedia",
        objParam: editMessageMediaParams,
      },
      "editMessageMedia"
    );

    // Test editMessageReplyMarkup
    var editMessageReplyMarkupParams = { chat_id: "12345", photo: "file_id" };
    messageManager.editMessageReplyMarkup(editMessageReplyMarkupParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "editMessageReplyMarkup",
        objParam: editMessageReplyMarkupParams,
      },
      "editMessageReplyMarkup"
    );

    // Test stopMessageLiveLocation
    var stopMessageLiveLocationParams = { chat_id: "12345", photo: "file_id" };
    messageManager.stopMessageLiveLocation(stopMessageLiveLocationParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "stopMessageLiveLocation",
        objParam: stopMessageLiveLocationParams,
      },
      "stopMessageLiveLocation"
    );

    // Test editMessageLiveLocation
    var editMessageLiveLocationParams = { chat_id: "12345", photo: "file_id" };
    messageManager.editMessageLiveLocation(editMessageLiveLocationParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "editMessageLiveLocation",
        objParam: editMessageLiveLocationParams,
      },
      "editMessageLiveLocation"
    );

    // ... Similarly, you can add more tests for other methods ...

    Logger.log("✅ All tests for MessageManager passed!");
    Utils.apiRequest = originalApiRequest;
  },
};
