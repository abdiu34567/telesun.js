/**
 * TypeScript Definitions for Telesun Library
 * ==============================================================
 * These type definitions are designed to provide enhanced code completion and
 * IntelliSense support within the Google Apps Script environment. They adhere
 * to the limitations and conventions of Google Apps Script to ensure a seamless
 * development experience.
 *
 * Important Notes:
 * - The types are structured to complement the unique characteristics of Google
 *   Apps Script. Users familiar with TypeScript and Google Apps Script will find
 *   these types intuitive and helpful for developing robust applications.
 * - Modifications to these types should be made cautiously. Deep understanding
 *   of both the Telesun library's API and Google Apps Script's capabilities is
 *   essential to maintain the integrity and usefulness of these definitions.
 *
 * Contributions:
 * Contributions to improve or extend these type definitions are highly welcome.
 * If you have suggestions or improvements, please feel free to submit a pull
 * request or open an issue on the project's GitHub repository. Your input is
 * valuable in making Telesun more accessible and enjoyable for the developer
 * community.
 *
 * Credits:
 * These type definitions were created by `Abd Urgessa` to enhance the development
 * experience with the Telesun library in Google Apps Script. Special thanks to
 * everyone who contributes to refining and expanding these types.
 *
 * ==============================================================================
 * Unless you have a good understanding of the Telesun API and the limitations
 * imposed by Google Apps Script, it is recommended not to modify the types
 * provided here. This ensures that you can take full advantage of the library's
 * capabilities without encountering unexpected issues.
 */

/**
 * @typedef {Object} Telesun
 * @property {function(string): Telesun} connectToSpreadSheet Connects to a Google Spreadsheet using its ID. The string parameter is the `spreadsheet ID`.
 * @property {function(Object): Telesun} temporaryMemory Configures temporary memory for the bot, including cache and session.
 * @property {function(Object): Telesun} permanentMemory Configures permanent memory for the bot, including cache and session.
 * @property {function(Update): Telesun} handleUpdate Handles incoming updates from Telegram.
 * @property {function(function(ctx, next): void)): Telesun} use Registers a middleware function to be used by the bot.
 *
 * @property {function(UpdateType, function(ctx, next): void): Telesun} on Registers a middleware for a specific update type. The first parameter is one of [`message`, `edited_message`, `channel_post`, `edited_channel_post`, `inline_query`, `chosen_inline_result`, `callback_query`, `shipping_query`, `pre_checkout_query`, `poll`, `poll_answer`, `my_chat_member`, `chat_member`, `chat_join_request`, `message_reaction`, `message_reaction_count`, `chat_boost`, `removed_chat_boost`].
 *
 * @property {function(string|string[]|RegExp, function(ctx, next): void)): Telesun} action Registers a middleware for a specific action.
 * @property {function(string|string[]|RegExp, function(ctx, next): void)): Telesun} stage Registers a middleware for a specific stage.
 * @property {function(function(ctx, next): void)): Telesun} start Registers a start command middleware.
 * @property {function(function(ctx, next): void)): Telesun} help Registers a help command middleware.
 * @property {function(string|string[]|RegExp, function(ctx, next): void)): Telesun} hears Registers a middleware that triggers on matching text.
 * @property {function(function(ctx, next): void)): Telesun} contact Registers a middleware for contact updates.
 * @property {function(function(ctx, next): void)): Telesun} photo Registers a middleware for photo updates.
 * @property {function(function(ctx, next): void)): Telesun} video Registers a middleware for video updates.
 * @property {function(function(ctx, next): void)): Telesun} voice Registers a middleware for voice message updates.
 * @property {function(function(ctx, next): void)): Telesun} document Registers a middleware for document updates.
 * @property {function(function(ctx, next): void)): Telesun} audio Registers a middleware for audio updates.
 * @property {function(function(ctx, next): void)): Telesun} text Registers a middleware for text message updates.
 * @property {function(function(ctx, next): void)): Telesun} sticker Registers a middleware for sticker updates.
 * @property {function(function(ctx, next): void)): Telesun} commands Registers a middleware for any command.
 * @property {function(string|string[]|RegExp, function(ctx, next): void)): Telesun} command Registers a middleware for a specific command.
 *
 * @property {function(Object, UpdateConfig): void} handleWebhook Handles webhook updates.
 *
 * @property {function({
 *   sleep:1000,
 *   timeout:60
 * }): void} longPolling Initiates long polling.
 *
 * @property {function({
 *   limit: 100,
 *   timeout: 60
 * }): void} polling Initiates simple polling.
 *
 * @property {function(Object, {
 *     certificate:InputFile,
 *     ip_address:string,
 *     max_connections:number,
 *     drop_pending_updates:string[],
 *     secret_token:string,
 *     server:Server
 * }): void} devHook Sets up a development webhook.
 *
 * @property {function({
 *     url:string
 *     certificate:InputFile,
 *     ip_address:string,
 *     max_connections:number,
 *     drop_pending_updates:string[],
 *     secret_token:string,
 * }): Object} setWebhook Configures the webhook for the bot.
 *
 * @property {function({ drop_pending_updates:boolean }): Object} deleteWebhook Deletes the configured webhook.
 */

/**
 * Update types for the 'on' method.
 * @typedef {"message" | "edited_message" | "channel_post" | "edited_channel_post" | "inline_query" | "chosen_inline_result" | "callback_query" | "shipping_query" | "pre_checkout_query" | "poll" | "poll_answer" | "my_chat_member" | "chat_member" | "chat_join_request" | "message_reaction" | "message_reaction_count" | "chat_boost" | "removed_chat_boost"} UpdateType
 */

/**
 * Formatting options.
 * @typedef {"HTML" | "MarkdownV2"} Format
 */

/**
 * config options for devHook.
 * @typedef {"webhook" | "polling"} UpdateConfig
 */

/**
 * server config options for devHook.
 * @typedef {"GAS" | "VERCEL" |"RENDER"} Server
 */

/**
 * @typedef {Object} Update
 * @property{Message} [message] - New incoming message of any kind - text, photo, sticker, etc.
 * @property{Message} [edited_message] - Message edit notification for known messages.
 * @property{Message} [channel_post] - New incoming channel post of any kind - text, photo, sticker, etc.
 * @property{Message} [edited_channel_post] - Channel post edit notification for known posts.
 * @property{MessageReactionUpdated}[message_reaction] - User changed a message reaction; requires bot as admin.
 * @property{MessageReactionCountUpdated}[message_reaction_count] - Grouped anonymous message reaction changes.
 * @property{InlineQuery}[inline_query] - New incoming inline query
 * @property{ChosenInlineResult}[chosen_inline_result] - User's choice from an inline query sent to chat.
 * @property{CallbackQuery}[callback_query] - New incoming callback query.
 * @property{ShippingQuery}[shipping_query] - New incoming shipping query. Only for invoices with flexible price.
 * @property{PreCheckoutQuery}[pre_checkout_query] - New incoming pre-checkout query. Contains full information about checkout.
 * @property{Poll}[poll] - Notification of new poll state; for stopped polls and those sent by the bot.
 * @property{PollAnswer}[poll_answer] - User changed their vote in a non-anonymous poll sent by the bot.
 * @property{ChatMemberUpdated}[my_chat_member] - Bot's chat member status updated in a chat.
 * @property{ChatMemberUpdated}[chat_member] - Chat member's status updated; requires bot admin.
 * @property{ChatJoinRequest}[chat_join_request] - Chat join request sent; requires bot's "can_invite_users" right.
 * @property{ChatBoostUpdated}[chat_boost] - Chat boost added or changed; requires bot admin.
 * @property{ChatBoostRemoved}[removed_chat_boost] - Chat boost removed; requires bot admin.
 *
 */

