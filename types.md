## Typedefs

<dl>
<dt><a href="#telesun">telesun</a> : <code>Object</code></dt>
<dd><p>main telesun class</p>
</dd>
<dt><a href="#LongPollingOptions">LongPollingOptions</a> : <code>Object</code></dt>
<dd><p>Options for initiating long polling.</p>
</dd>
<dt><a href="#PollingOptions">PollingOptions</a> : <code>Object</code></dt>
<dd><p>Options for initiating simple polling.</p>
</dd>
<dt><a href="#DevHookOptions">DevHookOptions</a> : <code>Object</code></dt>
<dd><p>Options for setting up a development webhook.</p>
</dd>
<dt><a href="#SetWebhookOptions">SetWebhookOptions</a> : <code>Object</code></dt>
<dd><p>Options for configuring the webhook.</p>
</dd>
<dt><a href="#DeleteWebhookOptions">DeleteWebhookOptions</a> : <code>Object</code></dt>
<dd><p>Options for deleting the configured webhook.</p>
</dd>
<dt><a href="#UpdateType">UpdateType</a> : <code>&quot;message&quot;</code> | <code>&quot;edited_message&quot;</code> | <code>&quot;channel_post&quot;</code> | <code>&quot;edited_channel_post&quot;</code> | <code>&quot;inline_query&quot;</code> | <code>&quot;chosen_inline_result&quot;</code> | <code>&quot;callback_query&quot;</code> | <code>&quot;shipping_query&quot;</code> | <code>&quot;pre_checkout_query&quot;</code> | <code>&quot;poll&quot;</code> | <code>&quot;poll_answer&quot;</code> | <code>&quot;my_chat_member&quot;</code> | <code>&quot;chat_member&quot;</code> | <code>&quot;chat_join_request&quot;</code> | <code>&quot;message_reaction&quot;</code> | <code>&quot;message_reaction_count&quot;</code> | <code>&quot;chat_boost&quot;</code> | <code>&quot;removed_chat_boost&quot;</code></dt>
<dd><p>Update types for the &#39;on&#39; method.</p>
</dd>
<dt><a href="#Format">Format</a> : <code>&quot;HTML&quot;</code> | <code>&quot;MarkdownV2&quot;</code></dt>
<dd><p>Formatting options.</p>
</dd>
<dt><a href="#UpdateConfig">UpdateConfig</a> : <code>&quot;webhook&quot;</code> | <code>&quot;polling&quot;</code></dt>
<dd><p>config options for devHook.</p>
</dd>
<dt><a href="#Server">Server</a> : <code>&quot;GAS&quot;</code> | <code>&quot;VERCEL&quot;</code> | <code>&quot;RENDER&quot;</code></dt>
<dd><p>server config options for devHook.</p>
</dd>
<dt><a href="#Update">Update</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ForwardMessageOptions">ForwardMessageOptions</a> : <code>Object</code></dt>
<dd><p>Options for forwarding a single message from one chat to another.</p>
</dd>
<dt><a href="#ForwardMessagesOptions">ForwardMessagesOptions</a> : <code>Object</code></dt>
<dd><p>Options for forwarding multiple messages from one chat to another.</p>
</dd>
<dt><a href="#CopyMessageOptions">CopyMessageOptions</a> : <code>Object</code></dt>
<dd><p>Options for copying a single message from one chat to another, potentially with a new caption.</p>
</dd>
<dt><a href="#CopyMessagesOptions">CopyMessagesOptions</a> : <code>Object</code></dt>
<dd><p>Options for copying multiple messages from one chat to another without changing the caption.</p>
</dd>
<dt><a href="#SendPhotoOptions">SendPhotoOptions</a> : <code>Object</code></dt>
<dd><p>Options for sending a photo.</p>
</dd>
<dt><a href="#SendAudioOptions">SendAudioOptions</a> : <code>Object</code></dt>
<dd><p>Options for sending an audio file.</p>
</dd>
<dt><a href="#SendDocumentOptions">SendDocumentOptions</a> : <code>Object</code></dt>
<dd><p>Options for sending a document.</p>
</dd>
<dt><a href="#SendVideoOptions">SendVideoOptions</a> : <code>Object</code></dt>
<dd><p>Options for sending a video.</p>
</dd>
<dt><a href="#SendAnimationOptions">SendAnimationOptions</a> : <code>Object</code></dt>
<dd><p>Options for sending an animation.</p>
</dd>
<dt><a href="#SendVoiceOptions">SendVoiceOptions</a> : <code>Object</code></dt>
<dd><p>Options for sending a voice message.</p>
</dd>
<dt><a href="#SendVideoNoteOptions">SendVideoNoteOptions</a> : <code>Object</code></dt>
<dd><p>Options for sending a video note.</p>
</dd>
<dt><a href="#SendMediaGroupOptions">SendMediaGroupOptions</a> : <code>Object</code></dt>
<dd><p>Options for sending a media group.</p>
</dd>
<dt><a href="#SendLocationOptions">SendLocationOptions</a> : <code>Object</code></dt>
<dd><p>Options for sending a location message.</p>
</dd>
<dt><a href="#SendVenueOptions">SendVenueOptions</a> : <code>Object</code></dt>
<dd><p>Options for sending a venue message.</p>
</dd>
<dt><a href="#SendContactOptions">SendContactOptions</a> : <code>Object</code></dt>
<dd><p>Options for sending a contact message.</p>
</dd>
<dt><a href="#SendPollOptions">SendPollOptions</a> : <code>Object</code></dt>
<dd><p>Options for sending a poll.</p>
</dd>
<dt><a href="#SendDiceOptions">SendDiceOptions</a> : <code>Object</code></dt>
<dd><p>Options for sending a dice message.</p>
</dd>
<dt><a href="#SendChatActionOptions">SendChatActionOptions</a> : <code>Object</code></dt>
<dd><p>Options for sending chat action.</p>
</dd>
<dt><a href="#SetMessageReactionOptions">SetMessageReactionOptions</a> : <code>Object</code></dt>
<dd><p>Options for setting message reaction.</p>
</dd>
<dt><a href="#GetUserProfilePhotosOptions">GetUserProfilePhotosOptions</a> : <code>Object</code></dt>
<dd><p>Options for getting a user&#39;s profile photos.</p>
</dd>
<dt><a href="#GetFileOptions">GetFileOptions</a> : <code>Object</code></dt>
<dd><p>Options for getting file information.</p>
</dd>
<dt><a href="#BanChatMemberOptions">BanChatMemberOptions</a> : <code>Object</code></dt>
<dd><p>Options for banning a chat member.</p>
</dd>
<dt><a href="#UnbanChatMemberOptions">UnbanChatMemberOptions</a> : <code>Object</code></dt>
<dd><p>Options for unbanning a previously banned user in a supergroup or channel.</p>
</dd>
<dt><a href="#RestrictChatMemberOptions">RestrictChatMemberOptions</a> : <code>Object</code></dt>
<dd><p>Options for restricting a user in a supergroup.</p>
</dd>
<dt><a href="#SetChatAdministratorCustomTitleOptions">SetChatAdministratorCustomTitleOptions</a> : <code>Object</code></dt>
<dd><p>Options for promoting or demoting a user in a supergroup or channel.</p>
</dd>
<dt><a href="#BanChatSenderChatOptions">BanChatSenderChatOptions</a> : <code>Object</code></dt>
<dd><p>Options for banning a channel chat in a supergroup or channel.</p>
</dd>
<dt><a href="#UnbanChatSenderChatOptions">UnbanChatSenderChatOptions</a> : <code>Object</code></dt>
<dd><p>Options for unbanning a previously banned channel chat.</p>
</dd>
<dt><a href="#SetChatPermissionsOptions">SetChatPermissionsOptions</a> : <code>Object</code></dt>
<dd><p>Options for setting default chat permissions for all members.</p>
</dd>
<dt><a href="#ExportChatInviteLinkOptions">ExportChatInviteLinkOptions</a> : <code>Object</code></dt>
<dd><p>Options for generating a new primary invite link for a chat.</p>
</dd>
<dt><a href="#CreateChatInviteLinkOptions">CreateChatInviteLinkOptions</a> : <code>Object</code></dt>
<dd><p>Options for creating an additional invite link for a chat.</p>
</dd>
<dt><a href="#EditChatInviteLinkOptions">EditChatInviteLinkOptions</a> : <code>Object</code></dt>
<dd><p>Options for editing a non-primary invite link created by the bot.</p>
</dd>
<dt><a href="#RevokeChatInviteLinkOptions">RevokeChatInviteLinkOptions</a> : <code>Object</code></dt>
<dd><p>Options for revoking an invite link created by the bot.</p>
</dd>
<dt><a href="#ChatJoinRequestOptions">ChatJoinRequestOptions</a> : <code>Object</code></dt>
<dd><p>Options for managing a chat join request.</p>
</dd>
<dt><a href="#SetChatPhotoOptions">SetChatPhotoOptions</a> : <code>Object</code></dt>
<dd><p>Options for setting a new chat photo.</p>
</dd>
<dt><a href="#deleteChatPhotoOptions">deleteChatPhotoOptions</a> : <code>Object</code></dt>
<dd><p>Basic options for operations on a chat.</p>
</dd>
<dt><a href="#SetChatTitleOptions">SetChatTitleOptions</a> : <code>Object</code></dt>
<dd><p>Options for changing the title of a chat.</p>
</dd>
<dt><a href="#SetChatDescriptionOptions">SetChatDescriptionOptions</a> : <code>Object</code></dt>
<dd><p>Options for changing the description of a chat.</p>
</dd>
<dt><a href="#PinChatMessageOptions">PinChatMessageOptions</a> : <code>Object</code></dt>
<dd><p>Options for pinning a message in a chat.</p>
</dd>
<dt><a href="#UnpinChatMessageOptions">UnpinChatMessageOptions</a> : <code>Object</code></dt>
<dd><p>Options for unpinning a chat message.</p>
</dd>
<dt><a href="#ChatIdOptions">ChatIdOptions</a> : <code>Object</code></dt>
<dd><p>Options requiring only a chat ID.</p>
</dd>
<dt><a href="#GetChatMemberOptions">GetChatMemberOptions</a> : <code>Object</code></dt>
<dd><p>Options for getting information about a chat member.</p>
</dd>
<dt><a href="#GetChatMemberOptions">GetChatMemberOptions</a> : <code>Object</code></dt>
<dd><p>Options for getting information about a member of a chat.</p>
</dd>
<dt><a href="#SetChatStickerSetOptions">SetChatStickerSetOptions</a> : <code>Object</code></dt>
<dd><p>Options for setting a new group sticker set for a supergroup.</p>
</dd>
<dt><a href="#CreateForumTopicOptions">CreateForumTopicOptions</a> : <code>Object</code></dt>
<dd><p>Options for creating a topic in a forum supergroup chat.</p>
</dd>
<dt><a href="#EditForumTopicOptions">EditForumTopicOptions</a> : <code>Object</code></dt>
<dd><p>Options for editing the name and icon of a forum topic.</p>
</dd>
<dt><a href="#ForumTopicManagementOptions">ForumTopicManagementOptions</a> : <code>Object</code></dt>
<dd><p>Options for closing or reopening a topic in a forum supergroup chat.</p>
</dd>
<dt><a href="#EditGeneralForumTopicOptions">EditGeneralForumTopicOptions</a> : <code>Object</code></dt>
<dd><p>Options for editing the name of the &#39;General&#39; topic in a forum supergroup chat.</p>
</dd>
<dt><a href="#AnswerCallbackQueryOptions">AnswerCallbackQueryOptions</a> : <code>Object</code></dt>
<dd><p>Options for sending answers to callback queries sent from inline keyboards.</p>
</dd>
<dt><a href="#GetUserChatBoostsOptions">GetUserChatBoostsOptions</a> : <code>Object</code></dt>
<dd><p>Options for getting the list of boosts added to a chat by a user.</p>
</dd>
<dt><a href="#SetMyCommandsOptions">SetMyCommandsOptions</a> : <code>Object</code></dt>
<dd><p>Options for changing the list of the bot&#39;s commands.</p>
</dd>
<dt><a href="#DeleteMyCommandsOptions">DeleteMyCommandsOptions</a> : <code>Object</code></dt>
<dd><p>Options for deleting the bot&#39;s commands for a given scope and language.</p>
</dd>
<dt><a href="#GetMyCommandsOptions">GetMyCommandsOptions</a> : <code>Object</code></dt>
<dd><p>Options for getting the list of the bot&#39;s commands.</p>
</dd>
<dt><a href="#SetMyNameOptions">SetMyNameOptions</a> : <code>Object</code></dt>
<dd><p>Options for setting the bot&#39;s name.</p>
</dd>
<dt><a href="#GetMyNameOptions">GetMyNameOptions</a> : <code>Object</code></dt>
<dd><p>Options for getting the bot&#39;s name.</p>
</dd>
<dt><a href="#GetMyDescriptionOptions">GetMyDescriptionOptions</a> : <code>Object</code></dt>
<dd><p>Options for getting the bot&#39;s description.</p>
</dd>
<dt><a href="#SetMyDescriptionOptions">SetMyDescriptionOptions</a> : <code>Object</code></dt>
<dd><p>Options for setting the bot&#39;s description.</p>
</dd>
<dt><a href="#GetMyShortDescriptionOptions">GetMyShortDescriptionOptions</a> : <code>Object</code></dt>
<dd><p>Options for getting the bot&#39;s short description.</p>
</dd>
<dt><a href="#SetChatMenuButtonOptions">SetChatMenuButtonOptions</a> : <code>Object</code></dt>
<dd><p>Options for setting the chat menu button.</p>
</dd>
<dt><a href="#GetChatMenuButtonOptions">GetChatMenuButtonOptions</a> : <code>Object</code></dt>
<dd><p>Options for getting the chat menu button.</p>
</dd>
<dt><a href="#SetMyDefaultAdministratorRightsOptions">SetMyDefaultAdministratorRightsOptions</a> : <code>Object</code></dt>
<dd><p>Options for setting the bot&#39;s default administrator rights.</p>
</dd>
<dt><a href="#GetMyDefaultAdministratorRightsOptions">GetMyDefaultAdministratorRightsOptions</a> : <code>Object</code></dt>
<dd><p>Options for getting the bot&#39;s default administrator rights.</p>
</dd>
<dt><a href="#EditMessageTextOptions">EditMessageTextOptions</a> : <code>Object</code></dt>
<dd><p>Options for editing the text of messages.</p>
</dd>
<dt><a href="#EditMessageCaptionOptions">EditMessageCaptionOptions</a> : <code>Object</code></dt>
<dd><p>Options for editing the caption of a message.</p>
</dd>
<dt><a href="#EditMessageMediaOptions">EditMessageMediaOptions</a> : <code>Object</code></dt>
<dd><p>Options for editing the media content of messages.</p>
</dd>
<dt><a href="#EditMessageLiveLocationOptions">EditMessageLiveLocationOptions</a> : <code>Object</code></dt>
<dd><p>Options for editing the live location of a message.</p>
</dd>
<dt><a href="#StopMessageLiveLocationOptions">StopMessageLiveLocationOptions</a> : <code>Object</code></dt>
<dd><p>Options for stopping a live location message.</p>
</dd>
<dt><a href="#StopMessageLiveLocationOptions">StopMessageLiveLocationOptions</a> : <code>Object</code></dt>
<dd><p>Options for stopping a live location message.</p>
</dd>
<dt><a href="#EditMessageReplyMarkupOptions">EditMessageReplyMarkupOptions</a> : <code>Object</code></dt>
<dd><p>Options for editing the reply markup of messages.</p>
</dd>
<dt><a href="#StopPollOptions">StopPollOptions</a> : <code>Object</code></dt>
<dd><p>Options for stopping a poll.</p>
</dd>
<dt><a href="#DeleteMessageOptions">DeleteMessageOptions</a> : <code>Object</code></dt>
<dd><p>Options for deleting a message.</p>
</dd>
<dt><a href="#DeleteMessagesOptions">DeleteMessagesOptions</a> : <code>Object</code></dt>
<dd><p>Options for deleting multiple messages.</p>
</dd>
<dt><a href="#SendStickerOptions">SendStickerOptions</a> : <code>Object</code></dt>
<dd><p>Options for sending a sticker.</p>
</dd>
<dt><a href="#GetStickerSetOptions">GetStickerSetOptions</a> : <code>Object</code></dt>
<dd><p>Options for getting a sticker set.</p>
</dd>
<dt><a href="#GetCustomEmojiStickersOptions">GetCustomEmojiStickersOptions</a> : <code>Object</code></dt>
<dd><p>Options for getting custom emoji stickers.</p>
</dd>
<dt><a href="#UploadStickerFileOptions">UploadStickerFileOptions</a> : <code>Object</code></dt>
<dd><p>Options for uploading a sticker file.</p>
</dd>
<dt><a href="#CreateNewStickerSetOptions">CreateNewStickerSetOptions</a> : <code>Object</code></dt>
<dd><p>Options for creating a new sticker set.</p>
</dd>
<dt><a href="#AddStickerToSetOptions">AddStickerToSetOptions</a> : <code>Object</code></dt>
<dd><p>Options for adding a new sticker to a set.</p>
</dd>
<dt><a href="#SetStickerPositionInSetOptions">SetStickerPositionInSetOptions</a> : <code>Object</code></dt>
<dd><p>Options for setting the position of a sticker in the set.</p>
</dd>
<dt><a href="#DeleteStickerFromSetOptions">DeleteStickerFromSetOptions</a> : <code>Object</code></dt>
<dd><p>Options for deleting a sticker from a set.</p>
</dd>
<dt><a href="#SetStickerEmojiListOptions">SetStickerEmojiListOptions</a> : <code>Object</code></dt>
<dd><p>Options for setting the emoji list for a sticker.</p>
</dd>
<dt><a href="#SetStickerKeywordsOptions">SetStickerKeywordsOptions</a> : <code>Object</code></dt>
<dd><p>Options for setting keywords for a sticker.</p>
</dd>
<dt><a href="#SetStickerMaskPositionOptions">SetStickerMaskPositionOptions</a> : <code>Object</code></dt>
<dd><p>Options for setting the mask position of a sticker.</p>
</dd>
<dt><a href="#SetStickerSetTitleOptions">SetStickerSetTitleOptions</a> : <code>Object</code></dt>
<dd><p>Options for setting the title of a sticker set.</p>
</dd>
<dt><a href="#SetStickerSetThumbnailOptions">SetStickerSetThumbnailOptions</a> : <code>Object</code></dt>
<dd><p>Options for setting the thumbnail of a sticker set.</p>
</dd>
<dt><a href="#SetCustomEmojiStickerSetThumbnailOptions">SetCustomEmojiStickerSetThumbnailOptions</a> : <code>Object</code></dt>
<dd><p>Options for setting the thumbnail of a custom emoji sticker set.</p>
</dd>
<dt><a href="#DeleteStickerSetOptions">DeleteStickerSetOptions</a> : <code>Object</code></dt>
<dd><p>Options for deleting a sticker set.</p>
</dd>
<dt><a href="#AnswerInlineQueryOptions">AnswerInlineQueryOptions</a> : <code>Object</code></dt>
<dd><p>Options for answering an inline query.</p>
</dd>
<dt><a href="#AnswerWebAppQueryOptions">AnswerWebAppQueryOptions</a> : <code>Object</code></dt>
<dd><p>Options for answering a Web App query.</p>
</dd>
<dt><a href="#SendInvoiceOptions">SendInvoiceOptions</a> : <code>Object</code></dt>
<dd><p>Options for sending an invoice.</p>
</dd>
<dt><a href="#CreateInvoiceLinkOptions">CreateInvoiceLinkOptions</a> : <code>Object</code></dt>
<dd><p>Options for creating an invoice link.</p>
</dd>
<dt><a href="#SendGameOptions">SendGameOptions</a> : <code>Object</code></dt>
<dd><p>Options for sending a game.</p>
</dd>
<dt><a href="#SetGameScoreOptions">SetGameScoreOptions</a> : <code>Object</code></dt>
<dd><p>Options for setting a user&#39;s score in a game.</p>
</dd>
<dt><a href="#GetGameHighScoresOptions">GetGameHighScoresOptions</a> : <code>Object</code></dt>
<dd><p>Options for retrieving high scores for a game.</p>
</dd>
<dt><a href="#SetPassportDataErrorsOptions">SetPassportDataErrorsOptions</a> : <code>Object</code></dt>
<dd><p>Options for informing a user of errors with their Telegram Passport data.</p>
</dd>
<dt><a href="#ctx">ctx</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ReplyOptions">ReplyOptions</a> : <code>Object</code></dt>
<dd><p>Options for replying with a message.</p>
</dd>
<dt><a href="#SendMessageOptions">SendMessageOptions</a> : <code>Object</code></dt>
<dd><p>Options for sending a message to a chat.</p>
</dd>
<dt><a href="#ReplyWithFormattedTextOptions">ReplyWithFormattedTextOptions</a> : <code>Object</code></dt>
<dd><p>Options for replying with a message formatted in HTML or Markdown.</p>
</dd>
<dt><a href="#ReplyWithChatActionOptions">ReplyWithChatActionOptions</a> : <code>Object</code></dt>
<dd><p>Options for replying with chat action.</p>
</dd>
<dt><a href="#ReplyWithEditedMessageOptions">ReplyWithEditedMessageOptions</a> : <code>Object</code></dt>
<dd><p>Options for editing and replying with a message.</p>
</dd>
<dt><a href="#ReplyWithPhotoOptions">ReplyWithPhotoOptions</a> : <code>Object</code></dt>
<dd><p>Options for replying with a photo.</p>
</dd>
<dt><a href="#WebhookInfo">WebhookInfo</a> : <code>Object</code></dt>
<dd><p>the current status of a webhook.</p>
</dd>
<dt><a href="#MessageId">MessageId</a> : <code>Object</code></dt>
<dd><p>represents a unique message identifier.</p>
</dd>
<dt><a href="#InaccessibleMessage">InaccessibleMessage</a> : <code>Object</code></dt>
<dd><p>message that was deleted or is otherwise inaccessible to the bot.</p>
</dd>
<dt><a href="#MaybeInaccessibleMessage">MaybeInaccessibleMessage</a> : <code><a href="#Message">Message</a></code> | <code><a href="#InaccessibleMessage">InaccessibleMessage</a></code></dt>
<dd><p>message that can be inaccessible to the bot.</p>
</dd>
<dt><a href="#ReplyParameters">ReplyParameters</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#MessageOrigin">MessageOrigin</a> : <code><a href="#MessageOriginUser">MessageOriginUser</a></code> | <code><a href="#MessageOriginHiddenUser">MessageOriginHiddenUser</a></code> | <code><a href="#MessageOriginChat">MessageOriginChat</a></code> | <code><a href="#MessageOriginChannel">MessageOriginChannel</a></code></dt>
<dd><p>the origin of a message.</p>
</dd>
<dt><a href="#MessageOriginUser">MessageOriginUser</a> : <code>Object</code></dt>
<dd><p>originally sent by a known user.</p>
</dd>
<dt><a href="#MessageOriginHiddenUser">MessageOriginHiddenUser</a> : <code>Object</code></dt>
<dd><p>originally sent by an unknown user.</p>
</dd>
<dt><a href="#MessageOriginChat">MessageOriginChat</a> : <code>Object</code></dt>
<dd><p>originally sent on behalf of a chat to a group chat.</p>
</dd>
<dt><a href="#MessageOriginChannel">MessageOriginChannel</a> : <code>Object</code></dt>
<dd><p>originally sent to a channel chat.</p>
</dd>
<dt><a href="#ChatBoostUpdated">ChatBoostUpdated</a> : <code>Object</code></dt>
<dd><p>a boost added to a chat or changed.</p>
</dd>
<dt><a href="#ChatBoostRemoved">ChatBoostRemoved</a> : <code>Object</code></dt>
<dd><p>a boost removed from a chat.</p>
</dd>
<dt><a href="#PollAnswer">PollAnswer</a> : <code>Object</code></dt>
<dd><p>answer of a user in a non-anonymous poll.</p>
</dd>
<dt><a href="#ChatMemberUpdated">ChatMemberUpdated</a> : <code>Object</code></dt>
<dd><p>changes in the status of a chat member.</p>
</dd>
<dt><a href="#ChatJoinRequest">ChatJoinRequest</a> : <code>Object</code></dt>
<dd><p>join request sent to a chat.</p>
</dd>
<dt><a href="#CallbackQuery">CallbackQuery</a> : <code>Object</code></dt>
<dd><p>an incoming callback query from a callback button in an inline keyboard.</p>
</dd>
<dt><a href="#ShippingQuery">ShippingQuery</a> : <code>Object</code></dt>
<dd><p>contains information about an incoming shipping query.</p>
</dd>
<dt><a href="#PreCheckoutQuery">PreCheckoutQuery</a> : <code>Object</code></dt>
<dd><p>contains information about an incoming pre-checkout query.</p>
</dd>
<dt><a href="#MessageReactionUpdated">MessageReactionUpdated</a> : <code>Object</code></dt>
<dd><p>a change of a reaction on a message performed by a user.</p>
</dd>
<dt><a href="#MessageReactionCountUpdated">MessageReactionCountUpdated</a> : <code>Object</code></dt>
<dd><p>reaction changes on a message with anonymous reactions.</p>
</dd>
<dt><a href="#InlineQuery">InlineQuery</a> : <code>Object</code></dt>
<dd><p>an incoming inline query.</p>
</dd>
<dt><a href="#ChosenInlineResult">ChosenInlineResult</a> : <code>Object</code></dt>
<dd><p>a result of an inline query that was chosen by the user and sent to their chat partner.</p>
</dd>
<dt><a href="#Message">Message</a> : <code>Object</code></dt>
<dd><p>a message</p>
</dd>
<dt><a href="#User">User</a> : <code>Object</code></dt>
<dd><p>Telegram user or bot.</p>
</dd>
<dt><a href="#Chat">Chat</a> : <code>Object</code></dt>
<dd><p>a chat.</p>
</dd>
<dt><a href="#MessageOrigin">MessageOrigin</a> : <code>Object</code></dt>
<dd><p>the origin of a message. It can be one of.</p>
</dd>
<dt><a href="#ExternalReplyInfo">ExternalReplyInfo</a> : <code>Object</code></dt>
<dd><p>contains information about a message that is being replied to, which may come from another chat or forum topic.</p>
</dd>
<dt><a href="#TextQuote">TextQuote</a> : <code>Object</code></dt>
<dd><p>contains information about the quoted part of a message that is replied to by the given message.</p>
</dd>
<dt><a href="#MessageEntity">MessageEntity</a> : <code>Object</code></dt>
<dd><p>one special entity in a text message.</p>
</dd>
<dt><a href="#LinkPreviewOptions">LinkPreviewOptions</a> : <code>Object</code></dt>
<dd><p>the options used for link preview generation.</p>
</dd>
<dt><a href="#Animation">Animation</a> : <code>Object</code></dt>
<dd><p>an animation file, GIF or H.264/MPEG-4 AVC video without sound.</p>
</dd>
<dt><a href="#Audio">Audio</a> : <code>Object</code></dt>
<dd><p>an audio file to be treated as music by the Telegram clients.</p>
</dd>
<dt><a href="#Document">Document</a> : <code>Object</code></dt>
<dd><p>a general file, as opposed to photos, voice messages and audio files.</p>
</dd>
<dt><a href="#PhotoSize">PhotoSize</a> : <code>Object</code></dt>
<dd><p>one size of a photo or a file / sticker thumbnail.</p>
</dd>
<dt><a href="#Sticker">Sticker</a> : <code>Object</code></dt>
<dd><p>a sticker.</p>
</dd>
<dt><a href="#Video">Video</a> : <code>Object</code></dt>
<dd><p>a video file.</p>
</dd>
<dt><a href="#VideoNote">VideoNote</a> : <code>Object</code></dt>
<dd><p>a video message, available in Telegram apps as of v.4.0.</p>
</dd>
<dt><a href="#Voice">Voice</a> : <code>Object</code></dt>
<dd><p>a voice note.</p>
</dd>
<dt><a href="#Contact">Contact</a> : <code>Object</code></dt>
<dd><p>a phone contact.</p>
</dd>
<dt><a href="#Dice">Dice</a> : <code>Object</code></dt>
<dd><p>an animated emoji that displays a random value.</p>
</dd>
<dt><a href="#Game">Game</a> : <code>Object</code></dt>
<dd><p>a game.</p>
</dd>
<dt><a href="#Poll">Poll</a> : <code>Object</code></dt>
<dd><p>contains information about a poll.</p>
</dd>
<dt><a href="#Venue">Venue</a> : <code>Object</code></dt>
<dd><p>a venue.</p>
</dd>
<dt><a href="#Location">Location</a> : <code>Object</code></dt>
<dd><p>a point on the map.</p>
</dd>
<dt><a href="#MessageAutoDeleteTimerChanged">MessageAutoDeleteTimerChanged</a> : <code>Object</code></dt>
<dd><p>a service message about a change in auto-delete timer settings.</p>
</dd>
<dt><a href="#Invoice">Invoice</a> : <code>Object</code></dt>
<dd><p>contains basic information about an invoice.</p>
</dd>
<dt><a href="#SuccessfulPayment">SuccessfulPayment</a> : <code>Object</code></dt>
<dd><p>contains basic information about a successful payment.</p>
</dd>
<dt><a href="#UsersShared">UsersShared</a> : <code>Object</code></dt>
<dd><p>contains information about the users whose identifiers were shared with the bot using a KeyboardButtonRequestUsers button.</p>
</dd>
<dt><a href="#ChatShared">ChatShared</a> : <code>Object</code></dt>
<dd><p>contains information about the chat whose identifier was shared with the bot using a KeyboardButtonRequestChat button.</p>
</dd>
<dt><a href="#WriteAccessAllowed">WriteAccessAllowed</a> : <code>Object</code></dt>
<dd><p>This object represents a service message about a user allowing a bot to write messages</p>
</dd>
<dt><a href="#PassportData">PassportData</a> : <code>Object</code></dt>
<dd><p>Describes Telegram Passport data shared with the bot by the user.</p>
</dd>
<dt><a href="#ProximityAlertTriggered">ProximityAlertTriggered</a> : <code>Object</code></dt>
<dd><p>content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.</p>
</dd>
<dt><a href="#ForumTopicCreated">ForumTopicCreated</a> : <code>Object</code></dt>
<dd><p>a service message about a new forum topic created in the chat.</p>
</dd>
<dt><a href="#ForumTopicEdited">ForumTopicEdited</a> : <code>Object</code></dt>
<dd><p>a service message about an edited forum topic.</p>
</dd>
<dt><a href="#Giveaway">Giveaway</a> : <code>Object</code></dt>
<dd><p>a message about a scheduled giveaway.</p>
</dd>
<dt><a href="#GiveawayWinners">GiveawayWinners</a> : <code>Object</code></dt>
<dd><p>a message about the completion of a giveaway with public winners.</p>
</dd>
<dt><a href="#GiveawayCompleted">GiveawayCompleted</a> : <code>Object</code></dt>
<dd><p>a service message about the completion of a giveaway without public winners.</p>
</dd>
<dt><a href="#VideoChatScheduled">VideoChatScheduled</a> : <code>Object</code></dt>
<dd><p>a service message about a video chat scheduled in the chat.</p>
</dd>
<dt><a href="#VideoChatEnded">VideoChatEnded</a> : <code>Object</code></dt>
<dd><p>a service message about a video chat ended in the chat.</p>
</dd>
<dt><a href="#VideoChatParticipantsInvited">VideoChatParticipantsInvited</a> : <code>Object</code></dt>
<dd><p>a service message about new members invited to a video chat.</p>
</dd>
<dt><a href="#WebAppData">WebAppData</a> : <code>Object</code></dt>
<dd><p>data sent from a Web App to the bot.</p>
</dd>
<dt><a href="#InlineKeyboardMarkup">InlineKeyboardMarkup</a> : <code>Object</code></dt>
<dd><p>an inline keyboard that appears right next to the message it belongs to.</p>
</dd>
<dt><a href="#InlineKeyboardButton">InlineKeyboardButton</a> : <code>Object</code></dt>
<dd><p>one button of an inline keyboard. You must use exactly one of the optional fields.</p>
</dd>
<dt><a href="#ReplyKeyboardRemove">ReplyKeyboardRemove</a> : <code>Object</code></dt>
<dd><p>Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard.</p>
</dd>
<dt><a href="#KeyboardButton">KeyboardButton</a> : <code>Object</code></dt>
<dd><p>one button of the reply keyboard.</p>
</dd>
<dt><a href="#ReplyKeyboardMarkup">ReplyKeyboardMarkup</a> : <code>Object</code></dt>
<dd><p>a custom keyboard with reply options.</p>
</dd>
<dt><a href="#PollOption">PollOption</a> : <code>Object</code></dt>
<dd><p>information about one answer option in a poll.</p>
</dd>
<dt><a href="#UserProfilePhotos">UserProfilePhotos</a> : <code>Object</code></dt>
<dd><p>a user&#39;s profile pictures.</p>
</dd>
<dt><a href="#File">File</a> : <code>Object</code></dt>
<dd><p>a file ready to be downloaded.</p>
</dd>
<dt><a href="#WebAppInfo">WebAppInfo</a> : <code>Object</code></dt>
<dd><p>a Web App.</p>
</dd>
<dt><a href="#KeyboardButtonRequestUsers">KeyboardButtonRequestUsers</a> : <code>Object</code></dt>
<dd><p>the criteria used to request suitable users.</p>
</dd>
<dt><a href="#KeyboardButtonRequestChat">KeyboardButtonRequestChat</a> : <code>Object</code></dt>
<dd><p>the criteria used to request a suitable chat.</p>
</dd>
<dt><a href="#KeyboardButtonPollType">KeyboardButtonPollType</a> : <code>Object</code></dt>
<dd><p>type of a poll, which is allowed to be created and sent when the corresponding button is pressed.</p>
</dd>
<dt><a href="#LoginUrl">LoginUrl</a> : <code>Object</code></dt>
<dd><p>a parameter of the inline keyboard button used to automatically authorize a user.</p>
</dd>
<dt><a href="#SwitchInlineQueryChosenChat">SwitchInlineQueryChosenChat</a> : <code>Object</code></dt>
<dd><p>an inline button that switches the current user to inline mode in a chosen chat, with an optional default inline query.</p>
</dd>
<dt><a href="#ForceReply">ForceReply</a> : <code>Object</code></dt>
<dd><p>a message with this object, Telegram clients will display a reply interface to the user.</p>
</dd>
<dt><a href="#ChatPhoto">ChatPhoto</a> : <code>Object</code></dt>
<dd><p>a chat photo.</p>
</dd>
<dt><a href="#ChatInviteLink">ChatInviteLink</a> : <code>Object</code></dt>
<dd><p>an invite link for a chat.</p>
</dd>
<dt><a href="#ChatAdministratorRights">ChatAdministratorRights</a> : <code>Object</code></dt>
<dd><p>the rights of an administrator in a chat.</p>
</dd>
<dt><a href="#ChatMember">ChatMember</a> : <code><a href="#ChatMemberOwner">ChatMemberOwner</a></code> | <code><a href="#ChatMemberAdministrator">ChatMemberAdministrator</a></code> | <code><a href="#ChatMemberMember">ChatMemberMember</a></code> | <code><a href="#ChatMemberRestricted">ChatMemberRestricted</a></code> | <code><a href="#ChatMemberLeft">ChatMemberLeft</a></code> | <code><a href="#ChatMemberBanned">ChatMemberBanned</a></code></dt>
<dd><p>information about one member of a chat.</p>
</dd>
<dt><a href="#ChatMemberOwner">ChatMemberOwner</a> : <code>Object</code></dt>
<dd><p>a chat member that owns the chat and has all administrator privileges.</p>
</dd>
<dt><a href="#ChatMemberAdministrator">ChatMemberAdministrator</a> : <code>Object</code></dt>
<dd><p>a chat member that has some additional privileges.</p>
</dd>
<dt><a href="#ChatMemberMember">ChatMemberMember</a> : <code>Object</code></dt>
<dd><p>a chat member that has no additional privileges or restrictions.</p>
</dd>
<dt><a href="#ChatMemberRestricted">ChatMemberRestricted</a> : <code>Object</code></dt>
<dd><p>a chat member that is under certain restrictions in the chat. Supergroups only.</p>
</dd>
<dt><a href="#ChatMemberLeft">ChatMemberLeft</a> : <code>Object</code></dt>
<dd><p>a chat member that isn&#39;t currently a member of the chat, but may join it themselves.</p>
</dd>
<dt><a href="#ChatMemberBanned">ChatMemberBanned</a> : <code>Object</code></dt>
<dd><p>a chat member that was banned in the chat and can&#39;t return to the chat or view chat messages.</p>
</dd>
<dt><a href="#ChatPermissions">ChatPermissions</a> : <code>Object</code></dt>
<dd><p>actions that a non-administrator user is allowed to take in a chat.</p>
</dd>
<dt><a href="#ChatLocation">ChatLocation</a> : <code>Object</code></dt>
<dd><p>a location to which a chat is connected.</p>
</dd>
<dt><a href="#ReactionType">ReactionType</a> : <code><a href="#ReactionTypeEmoji">ReactionTypeEmoji</a></code> | <code><a href="#ReactionTypeCustomEmoji">ReactionTypeCustomEmoji</a></code></dt>
<dd><p>the type of a reaction. Currently, it can be one of</p>
</dd>
<dt><a href="#ReactionTypeEmoji">ReactionTypeEmoji</a> : <code>Object</code></dt>
<dd><p>The reaction is based on an emoji.</p>
</dd>
<dt><a href="#ReactionTypeCustomEmoji">ReactionTypeCustomEmoji</a> : <code>Object</code></dt>
<dd><p>The reaction is based on a custom emoji.</p>
</dd>
<dt><a href="#ReactionCount">ReactionCount</a> : <code>Object</code></dt>
<dd><p>a reaction added to a message along with the number of times it was added.</p>
</dd>
<dt><a href="#ForumTopic">ForumTopic</a> : <code>Object</code></dt>
<dd><p>represents a forum topic.</p>
</dd>
<dt><a href="#BotCommand">BotCommand</a> : <code>Object</code></dt>
<dd><p>represents a bot command.</p>
</dd>
<dt><a href="#BotCommandScope">BotCommandScope</a> : <code><a href="#BotCommandScopeDefault">BotCommandScopeDefault</a></code> | <code><a href="#BotCommandScopeAllPrivateChats">BotCommandScopeAllPrivateChats</a></code> | <code><a href="#BotCommandScopeAllGroupChats">BotCommandScopeAllGroupChats</a></code> | <code><a href="#BotCommandScopeAllChatAdministrators">BotCommandScopeAllChatAdministrators</a></code> | <code><a href="#BotCommandScopeChat">BotCommandScopeChat</a></code> | <code><a href="#BotCommandScopeChatAdministrators">BotCommandScopeChatAdministrators</a></code> | <code><a href="#BotCommandScopeChatMember">BotCommandScopeChatMember</a></code></dt>
<dd><p>represents the scope to which bot commands are applied.</p>
</dd>
<dt><a href="#BotCommandScopeDefault">BotCommandScopeDefault</a> : <code>Object</code></dt>
<dd><p>the default scope of bot commands.</p>
</dd>
<dt><a href="#BotCommandScopeAllPrivateChats">BotCommandScopeAllPrivateChats</a> : <code>Object</code></dt>
<dd><p>the scope of bot commands, covering all private chats.</p>
</dd>
<dt><a href="#BotCommandScopeAllGroupChats">BotCommandScopeAllGroupChats</a> : <code>Object</code></dt>
<dd><p>the scope of bot commands, covering all group and supergroup chats.</p>
</dd>
<dt><a href="#BotCommandScopeAllChatAdministrators">BotCommandScopeAllChatAdministrators</a> : <code>Object</code></dt>
<dd><p>the scope of bot commands, covering all group and supergroup chat administrators.</p>
</dd>
<dt><a href="#BotCommandScopeChat">BotCommandScopeChat</a> : <code>Object</code></dt>
<dd><p>the scope of bot commands, covering a specific chat.</p>
</dd>
<dt><a href="#BotCommandScopeChatAdministrators">BotCommandScopeChatAdministrators</a> : <code>Object</code></dt>
<dd><p>the scope of bot commands, covering all administrators of a specific group or supergroup chat.</p>
</dd>
<dt><a href="#BotCommandScopeChatMember">BotCommandScopeChatMember</a> : <code>Object</code></dt>
<dd><p>the scope of bot commands, covering a specific member of a group or supergroup chat.</p>
</dd>
<dt><a href="#BotName">BotName</a> : <code>Object</code></dt>
<dd><p>represents the bot&#39;s name.</p>
</dd>
<dt><a href="#BotDescription">BotDescription</a> : <code>Object</code></dt>
<dd><p>represents the bot&#39;s description.</p>
</dd>
<dt><a href="#BotShortDescription">BotShortDescription</a> : <code>Object</code></dt>
<dd><p>the bot&#39;s short description.</p>
</dd>
<dt><a href="#MenuButton">MenuButton</a> : <code><a href="#MenuButtonCommands">MenuButtonCommands</a></code> | <code><a href="#MenuButtonWebApp">MenuButtonWebApp</a></code> | <code><a href="#MenuButtonDefault">MenuButtonDefault</a></code></dt>
<dd><p>the bot&#39;s menu button in a private chat.</p>
</dd>
<dt><a href="#MenuButtonCommands">MenuButtonCommands</a> : <code>Object</code></dt>
<dd><p>a menu button, which opens the bot&#39;s list of commands.</p>
</dd>
<dt><a href="#MenuButtonWebApp">MenuButtonWebApp</a> : <code>Object</code></dt>
<dd><p>a menu button, which launches a Web App.</p>
</dd>
<dt><a href="#MenuButtonDefault">MenuButtonDefault</a> : <code>Object</code></dt>
<dd><p>no specific value for the menu button was set.</p>
</dd>
<dt><a href="#ChatBoostSource">ChatBoostSource</a> : <code><a href="#ChatBoostSourcePremium">ChatBoostSourcePremium</a></code> | <code><a href="#ChatBoostSourceGiftCode">ChatBoostSourceGiftCode</a></code> | <code><a href="#ChatBoostSourceGiveaway">ChatBoostSourceGiveaway</a></code></dt>
<dd><p>the source of a chat boost.</p>
</dd>
<dt><a href="#ChatBoostSourcePremium">ChatBoostSourcePremium</a> : <code>Object</code></dt>
<dd><p>The boost was obtained by subscribing to Telegram Premium or by gifting a Telegram Premium subscription to another user.</p>
</dd>
<dt><a href="#ChatBoostSourceGiftCode">ChatBoostSourceGiftCode</a> : <code>Object</code></dt>
<dd><p>he boost was obtained by the creation of Telegram Premium gift codes to boost a chat.</p>
</dd>
<dt><a href="#ChatBoostSourceGiveaway">ChatBoostSourceGiveaway</a> : <code>Object</code></dt>
<dd><p>The boost was obtained by the creation of a Telegram Premium giveaway.</p>
</dd>
<dt><a href="#ChatBoost">ChatBoost</a> : <code>Object</code></dt>
<dd><p>contains information about a chat boost.</p>
</dd>
<dt><a href="#UserChatBoosts">UserChatBoosts</a> : <code>Object</code></dt>
<dd><p>represents a list of boosts added to a chat by a user.</p>
</dd>
<dt><a href="#ResponseParameters">ResponseParameters</a> : <code>Object</code></dt>
<dd><p>Describes why a request was unsuccessful.</p>
</dd>
<dt><a href="#InputMedia">InputMedia</a> : <code><a href="#InputMediaAnimation">InputMediaAnimation</a></code> | <code><a href="#InputMediaDocument">InputMediaDocument</a></code> | <code><a href="#InputMediaAudio">InputMediaAudio</a></code> | <code><a href="#InputMediaPhoto">InputMediaPhoto</a></code> | <code><a href="#InputMediaVideo">InputMediaVideo</a></code></dt>
<dd><p>the content of a media message to be sent.</p>
</dd>
<dt><a href="#InputMediaPhoto">InputMediaPhoto</a> : <code>Object</code></dt>
<dd><p>a photo to be sent.</p>
</dd>
<dt><a href="#InputMediaVideo">InputMediaVideo</a> : <code>Object</code></dt>
<dd><p>a video to be sent.</p>
</dd>
<dt><a href="#InputMediaAnimation">InputMediaAnimation</a> : <code>Object</code></dt>
<dd><p>an animation file GIF or H.264/MPEG-4 AVC video without sound to be sent.</p>
</dd>
<dt><a href="#InputMediaAudio">InputMediaAudio</a> : <code>object</code></dt>
<dd><p>an audio file to be treated as music to be sent.</p>
</dd>
<dt><a href="#InputMediaDocument">InputMediaDocument</a> : <code>object</code></dt>
<dd><p>a general file to be sent.</p>
</dd>
<dt><a href="#Sticker">Sticker</a> : <code>object</code></dt>
<dd><p>represents a sticker.</p>
</dd>
<dt><a href="#StickerSet">StickerSet</a> : <code>Object</code></dt>
<dd><p>a sticker set.</p>
</dd>
<dt><a href="#MaskPosition">MaskPosition</a> : <code>Object</code></dt>
<dd><p>the position on faces where a mask should be placed by default.</p>
</dd>
<dt><a href="#InputSticker">InputSticker</a> : <code>Object</code></dt>
<dd><p>a sticker to be added to a sticker set.</p>
</dd>
<dt><a href="#InlineQueryResultsButton">InlineQueryResultsButton</a> : <code>Object</code></dt>
<dd><p>a button to be shown above inline query results.</p>
</dd>
<dt><a href="#InlineQueryResult">InlineQueryResult</a> : <code><a href="#InlineQueryResultCachedAudio">InlineQueryResultCachedAudio</a></code> | <code><a href="#InlineQueryResultCachedDocument">InlineQueryResultCachedDocument</a></code> | <code><a href="#InlineQueryResultCachedGif">InlineQueryResultCachedGif</a></code> | <code><a href="#InlineQueryResultCachedMpeg4Gif">InlineQueryResultCachedMpeg4Gif</a></code> | <code><a href="#InlineQueryResultCachedPhoto">InlineQueryResultCachedPhoto</a></code> | <code><a href="#InlineQueryResultCachedSticker">InlineQueryResultCachedSticker</a></code> | <code><a href="#InlineQueryResultCachedVideo">InlineQueryResultCachedVideo</a></code> | <code><a href="#InlineQueryResultCachedVoice">InlineQueryResultCachedVoice</a></code> | <code><a href="#InlineQueryResultArticle">InlineQueryResultArticle</a></code> | <code><a href="#InlineQueryResultAudio">InlineQueryResultAudio</a></code> | <code><a href="#InlineQueryResultContact">InlineQueryResultContact</a></code> | <code><a href="#InlineQueryResultGame">InlineQueryResultGame</a></code> | <code><a href="#InlineQueryResultDocument">InlineQueryResultDocument</a></code> | <code><a href="#InlineQueryResultGif">InlineQueryResultGif</a></code> | <code><a href="#InlineQueryResultLocation">InlineQueryResultLocation</a></code> | <code><a href="#InlineQueryResultMpeg4Gif">InlineQueryResultMpeg4Gif</a></code> | <code><a href="#InlineQueryResultPhoto">InlineQueryResultPhoto</a></code> | <code><a href="#InlineQueryResultVenue">InlineQueryResultVenue</a></code> | <code><a href="#InlineQueryResultVideo">InlineQueryResultVideo</a></code> | <code><a href="#InlineQueryResultVoice">InlineQueryResultVoice</a></code></dt>
<dd><p>one result of an inline query.</p>
</dd>
<dt><a href="#InlineQueryResultArticle">InlineQueryResultArticle</a> : <code>Object</code></dt>
<dd><p>a link to an article or web page.</p>
</dd>
<dt><a href="#InlineQueryResultPhoto">InlineQueryResultPhoto</a> : <code>Object</code></dt>
<dd><p>a link to a photo.</p>
</dd>
<dt><a href="#InlineQueryResultGif">InlineQueryResultGif</a> : <code>Object</code></dt>
<dd><p>a link to an animated GIF file.</p>
</dd>
<dt><a href="#InlineQueryResultMpeg4Gif">InlineQueryResultMpeg4Gif</a> : <code>Object</code></dt>
<dd><p>a link to a video animation H.264/MPEG-4 AVC video without sound.</p>
</dd>
<dt><a href="#InlineQueryResultVideo">InlineQueryResultVideo</a> : <code>Object</code></dt>
<dd><p>a link to a page containing an embedded video player or a video file.</p>
</dd>
<dt><a href="#InlineQueryResultAudio">InlineQueryResultAudio</a> : <code>Object</code></dt>
<dd><p>a link to an MP3 audio file.</p>
</dd>
<dt><a href="#InlineQueryResultVoice">InlineQueryResultVoice</a> : <code>Object</code></dt>
<dd><p>a link to a voice recording in an .OGG container encoded with OPUS.</p>
</dd>
<dt><a href="#InlineQueryResultDocument">InlineQueryResultDocument</a> : <code>Object</code></dt>
<dd><p>a link to a file.</p>
</dd>
<dt><a href="#InlineQueryResultLocation">InlineQueryResultLocation</a> : <code>Object</code></dt>
<dd><p>a location on a map.</p>
</dd>
<dt><a href="#InlineQueryResultVenue">InlineQueryResultVenue</a> : <code>Object</code></dt>
<dd><p>a venue. By default, the venue will be sent by the user.</p>
</dd>
<dt><a href="#InlineQueryResultContact">InlineQueryResultContact</a> : <code>Object</code></dt>
<dd><p>a contact with a phone number.</p>
</dd>
<dt><a href="#InlineQueryResultGame">InlineQueryResultGame</a> : <code>Object</code></dt>
<dd><p>a Game.</p>
</dd>
<dt><a href="#InlineQueryResultCachedPhoto">InlineQueryResultCachedPhoto</a> : <code>Object</code></dt>
<dd><p>a link to a photo stored on the Telegram servers.</p>
</dd>
<dt><a href="#InlineQueryResultCachedGif">InlineQueryResultCachedGif</a> : <code>Object</code></dt>
<dd><p>a link to an animated GIF file stored on the Telegram servers.</p>
</dd>
<dt><a href="#InlineQueryResultCachedMpeg4Gif">InlineQueryResultCachedMpeg4Gif</a> : <code>Object</code></dt>
<dd><p>a link to a video animation H.264/MPEG-4 AVC video without sound stored on the Telegram servers.</p>
</dd>
<dt><a href="#InlineQueryResultCachedSticker">InlineQueryResultCachedSticker</a> : <code>Object</code></dt>
<dd><p>a link to a sticker stored on the Telegram servers.</p>
</dd>
<dt><a href="#InlineQueryResultCachedDocument">InlineQueryResultCachedDocument</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#InlineQueryResultCachedVideo">InlineQueryResultCachedVideo</a> : <code>Object</code></dt>
<dd><p>a link to a video file stored on the Telegram servers.</p>
</dd>
<dt><a href="#InlineQueryResultCachedVoice">InlineQueryResultCachedVoice</a> : <code>Object</code></dt>
<dd><p>a link to a voice message stored on the Telegram servers.</p>
</dd>
<dt><a href="#InlineQueryResultCachedAudio">InlineQueryResultCachedAudio</a> : <code>Object</code></dt>
<dd><p>a link to an MP3 audio file stored on the Telegram servers.</p>
</dd>
<dt><a href="#InputMessageContent">InputMessageContent</a> : <code><a href="#InputTextMessageContent">InputTextMessageContent</a></code> | <code><a href="#InputLocationMessageContent">InputLocationMessageContent</a></code> | <code><a href="#InputVenueMessageContent">InputVenueMessageContent</a></code> | <code><a href="#InputContactMessageContent">InputContactMessageContent</a></code> | <code><a href="#InputInvoiceMessageContent">InputInvoiceMessageContent</a></code></dt>
<dd><p>the content of a message to be sent as a result of an inline query.</p>
</dd>
<dt><a href="#InputTextMessageContent">InputTextMessageContent</a> : <code>Object</code></dt>
<dd><p>the content of a text message to be sent as the result of an inline query.</p>
</dd>
<dt><a href="#InputLocationMessageContent">InputLocationMessageContent</a> : <code>Object</code></dt>
<dd><p>the content of a location message to be sent as the result of an inline query.</p>
</dd>
<dt><a href="#InputVenueMessageContent">InputVenueMessageContent</a> : <code>Object</code></dt>
<dd><p>the content of a venue message to be sent as the result of an inline query.</p>
</dd>
<dt><a href="#InputContactMessageContent">InputContactMessageContent</a> : <code>Object</code></dt>
<dd><p>the content of a contact message to be sent as the result of an inline query.</p>
</dd>
<dt><a href="#InputInvoiceMessageContent">InputInvoiceMessageContent</a> : <code>Object</code></dt>
<dd><p>the content of an invoice message to be sent as the result of an inline query.</p>
</dd>
<dt><a href="#SentWebAppMessage">SentWebAppMessage</a> : <code>Object</code></dt>
<dd><p>an inline message sent by a Web App on behalf of a user.</p>
</dd>
<dt><a href="#answerShippingQuery">answerShippingQuery</a> : <code>Object</code></dt>
<dd><p>If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot.</p>
</dd>
<dt><a href="#answerPreCheckoutQuery">answerPreCheckoutQuery</a> : <code>Object</code></dt>
<dd><p>Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query.</p>
</dd>
<dt><a href="#LabeledPrice">LabeledPrice</a> : <code>Object</code></dt>
<dd><p>a portion of the price for goods or services.</p>
</dd>
<dt><a href="#ShippingAddress">ShippingAddress</a> : <code>Object</code></dt>
<dd><p>a shipping address.</p>
</dd>
<dt><a href="#OrderInfo">OrderInfo</a> : <code>Object</code></dt>
<dd><p>information about an order.</p>
</dd>
<dt><a href="#ShippingOption">ShippingOption</a> : <code>Object</code></dt>
<dd><p>one shipping option.</p>
</dd>
<dt><a href="#PassportData">PassportData</a> : <code>Object</code></dt>
<dd><p>Telegram Passport data shared with the bot by the user.</p>
</dd>
<dt><a href="#PassportFile">PassportFile</a> : <code>Object</code></dt>
<dd><p>a file uploaded to Telegram Passport.</p>
</dd>
<dt><a href="#EncryptedPassportElement">EncryptedPassportElement</a> : <code>Object</code></dt>
<dd><p>documents or other Telegram Passport elements shared with the bot by the user.</p>
</dd>
<dt><a href="#EncryptedCredentials">EncryptedCredentials</a> : <code>Object</code></dt>
<dd><p>data required for decrypting and authenticating EncryptedPassportElement.</p>
</dd>
<dt><a href="#PassportElementErrorDataField">PassportElementErrorDataField</a> : <code>Object</code></dt>
<dd><p>an issue in one of the data fields that was provided by the user.</p>
</dd>
<dt><a href="#PassportElementErrorFrontSide">PassportElementErrorFrontSide</a> : <code>Object</code></dt>
<dd><p>an issue with the front side of a document.</p>
</dd>
<dt><a href="#PassportElementError">PassportElementError</a> : <code><a href="#PassportElementErrorDataField">PassportElementErrorDataField</a></code> | <code><a href="#PassportElementErrorFrontSide">PassportElementErrorFrontSide</a></code> | <code><a href="#PassportElementErrorReverseSide">PassportElementErrorReverseSide</a></code> | <code><a href="#PassportElementErrorSelfie">PassportElementErrorSelfie</a></code> | <code><a href="#PassportElementErrorFile">PassportElementErrorFile</a></code> | <code><a href="#PassportElementErrorFiles">PassportElementErrorFiles</a></code> | <code><a href="#PassportElementErrorTranslationFile">PassportElementErrorTranslationFile</a></code> | <code><a href="#PassportElementErrorTranslationFiles">PassportElementErrorTranslationFiles</a></code> | <code><a href="#PassportElementErrorUnspecified">PassportElementErrorUnspecified</a></code></dt>
<dd><p>an error in the Telegram Passport element which was submitted that should be resolved by the user.</p>
</dd>
<dt><a href="#PassportElementErrorReverseSide">PassportElementErrorReverseSide</a> : <code>Object</code></dt>
<dd><p>an issue with the reverse side of a document.</p>
</dd>
<dt><a href="#PassportElementErrorSelfie">PassportElementErrorSelfie</a> : <code>Object</code></dt>
<dd><p>an issue with the selfie with a document.</p>
</dd>
<dt><a href="#PassportElementErrorFile">PassportElementErrorFile</a> : <code>Object</code></dt>
<dd><p>an issue with a document scan.</p>
</dd>
<dt><a href="#PassportElementErrorFiles">PassportElementErrorFiles</a> : <code>Object</code></dt>
<dd><p>an issue with a list of scans.</p>
</dd>
<dt><a href="#PassportElementErrorTranslationFile">PassportElementErrorTranslationFile</a> : <code>Object</code></dt>
<dd><p>an issue with one of the files that constitute the translation of a document.</p>
</dd>
<dt><a href="#PassportElementErrorTranslationFiles">PassportElementErrorTranslationFiles</a> : <code>Object</code></dt>
<dd><p>an issue with the translated version of a document.</p>
</dd>
<dt><a href="#PassportElementErrorUnspecified">PassportElementErrorUnspecified</a> : <code>Object</code></dt>
<dd><p>an issue in an unspecified place.</p>
</dd>
<dt><a href="#GameHighScore">GameHighScore</a> : <code>Object</code></dt>
<dd><p>one row of the high scores table for a game.</p>
</dd>
<dt><a href="#SheetOperations">SheetOperations</a> : <code>Object</code></dt>
<dd><p>sheet operations.</p>
</dd>
</dl>

