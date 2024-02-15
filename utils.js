class Utils {

  static handleSheetOperations(sheetManager) {
    return (sheetName) => {
      const sheetOperations = sheetManager.getOperations(sheetName);
      return new Proxy(sheetOperations, {
        get(target, methodProp, receiver) {
          return target[methodProp] || undefined;
        }
      });
    };
  }

  static findOperationInManagersAndConfigs(self, prop) {
    // Check in defaultManagers
    for (const manager of Object.values(self.defaultManagers)) {
      const operations = manager.getOperations ? manager.getOperations() : {};
      if (prop in operations) return operations[prop];
    }

    // Check in configs
    for (const configInstance of Object.values(self.configs)) {
      const operations = configInstance.getOperations ? configInstance.getOperations() : {};
      if (prop in operations) return operations[prop];
    }

    // Special handling for UpdateManager if needed
    if ('updateManager' in self.defaultManagers) {
      const updateManagerOperations = UpdateManager.getOperations ? UpdateManager.getOperations() : {};
      if (prop in updateManagerOperations) return updateManagerOperations[prop];
    }

    return undefined; // Method not found
  }

  //solving limtation set by using proxy,
  //that logging "ctx" always returns empty object({})
  static listAvailableMethods() {
    return {
      /** UpdateManager */
      update: () => { },
      messageUpdate: () => { },
      editedMessageUpdate: () => { },
      channelPostUpdate: () => { },
      editedChannelPostUpdate: () => { },
      inlineQueryUpdate: () => { },
      chosenInlineResultUpdate: () => { },
      callbackQueryUpdate: () => { },
      shippingQueryUpdate: () => { },
      preCheckoutQueryUpdate: () => { },
      pollUpdate: () => { },
      pollAnswerUpdate: () => { },
      myChatMemberUpdate: () => { },
      chatMemberUpdate: () => { },
      chatJoinRequestUpdate: () => { },
      messageReactionUpdate: () => { },
      messageReactionCountUpdate: () => { },
      chatBoostUpdate: () => { },
      removedChatBoostUpdate: () => { },
      updateType: () => { },
      chat: () => { },
      from: () => { },
      message: () => { },
      chatId: () => { },
      userId: () => { },
      messageId: () => { },

      /** CallbackQueryManager */
      answerCallbackQuery: () => { },

      /** InlineQueryManager */
      answerInlineQuery: () => { },
      answerWebAppQuery: () => { },

      /** BotInfoManager */
      getWebhookInfo: () => { },
      deleteMyCommands: () => { },
      setMyCommands: () => { },
      getMyCommands: () => { },
      setMyName: () => { },
      getMyName: () => { },
      setMyDescription: () => { },
      getMyDescription: () => { },
      setMyShortDescription: () => { },
      getMyShortDescription: () => { },
      setMyDefaultAdministratorRights: () => { },
      getMyDefaultAdministratorRights: () => { },
      getMe: () => { },
      logOut: () => { },
      close: () => { },

      /** StickerManager */
      sendSticker: () => { },
      getStickerSet: () => { },
      getCustomEmojiStickers: () => { },
      uploadStickerFile: () => { },
      createNewStickerSet: () => { },
      addStickerToSet: () => { },
      setStickerPositionInSet: () => { },
      deleteStickerFromSet: () => { },
      setStickerEmojiList: () => { },
      setStickerKeywords: () => { },
      setStickerMaskPosition: () => { },
      setStickerSetTitle: () => { },
      setStickerSetThumbnail: () => { },
      setCustomEmojiStickerSetThumbnail: () => { },
      deleteStickerSet: () => { },

      /** ForumManager */
      getForumTopicIconStickers: () => { },
      createForumTopic: () => { },
      editForumTopic: () => { },
      closeForumTopic: () => { },
      reopenForumTopic: () => { },
      deleteForumTopic: () => { },
      unpinAllForumTopicMessages: () => { },
      editGeneralForumTopic: () => { },
      closeGeneralForumTopic: () => { },
      reopenGeneralForumTopic: () => { },
      hideGeneralForumTopic: () => { },
      unhideGeneralForumTopic: () => { },
      unpinAllGeneralForumTopicMessages: () => { },

      /** FileManager */
      getUserProfilePhotos: () => { },
      getFile: () => { },

      /** GameManager */
      sendGame: () => { },
      setGameScore: () => { },
      getGameHighScores: () => { },

      /** PayementManager */
      sendInvoice: () => { },
      createInvoiceLink: () => { },
      answerShippingQuery: () => { },
      answerPreCheckoutQuery: () => { },

      /** ChatManager */
      banChatMember: () => { },
      unbanChatMember: () => { },
      restrictChatMember: () => { },
      promoteChatMember: () => { },
      setChatAdministratorCustomTitle: () => { },
      banChatSenderChat: () => { },
      unbanChatSenderChat: () => { },
      setChatPermissions: () => { },
      exportChatInviteLink: () => { },
      createChatInviteLink: () => { },
      editChatInviteLink: () => { },
      revokeChatInviteLink: () => { },
      approveChatJoinRequest: () => { },
      declineChatJoinRequest: () => { },
      setChatPhoto: () => { },
      deleteChatPhoto: () => { },
      setChatTitle: () => { },
      setChatDescription: () => { },
      pinChatMessage: () => { },
      unpinChatMessage: () => { },
      unpinAllChatMessages: () => { },
      leaveChat: () => { },
      getChat: () => { },
      getChatAdministrators: () => { },
      getChatMemberCount: () => { },
      getChatMember: () => { },
      setChatStickerSet: () => { },
      deleteChatStickerSet: () => { },
      setChatMenuButton: () => { },
      getChatMenuButton: () => { },
      getUserChatBoosts: () => { },


      /** MessageManager */
      reply: () => { },
      replyWithHtml: () => { },
      replyWithMarkdown: () => { },
      replyWithPhoto: () => { },
      replyWithChatAction: () => { },
      replyWithEditedMessage: () => { },

      sendMessage: () => { },
      forwardMessage: () => { },
      forwardMessages: () => { },
      copyMessage: () => { },
      copyMessages: () => { },
      sendPhoto: () => { },
      sendAudio: () => { },
      sendDocument: () => { },
      sendVideo: () => { },
      sendAnimation: () => { },
      sendVoice: () => { },
      sendVideoNote: () => { },
      sendMediaGroup: () => { },
      sendLocation: () => { },
      sendVenue: () => { },
      sendContact: () => { },
      sendPoll: () => { },
      stopPoll: () => { },
      sendDice: () => { },
      sendChatAction: () => { },
      setMessageReaction: () => { },
      deleteMessage: () => { },
      deleteMessages: () => { },
      editMessageText: () => { },
      editMessageCaption: () => { },
      editMessageMedia: () => { },
      editMessageReplyMarkup: () => { },
      stopMessageLiveLocation: () => { },
      editMessageLiveLocation: () => { },

      /** SheetManager */
      appendRow: (arrayOfValues) => sheet.appendRow(arrayOfValues),
      clear: () => sheet.clear(),
      clearByRange: (row, col, numCol = 1, numRow = 1) => sheet.getRange(row, col, numCol, numRow).clear(),
      clearValue: (row, col) => sheet.getRange(row, col).clear(),
      findOne: (query) => sheet.createTextFinder(query).findNext(),
      findAll: (query) => sheet.createTextFinder(query).findAll(),
      deleteColumn: (colNum) => sheet.deleteColumn(colNum),
      deleteColumns: (colIndex, howMany) => sheet.deleteColumns(colIndex, howMany),
      deleteRow: (rowNum) => sheet.deleteRow(rowNum),
      deleteRows: (rowIndex, howMany) => sheet.deleteRows(rowIndex, howMany),
      getSheetData: () => sheet.getDataRange().getValues(),
      getLastColumn: () => sheet.getLastColumn(),
      getLastRow: () => sheet.getLastRow(),
      insertColumnAfter: (indexCol) => sheet.insertColumnAfter(indexCol),
      insertColumnBefore: (indexCol) => sheet.insertColumnBefore(indexCol),
      insertColumns: (indexCol, howMany) => sheet.insertColumns(indexCol, howMany),
      insertColumnsAfter: (afterPosition, howMany) => sheet.insertColumnsAfter(afterPosition, howMany),
      insertColumnsBefore: (beforePosition, howMany) => sheet.insertColumnsBefore(beforePosition, howMany),
      insertRowAfter: (afterPosition) => sheet.insertRowAfter(afterPosition),
      insertRowBefore: (beforePosition) => sheet.insertRowBefore(beforePosition),
      insertRows: (rowIndex, numRows) => sheet.insertRows(rowIndex, numRows),
      insertRowsAfter: (afterPosition, howMany) => sheet.insertRowsAfter(afterPosition, howMany),
      insertRowsBefore: (beforePosition, howMany) => sheet.insertRowsBefore(beforePosition, howMany),
      moveColumns: (range, destinationIndex) => sheet.moveColumns(sheet.getRange(range), destinationIndex),
      moveRows: (range, destinationIndex) => sheet.moveRows(sheet.getRange(range), destinationIndex),
      setName: (name) => sheet.setName(name),
      sortByColumn: (columnPosition, sort = true) => sheet.sort(columnPosition, sort),
      saveOne: (value, row, col, numRow = 1, numCol = 1) => sheet.getRange(row, col, numRow, numCol).setValue(value),
      saveMany: (arrayOfValues, row, col, numRow = 1, numCol = 1) => sheet.getRange(row, col, numRow, numCol).setValues(arrayOfValues),
      getValue: (row, col) => sheet.getRange(row, col).getValue(),
      getValues: (row, col, numRow = 1, numCol = 1) => sheet.getRange(row, col, numRow, numCol).getValues(),


      /** TemporarySessionManager */
      getTSession: () => self.getTSession(),
      getTSessionValue: (key) => self.getTSessionValue(key),
      setTSessionValue: (key, value, time) => self.setTSessionValue(key, value, time),
      setTSessionValues: (keyObj, time) => self.setTSessionValues(keyObj, time),
      removeTSessionValue: (key) => self.removeTSessionValue(key),
      deleteTSession: () => self.deleteTSession(),

      /** PermanentSessionManager */
      getPSession: () => self.getPSession(),
      getPSessionValue: (key) => self.getPSessionValue(key),
      setPSessionValue: (key, value) => self.setPSessionValue(key, value),
      setPSessionValues: (keyObj) => self.setPSessionValues(keyObj),
      removePSessionValue: (key) => self.removePSessionValue(key),
      deletePSession: () => self.deletePSession(),

      /** PermanentCacheManager */
      getPCacheValue: (key) => self.getPCacheValue(key),
      getPCache: () => self.getPCache(),
      setPCacheValue: (key, value) => self.setPCacheValue(key, value),
      setPCacheValues: (objectOfKeyValuePairs) => self.setPCacheValues(objectOfKeyValuePairs),
      removePCacheValue: (key) => self.removePCacheValue(key),
      deletePCache: () => self.deletePCache(),


      /** TemporaryCacheManager */
      getTCacheValue: (key) => self.getTCacheValue(key),
      setTCacheValue: (key, value, time) => self.setTCacheValue((key, value, time)),
      getTCacheValues: (arrayOfKeys) => self.getTCacheValues(arrayOfKeys),
      setTCacheValues: (objectOfKeyValuePairs, time) => self.setTCacheValues(objectOfKeyValuePairs, time),
      removeTCacheValue: (key) => self.removeTCacheValue(key),
      removeTCacheValues: (arrayOfKeys) => self.removeTCacheValues(arrayOfKeys),

      /** StageManager */
      getStage: () => { },
      clearStage: () => { },
      setStage: () => { },
    };
  }


  static validateSpreadSheetId(spreadSheetId) {
    try {
      return SpreadsheetApp.openById(spreadSheetId);
    } catch (error) {
      throw new TelesunError("INVALID_SPREADSHEET_ID", ERRORS.INVALID_SPREADSHEET_ID, error)
    }
  }


  static validateTemporaryMemoryInstance(instance) {
    if (instance) { return instance; }
    else {
      throw new TelesunError("TEMPORARY_MEMORY_INSTANCE_NULL",
        ERRORS.TEMPORARY_MEMORY_INSTANCE_NULL);
    }
  }


  static validatePermanentMemoryInstance(instance) {
    if (instance) { return instance }
    else {
      throw new TelesunError("PERMANENT_MEMORY_INSTANCE_NULL",
        ERRORS.PERMANENT_MEMORY_INSTANCE_NULL);
    }
  }

  static generateErrorResponse(message) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'status': 'error', 'message': message }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  static validateToken(token) {
    if (typeof token === "string" && token.trim() !== "") {
      return token
    } else {
      throw new TelesunError("INVALID_BOT_TOKEN", ERRORS.INVALID_BOT_TOKEN);
    }
  }

  static mergeObjects(defaults, additionalParams) {
    return additionalParams ? { ...defaults, ...additionalParams } : defaults;
  }

  static apiRequest(botToken, method, objParam) {
    // Ensure that 'param' is an object
    if (!botToken || !method) {
      throw new TelesunError("INVALID_REQUEST_PARAMETERS", ERRORS.INVALID_REQUEST_PARAMETERS);
    }

    // Prepare the payload for the API request
    const payload = {
      method: method,
      ...objParam
    };

    // Prepare the options for the API request
    const options = {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payload)
    };

    // Perform the API request
    const apiUrl = CONFIG.BASE_TELEGRAM_API_URL + botToken
    const response = UrlFetchApp.fetch(apiUrl + "/", options);

    // Get the content text from the HTTP response
    return JSON.parse(response.getContentText());
  }

  static validateRequiredParams(param, paramName) {
    if (param === undefined || param === null) {
      throw new TelesunError("PARAM_REQUIRED", `${paramName} is required.`);
    }
  }


  static validateAppUrl(server) {
    var appUrl;

    if (server) { appUrl = CONFIG[server] }
    else { appUrl = CONFIG.GAS }


    if (appUrl) { return appUrl }
    throw new TelesunError("MIDDLEWARE_SERVER_NOT_FOUND", ERRORS.MIDDLEWARE_SERVER_NOT_FOUND);

  }

  static validateScriptId() {
    const scriptId = ScriptApp.getScriptId();
    if (scriptId) { return scriptId }
    throw new TelesunError("UNABLE_TO_GET_SCRIPT_ID", ERRORS.UNABLE_TO_GET_SCRIPT_ID);
  }

  static validateOAuthToken() {
    const userAccessToken = ScriptApp.getOAuthToken();
    if (userAccessToken) { return userAccessToken }
    throw new TelesunError("ACCESS_TOKEN_NOT_FOUND", ERRORS.ACCESS_TOKEN_NOT_FOUND);
  }

  static getHookUrl(server, userAccessToken, scriptId) {
    const appUrl = CONFIG.HOOK_BASE_URL + `${scriptId}:run`
    return `${server}?access_token=${userAccessToken}&url=${appUrl}`;
  }


  static registerHandler(handlers, type, data, middleware) {
    if (typeof middleware !== 'function') {
      throw new TelesunError("MIDDLEWARE_MUST_BE_FUNCTION", ERRORS.MIDDLEWARE_MUST_BE_FUNCTION);
    }

    const needDataMethods = ['command', 'on', 'action', 'stage', 'hears'];
    if (needDataMethods.includes(type) && data === undefined) {
      throw new TelesunError("MISSING_ARGUMENT", `Failed to handle type "${type}". Argument 2 is required.`);
    }

    handlers.push({ type, data, middleware });
  }


  // Static method to ensure the provided service instance has all the expected methods
  static ensureValidService(instance, expectedMethods, serviceName) {
    expectedMethods.forEach(method => {
      if (typeof instance[method] !== 'function') {
        throw new TelesunError("MEMORY_CONFIG_ERROR", `Invalid ${serviceName} instance: Missing method ${method}`);
      }
    });
  }


  // Define conditions for each handler type
  static get handlerConditions() {
    return {

      'action': function (ctx, action) { return ctx.callback_query && this.matchAction(ctx.callback_query.data, action) },
      // 'stage': function (ctx, stage) { return stage && this.matchAction(, stage) },
      'start': function (ctx) { return this.checkCommand(ctx, 'start') },
      'help': function (ctx) { return this.checkCommand(ctx, 'help') },
      'commands': function (ctx) { return ctx && ctx.message && ctx.message.text && ctx.message.text.startsWith("/") },
      'command': function (ctx, command) { return this.checkCommand(ctx, command) },
      'contact': function (ctx) { return this.checkContentType(ctx, 'contact') },
      'photo': function (ctx) { return this.checkContentType(ctx, 'photo') },
      'video': function (ctx) { return this.checkContentType(ctx, 'video') },
      'voice': function (ctx) { return this.checkContentType(ctx, 'voice') },
      'audio': function (ctx) { return this.checkContentType(ctx, 'audio') },
      'document': function (ctx) { return this.checkContentType(ctx, 'document') },
      'sticker': function (ctx) { return this.checkContentType(ctx, 'sticker') },
      'hears': function (ctx, text) { return ctx.message && this.matchAction(ctx.message.text, text) },
      'text': function (ctx) { return this.checkText(ctx) },

      checkText(ctx) {
        return ctx.message && ctx.message.text
      },


      // Function to check if text starts with a command or array of commands or matches a regex
      checkCommand(ctx, command) {
        if (!ctx.message || !ctx.message.text) {
          return false;
        }
        const messageText = ctx.message.text.substring(1);
        if (Array.isArray(command)) {
          return command.some(cmd => typeof cmd === 'string' ? messageText.startsWith(cmd) : cmd instanceof RegExp && cmd.test(messageText));
        } else if (command instanceof RegExp) {
          return command.test(messageText);
        } else {
          return messageText.startsWith(command);
        }
      },


      checkStageMatches(ctx, stage) {
        return ctx.stage === stage
      },

      // Function to match action (string, array, RegExp)
      matchAction(ctxAction, action) {
        if (typeof action === 'string') {
          return action === ctxAction;
        } else if (Array.isArray(action)) {
          return action.includes(ctxAction);
        } else if (action instanceof RegExp) {
          return action.test(ctxAction);
        }
        return false;
      },


      // Function to check if text starts with given text, any text in an array, or matches a regex
      checkTextStartsWith(ctx, text) {
        if (!ctx.message || !ctx.message.text) {
          return false;
        }
        const messageText = ctx.message.text;
        if (Array.isArray(text)) {
          return text.some(txt => typeof txt === 'string' ? messageText.startsWith(txt) : txt instanceof RegExp && txt.test(messageText));
        } else if (text instanceof RegExp) {
          return text.test(messageText);
        } else {
          return messageText.startsWith(text);
        }
      },

      // Function to check content type presence
      checkContentType(ctx, type) {
        return ctx.message && ctx.message[type];
      }
    }
  }

}
