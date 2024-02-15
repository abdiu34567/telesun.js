const TEST_APP_CONFIG = {

  run() {
    this.testConfigObject()
  },


  testConfigObject() {
    // Test if CONFIG object is defined
    assertNotNull(CONFIG, 'CONFIG object should be defined.');

    // Test if BASE_TELEGRAM_API_URL is correctly set
    assertEqual(CONFIG.BASE_TELEGRAM_API_URL, "https://api.telegram.org/bot", 'BASE_TELEGRAM_API_URL should be set correctly.');

    // Test if ALLOWED_UPDATES array contains the expected updates
    const expectedUpdates = ["message", "edited_message", "channel_post", "edited_channel_post",
      "inline_query", "chosen_inline_result", "callback_query",
      "shipping_query", "pre_checkout_query", "poll",
      "poll_answer", "my_chat_member", "chat_member",
      "chat_join_request", "message_reaction", "message_reaction_count",
      "chat_boost", "removed_chat_boost"];

    assertArrayEquals(CONFIG.ALLOWED_UPDATES, expectedUpdates, 'ALLOWED_UPDATES should contain the expected updates.');

    Logger.log('✅ All tests for CONFIG object passed!');
  }

}