<a name="telesun"></a>

## telesun : <code>Object</code>
main telesun class

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| connectToSpreadSheet | <code>function</code> | Connects to a Google Spreadsheet using `spreadsheet ID`. |
| temporaryMemory | <code>function</code> | Configures temporary memory for the bot, including cache and session. |
| permanentMemory | <code>function</code> | Configures permanent memory for the bot, including cache and session. |
| handleUpdate | <code>function</code> | Handles incoming updates from Telegram. |
| use | <code>function</code> | Registers a middleware function to be used by the bot. |
| on | <code>function</code> | Registers a middleware for a specific update type. The first parameter is one of [`message`, `edited_message`, `channel_post`, `edited_channel_post`, `inline_query`, `chosen_inline_result`, `callback_query`, `shipping_query`, `pre_checkout_query`, `poll`, `poll_answer`, `my_chat_member`, `chat_member`, `chat_join_request`, `message_reaction`, `message_reaction_count`, `chat_boost`, `removed_chat_boost`]. |
| action | <code>function</code> | Registers a middleware for a specific action. |
| stage | <code>function</code> | Registers a middleware for a specific stage. |
| start | <code>function</code> | Registers a start command middleware. |
| help | <code>function</code> | Registers a help command middleware. |
| hears | <code>function</code> | Registers a middleware that triggers on matching text. |
| contact | <code>function</code> | Registers a middleware for contact updates. |
| photo | <code>function</code> | Registers a middleware for photo updates. |
| video | <code>function</code> | Registers a middleware for video updates. |
| voice | <code>function</code> | Registers a middleware for voice message updates. |
| document | <code>function</code> | Registers a middleware for document updates. |
| audio | <code>function</code> | Registers a middleware for audio updates. |
| text | <code>function</code> | Registers a middleware for text message updates. |
| sticker | <code>function</code> | Registers a middleware for sticker updates. |
| commands | <code>function</code> | Registers a middleware for any command. |
| command | <code>function</code> | Registers a middleware for a specific command. |
| handleWebhook | <code>function</code> | Handles webhook updates. |
| longPolling | <code>function</code> | Initiates long polling. |
| polling | <code>function</code> | Initiates simple polling. |
| devHook | <code>function</code> | Sets up a development webhook. |
| setWebhook | <code>function</code> | Configures the webhook for the bot. |
| deleteWebhook | <code>function</code> | Deletes the configured webhook. |

<a name="LongPollingOptions"></a>

## LongPollingOptions : <code>Object</code>
Options for initiating long polling.

**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [sleep] | <code>number</code> | <code>1000</code> | The delay between polling requests in milliseconds. |
| [timeout] | <code>number</code> | <code>60</code> | Timeout in seconds for long polling. |

<a name="PollingOptions"></a>

## PollingOptions : <code>Object</code>
Options for initiating simple polling.

**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [limit] | <code>number</code> | <code>100</code> | The maximum number of updates to receive. |
| [timeout] | <code>number</code> | <code>60</code> | Timeout in seconds for polling. |

<a name="DevHookOptions"></a>

