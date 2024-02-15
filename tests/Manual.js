/**
 * Demonstrates setting up a simple bot using the Telesun library to interact with incoming updates via Google Apps Script webhooks.
 * This function should be set as the target for doPost triggers in Google Apps Script to process updates from Telegram.
 *
 * @param {GoogleAppsScript.Events.DoPost} e The event parameter for a POST request to the web app.
 */
function doPost(e) {
  new Telesun("my-bot-token")
    .start((ctx, next) => {
      ctx.reply("sss");
      ctx.reply("webhookInfo: ");
    })
    .use((ctx, next) => {
      ctx.reply("kkk");
      next();
    })
    .devHook(e, { server: "GAS" });
}

/**
 * Test function to set a webhook for the Telegram bot.
 * This should be run manually to configure the bot to send updates to a specified URL.
 */
function testSetWebhook() {
  new Telesun("my-bot-token").setWebhook({
    url: "my-webhook-url",
  });
}

/**
 * Test function to delete the bot's webhook.
 * Useful for cleaning up or switching between different update receiving methods (e.g., polling vs. webhooks).
 */
function testDeleteWebHook() {
  const bot = new Telesun("my-bot-token");
  bot.deleteWebhook();
}

/**
 * Demonstrates the setup for long polling with the Telesun library.
 * This function initiates a long polling session to receive updates.
 * Should be run in an environment that supports long execution times.
 */
function testLongPolling() {
  const telesun = new Telesun("my-bot-token").temporaryMemory(CacheService);

  telesun.use((ctx) => {
    ctx.reply(ctx.update.message.text);
  });

  telesun.longPolling();
}

/**
 * This method serves as an integration test suite for verifying the dynamic attachment and operational integrity
 * of various manager components and handlers within the Telesun framework. Each manager and handler is responsible
 * for a specific domain of bot functionality, from message handling to interaction with external services like email
 * and Google Sheets, as well as internal mechanisms for session and cache memory management.
 *
 * By invoking this method, all underlying functional managers and handlers are tested to ensure they are correctly
 * instantiated and attached to the context (`ctx`) object dynamically. This comprehensive test ensures that
 * all aspects of the bot's operation, including message processing, chat management, payments, games,
 * file handling, and more, are ready for use and function as expected when the bot encounters real-world interactions.
 *
 * The method also tests the framework's ability to handle updates, execute middleware sequences, manage errors,
 * and process inline and callback queries effectively. This is crucial for maintaining the reliability and
 * robustness of the bot across various scenarios and use cases.
 *
 * Developers are encouraged to run this test suite to verify the correct integration of all components and the
 * bot's readiness for deployment. It helps in identifying any potential issues in the dynamic method attachment
 * process or in the operational logic of individual managers and handlers before the bot interacts with users.
 */
function TEST_ALL_MANAGERS() {
  // Test individual managers for various functionalitie
  testEmailManager();
  testSheet_Manager();
  testMessageManager();
  testChatManager();
  testPayementManager();
  testGameManager();
  testFileManager();
  testForumManager();
  testStickerManager();
  testCallbackQueryManager();
  testInlineQueryManager();
  testBotInfoManager();

  testPermanentSessionMemory();
  testPermanentCacheMemory();
  testTemporaryCacheMemory();
  testTemporarySessionMemory();

  testOnHandlers();
  testUpdateMethods();
  testHandlers();
  testNextMiddleware();
  testErrorHandlers();
}

function testEmailManager() {
  new Telesun("<your bot token>")
    .use((ctx) => {
      console.log(
        "sendEmail: ",
        ctx.sendEmail(
          "abdiurgessa3@gmail.com",
          "Telesun V2",
          "Ready for release."
        )
          ? "✅"
          : "❌"
      );
    })
    .handleUpdate({ update_id: "***", message: {} });
}

