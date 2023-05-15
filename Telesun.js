
/**
 * Initializes the Telesun object with the provided bot token and event object.
 *
 * `Example:`
 * ```js
 * const apiResponse = Telesun('your-bot-token');
 * console.log(apiResponse);
 * ```
 * 
 * @param {string} botToken - The token for the Telegram bot.
 * @param {Object} e - The event object.
 * @returns {Object} - The API object.
 * @throws {Error} - Throws an error if the token is unauthorized or invalid.
 */
function Telesun(botToken, e) {

  if (botToken && typeof botToken === "string") {

    Constants.TELEGRAM_API_URL = Constants.TELEGRAM_API_URL + botToken;

    if (e && e.postData && e.postData.contents) { Context.api = JSON.parse(e.postData.contents) }
    else { Context.api = GetLatestUpdate_(botToken) }

    return Context.api;

  } else { throw new Error("Unauthorized, Invalid Token"); }

}

/** 
 * @typedef {object} ctx
 * @property {Object} message
 * @property {Object} chat
 * @property {Object} from
 * @property {boolean} getStage
 * @property {Object} reply
 * @property {Object} replyWithHtml
 * @property {Object} replyWithMarkdown
 * @property {Object} replyWithPhoto
 * @property {Object} replyWithChatAction
 * @property {Object} replyWithEditedMessage
 * @property {Object} getStage
 * @property {Object} clearStage
 * @property {Object} setStage
 * @property {Object} getMe
 * @property {Object} logOut
 * @property {Object} close
 * @property {Object} sendMessage
 * @property {Object} forwardMessage
 * @property {Object} copyMessage
 * @property {Object} sendPhoto
 * @property {Object} sendAudio
 * @property {Object} sendDocument
 * @property {Object} sendVideo
 * @property {Object} sendAnimation
 * @property {Object} sendVoice
 * @property {Object} sendVideoNote
 * @property {Object} sendMediaGroup
 * @property {Object} sendLocation
 * @property {Object} editMessageLiveLocation
 * @property {Object} sendGame
 * @property {Object} setGameScore
 * @property {Object} getGameHighScores
 * @property {Object} answerInlineQuery
 * @property {Object} answerWebAppQuery
 * @property {Object} setMyCommands
 * @property {Object} stopMessageLiveLocation
 * @property {Object} sendVenue
 * @property {Object} sendContact
 * @property {Object} sendPoll
 * @property {Object} sendDice
 * @property {Object} sendChatAction
 * @property {Object} getUserProfilePhotos
 * @property {Object} getFile
 * @property {Object} banChatMember
 * @property {Object} unbanChatMember
 * @property {Object} restrictChatMember
 * @property {Object} promoteChatMember
 * @property {Object} setChatAdministratorCustomTitle
 * @property {Object} banChatSenderChat
 * @property {Object} unbanChatSenderChat
 * @property {Object} setChatPermissions
 * @property {Object} exportChatInviteLink
 * @property {Object} createChatInviteLink
 * @property {Object} editChatInviteLink
 * @property {Object} revokeChatInviteLink
 * @property {Object} approveChatJoinRequest
 * @property {Object} declineChatJoinRequest
 * @property {Object} setChatPhoto
 * @property {Object} deleteChatPhoto
 * @property {Object} setChatTitle
 * @property {Object} setChatDescription
 * @property {Object} pinChatMessage
 * @property {Object} unpinChatMessage
 * @property {Object} unpinAllChatMessages
 * @property {Object} leaveChat
 * @property {Object} getChat
 * @property {Object} getChatAdministrators
 * @property {Object} getChatMemberCount
 * @property {Object} getChatMember
 * @property {Object} setChatStickerSet
 * @property {Object} deleteChatStickerSet
 * @property {Object} answerCallbackQuery
 * @property {Object} deleteMyCommands
 * @property {Object} getMyCommands
 * @property {Object} setChatMenuButton
 * @property {Object} getChatMenuButton
 * @property {Object} setMyDefaultAdministratorRights
 * @property {Object} getMyDefaultAdministratorRights
 * @property {Object} sendInvoice
 * @property {Object} createInvoiceLink
 * @property {Object} answerShippingQuery
 * @property {Object} answerPreCheckoutQuery
 * @property {Object} sendSticker
 * @property {Object} getStickerSet
 * @property {Object} getCustomEmojiStickers
 * @property {Object} uploadStickerFile
 * @property {Object} createNewStickerSet
 * @property {Object} addStickerToSet
 * @property {Object} setStickerPositionInSet
 * @property {Object} deleteStickerFromSet
 * @property {Object} setStickerSetThumb
 * @property {Object} editMessageText
 * @property {Object} editMessageCaption
 * @property {Object} editMessageMedia
 * @property {Object} editMessageReplyMarkup
 * @property {Object} deleteMessage
 */

