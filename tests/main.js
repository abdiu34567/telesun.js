function Run_Tests() {


  /**
   * Telesun Core class Test ✅
   */
  TEST_TELESUN.run()


  /**
   * AppConfig class test
   */
  TEST_APP_CONFIG.run()

  /**
   * ConfigManager methods Test ✅
   */
  TEST_UPDATE_MANAGER.run()


  /**
   * CallbackQueryManager Test
   */
  TEST_CALLBACK_QUERY_UPDATE.run()


  /**
   * InlineQueryManager Test
   */
  TEST_INLINE_QUERY_MANAGER.run()


  /**
   * BotInfoManager Test
   */
  TEST_BOT_INFO_MANAGER.run()


  /**
   * StickerManager Test
   */
  TEST_STICKER_MANAGER.run()

  TEST_FORUM_MANAGER.run()

  TEST_FILE_MANAGER.run()

  TEST_GAME_MANAGER.run()

  TEST_PAYEMENT_MANAGER.run()

  TEST_CHAT_MANAGER.run()

  TEST_REPLY_MANAGER.run()

  TEST_MESSAGE_MANAGER.run()

  TEST_SHEET_MANAGER.run()

  TEST_PERMANENT_SESSION_MANAGER.run()

  TEST_TEMPORARY_SESSION_VALUE.run()

  TEST_PERMANENT_CACHE_MANAGER.run()

  TEST_TEMPORARY_CACHE_MANAGER.run()

  TEST_UTILS.run()

}