/**
 * @typedef {Object} ctx
 * @property {function(): Update} update - incoming update.
 * @property {function(): Message} messageUpdate - New incoming message of any kind - text, photo, sticker, etc.
 * @property {function(): Message} editedMessageUpdate - Message edit notification for known messages.
 * @property {function(): Message} channelPostUpdate - New incoming channel post of any kind - text, photo, sticker, etc.
 * @property {function(): Message} editedChannelPostUpdate - Channel post edit notification for known posts.
 * @property {function(): MessageReactionUpdated} messageReactionUpdate - User changed a message reaction; requires bot as admin.
 * @property {function(): MessageReactionCountUpdated} messageReactionCountUpdate - Grouped anonymous message reaction changes.
 * @property {function(): InlineQuery} inlineQueryUpdate - New incoming inline query
 * @property {function(): ChosenInlineResult} chosenInlineResultUpdate - User's choice from an inline query sent to chat.
 * @property {function(): CallbackQuery} callbackQueryUpdate - New incoming callback query
 * @property {function(): ShippingQuery} shippingQueryUpdate - New incoming shipping query. Only for invoices with flexible price
 * @property {function(): PreCheckoutQuery} preCheckoutQueryUpdate - New incoming pre-checkout query. Contains full information about checkout.
 * @property {function(): Poll} pollUpdate - Notification of new poll state; for stopped polls and those sent by the bot.
 * @property {function(): PollAnswer} pollAnswerUpdate - User changed their vote in a non-anonymous poll sent by the bot.
 * @property {function(): ChatMemberUpdated} myChatMemberUpdate - Bot's chat member status updated in a chat.
 * @property {function(): ChatMemberUpdated} chatMemberUpdate - Chat member's status updated; requires bot admin.
 * @property {function(): ChatJoinRequest} chatJoinRequestUpdate - Chat join request sent; requires bot's "can_invite_users" right.
 * @property {function(): ChatBoostUpdated} chatBoostUpdate - Chat boost added or changed; requires bot admin.
 * @property {function(): ChatBoostRemoved} removedChatBoostUpdate - Chat boost removed; requires bot admin.
 * @property {function(): string} updateType - get update type.
 * @property {function(): Chat} chat - get chat info.
 * @property {function(): From} from - get user info chatting with bot.
 * @property {function(): Message} message - get message content.
 * @property {function(): string} chatId - gets chat id.
 * @property {function(): string} userId - gets user id.
 * @property {function(): number} messageId - gets message id.
 * @property {function(): User} getMe
 * @property {function(): boolean} logOut
 * @property {function(): boolean} close
 * @property {function(): WebhookInfo} getWebhookInfo
 * @property {SheetMethod} sheet - Method to access sheet operations by sheet name.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_thread_id?: number,
 *   text: string,
 *   parse_mode?: Format,
 *   entities?: MessageEntity[],
 *   link_preview_options?: LinkPreviewOptions,
 *   disable_notification?: boolean,
 *   protect_content?: boolean,
 *   reply_parameters?: ReplyParameters,
 *   reply_markup?: (InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)
 * }): Message} sendMessage Sends a message to a chat. The parameters include chat ID, message text, formatting options, and more.
 *
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_thread_id?: number,
 *   from_chat_id: (number|string),
 *   disable_notification?: boolean,
 *   protect_content?: boolean,
 *   message_id: number
 * }): Message} forwardMessage
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_thread_id?: number,
 *   from_chat_id: (number|string),
 *   message_ids: number[],
 *   disable_notification?: boolean,
 *   protect_content?: boolean
 * }): MessageId[]} forwardMessages - Forwards multiple messages.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_thread_id?: number,
 *   from_chat_id: (number|string),
 *   message_id: number,
 *   caption?: string,
 *   parse_mode?: Format,
 *   caption_entities?: MessageEntity[],
 *   disable_notification?: boolean,
 *   protect_content?: boolean,
 *   reply_parameters?: ReplyParameters,
 *   reply_markup?: (InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)
 * }): MessageId} copyMessage - Copies a message.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_thread_id?: number,
 *   from_chat_id: (number|string),
 *   message_ids: number[],
 *   disable_notification?: boolean,
 *   protect_content?: boolean,
 *   remove_caption?: boolean
 * }): MessageId[]} copyMessages - Copies messages of any kind.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_thread_id?: number,
 *   photo: (InputFile|string),
 *   caption?: string,
 *   parse_mode?: Format,
 *   caption_entities?: MessageEntity[],
 *   has_spoiler?: boolean,
 *   disable_notification?: boolean,
 *   protect_content?: boolean,
 *   reply_parameters?: ReplyParameters,
 *   reply_markup?: (InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)
 * }): Message} sendPhoto - Sends photos.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_thread_id?: number,
 *   audio: (InputFile|string),
 *   caption?: string,
 *   parse_mode?: Format,
 *   caption_entities?: MessageEntity[],
 *   duration?: number,
 *   performer?: string,
 *   title?: string,
 *   thumbnail?: (InputFile|string),
 *   disable_notification?: boolean,
 *   protect_content?: boolean,
 *   reply_parameters?: ReplyParameters,
 *   reply_markup?: (InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)
 * }): Message} sendAudio - Sends an audio file.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_thread_id?: number,
 *   document: (InputFile|string),
 *   thumbnail?: (InputFile|string),
 *   caption?: string,
 *   parse_mode?: Format,
 *   caption_entities?: MessageEntity[],
 *   disable_content_type_detection?: boolean,
 *   disable_notification?: boolean,
 *   protect_content?: boolean,
 *   reply_parameters?: ReplyParameters,
 *   reply_markup?: (InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)
 * }): Message} sendDocument - Sends a general file.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_thread_id?: number,
 *   video: (InputFile|string),
 *   duration?: number,
 *   width?: number,
 *   height?: number,
 *   thumbnail?: (InputFile|string),
 *   caption?: string,
 *   parse_mode?: Format,
 *   caption_entities?: MessageEntity[],
 *   has_spoiler?: boolean,
 *   supports_streaming?: boolean,
 *   disable_notification?: boolean,
 *   protect_content?: boolean,
 *   reply_parameters?: ReplyParameters,
 *   reply_markup?: (InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)
 * }): Message} sendVideo - Sends a video file.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_thread_id?: number,
 *   animation: (InputFile|string),
 *   duration?: number,
 *   width?: number,
 *   height?: number,
 *   thumbnail?: (InputFile|string),
 *   caption?: string,
 *   parse_mode?: Format,
 *   caption_entities?: MessageEntity[],
 *   has_spoiler?: boolean,
 *   disable_notification?: boolean,
 *   protect_content?: boolean,
 *   reply_parameters?: ReplyParameters,
 *   reply_markup?: (InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)
 * }): Message} sendAnimation - Sends an animation file.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_thread_id?: number,
 *   voice: (InputFile|string),
 *   caption?: string,
 *   parse_mode?: Format,
 *   caption_entities?: MessageEntity[],
 *   duration?: number,
 *   disable_notification?: boolean,
 *   protect_content?: boolean,
 *   reply_parameters?: ReplyParameters,
 *   reply_markup?: (InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)
 * }): Message} sendVoice - Sends an audio file as a voice message.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_thread_id?: number,
 *   video_note: (InputFile|string),
 *   duration?: number, length?: number,
 *   thumbnail?: (InputFile|string),
 *   disable_notification?: boolean,
 *   protect_content?: boolean,
 *   reply_parameters?: ReplyParameters,
 *   reply_markup?: (InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)
 * }): Message} sendVideoNote - Sends a video message.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_thread_id?: number,
 *   media: (InputMediaAudio|InputMediaDocument|InputMediaPhoto|InputMediaVideo)[],
 *   disable_notification?: boolean,
 *   protect_content?: boolean,
 *   reply_parameters?: ReplyParameters
 * }): Message[]} sendMediaGroup - Sends a group of photos, videos, documents or audios as an album.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_thread_id?: number,
 *   latitude: number,
 *   longitude: number,
 *   horizontal_accuracy?: number,
 *   live_period?: number,
 *   heading?: number,
 *   proximity_alert_radius?: number,
 *   disable_notification?: boolean,
 *   protect_content?: boolean,
 *   reply_parameters?: ReplyParameters,
 *   reply_markup?: (InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)
 * }): Message} sendLocation - Sends point on the map.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_thread_id?: number,
 *   latitude: number,
 *   longitude: number,
 *   title: string,
 *   address: string,
 *   foursquare_id?: string,
 *   foursquare_type?: string,
 *   google_place_id?: string,
 *   google_place_type?: string,
 *   disable_notification?: boolean,
 *   protect_content?: boolean,
 *   reply_parameters?: ReplyParameters,
 *   reply_markup?: (InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)
 * }): Message} sendVenue - Sends information about a venue.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_thread_id?: number,
 *   phone_number: string,
 *   first_name: string,
 *   last_name?: string,
 *   vcard?: string,
 *   disable_notification?: boolean,
 *   protect_content?: boolean,
 *   reply_parameters?: ReplyParameters,
 *   reply_markup?: (InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)
 * }): Message} sendContact - Sends phone contacts.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_thread_id?: number,
 *   question: string,
 *   options: string[],
 *   is_anonymous?: boolean,
 *   type?: string,
 *   allows_multiple_answers?: boolean,
 *   correct_option_id?: number,
 *   explanation?: string,
 *   explanation_parse_mode?: Format,
 *   explanation_entities?: MessageEntity[],
 *   open_period?: number,
 *   close_date?: number,
 *   is_closed?: boolean,
 *   disable_notification?: boolean,
 *   protect_content?: boolean,
 *   reply_parameters?: ReplyParameters, reply_markup?: (InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)
 * }): Message} sendPoll - Sends a native poll.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_thread_id?: number,
 *   emoji?: string,
 *   disable_notification?: boolean,
 *   protect_content?: boolean,
 *   reply_parameters?: ReplyParameters,
 *   reply_markup?: (InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)
 * }): Message} sendDice - Sends an animated emoji that will display a random value.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_thread_id?: number,
 *   action: string
 * }): boolean} sendChatAction - Tells the user that something is happening on the bot's side.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_id: number,
 *   reaction?: ReactionType[],
 *   is_big?: boolean
 * }): boolean} setMessageReaction - Changes the chosen reactions on a message.
 *
 * @property {function({
 *   user_id: number,
 *   offset?: number,
 *   limit?: number
 * }): UserProfilePhotos} getUserProfilePhotos - Gets a list of profile pictures for a user.
 *
 * @property {function({
 *   file_id: string
 * }): File} getFile - Gets basic information about a file.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   user_id: number,
 *   until_date?: number,
 *   revoke_messages?: boolean
 * }): boolean} banChatMember - Bans a user in a group, supergroup, or channel.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   user_id: number,
 *   only_if_banned?: boolean
 * }): boolean} unbanChatMember - Unbans a previously banned user in a supergroup or channel.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   user_id: number,
 *   permissions: ChatPermissions,
 *   use_independent_chat_permissions?: boolean,
 *   until_date?: number
 * }): boolean} restrictChatMember - Restricts a user in a supergroup.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   user_id: number,
 *   is_anonymous?: boolean,
 *   can_manage_chat?: boolean,
 *   can_delete_messages?: boolean,
 *   can_manage_video_chats?: boolean,
 *   can_restrict_members?: boolean,
 *   can_promote_members?: boolean,
 *   can_change_info?: boolean,
 *   can_invite_users?: boolean,
 *   can_post_messages?: boolean,
 *   can_edit_messages?: boolean,
 *   can_pin_messages?: boolean,
 *   can_post_stories?: boolean,
 *   can_edit_stories?: boolean,
 *   can_delete_stories?: boolean,
 *   can_manage_topics?: boolean
 * }): boolean} promoteChatMember - Promotes or demotes a user in a supergroup or channel.
 *
 *
 * @property {function({
 *   chat_id: (number|string),
 *   user_id: number,
 *   custom_title: string
 * }): boolean} setChatAdministratorCustomTitle - Sets a custom title for an administrator in a supergroup.
 *
 *
 * @property {function({
 *   chat_id: (number|string),
 *   sender_chat_id: number
 * }): boolean} banChatSenderChat - Bans a channel chat in a supergroup or channel.
 *
 *
 * @property {function({
 *   chat_id: (number|string),
 *   sender_chat_id: number
 * }): boolean} unbanChatSenderChat - Unbans a previously banned channel chat.
 *
 *
 * @property {function({
 *   chat_id: (number|string),
 *   permissions: ChatPermissions,
 *   use_independent_chat_permissions?: boolean
 * }): boolean} setChatPermissions - Sets default chat permissions for all members.
 *
 *
 * @property {function({
 *   chat_id: (number|string)
 * }): string} exportChatInviteLink - Generates a new primary invite link for a chat.
 *
 *
 * @property {function({
 *   chat_id: (number|string),
 *   name?: string,
 *   expire_date?: number,
 *   member_limit?: number,
 *   creates_join_request?: boolean
 * }): ChatInviteLink} createChatInviteLink - Creates an additional invite link for a chat.
 *
 *
 * @property {function({
 *   chat_id: (number|string),
 *   invite_link: string,
 *   name?: string,
 *   expire_date?: number,
 *   member_limit?: number,
 *   creates_join_request?: boolean
 * }): ChatInviteLink} editChatInviteLink - Edits a non-primary invite link created by the bot.
 *
 *
 * @property {function({
 *   chat_id: (number|string),
 *   invite_link: string
 * }): ChatInviteLink} revokeChatInviteLink - Revokes an invite link created by the bot.
 *
 *
 * @property {function({
 *   chat_id: (number|string),
 *   user_id: number
 * }): object} approveChatJoinRequest - Approves a chat join request.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   user_id: number
 * }): object} declineChatJoinRequest - Declines a chat join request.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   photo: InputFile
 * }): object} setChatPhoto - Sets a new chat photo.
 *
 * @property {function({
 *  chat_id: (number|string)
 * }): object} deleteChatPhoto - Deletes the chat photo.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   title: string
 * }): Object} setChatTitle - Changes the title of a chat.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   description?: string
 * }): Object} setChatDescription - Changes the description of a chat.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_id: number,
 *   disable_notification?: boolean
 * }): Object} pinChatMessage - Pins a message in a chat.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_id?: number
 * }): Object} unpinChatMessage - Removes a message from the list of pinned messages in a chat.
 *
 * @property {function({
 *   chat_id: (number|string)
 * }): Object} unpinAllChatMessages - Clears the list of pinned messages in a chat.
 *
 * @property {function({
 *   chat_id: (number|string)
 * }): Object} leaveChat - Bot leaves a group, supergroup, or channel.
 *
 * @property {function({
 *   chat_id: (number|string)
 * }): Chat} getChat - Gets information about the chat.
 *
 * @property {function({
 *   chat_id: (number|string)
 * }): ChatMember[]} getChatAdministrators - Gets a list of administrators in a chat.
 *
 * @property {function({
 *   chat_id: (number|string)
 * }): number} getChatMemberCount - Gets the number of members in a chat.
 *
 * @property {function({
 *   chat_id: (number|string)
 *   user_id: number
 * }): ChatMember} getChatMember - Gets information about a member of a chat.
 *
 * @property {function({
 *   chat_id: (number|string)
 *   sticker_set_name: string
 * }): boolean} setChatStickerSet - Sets a new group sticker set for a supergroup.
 *
 * @property {function({
 *   chat_id: (number|string)
 * }): boolean} deleteChatStickerSet - Deletes a group sticker set from a supergroup.
 *
 * @property {function(): Sticker[]} getForumTopicIconStickers - Gets custom emoji stickers for forum topic icons.
 *
 * @property {function({
 *   chat_id: (number|string)
 *   name: string
 *   icon_color?: number
 *   icon_custom_emoji_id?: string
 * }): ForumTopic} createForumTopic - Creates a topic in a forum supergroup chat.
 *
 * @property {function({
 *   chat_id: (number|string)
 *   message_thread_id: number
 *   name?: string
 *   icon_custom_emoji_id?: string
 * }): boolean} editForumTopic - Edits name and icon of a forum topic.
 *
 * @property {function({
 *   chat_id: (number|string)
 *   message_thread_id: number
 * }): boolean} closeForumTopic - Closes an open topic in a forum supergroup chat.
 *
 * @property {function({
 *   chat_id: (number|string)
 *   message_thread_id: number
 * }): boolean} reopenForumTopic - Reopens a closed topic in a forum supergroup chat.
 *
 * @property {function({
 *   chat_id: (number|string)
 *   message_thread_id: number
 * }): boolean} deleteForumTopic - Deletes a forum topic along with all its messages in a forum supergroup chat.
 *
 * @property {function({
 *   chat_id: (number|string)
 *   message_thread_id: number
 * }): boolean} unpinAllForumTopicMessages - Clears the list of pinned messages in a forum topic.
 *
 * @property {function({
 *   chat_id: (number|string)
 *   name: string
 * }): boolean} editGeneralForumTopic - Edits the name of the 'General' topic in a forum supergroup chat.
 *
 * @property {function({
 *   chat_id: (number|string)
 * }): Object} closeGeneralForumTopic - Closes an open 'General' topic in a forum supergroup chat.
 *
 * @property {function({
 *   chat_id: (number|string)
 * }): Object} reopenGeneralForumTopic - Reopens a closed 'General' topic in a forum supergroup chat.
 *
 * @property {function({
 *   chat_id: (number|string)
 * }): Object} hideGeneralForumTopic - Hides the 'General' topic in a forum supergroup chat.
 *
 * @property {function({
 *   chat_id: (number|string)
 * }): Object} unhideGeneralForumTopic - Unhides the 'General' topic in a forum supergroup chat.
 *
 * @property {function({
 *   chat_id: (number|string)
 * }): boolean} unpinAllGeneralForumTopicMessages - Clears the list of pinned messages in a General forum topic.
 *
 * @property {function({
 *   callback_query_id: string
 *   text?: string
 *   show_alert?: boolean
 *   url?: string
 *   cache_time?: number
 * }): boolean} answerCallbackQuery - Sends answers to callback queries sent from inline keyboards.
 *
 * @property {function({
 *   chat_id: (number|string)
 *   user_id: number
 * }): UserChatBoosts} getUserChatBoosts - Gets the list of boosts added to a chat by a user.
 *
 * @property {function({
 *   commands: BotCommand[]
 *   scope?: BotCommandScope
 *   language_code?: string
 * }): boolean} setMyCommands - Changes the list of the bot's commands.
 *
 * @property {function({
 *   scope?: BotCommandScope
 *   language_code?: string
 * }): void} deleteMyCommands - Deletes the bot's commands for a given scope and language.
 *
 * @property {function({
 *   scope?: BotCommandScope
 *   language_code?: string
 * }): Array<BotCommand>} getMyCommands - Gets the current list of the bot's commands.
 *
 * @property {function({
 *   name: string
 *   language_code?: string
 * }): void} setMyName - Changes the bot's name.
 *
 * @property {function({
 *   language_code?: string
 * }): BotName} getMyName - Gets the current bot name.
 *
 * @property {function({
 *   description?: string
 *   language_code?: string
 * }): boolean} setMyDescription - Changes the bot's description.
 *
 * @property {function({
 *   language_code?: string
 * }): BotDescription} getMyDescription - Gets the current bot description.
 *
 * @property {function({
 *   short_description?: string
 *   language_code?: string
 * }): boolean} setMyShortDescription - Changes the bot's short description.
 *
 * @property {function({
 *   language_code?: string
 * }): BotShortDescription} getMyShortDescription - Gets the current bot short description.
 *
 * @property {function({
 *   chat_id?: number
 *   menu_button?: MenuButton
 * }): boolean} setChatMenuButton - Changes the bot's menu button.
 *
 * @property {function({
 *   chat_id?: number
 * }): MenuButton} getChatMenuButton - Gets the current bot's menu button.
 *
 * @property {function({
 *   rights?: ChatAdministratorRights
 *   for_channels?: boolean
 * }): boolean} setMyDefaultAdministratorRights - Changes the default administrator rights.
 *
 * @property {function({
 *  for_channels?: boolean
 * }): ChatAdministratorRights} getMyDefaultAdministratorRights - Gets the current default administrator rights.
 *
 * @property {function({
 *   chat_id?: (number|string)
 *   message_id?: number
 *   inline_message_id?: string
 *   text: string
 *   parse_mode?: Format
 *   entities?: MessageEntity[]
 *   link_preview_options?: LinkPreviewOptions
 *   reply_markup?: InlineKeyboardMarkup
 * }): Message} editMessageText - Edits text and game messages.
 *
 * @property {function({
 *   chat_id?: (number|string)
 *   message_id?: number
 *   inline_message_id?: string
 *   caption?: string
 *   parse_mode?: Format
 *   caption_entities?: MessageEntity[]
 *   reply_markup?: InlineKeyboardMarkup
 * }): Message} editMessageCaption - Edits captions of messages.
 *
 *
 * @property {function({
 *   chat_id?: (number|string)
 *   message_id?: number
 *   inline_message_id?: string
 *   media: InputMedia
 *   reply_markup?: InlineKeyboardMarkup
 * }): Message} editMessageMedia - Edits animation, audio, document, photo or video messages.
 *
 * @property {function({
 *   chat_id?: (number|string),
 *   message_id?: number,
 *   inline_message_id?: string,
 *   latitude: number,
 *   longitude: number,
 *   horizontal_accuracy?: number,
 *   heading?: number,
 *   proximity_alert_radius?: number,
 *   reply_markup?: InlineKeyboardMarkup
 * }): Message} editMessageLiveLocation - Edits live location messages.
 *
 *
 * @property {function({
 *   chat_id?: (number|string),
 *   message_id?: number,
 *   inline_message_id?: string,
 *   reply_markup?: InlineKeyboardMarkup
 * }): (Message|boolean)} stopMessageLiveLocation - Stops updating a live location message.
 *
 * @property {function({
 *   chat_id?: (number|string),
 *   message_id?: number,
 *   inline_message_id?: string,
 *   reply_markup?: InlineKeyboardMarkup
 * }): (Message|boolean)} editMessageReplyMarkup - Edits only the reply markup of messages.
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_id: number,
 *   reply_markup?: InlineKeyboardMarkup
 * }): Poll} stopPoll - Stops a poll.
 *
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_id: number
 * }): boolean} deleteMessage - Deletes a message.
 *
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_ids: number[]
 * }): object} deleteMessages - Deletes multiple messages.
 *
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_thread_id?: number,
 *   sticker: (InputFile|string),
 *   emoji?: string,
 *   disable_notification?: boolean,
 *   protect_content?: boolean,
 *   reply_parameters?: ReplyParameters,
 *   reply_markup?: (InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)
 * }): Message} sendSticker - Sends a sticker.
 *
 *
 * @property {function({
 *   name: string
 * }): StickerSet} getStickerSet - Gets a sticker set.
 *
 *
 * @property {function({
 *   custom_emoji_ids: string[]
 * }): Sticker[]} getCustomEmojiStickers - Gets information about custom emoji stickers.
 *
 *
 * @property {function({
 *   user_id: number,
 *   sticker: InputFile,
 *   sticker_format: string
 * }): File} uploadStickerFile - Uploads a sticker file.
 *
 *
 * @property {function({
 *   user_id: number,
 *   name: string,
 *   title: string,
 *   stickers: InputSticker[],
 *   sticker_format: string,
 *   sticker_type?: string,
 *   needs_repainting?: boolean
 * }): boolean} createNewStickerSet - Creates a new sticker set.
 *
 *
 * @property {function({
 *   user_id: number,
 *   name: string,
 *   sticker: InputSticker
 * }): boolean} addStickerToSet - Adds a new sticker to a set.
 *
 *
 * @property {function({
 *   sticker: string,
 *   position: number
 * }): boolean} setStickerPositionInSet
 *
 *
 * @property {function({
 *   sticker: string
 * }): boolean} deleteStickerFromSet
 *
 *
 * @property {function({
 *   sticker: string,
 *   emoji_list: string[]
 * }): boolean} setStickerEmojiList
 *
 *
 * @property {function({
 *   sticker: string,
 *   keywords?: string[]
 * }): boolean} setStickerKeywords
 *
 *
 * @property {function({
 *   sticker: string,
 *   mask_position?: MaskPosition
 * }): boolean} setStickerMaskPosition
 *
 *
 * @property {function({
 *   name: string,
 *   title: string
 * }): boolean} setStickerSetTitle
 *
 *
 * @property {function({
 *   name: string,
 *   user_id: number,
 *   thumbnail?: (InputFile|string)
 * }): boolean} setStickerSetThumbnail
 *
 *
 * @property {function({
 *   name: string,
 *   custom_emoji_id?: string
 * }): boolean} setCustomEmojiStickerSetThumbnail
 *
 *
 * @property {function({
 *   name: string
 * }): boolean} deleteStickerSet
 *
 *
 * @property {function({
 *   inline_query_id: string,
 *   results: InlineQueryResult[],
 *   cache_time?: number,
 *   is_personal?: boolean,
 *   next_offset?: string,
 *   button?: InlineQueryResultsButton
 * }): boolean} answerInlineQuery
 *
 *
 * @property {function({
 *   web_app_query_id: string,
 *   result: InlineQueryResult
 * }): boolean} answerWebAppQuery
 *
 *
 * @property {function({
 *   chat_id: (number|string),
 *   message_thread_id?: number,
 *   title: string,
 *   description: string,
 *   payload: string,
 *   provider_token: string,
 *   currency: string,
 *   prices: LabeledPrice[],
 *   max_tip_amount?: number,
 *   suggested_tip_amounts?: number[],
 *   start_parameter?: string,
 *   provider_data?: string,
 *   photo_url?: string,
 *   photo_size?: number,
 *   photo_width?: number,
 *   photo_height?: number,
 *   need_name?: boolean,
 *   need_phone_number?: boolean,
 *   need_email?: boolean,
 *   need_shipping_address?: boolean,
 *   send_phone_number_to_provider?: boolean,
 *   send_email_to_provider?: boolean,
 *   is_flexible?: boolean,
 *   disable_notification?: boolean,
 *   protect_content?: boolean,
 *   reply_parameters?: ReplyParameters,
 *   reply_markup?: (InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)
 * }): Message} sendInvoice
 *
 *
 * @property {function({
 *   title: string,
 *   description: string,
 *   payload: string,
 *   provider_token: string,
 *   currency: string,
 *   prices: LabeledPrice[],
 *   max_tip_amount?: number,
 *   suggested_tip_amounts?: number[],
 *   provider_data?: string,
 *   photo_url?: string,
 *   photo_size?: number,
 *   photo_width?: number,
 *   photo_height?: number,
 *   need_name?: boolean,
 *   need_phone_number?: boolean,
 *   need_email?: boolean,
 *   need_shipping_address?: boolean,
 *   send_phone_number_to_provider?: boolean,
 *   send_email_to_provider?: boolean,
 *   is_flexible?: boolean
 * }): string} createInvoiceLink
 *
 *
 * @property {function({
 *   chat_id: number,
 *   game_short_name: string,
 *   message_thread_id?: number,
 *   disable_notification?: boolean,
 *   protect_content?: boolean,
 *   reply_parameters?: ReplyParameters,
 *   reply_markup?: InlineKeyboardMarkup
 * }): Message} sendGame
 *
 *
 * @property {function({
 *   user_id: number,
 *   score: number,
 *   force?: boolean,
 *   disable_edit_message?: boolean,
 *   chat_id?: number,
 *   message_id?: number,
 *   inline_message_id?: string
 * }): (Message | boolean)} setGameScore
 *
 *
 * @property {function({
 *   user_id: number,
 *   chat_id?: number,
 *   message_id?: number,
 *   inline_message_id?: string
 * }): GameHighScore[]} getGameHighScores
 *
 *
 * @property {function({
 *   user_id: number,
 *   errors: PassportElementError[]
 * }): boolean} setPassportDataErrors - Informs user of errors in Telegram Passport elements.
 *
 *
 * @property {function({
 *   text: string,
 *   parse_mode?: Format,
 *   entities?: MessageEntity[],
 *   link_preview_options?: LinkPreviewOptions,
 *   disable_notification?: boolean,
 *   protect_content?: boolean,
 *   reply_parameters?: ReplyParameters,
 *   reply_markup?: (InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)
 * }): Message} reply
 *
 *
 * @property {function({
 *   text: string,
 *   disable_notification?: boolean,
 *   protect_content?: boolean,
 *   reply_parameters?: ReplyParameters,
 *   reply_markup?: (InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)
 * }): Message} replyWithHtml
 *
 *
 * @property {function({
 *   text: string,
 *   disable_notification?: boolean,
 *   protect_content?: boolean,
 *   reply_parameters?: ReplyParameters,
 *   reply_markup?: (InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)
 * }): Message} replyWithMarkdown
 *
 *
 * @property {function({
 *   photo: (InputFile|string),
 *   caption?: string,
 *   parse_mode?: Format,
 *   caption_entities?: MessageEntity[],
 *   has_spoiler?: boolean,
 *   disable_notification?: boolean,
 *   protect_content?: boolean,
 *   reply_parameters?: ReplyParameters,
 *   reply_markup?: (InlineKeyboardMarkup|ReplyKeyboardMarkup|ReplyKeyboardRemove|ForceReply)
 * }): Message} replyWithPhoto
 *
 *
 * @property {function({
 *   action: string,
 *   disable_notification?: boolean,
 *   protect_content?: boolean,
 *   reply_parameters?: ReplyParameters
 * }): boolean} replyWithChatAction
 *
 *
 * @property {function({
 *   text: string,
 *   parse_mode?: Format,
 *   entities?: MessageEntity[],
 *   link_preview_options?: LinkPreviewOptions,
 *   reply_markup?: InlineKeyboardMarkup
 * }): Message} replyWithEditedMessage
 *
 *
 * @property {function(): Object} getTSession - Gets the temporary session object.
 * @property {function(string): *} getTSessionValue - Gets a value from the temporary session by key.
 * @property {function(string, *, number): void} setTSessionValue - Sets a value in the temporary session with an optional expiry time.
 * @property {function(Object, number): void} setTSessionValues - Sets multiple values in the temporary session with an optional expiry time.
 * @property {function(string): void} removeTSessionValue - Removes a value from the temporary session by key.
 * @property {function(): void} deleteTSession - Deletes the temporary session.
 *
 * @property {function(string): void} setStage - Sets the current stage.
 * @property {function(): void} clearStage - Clears the current stage.
 * @property {function(): string} getStage - Gets the current stage.
 *
 * @property {function(): Object} getPSession - Gets the persistent session object.
 * @property {function(string): *} getPSessionValue - Gets a value from the persistent session by key.
 * @property {function(string, *): void} setPSessionValue - Sets a value in the persistent session.
 * @property {function(Object): void} setPSessionValues - Sets multiple values in the persistent session.
 * @property {function(string): void} removePSessionValue - Removes a value from the persistent session by key.
 * @property {function(): void} deletePSession - Deletes the persistent session.
 *
 * @property {function(string): *} getPCacheValue - Gets a value from the persistent cache by key.
 * @property {function(): Object} getPCache - Gets the entire persistent cache object.
 * @property {function(string, *): void} setPCacheValue - Sets a value in the persistent cache.
 * @property {function(Object): void} setPCacheValues - Sets multiple values in the persistent cache.
 * @property {function(string): void} removePCacheValue - Removes a value from the persistent cache by key.
 * @property {function(): void} deletePCache - Deletes the persistent cache.
 *
 * @property {function(string): *} getTCacheValue - Gets a value from the temporary cache by key.
 * @property {function(string, *, number): void} setTCacheValue - Sets a value in the temporary cache with an optional expiry time.
 * @property {function(Array.<string>): Object} getTCacheValues - Gets multiple values from the temporary cache.
 * @property {function(Object, number): void} setTCacheValues - Sets multiple values in the temporary cache with an optional expiry time.
 * @property {function(string): void} removeTCacheValue - Removes a value from the temporary cache by key.
 * @property {function(Array.<string>): void} removeTCacheValues - Removes multiple values from the temporary cache.
 *
 * @property {function(string, string, string, Object=): void} sendEmail - Sends an email with optional parameters.
 *
 *
 *
 */

