const TEST_UPDATE_MANAGER = {


  /**
   * Run all the methods in this class
   */
  run() {
    this.testUpdateManager()
  },


  testUpdateManager() {
    var update = {
      update_id: '***',
      message: {
        message_id: 'message_id',
        chat: { id: 'chat_id' },
        from: { id: 'from_id' },
      },
      edited_message: { id: "edited_message" },
      channel_post: { id: "channel_post" },
      edited_channel_post: { id: "edited_channel_post" },
      my_chat_member: { id: "my_chat_member" },
      chat_member: { id: "chat_member" },
      inline_query: { id: "inline_query" },
      chosen_inline_result: { id: "chosen_inline_result" },
      callback_query: { id: "callback_query" },
      shipping_query: { id: "shipping_query" },
      pre_checkout_query: { id: "pre_checkout_query" },
      poll: { id: "poll" },
      poll_answer: { id: "poll_answer" },
      my_chat_member: { id: "my_chat_member" },
      chat_join_request: { id: "chat_join_request" },
      message_reaction: { id: "message_reaction" },
      message_reaction_count: { id: "message_reaction_count" },
      chat_boost: { id: "chat_boost" },
      removed_chat_boost: { id: "removed_chat_boost" }
    }

    UpdateManager.setUpdate(update)
    var updateManager = UpdateManager;

    // Test messageUpdate
    var messageUpdate = updateManager.messageUpdate();
    assertEqual(messageUpdate.chat.id, 'chat_id', 'chat_id should be correctly extracted from messageUpdate.');

    // Test messageUpdate
    var editedMessageUpdate = updateManager.editedMessageUpdate();
    assertEqual(editedMessageUpdate.id, 'edited_message', 'edited_message should be correctly extracted from editedMessageUpdate.');

    // Test messageUpdate
    var channelPostUpdate = updateManager.channelPostUpdate();
    assertEqual(channelPostUpdate.id, 'channel_post', 'channel_post should be correctly extracted from channelPostUpdate.');

    // Test messageUpdate
    var editedChannelPostUpdate = updateManager.editedChannelPostUpdate();
    assertEqual(editedChannelPostUpdate.id, 'edited_channel_post', 'edited_channel_post should be correctly extracted from editedChannelPostUpdate.');

    // Test messageUpdate
    var myChatMemberUpdate = updateManager.myChatMemberUpdate();
    assertEqual(myChatMemberUpdate.id, 'my_chat_member', 'my_chat_member should be correctly extracted from myChatMemberUpdate.');

    // Test messageUpdate
    var chatMemberUpdate = updateManager.chatMemberUpdate();
    assertEqual(chatMemberUpdate.id, 'chat_member', 'chat_member should be correctly extracted from chatMemberUpdate.');

    // Test inlineQueryUpdate
    var inlineQueryUpdate = updateManager.inlineQueryUpdate();
    assertEqual(inlineQueryUpdate.id, 'inline_query', 'inline_query should be correctly extracted from inlineQueryUpdate.');

    // Test chosenInlineResultUpdate
    var chosenInlineResultUpdate = updateManager.chosenInlineResultUpdate();
    assertEqual(chosenInlineResultUpdate.id, 'chosen_inline_result', 'chosen_inline_result should be correctly extracted from chosenInlineResultUpdate.');

    // Test callbackQueryUpdate
    var callbackQueryUpdate = updateManager.callbackQueryUpdate();
    assertEqual(callbackQueryUpdate.id, 'callback_query', 'callback_query should be correctly extracted from callbackQueryUpdate.');


    // Test shippingQueryUpdate
    var shippingQueryUpdate = updateManager.shippingQueryUpdate();
    assertEqual(shippingQueryUpdate.id, 'shipping_query', 'shipping_query should be correctly extracted from shippingQueryUpdate.');

    // Test preCheckoutQueryUpdate
    var preCheckoutQueryUpdate = updateManager.preCheckoutQueryUpdate();
    assertEqual(preCheckoutQueryUpdate.id, 'pre_checkout_query', 'pre_checkout_query should be correctly extracted from preCheckoutQueryUpdate.');

    // Test pollUpdate
    var pollUpdate = updateManager.pollUpdate();
    assertEqual(pollUpdate.id, 'poll', 'poll should be correctly extracted from pollUpdate.');

    // Test pollAnswerUpdate
    var pollAnswerUpdate = updateManager.pollAnswerUpdate();
    assertEqual(pollAnswerUpdate.id, 'poll_answer', 'poll_answer should be correctly extracted from pollAnswerUpdate.');


    // Test chatJoinRequestUpdate
    var chatJoinRequestUpdate = updateManager.chatJoinRequestUpdate();
    assertEqual(chatJoinRequestUpdate.id, 'chat_join_request', 'chat_join_request should be correctly extracted from chatJoinRequestUpdate.');


    // Test messageReactionUpdate
    var messageReactionUpdate = updateManager.messageReactionUpdate();
    assertEqual(messageReactionUpdate.id, 'message_reaction', 'message_reaction should be correctly extracted from messageReactionUpdate.');

    // Test messageReactionCountUpdate
    var messageReactionCountUpdate = updateManager.messageReactionCountUpdate();
    assertEqual(messageReactionCountUpdate.id, 'message_reaction_count', 'message_reaction_count should be correctly extracted from messageReactionCountUpdate.');

    // Test chatBoostUpdate
    var chatBoostUpdate = updateManager.chatBoostUpdate();
    assertEqual(chatBoostUpdate.id, 'chat_boost', 'chat_boost should be correctly extracted from chatBoostUpdate.');

    // Test removedChatBoostUpdate
    var removedChatBoostUpdate = updateManager.removedChatBoostUpdate();
    assertEqual(removedChatBoostUpdate.id, 'removed_chat_boost', 'removed_chat_boost should be correctly extracted from removedChatBoostUpdate.');


    // Test getChat
    var chat = updateManager.chat();
    assertEqual(chat.id, 'chat_id', 'getChat should return the correct chat.');

    // Test get from
    var from = updateManager.from();
    assertEqual(from.id, 'from_id', 'from should return the correct from.');

    // Test message
    var message = updateManager.message();
    assertEqual(message.message_id, 'message_id', 'message should return the correct message.');

    // Test chatId
    var chatId = updateManager.chatId();
    assertEqual(chatId, 'chat_id', 'chatId should return the correct chat ID.');

    // Test userId
    var userId = updateManager.userId();
    assertEqual(userId, 'from_id', 'userId should return the correct user ID.');

    // Test messageId
    var messageId = updateManager.messageId();
    assertEqual(messageId, 'message_id', 'messageId should return the correct message ID.');


    Logger.log('✅ All tests for UpdateManager passed!');
  }



}