/**
 * 
 * This callback is displayed as a global member.
 * @callback ctxfunc
 * @param {ctx} ctx - global context
 */


/**
 * Executes in every cases.
 *
 * `Example:`
 * ```js
 * Telesun.Use((ctx,next)=>{
 *   console.log(ctx)
 * });
 * ```
 * 
 * @param {ctxfunc} callback - The callback function to be executed.
 * @returns {any} - The result of the callback function execution.
 */
Telesun.Use = function (callback) {
  if (!Constants.NEXT_MIDDLEWARE) { return };
  Middleware_(callback);
}

/**
 * Executes the provided middleware function only if the current stage matches the specified stage(s).
 * @param {string|number|string[]|number[]} stage - The stage(s) to check against the current stage.
 * @param {function} middleware - The middleware function to execute.
 */
Telesun.Stage = function (Stage, callback) {
  let _Stage = Context.getStage();
  if (!Constants.NEXT_MIDDLEWARE || !Context.api || !_Stage) { return };

  if (Array.isArray(Stage)) {
    if (!Stage.includes(_Stage)) { return }
  } else if (Stage !== _Stage) { return }

  Middleware_(callback);
}

/**
 * Executes the provided callback function if middleware and the required API properties are available for an `message`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Message = function (callback) {
  if (!Constants.NEXT_MIDDLEWARE || !Context.api || !Context.api.message) { return };
  Middleware_(callback);
}

/**
 * Executes the provided callback function if middleware and the required API properties are available for an `edited_message`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Edited_message = function (callback) {
  if (!Constants.NEXT_MIDDLEWARE || !Context.api || !Context.api.edited_message) { return };
  Middleware_(callback);
}

/**
 * Executes the provided callback function if middleware and the required API properties are available for `channel_post`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Channel_post = function (callback) {
  if (!Constants.NEXT_MIDDLEWARE || !Context.api || !Context.api.channel_post) { return };
  Middleware_(callback);
}

/**
 * Executes the provided callback function if middleware and the required API properties are available for `edited_channel_post`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Edited_channel_post = function (callback) {
  if (!Constants.NEXT_MIDDLEWARE || !Context.api || !Context.api.edited_channel_post) { return };
  Middleware_(callback);
}

/**
 * Executes the provided callback function if middleware and the required API properties are available for `chosen_inline_result`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Chosen_inline_result = function (callback) {
  if (!Constants.NEXT_MIDDLEWARE || !Context.api || !Context.api.chosen_inline_result) { return };
  Middleware_(callback);
}

/**
 * Executes the provided callback function if middleware and the required API properties are available for `shipping_query`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Shipping_query = function (callback) {
  if (!Constants.NEXT_MIDDLEWARE || !Context.api || !Context.api.shipping_query) { return };
  Middleware_(callback);
}

/**
 * Executes the provided callback function if middleware and the required API properties are available for `pre_checkout_query`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Pre_checkout_query = function (callback) {
  if (!Constants.NEXT_MIDDLEWARE || !Context.api || !Context.api.pre_checkout_query) { return };
  Middleware_(callback);
}


/**
 * Executes the provided callback function if middleware and the required API properties are available for `poll`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Poll = function (callback) {
  if (!Constants.NEXT_MIDDLEWARE || !Context.api || !Context.api.poll) { return };
  Middleware_(callback);
}

/**
 * Executes the provided callback function if middleware and the required API properties are available for `poll_answer`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Poll_answer = function (callback) {
  if (!Constants.NEXT_MIDDLEWARE || !Context.api || !Context.api.poll_answer) { return };
  Middleware_(callback);
}

/**
 * Executes the provided callback function if middleware and the required API properties are available for `my_chat_member`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.My_chat_member = function (callback) {
  if (!Constants.NEXT_MIDDLEWARE || !Context.api || !Context.api.my_chat_member) { return };
  Middleware_(callback);
}

/**
 * Executes the provided callback function if middleware and the required API properties are available for `chat_member`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Chat_member = function (callback) {
  if (!Constants.NEXT_MIDDLEWARE || !Context.api || !Context.api.chat_member) { return };
  Middleware_(callback);
}

/**
 * Executes the provided callback function if middleware and the required API properties are available for `chat_join_request`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Chat_join_request = function (callback) {
  if (!Constants.NEXT_MIDDLEWARE || !Context.api || !Context.api.chat_join_request) { return };
  Middleware_(callback);
}

/**
 * Executes the provided callback function if middleware and the required API properties are available for `text=/start`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Start = function (callback) {
  if (
    !Constants.NEXT_MIDDLEWARE ||
    !Context.api ||
    !Context.api.message ||
    Context.api.message.text !== "/start"
  ) { return };

  Middleware_(callback);
}

/**
 * Executes the provided callback function if middleware and the required API properties are available for `text=/help`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Help = function (callback) {
  if (
    !Constants.NEXT_MIDDLEWARE ||
    !Context.api ||
    !Context.api.message ||
    Context.api.message.text !== "/help"
  ) { return };
  Middleware_(callback);
}

/**
 * Executes the provided callback function if middleware and the required API properties are available for `callback_query`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Cbquery = function (callback) {
  if (!Constants.NEXT_MIDDLEWARE || !Context.api || !Context.api.callback_query) { return };
  Middleware_(callback);
}

/**
 * Executes the provided callback function based on the specified value and the presence of a callback_query.
 *
 * @param {string|Object} Value - The value or pattern to match against the callback_query data.
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Action = function (Value, callback) {
  if (!Constants.NEXT_MIDDLEWARE || !Context.api || !Context.api.callback_query) { return };
  let _Data = Context.api.callback_query.data;

  if (typeof Value === "string" || typeof Value === "object") {
    if (typeof Value === "string" && !_Data.includes(Value)) { return }
    else if (typeof Value === "object") {
      try {
        /** Array && string elements */
        if (Array.isArray(Value)) {
          if (!Value.includes(_Data)) { return };
        } else if (!Value.test(_Data)) { return };

        /** Object && regex */
      } catch (err) {
        throw new Error(
          "--- ❌ Input Value Can Not Include RegEx or object---"
        );
      }
    }

    Middleware_(callback);
  }
}