/**
 * @typedef {Object} WebhookInfo
 * @property {string} url
 * @property {boolean} has_custom_certificate
 * @property {number} pending_update_count
 * @property {string} ip_address
 * @property {number} last_error_date
 * @property {string} last_error_message
 * @property {number} last_synchronization_error_date
 * @property {number} max_connections
 * @property {string[]} allowed_updates
 */

/**
 * @typedef {Object} MessageId
 * @property {number} message_id
 */

/**
 * @typedef {Object} InaccessibleMessage
 * @property {Chat} chat
 * @property {number} message_id
 * @property {number} date
 */

/**
 * @typedef {Message | InaccessibleMessage} MaybeInaccessibleMessage
 */

/**
 * @typedef {Object} ReplyParameters
 * @property {number} message_id
 * @property {(number|string)} [chat_id]
 * @property {boolean} [allow_sending_without_reply]
 * @property {string} [quote]
 * @property {string} [quote_parse_mode]
 * @property {Array.<MessageEntity>} [quote_entities]
 * @property {number} [quote_position]
 */

/**
 * @typedef {MessageOriginUser|MessageOriginHiddenUser|MessageOriginChat|MessageOriginChannel} MessageOrigin
 */

/**
 * @typedef {Object} MessageOriginUser
 * @property {string} type
 * @property {number} date
 * @property {User} sender_user
 */