function testSheet_Manager() {
  new Telesun("<your bot token>")
    .connectToSpreadSheet("spreadsheetId")
    .use((ctx) => {
      console.log(
        "appendRow: ",
        ctx.sheet("Sheet1").appendRow(["1", "2", "abdi"]) ? "✅" : "❌"
      );
      console.log("clear: ", ctx.sheet("Sheet1").clear() ? "✅" : "❌");

      ctx.sheet("Sheet1").appendRow(["1", "2", "abdi"]);
      ctx.sheet("Sheet1").appendRow(["1", "2", "abdi"]);
      ctx.sheet("Sheet1").appendRow(["1", "2", "abdi"]);
      console.log(
        "clearByRange: ",
        ctx.sheet("Sheet1").clearByRange(1, 2) ? "✅" : "❌"
      );

      console.log(
        "clearValue: ",
        ctx.sheet("Sheet1").clearValue(1, 1) ? "✅" : "❌"
      );
      console.log(
        "findOne: ",
        ctx.sheet("Sheet1").findOne("abdi") ? "✅" : "❌"
      );
      console.log(
        "findAll: ",
        ctx.sheet("Sheet1").findAll("abdi") ? "✅" : "❌"
      );
      console.log(
        "deleteColumn: ",
        ctx.sheet("Sheet1").deleteColumn(1) ? "✅" : "❌"
      );
      console.log(
        "deleteColumns: ",
        ctx.sheet("Sheet1").deleteColumns(1, 2) ? "❌" : "✅"
      );

      console.log(
        "deleteRow: ",
        ctx.sheet("Sheet1").deleteRow(1) ? "✅" : "❌"
      );
      console.log(
        "deleteRows: ",
        ctx.sheet("Sheet1").deleteRows(2, 3) ? "❌" : "✅"
      );
      console.log(
        "getSheetData: ",
        ctx.sheet("Sheet1").getSheetData() ? "✅" : "❌"
      );

      ctx.sheet("Sheet1").appendRow(["1", "2", "abdi"]);
      console.log(
        "getLastColumn: ",
        ctx.sheet("Sheet1").getLastColumn() ? "✅" : "❌"
      );
      console.log(
        "getLastRow: ",
        ctx.sheet("Sheet1").getLastRow() ? "✅" : "❌"
      );

      console.log(
        "insertColumnAfter: ",
        ctx.sheet("Sheet1").insertColumnAfter(3) ? "✅" : "❌"
      );
      console.log(
        "insertColumnBefore: ",
        ctx.sheet("Sheet1").insertColumnBefore(3) ? "✅" : "❌"
      );
      console.log(
        "insertColumns: ",
        ctx.sheet("Sheet1").insertColumns(1, 2) ? "❌" : "✅"
      );

      console.log(
        "insertColumnsAfter: ",
        ctx.sheet("Sheet1").insertColumnsAfter(3, 2) ? "✅" : "❌"
      );
      console.log(
        "insertColumnsBefore: ",
        ctx.sheet("Sheet1").insertColumnsBefore(3, 2) ? "✅" : "❌"
      );
      console.log(
        "insertRowAfter: ",
        ctx.sheet("Sheet1").insertRowAfter(2) ? "✅" : "❌"
      );
      console.log(
        "insertRowBefore: ",
        ctx.sheet("Sheet1").insertRowBefore(3) ? "✅" : "❌"
      );
      console.log(
        "insertRows: ",
        ctx.sheet("Sheet1").insertRows(2, 2) ? "❌" : "✅"
      );
      console.log(
        "insertRowsAfter: ",
        ctx.sheet("Sheet1").insertRowsAfter(2, 3) ? "✅" : "❌"
      );
      console.log(
        "insertRowsBefore: ",
        ctx.sheet("Sheet1").insertRowsBefore(2, 3) ? "✅" : "❌"
      );
      console.log(
        "moveColumns: ",
        ctx.sheet("Sheet1").moveColumns("A1:B1", 4) ? "❌" : "✅"
      );
      console.log(
        "moveRows: ",
        ctx.sheet("Sheet1").moveRows("A1:B1", 4) ? "❌" : "✅"
      );
      console.log(
        "setName: ",
        ctx.sheet("Sheet1").setName("abdi") ? "✅" : "❌"
      );
      console.log(
        "sortByColumn: ",
        ctx.sheet("abdi").sortByColumn(2) ? "✅" : "❌"
      );
      console.log(
        "saveOne: ",
        ctx.sheet("abdi").saveOne("saver", 1, 2) ? "✅" : "❌"
      );
      console.log(
        "saveMany: ",
        ctx.sheet("abdi").saveMany(
          [
            ["1", "2", "3"],
            ["4", "5", "6"],
          ],
          4,
          4,
          2,
          3
        )
          ? "✅"
          : "❌"
      );
      console.log("getValue: ", ctx.sheet("abdi").getValue(1, 2) ? "✅" : "❌");
      console.log(
        "getValues: ",
        ctx.sheet("abdi").getValues(4, 4, 7, 2) ? "✅" : "❌"
      );
      console.log(
        "setName: ",
        ctx.sheet("abdi").setName("Sheet1") ? "✅" : "❌"
      );
    })
    .handleUpdate({ update_id: "***", message: {} });
}

