function Run_Tests() {
  /**
   * Temporary Caching Tests 
   */
  TEST_CACHE.saveCache();
  TEST_CACHE.getCache();
  TEST_CACHE.removeCache();
  TEST_CACHE.setCacheValues();
  TEST_CACHE.getCacheValues();
  TEST_CACHE.removeCaches();


  /**
   * Permanent Caching Tests 
   */
  TEST_CACHE.saveCache("p");
  TEST_CACHE.getCache("p");
  TEST_CACHE.removeCache("p");
  TEST_CACHE.setCacheValues("p");
  TEST_CACHE.getCacheValues("p");
  TEST_CACHE.removeCaches("p");

  /**
   * Temporary Session Tests
   */
  TEST_SESSION.getUserId()
  TEST_SESSION.setSessionValue()
  TEST_SESSION.getSession()
  TEST_SESSION.getSessionValue()
  TEST_SESSION.setSessionValues()
  TEST_SESSION.removeSessionValue()
  TEST_SESSION.deleteSession()

  /**
   * Permanent Session Tests
   */
  TEST_SESSION.getUserId('p')
  TEST_SESSION.setSessionValue('p')
  TEST_SESSION.getSession('p')
  TEST_SESSION.getSessionValue('p')
  TEST_SESSION.setSessionValues('p')
  TEST_SESSION.removeSessionValue('p')
  TEST_SESSION.deleteSession('p')

  /**
   * Update Types Test
   */
  UPDATE_TYPES.deleteWebhook()
  UPDATE_TYPES.getUpdates()
  UPDATE_TYPES.setWebHook()
  UPDATE_TYPES.getWebhookInfo()

  /**
   * Test Bot Methods
   */
  TEST_BOT_METHODS.methodUse()
  TEST_BOT_METHODS.methodStage()
  TEST_BOT_METHODS.methodStage_Array()
  TEST_BOT_METHODS.methodMessage()
  TEST_BOT_METHODS.methodEdited_message()
  TEST_BOT_METHODS.methodChannel_post()
  TEST_BOT_METHODS.methodEdited_channel_post()
  TEST_BOT_METHODS.methodChosen_inline_result()
  TEST_BOT_METHODS.methodShipping_query()
  TEST_BOT_METHODS.methodPre_checkout_query()
  TEST_BOT_METHODS.methodPoll()
  TEST_BOT_METHODS.methodPoll_answer()
  TEST_BOT_METHODS.methodMy_chat_member()
  TEST_BOT_METHODS.methodChat_member()
  TEST_BOT_METHODS.methodChat_join_request()
  TEST_BOT_METHODS.methodStart()
  TEST_BOT_METHODS.methodHelp()
  TEST_BOT_METHODS.methodCbquery()
  TEST_BOT_METHODS.methodAction()
  TEST_BOT_METHODS.methodAction_Array()
  TEST_BOT_METHODS.methodAction_regEx()
  TEST_BOT_METHODS.methodHears()
  TEST_BOT_METHODS.methodHears_Array()
  TEST_BOT_METHODS.methodHears_regEx()
  TEST_BOT_METHODS.methodContact()
  TEST_BOT_METHODS.methodInline_query()
  TEST_BOT_METHODS.methodPhoto()
  TEST_BOT_METHODS.methodVoice()
  TEST_BOT_METHODS.methodDocument()
  TEST_BOT_METHODS.methodAudio()
  TEST_BOT_METHODS.methodText()
  TEST_BOT_METHODS.methodStiker()
  TEST_BOT_METHODS.methodCommands()
  TEST_BOT_METHODS.methodCommand()
  TEST_BOT_METHODS.methodCommand_Array()
  TEST_BOT_METHODS.methodCommand_regEx()

  /**
   * Sheet DB Tests
   */
  TEST_SHEETDB.sheetConnect()
  TEST_SHEETDB.appendRow()
  TEST_SHEETDB.clearFullSheet()
  TEST_SHEETDB.clearByRange()
  TEST_SHEETDB.clearValue()
  TEST_SHEETDB.findOne()
  TEST_SHEETDB.findAll()
  TEST_SHEETDB.deleteColumn()
  TEST_SHEETDB.deleteColumns()
  TEST_SHEETDB.deleteRow()
  TEST_SHEETDB.deleteRows()
  TEST_SHEETDB.getSheetData()
  TEST_SHEETDB.getLastColumn()
  TEST_SHEETDB.getLastRow()
  TEST_SHEETDB.insertColumnAfter()
  TEST_SHEETDB.insertColumnBefore()
  TEST_SHEETDB.insertColumns()
  TEST_SHEETDB.insertColumnsAfter()
  TEST_SHEETDB.insertColumnsBefore()
  TEST_SHEETDB.insertRowAfter()
  TEST_SHEETDB.insertRowBefore()
  TEST_SHEETDB.insertRows()
  TEST_SHEETDB.insertRowsAfter()
  TEST_SHEETDB.insertRowsBefore()
  TEST_SHEETDB.moveColumns()
  TEST_SHEETDB.moveRows()
  TEST_SHEETDB.setName()
  TEST_SHEETDB.sortByColumn()
  TEST_SHEETDB.saveOne()
  TEST_SHEETDB.saveMany()
  TEST_SHEETDB.getValue()
  TEST_SHEETDB.getValues()
}