/**
 * @typedef {Object} MessageOriginHiddenUser
 * @property {string} type
 * @property {number} date
 * @property {string} sender_user_name
 */

/**
 * @typedef {Object} MessageOriginChat
 * @property {string} type
 * @property {number} date
 * @property {Chat} sender_chat
 * @property {string} [author_signature]
 */

/**
 * @typedef {Object} MessageOriginChannel
 * @property {string} type
 * @property {number} date
 * @property {Chat} chat
 * @property {number} message_id
 * @property {string} [author_signature]
 */

/**
 * @typedef {Object} ChatBoostUpdated
 * @property {Chat} chat
 * @property {ChatBoost} boost
 */

/**
 * @typedef {Object} ChatBoostRemoved
 * @property {Chat} chat
 * @property {string} boost_id
 * @property {number} remove_date
 * @property {ChatBoostSource} source
 */

/**
 * @typedef {Object} PollAnswer
 * @property {string} poll_id
 * @property {Chat} [voter_chat]
 * @property {User} [user]
 * @property {Array.<number>} option_ids
 */

/**
 * @typedef {Object} ChatMemberUpdated
 * @property {Chat} chat
 * @property {User} from
 * @property {number} date
 * @property {ChatMember} old_chat_member
 * @property {ChatMember} new_chat_member
 * @property {ChatInviteLink} [invite_link]
 * @property {boolean} [via_chat_folder_invite_link]
 */

/**
 * @typedef {Object} ChatJoinRequest
 * @property {Chat} chat
 * @property {User} from
 * @property {number} user_chat_id
 * @property {number} date
 * @property {string} [bio]
 * @property {ChatInviteLink} [invite_link]
 */

/**
 * @typedef {Object} CallbackQuery
 * @property {string} id
 * @property {User} from
 * @property {MaybeInaccessibleMessage} [message]
 * @property {string} [inline_message_id]
 * @property {string} chat_instance
 * @property {string} [data]
 * @property {string} [game_short_name]
 */

/**
 * @typedef {Object} ShippingQuery
 * @property {string} id
 * @property {User} from
 * @property {string} invoice_payload
 * @property {ShippingAddress} shipping_address
 */

/**
 * @typedef {Object} PreCheckoutQuery
 * @property {string} id
 * @property {User} from
 * @property {string} currency
 * @property {number} total_amount
 * @property {string} invoice_payload
 * @property {string} [shipping_option_id]
 * @property {OrderInfo} [order_info]
 */

/**
 * @typedef {Object} MessageReactionUpdated
 * @property {Chat} chat
 * @property {number} message_id
 * @property {User} [user]
 * @property {Chat} [actor_chat]
 * @property {number} date
 * @property {Array.<ReactionType>} old_reaction
 * @property {Array.<ReactionType>} new_reaction
 */

/**
 * @typedef {Object} MessageReactionCountUpdated
 * @property {Chat} chat
 * @property {number} message_id
 * @property {number} date
 * @property {Array.<ReactionCount>} reactions
 */

/**
 * @typedef {Object} InlineQuery
 * @property {string} id
 * @property {User} from
 * @property {string} query
 * @property {string} offset
 * @property {string} [chat_type]
 * @property {Location} [location]
 */

/**
 * @typedef {Object} ChosenInlineResult
 * @property {string} result_id
 * @property {User} from
 * @property {Location} [location]
 * @property {string} [inline_message_id]
 * @property {string} query
 */

/**
 * @typedef {Object} Message
 * @property {number} message_id
 * @property {number} [message_thread_id]
 * @property {User} [from]
 * @property {Chat} [sender_chat]
 * @property {number} date
 * @property {Chat} chat
 * @property {MessageOrigin} [forward_origin]
 * @property {boolean} [is_topic_message]
 * @property {boolean} [is_automatic_forward]
 * @property {Message} [reply_to_message]
 * @property {ExternalReplyInfo} [external_reply]
 * @property {TextQuote} [quote]
 * @property {User} [via_bot]
 * @property {number} [edit_date]
 * @property {boolean} [has_protected_content]
 * @property {string} [media_group_id]
 * @property {string} [author_signature]
 * @property {string} [text]
 * @property {Array.<MessageEntity>} [entities]
 * @property {LinkPreviewOptions} [link_preview_options]
 * @property {Animation} [animation]
 * @property {Audio} [audio]
 * @property {Document} [document]
 * @property {Array.<PhotoSize>} [photo]
 * @property {Sticker} [sticker]
 * @property {Story} [story]
 * @property {Video} [video]
 * @property {VideoNote} [video_note]
 * @property {Voice} [voice]
 * @property {string} [caption]
 * @property {Array.<MessageEntity>} [caption_entities]
 * @property {boolean} [has_media_spoiler]
 * @property {Contact} [contact]
 * @property {Dice} [dice]
 * @property {Game} [game]
 * @property {Poll} [poll]
 * @property {Venue} [venue]
 * @property {Location} [location]
 * @property {Array.<User>} [new_chat_members]
 * @property {User} [left_chat_member]
 * @property {string} [new_chat_title]
 * @property {Array.<PhotoSize>} [new_chat_photo]
 * @property {boolean} [delete_chat_photo]
 * @property {boolean} [group_chat_created]
 * @property {boolean} [supergroup_chat_created]
 * @property {boolean} [channel_chat_created]
 * @property {MessageAutoDeleteTimerChanged} [message_auto_delete_timer_changed]
 * @property {number} [migrate_to_chat_id]
 * @property {number} [migrate_from_chat_id]
 * @property {MaybeInaccessibleMessage} [pinned_message]
 * @property {Invoice} [invoice]
 * @property {SuccessfulPayment} [successful_payment]
 * @property {UsersShared} [users_shared]
 * @property {ChatShared} [chat_shared]
 * @property {string} [connected_website]
 * @property {WriteAccessAllowed} [write_access_allowed]
 * @property {PassportData} [passport_data]
 * @property {ProximityAlertTriggered} [proximity_alert_triggered]
 * @property {ForumTopicCreated} [forum_topic_created]
 * @property {ForumTopicEdited} [forum_topic_edited]
 * @property {ForumTopicClosed} [forum_topic_closed]
 * @property {ForumTopicReopened} [forum_topic_reopened]
 * @property {GeneralForumTopicHidden} [general_forum_topic_hidden]
 * @property {GeneralForumTopicUnhidden} [general_forum_topic_unhidden]
 * @property {GiveawayCreated} [giveaway_created]
 * @property {Giveaway} [giveaway]
 * @property {GiveawayWinners} [giveaway_winners]
 * @property {GiveawayCompleted} [giveaway_completed]
 * @property {VideoChatScheduled} [video_chat_scheduled]
 * @property {VideoChatStarted} [video_chat_started]
 * @property {VideoChatEnded} [video_chat_ended]
 * @property {VideoChatParticipantsInvited} [video_chat_participants_invited]
 * @property {WebAppData} [web_app_data]
 * @property {InlineKeyboardMarkup} [reply_markup]
 */

/**
 * @typedef {Object} User
 * @property {number} id - Unique identifier for this user or bot.
 * @property {boolean} is_bot - True if the user is a bot.
 * @property {string} first_name - User's or bot's first name.
 * @property {string} [last_name] - User's or bot's last name.
 * @property {string} [username] - User's or bot's username.
 * @property {string} [language_code] - IETF language tag of the user's language.
 * @property {boolean} [is_premium] - True if the user has Telegram Premium.
 * @property {boolean} [added_to_attachment_menu] - True if the bot is added to the attachment menu.
 * @property {boolean} [can_join_groups] - True if the bot can be invited to groups.
 * @property {boolean} [can_read_all_group_messages] - True if privacy mode is disabled for the bot.
 * @property {boolean} [supports_inline_queries] - True if the bot supports inline queries.
 */

/**
 * @typedef {Object} Chat
 * @property {number} id
 * @property {string} type
 * @property {string} title
 * @property {string} [username]
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {boolean} [is_forum]
 * @property {ChatPhoto} [photo]
 * @property {Array.<string>} [active_usernames]
 * @property {Array.<ReactionType>} [available_reactions]
 * @property {number} [accent_color_id]
 * @property {string} [background_custom_emoji_id]
 * @property {number} [profile_accent_color_id]
 * @property {string} [profile_background_custom_emoji_id]
 * @property {string} [emoji_status_custom_emoji_id]
 * @property {number} [emoji_status_expiration_date]
 * @property {string} [bio]
 * @property {boolean} [has_private_forwards]
 * @property {boolean} [has_restricted_voice_and_video_messages]
 * @property {boolean} [join_to_send_messages]
 * @property {boolean} [join_by_request]
 * @property {string} [description]
 * @property {string} [invite_link]
 * @property {Message} [pinned_message]
 * @property {ChatPermissions} [permissions]
 * @property {number} [slow_mode_delay]
 * @property {number} [message_auto_delete_time]
 * @property {boolean} [has_aggressive_anti_spam_enabled]
 * @property {boolean} [has_hidden_members]
 * @property {boolean} [has_protected_content]
 * @property {boolean} [has_visible_history]
 * @property {string} [sticker_set_name]
 * @property {boolean} [can_set_sticker_set]
 * @property {number} [linked_chat_id]
 * @property {ChatLocation} [location]
 */