function testMessageManager() {
  new Telesun("<your bot token>")
    .use((ctx) => {
      Utils.apiRequest = function (botToken, method, objParam) {
        return { success: "true" };
      };

      console.log("reply: ", ctx.reply("reply") ? "✅" : "❌");
      console.log(
        "replyWithHtml: ",
        ctx.replyWithHtml("<b>reply</b>") ? "✅" : "❌"
      );
      console.log(
        "replyWithMarkdown: ",
        ctx.replyWithMarkdown("*message*") ? "✅" : "❌"
      );
      console.log(
        "replyWithPhoto: ",
        ctx.replyWithPhoto("photo") ? "✅" : "❌"
      );
      console.log(
        "replyWithChatAction: ",
        ctx.replyWithChatAction("action") ? "✅" : "❌"
      );
      console.log(
        "replyWithEditedMessage: ",
        ctx.replyWithEditedMessage("#edited") ? "✅" : "❌"
      );
      console.log("sendMessage: ", ctx.sendMessage() ? "✅" : "❌");
      console.log("forwardMessage: ", ctx.forwardMessage() ? "✅" : "❌");
      console.log("forwardMessages: ", ctx.forwardMessages() ? "✅" : "❌");
      console.log("copyMessage: ", ctx.copyMessage() ? "✅" : "❌");
      console.log("copyMessages: ", ctx.copyMessages() ? "✅" : "❌");
      console.log("sendPhoto: ", ctx.sendPhoto() ? "✅" : "❌");
      console.log("sendAudio: ", ctx.sendAudio() ? "✅" : "❌");
      console.log("sendDocument: ", ctx.sendDocument() ? "✅" : "❌");
      console.log("sendVideo: ", ctx.sendVideo() ? "✅" : "❌");
      console.log("sendAnimation: ", ctx.sendAnimation() ? "✅" : "❌");
      console.log("sendVoice: ", ctx.sendVoice() ? "✅" : "❌");
      console.log("sendVideoNote: ", ctx.sendVideoNote() ? "✅" : "❌");
      console.log("sendMediaGroup: ", ctx.sendMediaGroup() ? "✅" : "❌");
      console.log("sendLocation: ", ctx.sendLocation() ? "✅" : "❌");
      console.log("sendVenue: ", ctx.sendVenue() ? "✅" : "❌");
      console.log("sendContact: ", ctx.sendContact() ? "✅" : "❌");
      console.log("sendPoll: ", ctx.sendPoll() ? "✅" : "❌");
      console.log("stopPoll: ", ctx.stopPoll() ? "✅" : "❌");
      console.log("sendDice: ", ctx.sendDice() ? "✅" : "❌");
      console.log("sendChatAction: ", ctx.sendChatAction() ? "✅" : "❌");
      console.log(
        "setMessageReaction: ",
        ctx.setMessageReaction() ? "✅" : "❌"
      );
      console.log("deleteMessage: ", ctx.deleteMessage() ? "✅" : "❌");
      console.log("deleteMessages: ", ctx.deleteMessages() ? "✅" : "❌");
      console.log("editMessageText: ", ctx.editMessageText() ? "✅" : "❌");
      console.log(
        "editMessageCaption: ",
        ctx.editMessageCaption() ? "✅" : "❌"
      );
      console.log("editMessageMedia: ", ctx.editMessageMedia() ? "✅" : "❌");
      console.log(
        "editMessageReplyMarkup: ",
        ctx.editMessageReplyMarkup() ? "✅" : "❌"
      );
      console.log(
        "stopMessageLiveLocation: ",
        ctx.stopMessageLiveLocation() ? "✅" : "❌"
      );
      console.log(
        "editMessageLiveLocation: ",
        ctx.editMessageLiveLocation() ? "✅" : "❌"
      );
    })
    .handleUpdate({
      update_id: "***",
      message: { chat: { id: "123" }, from: { id: "123" } },
    });
}

function testChatManager() {
  new Telesun("<your bot token>")
    .use((ctx) => {
      Utils.apiRequest = function (botToken, method, objParam) {
        return { success: "true" };
      };

      console.log("banChatMember", ctx.banChatMember() ? "✅" : "❌");
      console.log("unbanChatMember", ctx.unbanChatMember() ? "✅" : "❌");
      console.log("restrictChatMember", ctx.restrictChatMember() ? "✅" : "❌");
      console.log("promoteChatMember", ctx.promoteChatMember() ? "✅" : "❌");
      console.log(
        "setChatAdministratorCustomTitle",
        ctx.setChatAdministratorCustomTitle() ? "✅" : "❌"
      );
      console.log("banChatSenderChat", ctx.banChatSenderChat() ? "✅" : "❌");
      console.log(
        "unbanChatSenderChat",
        ctx.unbanChatSenderChat() ? "✅" : "❌"
      );
      console.log("setChatPermissions", ctx.setChatPermissions() ? "✅" : "❌");
      console.log(
        "exportChatInviteLink",
        ctx.exportChatInviteLink() ? "✅" : "❌"
      );
      console.log(
        "createChatInviteLink",
        ctx.createChatInviteLink() ? "✅" : "❌"
      );
      console.log("editChatInviteLink", ctx.editChatInviteLink() ? "✅" : "❌");
      console.log(
        "revokeChatInviteLink",
        ctx.revokeChatInviteLink() ? "✅" : "❌"
      );
      console.log(
        "approveChatJoinRequest",
        ctx.approveChatJoinRequest() ? "✅" : "❌"
      );
      console.log(
        "declineChatJoinRequest",
        ctx.declineChatJoinRequest() ? "✅" : "❌"
      );
      console.log("setChatPhoto", ctx.setChatPhoto() ? "✅" : "❌");
      console.log("deleteChatPhoto", ctx.deleteChatPhoto() ? "✅" : "❌");
      console.log("setChatTitle", ctx.setChatTitle() ? "✅" : "❌");
      console.log("setChatDescription", ctx.setChatDescription() ? "✅" : "❌");
      console.log("pinChatMessage", ctx.pinChatMessage() ? "✅" : "❌");
      console.log("unpinChatMessage", ctx.unpinChatMessage() ? "✅" : "❌");
      console.log(
        "unpinAllChatMessages",
        ctx.unpinAllChatMessages() ? "✅" : "❌"
      );
      console.log("leaveChat", ctx.leaveChat() ? "✅" : "❌");
      console.log("getChat", ctx.getChat() ? "✅" : "❌");
      console.log(
        "getChatAdministrators",
        ctx.getChatAdministrators() ? "✅" : "❌"
      );
      console.log("getChatMemberCount", ctx.getChatMemberCount() ? "✅" : "❌");
      console.log("getChatMember", ctx.getChatMember() ? "✅" : "❌");
      console.log("setChatStickerSet", ctx.setChatStickerSet() ? "✅" : "❌");
      console.log(
        "deleteChatStickerSet",
        ctx.deleteChatStickerSet() ? "✅" : "❌"
      );
      console.log("setChatMenuButton", ctx.setChatMenuButton() ? "✅" : "❌");
      console.log("getChatMenuButton", ctx.getChatMenuButton() ? "✅" : "❌");
      console.log("getUserChatBoosts", ctx.getUserChatBoosts() ? "✅" : "❌");
    })
    .handleUpdate({ update_id: "***", message: {} });
}