## DevHookOptions : <code>Object</code>
Options for setting up a development webhook.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [certificate] | <code>InputFile</code> | Your public key certificate file. |
| [ip_address] | <code>string</code> | The IP address of the server. |
| [max_connections] | <code>number</code> | Maximum allowed number of simultaneous HTTPS connections to the webhook. |
| [drop_pending_updates] | <code>Array.&lt;string&gt;</code> | List of types of updates to drop. |
| [secret_token] | <code>string</code> | A secret token to authenticate the webhook. |
| [server] | [<code>Server</code>](#Server) | The server configuration for the webhook. |

<a name="SetWebhookOptions"></a>

## SetWebhookOptions : <code>Object</code>
Options for configuring the webhook.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The HTTPS URL to send updates to. |
| [certificate] | <code>InputFile</code> | Your public key certificate file. |
| [ip_address] | <code>string</code> | The IP address of the server. |
| [max_connections] | <code>number</code> | Maximum allowed number of simultaneous HTTPS connections to the webhook. |
| [drop_pending_updates] | <code>Array.&lt;string&gt;</code> | List of types of updates to drop. |
| [secret_token] | <code>string</code> | A secret token to authenticate the webhook. |

<a name="DeleteWebhookOptions"></a>

## DeleteWebhookOptions : <code>Object</code>
Options for deleting the configured webhook.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| drop_pending_updates | <code>boolean</code> | Whether to drop pending updates. |

<a name="UpdateType"></a>

## UpdateType : <code>&quot;message&quot;</code> \| <code>&quot;edited\_message&quot;</code> \| <code>&quot;channel\_post&quot;</code> \| <code>&quot;edited\_channel\_post&quot;</code> \| <code>&quot;inline\_query&quot;</code> \| <code>&quot;chosen\_inline\_result&quot;</code> \| <code>&quot;callback\_query&quot;</code> \| <code>&quot;shipping\_query&quot;</code> \| <code>&quot;pre\_checkout\_query&quot;</code> \| <code>&quot;poll&quot;</code> \| <code>&quot;poll\_answer&quot;</code> \| <code>&quot;my\_chat\_member&quot;</code> \| <code>&quot;chat\_member&quot;</code> \| <code>&quot;chat\_join\_request&quot;</code> \| <code>&quot;message\_reaction&quot;</code> \| <code>&quot;message\_reaction\_count&quot;</code> \| <code>&quot;chat\_boost&quot;</code> \| <code>&quot;removed\_chat\_boost&quot;</code>
Update types for the 'on' method.

**Kind**: global typedef  
<a name="Format"></a>

## Format : <code>&quot;HTML&quot;</code> \| <code>&quot;MarkdownV2&quot;</code>
Formatting options.

**Kind**: global typedef  
<a name="UpdateConfig"></a>

## UpdateConfig : <code>&quot;webhook&quot;</code> \| <code>&quot;polling&quot;</code>
config options for devHook.

**Kind**: global typedef  
<a name="Server"></a>

## Server : <code>&quot;GAS&quot;</code> \| <code>&quot;VERCEL&quot;</code> \| <code>&quot;RENDER&quot;</code>
server config options for devHook.

**Kind**: global typedef  
<a name="Update"></a>

## Update : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [message] | [<code>Message</code>](#Message) | New incoming message of any kind - text, photo, sticker, etc. |
| [edited_message] | [<code>Message</code>](#Message) | Message edit notification for known messages. |
| [channel_post] | [<code>Message</code>](#Message) | New incoming channel post of any kind - text, photo, sticker, etc. |
| [edited_channel_post] | [<code>Message</code>](#Message) | Channel post edit notification for known posts. |
| [message_reaction] | [<code>MessageReactionUpdated</code>](#MessageReactionUpdated) | User changed a message reaction; requires bot as admin. |
| [message_reaction_count] | [<code>MessageReactionCountUpdated</code>](#MessageReactionCountUpdated) | Grouped anonymous message reaction changes. |
| [inline_query] | [<code>InlineQuery</code>](#InlineQuery) | New incoming inline query update. |
| [chosen_inline_result] | [<code>ChosenInlineResult</code>](#ChosenInlineResult) | User's choice from an inline query sent to chat. |
| [callback_query] | [<code>CallbackQuery</code>](#CallbackQuery) | New incoming callback query. |
| [shipping_query] | [<code>ShippingQuery</code>](#ShippingQuery) | New incoming shipping query. Only for invoices with flexible price. |
| [pre_checkout_query] | [<code>PreCheckoutQuery</code>](#PreCheckoutQuery) | New incoming pre-checkout query. Contains full information about checkout. |
| [poll] | [<code>Poll</code>](#Poll) | Notification of new poll state; for stopped polls and those sent by the bot. |
| [poll_answer] | [<code>PollAnswer</code>](#PollAnswer) | User changed their vote in a non-anonymous poll sent by the bot. |
| [my_chat_member] | [<code>ChatMemberUpdated</code>](#ChatMemberUpdated) | Bot's chat member status updated in a chat. |
| [chat_member] | [<code>ChatMemberUpdated</code>](#ChatMemberUpdated) | Chat member's status updated; requires bot admin. |
| [chat_join_request] | [<code>ChatJoinRequest</code>](#ChatJoinRequest) | Chat join request sent; requires bot's `can_invite_users` right. |
| [chat_boost] | [<code>ChatBoostUpdated</code>](#ChatBoostUpdated) | Chat boost added or changed; requires bot admin. |
| [removed_chat_boost] | [<code>ChatBoostRemoved</code>](#ChatBoostRemoved) | Chat boost removed; requires bot admin. |

<a name="ForwardMessageOptions"></a>

## ForwardMessageOptions : <code>Object</code>
Options for forwarding a single message from one chat to another.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [message_thread_id] | <code>number</code> | Unique identifier for the target message thread, only for messages in threads. |
| from_chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the chat where the original message was sent (or channel username in the format `@channelusername`) |
| message_id | <code>number</code> | Unique message identifier to forward. |
| [disable_notification] | <code>boolean</code> | Sends the message silently. Users will receive a notification with no sound. |
| [protect_content] | <code>boolean</code> | Protects the content of the forwarded message from forwarding and saving. |

<a name="ForwardMessagesOptions"></a>

## ForwardMessagesOptions : <code>Object</code>
Options for forwarding multiple messages from one chat to another.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username of the target channel (in the format `@channelusername`). |
| [message_thread_id] | <code>number</code> | Unique identifier for the target message thread, only for messages in threads. |
| from_chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the chat where the original messages were sent (or channel username in the format `@channelusername`). |
| message_ids | <code>Array.&lt;number&gt;</code> | Array of unique message identifiers to forward. |
| [disable_notification] | <code>boolean</code> | Sends the messages silently. Users will receive a notification with no sound. |
| [protect_content] | <code>boolean</code> | Protects the content of the forwarded messages from forwarding and saving. |

<a name="CopyMessageOptions"></a>

## CopyMessageOptions : <code>Object</code>
Options for copying a single message from one chat to another, potentially with a new caption.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [message_thread_id] | <code>number</code> | Unique identifier for the target message thread, only for messages in threads. |
| from_chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the chat where the original message was sent (or channel username in the format `@channelusername`). |
| message_id | <code>number</code> | Unique message identifier to copy. |
| [caption] | <code>string</code> | New caption for the message. |
| [parse_mode] | [<code>Format</code>](#Format) | Formatting options for the caption, Markdown or HTML. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in the new caption, which can be specified instead of parse_mode. |
| [disable_notification] | <code>boolean</code> | Sends the message silently. Users will receive a notification with no sound. |
| [protect_content] | <code>boolean</code> | Protects the content of the copied message from forwarding and saving. |
| [reply_parameters] | [<code>ReplyParameters</code>](#ReplyParameters) | Additional parameters for replying to messages. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) \| [<code>ReplyKeyboardMarkup</code>](#ReplyKeyboardMarkup) \| [<code>ReplyKeyboardRemove</code>](#ReplyKeyboardRemove) \| [<code>ForceReply</code>](#ForceReply) | Additional interface options for the message. |

<a name="CopyMessagesOptions"></a>

## CopyMessagesOptions : <code>Object</code>
Options for copying multiple messages from one chat to another without changing the caption.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [message_thread_id] | <code>number</code> | Unique identifier for the target message thread, only for messages in threads. |
| from_chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the chat where the original messages were sent (or channel username in the format `@channelusername`). |
| message_ids | <code>Array.&lt;number&gt;</code> | Array of unique message identifiers to copy. |
| [disable_notification] | <code>boolean</code> | Sends the messages silently. Users will receive a notification with no sound. |
| [protect_content] | <code>boolean</code> | Protects the content of the copied messages from forwarding and saving. |
| [remove_caption] | <code>boolean</code> | Indicates whether to remove the captions of the copied messages. |

<a name="SendPhotoOptions"></a>

## SendPhotoOptions : <code>Object</code>
Options for sending a photo.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [message_thread_id] | <code>number</code> | Unique identifier for the target message thread, only for messages in threads. |
| photo | <code>InputFile</code> \| <code>string</code> | Photo to send. |
| [caption] | <code>string</code> | Photo caption, may also be used when resending photos by file_id. |
| [parse_mode] | [<code>Format</code>](#Format) | Format of the caption text: Markdown or HTML. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in the caption, which can be specified instead of parse_mode. |
| [has_spoiler] | <code>boolean</code> | Marks the caption as containing a spoiler. |
| [disable_notification] | <code>boolean</code> | Sends the photo silently. Users will receive a notification with no sound. |
| [protect_content] | <code>boolean</code> | Protects the content of the sent photo from forwarding and saving. |
| [reply_parameters] | [<code>ReplyParameters</code>](#ReplyParameters) | Additional parameters for replying to messages. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) \| [<code>ReplyKeyboardMarkup</code>](#ReplyKeyboardMarkup) \| [<code>ReplyKeyboardRemove</code>](#ReplyKeyboardRemove) \| [<code>ForceReply</code>](#ForceReply) | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user. |

<a name="SendAudioOptions"></a>

## SendAudioOptions : <code>Object</code>
Options for sending an audio file.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username of the target channel. |
| [message_thread_id] | <code>number</code> | Unique identifier for the target message thread. |
| audio | <code>InputFile</code> \| <code>string</code> | Audio file to send. |
| [caption] | <code>string</code> | Audio caption, 0-1024 characters after entities parsing. |
| [parse_mode] | [<code>Format</code>](#Format) | Format of the caption text: Markdown or HTML. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in the caption, which can be specified instead of parse_mode. |
| [duration] | <code>number</code> | Duration of the audio in seconds. |
| [performer] | <code>string</code> | Performer of the audio. |
| [title] | <code>string</code> | Title of the audio. |
| [thumbnail] | <code>InputFile</code> \| <code>string</code> | Thumbnail of the file to send. |
| [disable_notification] | <code>boolean</code> | Sends the audio silently. Users will receive a notification with no sound. |
| [protect_content] | <code>boolean</code> | Protects the content of the sent audio from forwarding and saving. |
| [reply_parameters] | [<code>ReplyParameters</code>](#ReplyParameters) | Additional parameters for replying to messages. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) \| [<code>ReplyKeyboardMarkup</code>](#ReplyKeyboardMarkup) \| [<code>ReplyKeyboardRemove</code>](#ReplyKeyboardRemove) \| [<code>ForceReply</code>](#ForceReply) | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user. |

<a name="SendDocumentOptions"></a>

## SendDocumentOptions : <code>Object</code>
Options for sending a document.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username of the target channel. |
| [message_thread_id] | <code>number</code> | Unique identifier for the target message thread. |
| document | <code>InputFile</code> \| <code>string</code> | File to send. |
| [thumbnail] | <code>InputFile</code> \| <code>string</code> | Thumbnail of the file to send. |
| [caption] | <code>string</code> | Document caption, may also be used when resending documents by file_id, 0-1024 characters after entities parsing. |
| [parse_mode] | [<code>Format</code>](#Format) | Format of the caption text: Markdown or HTML. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in the caption, which can be specified instead of parse_mode. |
| [disable_content_type_detection] | <code>boolean</code> | Disables automatic server-side content type detection for files uploaded using multipart/form-data. |
| [disable_notification] | <code>boolean</code> | Sends the document silently. Users will receive a notification with no sound. |
| [protect_content] | <code>boolean</code> | Protects the content of the sent document from forwarding and saving. |
| [reply_parameters] | [<code>ReplyParameters</code>](#ReplyParameters) | Additional parameters for replying to messages. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) \| [<code>ReplyKeyboardMarkup</code>](#ReplyKeyboardMarkup) \| [<code>ReplyKeyboardRemove</code>](#ReplyKeyboardRemove) \| [<code>ForceReply</code>](#ForceReply) | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user. |

<a name="SendVideoOptions"></a>

## SendVideoOptions : <code>Object</code>
Options for sending a video.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username of the target channel. |
| [message_thread_id] | <code>number</code> | Unique identifier for the target message thread. |
| video | <code>InputFile</code> \| <code>string</code> | Video to send. |
| [duration] | <code>number</code> | Duration of sent video in seconds. |
| [width] | <code>number</code> | Video width. |
| [height] | <code>number</code> | Video height. |
| [thumbnail] | <code>InputFile</code> \| <code>string</code> | Thumbnail of the file to send. |
| [caption] | <code>string</code> | Video caption, may also be used when resending videos by file_id, 0-1024 characters after entities parsing. |
| [parse_mode] | [<code>Format</code>](#Format) | Format of the caption text: Markdown or HTML. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in the caption, which can be specified instead of parse_mode. |
| [has_spoiler] | <code>boolean</code> | Marks the caption as containing a spoiler. |
| [supports_streaming] | <code>boolean</code> | If the video is suitable for streaming. |
| [disable_notification] | <code>boolean</code> | Sends the video silently. Users will receive a notification with no sound. |
| [protect_content] | <code>boolean</code> | Protects the content of the sent video from forwarding and saving. |
| [reply_parameters] | [<code>ReplyParameters</code>](#ReplyParameters) | Additional parameters for replying to messages. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) \| [<code>ReplyKeyboardMarkup</code>](#ReplyKeyboardMarkup) \| [<code>ReplyKeyboardRemove</code>](#ReplyKeyboardRemove) \| [<code>ForceReply</code>](#ForceReply) | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user. |

<a name="SendAnimationOptions"></a>

## SendAnimationOptions : <code>Object</code>
Options for sending an animation.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [message_thread_id] | <code>number</code> | Unique identifier for the target message thread, only for messages in threads. |
| animation | <code>InputFile</code> \| <code>string</code> | Animation to send. |
| [duration] | <code>number</code> | Duration of sent animation in seconds. |
| [width] | <code>number</code> | Animation width. |
| [height] | <code>number</code> | Animation height. |
| [thumbnail] | <code>InputFile</code> \| <code>string</code> | Thumbnail of the file to send. |
| [caption] | <code>string</code> | Caption for the animation, 0-1024 characters after entities parsing. |
| [parse_mode] | [<code>Format</code>](#Format) | Format of the caption text: Markdown or HTML. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in the caption, which can be specified instead of parse_mode. |
| [has_spoiler] | <code>boolean</code> | Marks the caption as containing a spoiler. |
| [disable_notification] | <code>boolean</code> | Sends the message silently. Users will receive a notification with no sound. |
| [protect_content] | <code>boolean</code> | Protects the content of the sent message from forwarding and saving. |
| [reply_parameters] | [<code>ReplyParameters</code>](#ReplyParameters) | Additional parameters for replying to messages. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) \| [<code>ReplyKeyboardMarkup</code>](#ReplyKeyboardMarkup) \| [<code>ReplyKeyboardRemove</code>](#ReplyKeyboardRemove) \| [<code>ForceReply</code>](#ForceReply) | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user. |

<a name="SendVoiceOptions"></a>

## SendVoiceOptions : <code>Object</code>
Options for sending a voice message.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [message_thread_id] | <code>number</code> | Unique identifier for the target message thread, only for messages in threads. |
| voice | <code>InputFile</code> \| <code>string</code> | Audio file to send as a voice message. |
| [caption] | <code>string</code> | Caption for the voice message, 0-1024 characters after entities parsing. |
| [parse_mode] | [<code>Format</code>](#Format) | Format of the caption text: Markdown or HTML. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in the caption, which can be specified instead of parse_mode. |
| [duration] | <code>number</code> | Duration of the voice message in seconds. |
| [disable_notification] | <code>boolean</code> | Sends the message silently. Users will receive a notification with no sound. |
| [protect_content] | <code>boolean</code> | Protects the content of the sent message from forwarding and saving. |
| [reply_parameters] | [<code>ReplyParameters</code>](#ReplyParameters) | Additional parameters for replying to messages. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) \| [<code>ReplyKeyboardMarkup</code>](#ReplyKeyboardMarkup) \| [<code>ReplyKeyboardRemove</code>](#ReplyKeyboardRemove) \| [<code>ForceReply</code>](#ForceReply) | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user. |

<a name="SendVideoNoteOptions"></a>

## SendVideoNoteOptions : <code>Object</code>
Options for sending a video note.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [message_thread_id] | <code>number</code> | Unique identifier for the target message thread, only for messages in threads. |
| video_note | <code>InputFile</code> \| <code>string</code> | Video note to send. |
| [duration] | <code>number</code> | Duration of the video note in seconds. |
| [length] | <code>number</code> | Video width and height, since video notes are square-shaped. |
| [thumbnail] | <code>InputFile</code> \| <code>string</code> | Thumbnail of the file to send. |
| [disable_notification] | <code>boolean</code> | Sends the message silently. Users will receive a notification with no sound. |
| [protect_content] | <code>boolean</code> | Protects the content of the sent message from forwarding and saving. |
| [reply_parameters] | [<code>ReplyParameters</code>](#ReplyParameters) | Additional parameters for replying to messages. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) \| [<code>ReplyKeyboardMarkup</code>](#ReplyKeyboardMarkup) \| [<code>ReplyKeyboardRemove</code>](#ReplyKeyboardRemove) \| [<code>ForceReply</code>](#ForceReply) | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user. |

<a name="SendMediaGroupOptions"></a>

## SendMediaGroupOptions : <code>Object</code>
Options for sending a media group.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [message_thread_id] | <code>number</code> | Unique identifier for the target message thread, only for messages in threads. |
| media | [<code>Array.&lt;InputMediaAudio&gt;</code>](#InputMediaAudio) \| [<code>Array.&lt;InputMediaDocument&gt;</code>](#InputMediaDocument) \| [<code>Array.&lt;InputMediaPhoto&gt;</code>](#InputMediaPhoto) \| [<code>Array.&lt;InputMediaVideo&gt;</code>](#InputMediaVideo) | A JSON-serialized array describing photos, videos, documents, or audios to be sent, making up a media group. |
| [disable_notification] | <code>boolean</code> | Sends the messages silently. Users will receive notifications with no sound. |
| [protect_content] | <code>boolean</code> | Protects the content of the sent messages from forwarding and saving. |
| [reply_parameters] | [<code>ReplyParameters</code>](#ReplyParameters) | Additional parameters for replying to messages. |

<a name="SendLocationOptions"></a>

## SendLocationOptions : <code>Object</code>
Options for sending a location message.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [message_thread_id] | <code>number</code> | Unique identifier for the target message thread, only for messages in threads. |
| latitude | <code>number</code> | Latitude of the location. |
| longitude | <code>number</code> | Longitude of the location. |
| [horizontal_accuracy] | <code>number</code> | The radius of uncertainty for the location, measured in meters; 0-1500. |
| [live_period] | <code>number</code> | Time in seconds for which the location will be live, ranging from 60 to 86400. |
| [heading] | <code>number</code> | For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. |
| [proximity_alert_radius] | <code>number</code> | For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. |
| [disable_notification] | <code>boolean</code> | Sends the message silently. Users will receive a notification with no sound. |
| [protect_content] | <code>boolean</code> | Protects the content of the sent message from forwarding and saving. |
| [reply_parameters] | [<code>ReplyParameters</code>](#ReplyParameters) | Additional parameters for replying to messages. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) \| [<code>ReplyKeyboardMarkup</code>](#ReplyKeyboardMarkup) \| [<code>ReplyKeyboardRemove</code>](#ReplyKeyboardRemove) \| [<code>ForceReply</code>](#ForceReply) | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user. |

<a name="SendVenueOptions"></a>

## SendVenueOptions : <code>Object</code>
Options for sending a venue message.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [message_thread_id] | <code>number</code> | Unique identifier for the target message thread, only for messages in threads. |
| latitude | <code>number</code> | Latitude of the venue. |
| longitude | <code>number</code> | Longitude of the venue. |
| title | <code>string</code> | Name of the venue. |
| address | <code>string</code> | Address of the venue. |
| [foursquare_id] | <code>string</code> | Foursquare identifier of the venue. |
| [foursquare_type] | <code>string</code> | Foursquare type of the venue., For example, `arts_entertainment/default`, `arts_entertainment/aquarium` or `food/icecream`.) |
| [google_place_id] | <code>string</code> | Google Places identifier of the venue. |
| [google_place_type] | <code>string</code> | Google Places type of the venue., See [Google Places API](https://developers.google.com/places/web-service/supported_types) for supported types.) |
| [disable_notification] | <code>boolean</code> | Sends the message silently. Users will receive a notification with no sound. |
| [protect_content] | <code>boolean</code> | Protects the content of the sent message from forwarding and saving. |
| [reply_parameters] | [<code>ReplyParameters</code>](#ReplyParameters) | Additional parameters for replying to messages. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) \| [<code>ReplyKeyboardMarkup</code>](#ReplyKeyboardMarkup) \| [<code>ReplyKeyboardRemove</code>](#ReplyKeyboardRemove) \| [<code>ForceReply</code>](#ForceReply) | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user. |

<a name="SendContactOptions"></a>

## SendContactOptions : <code>Object</code>
Options for sending a contact message.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [message_thread_id] | <code>number</code> | Unique identifier for the target message thread, only for messages in threads. |
| phone_number | <code>string</code> | Contact's phone number. |
| first_name | <code>string</code> | Contact's first name. |
| [last_name] | <code>string</code> | Contact's last name. |
| [vcard] | <code>string</code> | Additional data about the contact in the form of a vCard, 0-2048 bytes. |
| [disable_notification] | <code>boolean</code> | Sends the message silently. Users will receive a notification with no sound. |
| [protect_content] | <code>boolean</code> | Protects the content of the sent message from forwarding and saving. |
| [reply_parameters] | [<code>ReplyParameters</code>](#ReplyParameters) | Additional parameters for replying to messages. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) \| [<code>ReplyKeyboardMarkup</code>](#ReplyKeyboardMarkup) \| [<code>ReplyKeyboardRemove</code>](#ReplyKeyboardRemove) \| [<code>ForceReply</code>](#ForceReply) | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user. |

<a name="SendPollOptions"></a>

## SendPollOptions : <code>Object</code>
Options for sending a poll.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [message_thread_id] | <code>number</code> | Unique identifier for the target message thread, only for messages in threads. |
| question | <code>string</code> | Poll question, 1-300 characters. |
| options | <code>Array.&lt;string&gt;</code> | List of answer options, 2-10 strings 1-100 characters each. |
| [is_anonymous] | <code>boolean</code> | True, if the poll needs to be anonymous. |
| [type] | <code>string</code> | Poll type, ΓÇ£quizΓÇ¥ or ΓÇ£regularΓÇ¥, defaults to ΓÇ£regularΓÇ¥. |
| [allows_multiple_answers] | <code>boolean</code> | True, if the poll allows multiple answers, ignored for quizzes. |
| [correct_option_id] | <code>number</code> | 0-based identifier of the correct answer option, required for quizzes. |
| [explanation] | <code>string</code> | Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with the possibility to include entities. |
| [explanation_parse_mode] | [<code>Format</code>](#Format) | Mode for parsing entities in the explanation. See formatting options for more details. |
| [explanation_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in the explanation, which can be specified instead of parse_mode. |
| [open_period] | <code>number</code> | Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date. |
| [close_date] | <code>number</code> | Point in time, Unix timestamp) when the poll will be automatically closed. Can't be used together with open_period. |
| [is_closed] | <code>boolean</code> | Pass True, if the poll needs to be immediately closed. This can be useful for poll preview. |
| [disable_notification] | <code>boolean</code> | Sends the message silently. Users will receive a notification with no sound. |
| [protect_content] | <code>boolean</code> | Protects the content of the sent message from forwarding and saving. |
| [reply_parameters] | [<code>ReplyParameters</code>](#ReplyParameters) | Additional parameters for replying to messages. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) \| [<code>ReplyKeyboardMarkup</code>](#ReplyKeyboardMarkup) \| [<code>ReplyKeyboardRemove</code>](#ReplyKeyboardRemove) \| [<code>ForceReply</code>](#ForceReply) | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user. |

<a name="SendDiceOptions"></a>

## SendDiceOptions : <code>Object</code>
Options for sending a dice message.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [message_thread_id] | <code>number</code> | Unique identifier for the target message thread, only for messages in threads. |
| [emoji] | <code>string</code> | Emoji on which the dice throw animation is based. |
| [disable_notification] | <code>boolean</code> | Sends the message silently. Users will receive a notification with no sound. |
| [protect_content] | <code>boolean</code> | Protects the content of the sent message from forwarding and saving. |
| [reply_parameters] | [<code>ReplyParameters</code>](#ReplyParameters) | Additional parameters for replying to messages. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) \| [<code>ReplyKeyboardMarkup</code>](#ReplyKeyboardMarkup) \| [<code>ReplyKeyboardRemove</code>](#ReplyKeyboardRemove) \| [<code>ForceReply</code>](#ForceReply) | Additional interface options for the message. |

<a name="SendChatActionOptions"></a>

## SendChatActionOptions : <code>Object</code>
Options for sending chat action.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [message_thread_id] | <code>number</code> | Unique identifier for the target message thread, only for messages in threads. |
| action | <code>string</code> | Type of action to broadcast. |

<a name="SetMessageReactionOptions"></a>

## SetMessageReactionOptions : <code>Object</code>
Options for setting message reaction.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| message_id | <code>number</code> | Identifier of the message to add the reaction to. |
| [reaction] | [<code>Array.&lt;ReactionType&gt;</code>](#ReactionType) | Types of reactions to set on the message. |
| [is_big] | <code>boolean</code> | Whether the reaction should be displayed in a larger format. |

<a name="GetUserProfilePhotosOptions"></a>

## GetUserProfilePhotosOptions : <code>Object</code>
Options for getting a user's profile photos.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| user_id | <code>number</code> | Unique identifier of the target user. |
| [offset] | <code>number</code> | Sequential number of the first photo to be returned. |
| [limit] | <code>number</code> | Limits the number of photos to be retrieved. |

<a name="GetFileOptions"></a>

## GetFileOptions : <code>Object</code>
Options for getting file information.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| file_id | <code>string</code> | File identifier to get info about. |

<a name="BanChatMemberOptions"></a>

## BanChatMemberOptions : <code>Object</code>
Options for banning a chat member.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| user_id | <code>number</code> | Unique identifier of the target user to be banned. |
| [until_date] | <code>number</code> | Date when the ban will be lifted. Unix time. |
| [revoke_messages] | <code>boolean</code> | Pass True to delete all messages from the chat for the user that is being removed. |

<a name="UnbanChatMemberOptions"></a>

## UnbanChatMemberOptions : <code>Object</code>
Options for unbanning a previously banned user in a supergroup or channel.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| user_id | <code>number</code> | Unique identifier of the target user. |
| [only_if_banned] | <code>boolean</code> | Do the unban action only if the user is currently banned. |

<a name="RestrictChatMemberOptions"></a>

## RestrictChatMemberOptions : <code>Object</code>
Options for restricting a user in a supergroup.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| user_id | <code>number</code> | Unique identifier of the target user to restrict. |
| permissions | [<code>ChatPermissions</code>](#ChatPermissions) | Permissions to be set for the restricted user. |
| [use_independent_chat_permissions] | <code>boolean</code> | Use independent permissions for the chat. |
| [until_date] | <code>number</code> | Date when restrictions will be lifted for the user, unix time. |

<a name="SetChatAdministratorCustomTitleOptions"></a>

## SetChatAdministratorCustomTitleOptions : <code>Object</code>
Options for promoting or demoting a user in a supergroup or channel.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| user_id | <code>number</code> | Unique identifier of the target user to promote or demote. |
| [is_anonymous] | <code>boolean</code> | The user's presence in chat is hidden. |
| [can_manage_chat] | <code>boolean</code> | The user can access the chat event log, chat statistics, message statistics in channels, see channel members, manage voice chats. |
| [can_delete_messages] | <code>boolean</code> | The user can delete messages of other users. |
| [can_manage_video_chats] | <code>boolean</code> | The user can manage video chats. |
| [can_restrict_members] | <code>boolean</code> | The user can restrict, ban or unban chat members. |
| [can_promote_members] | <code>boolean</code> | The user can add new administrators with a subset of their own privileges or demote administrators that he has promoted, directly or indirectly, promoted by administrators that were appointed by the user. |
| [can_change_info] | <code>boolean</code> | The user can change the chat title, photo, and other settings. |
| [can_invite_users] | <code>boolean</code> | The user can invite new users to the chat. |
| [can_post_messages] | <code>boolean</code> | The user can post in the channel. |
| [can_edit_messages] | <code>boolean</code> | The user can edit messages of others and can pin messages. |
| [can_pin_messages] | <code>boolean</code> | The user can pin messages. /** Options for setting a custom title for an administrator in a supergroup. |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| user_id | <code>number</code> | Unique identifier of the target user to set a custom title. |
| custom_title | <code>string</code> | New custom title for the administrator; 0-16 characters, emoji are not allowed. |

<a name="BanChatSenderChatOptions"></a>

## BanChatSenderChatOptions : <code>Object</code>
Options for banning a channel chat in a supergroup or channel.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| sender_chat_id | <code>number</code> | Unique identifier of the target sender chat to ban. |

<a name="UnbanChatSenderChatOptions"></a>

## UnbanChatSenderChatOptions : <code>Object</code>
Options for unbanning a previously banned channel chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| sender_chat_id | <code>number</code> | Unique identifier of the target sender chat to unban. |

<a name="SetChatPermissionsOptions"></a>

## SetChatPermissionsOptions : <code>Object</code>
Options for setting default chat permissions for all members.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| permissions | [<code>ChatPermissions</code>](#ChatPermissions) | New default chat permissions to set. |
| [use_independent_chat_permissions] | <code>boolean</code> | Specifies whether the chat supports independent default chat permissions for channels and supergroups. |

<a name="ExportChatInviteLinkOptions"></a>

## ExportChatInviteLinkOptions : <code>Object</code>
Options for generating a new primary invite link for a chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |

<a name="CreateChatInviteLinkOptions"></a>

## CreateChatInviteLinkOptions : <code>Object</code>
Options for creating an additional invite link for a chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [name] | <code>string</code> | Invite link name. |
| [expire_date] | <code>number</code> | Date when the link will expire. |
| [member_limit] | <code>number</code> | Maximum number of users that can be invited. |
| [creates_join_request] | <code>boolean</code> | True, if the link should create a join request instead of immediately joining the chat. |

<a name="EditChatInviteLinkOptions"></a>

## EditChatInviteLinkOptions : <code>Object</code>
Options for editing a non-primary invite link created by the bot.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| invite_link | <code>string</code> | The invite link to edit. |
| [name] | <code>string</code> | New name for the invite link. |
| [expire_date] | <code>number</code> | New expiration date for the invite link. |
| [member_limit] | <code>number</code> | New maximum number of users that can be invited with the link. |
| [creates_join_request] | <code>boolean</code> | True, if the link should now create a join request instead of immediately joining the chat. |

<a name="RevokeChatInviteLinkOptions"></a>

## RevokeChatInviteLinkOptions : <code>Object</code>
Options for revoking an invite link created by the bot.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| invite_link | <code>string</code> | The invite link to revoke. |

<a name="ChatJoinRequestOptions"></a>

## ChatJoinRequestOptions : <code>Object</code>
Options for managing a chat join request.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| user_id | <code>number</code> | Unique identifier of the target user. |

<a name="SetChatPhotoOptions"></a>

## SetChatPhotoOptions : <code>Object</code>
Options for setting a new chat photo.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| photo | <code>InputFile</code> | New chat photo. |

<a name="deleteChatPhotoOptions"></a>

## deleteChatPhotoOptions : <code>Object</code>
Basic options for operations on a chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |

<a name="SetChatTitleOptions"></a>

## SetChatTitleOptions : <code>Object</code>
Options for changing the title of a chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| title | <code>string</code> | New chat title. |

<a name="SetChatDescriptionOptions"></a>

## SetChatDescriptionOptions : <code>Object</code>
Options for changing the description of a chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [description] | <code>string</code> | New chat description. |

<a name="PinChatMessageOptions"></a>

## PinChatMessageOptions : <code>Object</code>
Options for pinning a message in a chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| message_id | <code>number</code> | Identifier of a message to pin. |
| [disable_notification] | <code>boolean</code> | If true, the message will be pinned silently. This means users will not receive a notification. |

<a name="UnpinChatMessageOptions"></a>

## UnpinChatMessageOptions : <code>Object</code>
Options for unpinning a chat message.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [message_id] | <code>number</code> | Identifier of a message to unpin. If not specified, the most recent pinned message, by sending date) will be unpinned. |

<a name="ChatIdOptions"></a>

## ChatIdOptions : <code>Object</code>
Options requiring only a chat ID.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |

<a name="GetChatMemberOptions"></a>

## GetChatMemberOptions : <code>Object</code>
Options for getting information about a chat member.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| user_id | <code>number</code> | Unique identifier of the target user. |

<a name="GetChatMemberOptions"></a>

## GetChatMemberOptions : <code>Object</code>
Options for getting information about a member of a chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| user_id | <code>number</code> | Unique identifier of the target user. |

<a name="SetChatStickerSetOptions"></a>

## SetChatStickerSetOptions : <code>Object</code>
Options for setting a new group sticker set for a supergroup.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| sticker_set_name | <code>string</code> | Name of the sticker set to be set as the group sticker set. |

<a name="CreateForumTopicOptions"></a>

## CreateForumTopicOptions : <code>Object</code>
Options for creating a topic in a forum supergroup chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| name | <code>string</code> | Name of the forum topic. |
| [icon_color] | <code>number</code> | Color of the forum topic icon. |
| [icon_custom_emoji_id] | <code>string</code> | Custom emoji identifier to be used as the icon of the forum topic. |

<a name="EditForumTopicOptions"></a>

## EditForumTopicOptions : <code>Object</code>
Options for editing the name and icon of a forum topic.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| message_thread_id | <code>number</code> | Unique identifier for the target message thread. |
| [name] | <code>string</code> | New name for the forum topic. |
| [icon_custom_emoji_id] | <code>string</code> | Custom emoji identifier to be used as the new icon of the forum topic. |

<a name="ForumTopicManagementOptions"></a>

## ForumTopicManagementOptions : <code>Object</code>
Options for closing or reopening a topic in a forum supergroup chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| message_thread_id | <code>number</code> | Unique identifier for the target message thread. |

<a name="EditGeneralForumTopicOptions"></a>

## EditGeneralForumTopicOptions : <code>Object</code>
Options for editing the name of the 'General' topic in a forum supergroup chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| name | <code>string</code> | New name for the 'General' topic. |

<a name="AnswerCallbackQueryOptions"></a>

## AnswerCallbackQueryOptions : <code>Object</code>
Options for sending answers to callback queries sent from inline keyboards.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| callback_query_id | <code>string</code> | Unique identifier for the query to be answered. |
| [text] | <code>string</code> | Text of the notification. If not specified, nothing will be shown to the user. |
| [show_alert] | <code>boolean</code> | If true, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false. |
| [url] | <code>string</code> | URL that will be opened by the user's client. |
| [cache_time] | <code>number</code> | The maximum amount of time in seconds that the result of the callback query may be cached client-side. |

<a name="GetUserChatBoostsOptions"></a>

## GetUserChatBoostsOptions : <code>Object</code>
Options for getting the list of boosts added to a chat by a user.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | The unique identifier for the target chat or username of the target channel. |
| user_id | <code>number</code> | Unique identifier of the user whose boosts are being requested. |

<a name="SetMyCommandsOptions"></a>

## SetMyCommandsOptions : <code>Object</code>
Options for changing the list of the bot's commands.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| commands | [<code>Array.&lt;BotCommand&gt;</code>](#BotCommand) | An array of bot commands to be set. |
| [scope] | [<code>BotCommandScope</code>](#BotCommandScope) | A JSON-serialized object defining the scope of commands. If not specified, defaults to all private chats. |
| [language_code] | <code>string</code> | A two-letter ISO 639-1 language code. If not specified, commands will be applied to all languages. |

<a name="DeleteMyCommandsOptions"></a>

## DeleteMyCommandsOptions : <code>Object</code>
Options for deleting the bot's commands for a given scope and language.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [scope] | [<code>BotCommandScope</code>](#BotCommandScope) | A JSON-serialized object defining the scope of commands to be deleted. If not specified, commands will be deleted in all private chats. |
| [language_code] | <code>string</code> | A two-letter ISO 639-1 language code. If not specified, commands will be deleted for all languages. |

<a name="GetMyCommandsOptions"></a>

## GetMyCommandsOptions : <code>Object</code>
Options for getting the list of the bot's commands.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [scope] | [<code>BotCommandScope</code>](#BotCommandScope) | The scope of commands to retrieve. If not specified, defaults to all commands. |
| [language_code] | <code>string</code> | A language code to specify which language's commands to retrieve. If not specified, defaults to all languages. |

<a name="SetMyNameOptions"></a>

## SetMyNameOptions : <code>Object</code>
Options for setting the bot's name.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The new name to set for the bot. |
| [language_code] | <code>string</code> | A language code. If specified, sets the name for that specific language. |

<a name="GetMyNameOptions"></a>

## GetMyNameOptions : <code>Object</code>
Options for getting the bot's name.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [language_code] | <code>string</code> | A language code to specify which language's name to retrieve. If not specified, gets the default name. |

<a name="GetMyDescriptionOptions"></a>

## GetMyDescriptionOptions : <code>Object</code>
Options for getting the bot's description.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [language_code] | <code>string</code> | A language code to specify which language's description to retrieve. If not specified, gets the default description. |

<a name="SetMyDescriptionOptions"></a>

## SetMyDescriptionOptions : <code>Object</code>
Options for setting the bot's description.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [description] | <code>string</code> | The new description to set for the bot. |
| [language_code] | <code>string</code> | A language code. If specified, sets the description for that specific language. |

<a name="GetMyShortDescriptionOptions"></a>

## GetMyShortDescriptionOptions : <code>Object</code>
Options for getting the bot's short description.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [language_code] | <code>string</code> | A language code to specify which language's short description to retrieve. If not specified, gets the default short description. |

<a name="SetChatMenuButtonOptions"></a>

## SetChatMenuButtonOptions : <code>Object</code>
Options for setting the chat menu button.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [chat_id] | <code>number</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [menu_button] | [<code>MenuButton</code>](#MenuButton) | The menu button to be set. If not specified, the button is removed. |

<a name="GetChatMenuButtonOptions"></a>

## GetChatMenuButtonOptions : <code>Object</code>
Options for getting the chat menu button.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [chat_id] | <code>number</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |

<a name="SetMyDefaultAdministratorRightsOptions"></a>

## SetMyDefaultAdministratorRightsOptions : <code>Object</code>
Options for setting the bot's default administrator rights.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [rights] | [<code>ChatAdministratorRights</code>](#ChatAdministratorRights) | The default administrator rights to be set. |
| [for_channels] | <code>boolean</code> | Specifies whether the rights are for channels. Defaults to false, for groups. |

<a name="GetMyDefaultAdministratorRightsOptions"></a>

## GetMyDefaultAdministratorRightsOptions : <code>Object</code>
Options for getting the bot's default administrator rights.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [for_channels] | <code>boolean</code> | Specifies whether to get the rights for channels. Defaults to false, for groups. |

<a name="EditMessageTextOptions"></a>

## EditMessageTextOptions : <code>Object</code>
Options for editing the text of messages.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [chat_id] | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [message_id] | <code>number</code> | Identifier of the message to edit. |
| [inline_message_id] | <code>string</code> | Identifier of the inline message to edit. |
| text | <code>string</code> | New text of the message. |
| [parse_mode] | [<code>Format</code>](#Format) | Format of the text: Markdown or HTML. |
| [entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in the message text, which can be specified instead of parse_mode. |
| [link_preview_options] | [<code>LinkPreviewOptions</code>](#LinkPreviewOptions) | Options for how links in the message should be previewed. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | Additional interface options. A JSON-serialized object for an inline keyboard. |

<a name="EditMessageCaptionOptions"></a>

## EditMessageCaptionOptions : <code>Object</code>
Options for editing the caption of a message.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [chat_id] | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [message_id] | <code>number</code> | Identifier of the message to edit. |
| [inline_message_id] | <code>string</code> | Identifier of the inline message. |
| [caption] | <code>string</code> | New caption of the message. |
| [parse_mode] | [<code>Format</code>](#Format) | Format of the caption text: Markdown or HTML. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in the caption, which can be specified instead of parse_mode. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | A JSON-serialized object for an inline keyboard. |

<a name="EditMessageMediaOptions"></a>

## EditMessageMediaOptions : <code>Object</code>
Options for editing the media content of messages.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [chat_id] | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [message_id] | <code>number</code> | Identifier of the message to edit. |
| [inline_message_id] | <code>string</code> | Identifier of the inline message. |
| media | [<code>InputMedia</code>](#InputMedia) | New media content of the message. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | A JSON-serialized object for an inline keyboard. |

<a name="EditMessageLiveLocationOptions"></a>

## EditMessageLiveLocationOptions : <code>Object</code>
Options for editing the live location of a message.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [chat_id] | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [message_id] | <code>number</code> | Identifier of the message to edit. |
| [inline_message_id] | <code>string</code> | Identifier of the inline message. |
| latitude | <code>number</code> | Latitude of new location. |
| longitude | <code>number</code> | Longitude of new location. |
| [horizontal_accuracy] | <code>number</code> | The radius of uncertainty for the location, measured in meters; 0-1500. |
| [heading] | <code>number</code> | Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. |
| [proximity_alert_radius] | <code>number</code> | Maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | A JSON-serialized object for an inline keyboard. |

<a name="StopMessageLiveLocationOptions"></a>

## StopMessageLiveLocationOptions : <code>Object</code>
Options for stopping a live location message.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [chat_id] | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [message_id] | <code>number</code> | Identifier of the message to stop showing the live location. |
| [inline_message_id] | <code>string</code> | Identifier of the inline message to stop showing the live location. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | A JSON-serialized object for an inline keyboard. |

<a name="StopMessageLiveLocationOptions"></a>

## StopMessageLiveLocationOptions : <code>Object</code>
Options for stopping a live location message.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [chat_id] | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [message_id] | <code>number</code> | Identifier of the message with live location to stop. |
| [inline_message_id] | <code>string</code> | Identifier of the inline message with live location to stop. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | A JSON-serialized object for a new inline keyboard. |

<a name="EditMessageReplyMarkupOptions"></a>

## EditMessageReplyMarkupOptions : <code>Object</code>
Options for editing the reply markup of messages.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [chat_id] | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [message_id] | <code>number</code> | Identifier of the message to edit. |
| [inline_message_id] | <code>string</code> | Identifier of the inline message to edit. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | A JSON-serialized object for a new inline keyboard. |

<a name="StopPollOptions"></a>

## StopPollOptions : <code>Object</code>
Options for stopping a poll.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| message_id | <code>number</code> | Identifier of the original message with the poll. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | A JSON-serialized object for a new inline keyboard. |

<a name="DeleteMessageOptions"></a>

## DeleteMessageOptions : <code>Object</code>
Options for deleting a message.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| message_id | <code>number</code> | Identifier of the message to delete. |

<a name="DeleteMessagesOptions"></a>

## DeleteMessagesOptions : <code>Object</code>
Options for deleting multiple messages.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| message_ids | <code>Array.&lt;number&gt;</code> | Array of message identifiers to delete. |

<a name="SendStickerOptions"></a>

## SendStickerOptions : <code>Object</code>
Options for sending a sticker.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [message_thread_id] | <code>number</code> | Unique identifier for the target message thread, only for messages in threads. |
| sticker | <code>InputFile</code> \| <code>string</code> | Sticker to send. Can be a file_id as String to send a sticker that exists on the Telegram servers, or a file from the filesystem. |
| [emoji] | <code>string</code> | Emoji associated with the sticker. |
| [disable_notification] | <code>boolean</code> | Sends the sticker silently. Users will receive a notification with no sound. |
| [protect_content] | <code>boolean</code> | Protects the content of the sent sticker from forwarding and saving. |
| [reply_parameters] | [<code>ReplyParameters</code>](#ReplyParameters) | Additional parameters for replying to messages. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) \| [<code>ReplyKeyboardMarkup</code>](#ReplyKeyboardMarkup) \| [<code>ReplyKeyboardRemove</code>](#ReplyKeyboardRemove) \| [<code>ForceReply</code>](#ForceReply) | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard, or to force a reply from the user. |

<a name="GetStickerSetOptions"></a>

## GetStickerSetOptions : <code>Object</code>
Options for getting a sticker set.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the sticker set. |

<a name="GetCustomEmojiStickersOptions"></a>

## GetCustomEmojiStickersOptions : <code>Object</code>
Options for getting custom emoji stickers.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| custom_emoji_ids | <code>Array.&lt;string&gt;</code> | List of custom emoji identifiers to get stickers for. |

<a name="UploadStickerFileOptions"></a>

## UploadStickerFileOptions : <code>Object</code>
Options for uploading a sticker file.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| user_id | <code>number</code> | User identifier of the sticker file owner. |
| sticker | <code>InputFile</code> | Sticker file to upload. |
| sticker_format | <code>string</code> | Format of the sticker file, e.g., `webp`. |

<a name="CreateNewStickerSetOptions"></a>

## CreateNewStickerSetOptions : <code>Object</code>
Options for creating a new sticker set.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| user_id | <code>number</code> | User identifier of the sticker set owner. |
| name | <code>string</code> | Unique name of the sticker set. |
| title | <code>string</code> | Sticker set title, 1-64 characters. |
| stickers | [<code>Array.&lt;InputSticker&gt;</code>](#InputSticker) | Array of stickers to be added to the set. |
| sticker_format | <code>string</code> | Format of the stickers in the set, e.g., `webp`. |
| [sticker_type] | <code>string</code> | Type of the stickers in the set. |
| [needs_repainting] | <code>boolean</code> | True if the sticker set needs repainting. |

<a name="AddStickerToSetOptions"></a>

## AddStickerToSetOptions : <code>Object</code>
Options for adding a new sticker to a set.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| user_id | <code>number</code> | Unique identifier of the target user. |
| name | <code>string</code> | Name of the sticker set to which the sticker will be added. |
| sticker | [<code>InputSticker</code>](#InputSticker) | The sticker to be added to the set. |

<a name="SetStickerPositionInSetOptions"></a>

## SetStickerPositionInSetOptions : <code>Object</code>
Options for setting the position of a sticker in the set.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| sticker | <code>string</code> | File identifier of the sticker. |
| position | <code>number</code> | New sticker position in the set, zero-based. |

<a name="DeleteStickerFromSetOptions"></a>

## DeleteStickerFromSetOptions : <code>Object</code>
Options for deleting a sticker from a set.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| sticker | <code>string</code> | File identifier of the sticker to be deleted. |

<a name="SetStickerEmojiListOptions"></a>

## SetStickerEmojiListOptions : <code>Object</code>
Options for setting the emoji list for a sticker.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| sticker | <code>string</code> | File identifier of the sticker. |
| emoji_list | <code>Array.&lt;string&gt;</code> | A list of emojis associated with the sticker. |

<a name="SetStickerKeywordsOptions"></a>

## SetStickerKeywordsOptions : <code>Object</code>
Options for setting keywords for a sticker.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| sticker | <code>string</code> | File identifier of the sticker. |
| [keywords] | <code>Array.&lt;string&gt;</code> | A list of keywords associated with the sticker. |

<a name="SetStickerMaskPositionOptions"></a>

## SetStickerMaskPositionOptions : <code>Object</code>
Options for setting the mask position of a sticker.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| sticker | <code>string</code> | File identifier of the sticker. |
| [mask_position] | [<code>MaskPosition</code>](#MaskPosition) | The mask position to be set for the sticker. |

<a name="SetStickerSetTitleOptions"></a>

## SetStickerSetTitleOptions : <code>Object</code>
Options for setting the title of a sticker set.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the sticker set. |
| title | <code>string</code> | The new title of the sticker set. |

<a name="SetStickerSetThumbnailOptions"></a>

## SetStickerSetThumbnailOptions : <code>Object</code>
Options for setting the thumbnail of a sticker set.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the sticker set. |
| user_id | <code>number</code> | The user ID of the sticker set owner. |
| [thumbnail] | <code>InputFile</code> \| <code>string</code> | The new thumbnail of the sticker set. Can be a file ID or an actual file. |

<a name="SetCustomEmojiStickerSetThumbnailOptions"></a>

## SetCustomEmojiStickerSetThumbnailOptions : <code>Object</code>
Options for setting the thumbnail of a custom emoji sticker set.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the custom emoji sticker set. |
| [custom_emoji_id] | <code>string</code> | The ID of the custom emoji to be used as the new thumbnail. |

<a name="DeleteStickerSetOptions"></a>

## DeleteStickerSetOptions : <code>Object</code>
Options for deleting a sticker set.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the sticker set to be deleted. |

<a name="AnswerInlineQueryOptions"></a>

## AnswerInlineQueryOptions : <code>Object</code>
Options for answering an inline query.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| inline_query_id | <code>string</code> | Unique identifier for the answered query. |
| results | [<code>Array.&lt;InlineQueryResult&gt;</code>](#InlineQueryResult) | A JSON-serialized array of results for the inline query. |
| [cache_time] | <code>number</code> | The maximum amount of time in seconds that the result of the inline query may be cached on the server. |
| [is_personal] | <code>boolean</code> | Pass true if results may be cached on the server side only for the user that sent the query. |
| [next_offset] | <code>string</code> | Pass the offset that a client should send in the next query with the same text to receive more results. |
| [button] | [<code>InlineQueryResultsButton</code>](#InlineQueryResultsButton) | An optional button that will be shown to the user in the results. |

<a name="AnswerWebAppQueryOptions"></a>

## AnswerWebAppQueryOptions : <code>Object</code>
Options for answering a Web App query.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| web_app_query_id | <code>string</code> | Unique identifier for the query to be answered. |
| result | [<code>InlineQueryResult</code>](#InlineQueryResult) | The result for the query. |

<a name="SendInvoiceOptions"></a>

## SendInvoiceOptions : <code>Object</code>
Options for sending an invoice.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username of the target channel. |
| [message_thread_id] | <code>number</code> | Unique identifier for the target message thread, only for channels. |
| title | <code>string</code> | Product name. |
| description | <code>string</code> | Product description. |
| payload | <code>string</code> | Bot-defined invoice payload. |
| provider_token | <code>string</code> | Payments provider token. |
| currency | <code>string</code> | Three-letter ISO 4217 currency code. |
| prices | [<code>Array.&lt;LabeledPrice&gt;</code>](#LabeledPrice) | Price breakdown, a list of components. |
| [max_tip_amount] | <code>number</code> | The maximum accepted tip amount in the smallest units of the currency. |
| [suggested_tip_amounts] | <code>Array.&lt;number&gt;</code> | Array of suggested tip amounts in the smallest units of the currency. |
| [start_parameter] | <code>string</code> | Unique deep-linking parameter for the payment checkout. |
| [provider_data] | <code>string</code> | JSON-encoded data about the invoice, which will be shared with the payment provider. |
| [photo_url] | <code>string</code> | URL of the product photo for the invoice. |
| [photo_size] | <code>number</code> | Size of the product photo. |
| [photo_width] | <code>number</code> | Width of the product photo. |
| [photo_height] | <code>number</code> | Height of the product photo. |
| [need_name] | <code>boolean</code> | Whether you need the user's full name. |
| [need_phone_number] | <code>boolean</code> | Whether you need the user's phone number. |
| [need_email] | <code>boolean</code> | Whether you need the user's email. |
| [need_shipping_address] | <code>boolean</code> | Whether you need the user's shipping address. |
| [send_phone_number_to_provider] | <code>boolean</code> | Whether the user's phone number should be sent to provider. |
| [send_email_to_provider] | <code>boolean</code> | Whether the user's email should be sent to provider. |
| [is_flexible] | <code>boolean</code> | Whether the final price depends on the shipping method. |
| [disable_notification] | <code>boolean</code> | Sends the invoice silently. Users will receive a notification with no sound. |
| [protect_content] | <code>boolean</code> | Protects the content of the sent invoice from forwarding and saving. |
| [reply_parameters] | [<code>ReplyParameters</code>](#ReplyParameters) | Additional parameters for replying to messages. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) \| [<code>ReplyKeyboardMarkup</code>](#ReplyKeyboardMarkup) \| [<code>ReplyKeyboardRemove</code>](#ReplyKeyboardRemove) \| [<code>ForceReply</code>](#ForceReply) | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user. |

<a name="CreateInvoiceLinkOptions"></a>

## CreateInvoiceLinkOptions : <code>Object</code>
Options for creating an invoice link.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Product name. |
| description | <code>string</code> | Product description. |
| payload | <code>string</code> | Bot-defined invoice payload. |
| provider_token | <code>string</code> | Payments provider token. |
| currency | <code>string</code> | Three-letter ISO 4217 currency code. |
| prices | [<code>Array.&lt;LabeledPrice&gt;</code>](#LabeledPrice) | Price breakdown, a list of components. |
| [max_tip_amount] | <code>number</code> | The maximum accepted tip amount in the smallest units of the currency. |
| [suggested_tip_amounts] | <code>Array.&lt;number&gt;</code> | Array of suggested tip amounts in the smallest units of the currency. |
| [provider_data] | <code>string</code> | JSON-encoded data about the invoice, which will be shared with the payment provider. |
| [photo_url] | <code>string</code> | URL of the product photo for the invoice. |
| [photo_size] | <code>number</code> | Size of the product photo. |
| [photo_width] | <code>number</code> | Width of the product photo. |
| [photo_height] | <code>number</code> | Height of the product photo. |
| [need_name] | <code>boolean</code> | Whether you need the user's full name. |
| [need_phone_number] | <code>boolean</code> | Whether you need the user's phone number. |
| [need_email] | <code>boolean</code> | Whether you need the user's email. |
| [need_shipping_address] | <code>boolean</code> | Whether you need the user's shipping address. |
| [send_phone_number_to_provider] | <code>boolean</code> | Whether the user's phone number should be sent to provider. |
| [send_email_to_provider] | <code>boolean</code> | Whether the user's email should be sent to provider. |
| [is_flexible] | <code>boolean</code> | Whether the final price depends on the shipping method. |

<a name="SendGameOptions"></a>

## SendGameOptions : <code>Object</code>
Options for sending a game.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> | Unique identifier for the target chat. |
| game_short_name | <code>string</code> | Short name of the game to be sent. |
| [message_thread_id] | <code>number</code> | Unique identifier for the target message thread, only for messages in threads. |
| [disable_notification] | <code>boolean</code> | Sends the game message silently. Users will receive a notification with no sound. |
| [protect_content] | <code>boolean</code> | Protects the content of the sent game from forwarding and saving. |
| [reply_parameters] | [<code>ReplyParameters</code>](#ReplyParameters) | Additional parameters for replying to messages. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | A JSON-serialized object for an inline keyboard. If empty, one `Play game_title` button will be shown. If not empty, the first button must launch the game. |

<a name="SetGameScoreOptions"></a>

## SetGameScoreOptions : <code>Object</code>
Options for setting a user's score in a game.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| user_id | <code>number</code> | User identifier. |
| score | <code>number</code> | New score to set. |
| [force] | <code>boolean</code> | Pass True, if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters. |
| [disable_edit_message] | <code>boolean</code> | Pass True, if the game message should not be automatically edited to include the current scoreboard. |
| [chat_id] | <code>number</code> | Required if inline_message_id is not specified. Unique identifier for the target chat. |
| [message_id] | <code>number</code> | Required if inline_message_id is not specified. Identifier of the sent message. |
| [inline_message_id] | <code>string</code> | Required if chat_id and message_id are not specified. Identifier of the inline message. |

<a name="GetGameHighScoresOptions"></a>

## GetGameHighScoresOptions : <code>Object</code>
Options for retrieving high scores for a game.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| user_id | <code>number</code> | User identifier. |
| [chat_id] | <code>number</code> | Required if inline_message_id is not specified. Unique identifier for the target chat. |
| [message_id] | <code>number</code> | Required if inline_message_id is not specified. Identifier of the sent message. |
| [inline_message_id] | <code>string</code> | Required if chat_id and message_id are not specified. Identifier of the inline message. |

<a name="SetPassportDataErrorsOptions"></a>

## SetPassportDataErrorsOptions : <code>Object</code>
Options for informing a user of errors with their Telegram Passport data.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| user_id | <code>number</code> | User identifier. |
| errors | [<code>Array.&lt;PassportElementError&gt;</code>](#PassportElementError) | An array of objects representing errors in the Telegram Passport elements that the user needs to correct. |

<a name="ctx"></a>

## ctx : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| update | [<code>Update</code>](#Update) | incoming update. |
| message | <code>function</code> | New incoming message of any kind - text, photo, sticker, etc. |
| editedMessage | <code>function</code> | Message edit notification for known messages. |
| channelPost | <code>function</code> | New incoming channel post of any kind - text, photo, sticker, etc. |
| editedChannelPost | <code>function</code> | Channel post edit notification for known posts. |
| messageReaction | <code>function</code> | User changed a message reaction; requires bot as admin. |
| messageReactionCount | <code>function</code> | Grouped anonymous message reaction changes. |
| inlineQuery | <code>function</code> | New incoming inline query |
| chosenInlineResult | <code>function</code> | User's choice from an inline query sent to chat. |
| callbackQuery | <code>function</code> | New incoming callback query |
| shippingQuery | <code>function</code> | New incoming shipping query. Only for invoices with flexible price |
| preCheckoutQuery | <code>function</code> | New incoming pre-checkout query. Contains full information about checkout. |
| poll | <code>function</code> | Notification of new poll state; for stopped polls and those sent by the bot. |
| pollAnswer | <code>function</code> | User changed their vote in a non-anonymous poll sent by the bot. |
| myChatMember | <code>function</code> | Bot's chat member status updated in a chat. |
| chatMember | <code>function</code> | Chat member's status updated; requires bot admin. |
| chatJoinRequest | <code>function</code> | Chat join request sent; requires bot's `can_invite_users` right. |
| chatBoost | <code>function</code> | Chat boost added or changed; requires bot admin. |
| removedChatBoost | <code>function</code> | Chat boost removed; requires bot admin. |
| updateType | <code>function</code> | get update type. |
| chat | <code>function</code> | chat. |
| from | <code>function</code> | user or bot. |
| chatId | <code>function</code> | Unique identifier of chat. |
| userId | <code>function</code> | Unique identifier of user. |
| messageId | <code>function</code> | Unique identifier of message. |
| getMe | <code>function</code> | for testing your bot's authentication token |
| logOut | <code>function</code> | Use this method to log out from the cloud Bot API server before launching the bot locally |
| close | <code>function</code> | Use this method to close the bot instance before moving it from one local server to another. |
| getWebhookInfo | <code>function</code> | the current status of a webhook. |
| sheet | <code>function</code> | Method to access sheet operations by sheet name. |
| sendMessage | <code>function</code> | send text messages. |
| forwardMessage | <code>function</code> | forward messages of any kind. |
| forwardMessages | <code>function</code> | forward multiple messages of any kind. |
| copyMessage | <code>function</code> | copy messages of any kind. |
| copyMessages | <code>function</code> | Copies messages of any kind. |
| sendPhoto | <code>function</code> | Sends photos. |
| sendAudio | <code>function</code> | Sends an audio file. |
| sendDocument | <code>function</code> | Sends a general file. |
| sendVideo | <code>function</code> | Sends a video file. |
| sendAnimation | <code>function</code> | Sends an animation file. |
| sendVoice | <code>function</code> | Sends an audio file as a voice message. |
| sendVideoNote | <code>function</code> | Sends a video message. |
| sendMediaGroup | <code>function</code> | Sends a group of photos, videos, documents or audios as an album. |
| sendLocation | <code>function</code> | Sends point on the map. |
| sendVenue | <code>function</code> | Sends information about a venue. |
| sendContact | <code>function</code> | Sends phone contacts. |
| sendPoll | <code>function</code> | Sends a native poll. |
| sendDice | <code>function</code> | Sends an animated emoji that will display a random value. |
| sendChatAction | <code>function</code> | Tells the user that something is happening on the bot's side. |
| setMessageReaction | <code>function</code> | Changes the chosen reactions on a message. |
| getUserProfilePhotos | <code>function</code> | Gets a list of profile pictures for a user. |
| getFile | <code>function</code> | Gets basic information about a file. |
| banChatMember | <code>function</code> | Bans a user in a group, supergroup, or channel. |
| unbanChatMember | <code>function</code> | Unbans a previously banned user in a supergroup or channel. |
| restrictChatMember | <code>function</code> | Restricts a user in a supergroup. |
| promoteChatMember | <code>function</code> | Promotes or demotes a user in a supergroup or channel. |
| setChatAdministratorCustomTitle | <code>function</code> | Sets a custom title for an administrator in a supergroup. |
| banChatSenderChat | <code>function</code> | Bans a channel chat in a supergroup or channel. |
| unbanChatSenderChat | <code>function</code> | Unbans a previously banned channel chat. |
| setChatPermissions | <code>function</code> | Sets default chat permissions for all members. |
| exportChatInviteLink | <code>function</code> | Generates a new primary invite link for a chat. |
| createChatInviteLink | <code>function</code> | Creates an additional invite link for a chat. |
| editChatInviteLink | <code>function</code> | Edits a non-primary invite link created by the bot. |
| revokeChatInviteLink | <code>function</code> | Revokes an invite link created by the bot. |
| approveChatJoinRequest | <code>function</code> | Approves a chat join request. |
| declineChatJoinRequest | <code>function</code> | Declines a chat join request. |
| setChatPhoto | <code>function</code> | Sets a new chat photo. |
| deleteChatPhoto | <code>function</code> | Deletes the chat photo. |
| setChatTitle | <code>function</code> | Changes the title of a chat. |
| setChatDescription | <code>function</code> | Changes the description of a chat. |
| pinChatMessage | <code>function</code> | Pins a message in a chat. |
| unpinChatMessage | <code>function</code> | Removes a message from the list of pinned messages in a chat. |
| unpinAllChatMessages | <code>function</code> | Clears the list of pinned messages in a chat. |
| leaveChat | <code>function</code> | Bot leaves a group, supergroup, or channel. |
| getChat | <code>function</code> | Gets information about the chat. |
| getChatAdministrators | <code>function</code> | Gets a list of administrators in a chat. |
| getChatMemberCount | <code>function</code> | Gets the number of members in a chat. |
| getChatMember | <code>function</code> | Gets information about a member of a chat. |
| setChatStickerSet | <code>function</code> | Sets a new group sticker set for a supergroup. |
| deleteChatStickerSet | <code>function</code> | Deletes a group sticker set from a supergroup. |
| getForumTopicIconStickers | <code>function</code> | Gets custom emoji stickers for forum topic icons. |
| createForumTopic | <code>function</code> | Creates a topic in a forum supergroup chat. |
| editForumTopic | <code>function</code> | Edits name and icon of a forum topic. |
| closeForumTopic | <code>function</code> | Closes an open topic in a forum supergroup chat. |
| reopenForumTopic | <code>function</code> | Reopens a closed topic in a forum supergroup chat. |
| deleteForumTopic | <code>function</code> | Deletes a forum topic along with all its messages in a forum supergroup chat. |
| unpinAllForumTopicMessages | <code>function</code> | Clears the list of pinned messages in a forum topic. |
| editGeneralForumTopic | <code>function</code> | Edits the name of the 'General' topic in a forum supergroup chat. |
| closeGeneralForumTopic | <code>function</code> | Closes an open 'General' topic in a forum supergroup chat. |
| reopenGeneralForumTopic | <code>function</code> | Reopens a closed 'General' topic in a forum supergroup chat. |
| hideGeneralForumTopic | <code>function</code> | Hides the 'General' topic in a forum supergroup chat. |
| unhideGeneralForumTopic | <code>function</code> | Unhides the 'General' topic in a forum supergroup chat. |
| unpinAllGeneralForumTopicMessages | <code>function</code> | Clears the list of pinned messages in a General forum topic. |
| answerCallbackQuery | <code>function</code> | Sends answers to callback queries sent from inline keyboards. |
| getUserChatBoosts | <code>function</code> | Gets the list of boosts added to a chat by a user. |
| setMyCommands | <code>function</code> | Changes the list of the bot's commands. |
| deleteMyCommands | <code>function</code> | Deletes the bot's commands for a given scope and language. |
| getMyCommands | <code>function</code> | Gets the current list of the bot's commands. |
| setMyName | <code>function</code> | Changes the bot's name. |
| getMyName | <code>function</code> | Gets the current bot name. |
| setMyDescription | <code>function</code> | Changes the bot's description. |
| getMyDescription | <code>function</code> | Gets the current bot description. |
| setMyShortDescription | <code>function</code> | Changes the bot's short description. |
| getMyShortDescription | <code>function</code> | Gets the current bot short description. |
| setChatMenuButton | <code>function</code> | Changes the bot's menu button. |
| getChatMenuButton | <code>function</code> | Gets the current bot's menu button. |
| setMyDefaultAdministratorRights | <code>function</code> | Changes the default administrator rights. |
| getMyDefaultAdministratorRights | <code>function</code> | Gets the current default administrator rights. |
| editMessageText | <code>function</code> | Edits text and game messages. |
| editMessageCaption | <code>function</code> | Edits captions of messages. |
| editMessageMedia | <code>function</code> | Edits animation, audio, document, photo or video messages. |
| editMessageLiveLocation | <code>function</code> | Edits live location messages. |
| stopMessageLiveLocation | <code>function</code> | Stops updating a live location message. |
| editMessageReplyMarkup | <code>function</code> | Edits only the reply markup of messages. |
| stopPoll | <code>function</code> | Stops a poll. |
| deleteMessage | <code>function</code> | Deletes a message. |
| deleteMessages | <code>function</code> | Deletes multiple messages. |
| sendSticker | <code>function</code> | Sends a sticker. |
| getStickerSet | <code>function</code> | Gets a sticker set. |
| getCustomEmojiStickers | <code>function</code> | Gets information about custom emoji stickers. |
| uploadStickerFile | <code>function</code> | Uploads a sticker file. |
| createNewStickerSet | <code>function</code> | Creates a new sticker set. |
| addStickerToSet | <code>function</code> | Adds a new sticker to a set. |
| setStickerPositionInSet | <code>function</code> | move a sticker in a set. |
| deleteStickerFromSet | <code>function</code> | delete a sticker from a set. |
| setStickerEmojiList | <code>function</code> | change the list of emoji assigned to a regular or custom emoji sticker. |
| setStickerKeywords | <code>function</code> | change search keywords assigned to a regular or custom emoji sticker. |
| setStickerMaskPosition | <code>function</code> | change the mask position of a mask sticker. |
| setStickerSetTitle | <code>function</code> | set the title of a created sticker set. |
| setStickerSetThumbnail | <code>function</code> | set the thumbnail of a regular or mask sticker set. |
| setCustomEmojiStickerSetThumbnail | <code>function</code> | set the thumbnail of a custom emoji sticker set. |
| deleteStickerSet | <code>function</code> | delete a sticker set. |
| answerInlineQuery | <code>function</code> | send answers to an inline query. |
| answerWebAppQuery | <code>function</code> | set the result of an interaction with a `Web App` and send a corresponding message on behalf of the user to the chat from which the query originated. |
| sendInvoice | <code>function</code> | send invoices. |
| createInvoiceLink | <code>function</code> | create a link for an invoice. |
| sendGame | <code>function</code> | send a game. |
| setGameScore | <code>function</code> | set the score of the specified user in a game message. |
| getGameHighScores | <code>function</code> | get data for high score tables. |
| setPassportDataErrors | <code>function</code> | Informs user of errors in Telegram Passport elements. |
| reply | <code>function</code> |  |
| replyWithHtml | <code>function</code> |  |
| replyWithMarkdown | <code>function</code> |  |
| replyWithPhoto | <code>function</code> | reply photo to the current chat. |
| replyWithChatAction | <code>function</code> | reply chat action to the current chat. |
| replyWithEditedMessage | <code>function</code> | reply edited message to the current chat. |
| getTSession | <code>function</code> | Gets the temporary session object. |
| getTSessionValue | <code>function</code> | Gets a value from the temporary session by key. |
| setTSessionValue | <code>function</code> | Sets a value in the temporary session with an optional expiry time. |
| setTSessionValues | <code>function</code> | Sets multiple values in the temporary session with an optional expiry time. |
| removeTSessionValue | <code>function</code> | Removes a value from the temporary session by key. |
| deleteTSession | <code>function</code> | Deletes the temporary session. |
| setStage | <code>function</code> | Sets the current stage. |
| clearStage | <code>function</code> | Clears the current stage. |
| getStage | <code>function</code> | Gets the current stage. |
| getPSession | <code>function</code> | Gets the persistent session object. |
| getPSessionValue | <code>function</code> | Gets a value from the persistent session by key. |
| setPSessionValue | <code>function</code> | Sets a value in the persistent session. |
| setPSessionValues | <code>function</code> | Sets multiple values in the persistent session. |
| removePSessionValue | <code>function</code> | Removes a value from the persistent session by key. |
| deletePSession | <code>function</code> | Deletes the persistent session. |
| getPCacheValue | <code>function</code> | Gets a value from the persistent cache by key. |
| getPCache | <code>function</code> | Gets the entire persistent cache object. |
| setPCacheValue | <code>function</code> | Sets a value in the persistent cache. |
| setPCacheValues | <code>function</code> | Sets multiple values in the persistent cache. |
| removePCacheValue | <code>function</code> | Removes a value from the persistent cache by key. |
| deletePCache | <code>function</code> | Deletes the persistent cache. |
| getTCacheValue | <code>function</code> | Gets a value from the temporary cache by key. |
| setTCacheValue | <code>function</code> | Sets a value in the temporary cache with an optional expiry time. |
| getTCacheValues | <code>function</code> | Gets multiple values from the temporary cache. |
| setTCacheValues | <code>function</code> | Sets multiple values in the temporary cache with an optional expiry time. |
| removeTCacheValue | <code>function</code> | Removes a value from the temporary cache by key. |
| removeTCacheValues | <code>function</code> | Removes multiple values from the temporary cache. |
| sendEmail | <code>function</code> | Sends an email with optional parameters. |

<a name="ReplyOptions"></a>

## ReplyOptions : <code>Object</code>
Options for replying with a message.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text of the message to be sent. |
| [parse_mode] | [<code>Format</code>](#Format) | Format of the text: Markdown or HTML. |
| [entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in message text, which can be specified instead of parse_mode. |
| [link_preview_options] | [<code>LinkPreviewOptions</code>](#LinkPreviewOptions) | Options for how links in the message should be previewed. |
| [disable_notification] | <code>boolean</code> | Sends the message silently. Users will receive a notification with no sound. |
| [protect_content] | <code>boolean</code> | Protects the content of the sent message from forwarding and saving. |
| [reply_parameters] | [<code>ReplyParameters</code>](#ReplyParameters) | Additional parameters for replying to messages. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) \| [<code>ReplyKeyboardMarkup</code>](#ReplyKeyboardMarkup) \| [<code>ReplyKeyboardRemove</code>](#ReplyKeyboardRemove) \| [<code>ForceReply</code>](#ForceReply) | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user. |

<a name="SendMessageOptions"></a>

## SendMessageOptions : <code>Object</code>
Options for sending a message to a chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username (in the format `@channelusername`). |
| [message_thread_id] | <code>number</code> | Unique identifier for the target message thread. |
| text | <code>string</code> | Text of the message to be sent. |
| [parse_mode] | [<code>Format</code>](#Format) | Send Markdown or HTML, if you want Telegram apps to show bold, italic, fixed-width text or inline URLs in your bot's message. |
| [entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in message text, which can be specified instead of parse_mode. |
| [link_preview_options] | [<code>LinkPreviewOptions</code>](#LinkPreviewOptions) | Options for how links in the message should be previewed. |
| [disable_notification] | <code>boolean</code> | Sends the message silently. Users will receive a notification with no sound. |
| [protect_content] | <code>boolean</code> | Protects the content of the sent message from forwarding and saving. |
| [reply_parameters] | [<code>ReplyParameters</code>](#ReplyParameters) | Additional parameters for replying to messages. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) \| [<code>ReplyKeyboardMarkup</code>](#ReplyKeyboardMarkup) \| [<code>ReplyKeyboardRemove</code>](#ReplyKeyboardRemove) \| [<code>ForceReply</code>](#ForceReply) | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard or to force a reply from the user. |

<a name="ReplyWithFormattedTextOptions"></a>

## ReplyWithFormattedTextOptions : <code>Object</code>
Options for replying with a message formatted in HTML or Markdown.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text of the message to be sent, formatted in HTML or Markdown. |
| [disable_notification] | <code>boolean</code> | Sends the message silently. Users will receive a notification with no sound. |
| [protect_content] | <code>boolean</code> | Protects the content of the sent message from forwarding and saving. |
| [reply_parameters] | [<code>ReplyParameters</code>](#ReplyParameters) | Additional parameters for replying to messages. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) \| [<code>ReplyKeyboardMarkup</code>](#ReplyKeyboardMarkup) \| [<code>ReplyKeyboardRemove</code>](#ReplyKeyboardRemove) \| [<code>ForceReply</code>](#ForceReply) | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard, or to force a reply from the user. |

<a name="ReplyWithChatActionOptions"></a>

## ReplyWithChatActionOptions : <code>Object</code>
Options for replying with chat action.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| action | <code>string</code> | Type of action to broadcast. Choose one, depending on what the user is about to receive. |
| [disable_notification] | <code>boolean</code> | Sends the chat action silently. Users will see the action with no sound. |
| [protect_content] | <code>boolean</code> | Protects the content of the sent action from forwarding and saving. |
| [reply_parameters] | [<code>ReplyParameters</code>](#ReplyParameters) | Additional parameters for replying to messages. |

<a name="ReplyWithEditedMessageOptions"></a>

## ReplyWithEditedMessageOptions : <code>Object</code>
Options for editing and replying with a message.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text of the message to be edited and sent. |
| [parse_mode] | [<code>Format</code>](#Format) | Format of the text: Markdown or HTML. |
| [entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in message text, which can be specified instead of parse_mode. |
| [link_preview_options] | [<code>LinkPreviewOptions</code>](#LinkPreviewOptions) | Options for how links in the message should be previewed. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | Additional interface options. A JSON-serialized object for an inline keyboard. |

<a name="ReplyWithPhotoOptions"></a>

## ReplyWithPhotoOptions : <code>Object</code>
Options for replying with a photo.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| photo | <code>InputFile</code> \| <code>string</code> | Unique file identifier of the photo to send or the photo itself. |
| [caption] | <code>string</code> | Caption for the photo, 0-1024 characters after entities parsing. |
| [parse_mode] | [<code>Format</code>](#Format) | Format of the caption text: Markdown or HTML. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in the caption, which can be specified instead of parse_mode. |
| [has_spoiler] | <code>boolean</code> | Marks the caption as containing a spoiler. |
| [disable_notification] | <code>boolean</code> | Sends the message silently. Users will receive a notification with no sound. |
| [protect_content] | <code>boolean</code> | Protects the content of the sent message from forwarding and saving. |
| [reply_parameters] | [<code>ReplyParameters</code>](#ReplyParameters) | Additional parameters for replying to messages. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) \| [<code>ReplyKeyboardMarkup</code>](#ReplyKeyboardMarkup) \| [<code>ReplyKeyboardRemove</code>](#ReplyKeyboardRemove) \| [<code>ForceReply</code>](#ForceReply) | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove the reply keyboard, or to force a reply from the user. |

<a name="WebhookInfo"></a>

## WebhookInfo : <code>Object</code>
the current status of a webhook.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | Webhook URL. |
| has_custom_certificate | <code>boolean</code> | True, if a custom certificate was provided for webhook certificate checks. |
| pending_update_count | <code>number</code> | Number of updates awaiting delivery. |
| [ip_address] | <code>string</code> | Currently used webhook IP address. |
| [last_error_date] | <code>number</code> | Unix time for the most recent error. |
| [last_error_message] | <code>string</code> | Error message in human-readable format for the most recent error. |
| [last_synchronization_error_date] | <code>number</code> | Unix time of the most recent error happened when trying to synchronize available updates. |
| [max_connections] | <code>number</code> | The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery |
| [allowed_updates] | <code>Array.&lt;string&gt;</code> | A list of update types the bot is subscribed to |

<a name="MessageId"></a>

## MessageId : <code>Object</code>
represents a unique message identifier.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| message_id | <code>number</code> | Unique message identifier |

<a name="InaccessibleMessage"></a>

## InaccessibleMessage : <code>Object</code>
message that was deleted or is otherwise inaccessible to the bot.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat | [<code>Chat</code>](#Chat) | Chat the message belonged to |
| message_id | <code>number</code> | Unique message identifier inside the chat |
| date | <code>number</code> | Always 0. The field can be used to differentiate regular and inaccessible messages. |

<a name="MaybeInaccessibleMessage"></a>

## MaybeInaccessibleMessage : [<code>Message</code>](#Message) \| [<code>InaccessibleMessage</code>](#InaccessibleMessage)
message that can be inaccessible to the bot.

**Kind**: global typedef  
<a name="ReplyParameters"></a>

## ReplyParameters : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| message_id | <code>number</code> | Identifier of the message. |
| [chat_id] | <code>number</code> \| <code>string</code> | unique identifier for the chat or username of the channel. |
| [allow_sending_without_reply] | <code>boolean</code> | Pass True if the message should be sent even if the message to be replied to is not found. |
| [quote] | <code>string</code> | Quoted part of the message to be replied to |
| [quote_parse_mode] | <code>string</code> | Mode for parsing entities in the quote. |
| [quote_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | list of special entities that appear in the quote. |
| [quote_position] | <code>number</code> | Position of the quote in the original message in UTF-16 code units. |

<a name="MessageOrigin"></a>

## MessageOrigin : [<code>MessageOriginUser</code>](#MessageOriginUser) \| [<code>MessageOriginHiddenUser</code>](#MessageOriginHiddenUser) \| [<code>MessageOriginChat</code>](#MessageOriginChat) \| [<code>MessageOriginChannel</code>](#MessageOriginChannel)
the origin of a message.

**Kind**: global typedef  
<a name="MessageOriginUser"></a>

## MessageOriginUser : <code>Object</code>
originally sent by a known user.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the message origin, always `user`. |
| date | <code>number</code> | Date the message was sent originally in Unix time. |
| sender_user | [<code>User</code>](#User) | User that sent the message originally. |

<a name="MessageOriginHiddenUser"></a>

## MessageOriginHiddenUser : <code>Object</code>
originally sent by an unknown user.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the message origin, always `hidden_user`. |
| date | <code>number</code> | Date the message was sent originally in Unix time. |
| sender_user_name | <code>string</code> | Name of the user that sent the message originally. |

<a name="MessageOriginChat"></a>

## MessageOriginChat : <code>Object</code>
originally sent on behalf of a chat to a group chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the message origin, always `chat`. |
| date | <code>number</code> | Date the message was sent originally in Unix time. |
| sender_chat | [<code>Chat</code>](#Chat) | Chat that sent the message originally. |
| [author_signature] | <code>string</code> | messages originally sent by an anonymous chat administrator. |

<a name="MessageOriginChannel"></a>

## MessageOriginChannel : <code>Object</code>
originally sent to a channel chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the message origin, always `channel`. |
| date | <code>number</code> | Date the message was sent originally in Unix time. |
| chat | [<code>Chat</code>](#Chat) | Channel chat to which the message was originally sent. |
| message_id | <code>number</code> | Unique message identifier inside the chat. |
| [author_signature] | <code>string</code> | Signature of the original post author. |

<a name="ChatBoostUpdated"></a>

## ChatBoostUpdated : <code>Object</code>
a boost added to a chat or changed.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat | [<code>Chat</code>](#Chat) | Chat which was boosted. |
| boost | [<code>ChatBoost</code>](#ChatBoost) | Information about the chat boost. |

<a name="ChatBoostRemoved"></a>

## ChatBoostRemoved : <code>Object</code>
a boost removed from a chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat | [<code>Chat</code>](#Chat) | Chat which was boosted |
| boost_id | <code>string</code> | Unique identifier of the boost |
| remove_date | <code>number</code> | Point in time - Unix timestamp, when the boost was removed |
| source | [<code>ChatBoostSource</code>](#ChatBoostSource) | Source of the removed boost |

<a name="PollAnswer"></a>

## PollAnswer : <code>Object</code>
answer of a user in a non-anonymous poll.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| poll_id | <code>string</code> | Unique poll identifier. |
| [voter_chat] | [<code>Chat</code>](#Chat) | The chat that changed the answer to the poll, if the voter is anonymous. |
| [user] | [<code>User</code>](#User) | The user that changed the answer to the poll, if the voter isn't anonymous. |
| option_ids | <code>Array.&lt;number&gt;</code> | 0-based identifiers of chosen answer options. May be empty if the vote was retracted. |

<a name="ChatMemberUpdated"></a>

## ChatMemberUpdated : <code>Object</code>
changes in the status of a chat member.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat | [<code>Chat</code>](#Chat) | Chat the user belongs to. |
| from | [<code>User</code>](#User) | Performer of the action, which resulted in the change. |
| date | <code>number</code> | Date the change was done in Unix time. |
| old_chat_member | [<code>ChatMember</code>](#ChatMember) | Previous information about the chat member. |
| new_chat_member | [<code>ChatMember</code>](#ChatMember) | New information about the chat member. |
| [invite_link] | [<code>ChatInviteLink</code>](#ChatInviteLink) | Chat invite link, which was used by the user to join the chat. |
| [via_chat_folder_invite_link] | <code>boolean</code> | True, if the user joined the chat via a chat folder invite link. |

<a name="ChatJoinRequest"></a>

## ChatJoinRequest : <code>Object</code>
join request sent to a chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat | [<code>Chat</code>](#Chat) | Chat to which the request was sent. |
| from | [<code>User</code>](#User) | User that sent the join request. |
| user_chat_id | <code>number</code> | Identifier of a private chat with the user who sent the join request. |
| date | <code>number</code> | Date the request was sent in Unix time. |
| [bio] | <code>string</code> | Bio of the user. |
| [invite_link] | [<code>ChatInviteLink</code>](#ChatInviteLink) | Chat invite link that was used by the user to send the join request. |

<a name="CallbackQuery"></a>

## CallbackQuery : <code>Object</code>
an incoming callback query from a callback button in an inline keyboard.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Unique identifier for this query |
| from | [<code>User</code>](#User) | Sender |
| [message] | [<code>MaybeInaccessibleMessage</code>](#MaybeInaccessibleMessage) | Message sent by the bot with the callback button that originated the query |
| [inline_message_id] | <code>string</code> | Identifier of the message sent via the bot in inline mode, that originated the query. |
| chat_instance | <code>string</code> | Global identifier, uniquely corresponding to the chat. |
| [data] | <code>string</code> | Data associated with the callback button. |
| [game_short_name] | <code>string</code> | Short name of a Game to be returned, serves as the unique identifier for the game. |

<a name="ShippingQuery"></a>

## ShippingQuery : <code>Object</code>
contains information about an incoming shipping query.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Unique query identifier. |
| from | [<code>User</code>](#User) | User who sent the query. |
| invoice_payload | <code>string</code> | Bot specified invoice payload. |
| shipping_address | [<code>ShippingAddress</code>](#ShippingAddress) | User specified shipping address. |

<a name="PreCheckoutQuery"></a>

## PreCheckoutQuery : <code>Object</code>
contains information about an incoming pre-checkout query.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Unique query identifier. |
| from | [<code>User</code>](#User) | User who sent the query. |
| currency | <code>string</code> | Three-letter ISO 4217 currency code. |
| total_amount | <code>number</code> | Total price in the smallest units of the currency. integer, not float/double. |
| invoice_payload | <code>string</code> | Bot specified invoice payload. |
| [shipping_option_id] | <code>string</code> | Identifier of the shipping option chosen by the user. |
| [order_info] | [<code>OrderInfo</code>](#OrderInfo) | Order information provided by the user. |

<a name="MessageReactionUpdated"></a>

## MessageReactionUpdated : <code>Object</code>
a change of a reaction on a message performed by a user.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat | [<code>Chat</code>](#Chat) | The chat containing the message the user reacted to. |
| message_id | <code>number</code> | Unique identifier of the message inside the chat. |
| [user] | [<code>User</code>](#User) | The user that changed the reaction, if the user isn't anonymous. |
| [actor_chat] | [<code>Chat</code>](#Chat) | The chat on behalf of which the reaction was changed, if the user is anonymous. |
| date | <code>number</code> | Date of the change in Unix time. |
| old_reaction | [<code>Array.&lt;ReactionType&gt;</code>](#ReactionType) | Previous list of reaction types that were set by the user. |
| new_reaction | [<code>Array.&lt;ReactionType&gt;</code>](#ReactionType) | New list of reaction types that have been set by the user. |

<a name="MessageReactionCountUpdated"></a>

## MessageReactionCountUpdated : <code>Object</code>
reaction changes on a message with anonymous reactions.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat | [<code>Chat</code>](#Chat) | The chat containing the message. |
| message_id | <code>number</code> | Unique message identifier inside the chat. |
| date | <code>number</code> | Date of the change in Unix time. |
| reactions | [<code>Array.&lt;ReactionCount&gt;</code>](#ReactionCount) | List of reactions that are present on the message. |

<a name="InlineQuery"></a>

## InlineQuery : <code>Object</code>
an incoming inline query.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Unique identifier for this query. |
| from | [<code>User</code>](#User) | Sender. |
| query | <code>string</code> | Text of the query. up to 256 characters. |
| offset | <code>string</code> | Offset of the results to be returned, can be controlled by the bot. |
| [chat_type] | <code>string</code> | Type of the chat from which the inline query was sent. |
| [location] | [<code>Location</code>](#Location) | Sender location, only for bots that request user location. |

<a name="ChosenInlineResult"></a>

## ChosenInlineResult : <code>Object</code>
a result of an inline query that was chosen by the user and sent to their chat partner.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| result_id | <code>string</code> | The unique identifier for the result that was chosen. |
| from | [<code>User</code>](#User) | The user that chose the result. |
| [location] | [<code>Location</code>](#Location) | Sender location, only for bots that require user location. |
| [inline_message_id] | <code>string</code> | Identifier of the sent inline message. |
| query | <code>string</code> | The query that was used to obtain the result. |

<a name="Message"></a>

## Message : <code>Object</code>
a message

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| message_id | <code>number</code> | Unique message identifier inside this chat. |
| [message_thread_id] | <code>number</code> | Unique identifier of a message thread to which the message belongs; for supergroups only. |
| [from] | [<code>User</code>](#User) | Sender of the message; empty for messages sent to channels. For backward compatibility. |
| [sender_chat] | [<code>Chat</code>](#Chat) | Sender of the message, sent on behalf of a chat. |
| [sender_boost_count] | <code>number</code> | If the sender of the message boosted the chat. |
| date | <code>number</code> | Date the message was sent in Unix time. |
| chat | [<code>Chat</code>](#Chat) | Chat the message belongs to. |
| [forward_origin] | [<code>MessageOrigin</code>](#MessageOrigin) | Information about the original message for forwarded messages. |
| [is_topic_message] | <code>boolean</code> | True, if the message is sent to a forum topic. |
| [is_automatic_forward] | <code>boolean</code> | True, if the message was automatically forwarded to the connected discussion group. |
| [reply_to_message] | [<code>Message</code>](#Message) | For replies in the same chat and message thread, the original message. |
| [external_reply] | [<code>ExternalReplyInfo</code>](#ExternalReplyInfo) | Information about the message that is being replied to. |
| [quote] | [<code>TextQuote</code>](#TextQuote) | For replies that quote part of the original message. |
| [reply_to_story] | <code>Story</code> | For replies to a story, the original story. |
| [via_bot] | [<code>User</code>](#User) | Bot through which the message was sent. |
| [edit_date] | <code>number</code> | Date the message was last edited in Unix time. |
| [has_protected_content] | <code>boolean</code> | True, if the message can't be forwarded. |
| [media_group_id] | <code>string</code> | The unique identifier of a media message group this message belongs to. |
| [author_signature] | <code>string</code> | Signature of the post author for messages in channels. |
| [text] | <code>string</code> | For text messages, the actual UTF-8 text of the message. |
| [entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | For text messages, special entities like usernames, URLs, bot commands, etc. |
| [link_preview_options] | [<code>LinkPreviewOptions</code>](#LinkPreviewOptions) | Options used for link preview generation for the message. |
| [animation] | [<code>Animation</code>](#Animation) | Message is an animation, information about the animation. |
| [audio] | [<code>Audio</code>](#Audio) | Message is an audio file, information about the file. |
| [document] | [<code>Document</code>](#Document) | Message is a general file, information about the file. |
| [photo] | [<code>Array.&lt;PhotoSize&gt;</code>](#PhotoSize) | Message is a photo, available sizes of the photo. |
| [sticker] | [<code>Sticker</code>](#Sticker) | Message is a sticker, information about the sticker. |
| [story] | <code>Story</code> | Message is a forwarded story. |
| [video] | [<code>Video</code>](#Video) | Message is a video, information about the video. |
| [video_note] | [<code>VideoNote</code>](#VideoNote) | Message is a video note, information about the video message. |
| [voice] | [<code>Voice</code>](#Voice) | Message is a voice message, information about the file. |
| [caption] | <code>string</code> | Caption for the animation, audio, document, photo, video or voice. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | For messages with a caption, special entities like usernames, URLs, bot commands, etc. |
| [has_media_spoiler] | <code>boolean</code> | True, if the message media is covered by a spoiler animation. |
| [contact] | [<code>Contact</code>](#Contact) | Message is a shared contact, information about the contact. |
| [dice] | [<code>Dice</code>](#Dice) | Message is a dice with random value. |
| [game] | [<code>Game</code>](#Game) | Message is a game, information about the game. |
| [poll] | [<code>Poll</code>](#Poll) | Message is a native poll, information about the poll. |
| [venue] | [<code>Venue</code>](#Venue) | Message is a venue, information about the venue. |
| [location] | [<code>Location</code>](#Location) | Message is a shared location, information about the location. |
| [new_chat_members] | [<code>Array.&lt;User&gt;</code>](#User) | New members that were added to the group or supergroup and information about them. |
| [left_chat_member] | [<code>User</code>](#User) | A member was removed from the group, information about them |
| [new_chat_title] | <code>string</code> | A chat title was changed to this value. |
| [new_chat_photo] | [<code>Array.&lt;PhotoSize&gt;</code>](#PhotoSize) | A chat photo was change to this value. |
| [delete_chat_photo] | <code>boolean</code> | Service message: the chat photo was deleted. |
| [group_chat_created] | <code>boolean</code> | Service message: the group has been created. |
| [supergroup_chat_created] | <code>boolean</code> | Service message: the supergroup has been created. |
| [channel_chat_created] | <code>boolean</code> | Service message: the channel has been created. |
| [message_auto_delete_timer_changed] | [<code>MessageAutoDeleteTimerChanged</code>](#MessageAutoDeleteTimerChanged) | Service message: auto-delete timer settings changed in the chat. |
| [migrate_to_chat_id] | <code>number</code> | The group has been migrated to a supergroup with the specified identifier. |
| [migrate_from_chat_id] | <code>number</code> | The supergroup has been migrated from a group with the specified identifier. |
| [pinned_message] | [<code>MaybeInaccessibleMessage</code>](#MaybeInaccessibleMessage) | Specified message was pinned. |
| [invoice] | [<code>Invoice</code>](#Invoice) | Message is an invoice for a payment, information about the invoice. |
| [successful_payment] | [<code>SuccessfulPayment</code>](#SuccessfulPayment) | Message is a service message about a successful payment. |
| [users_shared] | [<code>UsersShared</code>](#UsersShared) | Service message: users were shared with the bot. |
| [chat_shared] | [<code>ChatShared</code>](#ChatShared) | Service message: a chat was shared with the bot. |
| [connected_website] | <code>string</code> | The domain name of the website on which the user has logged in. |
| [write_access_allowed] | [<code>WriteAccessAllowed</code>](#WriteAccessAllowed) | the user allowed the bot to write messages after adding it to the attachment. |
| [passport_data] | [<code>PassportData</code>](#PassportData) | Telegram Passport data |
| [proximity_alert_triggered] | [<code>ProximityAlertTriggered</code>](#ProximityAlertTriggered) | A user in the chat triggered user's proximity alert while sharing Live Location. |
| [boost_added] | <code>ChatBoostAdded</code> | Service message: user boosted the chat. |
| [forum_topic_created] | [<code>ForumTopicCreated</code>](#ForumTopicCreated) | Service message: forum topic created. |
| [forum_topic_edited] | [<code>ForumTopicEdited</code>](#ForumTopicEdited) | Service message: forum topic edited. |
| [forum_topic_closed] | <code>ForumTopicClosed</code> | Service message: forum topic closed. |
| [forum_topic_reopened] | <code>ForumTopicReopened</code> | Service message: forum topic reopened. |
| [general_forum_topic_hidden] | <code>GeneralForumTopicHidden</code> | Service message: the 'General' forum topic hidden. |
| [general_forum_topic_unhidden] | <code>GeneralForumTopicUnhidden</code> | Service message: the 'General' forum topic unhidden. |
| [giveaway_created] | <code>GiveawayCreated</code> | Service message: a scheduled giveaway was created. |
| [giveaway] | [<code>Giveaway</code>](#Giveaway) | The message is a scheduled giveaway message. |
| [giveaway_winners] | [<code>GiveawayWinners</code>](#GiveawayWinners) | A giveaway with public winners was completed. |
| [giveaway_completed] | [<code>GiveawayCompleted</code>](#GiveawayCompleted) | Service message: a giveaway without public winners was completed. |
| [video_chat_scheduled] | [<code>VideoChatScheduled</code>](#VideoChatScheduled) | Service message: video chat scheduled. |
| [video_chat_started] | <code>VideoChatStarted</code> | Service message: video chat started. |
| [video_chat_ended] | [<code>VideoChatEnded</code>](#VideoChatEnded) | Service message: video chat ended. |
| [video_chat_participants_invited] | [<code>VideoChatParticipantsInvited</code>](#VideoChatParticipantsInvited) | Service message: new participants invited to a video chat. |
| [web_app_data] | [<code>WebAppData</code>](#WebAppData) | Service message: data sent by a Web App. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons. |

<a name="User"></a>

## User : <code>Object</code>
Telegram user or bot.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Unique identifier for this user or bot. |
| is_bot | <code>boolean</code> | True if the user is a bot. |
| first_name | <code>string</code> | User's or bot's first name. |
| [last_name] | <code>string</code> | User's or bot's last name. |
| [username] | <code>string</code> | User's or bot's username. |
| [language_code] | <code>string</code> | IETF language tag of the user's language. |
| [is_premium] | <code>boolean</code> | True if the user has Telegram Premium. |
| [added_to_attachment_menu] | <code>boolean</code> | True if the bot is added to the attachment menu. |
| [can_join_groups] | <code>boolean</code> | True if the bot can be invited to groups. |
| [can_read_all_group_messages] | <code>boolean</code> | True if privacy mode is disabled for the bot. |
| [supports_inline_queries] | <code>boolean</code> | True if the bot supports inline queries. |

<a name="Chat"></a>

## Chat : <code>Object</code>
a chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Unique identifier for this chat. |
| type | <code>string</code> | Type of chat, can be either `private`, `group`, `supergroup` or `channel`. |
| title | <code>string</code> | Title, for supergroups, channels and group chats. |
| [username] | <code>string</code> | Username, for private chats, supergroups and channels if available. |
| [first_name] | <code>string</code> | First name of the other party in a private chat. |
| [last_name] | <code>string</code> | Last name of the other party in a private chat. |
| [is_forum] | <code>boolean</code> | True, if the supergroup chat is a forum. |
| [photo] | [<code>ChatPhoto</code>](#ChatPhoto) | Chat photo. Returned only in getChat. |
| [active_usernames] | <code>Array.&lt;string&gt;</code> | f non-empty, the list of all active chat usernames. |
| [available_reactions] | [<code>Array.&lt;ReactionType&gt;</code>](#ReactionType) | List of available reactions allowed in the chat. |
| [accent_color_id] | <code>number</code> | Identifier of the accent color for the chat name and backgrounds of the chat photo. |
| [background_custom_emoji_id] | <code>string</code> | Custom emoji identifier of emoji chosen by the chat for the reply header and link preview background. |
| [profile_accent_color_id] | <code>number</code> | Identifier of the accent color for the chat's profile background. |
| [profile_background_custom_emoji_id] | <code>string</code> | ustom emoji identifier of the emoji chosen by the chat for its profile background. |
| [emoji_status_custom_emoji_id] | <code>string</code> | Custom emoji identifier of the emoji status of the chat or the other party in a private chat. |
| [emoji_status_expiration_date] | <code>number</code> | Expiration date of the emoji status of the chat or the other party in a private chat. |
| [bio] | <code>string</code> | Bio of the other party in a private chat. Returned only in getChat. |
| [has_private_forwards] | <code>boolean</code> | True, if privacy settings of the other party in the private chat allows to use tg://user?id=<user_id> links only in chats with the user. |
| [has_restricted_voice_and_video_messages] | <code>boolean</code> | True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat. |
| [join_to_send_messages] | <code>boolean</code> | True, if users need to join the supergroup before they can send messages. |
| [join_by_request] | <code>boolean</code> | True, if all users directly joining the supergroup need to be approved by supergroup administrators. |
| [description] | <code>string</code> | Description, for groups, supergroups and channel chats. Returned only in getChat. |
| [invite_link] | <code>string</code> | Primary invite link, for groups, supergroups and channel chats. |
| [pinned_message] | [<code>Message</code>](#Message) | The most recent pinned message. |
| [permissions] | [<code>ChatPermissions</code>](#ChatPermissions) | Default chat member permissions, for groups and supergroups. |
| [slow_mode_delay] | <code>number</code> | For supergroups, the minimum allowed delay between consecutive messages sent by each unprivileged user. |
| [unrestrict_boost_count] | <code>number</code> | For supergroups, the minimum number of boosts that a non-administrator user needs to add in order to ignore slow mode and chat permissions. |
| [message_auto_delete_time] | <code>number</code> | The time after which all messages sent to the chat will be automatically deleted. |
| [has_aggressive_anti_spam_enabled] | <code>boolean</code> | True, if aggressive anti-spam checks are enabled in the supergroup. |
| [has_hidden_members] | <code>boolean</code> | True, if non-administrators can only get the list of bots and administrators in the chat. |
| [has_protected_content] | <code>boolean</code> | True, if messages from the chat can't be forwarded to other chats. |
| [has_visible_history] | <code>boolean</code> | True, if new chat members will have access to old messages. |
| [sticker_set_name] | <code>string</code> | For supergroups, name of group sticker set. Returned only in getChat. |
| [can_set_sticker_set] | <code>boolean</code> | True, if the bot can change the group sticker set. Returned only in getChat. |
| [custom_emoji_sticker_set_name] | <code>string</code> | For supergroups, the name of the group's custom emoji sticker set. |
| [linked_chat_id] | <code>number</code> | Unique identifier for the linked chat, i.e. |
| [location] | [<code>ChatLocation</code>](#ChatLocation) | For supergroups, the location to which the supergroup is connected. Returned only in getChat. |

<a name="MessageOrigin"></a>

## MessageOrigin : <code>Object</code>
the origin of a message. It can be one of.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the message origin, always `user`. |
| date | <code>number</code> | Date the message was sent originally in Unix time. |
| sender_user | [<code>User</code>](#User) | User that sent the message originally. |
| sender_user_name | <code>string</code> | Name of the user that sent the message originally. |
| sender_chat | [<code>Chat</code>](#Chat) | Chat that sent the message originally. |
| [author_signature] | <code>string</code> | Signature of the original post author. |
| chat | [<code>Chat</code>](#Chat) | Channel chat to which the message was originally sent. |
| message_id | <code>number</code> | Unique message identifier inside the chat. |

<a name="ExternalReplyInfo"></a>

## ExternalReplyInfo : <code>Object</code>
contains information about a message that is being replied to, which may come from another chat or forum topic.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| origin | [<code>MessageOrigin</code>](#MessageOrigin) | Origin of the message replied to by the given message |
| [chat] | [<code>Chat</code>](#Chat) | Chat the original message belongs to. |
| [message_id] | <code>number</code> | Unique message identifier inside the original chat. |
| [link_preview_options] | [<code>LinkPreviewOptions</code>](#LinkPreviewOptions) | Options used for link preview generation for the original message, if it is a text message. |
| [animation] | [<code>Animation</code>](#Animation) | Message is an animation, information about the animation. |
| [audio] | [<code>Audio</code>](#Audio) | Message is an audio file, information about the file. |
| [document] | [<code>Document</code>](#Document) | Message is a general file, information about the file. |
| [photo] | [<code>Array.&lt;PhotoSize&gt;</code>](#PhotoSize) | Message is a photo, available sizes of the photo. |
| [sticker] | [<code>Sticker</code>](#Sticker) | Message is a sticker, information about the sticker. |
| [story] | <code>Story</code> | Message is a forwarded story. |
| [video] | [<code>Video</code>](#Video) | Message is a video, information about the video. |
| [video_note] | [<code>VideoNote</code>](#VideoNote) | Message is a video note, information about the video message. |
| [voice] | [<code>Voice</code>](#Voice) | Message is a voice message, information about the file. |
| [has_media_spoiler] | <code>boolean</code> | True, if the message media is covered by a spoiler animation. |
| [contact] | [<code>Contact</code>](#Contact) | Message is a shared contact, information about the contact. |
| [dice] | [<code>Dice</code>](#Dice) | Message is a dice with random value. |
| [game] | [<code>Game</code>](#Game) | Message is a game, information about the game. |
| [giveaway] | [<code>Giveaway</code>](#Giveaway) | Message is a scheduled giveaway, information about the giveaway. |
| [giveaway_winners] | [<code>GiveawayWinners</code>](#GiveawayWinners) | A giveaway with public winners was completed. |
| [invoice] | [<code>Invoice</code>](#Invoice) | Message is an invoice for a payment, information about the invoice. |
| [location] | [<code>Location</code>](#Location) | Message is a shared location, information about the location. |
| [poll] | [<code>Poll</code>](#Poll) | Message is a native poll, information about the poll. |
| [venue] | [<code>Venue</code>](#Venue) | Message is a venue, information about the venue. |

<a name="TextQuote"></a>

## TextQuote : <code>Object</code>
contains information about the quoted part of a message that is replied to by the given message.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text of the quoted part of a message that is replied to by the given message. |
| [entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | Special entities that appear in the quote. |
| position | <code>number</code> | Approximate quote position in the original message in UTF-16 code units as specified by the sender. |
| [is_manual] | <code>boolean</code> | True, if the quote was chosen manually by the message sender. |

<a name="MessageEntity"></a>

## MessageEntity : <code>Object</code>
one special entity in a text message.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the entity. |
| offset | <code>number</code> | Offset in UTF-16 code units to the start of the entity. |
| length | <code>number</code> | Length of the entity in UTF-16 code units. |
| [url] | <code>string</code> | For `text_link` only, URL that will be opened after user taps on the text. |
| [user] | [<code>User</code>](#User) | For `text_mention` only, the mentioned user. |
| [language] | <code>string</code> | For `pre` only, the programming language of the entity text. |
| [custom_emoji_id] | <code>string</code> | For `custom_emoji` only, unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the . |

<a name="LinkPreviewOptions"></a>

## LinkPreviewOptions : <code>Object</code>
the options used for link preview generation.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [is_disabled] | <code>boolean</code> | True, if the link preview is disabled. |
| [url] | <code>string</code> | URL to use for the link preview. |
| [prefer_small_media] | <code>boolean</code> | True, if the media in the link preview is supposed to be shrunk. |
| [prefer_large_media] | <code>boolean</code> | rue, if the media in the link preview is supposed to be enlarged. |
| [show_above_text] | <code>boolean</code> | True, if the link preview must be shown above the message text. |

<a name="Animation"></a>

## Animation : <code>Object</code>
an animation file, GIF or H.264/MPEG-4 AVC video without sound.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| file_id | <code>string</code> | Identifier for this file, which can be used to download or reuse the file. |
| file_unique_id | <code>string</code> | Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. |
| width | <code>number</code> | Video width as defined by sender. |
| height | <code>number</code> | Video height as defined by sender. |
| duration | <code>number</code> | Duration of the video in seconds as defined by sender. |
| [thumbnail] | [<code>PhotoSize</code>](#PhotoSize) | Animation thumbnail as defined by sender. |
| [file_name] | <code>string</code> | Original animation filename as defined by sender. |
| [mime_type] | <code>string</code> | MIME type of the file as defined by sender. |
| [file_size] | <code>number</code> | File size in bytes. |

<a name="Audio"></a>

## Audio : <code>Object</code>
an audio file to be treated as music by the Telegram clients.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| file_id | <code>string</code> | Identifier for this file, which can be used to download or reuse the file. |
| file_unique_id | <code>string</code> | Unique identifier for this file, which is supposed to be the same over time and for different bots. |
| duration | <code>number</code> | Duration of the audio in seconds as defined by sender. |
| [performer] | <code>string</code> | Performer of the audio as defined by sender or by audio tags. |
| [title] | <code>string</code> | Title of the audio as defined by sender or by audio tags. |
| [file_name] | <code>string</code> | Original filename as defined by sender. |
| [mime_type] | <code>string</code> | MIME type of the file as defined by sender. |
| [file_size] | <code>number</code> | File size in bytes. |
| [thumbnail] | [<code>PhotoSize</code>](#PhotoSize) | Thumbnail of the album cover to which the music file belongs |

<a name="Document"></a>

## Document : <code>Object</code>
a general file, as opposed to photos, voice messages and audio files.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| file_id | <code>string</code> | Identifier for this file, which can be used to download or reuse the file. |
| file_unique_id | <code>string</code> | Unique identifier for this file, which is supposed to be the same over time and for different bots. |
| [thumbnail] | [<code>PhotoSize</code>](#PhotoSize) | Document thumbnail as defined by sender. |
| [file_name] | <code>string</code> | Original filename as defined by sender. |
| [mime_type] | <code>string</code> | MIME type of the file as defined by sender. |
| [file_size] | <code>number</code> | File size in bytes. |

<a name="PhotoSize"></a>

## PhotoSize : <code>Object</code>
one size of a photo or a file / sticker thumbnail.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| file_id | <code>string</code> | Identifier for this file, which can be used to download or reuse the file. |
| file_unique_id | <code>string</code> | Unique identifier for this file, which is supposed to be the same over time and for different bots. |
| width | <code>number</code> | Photo width. |
| height | <code>number</code> | Photo height. |
| [file_size] | <code>number</code> | File size in bytes. |

<a name="Sticker"></a>

## Sticker : <code>Object</code>
a sticker.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| file_id | <code>string</code> | Identifier for this file, which can be used to download or reuse the file. |
| file_unique_id | <code>string</code> | Unique identifier for this file, which is supposed to be the same over time and for different bots. |
| type | <code>string</code> | Type of the sticker, currently one of `regular`, `mask`, `custom_emoji`. |
| width | <code>number</code> | Sticker width. |
| height | <code>number</code> | Sticker height. |
| is_animated | <code>boolean</code> | True, if the sticker is animated. |
| is_video | <code>boolean</code> | True, if the sticker is a video sticker. |
| [thumbnail] | [<code>PhotoSize</code>](#PhotoSize) | Sticker thumbnail in the .WEBP or .JPG format. |
| [emoji] | <code>string</code> | Emoji associated with the sticker. |
| [set_name] | <code>string</code> | Name of the sticker set to which the sticker belongs. |
| [premium_animation] | [<code>File</code>](#File) | For premium regular stickers, premium animation for the sticker. |
| [mask_position] | [<code>MaskPosition</code>](#MaskPosition) | For mask stickers, the position where the mask should be placed. |
| [custom_emoji_id] | <code>string</code> | For custom emoji stickers, unique identifier of the custom emoji. |
| [needs_repainting] | <code>boolean</code> | True, if the sticker must be repainted to a text color in messages. |
| [file_size] | <code>number</code> | File size in bytes. |

<a name="Video"></a>

## Video : <code>Object</code>
a video file.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| file_id | <code>string</code> | Identifier for this file, which can be used to download or reuse the file. |
| file_unique_id | <code>string</code> | Unique identifier for this file, which is supposed to be the same over time and for different bots. |
| width | <code>number</code> | Video width as defined by sender. |
| height | <code>number</code> | Video height as defined by sender. |
| duration | <code>number</code> | Duration of the video in seconds as defined by sender. |
| [thumbnail] | [<code>PhotoSize</code>](#PhotoSize) | Video thumbnail. |
| [file_name] | <code>string</code> | Original filename as defined by sender. |
| [mime_type] | <code>string</code> | MIME type of the file as defined by sender. |
| [file_size] | <code>number</code> | File size in bytes. |

<a name="VideoNote"></a>

## VideoNote : <code>Object</code>
a video message, available in Telegram apps as of v.4.0.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| file_id | <code>string</code> | Identifier for this file, which can be used to download or reuse the file. |
| file_unique_id | <code>string</code> | Unique identifier for this file, which is supposed to be the same over time and for different bots. |
| length | <code>number</code> | Video width and height, diameter of the video message as defined by sender. |
| duration | <code>number</code> | Duration of the video in seconds as defined by sender. |
| [thumbnail] | [<code>PhotoSize</code>](#PhotoSize) | Video thumbnail. |
| [file_size] | <code>number</code> | File size in bytes. |

<a name="Voice"></a>

## Voice : <code>Object</code>
a voice note.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| file_id | <code>string</code> | Identifier for this file, which can be used to download or reuse the file. |
| file_unique_id | <code>string</code> | Unique identifier for this file, which is supposed to be the same over time and for different bots. |
| duration | <code>number</code> | Duration of the audio in seconds as defined by sender. |
| [mime_type] | <code>string</code> | MIME type of the file as defined by sender. |
| [file_size] | <code>number</code> | File size in bytes. |

<a name="Contact"></a>

## Contact : <code>Object</code>
a phone contact.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| phone_number | <code>string</code> | Contact's phone number |
| first_name | <code>string</code> | Contact's first name |
| [last_name] | <code>string</code> | Contact's last name |
| [user_id] | <code>number</code> | Contact's user identifier in Telegram. |
| [vcard] | <code>string</code> | Additional data about the contact in the form of a vCard |

<a name="Dice"></a>

## Dice : <code>Object</code>
an animated emoji that displays a random value.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| emoji | <code>string</code> | Emoji on which the dice throw animation is based |
| value | <code>number</code> | Value of the dice, 1-6 for `≡ƒÄ▓`, `≡ƒÄ»` and `≡ƒÄ│` base emoji, 1-5 for `≡ƒÅÇ` and `ΓÜ╜` base emoji, 1-64 for `≡ƒÄ░` base emoji |

<a name="Game"></a>

## Game : <code>Object</code>
a game.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Title of the game. |
| description | <code>string</code> | Description of the game. |
| photo | [<code>Array.&lt;PhotoSize&gt;</code>](#PhotoSize) | Photo that will be displayed in the game message in chats. |
| [text] | <code>string</code> | Brief description of the game or high scores included in the game message. |
| [text_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | Special entities that appear in text, such as usernames, URLs, bot commands, etc. |
| [animation] | [<code>Animation</code>](#Animation) | Animation that will be displayed in the game message in chats. Upload via BotFather. |

<a name="Poll"></a>

## Poll : <code>Object</code>
contains information about a poll.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Unique poll identifier. |
| question | <code>string</code> | Poll question, 1-300 characters. |
| options | [<code>Array.&lt;PollOption&gt;</code>](#PollOption) | List of poll options. |
| total_voter_count | <code>number</code> | Total number of users that voted in the poll. |
| is_closed | <code>boolean</code> | True, if the poll is closed. |
| is_anonymous | <code>boolean</code> | True, if the poll is anonymous. |
| type | <code>string</code> | Poll type, currently can be `regular` or `quiz`. |
| allows_multiple_answers | <code>boolean</code> | rue, if the poll allows multiple answers. |
| [correct_option_id] | <code>number</code> | 0-based identifier of the correct answer option. |
| [explanation] | <code>string</code> | Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll. |
| [explanation_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | Special entities like usernames, URLs, bot commands, etc. |
| [open_period] | <code>number</code> | Amount of time in seconds the poll will be active after creation. |
| [close_date] | <code>number</code> | Point in time - Unix timestamp, when the poll will be automatically closed. |

<a name="Venue"></a>

## Venue : <code>Object</code>
a venue.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| location | [<code>Location</code>](#Location) | Venue location. |
| title | <code>string</code> | Name of the venue |
| address | <code>string</code> | Address of the venue |
| [foursquare_id] | <code>string</code> | Foursquare identifier of the venue |
| [foursquare_type] | <code>string</code> | Foursquare type of the venue. ex. `arts_entertainment/default`, `arts_entertainment/aquarium or `food/icecream`. |
| [google_place_id] | <code>string</code> | Google Places identifier of the venue. |
| [google_place_type] | <code>string</code> | Google Places type of the venue. |

<a name="Location"></a>

## Location : <code>Object</code>
a point on the map.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| longitude | <code>number</code> | Longitude as defined by sender. |
| latitude | <code>number</code> | Latitude as defined by sender. |
| [horizontal_accuracy] | <code>number</code> | The radius of uncertainty for the location, measured in meters; 0-1500. |
| [live_period] | <code>number</code> | Time relative to the message sending date, during which the location can be updated. |
| [heading] | <code>number</code> | The direction in which user is moving, in degrees; 1-360. For active live locations only. |
| [proximity_alert_radius] | <code>number</code> | The maximum distance for proximity alerts about approaching another chat member, in meters. |

<a name="MessageAutoDeleteTimerChanged"></a>

## MessageAutoDeleteTimerChanged : <code>Object</code>
a service message about a change in auto-delete timer settings.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| message_auto_delete_time | <code>number</code> | New auto-delete time for messages in the chat; in seconds. |

<a name="Invoice"></a>

## Invoice : <code>Object</code>
contains basic information about an invoice.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Product name |
| description | <code>string</code> | Product description |
| start_parameter | <code>string</code> | Unique bot deep-linking parameter that can be used to generate this invoice |
| currency | <code>string</code> | Three-letter ISO 4217 currency code |
| total_amount | <code>number</code> | Total price in the smallest units of the currency, integer, not float/double. |

<a name="SuccessfulPayment"></a>

## SuccessfulPayment : <code>Object</code>
contains basic information about a successful payment.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| currency | <code>string</code> | Three-letter ISO 4217 currency code. |
| total_amount | <code>number</code> | Total price in the smallest units of the currency, integer, not float/double. |
| invoice_payload | <code>string</code> | Bot specified invoice payload. |
| shipping_option_id | <code>string</code> | Identifier of the shipping option chosen by the user. |
| order_info | [<code>OrderInfo</code>](#OrderInfo) | Order information provided by the user. |
| telegram_payment_charge_id | <code>string</code> | Telegram payment identifier. |
| provider_payment_charge_id | <code>string</code> | Provider payment identifier. |

<a name="UsersShared"></a>

## UsersShared : <code>Object</code>
contains information about the users whose identifiers were shared with the bot using a KeyboardButtonRequestUsers button.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| request_id | <code>number</code> | Identifier of the request. |
| user_ids | <code>Array.&lt;number&gt;</code> | Identifiers of the shared users. |

<a name="ChatShared"></a>

## ChatShared : <code>Object</code>
contains information about the chat whose identifier was shared with the bot using a KeyboardButtonRequestChat button.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| request_id | <code>number</code> | Identifier of the request. |
| chat_id | <code>number</code> | Identifier of the shared chat. |

<a name="WriteAccessAllowed"></a>

## WriteAccessAllowed : <code>Object</code>
This object represents a service message about a user allowing a bot to write messages

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| from_request | <code>boolean</code> | True, if the access was granted after the user accepted an explicit request from a Web App. |
| web_app_name | <code>string</code> | Name of the Web App, if the access was granted when the Web App was launched from a link. |
| from_attachment_menu | <code>boolean</code> | True, if the access was granted when the bot was added to the attachment or side menu. |

<a name="PassportData"></a>

## PassportData : <code>Object</code>
Describes Telegram Passport data shared with the bot by the user.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | [<code>Array.&lt;EncryptedPassportElement&gt;</code>](#EncryptedPassportElement) | Array with information about documents and other Telegram Passport elements that was shared with the bot. |
| credentials | [<code>EncryptedCredentials</code>](#EncryptedCredentials) | Encrypted credentials required to decrypt the data. |

<a name="ProximityAlertTriggered"></a>

## ProximityAlertTriggered : <code>Object</code>
content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| traveler | [<code>User</code>](#User) | User that triggered the alert. |
| watcher | [<code>User</code>](#User) | User that set the alert. |
| distance | <code>number</code> | The distance between the users. |

<a name="ForumTopicCreated"></a>

## ForumTopicCreated : <code>Object</code>
a service message about a new forum topic created in the chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the topic. |
| icon_color | <code>number</code> | Color of the topic icon in RGB format. |
| icon_custom_emoji_id | <code>string</code> | Unique identifier of the custom emoji shown as the topic icon. |

<a name="ForumTopicEdited"></a>

## ForumTopicEdited : <code>Object</code>
a service message about an edited forum topic.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | New name of the topic, if it was edited |
| icon_custom_emoji_id | <code>string</code> | New identifier of the custom emoji shown as the topic icon, if it was edited; an empty string if the icon was removed. |

<a name="Giveaway"></a>

## Giveaway : <code>Object</code>
a message about a scheduled giveaway.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chats | [<code>Array.&lt;Chat&gt;</code>](#Chat) | The list of chats which the user must join to participate in the giveaway |
| winners_selection_date | <code>number</code> | Point in time - Unix timestamp, when winners of the giveaway will be selected |
| winner_count | <code>number</code> | The number of users which are supposed to be selected as winners of the giveaway |
| [only_new_members] | <code>boolean</code> | True, if only users who join the chats after the giveaway started should be eligible to win |
| [has_public_winners] | <code>boolean</code> | True, if the list of giveaway winners will be visible to everyone |
| [prize_description] | <code>string</code> | Description of additional giveaway prize |
| [country_codes] | <code>Array.&lt;string&gt;</code> | A list of two-letter ISO 3166-1 alpha-2 country codes indicating the countries from which eligible users for the giveaway must come. |
| [premium_subscription_month_count] | <code>number</code> | The number of months the Telegram Premium subscription won from the giveaway will be active for |

<a name="GiveawayWinners"></a>

## GiveawayWinners : <code>Object</code>
a message about the completion of a giveaway with public winners.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| chat | [<code>Chat</code>](#Chat) | The chat that created the giveaway |
| giveaway_message_id | <code>number</code> | Identifier of the message with the giveaway in the chat |
| winners_selection_date | <code>number</code> | Point in time - Unix timestamp when winners of the giveaway were selected |
| winner_count | <code>number</code> | Total number of winners in the giveaway |
| winners | [<code>Array.&lt;User&gt;</code>](#User) | List of up to 100 winners of the giveaway |
| [additional_chat_count] | <code>number</code> | The number of other chats the user had to join in order to be eligible for the giveaway |
| [premium_subscription_month_count] | <code>number</code> | The number of months the Telegram Premium subscription won from the giveaway will be active for |
| [unclaimed_prize_count] | <code>number</code> | Number of undistributed prizes |
| [only_new_members] | <code>boolean</code> | True, if only users who had joined the chats after the giveaway started were eligible to win |
| [was_refunded] | <code>boolean</code> | True, if the giveaway was canceled because the payment for it was refunded |
| [prize_description] | <code>string</code> | Description of additional giveaway prize |

<a name="GiveawayCompleted"></a>

## GiveawayCompleted : <code>Object</code>
a service message about the completion of a giveaway without public winners.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| winner_count | <code>number</code> | Number of winners in the giveaway. |
| [unclaimed_prize_count] | <code>number</code> | Number of undistributed prizes. |
| [giveaway_message] | [<code>Message</code>](#Message) | Message with the giveaway that was completed, if it wasn't deleted. |

<a name="VideoChatScheduled"></a>

## VideoChatScheduled : <code>Object</code>
a service message about a video chat scheduled in the chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| start_date | <code>number</code> | Point in time - Unix timestamp, when the video chat is supposed to be started by a chat administrator |

<a name="VideoChatEnded"></a>

## VideoChatEnded : <code>Object</code>
a service message about a video chat ended in the chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| duration | <code>number</code> | Video chat duration in seconds. |

<a name="VideoChatParticipantsInvited"></a>

## VideoChatParticipantsInvited : <code>Object</code>
a service message about new members invited to a video chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| users | [<code>Array.&lt;User&gt;</code>](#User) | New members that were invited to the video chat. |

<a name="WebAppData"></a>

## WebAppData : <code>Object</code>
data sent from a Web App to the bot.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>string</code> | The data. Be aware that a bad client can send arbitrary data in this field. |
| button_text | <code>string</code> | Text of the web_app keyboard button from which the Web App was opened. Be aware that a bad client can send arbitrary data in this field. |

<a name="InlineKeyboardMarkup"></a>

## InlineKeyboardMarkup : <code>Object</code>
an inline keyboard that appears right next to the message it belongs to.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| inline_keyboard | <code>Array.&lt;Array.&lt;InlineKeyboardButton&gt;&gt;</code> | Array of button rows, each represented by an Array of InlineKeyboardButton objects |

<a name="InlineKeyboardButton"></a>

## InlineKeyboardButton : <code>Object</code>
one button of an inline keyboard. You must use exactly one of the optional fields.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Label text on the button. |
| [url] | <code>string</code> | HTTP or tg:// URL to be opened when the button is pressed. |
| [callback_data] | <code>string</code> | Data to be sent in a callback query to the bot when button is pressed, 1-64 bytes |
| [web_app] | [<code>WebAppInfo</code>](#WebAppInfo) | Description of the Web App that will be launched when the user presses the button. |
| [login_url] | [<code>LoginUrl</code>](#LoginUrl) | An HTTPS URL used to automatically authorize the user. |
| [switch_inline_query] | <code>string</code> | If set, pressing the button will prompt the user to select one of their chats. |
| [switch_inline_query_current_chat] | <code>string</code> | If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. |
| [switch_inline_query_chosen_chat] | [<code>SwitchInlineQueryChosenChat</code>](#SwitchInlineQueryChosenChat) | If set, pressing the button will prompt the user to select one of their chats of the specified type |
| [callback_game] | <code>CallbackGame</code> | Description of the game that will be launched when the user presses the button. |
| [pay] | <code>boolean</code> | Specify True, to send a Pay button. |

<a name="ReplyKeyboardRemove"></a>

## ReplyKeyboardRemove : <code>Object</code>
Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| remove_keyboard | <code>true</code> | Requests clients to remove the custom keyboard. |
| [selective] | <code>boolean</code> | Use this parameter if you want to remove the keyboard for specific users only. |

<a name="KeyboardButton"></a>

## KeyboardButton : <code>Object</code>
one button of the reply keyboard.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed. |
| [request_users] | [<code>KeyboardButtonRequestUsers</code>](#KeyboardButtonRequestUsers) | If specified, pressing the button will open a list of suitable users. |
| [request_chat] | [<code>KeyboardButtonRequestChat</code>](#KeyboardButtonRequestChat) | If specified, pressing the button will open a list of suitable chats. |
| [request_contact] | <code>boolean</code> | If True, the user's phone number will be sent as a contact when the button is pressed. |
| [request_location] | <code>boolean</code> | If True, the user's current location will be sent when the button is pressed. |
| [request_poll] | [<code>KeyboardButtonPollType</code>](#KeyboardButtonPollType) | If specified, user will be asked to create poll and send to the bot when the button is pressed. |
| [web_app] | [<code>WebAppInfo</code>](#WebAppInfo) | If specified, the described Web App will be launched when the button is pressed. |

<a name="ReplyKeyboardMarkup"></a>

## ReplyKeyboardMarkup : <code>Object</code>
a custom keyboard with reply options.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| keyboard | <code>Array.&lt;Array.&lt;KeyboardButton&gt;&gt;</code> | Array of button rows, each represented by an Array of KeyboardButton objects. |
| [is_persistent] | <code>boolean</code> | Requests clients to always show the keyboard when the regular keyboard is hidden. |
| [resize_keyboard] | <code>boolean</code> | Requests clients to resize the keyboard vertically for optimal fit. |
| [one_time_keyboard] | <code>boolean</code> | Requests clients to hide the keyboard as soon as it's been used. |
| [input_field_placeholder] | <code>string</code> | The placeholder to be shown in the input field when the keyboard is active. |
| [selective] | <code>boolean</code> | Use this parameter if you want to show the keyboard to specific users only. |

<a name="PollOption"></a>

## PollOption : <code>Object</code>
information about one answer option in a poll.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Option text, 1-100 characters. |
| voter_count | <code>number</code> | Number of users that voted for this option. |

<a name="UserProfilePhotos"></a>

## UserProfilePhotos : <code>Object</code>
a user's profile pictures.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| total_count | <code>number</code> | Total number of profile pictures the target user has. |
| photos | <code>Array.&lt;Array.&lt;PhotoSize&gt;&gt;</code> | Requested profile pictures, in up to 4 sizes each. |

<a name="File"></a>

## File : <code>Object</code>
a file ready to be downloaded.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| file_id | <code>string</code> | Identifier for this file, which can be used to download or reuse the file. |
| file_unique_id | <code>string</code> | Identifier for this file, which can be used to download or reuse the file. |
| file_size | <code>number</code> | File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. |
| file_path | <code>string</code> | File path. Use https://api.telegram.org/file/bot<token>/<file_path> to get the file. |

<a name="WebAppInfo"></a>

## WebAppInfo : <code>Object</code>
a Web App.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | An HTTPS URL of a Web App to be opened with additional data as specified in Initializing Web Apps. |

<a name="KeyboardButtonRequestUsers"></a>

## KeyboardButtonRequestUsers : <code>Object</code>
the criteria used to request suitable users.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| request_id | <code>number</code> | Signed 32-bit identifier of the request that will be received back in the UsersShared object. |
| [user_is_bot] | <code>boolean</code> | Pass True to request bots, pass False to request regular users. |
| [user_is_premium] | <code>boolean</code> | Pass True to request premium users, pass False to request non-premium users. |
| [max_quantity] | <code>number</code> | The maximum number of users to be selected; 1-10. Defaults to 1. |

<a name="KeyboardButtonRequestChat"></a>

## KeyboardButtonRequestChat : <code>Object</code>
the criteria used to request a suitable chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| request_id | <code>number</code> | Signed 32-bit identifier of the request, which will be received back in the ChatShared object. |
| chat_is_channel | <code>boolean</code> | Pass True to request a channel chat, pass False to request a group or a supergroup chat. |
| [chat_is_forum] | <code>boolean</code> | Pass True to request a forum supergroup, pass False to request a non-forum chat. |
| [chat_has_username] | <code>boolean</code> | Pass True to request a supergroup or a channel with a username, pass False to request a chat without a username. |
| [chat_is_created] | <code>boolean</code> | Pass True to request a chat owned by the user. Otherwise, no additional restrictions are applied. |
| [user_administrator_rights] | [<code>ChatAdministratorRights</code>](#ChatAdministratorRights) | listing the required administrator rights of the user in the chat. |
| [bot_administrator_rights] | [<code>ChatAdministratorRights</code>](#ChatAdministratorRights) | object listing the required administrator rights of the bot in the chat. |
| [bot_is_member] | <code>boolean</code> | Pass True to request a chat with the bot as a member. |

<a name="KeyboardButtonPollType"></a>

## KeyboardButtonPollType : <code>Object</code>
type of a poll, which is allowed to be created and sent when the corresponding button is pressed.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | If quiz is passed, the user will be allowed to create only polls in the quiz mode. |

<a name="LoginUrl"></a>

## LoginUrl : <code>Object</code>
a parameter of the inline keyboard button used to automatically authorize a user.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | An HTTPS URL to be opened with user authorization data added to the query string when the button is pressed. |
| forward_text | <code>string</code> | New text of the button in forwarded messages. |
| bot_username | <code>string</code> | Username of a bot, which will be used for user authorization. |
| request_write_access | <code>boolean</code> | Pass True to request the permission for your bot to send messages to the user. |

<a name="SwitchInlineQueryChosenChat"></a>

## SwitchInlineQueryChosenChat : <code>Object</code>
an inline button that switches the current user to inline mode in a chosen chat, with an optional default inline query.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| query | <code>string</code> | The default inline query to be inserted in the input field. If left empty, only the bot's username will be inserted. |
| allow_user_chats | <code>boolean</code> | True, if private chats with users can be chosen. |
| allow_bot_chats | <code>boolean</code> | True, if private chats with bots can be chosen. |
| allow_group_chats | <code>boolean</code> | True, if group and supergroup chats can be chosen. |
| allow_channel_chats | <code>boolean</code> | True, if channel chats can be chosen. |

<a name="ForceReply"></a>

## ForceReply : <code>Object</code>
a message with this object, Telegram clients will display a reply interface to the user.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| force_reply | <code>boolean</code> | Shows reply interface to the user, as if they manually selected the bot's message and tapped 'Reply'. |
| input_field_placeholder | <code>string</code> | The placeholder to be shown in the input field when the reply is active; 1-64 characters. |
| selective | <code>boolean</code> | Use this parameter if you want to force reply from specific users only. |

<a name="ChatPhoto"></a>

## ChatPhoto : <code>Object</code>
a chat photo.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| small_file_id | <code>string</code> | File identifier of small - 160x160 chat photo. |
| small_file_unique_id | <code>string</code> | Unique file identifier of small - 160x160 chat photo, which is supposed to be the same over time and for different bots. |
| big_file_id | <code>string</code> | File identifier of big - 640x640 chat photo. |
| big_file_unique_id | <code>string</code> | Unique file identifier of big - 640x640 chat photo, which is supposed to be the same over time and for different bots. |

<a name="ChatInviteLink"></a>

## ChatInviteLink : <code>Object</code>
an invite link for a chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| invite_link | <code>string</code> | The invite link. |
| creator | [<code>User</code>](#User) | Creator of the link. |
| creates_join_request | <code>boolean</code> | True, if users joining the chat via the link need to be approved by chat administrators. |
| is_primary | <code>boolean</code> | True, if the link is primary. |
| is_revoked | <code>boolean</code> | True, if the link is revoked. |
| name | <code>string</code> | Invite link name. |
| expire_date | <code>number</code> | Point in time - Unix timestamp when the link will expire or has been expired. |
| member_limit | <code>number</code> | The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link |
| pending_join_request_count | <code>number</code> | Number of pending join requests created using this link |

<a name="ChatAdministratorRights"></a>

## ChatAdministratorRights : <code>Object</code>
the rights of an administrator in a chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| is_anonymous | <code>boolean</code> | True, if the user's presence in the chat is hidden. |
| can_manage_chat | <code>boolean</code> | True, if the administrator can access the chat event log. |
| can_delete_messages | <code>boolean</code> | True, if the administrator can delete messages of other users. |
| can_manage_video_chats | <code>boolean</code> | True, if the administrator can manage video chats. |
| can_restrict_members | <code>boolean</code> | True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics. |
| can_promote_members | <code>boolean</code> | True, if the administrator can add new administrators with a subset of their own privileges. |
| can_change_info | <code>boolean</code> | True, if the user is allowed to change the chat title, photo and other settings. |
| can_invite_users | <code>boolean</code> | True, if the user is allowed to invite new users to the chat. |
| can_post_stories | <code>boolean</code> | True, if the administrator can post stories to the chat. |
| can_edit_stories | <code>boolean</code> | True, if the administrator can edit stories posted by other users. |
| can_delete_stories | <code>boolean</code> | True, if the administrator can delete stories posted by other users. |
| can_post_messages | <code>boolean</code> | True, if the administrator can post messages in the channel, or access channel statistics. |
| can_edit_messages | <code>boolean</code> | True, if the administrator can edit messages of other users and can pin messages. |
| can_pin_messages | <code>boolean</code> | True, if the user is allowed to pin messages; groups and supergroups only. |
| can_manage_topics | <code>boolean</code> | True, if the user is allowed to create, rename, close, and reopen forum topics; supergroups only. |

<a name="ChatMember"></a>

## ChatMember : [<code>ChatMemberOwner</code>](#ChatMemberOwner) \| [<code>ChatMemberAdministrator</code>](#ChatMemberAdministrator) \| [<code>ChatMemberMember</code>](#ChatMemberMember) \| [<code>ChatMemberRestricted</code>](#ChatMemberRestricted) \| [<code>ChatMemberLeft</code>](#ChatMemberLeft) \| [<code>ChatMemberBanned</code>](#ChatMemberBanned)
information about one member of a chat.

**Kind**: global typedef  
<a name="ChatMemberOwner"></a>

## ChatMemberOwner : <code>Object</code>
a chat member that owns the chat and has all administrator privileges.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| status | <code>string</code> | The member's status in the chat, always `creator`. |
| user | [<code>User</code>](#User) | Information about the user. |
| is_anonymous | <code>boolean</code> | True, if the user's presence in the chat is hidden. |
| custom_title | <code>string</code> | Custom title for this user. |

<a name="ChatMemberAdministrator"></a>

## ChatMemberAdministrator : <code>Object</code>
a chat member that has some additional privileges.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| status | <code>string</code> | The member's status in the chat, always `administrator`. |
| user | [<code>User</code>](#User) | Information about the user. |
| can_be_edited | <code>boolean</code> | True, if the bot is allowed to edit administrator privileges of that user. |
| is_anonymous | <code>boolean</code> | True, if the user's presence in the chat is hidden. |
| can_manage_chat | <code>boolean</code> | True, if the administrator can access the chat event log, get boost list. |
| can_delete_messages | <code>boolean</code> | True, if the administrator can delete messages of other users. |
| can_manage_video_chats | <code>boolean</code> | True, if the administrator can manage video chats. |
| can_restrict_members | <code>boolean</code> | True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics. |
| can_promote_members | <code>boolean</code> | True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted. |
| can_change_info | <code>boolean</code> | True, if the user is allowed to change the chat title, photo and other settings. |
| can_invite_users | <code>boolean</code> | True, if the user is allowed to invite new users to the chat. |
| can_post_stories | <code>boolean</code> | True, if the administrator can post stories to the chat. |
| can_edit_stories | <code>boolean</code> | True, if the administrator can edit stories posted by other users. |
| can_delete_stories | <code>boolean</code> | True, if the administrator can delete stories posted by other users. |
| can_post_messages | <code>boolean</code> | True, if the administrator can post messages in the channel, or access channel statistics; channels only. |
| can_edit_messages | <code>boolean</code> | True, if the administrator can edit messages of other users and can pin messages; channels only. |
| can_pin_messages | <code>boolean</code> | True, if the user is allowed to pin messages; groups and supergroups only. |
| can_manage_topics | <code>boolean</code> | True, if the user is allowed to create, rename, close, and reopen forum topics; supergroups only. |
| custom_title | <code>boolean</code> | Custom title for this user. |

<a name="ChatMemberMember"></a>

## ChatMemberMember : <code>Object</code>
a chat member that has no additional privileges or restrictions.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| status | <code>string</code> | The member's status in the chat, always `member` |
| user | [<code>User</code>](#User) | Information about the user. |

<a name="ChatMemberRestricted"></a>

## ChatMemberRestricted : <code>Object</code>
a chat member that is under certain restrictions in the chat. Supergroups only.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| status | <code>string</code> | The member's status in the chat, always `restricted`. |
| user | [<code>User</code>](#User) | Information about the user. |
| is_member | <code>boolean</code> | True, if the user is a member of the chat at the moment of the request. |
| can_send_messages | <code>boolean</code> | True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues. |
| can_send_audios | <code>boolean</code> | True, if the user is allowed to send audios. |
| can_send_documents | <code>boolean</code> | True, if the user is allowed to send documents. |
| can_send_photos | <code>boolean</code> | True, if the user is allowed to send photos. |
| can_send_videos | <code>boolean</code> | True, if the user is allowed to send videos. |
| can_send_video_notes | <code>boolean</code> | True, if the user is allowed to send video notes. |
| can_send_voice_notes | <code>boolean</code> | True, if the user is allowed to send voice notes. |
| can_send_polls | <code>boolean</code> | True, if the user is allowed to send polls. |
| can_send_other_messages | <code>boolean</code> | True, if the user is allowed to send animations, games, stickers and use inline bots. |
| can_add_web_page_previews | <code>boolean</code> | True, if the user is allowed to add web page previews to their messages. |
| can_change_info | <code>boolean</code> | True, if the user is allowed to change the chat title, photo and other settings. |
| can_invite_users | <code>boolean</code> | True, if the user is allowed to invite new users to the chat. |
| can_pin_messages | <code>boolean</code> | True, if the user is allowed to pin messages. |
| can_manage_topics | <code>boolean</code> | True, if the user is allowed to create forum topics. |
| until_date | <code>number</code> | Date when restrictions will be lifted for this user; Unix time. If 0, then the user is restricted forever. |

<a name="ChatMemberLeft"></a>

## ChatMemberLeft : <code>Object</code>
a chat member that isn't currently a member of the chat, but may join it themselves.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| status | <code>string</code> | The member's status in the chat, always `left` |
| user | [<code>User</code>](#User) | Information about the user |

<a name="ChatMemberBanned"></a>

## ChatMemberBanned : <code>Object</code>
a chat member that was banned in the chat and can't return to the chat or view chat messages.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| status | <code>string</code> | The member's status in the chat, always `kicked`. |
| user | [<code>User</code>](#User) | Information about the user. |
| until_date | <code>number</code> | Date when restrictions will be lifted for this user; Unix time. If 0, then the user is banned forever. |

<a name="ChatPermissions"></a>

## ChatPermissions : <code>Object</code>
actions that a non-administrator user is allowed to take in a chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| can_send_messages | <code>boolean</code> | True, if the user is allowed to send text messages, contacts, giveaways, giveaway winners, invoices, locations and venues. |
| can_send_audios | <code>boolean</code> | True, if the user is allowed to send audios. |
| can_send_documents | <code>boolean</code> | True, if the user is allowed to send documents. |
| can_send_photos | <code>boolean</code> | True, if the user is allowed to send photos. |
| can_send_videos | <code>boolean</code> | True, if the user is allowed to send videos. |
| can_send_video_notes | <code>boolean</code> | True, if the user is allowed to send video notes. |
| can_send_voice_notes | <code>boolean</code> | True, if the user is allowed to send voice notes. |
| can_send_polls | <code>boolean</code> | True, if the user is allowed to send polls. |
| can_send_other_messages | <code>boolean</code> | True, if the user is allowed to send animations, games, stickers and use inline bots. |
| can_add_web_page_previews | <code>boolean</code> | True, if the user is allowed to add web page previews to their messages. |
| can_change_info | <code>boolean</code> | True, if the user is allowed to change the chat title, photo and other settings. |
| can_invite_users | <code>boolean</code> | True, if the user is allowed to invite new users to the chat. |
| can_pin_messages | <code>boolean</code> | True, if the user is allowed to pin messages. Ignored in public supergroups. |
| can_manage_topics | <code>boolean</code> | True, if the user is allowed to create forum topics. If omitted defaults to the value of can_pin_messages. |

<a name="ChatLocation"></a>

## ChatLocation : <code>Object</code>
a location to which a chat is connected.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| location | [<code>Location</code>](#Location) | The location to which the supergroup is connected. Can't be a live location. |
| address | <code>string</code> | Location address; 1-64 characters, as defined by the chat owner |

<a name="ReactionType"></a>

## ReactionType : [<code>ReactionTypeEmoji</code>](#ReactionTypeEmoji) \| [<code>ReactionTypeCustomEmoji</code>](#ReactionTypeCustomEmoji)
the type of a reaction. Currently, it can be one of

**Kind**: global typedef  
<a name="ReactionTypeEmoji"></a>

## ReactionTypeEmoji : <code>Object</code>
The reaction is based on an emoji.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the reaction, always `emoji` |
| emoji | <code>string</code> | Reaction emoji. |

<a name="ReactionTypeCustomEmoji"></a>

## ReactionTypeCustomEmoji : <code>Object</code>
The reaction is based on a custom emoji.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the reaction, always `custom_emoji` |
| custom_emoji_id | <code>string</code> | Custom emoji identifier |

<a name="ReactionCount"></a>

## ReactionCount : <code>Object</code>
a reaction added to a message along with the number of times it was added.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | [<code>ReactionType</code>](#ReactionType) | Type of the reaction. |
| total_count | <code>number</code> | Number of times the reaction was added. |

<a name="ForumTopic"></a>

## ForumTopic : <code>Object</code>
represents a forum topic.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| message_thread_id | <code>number</code> | Unique identifier of the forum topic. |
| name | <code>string</code> | Name of the topic. |
| icon_color | <code>number</code> | Color of the topic icon in RGB format. |
| icon_custom_emoji_id | <code>string</code> | Unique identifier of the custom emoji shown as the topic icon. |

<a name="BotCommand"></a>

## BotCommand : <code>Object</code>
represents a bot command.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| command | <code>string</code> | Text of the command; 1-32 characters. Can contain only lowercase English letters, digits and underscores. |
| description | <code>string</code> | Description of the command; 1-256 characters. |

<a name="BotCommandScope"></a>

## BotCommandScope : [<code>BotCommandScopeDefault</code>](#BotCommandScopeDefault) \| [<code>BotCommandScopeAllPrivateChats</code>](#BotCommandScopeAllPrivateChats) \| [<code>BotCommandScopeAllGroupChats</code>](#BotCommandScopeAllGroupChats) \| [<code>BotCommandScopeAllChatAdministrators</code>](#BotCommandScopeAllChatAdministrators) \| [<code>BotCommandScopeChat</code>](#BotCommandScopeChat) \| [<code>BotCommandScopeChatAdministrators</code>](#BotCommandScopeChatAdministrators) \| [<code>BotCommandScopeChatMember</code>](#BotCommandScopeChatMember)
represents the scope to which bot commands are applied.

**Kind**: global typedef  
<a name="BotCommandScopeDefault"></a>

## BotCommandScopeDefault : <code>Object</code>
the default scope of bot commands.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Scope type, must be `default`. |

<a name="BotCommandScopeAllPrivateChats"></a>

## BotCommandScopeAllPrivateChats : <code>Object</code>
the scope of bot commands, covering all private chats.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Scope type, must be `all_private_chats`. |

<a name="BotCommandScopeAllGroupChats"></a>

## BotCommandScopeAllGroupChats : <code>Object</code>
the scope of bot commands, covering all group and supergroup chats.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Scope type, must be `all_group_chats`. |

<a name="BotCommandScopeAllChatAdministrators"></a>

## BotCommandScopeAllChatAdministrators : <code>Object</code>
the scope of bot commands, covering all group and supergroup chat administrators.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Scope type, must be `all_chat_administrators`. |

<a name="BotCommandScopeChat"></a>

## BotCommandScopeChat : <code>Object</code>
the scope of bot commands, covering a specific chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Scope type, must be `chat`. |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username of the target `supergroup`. |

<a name="BotCommandScopeChatAdministrators"></a>

## BotCommandScopeChatAdministrators : <code>Object</code>
the scope of bot commands, covering all administrators of a specific group or supergroup chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Scope type, must be `chat_administrators`. |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username of the target supergroup. |

<a name="BotCommandScopeChatMember"></a>

## BotCommandScopeChatMember : <code>Object</code>
the scope of bot commands, covering a specific member of a group or supergroup chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Scope type, must be `chat_member`. |
| chat_id | <code>number</code> \| <code>string</code> | Unique identifier for the target chat or username of the target supergroup. |
| user_id | <code>number</code> | Unique identifier of the target user. |

<a name="BotName"></a>

## BotName : <code>Object</code>
represents the bot's name.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The bot's name |

<a name="BotDescription"></a>

## BotDescription : <code>Object</code>
represents the bot's description.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| description | <code>string</code> | The bot's description. |

<a name="BotShortDescription"></a>

## BotShortDescription : <code>Object</code>
the bot's short description.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| short_description | <code>string</code> | The bot's short description. |

<a name="MenuButton"></a>

## MenuButton : [<code>MenuButtonCommands</code>](#MenuButtonCommands) \| [<code>MenuButtonWebApp</code>](#MenuButtonWebApp) \| [<code>MenuButtonDefault</code>](#MenuButtonDefault)
the bot's menu button in a private chat.

**Kind**: global typedef  
<a name="MenuButtonCommands"></a>

## MenuButtonCommands : <code>Object</code>
a menu button, which opens the bot's list of commands.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the button, must be commands. |

<a name="MenuButtonWebApp"></a>

## MenuButtonWebApp : <code>Object</code>
a menu button, which launches a Web App.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the button, must be `web_app`. |
| text | <code>string</code> | Text on the button. |
| web_app | [<code>WebAppInfo</code>](#WebAppInfo) | Description of the Web App that will be launched when the user presses the button. |

<a name="MenuButtonDefault"></a>

## MenuButtonDefault : <code>Object</code>
no specific value for the menu button was set.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the button, must be default. |

<a name="ChatBoostSource"></a>

## ChatBoostSource : [<code>ChatBoostSourcePremium</code>](#ChatBoostSourcePremium) \| [<code>ChatBoostSourceGiftCode</code>](#ChatBoostSourceGiftCode) \| [<code>ChatBoostSourceGiveaway</code>](#ChatBoostSourceGiveaway)
the source of a chat boost.

**Kind**: global typedef  
<a name="ChatBoostSourcePremium"></a>

## ChatBoostSourcePremium : <code>Object</code>
The boost was obtained by subscribing to Telegram Premium or by gifting a Telegram Premium subscription to another user.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Source of the boost, always `premium`. |
| user | [<code>User</code>](#User) | User that boosted the chat. |

<a name="ChatBoostSourceGiftCode"></a>

## ChatBoostSourceGiftCode : <code>Object</code>
he boost was obtained by the creation of Telegram Premium gift codes to boost a chat.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Source of the boost, always `gift_code` |
| user | [<code>User</code>](#User) | User for which the gift code was created |

<a name="ChatBoostSourceGiveaway"></a>

## ChatBoostSourceGiveaway : <code>Object</code>
The boost was obtained by the creation of a Telegram Premium giveaway.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Source of the boost, always `giveaway` |
| giveaway_message_id | <code>number</code> | Identifier of a message in the chat with the giveaway; the message could have been deleted already. |
| user | [<code>User</code>](#User) | User that won the prize in the giveaway if any. |
| is_unclaimed | <code>boolean</code> | True, if the giveaway was completed, but there was no user to win the prize. |

<a name="ChatBoost"></a>

## ChatBoost : <code>Object</code>
contains information about a chat boost.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| boost_id | <code>string</code> | Unique identifier of the boost. |
| add_date | <code>number</code> | Point in time - Unix timestamp when the chat was boosted. |
| expiration_date | <code>number</code> | Point in time - Unix timestamp when the boost will automatically expire. |
| source | [<code>ChatBoostSource</code>](#ChatBoostSource) | Source of the added boost. |

<a name="UserChatBoosts"></a>

## UserChatBoosts : <code>Object</code>
represents a list of boosts added to a chat by a user.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| boosts | [<code>Array.&lt;ChatBoost&gt;</code>](#ChatBoost) | The list of boosts added to the chat by the user. |

<a name="ResponseParameters"></a>

## ResponseParameters : <code>Object</code>
Describes why a request was unsuccessful.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| migrate_to_chat_id | <code>number</code> | The group has been migrated to a supergroup with the specified identifier. |
| retry_after | <code>number</code> | In case of exceeding flood control, the number of seconds left to wait before the request can be repeated. |

<a name="InputMedia"></a>

## InputMedia : [<code>InputMediaAnimation</code>](#InputMediaAnimation) \| [<code>InputMediaDocument</code>](#InputMediaDocument) \| [<code>InputMediaAudio</code>](#InputMediaAudio) \| [<code>InputMediaPhoto</code>](#InputMediaPhoto) \| [<code>InputMediaVideo</code>](#InputMediaVideo)
the content of a media message to be sent.

**Kind**: global typedef  
<a name="InputMediaPhoto"></a>

## InputMediaPhoto : <code>Object</code>
a photo to be sent.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the result, Must be `photo`. |
| media | <code>string</code> | File to send. |
| [caption] | <code>string</code> | Optional. Caption of the photo. |
| [parse_mode] | <code>string</code> | Optional. Mode for parsing entities in the caption. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | Optional. Special entities in the caption. |
| [has_spoiler] | <code>boolean</code> | Optional. True if photo is a spoiler. |

<a name="InputMediaVideo"></a>

## InputMediaVideo : <code>Object</code>
a video to be sent.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the result, Must be `video`. |
| media | <code>string</code> | File to send. |
| [thumbnail] | <code>InputFile</code> \| <code>string</code> | Optional. Thumbnail of the file. |
| [caption] | <code>string</code> | Optional. Caption of the video. |
| [parse_mode] | <code>string</code> | Optional. Mode for parsing entities in the caption. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | Optional. Special entities in the caption. |
| [width] | <code>number</code> | Optional. Video width. |
| [height] | <code>number</code> | Optional. Video height. |
| [duration] | <code>number</code> | Optional. Video duration in seconds. |
| [supports_streaming] | <code>boolean</code> | Optional. True if video is suitable for streaming. |
| [has_spoiler] | <code>boolean</code> | Optional. True if video is a spoiler. |

<a name="InputMediaAnimation"></a>

## InputMediaAnimation : <code>Object</code>
an animation file GIF or H.264/MPEG-4 AVC video without sound to be sent.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the result, Must be `animation`. |
| media | <code>string</code> | File to send. |
| [thumbnail] | <code>InputFile</code> \| <code>string</code> | Optional. Thumbnail of the file. |
| [caption] | <code>string</code> | Optional. Caption of the animation. |
| [parse_mode] | <code>string</code> | Optional. Mode for parsing entities in the caption. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | Optional. Special entities in the caption. |
| [width] | <code>number</code> | Optional. Animation width. |
| [height] | <code>number</code> | Optional. Animation height. |
| [duration] | <code>number</code> | Optional. Animation duration in seconds. |
| [has_spoiler] | <code>boolean</code> | Optional. True if animation is a spoiler. |

<a name="InputMediaAudio"></a>

## InputMediaAudio : <code>object</code>
an audio file to be treated as music to be sent.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the result, must be `audio` |
| media | <code>string</code> | File to send. |
| [thumbnail] | <code>InputFile</code> \| <code>string</code> | Thumbnail of the file sent |
| [caption] | <code>string</code> | Caption of the audio to be sent |
| [parse_mode] | <code>string</code> | Mode for parsing entities in the audio caption. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in the caption |
| [duration] | <code>number</code> | Duration of the audio in seconds |
| [performer] | <code>string</code> | Performer of the audio |
| [title] | <code>string</code> | Title of the audio |

<a name="InputMediaDocument"></a>

## InputMediaDocument : <code>object</code>
a general file to be sent.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the result, must be `document` |
| media | <code>string</code> | File to send. |
| [thumbnail] | <code>InputFile</code> \| <code>string</code> | Thumbnail of the file sent. |
| [caption] | <code>string</code> | Caption of the document to be sent. |
| [parse_mode] | <code>string</code> | Mode for parsing entities in the document caption. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in the caption. |
| [disable_content_type_detection] | <code>boolean</code> | Disables automatic server-side content type detection for files uploaded using multipart/form-data. |

<a name="Sticker"></a>

## Sticker : <code>object</code>
represents a sticker.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| file_id | <code>string</code> | Identifier for this file, which can be used to download or reuse the file. |
| file_unique_id | <code>string</code> | Unique identifier for this file. |
| type | <code>string</code> | Type of the sticker, currently one of `regular`, `mask`, `custom_emoji`. |
| width | <code>number</code> | Sticker width. |
| height | <code>number</code> | Sticker height. |
| is_animated | <code>boolean</code> | True, if the sticker is animated. |
| is_video | <code>boolean</code> | True, if the sticker is a video sticker. |
| [thumbnail] | [<code>PhotoSize</code>](#PhotoSize) | Sticker thumbnail in the .WEBP or .JPG format. |
| [emoji] | <code>string</code> | Emoji associated with the sticker. |
| [set_name] | <code>string</code> | Name of the sticker set to which the sticker belongs. |
| [premium_animation] | [<code>File</code>](#File) | For premium regular stickers, premium animation for the sticker. |
| [mask_position] | [<code>MaskPosition</code>](#MaskPosition) | For mask stickers, the position where the mask should be placed. |
| [custom_emoji_id] | <code>string</code> | For custom emoji stickers, unique identifier of the custom emoji. |
| [needs_repainting] | <code>boolean</code> | True, if the sticker must be repainted to a text color in messages. |
| [file_size] | <code>number</code> | File size in bytes. |

<a name="StickerSet"></a>

## StickerSet : <code>Object</code>
a sticker set.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Sticker set name. |
| title | <code>string</code> | Sticker set title. |
| sticker_type | <code>string</code> | Type of stickers in the set. |
| is_animated | <code>boolean</code> | True if the sticker set contains animated stickers. |
| is_video | <code>boolean</code> | True if the sticker set contains video stickers. |
| stickers | [<code>Array.&lt;Sticker&gt;</code>](#Sticker) | List of all set stickers. |
| [thumbnail] | [<code>PhotoSize</code>](#PhotoSize) | Optional. Sticker set thumbnail. |

<a name="MaskPosition"></a>

## MaskPosition : <code>Object</code>
the position on faces where a mask should be placed by default.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| point | <code>string</code> | The part of the face relative to which the mask should be placed. |
| x_shift | <code>number</code> | Shift by X-axis measured in widths of the mask scaled to the face size. |
| y_shift | <code>number</code> | Shift by Y-axis measured in heights of the mask scaled to the face size. |
| scale | <code>number</code> | Mask scaling coefficient. |

<a name="InputSticker"></a>

## InputSticker : <code>Object</code>
a sticker to be added to a sticker set.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| sticker | <code>InputFile</code> \| <code>string</code> | The added sticker. |
| emoji_list | <code>Array.&lt;string&gt;</code> | List of 1-20 emoji associated with the sticker. |
| [mask_position] | [<code>MaskPosition</code>](#MaskPosition) | Optional. Position where the mask should be placed on faces. |
| [keywords] | <code>Array.&lt;string&gt;</code> | Optional. List of 0-20 search keywords for the sticker. |

<a name="InlineQueryResultsButton"></a>

## InlineQueryResultsButton : <code>Object</code>
a button to be shown above inline query results.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | Label text on the button. |
| [web_app] | [<code>WebAppInfo</code>](#WebAppInfo) | Description of the Web App. |
| [start_parameter] | <code>string</code> | Deep-linking parameter. |

<a name="InlineQueryResult"></a>

## InlineQueryResult : [<code>InlineQueryResultCachedAudio</code>](#InlineQueryResultCachedAudio) \| [<code>InlineQueryResultCachedDocument</code>](#InlineQueryResultCachedDocument) \| [<code>InlineQueryResultCachedGif</code>](#InlineQueryResultCachedGif) \| [<code>InlineQueryResultCachedMpeg4Gif</code>](#InlineQueryResultCachedMpeg4Gif) \| [<code>InlineQueryResultCachedPhoto</code>](#InlineQueryResultCachedPhoto) \| [<code>InlineQueryResultCachedSticker</code>](#InlineQueryResultCachedSticker) \| [<code>InlineQueryResultCachedVideo</code>](#InlineQueryResultCachedVideo) \| [<code>InlineQueryResultCachedVoice</code>](#InlineQueryResultCachedVoice) \| [<code>InlineQueryResultArticle</code>](#InlineQueryResultArticle) \| [<code>InlineQueryResultAudio</code>](#InlineQueryResultAudio) \| [<code>InlineQueryResultContact</code>](#InlineQueryResultContact) \| [<code>InlineQueryResultGame</code>](#InlineQueryResultGame) \| [<code>InlineQueryResultDocument</code>](#InlineQueryResultDocument) \| [<code>InlineQueryResultGif</code>](#InlineQueryResultGif) \| [<code>InlineQueryResultLocation</code>](#InlineQueryResultLocation) \| [<code>InlineQueryResultMpeg4Gif</code>](#InlineQueryResultMpeg4Gif) \| [<code>InlineQueryResultPhoto</code>](#InlineQueryResultPhoto) \| [<code>InlineQueryResultVenue</code>](#InlineQueryResultVenue) \| [<code>InlineQueryResultVideo</code>](#InlineQueryResultVideo) \| [<code>InlineQueryResultVoice</code>](#InlineQueryResultVoice)
one result of an inline query.

**Kind**: global typedef  
<a name="InlineQueryResultArticle"></a>

## InlineQueryResultArticle : <code>Object</code>
a link to an article or web page.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the result, must be `article`. |
| id | <code>string</code> | Unique identifier for this result, 1-64 Bytes. |
| title | <code>string</code> | Title of the result. |
| input_message_content | [<code>InputMessageContent</code>](#InputMessageContent) | Content of the message to be sent. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | Inline keyboard attached to the message. |
| [url] | <code>string</code> | URL of the result. |
| [hide_url] | <code>boolean</code> | Pass True if you don't want the URL to be shown in the message. |
| [description] | <code>string</code> | Short description of the result. |
| [thumbnail_url] | <code>string</code> | Url of the thumbnail for the result. |
| [thumbnail_width] | <code>number</code> | Thumbnail width. |
| [thumbnail_height] | <code>number</code> | Thumbnail height. |

<a name="InlineQueryResultPhoto"></a>

## InlineQueryResultPhoto : <code>Object</code>
a link to a photo.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the result, must be `photo`. |
| id | <code>string</code> | Unique identifier for this result, 1-64 bytes. |
| photo_url | <code>string</code> | A valid URL of the photo. Photo must be in JPEG format. Photo size must not exceed 5MB. |
| thumbnail_url | <code>string</code> | URL of the thumbnail for the photo. |
| [photo_width] | <code>number</code> | Width of the photo. |
| [photo_height] | <code>number</code> | Height of the photo. |
| [title] | <code>string</code> | Title for the result. |
| [description] | <code>string</code> | Short description of the result. |
| [caption] | <code>string</code> | Caption of the photo to be sent, 0-1024 characters after entities parsing. |
| [parse_mode] | <code>string</code> | Mode for parsing entities in the photo caption. See formatting options for more details. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in the caption. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | Inline keyboard attached to the message. |
| [input_message_content] | [<code>InputMessageContent</code>](#InputMessageContent) | Content of the message to be sent instead of the photo. |

<a name="InlineQueryResultGif"></a>

## InlineQueryResultGif : <code>Object</code>
a link to an animated GIF file.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the result, must be `gif`. |
| id | <code>string</code> | Unique identifier for this result, 1-64 bytes. |
| gif_url | <code>string</code> | A valid URL for the GIF file. File size must not exceed 1MB. |
| [gif_width] | <code>number</code> | Width of the GIF. |
| [gif_height] | <code>number</code> | Height of the GIF. |
| [gif_duration] | <code>number</code> | Duration of the GIF in seconds. |
| thumbnail_url | <code>string</code> | URL of the static JPEG or GIF or animated MPEG4 thumbnail for the result. |
| [thumbnail_mime_type] | <code>string</code> | MIME type of the thumbnail, must be one of `image/jpeg`, `image/gif`, or `video/mp4`. |
| [title] | <code>string</code> | Title for the result. |
| [caption] | <code>string</code> | Caption of the GIF file to be sent, 0-1024 characters after entities parsing. |
| [parse_mode] | <code>string</code> | Mode for parsing entities in the caption. See formatting options for more details. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in the caption. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | Inline keyboard attached to the message. |
| [input_message_content] | [<code>InputMessageContent</code>](#InputMessageContent) | Content of the message to be sent instead of the GIF animation. |

<a name="InlineQueryResultMpeg4Gif"></a>

## InlineQueryResultMpeg4Gif : <code>Object</code>
a link to a video animation H.264/MPEG-4 AVC video without sound.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the result, must be mpeg4_gif |
| id | <code>string</code> | Unique identifier for this result, 1-64 bytes |
| mpeg4_url | <code>string</code> | A valid URL for the MPEG4 file. File size must not exceed 1MB |
| [mpeg4_width] | <code>number</code> | Video width |
| [mpeg4_height] | <code>number</code> | Video height |
| [mpeg4_duration] | <code>number</code> | Video duration in seconds |
| thumbnail_url | <code>string</code> | URL of the static JPEG or GIF or animated MPEG4 thumbnail for the result |
| [thumbnail_mime_type] | <code>string</code> | MIME type of the thumbnail, must be one of `image/jpeg`, `image/gif`, or `video/mp4`. Defaults to `image/jpeg` |
| [title] | <code>string</code> | Title for the result. |
| [caption] | <code>string</code> | Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing. |
| [parse_mode] | <code>string</code> | Mode for parsing entities in the caption. See formatting options for more details. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in the caption. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | Inline keyboard attached to the message. |
| [input_message_content] | [<code>InputMessageContent</code>](#InputMessageContent) | Content of the message to be sent instead of the video animation. |

<a name="InlineQueryResultVideo"></a>

## InlineQueryResultVideo : <code>Object</code>
a link to a page containing an embedded video player or a video file.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the result, must be `video`. |
| id | <code>string</code> | Unique identifier for this result, 1-64 bytes. |
| video_url | <code>string</code> | A valid URL for the embedded video player or video file. |
| mime_type | <code>string</code> | MIME type of the content of the video URL, `text/html` or `video/mp4`. |
| thumbnail_url | <code>string</code> | URL of the thumbnail JPEG only for the video. |
| title | <code>string</code> | Title for the result. |
| [caption] | <code>string</code> | Caption of the video to be sent, 0-1024 characters after entities parsing. |
| [parse_mode] | <code>string</code> | Mode for parsing entities in the video caption. See formatting options for more details. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in the caption. |
| [video_width] | <code>number</code> | Video width. |
| [video_height] | <code>number</code> | Video height. |
| [video_duration] | <code>number</code> | Video duration in seconds. |
| [description] | <code>string</code> | Short description of the result. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | Inline keyboard attached to the message. |
| [input_message_content] | [<code>InputMessageContent</code>](#InputMessageContent) | Content of the message to be sent instead of the video. |

<a name="InlineQueryResultAudio"></a>

## InlineQueryResultAudio : <code>Object</code>
a link to an MP3 audio file.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the result, must be `audio`. |
| id | <code>string</code> | Unique identifier for this result, 1-64 bytes. |
| audio_url | <code>string</code> | A valid URL for the audio file. |
| title | <code>string</code> | Title. |
| [caption] | <code>string</code> | Caption, 0-1024 characters after entities parsing. |
| [parse_mode] | <code>string</code> | Mode for parsing entities in the audio caption. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in the caption. |
| [performer] | <code>string</code> | Performer. |
| [audio_duration] | <code>number</code> | Audio duration in seconds. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | Inline keyboard attached to the message. |
| [input_message_content] | [<code>InputMessageContent</code>](#InputMessageContent) | Content of the message to be sent instead of the audio. |

<a name="InlineQueryResultVoice"></a>

## InlineQueryResultVoice : <code>Object</code>
a link to a voice recording in an .OGG container encoded with OPUS.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the result, must be `voice`. |
| id | <code>string</code> | Unique identifier for this result, 1-64 bytes. |
| voice_url | <code>string</code> | A valid URL for the voice recording. |
| title | <code>string</code> | Recording title. |
| [caption] | <code>string</code> | Caption, 0-1024 characters after entities parsing. |
| [parse_mode] | <code>string</code> | Mode for parsing entities in the voice message caption. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in the caption. |
| [voice_duration] | <code>number</code> | Recording duration in seconds. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | Inline keyboard attached to the message. |
| [input_message_content] | [<code>InputMessageContent</code>](#InputMessageContent) | Content of the message to be sent instead of the voice recording. |

<a name="InlineQueryResultDocument"></a>

## InlineQueryResultDocument : <code>Object</code>
a link to a file.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the result, must be `document`. |
| id | <code>string</code> | Unique identifier for this result, 1-64 bytes. |
| title | <code>string</code> | Title for the result. |
| [caption] | <code>string</code> | Caption of the document to be sent, 0-1024 characters after entities parsing. |
| [parse_mode] | <code>string</code> | Mode for parsing entities in the document caption. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in the caption. |
| document_url | <code>string</code> | A valid URL for the file. |
| mime_type | <code>string</code> | MIME type of the content of the file, either `application/pdf` or `application/zip`. |
| [description] | <code>string</code> | Short description of the result. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | Inline keyboard attached to the message. |
| [input_message_content] | [<code>InputMessageContent</code>](#InputMessageContent) | Content of the message to be sent instead of the file. |
| [thumbnail_url] | <code>string</code> | URL of the thumbnail JPEG only for the file. |
| [thumbnail_width] | <code>number</code> | Thumbnail width. |
| [thumbnail_height] | <code>number</code> | Thumbnail height. |

<a name="InlineQueryResultLocation"></a>

## InlineQueryResultLocation : <code>Object</code>
a location on a map.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the result, must be location. |
| id | <code>string</code> | Unique identifier for this result, 1-64 Bytes. |
| latitude | <code>number</code> | Location latitude in degrees. |
| longitude | <code>number</code> | Location longitude in degrees. |
| title | <code>string</code> | Location title. |
| [horizontal_accuracy] | <code>number</code> | The radius of uncertainty for the location, measured in meters; 0-1500. |
| [live_period] | <code>number</code> | Period in seconds for which the location can be updated, should be between 60 and 86400. |
| [heading] | <code>number</code> | For live locations, a direction in which the user is moving, in degrees. |
| [proximity_alert_radius] | <code>number</code> | For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | Inline keyboard attached to the message. |
| [input_message_content] | [<code>InputMessageContent</code>](#InputMessageContent) | Content of the message to be sent instead of the location. |
| [thumbnail_url] | <code>string</code> | Url of the thumbnail for the result. |
| [thumbnail_width] | <code>number</code> | Thumbnail width. |
| [thumbnail_height] | <code>number</code> | Thumbnail height. |

<a name="InlineQueryResultVenue"></a>

## InlineQueryResultVenue : <code>Object</code>
a venue. By default, the venue will be sent by the user.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Must be `venue`. |
| id | <code>string</code> | Unique identifier, 1-64 bytes. |
| latitude | <code>number</code> | Latitude of the venue. |
| longitude | <code>number</code> | Longitude of the venue. |
| title | <code>string</code> | Title of the venue. |
| address | <code>string</code> | Address of the venue. |
| [foursquare_id] | <code>string</code> | Optional. Foursquare ID of the venue. |
| [foursquare_type] | <code>string</code> | Optional. Foursquare type of the venue. |
| [google_place_id] | <code>string</code> | Optional. Google Places ID of the venue. |
| [google_place_type] | <code>string</code> | Optional. Google Places type of the venue. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | Optional. Inline keyboard attached to the message. |
| [input_message_content] | [<code>InputMessageContent</code>](#InputMessageContent) | Optional. Content to be sent instead of the venue. |
| [thumbnail_url] | <code>string</code> | Optional. URL of the result's thumbnail. |
| [thumbnail_width] | <code>number</code> | Optional. Thumbnail width. |
| [thumbnail_height] | <code>number</code> | Optional. Thumbnail height. |

<a name="InlineQueryResultContact"></a>

## InlineQueryResultContact : <code>Object</code>
a contact with a phone number.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Must be `contact`. |
| id | <code>string</code> | Unique identifier, 1-64 bytes. |
| phone_number | <code>string</code> | Contact's phone number. |
| first_name | <code>string</code> | Contact's first name. |
| [last_name] | <code>string</code> | Optional. Contact's last name. |
| [vcard] | <code>string</code> | Optional. VCard of the contact. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | Optional. Inline keyboard attached to the message. |
| [input_message_content] | [<code>InputMessageContent</code>](#InputMessageContent) | Optional. Content to be sent instead of the contact. |
| [thumbnail_url] | <code>string</code> | Optional. URL of the result's thumbnail. |
| [thumbnail_width] | <code>number</code> | Optional. Thumbnail width. |
| [thumbnail_height] | <code>number</code> | Optional. Thumbnail height. |

<a name="InlineQueryResultGame"></a>

## InlineQueryResultGame : <code>Object</code>
a Game.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Must be `game`. |
| id | <code>string</code> | Unique identifier, 1-64 bytes. |
| game_short_name | <code>string</code> | Short name of the game. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | Optional. Inline keyboard attached to the message. |

<a name="InlineQueryResultCachedPhoto"></a>

## InlineQueryResultCachedPhoto : <code>Object</code>
a link to a photo stored on the Telegram servers.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the result, must be photo. |
| id | <code>string</code> | Unique identifier for this result, 1-64 bytes. |
| photo_file_id | <code>string</code> | A valid file identifier of the photo. |
| [title] | <code>string</code> | Title for the result. |
| [description] | <code>string</code> | Short description of the result. |
| [caption] | <code>string</code> | Caption of the photo to be sent, 0-1024 characters after entities parsing. |
| [parse_mode] | <code>string</code> | Mode for parsing entities in the photo caption. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in the caption. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | Inline keyboard attached to the message. |
| [input_message_content] | [<code>InputMessageContent</code>](#InputMessageContent) | Content of the message to be sent instead of the photo. |

<a name="InlineQueryResultCachedGif"></a>

## InlineQueryResultCachedGif : <code>Object</code>
a link to an animated GIF file stored on the Telegram servers.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the result, must be `gif` |
| id | <code>string</code> | Unique identifier for this result, 1-64 bytes |
| gif_file_id | <code>string</code> | A valid file identifier for the GIF file |
| [title] | <code>string</code> | Title for the result |
| [caption] | <code>string</code> | Caption of the GIF file to be sent, 0-1024 characters after entities parsing |
| [parse_mode] | <code>string</code> | Mode for parsing entities in the caption. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in the caption. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | Inline keyboard attached to the message. |
| [input_message_content] | [<code>InputMessageContent</code>](#InputMessageContent) | Content of the message to be sent instead of the GIF animation. |

<a name="InlineQueryResultCachedMpeg4Gif"></a>

## InlineQueryResultCachedMpeg4Gif : <code>Object</code>
a link to a video animation H.264/MPEG-4 AVC video without sound stored on the Telegram servers.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the result, must be `mpeg4_gif`. |
| id | <code>string</code> | Unique identifier for this result, 1-64 bytes. |
| mpeg4_file_id | <code>string</code> | A valid file identifier for the MPEG4 file. |
| [title] | <code>string</code> | Title for the result. |
| [caption] | <code>string</code> | Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing. |
| [parse_mode] | <code>string</code> | Mode for parsing entities in the caption. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in the caption. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | Inline keyboard attached to the message. |
| [input_message_content] | [<code>InputMessageContent</code>](#InputMessageContent) | Content of the message to be sent instead of the video animation. |

<a name="InlineQueryResultCachedSticker"></a>

## InlineQueryResultCachedSticker : <code>Object</code>
a link to a sticker stored on the Telegram servers.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of the result, must be `sticker` |
| id | <code>string</code> | Unique identifier for this result. |
| sticker_file_id | <code>string</code> | A valid file identifier of the sticker. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | Inline keyboard attached to the message. |
| [input_message_content] | [<code>InputMessageContent</code>](#InputMessageContent) | Content of the message to be sent instead of the sticker. |

<a name="InlineQueryResultCachedDocument"></a>

## InlineQueryResultCachedDocument : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of the result, must be `document` |
| id | <code>string</code> | Unique identifier for this result. |
| title | <code>string</code> | Title for the result. |
| document_file_id | <code>string</code> | A valid file identifier for the file. |
| [description] | <code>string</code> | Short description of the result. |
| [caption] | <code>string</code> | Caption of the document to be sent. |
| [parse_mode] | <code>string</code> | Mode for parsing entities in the document caption. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in the caption. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | Inline keyboard attached to the message. |
| [input_message_content] | [<code>InputMessageContent</code>](#InputMessageContent) | Content of the message to be sent instead of the file. |

<a name="InlineQueryResultCachedVideo"></a>

## InlineQueryResultCachedVideo : <code>Object</code>
a link to a video file stored on the Telegram servers.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of the result, must be `video` |
| id | <code>string</code> | Unique identifier for this result. |
| video_file_id | <code>string</code> | A valid file identifier for the video file. |
| title | <code>string</code> | Title for the result. |
| [description] | <code>string</code> | Short description of the result. |
| [caption] | <code>string</code> | Caption of the video to be sent. |
| [parse_mode] | <code>string</code> | Mode for parsing entities in the video caption. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities that appear in the caption. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | Inline keyboard attached to the message. |
| [input_message_content] | [<code>InputMessageContent</code>](#InputMessageContent) | Content of the message to be sent instead of the video. |

<a name="InlineQueryResultCachedVoice"></a>

## InlineQueryResultCachedVoice : <code>Object</code>
a link to a voice message stored on the Telegram servers.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the result, must be `voice`. |
| id | <code>string</code> | Unique identifier for this result, 1-64 bytes. |
| voice_file_id | <code>string</code> | A valid file identifier for the voice message. |
| title | <code>string</code> | Voice message title. |
| [caption] | <code>string</code> | Optional. Caption, 0-1024 characters after entities parsing. |
| [parse_mode] | <code>string</code> | Optional. Mode for parsing entities in the caption. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | Optional. List of special entities in the caption. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | Optional. Inline keyboard attached to the message. |
| [input_message_content] | [<code>InputMessageContent</code>](#InputMessageContent) | Optional. Content of the message to be sent instead of the voice message. |

<a name="InlineQueryResultCachedAudio"></a>

## InlineQueryResultCachedAudio : <code>Object</code>
a link to an MP3 audio file stored on the Telegram servers.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the result, must be `audio`. |
| id | <code>string</code> | Unique identifier for this result, 1-64 bytes. |
| audio_file_id | <code>string</code> | A valid file identifier for the audio file. |
| [caption] | <code>string</code> | Optional. Caption, 0-1024 characters after entities parsing. |
| [parse_mode] | <code>string</code> | Optional. Mode for parsing entities in the caption. |
| [caption_entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | Optional. List of special entities in the caption. |
| [reply_markup] | [<code>InlineKeyboardMarkup</code>](#InlineKeyboardMarkup) | Optional. Inline keyboard attached to the message. |
| [input_message_content] | [<code>InputMessageContent</code>](#InputMessageContent) | Optional. Content of the message to be sent instead of the audio. |

<a name="InputMessageContent"></a>

## InputMessageContent : [<code>InputTextMessageContent</code>](#InputTextMessageContent) \| [<code>InputLocationMessageContent</code>](#InputLocationMessageContent) \| [<code>InputVenueMessageContent</code>](#InputVenueMessageContent) \| [<code>InputContactMessageContent</code>](#InputContactMessageContent) \| [<code>InputInvoiceMessageContent</code>](#InputInvoiceMessageContent)
the content of a message to be sent as a result of an inline query.

**Kind**: global typedef  
<a name="InputTextMessageContent"></a>

## InputTextMessageContent : <code>Object</code>
the content of a text message to be sent as the result of an inline query.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| message_text | <code>string</code> | Text of the message to be sent. |
| [parse_mode] | <code>string</code> | Mode for parsing entities in the message text. |
| [entities] | [<code>Array.&lt;MessageEntity&gt;</code>](#MessageEntity) | List of special entities in message text. |
| [link_preview_options] | [<code>LinkPreviewOptions</code>](#LinkPreviewOptions) | Link preview generation options. |

<a name="InputLocationMessageContent"></a>

## InputLocationMessageContent : <code>Object</code>
the content of a location message to be sent as the result of an inline query.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| latitude | <code>number</code> | Latitude of the location. |
| longitude | <code>number</code> | Longitude of the location. |
| [horizontal_accuracy] | <code>number</code> | The radius of uncertainty for the location. |
| [live_period] | <code>number</code> | Period for which the location can be updated. |
| [heading] | <code>number</code> | Direction in which the user is moving. |
| [proximity_alert_radius] | <code>number</code> | Maximum distance for proximity alerts. |

<a name="InputVenueMessageContent"></a>

## InputVenueMessageContent : <code>Object</code>
the content of a venue message to be sent as the result of an inline query.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| latitude | <code>number</code> | Latitude of the venue. |
| longitude | <code>number</code> | Longitude of the venue. |
| title | <code>string</code> | Name of the venue. |
| address | <code>string</code> | Address of the venue. |
| [foursquare_id] | <code>string</code> | Foursquare identifier of the venue. |
| [foursquare_type] | <code>string</code> | Foursquare type of the venue, if known. For example, `arts_entertainment/default`, `arts_entertainment/aquarium` or `food/icecream`. |
| [google_place_id] | <code>string</code> | Google Places identifier of the venue. |
| [google_place_type] | <code>string</code> | Google Places type of the venue. |

<a name="InputContactMessageContent"></a>

## InputContactMessageContent : <code>Object</code>
the content of a contact message to be sent as the result of an inline query.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| phone_number | <code>string</code> | Contact's phone number. |
| first_name | <code>string</code> | Contact's first name. |
| [last_name] | <code>string</code> | Contact's last name. |
| [vcard] | <code>string</code> | Additional data about the contact in the form of a vCard. |

<a name="InputInvoiceMessageContent"></a>

## InputInvoiceMessageContent : <code>Object</code>
the content of an invoice message to be sent as the result of an inline query.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Product name. |
| description | <code>string</code> | Product description. |
| payload | <code>string</code> | Bot-defined invoice payload. |
| provider_token | <code>string</code> | Payment provider token. |
| currency | <code>string</code> | Three-letter ISO 4217 currency code. |
| prices | [<code>Array.&lt;LabeledPrice&gt;</code>](#LabeledPrice) | Price breakdown. |
| [max_tip_amount] | <code>number</code> | The maximum accepted amount for tips. |
| [suggested_tip_amounts] | <code>Array.&lt;number&gt;</code> | Suggested amounts of tip. |
| [provider_data] | <code>string</code> | Data about the invoice for the payment provider. |
| [photo_url] | <code>string</code> | URL of the product photo for the invoice. |
| [photo_size] | <code>number</code> | Photo size in bytes. |
| [photo_width] | <code>number</code> | Photo width. |
| [photo_height] | <code>number</code> | Photo height. |
| [need_name] | <code>boolean</code> | If the user's full name is required. |
| [need_phone_number] | <code>boolean</code> | If the user's phone number is required. |
| [need_email] | <code>boolean</code> | If the user's email address is required. |
| [need_shipping_address] | <code>boolean</code> | If the user's shipping address is required. |
| [send_phone_number_to_provider] | <code>boolean</code> | If the user's phone number should be sent to the provider. |
| [send_email_to_provider] | <code>boolean</code> | If the user's email address should be sent to the provider. |
| [is_flexible] | <code>boolean</code> | If the final price depends on the shipping method. |

<a name="SentWebAppMessage"></a>

## SentWebAppMessage : <code>Object</code>
an inline message sent by a Web App on behalf of a user.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [inline_message_id] | <code>string</code> | Identifier of the sent inline message. |

<a name="answerShippingQuery"></a>

## answerShippingQuery : <code>Object</code>
If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| shipping_query_id | <code>string</code> | Unique identifier for the query. |
| ok | <code>boolean</code> | True if delivery is possible, False otherwise. |
| [shipping_options] | [<code>Array.&lt;ShippingOption&gt;</code>](#ShippingOption) | Available shipping options. |
| [error_message] | <code>string</code> | Error message if delivery is not possible. |

<a name="answerPreCheckoutQuery"></a>

## answerPreCheckoutQuery : <code>Object</code>
Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| pre_checkout_query_id | <code>string</code> | Unique identifier for the query. |
| ok | <code>boolean</code> | True if order can proceed, False otherwise. |
| [error_message] | <code>string</code> | Error message if order cannot proceed. |

<a name="LabeledPrice"></a>

## LabeledPrice : <code>Object</code>
a portion of the price for goods or services.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | Portion label. |
| amount | <code>number</code> | Price of the product in the smallest units of the currency. |

<a name="ShippingAddress"></a>

## ShippingAddress : <code>Object</code>
a shipping address.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| country_code | <code>string</code> | Two-letter ISO 3166-1 alpha-2 country code. |
| state | <code>string</code> | State, if applicable. |
| city | <code>string</code> | City. |
| street_line1 | <code>string</code> | First line for the address. |
| street_line2 | <code>string</code> | Second line for the address. |
| post_code | <code>string</code> | Address post code. |

<a name="OrderInfo"></a>

## OrderInfo : <code>Object</code>
information about an order.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | User name. |
| [phone_number] | <code>string</code> | User's phone number. |
| [email] | <code>string</code> | User email. |
| [shipping_address] | [<code>ShippingAddress</code>](#ShippingAddress) | User shipping address. |

<a name="ShippingOption"></a>

## ShippingOption : <code>Object</code>
one shipping option.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Shipping option identifier. |
| title | <code>string</code> | Option title. |
| prices | [<code>Array.&lt;LabeledPrice&gt;</code>](#LabeledPrice) | List of price portions. |

<a name="PassportData"></a>

## PassportData : <code>Object</code>
Telegram Passport data shared with the bot by the user.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | [<code>Array.&lt;EncryptedPassportElement&gt;</code>](#EncryptedPassportElement) | Array with information about documents and other Telegram Passport elements. |
| credentials | [<code>EncryptedCredentials</code>](#EncryptedCredentials) | Encrypted credentials. |

<a name="PassportFile"></a>

## PassportFile : <code>Object</code>
a file uploaded to Telegram Passport.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| file_id | <code>string</code> | Identifier for this file. |
| file_unique_id | <code>string</code> | Unique identifier for this file. |
| file_size | <code>number</code> | File size in bytes. |
| file_date | <code>number</code> | Unix time when the file was uploaded. |

<a name="EncryptedPassportElement"></a>

## EncryptedPassportElement : <code>Object</code>
documents or other Telegram Passport elements shared with the bot by the user.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Element type. |
| [data] | <code>string</code> | Base64-encoded encrypted data. |
| [phone_number] | <code>string</code> | User's verified phone number. |
| [email] | <code>string</code> | User's verified email address. |
| [files] | [<code>Array.&lt;PassportFile&gt;</code>](#PassportFile) | Array of encrypted files with documents. |
| [front_side] | [<code>PassportFile</code>](#PassportFile) | Encrypted file with the front side of the document. |
| [reverse_side] | [<code>PassportFile</code>](#PassportFile) | Encrypted file with the reverse side of the document. |
| [selfie] | [<code>PassportFile</code>](#PassportFile) | Encrypted file with the selfie of the user holding a document. |
| [translation] | [<code>Array.&lt;PassportFile&gt;</code>](#PassportFile) | Array of encrypted files with translated versions of documents. |
| hash | <code>string</code> | Base64-encoded element hash. |

<a name="EncryptedCredentials"></a>

## EncryptedCredentials : <code>Object</code>
data required for decrypting and authenticating EncryptedPassportElement.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>string</code> | Base64-encoded encrypted JSON-serialized data. |
| hash | <code>string</code> | Base64-encoded data hash for authentication. |
| secret | <code>string</code> | Base64-encoded secret for data decryption. |

<a name="PassportElementErrorDataField"></a>

## PassportElementErrorDataField : <code>Object</code>
an issue in one of the data fields that was provided by the user.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Error source, must be `data`. |
| type | <code>string</code> | Section of the user's Telegram Passport which has the error. |
| field_name | <code>string</code> | Name of the data field which has the error. |
| data_hash | <code>string</code> | Base64-encoded data hash. |
| message | <code>string</code> | Error message. |

<a name="PassportElementErrorFrontSide"></a>

## PassportElementErrorFrontSide : <code>Object</code>
an issue with the front side of a document.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Error source, must be `front_side`. |
| type | <code>string</code> | Section of the user's Telegram Passport which has the issue. |
| file_hash | <code>string</code> | Base64-encoded hash of the file with the front side. |
| message | <code>string</code> | Error message. |

<a name="PassportElementError"></a>

## PassportElementError : [<code>PassportElementErrorDataField</code>](#PassportElementErrorDataField) \| [<code>PassportElementErrorFrontSide</code>](#PassportElementErrorFrontSide) \| [<code>PassportElementErrorReverseSide</code>](#PassportElementErrorReverseSide) \| [<code>PassportElementErrorSelfie</code>](#PassportElementErrorSelfie) \| [<code>PassportElementErrorFile</code>](#PassportElementErrorFile) \| [<code>PassportElementErrorFiles</code>](#PassportElementErrorFiles) \| [<code>PassportElementErrorTranslationFile</code>](#PassportElementErrorTranslationFile) \| [<code>PassportElementErrorTranslationFiles</code>](#PassportElementErrorTranslationFiles) \| [<code>PassportElementErrorUnspecified</code>](#PassportElementErrorUnspecified)
an error in the Telegram Passport element which was submitted that should be resolved by the user.

**Kind**: global typedef  
<a name="PassportElementErrorReverseSide"></a>

## PassportElementErrorReverseSide : <code>Object</code>
an issue with the reverse side of a document.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Error source, must be `reverse_side`. |
| type | <code>string</code> | The section of the user's Telegram Passport which has the issue, one of `driver_license`, `identity_card`. |
| file_hash | <code>string</code> | Base64-encoded hash of the file with the reverse side of the document. |
| message | <code>string</code> | Error message. |

<a name="PassportElementErrorSelfie"></a>

## PassportElementErrorSelfie : <code>Object</code>
an issue with the selfie with a document.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Error source, must be `selfie` |
| type | <code>string</code> | The section of the user's Telegram Passport which has the issue, one of `passport`, `driver_license`, `identity_card`, `internal_passport`. |
| file_hash | <code>string</code> | Base64-encoded hash of the file with the selfie. |
| message | <code>string</code> | Error message. |

<a name="PassportElementErrorFile"></a>

## PassportElementErrorFile : <code>Object</code>
an issue with a document scan.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Error source, must be `file` |
| type | <code>string</code> | The section of the user's Telegram Passport which has the issue, one of `utility_bill`, `bank_statement`, `rental_agreement`, `passport_registration`, `temporary_registration`. |
| file_hash | <code>string</code> | Base64-encoded file hash. |
| message | <code>string</code> | Error message |

<a name="PassportElementErrorFiles"></a>

## PassportElementErrorFiles : <code>Object</code>
an issue with a list of scans.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Error source, must be `files` |
| type | <code>string</code> | The section of the user's Telegram Passport which has the issue, one of `utility_bill`, `bank_statement`, `rental_agreement`, `passport_registration`, `temporary_registration`. |
| file_hashes | <code>Array.&lt;string&gt;</code> | List of base64-encoded file hashes. |
| message | <code>string</code> | Error message. |

<a name="PassportElementErrorTranslationFile"></a>

## PassportElementErrorTranslationFile : <code>Object</code>
an issue with one of the files that constitute the translation of a document.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Error source, must be `translation_file`. |
| type | <code>string</code> | Type of Telegram Passport element with the issue. |
| file_hash | <code>string</code> | Base64-encoded file hash. |
| message | <code>string</code> | Error message. |

<a name="PassportElementErrorTranslationFiles"></a>

## PassportElementErrorTranslationFiles : <code>Object</code>
an issue with the translated version of a document.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Error source, must be `translation_files`. |
| type | <code>string</code> | Type of Telegram Passport element with the issue. |
| file_hashes | <code>Array.&lt;string&gt;</code> | List of base64-encoded file hashes. |
| message | <code>string</code> | Error message. |

<a name="PassportElementErrorUnspecified"></a>

## PassportElementErrorUnspecified : <code>Object</code>
an issue in an unspecified place.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | Error source, must be `unspecified`. |
| type | <code>string</code> | Type of Telegram Passport element with the issue. |
| element_hash | <code>string</code> | Base64-encoded element hash. |
| message | <code>string</code> | Error message. |

<a name="GameHighScore"></a>

## GameHighScore : <code>Object</code>
one row of the high scores table for a game.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| position | <code>number</code> | Position in high score table for the game. |
| user | [<code>User</code>](#User) | User. |
| score | <code>number</code> | Score. |

<a name="SheetOperations"></a>

## SheetOperations : <code>Object</code>
sheet operations.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| appendRow | <code>function</code> | Adds a new row to the end of the sheet. |
| clear | <code>function</code> | Clears the entire sheet. |
| clearByRange | <code>function</code> | Clears a specific range in the sheet. |
| clearValue | <code>function</code> | Clears the content of a specific cell. |
| findOne | <code>function</code> | Finds the next cell matching the query. |
| findAll | <code>function</code> | Finds all cells matching the query. |
| deleteColumn | <code>function</code> | Deletes a specific column. |
| deleteColumns | <code>function</code> | Deletes a specific number of columns starting from the given index. |
| deleteRow | <code>function</code> | Deletes a specific row. |
| deleteRows | <code>function</code> | Deletes a specific number of rows starting from the given index. |
| getSheetData | <code>function</code> | Gets all data from the sheet. |
| getLastColumn | <code>function</code> | Gets the last column that has content. |
| getLastRow | <code>function</code> | Gets the last row that has content. |
| insertColumnAfter | <code>function</code> | Inserts a column after the specified column index. |
| insertColumnBefore | <code>function</code> | Inserts a column before the specified column index. |
| insertColumns | <code>function</code> | Inserts the specified number of columns at the specified column index. |
| insertColumnsAfter | <code>function</code> | Inserts the specified number of columns after a given position. |
| insertColumnsBefore | <code>function</code> | Inserts the specified number of columns before a given position. |
| insertRowAfter | <code>function</code> | Inserts a row after the specified row index. |
| insertRowBefore | <code>function</code> | Inserts a row before the specified row index. |
| insertRows | <code>function</code> | Inserts the specified number of rows at the specified row index. |
| insertRowsAfter | <code>function</code> | Inserts the specified number of rows after a given position. |
| insertRowsBefore | <code>function</code> | Inserts the specified number of rows before a given position. |
| moveColumns | <code>function</code> | Moves a column from one position to another. |
| moveRows | <code>function</code> | Moves a row from one position to another. |
| setName | <code>function</code> | Sets the name of the sheet. |
| sortByColumn | <code>function</code> | Sorts the sheet based on the specified column. |
| saveOne | <code>function</code> | Saves a single value to a specified cell. |
| saveMany | <code>function</code> | Saves a range of values to the specified area. |
| getValue | <code>function</code> | Gets the value of a specific cell. |
| getValues | <code>function</code> | Gets values from a specified range. |