/**
 * @typedef {Object} MessageOrigin
 * @property {string} type
 * @property {number} date
 * @property {User} sender_user
 * @property {string} sender_user_name
 * @property {Chat} sender_chat
 * @property {string} [author_signature]
 * @property {Chat} chat
 * @property {number} message_id
 */

/**
 * @typedef {Object} ExternalReplyInfo
 * @property {MessageOrigin} origin
 * @property {Chat} [chat]
 * @property {number} [message_id]
 * @property {LinkPreviewOptions} [link_preview_options]
 * @property {Animation} [animation]
 * @property {Audio} [audio]
 * @property {Document} [document]
 * @property {Array.<PhotoSize>} [photo]
 * @property {Sticker} [sticker]
 * @property {Story} [story]
 * @property {Video} [video]
 * @property {VideoNote} [video_note]
 * @property {Voice} [voice]
 * @property {boolean} [has_media_spoiler]
 * @property {Contact} [contact]
 * @property {Dice} [dice]
 * @property {Game} [game]
 * @property {Giveaway} [giveaway]
 * @property {GiveawayWinners} [giveaway_winners]
 * @property {Invoice} [invoice]
 * @property {Location} [location]
 * @property {Poll} [poll]
 * @property {Venue} [venue]
 */

/**
 * @typedef {Object} TextQuote
 * @property {string} text
 * @property {Array.<MessageEntity>} [entities]
 * @property {number} position
 * @property {boolean} [is_manual]
 */

/**
 * @typedef {Object} MessageEntity
 * @property {string} type
 * @property {number} offset
 * @property {number} length
 * @property {string} [url]
 * @property {User} [user]
 * @property {string} [language]
 * @property {string} [custom_emoji_id]
 */

/**
 * @typedef {Object} LinkPreviewOptions
 * @property {boolean} [is_disabled]
 * @property {string} [url]
 * @property {boolean} [prefer_small_media]
 * @property {boolean} [prefer_large_media]
 * @property {boolean} [show_above_text]
 */

/**
 * @typedef {Object} Animation
 * @property {string} file_id
 * @property {string} file_unique_id
 * @property {number} width
 * @property {number} height
 * @property {number} duration
 * @property {PhotoSize} [thumbnail]
 * @property {string} [file_name]
 * @property {string} [mime_type]
 * @property {number} [file_size]
 */

/**
 * @typedef {Object} Audio
 * @property {string} file_id
 * @property {string} file_unique_id
 * @property {number} duration
 * @property {string} [performer]
 * @property {string} [title]
 * @property {string} [file_name]
 * @property {string} [mime_type]
 * @property {number} [file_size]
 * @property {PhotoSize} [thumbnail]
 */

/**
 * @typedef {Object} Document
 * @property {string} file_id
 * @property {string} file_unique_id
 * @property {PhotoSize} [thumbnail]
 * @property {string} [file_name]
 * @property {string} [mime_type]
 * @property {number} [file_size]
 */

/**
 * @typedef {Object} PhotoSize
 * @property {string} file_id
 * @property {string} file_unique_id
 * @property {number} width
 * @property {number} height
 * @property {number} [file_size]
 */

/**
 * @typedef {Object} Sticker
 * @property {string} file_id
 * @property {string} file_unique_id
 * @property {string} type
 * @property {number} width
 * @property {number} height
 * @property {boolean} is_animated
 * @property {boolean} is_video
 * @property {PhotoSize} [thumbnail]
 * @property {string} [emoji]
 * @property {string} [set_name]
 * @property {File} [premium_animation]
 * @property {MaskPosition} [mask_position]
 * @property {string} [custom_emoji_id]
 * @property {boolean} [needs_repainting]
 * @property {number} [file_size]
 */

/**
 * @typedef {Object} Video
 * @property {string} file_id
 * @property {string} file_unique_id
 * @property {number} width
 * @property {number} height
 * @property {number} duration
 * @property {PhotoSize} [thumbnail]
 * @property {string} [file_name]
 * @property {string} [mime_type]
 * @property {number} [file_size]
 */

/**
 * @typedef {Object} VideoNote
 * @property {string} file_id
 * @property {string} file_unique_id
 * @property {number} length
 * @property {number} duration
 * @property {PhotoSize} [thumbnail]
 * @property {number} [file_size]
 */

/**
 * @typedef {Object} Voice
 * @property {string} file_id
 * @property {string} file_unique_id
 * @property {number} duration
 * @property {string} [mime_type]
 * @property {number} [file_size]
 */

/**
 * @typedef {Object} Contact
 * @property {string} phone_number
 * @property {string} first_name
 * @property {string} [last_name]
 * @property {number} [user_id]
 * @property {string} [vcard]
 */

/**
 * @typedef {Object} Dice
 * @property {string} emoji
 * @property {number} value
 */

/**
 * @typedef {Object} Game
 * @property {string} title
 * @property {string} description
 * @property {Array.<PhotoSize>} photo
 * @property {string} [text]
 * @property {Array.<MessageEntity]} [text_entities]
 * @property {Animation} [animation]
 */

/**
 * @typedef {Object} Poll
 * @property {string} id
 * @property {string} question
 * @property {Array.<PollOption>} options
 * @property {number} total_voter_count
 * @property {boolean} is_closed
 * @property {boolean} is_anonymous
 * @property {string} type
 * @property {boolean} allows_multiple_answers
 * @property {number} [correct_option_id]
 * @property {string} [explanation]
 * @property {Array.<MessageEntity>} [explanation_entities]
 * @property {number} [open_period]
 * @property {number} [close_date]
 */

/**
 * @typedef {Object} Venue
 * @property {Location} location
 * @property {string} title
 * @property {string} address
 * @property {string} [foursquare_id]
 * @property {string} [foursquare_type]
 * @property {string} [google_place_id]
 * @property {string} [google_place_type]
 */

/**
 * @typedef {Object} Location
 * @property {number} longitude
 * @property {number} latitude
 * @property {number} [horizontal_accuracy]
 * @property {number} [live_period]
 * @property {number} [heading]
 * @property {number} [proximity_alert_radius]
 */

/**
 * @typedef {Object} MessageAutoDeleteTimerChanged
 * @property {number} message_auto_delete_time
 */

/**
 * @typedef {Object} MaybeInaccessibleMessage
 * @property {Message} [message]
 */

/**
 * @typedef {Object} Invoice
 * @property {string} title
 * @property {string} description
 * @property {string} start_parameter
 * @property {string} currency
 * @property {number} total_amount
 */

/**
 * @typedef {Object} SuccessfulPayment
 * @property {string} currency
 * @property {number} total_amount
 * @property {string} invoice_payload
 * @property {string} shipping_option_id
 * @property {OrderInfo} order_info
 * @property {string} telegram_payment_charge_id
 * @property {string} provider_payment_charge_id
 */

/**
 * @typedef {Object} UsersShared
 * @property {number} request_id
 * @property {Array.<number>} user_ids
 */

/**
 * @typedef {Object} ChatShared
 * @property {number} request_id
 * @property {number} chat_id
 */

/**
 * @typedef {Object} WriteAccessAllowed
 * @property {boolean} from_request
 * @property {string} web_app_name
 * @property {boolean} from_attachment_menu
 */

/**
 * @typedef {Object} PassportData
 * @property {Array.<EncryptedPassportElement>} data
 * @property {EncryptedCredentials} credentials
 */

/**
 * @typedef {Object} ProximityAlertTriggered
 * @property {User} traveler
 * @property {User} watcher
 * @property {number} distance
 */

/**
 * @typedef {Object} ForumTopicCreated
 * @property {string} name
 * @property {number} icon_color
 * @property {string} icon_custom_emoji_id
 */

/**
 * @typedef {Object} ForumTopicEdited
 * @property {string} name
 * @property {string} icon_custom_emoji_id
 */

/**
 * @typedef {Object} Giveaway
 * @property {Array.<Chat>} chats
 * @property {number} winners_selection_date
 * @property {number} winner_count
 * @property {boolean} [only_new_members]
 * @property {boolean} [has_public_winners]
 * @property {string} [prize_description]
 * @property {Array.<string>} [country_codes]
 * @property {number} [premium_subscription_month_count]
 */

/**
 * @typedef {Object} GiveawayWinners
 * @property {Chat} chat
 * @property {number} giveaway_message_id
 * @property {number} winners_selection_date
 * @property {number} winner_count
 * @property {Array.<User>} winners
 * @property {number} [additional_chat_count]
 * @property {number} [premium_subscription_month_count]
 * @property {number} [unclaimed_prize_count]
 * @property {boolean} [only_new_members]
 * @property {boolean} [was_refunded]
 * @property {string} [prize_description]
 */

/**
 * @typedef {Object} GiveawayCompleted
 * @property {number} winner_count
 * @property {number} [unclaimed_prize_count]
 * @property {Message} [giveaway_message]
 */

/**
 * @typedef {Object} VideoChatScheduled
 * @property {number} start_date
 */

/**
 * @typedef {Object} VideoChatEnded
 * @property {number} duration
 */

/**
 * @typedef {Object} VideoChatParticipantsInvited
 * @property {Array.<User>} users
 */

/**
 * @typedef {Object} WebAppData
 * @property {string} data
 * @property {string} button_text
 */

/**
 * @typedef {Object} InlineKeyboardMarkup
 * @property {Array.<Array.<InlineKeyboardButton>>} inline_keyboard
 */

/**
 * @typedef {Object} InlineKeyboardButton
 * @property {string} text
 * @property {string} [url]
 * @property {string} [callback_data]
 * @property {WebAppInfo} [web_app]
 * @property {LoginUrl} [login_url]
 * @property {string} [switch_inline_query]
 * @property {string} [switch_inline_query_current_chat]
 * @property {SwitchInlineQueryChosenChat} [switch_inline_query_chosen_chat]
 * @property {CallbackGame} [callback_game]
 * @property {boolean} [pay]
 */

/**
 * @typedef {Object} ReplyKeyboardRemove
 * @property {true} remove_keyboard
 * @property {boolean} [selective]
 */

/**
 * @typedef {Object} KeyboardButton
 * @property {string} text
 * @property {KeyboardButtonRequestUsers} [request_users]
 * @property {KeyboardButtonRequestChat} [request_chat]
 * @property {boolean} [request_contact]
 * @property {boolean} [request_location]
 * @property {KeyboardButtonPollType} [request_poll]
 * @property {WebAppInfo} [web_app]
 */

/**
 * @typedef {Object} ReplyKeyboardMarkup
 * @property {Array.<Array.<KeyboardButton>>} keyboard
 * @property {boolean} [is_persistent]
 * @property {boolean} [resize_keyboard]
 * @property {boolean} [one_time_keyboard]
 * @property {string} [input_field_placeholder]
 * @property {boolean} [selective]
 */

/**
 * @typedef {Object} PollOption
 * @property {string} text
 * @property {number} voter_count
 */

/**
 * @typedef {Object} UserProfilePhotos
 * @property {number} total_count
 * @property {Array<Array<PhotoSize>>} photos
 */

/**
 * @typedef {Object} File
 * @property {string} file_id
 * @property {string} file_unique_id
 * @property {number} file_size
 * @property {string} file_path
 */

/**
 * @typedef {Object} WebAppInfo
 * @property {string} url
 */

/**
 * @typedef {Object} KeyboardButtonRequestUsers
 * @property {number} request_id
 * @property {boolean} [user_is_bot]
 * @property {boolean} [user_is_premium]
 * @property {number} [max_quantity]
 */

/**
 * @typedef {Object} KeyboardButtonRequestChat
 * @property {number} request_id
 * @property {boolean} chat_is_channel
 * @property {boolean} [chat_is_forum]
 * @property {boolean} [chat_has_username]
 * @property {boolean} [chat_is_created]
 * @property {ChatAdministratorRights} [user_administrator_rights]
 * @property {ChatAdministratorRights} [bot_administrator_rights]
 * @property {boolean} [bot_is_member]
 */