function testPayementManager() {
  new Telesun("<your bot token>")
    .use((ctx) => {
      Utils.apiRequest = function (botToken, method, objParam) {
        return { success: "true" };
      };

      console.log("sendInvoice: ", ctx.sendInvoice() ? "✅" : "❌");
      console.log("createInvoiceLink: ", ctx.createInvoiceLink() ? "✅" : "❌");
      console.log(
        "answerShippingQuery: ",
        ctx.answerShippingQuery() ? "✅" : "❌"
      );
      console.log(
        "answerPreCheckoutQuery: ",
        ctx.answerPreCheckoutQuery() ? "✅" : "❌"
      );
    })
    .handleUpdate({ update_id: "***", message: {} });
}

function testGameManager() {
  new Telesun("<your bot token>")
    .use((ctx) => {
      Utils.apiRequest = function (botToken, method, objParam) {
        return { success: "true" };
      };

      console.log("sendGame: ", ctx.sendGame() ? "✅" : "❌");
      console.log("setGameScore: ", ctx.setGameScore() ? "✅" : "❌");
      console.log("getGameHighScores: ", ctx.getGameHighScores() ? "✅" : "❌");
    })
    .handleUpdate({ update_id: "***", message: {} });
}

function testFileManager() {
  new Telesun("<your bot token>")
    .use((ctx) => {
      Utils.apiRequest = function (botToken, method, objParam) {
        return { success: "true" };
      };

      console.log(
        "getUserProfilePhotos: ",
        ctx.getUserProfilePhotos() ? "✅" : "❌"
      );
      console.log("getFile: ", ctx.getFile() ? "✅" : "❌");
    })
    .handleUpdate({ update_id: "***", message: {} });
}

function testForumManager() {
  new Telesun("<your bot token>")
    .use((ctx) => {
      Utils.apiRequest = function (botToken, method, objParam) {
        return { success: "true" };
      };

      console.log(
        "getForumTopicIconStickers: ",
        ctx.getForumTopicIconStickers() ? "✅" : "❌"
      );
      console.log("createForumTopic: ", ctx.createForumTopic() ? "✅" : "❌");
      console.log("editForumTopic: ", ctx.editForumTopic() ? "✅" : "❌");
      console.log("closeForumTopic: ", ctx.closeForumTopic() ? "✅" : "❌");
      console.log("reopenForumTopic: ", ctx.reopenForumTopic() ? "✅" : "❌");
      console.log("deleteForumTopic: ", ctx.deleteForumTopic() ? "✅" : "❌");
      console.log(
        "unpinAllForumTopicMessages: ",
        ctx.unpinAllForumTopicMessages() ? "✅" : "❌"
      );
      console.log(
        "editGeneralForumTopic: ",
        ctx.editGeneralForumTopic() ? "✅" : "❌"
      );
      console.log(
        "closeGeneralForumTopic: ",
        ctx.closeGeneralForumTopic() ? "✅" : "❌"
      );
      console.log(
        "reopenGeneralForumTopic: ",
        ctx.reopenGeneralForumTopic() ? "✅" : "❌"
      );
      console.log(
        "hideGeneralForumTopic: ",
        ctx.hideGeneralForumTopic() ? "✅" : "❌"
      );
      console.log(
        "unhideGeneralForumTopic: ",
        ctx.unhideGeneralForumTopic() ? "✅" : "❌"
      );
      console.log(
        "unpinAllGeneralForumTopicMessages: ",
        ctx.unpinAllGeneralForumTopicMessages() ? "✅" : "❌"
      );
    })
    .handleUpdate({ update_id: "***", message: {} });
}