/**
 * Executes the provided callback function if the message text matches the specified value.
 *
 * @param {string|Object} Text - The text or pattern to match against the message text.
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Hears = function (Text, callback) {
  if (
    !Constants.NEXT_MIDDLEWARE ||
    !Context.api ||
    !Context.api.message ||
    !Context.api.message.text
  )
    return;

  let _Text = Context.api.message.text;

  if (typeof Text === "string" || typeof Text === "object") {

    if (typeof Text === "string") {
      if (_Text !== Text) { return };
    } else if (typeof Text === "object") {
      try {
        if (Array.isArray(Text)) {
          if (!Text.includes(_Text)) { return };
        } else if (!Text.test(_Text)) { return };
      } catch (err) {
        throw new Error(
          "--- ❌ Input Value Can Not Include RegEx or object---"
        );
      }
    }

    Middleware_(callback);
  }
}

/**
 * Executes the provided callback function if middleware and the required API properties are available for `contact`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Contact = function (callback) {
  if (!Constants.NEXT_MIDDLEWARE || !Context.api || !Context.api.message || !Context.api.message.contact) { return };
  Middleware_(callback);
}

/**
 * Executes the provided callback function if middleware and the required API properties are available for `inline_query`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Inline_query = function (callback) {
  if (!Constants.NEXT_MIDDLEWARE || !Context.api || !Context.api.inline_query) { return };
  Middleware_(callback);
}

/**
 * Executes the provided callback function if middleware and the required API properties are available for `photo`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Photo = function (callback) {
  if (!Constants.NEXT_MIDDLEWARE || !Context.api || !Context.api.message || !Context.api.message.photo) { return };
  Middleware_(callback);
}

/**
 * Executes the provided callback function if middleware and the required API properties are available for `video`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Video = function (callback) {
  if (!Constants.NEXT_MIDDLEWARE || !Context.api || !Context.api.message || !Context.api.message.video) { return };
  Middleware_(callback);
}

/**
 * Executes the provided callback function if middleware and the required API properties are available for `voice`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Voice = function (callback) {
  if (!Constants.NEXT_MIDDLEWARE || !Context.api || !Context.api.message || !Context.api.message.voice) { return };
  Middleware_(callback);
}

/**
 * Executes the provided callback function if middleware and the required API properties are available for `document`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Document = function (callback) {
  if (
    !Constants.NEXT_MIDDLEWARE ||
    !Context.api ||
    !Context.api.message ||
    !Context.api.message.document
  ) { return };

  Middleware_(callback);
}

/**
 * Executes the provided callback function if middleware and the required API properties are available for `audio`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Audio = function (callback) {
  if (!Constants.NEXT_MIDDLEWARE || !Context.api || !Context.api.message || !Context.api.message.audio) { return };
  Middleware_(callback);
}

/**
 * Executes the provided callback function if middleware and the required API properties are available for any `text`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Text = function (callback) {
  if (!Constants.NEXT_MIDDLEWARE || !Context.api || !Context.api.message || !Context.api.message.text) { return };
  Middleware_(callback);
}

/**
 * Executes the provided callback function if middleware and the required API properties are available for `sticker`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Stiker = function (callback) {
  if (!Constants.NEXT_MIDDLEWARE || !Context.api || !Context.api.message || !Context.api.message.sticker) { return };
  Middleware_(callback);
}

/**
 * Executes the provided callback function if middleware and the required API properties are available for any `bot_command`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Commands = function (callback) {
  if (
    !Constants.NEXT_MIDDLEWARE ||
    !Context.api ||
    !Context.api.message ||
    !Context.api.message.entities ||
    Context.api.message.entities[0].type !== "bot_command"
  ) { return };
  Middleware_(callback);
}

/**
 * Executes the provided callback function if middleware and the required API properties are available for specified `bot_command`.
 *
 * @param {Function} callback - The callback function to be executed.
 */
Telesun.Command = function (Command, callback) {
  if (
    !Constants.NEXT_MIDDLEWARE ||
    !Context.api ||
    !Context.api.message ||
    !Context.api.message.entities ||
    Context.api.message.entities[0].type !== "bot_command"
  ) { return };

  if (typeof Command == "string" || typeof Command == "object") {
    let _Text = Context.api.message.text.slice(1);

    /**check if command matched up*/
    if (typeof Command === "string") {
      if (_Text !== Command) { return };
    } else if (typeof Command === "object") {
      try {

        if (Array.isArray(Command)) {
          if (!Command.includes(_Text)) { return };
        } else if (!Command.test(_Text)) { return };


      } catch (err) {

        throw new Error("--- ❌ Input Value Can Not Include RegEx or object---");

      }
    }

    /** Allow func.. to run */
    Middleware_(callback);
  }
}