/**
 * @typedef {Object} KeyboardButtonPollType
 * @property {string} type
 */

/**
 * @typedef {Object} LoginUrl
 * @property {string} url
 * @property {string} forward_text
 * @property {string} bot_username
 * @property {boolean} request_write_access
 */

/**
 * @typedef {Object} SwitchInlineQueryChosenChat
 * @property {string} query
 * @property {boolean} allow_user_chats
 * @property {boolean} allow_bot_chats
 * @property {boolean} allow_group_chats
 * @property {boolean} allow_channel_chats
 */

/**
 * @typedef {Object} ForceReply
 * @property {boolean} force_reply
 * @property {string} input_field_placeholder
 * @property {boolean} selective
 */

/**
 * @typedef {Object} ChatPhoto
 * @property {string} small_file_id
 * @property {string} small_file_unique_id
 * @property {string} big_file_id
 * @property {string} big_file_unique_id
 */

/**
 * @typedef {Object} ChatInviteLink
 * @property {string} invite_link
 * @property {User} creator
 * @property {boolean} creates_join_request
 * @property {boolean} is_primary
 * @property {boolean} is_revoked
 * @property {string} name
 * @property {number} expire_date
 * @property {number} member_limit
 * @property {number} pending_join_request_count
 */

/**
 * @typedef {Object} ChatAdministratorRights
 * @property {boolean} is_anonymous
 * @property {boolean} can_manage_chat
 * @property {boolean} can_delete_messages
 * @property {boolean} can_manage_video_chats
 * @property {boolean} can_restrict_members
 * @property {boolean} can_promote_members
 * @property {boolean} can_change_info
 * @property {boolean} can_invite_users
 * @property {boolean} can_post_messages
 * @property {boolean} can_edit_messages
 * @property {boolean} can_pin_messages
 * @property {boolean} can_post_stories
 * @property {boolean} can_edit_stories
 * @property {boolean} can_delete_stories
 * @property {boolean} can_manage_topics
 */

/**
 * @typedef {Object} ChatMember
 * @property {string} status
 * @property {User} user
 */

/**
 * @typedef {Object} ChatMemberOwner
 * @property {string} status
 * @property {User} user
 * @property {boolean} is_anonymous
 * @property {string} custom_title
 */

/**
 * @typedef {Object} ChatMemberAdministrator
 * @property {string} status
 * @property {User} user
 * @property {boolean} can_be_edited
 * @property {boolean} is_anonymous
 * @property {ChatAdministratorRights} rights
 * @property {string} custom_title
 */

/**
 * @typedef {Object} ChatMemberMember
 * @property {string} status
 * @property {User} user
 */

/**
 * @typedef {Object} ChatMemberRestricted
 * @property {string} status
 * @property {User} user
 * @property {boolean} is_member
 * @property {boolean} can_send_messages
 * @property {boolean} can_send_audios
 * @property {boolean} can_send_documents
 * @property {boolean} can_send_photos
 * @property {boolean} can_send_videos
 * @property {boolean} can_send_video_notes
 * @property {boolean} can_send_voice_notes
 * @property {boolean} can_send_polls
 * @property {boolean} can_send_other_messages
 * @property {boolean} can_add_web_page_previews
 * @property {boolean} can_change_info
 * @property {boolean} can_invite_users
 * @property {boolean} can_pin_messages
 * @property {boolean} can_manage_topics
 * @property {number} until_date
 */

/**
 * @typedef {Object} ChatMemberLeft
 * @property {string} status
 * @property {User} user
 */

/**
 * @typedef {Object} ChatMemberBanned
 * @property {string} status
 * @property {User} user
 * @property {number} until_date
 */

/**
 * @typedef {Object} ChatPermissions
 * @property {boolean} can_send_messages
 * @property {boolean} can_send_audios
 * @property {boolean} can_send_documents
 * @property {boolean} can_send_photos
 * @property {boolean} can_send_videos
 * @property {boolean} can_send_video_notes
 * @property {boolean} can_send_voice_notes
 * @property {boolean} can_send_polls
 * @property {boolean} can_send_other_messages
 * @property {boolean} can_add_web_page_previews
 * @property {boolean} can_change_info
 * @property {boolean} can_invite_users
 * @property {boolean} can_pin_messages
 * @property {boolean} can_manage_topics
 */

/**
 * @typedef {Object} ChatLocation
 * @property {Location} location
 * @property {string} address
 */

/**
 * @typedef {ReactionTypeEmoji|ReactionTypeCustomEmoji} ReactionType
 */

/**
 * @typedef {Object} ReactionTypeEmoji
 * @property {string} type
 * @property {string} emoji
 */

/**
 * @typedef {Object} ReactionTypeCustomEmoji
 * @property {string} type
 * @property {string} custom_emoji_id
 */

/**
 * @typedef {Object} ReactionCount
 * @property {ReactionType} type
 * @property {number} total_count
 */

/**
 * @typedef {Object} ForumTopic
 * @property {number} message_thread_id
 * @property {string} name
 * @property {number} icon_color
 * @property {string} icon_custom_emoji_id
 */

/**
 * @typedef {Object} BotCommand
 * @property {string} command
 * @property {string} description
 */

/**
 * @typedef {BotCommandScopeDefault | BotCommandScopeAllPrivateChats | BotCommandScopeAllGroupChats | BotCommandScopeAllChatAdministrators | BotCommandScopeChat | BotCommandScopeChatAdministrators | BotCommandScopeChatMember} BotCommandScope
 */

/**
 * @typedef {Object} BotCommandScopeDefault
 * @property {string} type
 */

/**
 * @typedef {Object} BotCommandScopeAllPrivateChats
 * @property {string} type
 */

/**
 * @typedef {Object} BotCommandScopeAllGroupChats
 * @property {string} type
 */

/**
 * @typedef {Object} BotCommandScopeAllChatAdministrators
 * @property {string} type
 */

/**
 * @typedef {Object} BotCommandScopeChat
 * @property {string} type
 * @property {number|string} chat_id
 */

/**
 * @typedef {Object} BotCommandScopeChatAdministrators
 * @property {string} type
 * @property {(number|string)} chat_id
 */

/**
 * @typedef {Object} BotCommandScopeChatMember
 * @property {string} type
 * @property {(number|string)} chat_id
 * @property {number} user_id
 */

/**
 * @typedef {Object} BotName
 * @property {string} name
 */

/**
 * @typedef {Object} BotDescription
 * @property {string} description
 */

/**
 * @typedef {Object} BotShortDescription
 * @property {string} short_description
 */

/**
 * @typedef {MenuButtonCommands|MenuButtonWebApp|MenuButtonDefault} MenuButton
 */

/**
 * @typedef {Object} MenuButtonCommands
 * @property {string} type
 */

/**
 * @typedef {Object} MenuButtonWebApp
 * @property {string} type
 * @property {string} text
 * @property {WebAppInfo} web_app
 */

/**
 * @typedef {Object} MenuButtonDefault
 * @property {string} type
 */

/**
 * @typedef {ChatBoostSourcePremium|ChatBoostSourceGiftCode|ChatBoostSourceGiveaway} ChatBoostSource
 */

/**
 * @typedef {Object} ChatBoostSourcePremium
 * @property {string} source
 * @property {User} user
 */

/**
 * @typedef {Object} ChatBoostSourceGiftCode
 * @property {string} source
 * @property {User} user
 */

/**
 * @typedef {Object} ChatBoostSourceGiveaway
 * @property {string} source
 * @property {number} giveaway_message_id
 * @property {User} user
 * @property {boolean} is_unclaimed
 */

/**
 * @typedef {Object} ChatBoost
 * @property {string} boost_id
 * @property {number} add_date
 * @property {number} expiration_date
 * @property {ChatBoostSource} source
 */

/**
 * @typedef {Object} UserChatBoosts
 * @property {ChatBoost[]} boosts
 */

/**
 * @typedef {Object} ResponseParameters
 * @property {number} migrate_to_chat_id
 * @property {number} retry_after
 */

/**
 * @typedef {InputMediaAnimation | InputMediaDocument | InputMediaAudio | InputMediaPhoto | InputMediaVideo} InputMedia
 */

/**
 * @typedef {Object} InputMediaPhoto
 * @property {string} type - Must be "photo".
 * @property {string} media - File to send.
 * @property {string} [caption] - Optional. Caption of the photo.
 * @property {string} [parse_mode] - Optional. Mode for parsing entities in the caption.
 * @property {MessageEntity[]} [caption_entities] - Optional. Special entities in the caption.
 * @property {boolean} [has_spoiler] - Optional. True if photo is a spoiler.
 */

/**
 * @typedef {Object} InputMediaVideo
 * @property {string} type - Must be "video".
 * @property {string} media - File to send.
 * @property {InputFile|string} [thumbnail] - Optional. Thumbnail of the file.
 * @property {string} [caption] - Optional. Caption of the video.
 * @property {string} [parse_mode] - Optional. Mode for parsing entities in the caption.
 * @property {MessageEntity[]} [caption_entities] - Optional. Special entities in the caption.
 * @property {number} [width] - Optional. Video width.
 * @property {number} [height] - Optional. Video height.
 * @property {number} [duration] - Optional. Video duration in seconds.
 * @property {boolean} [supports_streaming] - Optional. True if video is suitable for streaming.
 * @property {boolean} [has_spoiler] - Optional. True if video is a spoiler.
 */

/**
 * @typedef {Object} InputMediaAnimation
 * @property {string} type - Must be "animation".
 * @property {string} media - File to send.
 * @property {InputFile|string} [thumbnail] - Optional. Thumbnail of the file.
 * @property {string} [caption] - Optional. Caption of the animation.
 * @property {string} [parse_mode] - Optional. Mode for parsing entities in the caption.
 * @property {MessageEntity[]} [caption_entities] - Optional. Special entities in the caption.
 * @property {number} [width] - Optional. Animation width.
 * @property {number} [height] - Optional. Animation height.
 * @property {number} [duration] - Optional. Animation duration in seconds.
 * @property {boolean} [has_spoiler] - Optional. True if animation is a spoiler.
 */

/**
 * @typedef InputMediaAudio
 * @type {object}
 * @property {string} type
 * @property {string} media
 * @property {InputFile|string} [thumbnail]
 * @property {string} [caption]
 * @property {string} [parse_mode]
 * @property {MessageEntity[]} [caption_entities]
 * @property {number} [duration]
 * @property {string} [performer]
 * @property {string} [title]
 */

/**
 * @typedef InputMediaDocument
 * @type {object}
 * @property {string} type
 * @property {string} media
 * @property {InputFile|string} [thumbnail]
 * @property {string} [caption]
 * @property {string} [parse_mode]
 * @property {MessageEntity[]} [caption_entities]
 * @property {boolean} [disable_content_type_detection]
 */

/**
 * @typedef Sticker
 * @type {object}
 * @property {string} file_id
 * @property {string} file_unique_id
 * @property {string} type
 * @property {number} width
 * @property {number} height
 * @property {boolean} is_animated
 * @property {boolean} is_video
 * @property {PhotoSize} [thumbnail]
 * @property {string} [emoji]
 * @property {string} [set_name]
 * @property {File} [premium_animation]
 * @property {MaskPosition} [mask_position]
 * @property {string} [custom_emoji_id]
 * @property {boolean} [needs_repainting]
 * @property {number} [file_size]
 */

/**
 * @typedef {Object} StickerSet
 * @property {string} name - Sticker set name.
 * @property {string} title - Sticker set title.
 * @property {string} sticker_type - Type of stickers in the set.
 * @property {boolean} is_animated - True if the sticker set contains animated stickers.
 * @property {boolean} is_video - True if the sticker set contains video stickers.
 * @property {Sticker[]} stickers - List of all set stickers.
 * @property {PhotoSize} [thumbnail] - Optional. Sticker set thumbnail.
 */

/**
 * @typedef {Object} MaskPosition
 * @property {string} point - The part of the face relative to which the mask should be placed.
 * @property {number} x_shift - Shift by X-axis measured in widths of the mask scaled to the face size.
 * @property {number} y_shift - Shift by Y-axis measured in heights of the mask scaled to the face size.
 * @property {number} scale - Mask scaling coefficient.
 */

/**
 * @typedef {Object} InputSticker
 * @property {(InputFile|string)} sticker - The added sticker.
 * @property {string[]} emoji_list - List of 1-20 emoji associated with the sticker.
 * @property {MaskPosition} [mask_position] - Optional. Position where the mask should be placed on faces.
 * @property {string[]} [keywords] - Optional. List of 0-20 search keywords for the sticker.
 */