function testStickerManager() {
  new Telesun("<your bot token>")
    .use((ctx) => {
      Utils.apiRequest = function (botToken, method, objParam) {
        return { success: "true" };
      };

      console.log("sendSticker: ", ctx.sendSticker() ? "✅" : "❌");
      console.log("getStickerSet: ", ctx.getStickerSet() ? "✅" : "❌");
      console.log(
        "getCustomEmojiStickers: ",
        ctx.getCustomEmojiStickers() ? "✅" : "❌"
      );
      console.log("uploadStickerFile: ", ctx.uploadStickerFile() ? "✅" : "❌");
      console.log(
        "createNewStickerSet: ",
        ctx.createNewStickerSet() ? "✅" : "❌"
      );
      console.log("addStickerToSet: ", ctx.addStickerToSet() ? "✅" : "❌");
      console.log(
        "setStickerPositionInSet: ",
        ctx.setStickerPositionInSet() ? "✅" : "❌"
      );
      console.log(
        "deleteStickerFromSet: ",
        ctx.deleteStickerFromSet() ? "✅" : "❌"
      );
      console.log(
        "setStickerEmojiList: ",
        ctx.setStickerEmojiList() ? "✅" : "❌"
      );
      console.log(
        "setStickerKeywords: ",
        ctx.setStickerKeywords() ? "✅" : "❌"
      );
      console.log(
        "setStickerMaskPosition: ",
        ctx.setStickerMaskPosition() ? "✅" : "❌"
      );
      console.log(
        "setStickerSetTitle: ",
        ctx.setStickerSetTitle() ? "✅" : "❌"
      );
      console.log(
        "setStickerSetThumbnail: ",
        ctx.setStickerSetThumbnail() ? "✅" : "❌"
      );
      console.log(
        "setCustomEmojiStickerSetThumbnail: ",
        ctx.setCustomEmojiStickerSetThumbnail() ? "✅" : "❌"
      );
      console.log("deleteStickerSet: ", ctx.deleteStickerSet() ? "✅" : "❌");
    })
    .handleUpdate({ update_id: "***", message: {} });
}

function testPermanentSessionMemory() {
  new Telesun("<your bot token>")
    .permanentMemory(PropertiesService)
    .use((ctx) => {
      console.log(
        "setPSessionValue: ",
        ctx.setPSessionValue("key", "value") ? "✅" : "❌"
      );
      console.log(
        "getPSessionValue: ",
        ctx.getPSessionValue("key") ? "✅" : "❌"
      );
      console.log(
        "setPSessionValues: ",
        ctx.setPSessionValues({ name: "abdi", age: 22, id: 1 }) ? "✅" : "❌"
      );
      console.log("getPSession: ", ctx.getPSession() ? "✅" : "❌");
      console.log(
        "removePSessionValue: ",
        ctx.removePSessionValue("key") ? "✅" : "❌"
      );
      console.log("deletePSession: ", ctx.deletePSession() ? "✅" : "❌");
    })
    .handleUpdate({
      update_id: "***",
      message: { chat: { id: "123" }, from: { id: "123" } },
    });
}

function testPermanentCacheMemory() {
  new Telesun("<your bot token>")
    .permanentMemory(PropertiesService)
    .use((ctx) => {
      console.log(
        "setPCacheValue: ",
        ctx.setPCacheValue("key", "value") ? "✅" : "❌"
      );
      console.log("getPCacheValue: ", ctx.getPCacheValue("key") ? "✅" : "❌");
      console.log(
        "setPCacheValues: ",
        ctx.setPCacheValues({ name: "abdi", age: 22, id: 1 }) ? "✅" : "❌"
      );
      console.log("getPCache: ", ctx.getPCache() ? "✅" : "❌");
      console.log(
        "removePCacheValue: ",
        ctx.removePCacheValue("key") ? "✅" : "❌"
      );
      console.log("deletePCache: ", ctx.deletePCache() ? "✅" : "❌");
    })
    .handleUpdate({
      update_id: "***",
      message: { chat: { id: "123" }, from: { id: "123" } },
    });
}

function testTemporaryCacheMemory() {
  new Telesun("<your bot token>")
    .temporaryMemory(CacheService)
    .use((ctx) => {
      console.log("setTCacheValue: ", ctx.setTCacheValue(2, 1) ? "✅" : "❌");
      console.log("getTCacheValue: ", ctx.getTCacheValue(2) ? "✅" : "❌");

      console.log(
        "setTCacheValues: ",
        ctx.setTCacheValues({ name: "abdi", age: "22", id: "1" }) ? "✅" : "❌"
      );
      console.log(
        "getTCacheValues: ",
        ctx.getTCacheValues(["name", "age", "id"]) ? "✅" : "❌"
      );

      console.log(
        "removeTCacheValue: ",
        ctx.removeTCacheValue("key") ? "✅" : "❌"
      );
      console.log(
        "removeTCacheValues: ",
        ctx.removeTCacheValues(["name"]) ? "✅" : "❌"
      );
      console.log(
        "getTCacheValues: ",
        ctx.getTCacheValues(["age", "id"]) ? "✅" : "❌"
      );
    })
    .handleUpdate({
      update_id: "***",
      message: { chat: { id: "123" }, from: { id: "123" } },
    });
}

function testTemporarySessionMemory() {
  new Telesun("<your bot token>")
    .temporaryMemory(CacheService)
    .use((ctx) => {
      console.log(
        "setTSessionValue: ",
        ctx.setTSessionValue("key", "value") ? "✅" : "❌"
      );
      console.log(
        "getTSessionValue: ",
        ctx.getTSessionValue("key") ? "✅" : "❌"
      );
      console.log(
        "setTSessionValues: ",
        ctx.setTSessionValues({ name: "abdi", age: 22, id: 1 }) ? "✅" : "❌"
      );
      console.log("getTSession: ", ctx.getTSession() ? "✅" : "❌");
      console.log(
        "removeTSessionValue: ",
        ctx.removeTSessionValue("key") ? "✅" : "❌"
      );
      console.log("deleteTSession: ", ctx.deleteTSession() ? "✅" : "❌");
      console.log("setStage: ", ctx.setStage("stage1") ? "✅" : "❌");
      console.log("getStage: ", ctx.getStage() ? "✅" : "❌");
      console.log("clearStage: ", ctx.clearStage() ? "✅" : "❌");
    })
    .handleUpdate({
      update_id: "***",
      message: { chat: { id: "123" }, from: { id: "123" } },
    });
}

function testCallbackQueryManager() {
  new Telesun("<your bot token>")
    .use((ctx) => {
      Utils.apiRequest = function (botToken, method, objParam) {
        return { success: "true" };
      };
      console.log(
        "answerCallbackQuery: ",
        ctx.answerCallbackQuery() ? "✅" : "❌"
      );
    })
    .handleUpdate({
      update_id: "***",
      message: { chat: { id: "123" }, from: { id: "123" } },
    });
}

function testInlineQueryManager() {
  new Telesun("<your bot token>")
    .use((ctx) => {
      Utils.apiRequest = function (botToken, method, objParam) {
        return { success: "true" };
      };
      console.log("answerInlineQuery: ", ctx.answerInlineQuery() ? "✅" : "❌");
      console.log("answerWebAppQuery: ", ctx.answerWebAppQuery() ? "✅" : "❌");
    })
    .handleUpdate({
      update_id: "***",
      message: { chat: { id: "123" }, from: { id: "123" } },
    });
}

function testBotInfoManager() {
  new Telesun("<your bot token>")
    .use((ctx) => {
      Utils.apiRequest = function (botToken, method, objParam) {
        return { success: "true" };
      };

      console.log("getWebhookInfo: ", ctx.getWebhookInfo() ? "✅" : "❌");
      console.log("deleteMyCommands: ", ctx.deleteMyCommands() ? "✅" : "❌");
      console.log("setMyCommands: ", ctx.setMyCommands() ? "✅" : "❌");
      console.log("getMyCommands: ", ctx.getMyCommands() ? "✅" : "❌");
      console.log("setMyName: ", ctx.setMyName() ? "✅" : "❌");
      console.log("getMyName: ", ctx.getMyName() ? "✅" : "❌");
      console.log("setMyDescription: ", ctx.setMyDescription() ? "✅" : "❌");
      console.log("getMyDescription: ", ctx.getMyDescription() ? "✅" : "❌");
      console.log(
        "setMyShortDescription: ",
        ctx.setMyShortDescription() ? "✅" : "❌"
      );
      console.log(
        "getMyShortDescription: ",
        ctx.getMyShortDescription() ? "✅" : "❌"
      );
      console.log(
        "setMyDefaultAdministratorRights: ",
        ctx.setMyDefaultAdministratorRights() ? "✅" : "❌"
      );
      console.log(
        "getMyDefaultAdministratorRights: ",
        ctx.getMyDefaultAdministratorRights() ? "✅" : "❌"
      );
      console.log("getMe: ", ctx.getMe() ? "✅" : "❌");
      console.log("logOut: ", ctx.logOut() ? "✅" : "❌");
      console.log("close: ", ctx.close() ? "✅" : "❌");
    })
    .handleUpdate({
      update_id: "***",
      message: { chat: { id: "123" }, from: { id: "123" } },
    });
}