/**
 * @typedef {Object} InlineQueryResultsButton
 * @property {string} text - Label text on the button.
 * @property {WebAppInfo} [web_app] - Description of the Web App.
 * @property {string} [start_parameter] - Deep-linking parameter.
 */

/**
 * @typedef {InlineQueryResultCachedAudio | InlineQueryResultCachedDocument | InlineQueryResultCachedGif | InlineQueryResultCachedMpeg4Gif | InlineQueryResultCachedPhoto | InlineQueryResultCachedSticker | InlineQueryResultCachedVideo | InlineQueryResultCachedVoice | InlineQueryResultArticle | InlineQueryResultAudio | InlineQueryResultContact | InlineQueryResultGame | InlineQueryResultDocument | InlineQueryResultGif | InlineQueryResultLocation | InlineQueryResultMpeg4Gif | InlineQueryResultPhoto | InlineQueryResultVenue | InlineQueryResultVideo | InlineQueryResultVoice} InlineQueryResult
 */

/**
 * @typedef {Object} InlineQueryResultArticle
 * @property {string} type
 * @property {string} id
 * @property {string} title
 * @property {InputMessageContent} input_message_content
 * @property {InlineKeyboardMarkup} [reply_markup]
 * @property {string} [url]
 * @property {boolean} [hide_url]
 * @property {string} [description]
 * @property {string} [thumbnail_url]
 * @property {number} [thumbnail_width]
 * @property {number} [thumbnail_height]
 */

/**
 * @typedef {Object} InlineQueryResultPhoto
 * @property {string} type
 * @property {string} id
 * @property {string} photo_url
 * @property {string} thumbnail_url
 * @property {number} [photo_width]
 * @property {number} [photo_height]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [caption]
 * @property {string} [parse_mode]
 * @property {MessageEntity[]} [caption_entities]
 * @property {InlineKeyboardMarkup} [reply_markup]
 * @property {InputMessageContent} [input_message_content]
 */

/**
 * @typedef {Object} InlineQueryResultGif
 * @property {string} type
 * @property {string} id
 * @property {string} gif_url
 * @property {number} [gif_width]
 * @property {number} [gif_height]
 * @property {number} [gif_duration]
 * @property {string} thumbnail_url
 * @property {string} [thumbnail_mime_type]
 * @property {string} [title]
 * @property {string} [caption]
 * @property {string} [parse_mode]
 * @property {MessageEntity[]} [caption_entities]
 * @property {InlineKeyboardMarkup} [reply_markup]
 * @property {InputMessageContent} [input_message_content]
 */

/**
 * @typedef {Object} InlineQueryResultMpeg4Gif
 * @property {string} type
 * @property {string} id
 * @property {string} mpeg4_url
 * @property {number} [mpeg4_width]
 * @property {number} [mpeg4_height]
 * @property {number} [mpeg4_duration]
 * @property {string} thumbnail_url
 * @property {string} [thumbnail_mime_type]
 * @property {string} [title]
 * @property {string} [caption]
 * @property {string} [parse_mode]
 * @property {MessageEntity[]} [caption_entities]
 * @property {InlineKeyboardMarkup} [reply_markup]
 * @property {InputMessageContent} [input_message_content]
 */

/**
 * @typedef {Object} InlineQueryResultVideo
 * @property {string} type
 * @property {string} id
 * @property {string} video_url
 * @property {string} mime_type
 * @property {string} thumbnail_url
 * @property {string} title
 * @property {string} [caption]
 * @property {string} [parse_mode]
 * @property {MessageEntity[]} [caption_entities]
 * @property {number} [video_width]
 * @property {number} [video_height]
 * @property {number} [video_duration]
 * @property {string} [description]
 * @property {InlineKeyboardMarkup} [reply_markup]
 * @property {InputMessageContent} [input_message_content]
 */

/**
 * @typedef {Object} InlineQueryResultAudio
 * @property {string} type
 * @property {string} id
 * @property {string} audio_url
 * @property {string} title
 * @property {string} [caption]
 * @property {string} [parse_mode]
 * @property {MessageEntity[]} [caption_entities]
 * @property {string} [performer]
 * @property {number} [audio_duration]
 * @property {InlineKeyboardMarkup} [reply_markup]
 * @property {InputMessageContent} [input_message_content]
 */

/**
 * @typedef {Object} InlineQueryResultVoice
 * @property {string} type
 * @property {string} id
 * @property {string} voice_url
 * @property {string} title
 * @property {string} [caption]
 * @property {string} [parse_mode]
 * @property {MessageEntity[]} [caption_entities]
 * @property {number} [voice_duration]
 * @property {InlineKeyboardMarkup} [reply_markup]
 * @property {InputMessageContent} [input_message_content]
 */

/**
 * @typedef {Object} InlineQueryResultDocument
 * @property {string} type
 * @property {string} id
 * @property {string} title
 * @property {string} [caption]
 * @property {string} [parse_mode]
 * @property {MessageEntity[]} [caption_entities]
 * @property {string} document_url
 * @property {string} mime_type
 * @property {string} [description]
 * @property {InlineKeyboardMarkup} [reply_markup]
 * @property {InputMessageContent} [input_message_content]
 * @property {string} [thumbnail_url]
 * @property {number} [thumbnail_width]
 * @property {number} [thumbnail_height]
 */

/**
 * @typedef {Object} InlineQueryResultLocation
 * @property {string} type
 * @property {string} id
 * @property {number} latitude
 * @property {number} longitude
 * @property {string} title
 * @property {number} [horizontal_accuracy]
 * @property {number} [live_period]
 * @property {number} [heading]
 * @property {number} [proximity_alert_radius]
 * @property {InlineKeyboardMarkup} [reply_markup]
 * @property {InputMessageContent} [input_message_content]
 * @property {string} [thumbnail_url]
 * @property {number} [thumbnail_width]
 * @property {number} [thumbnail_height]
 */

/**
 * @typedef {Object} InlineQueryResultVenue
 * @property {string} type - Must be "venue".
 * @property {string} id - Unique identifier, 1-64 bytes.
 * @property {number} latitude - Latitude of the venue.
 * @property {number} longitude - Longitude of the venue.
 * @property {string} title - Title of the venue.
 * @property {string} address - Address of the venue.
 * @property {string} [foursquare_id] - Optional. Foursquare ID of the venue.
 * @property {string} [foursquare_type] - Optional. Foursquare type of the venue.
 * @property {string} [google_place_id] - Optional. Google Places ID of the venue.
 * @property {string} [google_place_type] - Optional. Google Places type of the venue.
 * @property {InlineKeyboardMarkup} [reply_markup] - Optional. Inline keyboard attached to the message.
 * @property {InputMessageContent} [input_message_content] - Optional. Content to be sent instead of the venue.
 * @property {string} [thumbnail_url] - Optional. URL of the result's thumbnail.
 * @property {number} [thumbnail_width] - Optional. Thumbnail width.
 * @property {number} [thumbnail_height] - Optional. Thumbnail height.
 */

/**
 * @typedef {Object} InlineQueryResultContact
 * @property {string} type - Must be "contact".
 * @property {string} id - Unique identifier, 1-64 bytes.
 * @property {string} phone_number - Contact's phone number.
 * @property {string} first_name - Contact's first name.
 * @property {string} [last_name] - Optional. Contact's last name.
 * @property {string} [vcard] - Optional. VCard of the contact.
 * @property {InlineKeyboardMarkup} [reply_markup] - Optional. Inline keyboard attached to the message.
 * @property {InputMessageContent} [input_message_content] - Optional. Content to be sent instead of the contact.
 * @property {string} [thumbnail_url] - Optional. URL of the result's thumbnail.
 * @property {number} [thumbnail_width] - Optional. Thumbnail width.
 * @property {number} [thumbnail_height] - Optional. Thumbnail height.
 */

/**
 * @typedef {Object} InlineQueryResultGame
 * @property {string} type - Must be "game".
 * @property {string} id - Unique identifier, 1-64 bytes.
 * @property {string} game_short_name - Short name of the game.
 * @property {InlineKeyboardMarkup} [reply_markup] - Optional. Inline keyboard attached to the message.
 */

/**
 * @typedef {Object} InlineQueryResultCachedPhoto
 * @property {string} type
 * @property {string} id
 * @property {string} photo_file_id
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [caption]
 * @property {string} [parse_mode]
 * @property {MessageEntity[]} [caption_entities]
 * @property {InlineKeyboardMarkup} [reply_markup]
 * @property {InputMessageContent} [input_message_content]
 */

/**
 * @typedef {Object} InlineQueryResultCachedGif
 * @property {string} type
 * @property {string} id
 * @property {string} gif_file_id
 * @property {string} [title]
 * @property {string} [caption]
 * @property {string} [parse_mode]
 * @property {MessageEntity[]} [caption_entities]
 * @property {InlineKeyboardMarkup} [reply_markup]
 * @property {InputMessageContent} [input_message_content]
 */

/**
 * @typedef {Object} InlineQueryResultCachedMpeg4Gif
 * @property {string} type
 * @property {string} id
 * @property {string} mpeg4_file_id
 * @property {string} [title]
 * @property {string} [caption]
 * @property {string} [parse_mode]
 * @property {MessageEntity[]} [caption_entities]
 * @property {InlineKeyboardMarkup} [reply_markup]
 * @property {InputMessageContent} [input_message_content]
 */

/**
 * @typedef {Object} InlineQueryResultCachedSticker
 * @property {string} type - The type of the result.
 * @property {string} id - Unique identifier for this result.
 * @property {string} sticker_file_id - A valid file identifier of the sticker.
 * @property {InlineKeyboardMarkup} [reply_markup] - Inline keyboard attached to the message.
 * @property {InputMessageContent} [input_message_content] - Content of the message to be sent instead of the sticker.
 */

/**
 * @typedef {Object} InlineQueryResultCachedDocument
 * @property {string} type - The type of the result.
 * @property {string} id - Unique identifier for this result.
 * @property {string} title - Title for the result.
 * @property {string} document_file_id - A valid file identifier for the file.
 * @property {string} [description] - Short description of the result.
 * @property {string} [caption] - Caption of the document to be sent.
 * @property {string} [parse_mode] - Mode for parsing entities in the document caption.
 * @property {MessageEntity[]} [caption_entities] - List of special entities that appear in the caption.
 * @property {InlineKeyboardMarkup} [reply_markup] - Inline keyboard attached to the message.
 * @property {InputMessageContent} [input_message_content] - Content of the message to be sent instead of the file.
 */

/**
 * @typedef {Object} InlineQueryResultCachedVideo
 * @property {string} type - The type of the result.
 * @property {string} id - Unique identifier for this result.
 * @property {string} video_file_id - A valid file identifier for the video file.
 * @property {string} title - Title for the result.
 * @property {string} [description] - Short description of the result.
 * @property {string} [caption] - Caption of the video to be sent.
 * @property {string} [parse_mode] - Mode for parsing entities in the video caption.
 * @property {MessageEntity[]} [caption_entities] - List of special entities that appear in the caption.
 * @property {InlineKeyboardMarkup} [reply_markup] - Inline keyboard attached to the message.
 * @property {InputMessageContent} [input_message_content] - Content of the message to be sent instead of the video.
 */

/**
 * @typedef {Object} InlineQueryResultCachedVoice
 * @property {string} type - Must be "voice".
 * @property {string} id - Unique identifier for this result, 1-64 bytes.
 * @property {string} voice_file_id - A valid file identifier for the voice message.
 * @property {string} title - Voice message title.
 * @property {string} [caption] - Optional. Caption, 0-1024 characters after entities parsing.
 * @property {string} [parse_mode] - Optional. Mode for parsing entities in the caption.
 * @property {MessageEntity[]} [caption_entities] - Optional. List of special entities in the caption.
 * @property {InlineKeyboardMarkup} [reply_markup] - Optional. Inline keyboard attached to the message.
 * @property {InputMessageContent} [input_message_content] - Optional. Content of the message to be sent instead of the voice message.
 */

/**
 * @typedef {Object} InlineQueryResultCachedAudio
 * @property {string} type - Must be "audio".
 * @property {string} id - Unique identifier for this result, 1-64 bytes.
 * @property {string} audio_file_id - A valid file identifier for the audio file.
 * @property {string} [caption] - Optional. Caption, 0-1024 characters after entities parsing.
 * @property {string} [parse_mode] - Optional. Mode for parsing entities in the caption.
 * @property {MessageEntity[]} [caption_entities] - Optional. List of special entities in the caption.
 * @property {InlineKeyboardMarkup} [reply_markup] - Optional. Inline keyboard attached to the message.
 * @property {InputMessageContent} [input_message_content] - Optional. Content of the message to be sent instead of the audio.
 */