function testOnHandlers() {
  const telesun = new Telesun("<your bot token>");

  telesun.on("edited_message", (ctx, next) => {
    console.log("✅ edited_message update: ", ctx.editedMessageUpdate());
    next();
  });

  telesun.on("message", (ctx, next) => {
    console.log("✅ message update: ", ctx.messageUpdate());
    next();
  });

  telesun.on("channel_post", (ctx, next) => {
    console.log("✅ channel_post update: ", ctx.channelPostUpdate());
    next();
  });

  telesun.on("edited_channel_post", (ctx, next) => {
    console.log(
      "✅ edited_channel_post update: ",
      ctx.editedChannelPostUpdate()
    );
    next();
  });

  telesun.on("inline_query", (ctx, next) => {
    console.log("✅ inline_query update: ", ctx.inlineQueryUpdate());
    next();
  });

  telesun.on("chosen_inline_result", (ctx, next) => {
    console.log(
      "✅ chosen_inline_result update: ",
      ctx.chosenInlineResultUpdate()
    );
    next();
  });

  telesun.on("callback_query", (ctx, next) => {
    console.log("✅ callback_query update: ", ctx.callbackQueryUpdate());
    next();
  });

  telesun.on("pre_checkout_query", (ctx, next) => {
    console.log("✅ pre_checkout_query update: ", ctx.preCheckoutQueryUpdate());
    next();
  });

  telesun.on("shipping_query", (ctx, next) => {
    console.log("✅ shipping_query update: ", ctx.shippingQueryUpdate());
    next();
  });

  telesun.on("poll", (ctx, next) => {
    console.log("✅ poll update: ", ctx.pollUpdate());
    next();
  });

  telesun.on("chat_join_request", (ctx, next) => {
    console.log("✅ chat_join_request update: ", ctx.chatJoinRequestUpdate());
    next();
  });

  telesun.on("poll_answer", (ctx, next) => {
    console.log("✅ poll_answer update: ", ctx.pollAnswerUpdate());
    next();
  });

  telesun.on("my_chat_member", (ctx, next) => {
    console.log("✅ my_chat_member update: ", ctx.myChatMemberUpdate());
    next();
  });
  telesun.on("chat_member", (ctx, next) => {
    console.log("✅ chat_member update: ", ctx.chatMemberUpdate());
    next();
  });

  telesun.on("message_reaction", (ctx, next) => {
    console.log("✅ message_reaction update: ", ctx.messageReactionUpdate());
    next();
  });

  telesun.on("message_reaction_count", (ctx, next) => {
    console.log(
      "✅ message_reaction_count update: ",
      ctx.messageReactionCountUpdate()
    );
    next();
  });

  telesun.on("chat_boost", (ctx, next) => {
    console.log("✅ chat_boost update: ", ctx.chatBoostUpdate());
    next();
  });

  telesun.on("removed_chat_boost", (ctx, next) => {
    console.log("✅ removed_chat_boost update: ", ctx.removedChatBoostUpdate());
  });

  telesun.handleUpdate({ update_id: "***", message: {} });
  telesun.handleUpdate({ update_id: "***", edited_message: {} });
  telesun.handleUpdate({ update_id: "***", channel_post: {} });
  telesun.handleUpdate({ update_id: "***", edited_channel_post: {} });
  telesun.handleUpdate({ update_id: "***", my_chat_member: {} });
  telesun.handleUpdate({ update_id: "***", chat_member: {} });
  telesun.handleUpdate({ update_id: "***", inline_query: {} });
  telesun.handleUpdate({ update_id: "***", chosen_inline_result: {} });
  telesun.handleUpdate({ update_id: "***", callback_query: {} });
  telesun.handleUpdate({ update_id: "***", shipping_query: {} });
  telesun.handleUpdate({ update_id: "***", pre_checkout_query: {} });
  telesun.handleUpdate({ update_id: "***", poll: {} });
  telesun.handleUpdate({ update_id: "***", poll_answer: {} });
  telesun.handleUpdate({ update_id: "***", chat_join_request: {} });
  telesun.handleUpdate({ update_id: "***", message_reaction: {} });
  telesun.handleUpdate({ update_id: "***", message_reaction_count: {} });
  telesun.handleUpdate({ update_id: "***", chat_boost: {} });
  telesun.handleUpdate({ update_id: "***", removed_chat_boost: {} });
}

function testUpdateMethods(e) {
  const telesun = new Telesun("<your bot token>");

  telesun.use((ctx, next) => {
    console.log("updateType: ", ctx.updateType() ? "✅" : "❌");
    console.log("chat: ", ctx.chat() ? "✅" : "❌");
    console.log("getFrom: ", ctx.from() ? "✅" : "❌");
    console.log("getMessage: ", ctx.message() ? "✅" : "❌");
    console.log("chatId: ", ctx.chatId() ? "✅" : "❌");
    console.log("userId: ", ctx.userId() ? "✅" : "❌");
    console.log("messageId: ", ctx.messageId() ? "✅" : "❌");
  });

  telesun.handleUpdate({
    update_id: 1,
    message: {
      message_id: "message_id",
      chat: { id: "chat" },
      from: { id: "from" },
    },
  });
}

function testHandlers(e) {
  const telesun = new Telesun("<your bot token>").temporaryMemory(CacheService);

  telesun.use((ctx, next) => {
    console.log("------------------------------\n\n" + "✅ use handler called");
    ctx.setStage("phone1");
    next();
  });
  telesun.action("number", (ctx, next) => {
    console.log("✅ action handler called");
    next();
  });
  telesun.audio((ctx, next) => {
    console.log("✅ audio handler called");
    next();
  });
  telesun.command("start", (ctx, next) => {
    console.log("✅ command handler called");
    next();
  });
  telesun.commands((ctx, next) => {
    console.log("✅ commands handler called");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("✅ on handler called");
    next();
  });
  telesun.contact((ctx, next) => {
    console.log("✅ contact handler called");
    next();
  });
  telesun.start((ctx, next) => {
    console.log("✅ start handler called");
    next();
  });
  telesun.text((ctx, next) => {
    console.log("✅ text handler called");
    next();
  });
  telesun.hears("/start", (ctx, next) => {
    console.log("✅ hears handler called");
    next();
  });
  telesun.document((ctx, next) => {
    console.log("✅ document handler called");
    next();
  });
  telesun.photo((ctx, next) => {
    console.log("✅ photo handler called");
    next();
  });
  telesun.sticker((ctx, next) => {
    console.log("✅ sticker handler called");
    next();
  });
  telesun.video((ctx, next) => {
    console.log("✅ video handler called");
    next();
  });
  telesun.voice((ctx, next) => {
    console.log("✅ voice handler called");
    next();
  });
  telesun.stage("phone1", (ctx, next) => {
    console.log("✅ stage handler called");
    next();
  });

  telesun.help((ctx, next) => {
    console.log("✅ help handler called");
    next();
  });

  //calls audio handler
  telesun.handleUpdate({
    update_id: 1,
    callback_query: { data: "number", from: { id: 1 } },
    message: {
      audio: { file_id: "audio" },
      contact: { phone_number: "+2519***" },
      photo: { file_id: "photo" },
      document: { document_id: "mydoc" },
      sticker: { sticker_id: "mysticker" },
      video: { vid_id: "video" },
      voice: { voice_id: "voice" },
      text: "/start",
      from: { id: 1 },
    },
  });

  //calls /help handler
  telesun.handleUpdate({
    update_id: 1,
    message: { text: "/help", from: { id: 1 } },
  });
}