/**
 * @typedef {InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent | InputInvoiceMessageContent} InputMessageContent
 */

/**
 * @typedef {Object} InputTextMessageContent - Represents the content of a text message for inline queries.
 * @property {string} message_text - Text of the message to be sent.
 * @property {string} [parse_mode] - Mode for parsing entities in the message text.
 * @property {MessageEntity[]} [entities] - List of special entities in message text.
 * @property {LinkPreviewOptions} [link_preview_options] - Link preview generation options.
 */

/**
 * @typedef {Object} InputLocationMessageContent - Represents the content of a location message for inline queries.
 * @property {number} latitude - Latitude of the location.
 * @property {number} longitude - Longitude of the location.
 * @property {number} [horizontal_accuracy] - The radius of uncertainty for the location.
 * @property {number} [live_period] - Period for which the location can be updated.
 * @property {number} [heading] - Direction in which the user is moving.
 * @property {number} [proximity_alert_radius] - Maximum distance for proximity alerts.
 */

/**
 * @typedef {Object} InputVenueMessageContent - Represents the content of a venue message for inline queries.
 * @property {number} latitude - Latitude of the venue.
 * @property {number} longitude - Longitude of the venue.
 * @property {string} title - Name of the venue.
 * @property {string} address - Address of the venue.
 * @property {string} [foursquare_id] - Foursquare identifier of the venue.
 * @property {string} [foursquare_type] - Foursquare type of the venue.
 * @property {string} [google_place_id] - Google Places identifier of the venue.
 * @property {string} [google_place_type] - Google Places type of the venue.
 */

/**
 * @typedef {Object} InputContactMessageContent
 * @property {string} phone_number - Contact's phone number.
 * @property {string} first_name - Contact's first name.
 * @property {string} [last_name] - Contact's last name.
 * @property {string} [vcard] - Additional data about the contact in the form of a vCard.
 */

/**
 * @typedef {Object} InputInvoiceMessageContent
 * @property {string} title - Product name.
 * @property {string} description - Product description.
 * @property {string} payload - Bot-defined invoice payload.
 * @property {string} provider_token - Payment provider token.
 * @property {string} currency - Three-letter ISO 4217 currency code.
 * @property {LabeledPrice[]} prices - Price breakdown.
 * @property {number} [max_tip_amount] - The maximum accepted amount for tips.
 * @property {number[]} [suggested_tip_amounts] - Suggested amounts of tip.
 * @property {string} [provider_data] - Data about the invoice for the payment provider.
 * @property {string} [photo_url] - URL of the product photo for the invoice.
 * @property {number} [photo_size] - Photo size in bytes.
 * @property {number} [photo_width] - Photo width.
 * @property {number} [photo_height] - Photo height.
 * @property {boolean} [need_name] - If the user's full name is required.
 * @property {boolean} [need_phone_number] - If the user's phone number is required.
 * @property {boolean} [need_email] - If the user's email address is required.
 * @property {boolean} [need_shipping_address] - If the user's shipping address is required.
 * @property {boolean} [send_phone_number_to_provider] - If the user's phone number should be sent to the provider.
 * @property {boolean} [send_email_to_provider] - If the user's email address should be sent to the provider.
 * @property {boolean} [is_flexible] - If the final price depends on the shipping method.
 */

/**
 * @typedef {Object} SentWebAppMessage
 * @property {string} [inline_message_id] - Identifier of the sent inline message.
 */

/**
 * @typedef {Object} answerShippingQuery
 * @property {string} shipping_query_id - Unique identifier for the query.
 * @property {boolean} ok - True if delivery is possible, False otherwise.
 * @property {ShippingOption[]} [shipping_options] - Available shipping options.
 * @property {string} [error_message] - Error message if delivery is not possible.
 */

/**
 * @typedef {Object} answerPreCheckoutQuery
 * @property {string} pre_checkout_query_id - Unique identifier for the query.
 * @property {boolean} ok - True if order can proceed, False otherwise.
 * @property {string} [error_message] - Error message if order cannot proceed.
 */

/**
 * @typedef {Object} LabeledPrice
 * @property {string} label - Portion label.
 * @property {number} amount - Price of the product in the smallest units of the currency.
 */

/**
 * @typedef {Object} ShippingAddress
 * @property {string} country_code - Two-letter ISO 3166-1 alpha-2 country code.
 * @property {string} state - State, if applicable.
 * @property {string} city - City.
 * @property {string} street_line1 - First line for the address.
 * @property {string} street_line2 - Second line for the address.
 * @property {string} post_code - Address post code.
 */

/**
 * @typedef {Object} OrderInfo
 * @property {string} [name] - User name.
 * @property {string} [phone_number] - User's phone number.
 * @property {string} [email] - User email.
 * @property {ShippingAddress} [shipping_address] - User shipping address.
 */

/**
 * @typedef {Object} ShippingOption
 * @property {string} id - Shipping option identifier.
 * @property {string} title - Option title.
 * @property {LabeledPrice[]} prices - List of price portions.
 */

/**
 * @typedef {Object} PassportData
 * @property {EncryptedPassportElement[]} data - Array with information about documents and other Telegram Passport elements.
 * @property {EncryptedCredentials} credentials - Encrypted credentials.
 */

/**
 * @typedef {Object} PassportFile
 * @property {string} file_id - Identifier for this file.
 * @property {string} file_unique_id - Unique identifier for this file.
 * @property {number} file_size - File size in bytes.
 * @property {number} file_date - Unix time when the file was uploaded.
 */

/**
 * @typedef {Object} EncryptedPassportElement
 * @property {string} type - Element type.
 * @property {string} [data] - Base64-encoded encrypted data.
 * @property {string} [phone_number] - User's verified phone number.
 * @property {string} [email] - User's verified email address.
 * @property {PassportFile[]} [files] - Array of encrypted files with documents.
 * @property {PassportFile} [front_side] - Encrypted file with the front side of the document.
 * @property {PassportFile} [reverse_side] - Encrypted file with the reverse side of the document.
 * @property {PassportFile} [selfie] - Encrypted file with the selfie of the user holding a document.
 * @property {PassportFile[]} [translation] - Array of encrypted files with translated versions of documents.
 * @property {string} hash - Base64-encoded element hash.
 */

/**
 * @typedef {Object} EncryptedCredentials
 * @property {string} data - Base64-encoded encrypted JSON-serialized data.
 * @property {string} hash - Base64-encoded data hash for authentication.
 * @property {string} secret - Base64-encoded secret for data decryption.
 */

/**
 * @typedef {Object} PassportElementErrorDataField
 * @property {string} source - Error source, must be 'data'.
 * @property {string} type - Section of the user's Telegram Passport which has the error.
 * @property {string} field_name - Name of the data field which has the error.
 * @property {string} data_hash - Base64-encoded data hash.
 * @property {string} message - Error message.
 */

/**
 * @typedef {Object} PassportElementErrorFrontSide
 * @property {string} source - Error source, must be 'front_side'.
 * @property {string} type - Section of the user's Telegram Passport which has the issue.
 * @property {string} file_hash - Base64-encoded hash of the file with the front side.
 * @property {string} message - Error message.
 */

/**
 * @typedef {PassportElementErrorDataField | PassportElementErrorFrontSide | PassportElementErrorReverseSide | PassportElementErrorSelfie | PassportElementErrorFile | PassportElementErrorFiles | PassportElementErrorTranslationFile | PassportElementErrorTranslationFiles | PassportElementErrorUnspecified} PassportElementError
 */

/**
 * @typedef {Object} PassportElementErrorReverseSide
 * @property {string} source
 * @property {string} type
 * @property {string} file_hash
 * @property {string} message
 */

/**
 * @typedef {Object} PassportElementErrorSelfie
 * @property {string} source
 * @property {string} type
 * @property {string} file_hash
 * @property {string} message
 */

/**
 * @typedef {Object} PassportElementErrorFile
 * @property {string} source
 * @property {string} type
 * @property {string} file_hash
 * @property {string} message
 */

/**
 * @typedef {Object} PassportElementErrorFiles
 * @property {string} source
 * @property {string} type
 * @property {string[]} file_hashes
 * @property {string} message
 */

/**
 * @typedef {Object} PassportElementErrorTranslationFile
 * @property {string} source - Error source, must be "translation_file".
 * @property {string} type - Type of Telegram Passport element with the issue.
 * @property {string} file_hash - Base64-encoded file hash.
 * @property {string} message - Error message.
 */

/**
 * @typedef {Object} PassportElementErrorTranslationFiles
 * @property {string} source - Error source, must be "translation_files".
 * @property {string} type - Type of Telegram Passport element with the issue.
 * @property {string[]} file_hashes - List of base64-encoded file hashes.
 * @property {string} message - Error message.
 */

/**
 * @typedef {Object} PassportElementErrorUnspecified
 * @property {string} source - Error source, must be "unspecified".
 * @property {string} type - Type of Telegram Passport element with the issue.
 * @property {string} element_hash - Base64-encoded element hash.
 * @property {string} message - Error message.
 */

/**
 * @typedef {Object} Game
 * @property {string} title - Title of the game.
 * @property {string} description - Description of the game.
 * @property {PhotoSize[]} photo - Array of photos.
 * @property {string} [text] - Optional. Brief description or high scores.
 * @property {MessageEntity[]} [text_entities] - Optional. Special entities in the text.
 * @property {Animation} [animation] - Optional. Animation to be displayed in the message.
 */

/**
 * @typedef {Object} GameHighScore
 * @property {number} position - Position in high score table for the game.
 * @property {User} user - User.
 * @property {number} score - Score.
 */

/**
 * @typedef {Object} SheetOperations
 * @property {function(Array): void} appendRow - Adds a new row to the end of the sheet.
 * @property {function(): void} clear - Clears the entire sheet.
 * @property {function(number, number, number=, number=): void} clearByRange - Clears a specific range in the sheet.
 * @property {function(number, number): void} clearValue - Clears the content of a specific cell.
 * @property {function(string): Range} findOne - Finds the next cell matching the query.
 * @property {function(string): Range[]} findAll - Finds all cells matching the query.
 * @property {function(number): void} deleteColumn - Deletes a specific column.
 * @property {function(number, number): void} deleteColumns - Deletes a specific number of columns starting from the given index.
 * @property {function(number): void} deleteRow - Deletes a specific row.
 * @property {function(number, number): void} deleteRows - Deletes a specific number of rows starting from the given index.
 * @property {function(): Object[][]} getSheetData - Gets all data from the sheet.
 * @property {function(): number} getLastColumn - Gets the last column that has content.
 * @property {function(): number} getLastRow - Gets the last row that has content.
 * @property {function(number): void} insertColumnAfter - Inserts a column after the specified column index.
 * @property {function(number): void} insertColumnBefore - Inserts a column before the specified column index.
 * @property {function(number, number): void} insertColumns - Inserts the specified number of columns at the specified column index.
 * @property {function(number, number): void} insertColumnsAfter - Inserts the specified number of columns after a given position.
 * @property {function(number, number): void} insertColumnsBefore - Inserts the specified number of columns before a given position.
 * @property {function(number): void} insertRowAfter - Inserts a row after the specified row index.
 * @property {function(number): void} insertRowBefore - Inserts a row before the specified row index.
 * @property {function(number, number): void} insertRows - Inserts the specified number of rows at the specified row index.
 * @property {function(number, number): void} insertRowsAfter - Inserts the specified number of rows after a given position.
 * @property {function(number, number): void} insertRowsBefore - Inserts the specified number of rows before a given position.
 * @property {function(number, number): void} moveColumns - Moves a column from one position to another.
 * @property {function(number, number): void} moveRows - Moves a row from one position to another.
 * @property {function(string): void} setName - Sets the name of the sheet.
 * @property {function(number, boolean=): void} sortByColumn - Sorts the sheet based on the specified column.
 * @property {function(*, number, number, number=, number=): void} saveOne - Saves a single value to a specified cell.
 * @property {function(Array, number, number, number=, number=): void} saveMany - Saves a range of values to the specified area.
 * @property {function(number, number): *} getValue - Gets the value of a specific cell.
 * @property {function(number, number, number=, number=): Object[][]} getValues - Gets values from a specified range.
 */

/**
 * Function that returns an object containing sheet operations for a given sheet name.
 * @typedef {function(string): SheetOperations} SheetMethod
 */