function testNextMiddleware(e) {
  const telesun = new Telesun("<your bot token>");

  telesun.start((ctx, next) => {
    console.log("M1");
    next();
  });
  telesun.start((ctx, next) => {
    console.log("M2");
    next();
  });
  telesun.text((ctx, next) => {
    console.log("M3");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M4");
    next();
  });
  telesun.start((ctx, next) => {
    console.log("M5");
    next();
  });
  telesun.start((ctx, next) => {
    console.log("M6");
    next();
  });
  telesun.text((ctx, next) => {
    console.log("M7");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M8");
    next();
  });
  telesun.start((ctx, next) => {
    console.log("M9");
    next();
  });
  telesun.start((ctx, next) => {
    console.log("M10");
    next();
  });
  telesun.text((ctx, next) => {
    console.log("M11");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M12");
    next();
  });
  telesun.start((ctx, next) => {
    console.log("M13");
    next();
  });
  telesun.start((ctx, next) => {
    console.log("M14");
    next();
  });
  telesun.text((ctx, next) => {
    console.log("M15");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M16");
    next();
  });
  telesun.start((ctx, next) => {
    console.log("M17");
    next();
  });
  telesun.start((ctx, next) => {
    console.log("M18");
    next();
  });
  telesun.text((ctx, next) => {
    console.log("M19");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M20");
    next();
  });
  telesun.start((ctx, next) => {
    console.log("M21");
    next();
  });
  telesun.start((ctx, next) => {
    console.log("M22");
    next();
  });
  telesun.text((ctx, next) => {
    console.log("M23");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M24");
    next();
  });
  telesun.text((ctx, next) => {
    console.log("M25");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M26");
    next();
  });
  telesun.start((ctx, next) => {
    console.log("M27");
    next();
  });
  telesun.start((ctx, next) => {
    console.log("M28");
    next();
  });
  telesun.text((ctx, next) => {
    console.log("M29");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M30");
    next();
  });
  telesun.start((ctx, next) => {
    console.log("M31");
    next();
  });
  telesun.start((ctx, next) => {
    console.log("M32");
    next();
  });
  telesun.text((ctx, next) => {
    console.log("M33");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M34");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M35");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M36");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M37");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M38");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M39");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M40");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M41");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M42");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M43");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M44");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M45");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M46");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M47");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M48");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M49");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M50");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M51");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M52");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M53");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M54");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M55");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M56");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M57");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M58");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M59");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M60");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M61");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M62");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M63");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M64");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M65");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M66");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M67");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M68");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M69");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M70");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M71");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M72");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M73");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M74");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M75");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M76");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M77");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M78");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M79");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M80");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M81");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M82");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M83");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M84");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M85");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M86");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M87");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M88");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M89");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M90");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M91");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M92");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M93");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M94");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M95");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M96");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M97");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M98");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M99");
    next();
  });
  telesun.on("message", (ctx, next) => {
    console.log("M100");
    next();
  });

  // return telesun.handleWebhook(e);
  // telesun.polling()
  telesun.handleUpdate({
    update_id: 1,
    message: {
      message_id: "message_id",
      chat: { id: "chat" },
      from: { id: "from" },
    },
  });
}

function testErrorHandlers(e) {
  const telesun = new Telesun("<your bot token>").temporaryMemory(CacheService);

  telesun.on("callback_query", (ctx) => {
    ctx.replyWithEditedMessage("#Edited");
  });

  telesun.on("message", (ctx, next) => {
    console.log("update: ", ctx.messageUpdate());
    ctx.reply("reply message");
    ctx.replyWithHtml("<b>this is reply</b>");
    ctx.replyWithMarkdown("*this is reply*");
    ctx.replyWithChatAction("typing");
    console.log("✅ use handler called");
  });

  telesun.use((ctx) => {
    ctx.reply("hello", {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Number",
              callback_data: "number",
            },
          ],
          [
            {
              text: "String",
              callback_data: "string",
            },
          ],
        ],
      },
    });
  });

  telesun.handleUpdate({
    update_id: 1,
    message: {
      message_id: "message_id",
      chat: { id: "chat" },
      from: { id: "from" },
    },
  });
}
