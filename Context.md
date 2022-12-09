## **Context** (`ctx`)

ctx is a Telesun globally passed parametr to callback functions and you can access as [**Bot..**]()

ctx is an `object` containing :

> - `{...}` means optional parameter's

```js
  /**
   * @returns full api content of updated message
  */
  ctx.api

  /**
   * @returns message content from updated api body
  */
  ctx.message()

  /**
   * @returns chat content from updated api body
  */
  ctx.chat()

  /**
   * @returns from content from updated api body
  */
  ctx.from()

  /**
   * @returns Saved Stage of active user
  */
  ctx.getStage()

  /**
   * save stage of active user
   * @param {string|number}
  */
  ctx.setStage(stage)

  /**
   * A simple method for testing your bot's authentication token
   * @returns basic information about the bot in form of a User object
   *
  */
  ctx.getMe()

  /**
   * Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Requires no parameters.
   *
   * @Returns True on success
   */
  ctx.logOut()

   /**
   * Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Requires no parameters.
   *
   * @Returns True on success
   */
  ctx.close()

    /**
   * Use this method to send text messages.
   *
   * https://core.telegram.org/bots/api#sendmessage
   *
   * @param {object} Param - Object Parameter to send message
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {string} Param.text - Text of the message to be sent, 1-4096 characters after entities parsing
   * @param {number} [Param.message_thread_id] - Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   * @param {object} [Param.reply_markup] - object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user
   * @param {string} [Param.parse_mode] - Mode for parsing entities in the message text
   * @param {object} [Param.entities] - list of special entities that appear in message text, which can be specified instead of parse_mode
   * @param {boolean} [Param.disable_web_page_preview] - Disables link previews for links in this message
   * @param {boolean} [Param.disable_notification] - Sends the message silently. Users will receive a notification with no sound
   * @param {boolean} [Param.protect_content] - Protects the contents of the sent message from forwarding and saving
   * @param {number} [Param.reply_to_message_id] - If the message is a reply, ID of the original message
   * @param {boolean} [Param.allow_sending_without_reply] - Pass True, if the message should be sent even if the specified replied-to message is not found
   * @returns the sent Message
   */
  ctx.sendMessage({chat_id:?,text:?,...})

    /**
   * Use this method to forward messages of any kind. Service messages can't be forwarded
   *
   * https://core.telegram.org/bots/api#forwardmessage
   *
   * @param {object} Param - Object Parameter to forward message
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target
   * @param {string} Param.from_chat_id - Unique identifier for the chat where the original message was sent
   * @param {number} Param.message_id - Message identifier in the chat specified in from_chat_id
   * @param {number} [Param.message_thread_id] - Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   * @param {boolean} [Param.disable_notification] - Sends the message silently. Users will receive a notification with no sound
   * @param {boolean} [Param.protect_content] - Protects the contents of the forwarded message from forwarding and saving
   * @returns the sent Message
   */
  ctx.forwardMessage({chat_id:?, from_chat_id:?, message_id:?,...})

   /**
   * Use this method to copy messages of any kind. Service messages and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message
   *
   * https://core.telegram.org/bots/api#copymessage
   *
   * @param {object} Param - Object Parameter to copy message
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target
   * @param {string} Param.from_chat_id - Unique identifier for the chat where the original message was sent (or channel username
   * @param {number} Param.message_id - Message identifier in the chat specified in from_chat_id
   * @param {number} [Param.message_thread_id] - Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   * @param {object} [Param.reply_markup] - object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user
   * @param {string} [Param.caption] - New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept
   * @param {string} [Param.parse_mode] - Mode for parsing entities in the new caption
   * @param {object} [Param.caption_entities] - list of special entities that appear in the new caption
   * @param {boolean} [Param.disable_notification] - Sends the message silently. Users will receive a notification with no sound
   * @param {boolean} [Param.protect_content] - Protects the contents of the sent message from forwarding and saving
   * @param {number} [Param.reply_to_message_id] - If the message is a reply, ID of the original message
   * @param {boolean} [Param.allow_sending_without_reply] - Pass True if the message should be sent even if the specified replied-to message is not found
   * @Returns the MessageId of the sent message
   */
  ctx.copyMessage({chat_id:?, from_chat_id:?,...})

    /**
   * use this method to send photos
   *
   * https://core.telegram.org/bots/api#sendphoto
   *
   * @param {object} Param - Object Parameter to send photo
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {string} Param.photo - Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20
   * @param {number} [Param.message_thread_id] - Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   * @param {string} [Param.parse_mode] - Mode for parsing entities in the photo caption
   * @param {string} [Param.caption] - Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing
   * @param {object} [Param.reply_markup] - object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user
   * @param {object} [Param.caption_entities] - list of special entities that appear in the caption, which can be specified instead of parse_mode
   * @param {boolean} [Param.disable_notification] - Sends the message silently. Users will receive a notification with no sound
   * @param {boolean} [Param.protect_content] - Protects the contents of the sent message from forwarding and saving
   * @param {number} [Param.reply_to_message_id] - If the message is a reply, ID of the original message
   * @param {boolean} [Param.allow_sending_without_reply] - Pass True if the message should be sent even if the specified replied-to message is not found
   * @returns the sent Message
   */
  ctx.sendPhoto({chat_id:?,photo:?,...})

  /**
   * Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future
   *
   * https://core.telegram.org/bots/api#sendaudio
   * @param {object} Param - Object Parameter to send Audio
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {string} Param.audio - Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data
   * @param {number} [Param.message_thread_id] - Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   * @param {string} [Param.caption] - Audio caption, 0-1024 characters after entities parsing
   * @param {string} [Param.parse_mode] - Mode for parsing entities in the audio caption
   * @param {object} [Param.reply_markup] - object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user
   * @param {object} [Param.caption_entities] - list of special entities that appear in the caption, which can be specified instead of parse_mode
   * @param {number} [Param.duration] - Duration of the audio in seconds
   * @param {string} [Param.performer] - Performer
   * @param {string} [Param.title] - Track name
   * @param {string} [Param.thumb] - Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>
   * @param {boolean} [Param.disable_notification] - Sends the message silently. Users will receive a notification with no sound
   * @param {boolean} [Param.protect_content] - Protects the contents of the sent message from forwarding and saving
   * @param {number} [Param.reply_to_message_id] - If the message is a reply, ID of the original message
   * @param {boolean} [Param.allow_sending_without_reply] - Pass True if the message should be sent even if the specified replied-to message is not found
   * @returns the sent Message
   */
  ctx.sendAudio({chat_id:?, audio:?,...})

   /**
   * Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future
   *
   * https://core.telegram.org/bots/api#senddocument
   * @param {object} Param - Object Parameter to send Document
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {string} Param.document - File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data
   * @param {number} [Param.message_thread_id] - Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   * @param {string} [Param.thumb] - Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under
   * @param {string} [Param.caption] - Document caption (may also be used when resending documents by file_id), 0-1024 characters after entities parsing
   * @param {string} [Param.parse_mode] - Mode for parsing entities in the document caption
   * @param {object} [Param.reply_markup] - object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user
   * @param {object} [Param.caption_entities] - list of special entities that appear in the caption, which can be specified instead of parse_mode
   * @param {boolean} [Param.disable_content_type_detection] - Disables automatic server-side content type detection for files uploaded using multipart/form-data
   * @param {boolean} [Param.disable_notification] - Sends the message silently. Users will receive a notification with no sound
   * @param {boolean} [Param.protect_content] - Protects the contents of the sent message from forwarding and saving
   * @param {number} [Param.reply_to_message_id] - If the message is a reply, ID of the original message
   * @param {boolean} [Param.allow_sending_without_reply] - Pass True if the message should be sent even if the specified replied-to message is not found
   * @returns the sent Message
   */
  ctx.sendDocument({chat_id:?, document:?,...})

   /**
   * Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as Document). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future
   *
   * https://core.telegram.org/bots/api#sendvideo
   * @param {object} Param - Object Parameter to send Video
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {string} Param.video - Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data
   * @param {number} [Param.message_thread_id] - Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   * @param {string} [Param.caption] - Video caption (may also be used when resending videos by file_id), 0-1024 characters after entities parsing
   * @param {string} [Param.parse_mode] - Mode for parsing entities in the video caption
   * @param {object} [Param.reply_markup] - object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user
   * @param {number} [Param.duration] - Duration of sent video in seconds
   * @param {number} [Param.width] - Video width
   * @param {number} [Param.height] - Video height
   * @param {string} [Param.thumb] - Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>
   * @param {object} [Param.caption_entities] - list of special entities that appear in the caption, which can be specified instead of parse_mode
   * @param {boolean} [Param.supports_streaming] - Pass True if the uploaded video is suitable for streaming
   * @param {boolean} [Param.disable_notification] - Sends the message silently. Users will receive a notification with no sound
   * @param {boolean} [Param.protect_content] - Protects the contents of the sent message from forwarding and saving
   * @param {number} [Param.reply_to_message_id] - If the message is a reply, ID of the original message
   * @param {boolean} [Param.allow_sending_without_reply] - Pass True if the message should be sent even if the specified replied-to message is not found
   * @returns the sent Message
   */
  ctx.sendVideo({chat_id:?, video:?,...})

   /**
   * Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future
   *
   * https://core.telegram.org/bots/api#sendanimation
   * @param {object} Param - Object Parameter to send animation
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {string} Param.animation - Animation to send. Pass a file_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data
   * @param {number} [Param.message_thread_id] - Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   * @param {string} [Param.caption] - Animation caption (may also be used when resending animation by file_id), 0-1024 characters after entities parsing
   * @param {string} [Param.parse_mode] - Mode for parsing entities in the animation captio
   * @param {object} [Param.reply_markup] - object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user
   * @param {number} [Param.duration] - Duration of sent animation in seconds
   * @param {number} [Param.width] - Animation width
   * @param {number} [Param.height] - Animation height
   * @param {string} [Param.thumb] - Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>
   * @param {object} [Param.caption_entities] - list of special entities that appear in the caption, which can be specified instead of parse_mode
   * @param {boolean} [Param.disable_notification] - Sends the message silently. Users will receive a notification with no sound
   * @param {boolean} [Param.protect_content] - Protects the contents of the sent message from forwarding and saving
   * @param {number} [Param.reply_to_message_id] - If the message is a reply, ID of the original message
   * @param {boolean} [Param.allow_sending_without_reply] - Pass True if the message should be sent even if the specified replied-to message is not found
   * @returns the sent Message
   */
  ctx.sendAnimation({chat_id:?, animation:?,...})

   /**
   * Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future
   *
   * https://core.telegram.org/bots/api#sendvoice
   * @param {object} Param - Object Parameter to send voice
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel (in the format
   * @param {string} Param.voice - Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data
   * @param {number} [Param.message_thread_id] - Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   * @param {string} [Param.caption] - Voice message caption, 0-1024 characters after entities parsing
   * @param {string} [Param.parse_mode] - Mode for parsing entities in the voice message caption
   * @param {object} [Param.reply_markup] - object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user
   * @param {object} [Param.caption_entities] - list of special entities that appear in the caption, which can be specified instead of parse_mode
   * @param {number} [Param.duration] - Duration of the voice message in seconds
   * @param {boolean} [Param.disable_notification] - Sends the message silently. Users will receive a notification with no sound
   * @param {boolean} [Param.protect_content] - Protects the contents of the sent message from forwarding and saving
   * @param {number} [Param.reply_to_message_id] - If the message is a reply, ID of the original message
   * @param {boolean} [Param.allow_sending_without_reply] - Pass True if the message should be sent even if the specified replied-to message is not found
   */
  ctx.sendVoice({chat_id:?, voice:?,...})

  /**
   * As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages
   *
   * https://core.telegram.org/bots/api#sendvideonote
   * @param {object} Param - Object Parameter to send video note
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {string} Param.video_note - Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. More information on Sending Files ». Sending video notes by a URL is currently unsupported
   * @param {number} [Param.message_thread_id] - Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   * @param {object} [Param.reply_markup] - object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user
   * @param {number} [Param.duration] - Duration of sent video in seconds
   * @param {number} [Param.length] - Video width and height, i.e. diameter of the video message
   * @param {string} [Param.thumb] - Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>
   * @param {boolean} [Param.disable_notification] - Sends the message silently. Users will receive a notification with no sound
   * @param {boolean} [Param.protect_content] - Protects the contents of the sent message from forwarding and saving
   * @param {number} [Param.reply_to_message_id] - If the message is a reply, ID of the original message
   * @param {boolean} [Param.allow_sending_without_reply] - Pass True if the message should be sent even if the specified replied-to message is not found
   * @returns the sent Message
   */
  ctx.sendVideoNote({chat_id: ?, video_note: ?,...})

   /**
   * Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type
   *
   * https://core.telegram.org/bots/api#sendmediagroup
   * @param {object} Param - Object Parameter to send media group
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {object} Param.media - array describing messages to be sent, must include 2-10 items
   * @param {number} [Param.message_thread_id] - Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   * @param {boolean} [Param.disable_notification] - Sends messages silently. Users will receive a notification with no sound
   * @param {boolean} [Param.protect_content] - Protects the contents of the sent messages from forwarding and saving
   * @param {number} [Param.reply_to_message_id] - If the messages are a reply, ID of the original message
   * @param {boolean} [Param.allow_sending_without_reply] - Pass True if the message should be sent even if the specified replied-to message is not found
   * @returns an array of Messages that were sent
   */
  ctx.sendMediaGroup({chat_id:?, media:?,...})

  /**
   * Use this method to send point on the map
   *
   * https://core.telegram.org/bots/api#sendlocation
   * @param {object} Param - Object Parameter to send location
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {number} Param.latitude - Latitude of the location
   * @param {number} Param.longitude - Longitude of the location
   * @param {number} [Param.message_thread_id] - Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   * @param {object} [Param.reply_markup] - object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user
   * @param {number} [Param.horizontal_accuracy] - The radius of uncertainty for the location, measured in meters; 0-1500
   * @param {number} [Param.live_period] - Period in seconds for which the location will be updated (see Live Locations, should be between 60 and 86400
   * @param {number} [Param.heading] - For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified
   * @param {number} [Param.proximity_alert_radius] - For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified
   * @param {boolean} [Param.disable_notification] - Sends the message silently. Users will receive a notification with no sound
   * @param {boolean} [Param.protect_content] - Protects the contents of the sent message from forwarding and saving
   * @param {number} [Param.reply_to_message_id] - If the message is a reply, ID of the original message
   * @param {boolean} [Param.allow_sending_without_reply] - Pass True if the message should be sent even if the specified replied-to message is not found
   * @returns the sent Message
   */
  ctx.sendLocation({chat_id:?, latitude:?, longitude:?, ...})

  /**
   * Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned
   *
   * https://core.telegram.org/bots/api#editmessagelivelocation
   * @param {object} Param - Object Parameter to edit message live location
   * @param {string} [Param.chat_id] - Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel
   * @param {number} [Param.message_id] - Required if inline_message_id is not specified. Identifier of the message to edit
   * @param {string} [Param.inline_message_id] - Required if chat_id and message_id are not specified. Identifier of the inline message
   * @param {number} Param.latitude - Latitude of new location
   * @param {number} Param.longitude - Longitude of new location
   * @param {object} [Param.reply_markup] - object for a new inline keyboard
   * @param {number} [Param.horizontal_accuracy] - The radius of uncertainty for the location, measured in meters; 0-1500
   * @param {number} [Param.heading] - Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified
   * @param {number} [Param.proximity_alert_radius] - The maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified
   */
  ctx.editMessageLiveLocation({...})

  /**
   * Use this method to send a game
   *
   * https://core.telegram.org/bots/api#sendgame
   * @param {object} Param - Object Parameter to send game
   * @param {number} Param.chat_id - Unique identifier for the target chat
   * @param {string} Param.game_short_name - Short name of the game, serves as the unique identifier for the game. Set up your games via @BotFather
   * @param {number} [Param.message_thread_id] - Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   * @param {boolean} [Param.disable_notification] - Sends the message silently. Users will receive a notification with no sound
   * @param {boolean} [Param.protect_content] - Protects the contents of the sent message from forwarding and saving
   * @param {number} [Param.reply_to_message_id] - If the message is a reply, ID of the original message
   * @param {boolean} [Param.allow_sending_without_reply] - Pass True if the message should be sent even if the specified replied-to message is not found
   * @param {object} [Param.reply_markup] - object for an inline keyboard. If empty, one 'Play game_title' button will be shown. If not empty, the first button must launch the game
   * @returns the sent Message
   */
  ctx.sendGame({chat_id:?, game_short_name:?,...})

  /**
   * Use this method to set the score of the specified user in a game message
   *
   * https://core.telegram.org/bots/api#setgamescore
   *
   * @param {object} Param - Object Parameter to send game score
   * @param {number} Param.user_id - User identifier
   * @param {number} Param.score - New score, must be non-negative
   * @param {boolean} [Param.force] - Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters
   * @param {boolean} [Param.disable_edit_message] - Pass True if the game message should not be automatically edited to include the current scoreboard
   * @param {number} [Param.chat_id] - Required if inline_message_id is not specified. Unique identifier for the target chat
   * @param {number} [Param.message_id] - Required if inline_message_id is not specified. Identifier of the sent message
   * @param {string} [Param.inline_message_id] - Required if chat_id and message_id are not specified. Identifier of the inline message
   * @returns On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user's current score in the chat and force is False
   */
  ctx.setGameScore({user_id:?, score:?,...})

   /**
   * Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game
   *
   * https://core.telegram.org/bots/api#getgamehighscores
   * @param {object} Param - Object Parameter to get game high score
   * @param {number} Param.user_id - Target user id
   * @param {number} [Param.chat_id] - Required if inline_message_id is not specified. Unique identifier for the target chat
   * @param {number} [Param.message_id] - Required if inline_message_id is not specified. Identifier of the sent message
   * @param {string} [Param.inline_message_id] - Required if chat_id and message_id are not specified. Identifier of the inline message
   * @returns Array of GameHighScore objects
   */
  ctx.getGameHighScores({user_id:?,...})

    /**
 * Use this method to send answers to an inline query.
No more than 50 results per query are allowed
 * https://core.telegram.org/bots/api#answerinlinequery
 * @param {object} Param - Object Parameter to answer inline query
 * @param {string} Param.inline_query_id - Unique identifier for the answered query
 * @param {object} Param.results - array of results for the inline query
 * @param {number} [Param.cache_time] - The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300
 * @param {boolean} [Param.is_personal] - Pass True if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query
 * @param {string} [Param.next_offset] - Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes
 * @param {string} [Param.switch_pm_text] - If passed, clients will display a button with specified text that switches the user to a private chat with the bot and sends the bot a start message with the parameter switch_pm_parameter
 * @param {string} [Param.switch_pm_parameter] - Deep-linking parameter for the /start message sent to the bot when user presses the switch button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed
 * @returns True On success
 */
  ctx.answerInlineQuery({inline_query_id:?, results:?,...})

   /**
   * Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated
   *
   * https://core.telegram.org/bots/api#answerwebappquery
   * @param {object} Param - Object Parameter to answer web app query
   * @param {string} Param.web_app_query_id - Unique identifier for the query to be answered
   * @param {object} Param.result - object describing the message to be sent
   * @returns SentWebAppMessage object
   */
  ctx.answerWebAppQuery({web_app_query_id:?, result:?})

   /**
   * Use this method to change the list of the bot's commands. See https://core.telegram.org/bots#commands for more details about bot commands.
   *
   * https://core.telegram.org/bots/api#setmycommands
   *
   * @param {object} Param.commands -  list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified
   * @param {object} [Param.scope] -  object describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefaul
   * @param {object} [Param.language_code] -  A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands
   * @Returns True on success
   */
  ctx.setMyCommands({commands:?,...})

   /**
   * Use this method to stop updating a live location message before live_period expires.
   *
   * https://core.telegram.org/bots/api#stopmessagelivelocation
   *
   * @param {string} [Param.chat_id] - Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel
   * @param {number} [Param.message_id] - Required if inline_message_id is not specified. Identifier of the message with live location to stop
   * @param {string} [Param.inline_message_id] - Required if chat_id and message_id are not specified. Identifier of the inline message
   * @param {object} [Param.reply_markup] - object for a new inline keyboard
   * @returns if the message is not an inline message, the edited Message is returned, otherwise True is returned
   */
  ctx.stopMessageLiveLocation({...})

   /**
   *Use this method to send information about a venue. On success
   *
   * https://core.telegram.org/bots/api#sendvenue
   *
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel (in the format
   * @param {number} Param.latitude - Latitude of the venue
   * @param {number} Param.longitude - Longitude of the venue
   * @param {string} Param.title - Name of the venue
   * @param {string} Param.address - Address of the venue
   * @param {object} [Param.reply_markup] - object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user
   * @param {string} [Param.foursquare_id] - Foursquare identifier of the venue
   * @param {string} [Param.foursquare_type] - Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
   * @param {string} [Param.google_place_id] - Google Places identifier of the venue
   * @param {string} [Param.google_place_type] - Google Places type of the venue
   * @param {boolean} [Param.disable_notification] - Sends the message silently. Users will receive a notification with no sound
   * @param {boolean} [Param.protect_content] - Protects the contents of the sent message from forwarding and saving
   * @param {number} [Param.reply_to_message_id] - If the message is a reply, ID of the original message
   * @param {boolean} [Param.allow_sending_without_reply] - Pass True if the message should be sent even if the specified replied-to message is not found
   * @returns the sent Message
   */
  ctx.sendVenue({chat_id:?,latitude:?,longitude:?, title: ?, address:?,... })
   /**
   * Use this method to send phone contacts
   *
   * https://core.telegram.org/bots/api#sendcontact
   *
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {string} Param.phone_number - Contact's phone number
   * @param {string} Param.first_name - Contact's first name
   * @param {string} [Param.last_name] - Contact's last name
   * @param {object} [Param.reply_markup] - object for an inline keyboard, custom reply keyboard, instructions to remove keyboard or to force a reply from the user
   * @param {string} [Param.vcard] - Additional data about the contact in the form of a vCard, 0-2048 bytes
   * @param {Boolean} [Param.disable_notification] - Sends the message silently. Users will receive a notification with no sound
   * @param {Boolean} [Param.protect_content] - Protects the contents of the sent message from forwarding and saving
   * @param {number} [Param.reply_to_message_id] - If the message is a reply, ID of the original message
   * @param {Boolean} [Param.allow_sending_without_reply] - Pass True if the message should be sent even if the specified replied-to message is not found
   * @returns the sent Message
   */
  ctx.sendContact({chat_id:?, phone_number:?, first_name:? ...})

    /**
   * Use this method to send a native poll. On success
   *
   * https://core.telegram.org/bots/api#sendpoll
   *
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {string} Param.question - Poll question, 1-300 characters
   * @param {object} Param.options - list of answer options, 2-10 strings 1-100 characters each
   * @param {object} [Param.reply_markup] - object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user
   * @param {boolean} [Param.is_anonymous] - True, if the poll needs to be anonymous, defaults to True
   * @param {string} [Param.type] - Poll type, “quiz” or “regular”, defaults to “regular”
   * @param {boolean} [Param.allows_multiple_answers] - True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False
   * @param {number} [Param.correct_option_id] - 0-based identifier of the correct answer option, required for polls in quiz mode
   * @param {string} [Param.explanation] - Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing
   * @param {string} [Param.explanation_parse_mode] - Mode for parsing entities in the explanation
   * @param {object} [Param.explanation_entities] - list of special entities that appear in the poll explanation, which can be specified instead of parse_mode
   * @param {number} [Param.open_period] - Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date
   * @param {number} [Param.close_date] - Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period
   * @param {number} [Param.is_closed] - Pass True if the poll needs to be immediately closed. This can be useful for poll preview
   * @param {boolean} [Param.disable_notification] - Sends the message silently. Users will receive a notification with no sound
   * @param {boolean} [Param.protect_content] - Protects the contents of the sent message from forwarding and saving
   * @param {number} [Param.reply_to_message_id] - If the message is a reply, ID of the original message
   * @param {boolean} [Param.allow_sending_without_reply] - Pass True if the message should be sent even if the specified replied-to message is not found
   * @returns the sent Message
   */
  ctx.sendPoll({chat_id:?, question:?, options:?,...})

    /**
   * Use this method to send an animated emoji that will display a random value.
   *
   * https://core.telegram.org/bots/api#senddice
   *
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {string} [Param.emoji] - Emoji on which the dice throw animation is based. Currently, must be one of “🎲”, “🎯”, “🏀”, “⚽”, “🎳”, or “🎰”. Dice can have values 1-6 for “🎲”, “🎯” and “🎳”, values 1-5 for “🏀” and “⚽”, and values 1-64 for “🎰”. Defaults to “🎲”
   * @param {object} [Param.reply_markup] - object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user
   * @param {boolean} [Param.disable_notification] - Sends the message silently. Users will receive a notification with no sound
   * @param {boolean} [Param.protect_content] - Protects the contents of the sent message from forwarding
   * @param {number} [Param.reply_to_message_id] - If the message is a reply, ID of the original message
   * @param {boolean} [Param.allow_sending_without_reply] - Pass True if the message should be sent even if the specified replied-to message is not found
   * @returns the sent Message
   */
  ctx.sendDice({chat_id:?,...})

  /**
   * Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less
   *
   *  https://core.telegram.org/bots/api#sendchataction
   * @param {object} Param - Object Parameter to send chat action
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {string} Param.action - Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or upload_video for videos, record_voice or upload_voice for voice notes, upload_document for general files, choose_sticker for stickers, find_location for location data, record_video_note or upload_video_note for video notes
   * @returns True on success
   */
  ctx.sendChatAction({chat_id:?, action:?})

    /**
   * Use this method to get a list of profile pictures for a user
   *
   * https://core.telegram.org/bots/api#getuserprofilephotos
   * @param {object} Param - Object Parameter to get user profile photos
   * @param {number} Param.user_id - Unique identifier of the target user
   * @param {number} [Param.offset] - Sequential number of the first photo to be returned. By default, all photos are returned
   * @param {number} [Param.limit] - Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100
   * @returns UserProfilePhotos object
   */
  ctx.getUserProfilePhotos({user_id:?,...})

    /**
   * Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again
   *
   * Note: This function may not preserve the original file name and MIME type. You should save the file's MIME type and name (if available) when the File object is received
   *
   * https://core.telegram.org/bots/api#getfile
   * @param {object} Param - Object Parameter to get file
   * @param {string} Param.file_id - File identifier to get information about
   * @returns File object
   */
  ctx.getFile({file_id:?})

   /**
   * Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights
   *
   * https://core.telegram.org/bots/api#banchatmember
   * @param {object} Param - Object Parameter to ban chat member
   * @param {string} Param.chat_id - Unique identifier for the target group or username of the target supergroup or channel
   * @param {number} Param.user_id - Unique identifier of the target user
   * @param {number} [Param.until_date] - Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only
   * @param {boolean} [Param.revoke_messages] - Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels
   * @returns True on success
   */
  ctx.banChatMember({chat_id:?, user_id:?,...})

    /**
   * Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned
   *
   * https://core.telegram.org/bots/api#unbanchatmember
   * @param {object} Param - Object Parameter to unban chat member
   * @param {string} Param.chat_id - Unique identifier for the target group or username of the target supergroup or channel
   * @param {number} [Param.user_id] - Unique identifier of the target user
   * @param {boolean} [Param.only_if_banned] - Do nothing if the user is not banned
   * @returns True on success
   */
  ctx.unbanChatMember({chat_id:?,...})


  /**
   *Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user
   *
   * https://core.telegram.org/bots/api#restrictchatmember
   * @param {object} Param - Object Parameter to restrict chat member
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target supergroup
   * @param {number} Param.user_id - Unique identifier of the target user
   * @param {object} Param.permissions - object for new user permissions
   * @param {number} [Param.until_date] - Date when restrictions will be lifted for the user, unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever
   * @returns True on success
   */
  ctx.restrictChatMember({chat_id:?, user_id:?, permissions:?,...})

    /**
   * Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user
   *
   * https://core.telegram.org/bots/api#promotechatmember
   * @param {object} Param - Object Parameter to promote chat member
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {number} Param.user_id - Unique identifier of the target user
   * @param {boolean} [Param.is_anonymous] - Pass True if the administrator's presence in the chat is hidden
   * @param {boolean} [Param.can_manage_chat] - Pass True if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege
   * @param {boolean} [Param.can_post_messages] - Pass True if the administrator can create channel posts, channels only
   * @param {boolean} [Param.can_edit_messages] - Pass True if the administrator can edit messages of other users and can pin messages, channels only
   * @param {boolean} [Param.can_delete_messages] - Pass True if the administrator can delete messages of other users
   * @param {boolean} [Param.can_manage_video_chats] - Pass True if the administrator can manage video chats
   * @param {boolean} [Param.can_restrict_members] - Pass True if the administrator can restrict, ban or unban chat members
   * @param {boolean} [Param.can_promote_members] - Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by him)
   * @param {boolean} [Param.can_change_info] - Pass True if the administrator can change chat title, photo and other settings
   * @param {boolean} [Param.can_invite_users] - Pass True if the administrator can invite new users to the chat
   * @param {boolean} [Param.can_pin_messages] - Pass True if the administrator can pin messages, supergroups only
   * @param {boolean} [Param.can_manage_topics] - Pass True if the user is allowed to create, rename, close, and reopen forum topics, supergroups only
   * @returns True on success
   */
  ctx.promoteChatMember({chat_id:?, user_id:?})

    /**
   * Use this method to set a custom title for an administrator in a supergroup promoted by the bot
   *
   * https://core.telegram.org/bots/api#setchatadministratorcustomtitle
   *
   * @param {object} Param - Object Parameter to set chat administrator custom title
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target supergroup
   * @param {number} Param.user_id - Unique identifier of the target user
   * @param {string} Param.custom_title - New custom title for the administrator; 0-16 characters, emoji are not allowed
   * @returns True on success
   */
  ctx.setChatAdministratorCustomTitle({chat_id:?, user_id:?, custom_title:?})

    /**
   * Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights
   *
   * https://core.telegram.org/bots/api#banchatsenderchat
   * @param {object} Param - Object Parameter to ban chat sender chat
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {number} Param.sender_chat_id - Unique identifier of the target sender chat
   * @returns True on success
   */
  ctx.banChatSenderChat({chat_id:?, sender_chat_id:?})

    /**
   * Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights
   *
   * https://core.telegram.org/bots/api#unbanchatsenderchat
   * @param {object} Param - Object Parameter to unban chat sender chat
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {number} Param.sender_chat_id - Unique identifier of the target sender chat
   * @returns True on success
   */
  ctx.unbanChatSenderChat({chat_id:?, sender_chat_id:?})

    /**
   * Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members administrator rights
   *
   * https://core.telegram.org/bots/api#setchatpermissions
   * @param {object} Param - Object Parameter to set chat permissions
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target supergroup
   * @param {object} Param.permissions - object for new default chat permissions
   * @returns True on success
   */
  ctx.setChatPermissions({chat_id:?, permissions:?})

    /**
   * Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights
   *
   * https://core.telegram.org/bots/api#exportchatinvitelink
   * @param {object} Param - Object Parameter to export chat invite link
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @returns the new invite link as String on success
   */
  ctx.exportChatInviteLink({chat_id:?})

    /**
   * Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method revokeChatInviteLink
   *
   * https://core.telegram.org/bots/api#createchatinvitelink
   * @param {object} Param - Object Parameter to create chat invite link
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {string} [Param.name] - Invite link name; 0-32 characters
   * @param {number} [Param.expire_date] - Point in time (Unix timestamp) when the link will expire
   * @param {number} [Param.member_limit] - The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
   * @param {boolean} [Param.creates_join_request] - True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified
   * @returns the new invite link as ChatInviteLink object
   */
  ctx.createChatInviteLink({chat_id:?,...})

   /**
   * Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights
   *
   * https://core.telegram.org/bots/api#editchatinvitelink
   * @param {object} Param - Object Parameter to edit chat invite link
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {string} Param.invite_link - The invite link to edit
   * @param {string} [Param.name] - Invite link name; 0-32 characters
   * @param {number} [Param.expire_date] - Point in time (Unix timestamp) when the link will expire
   * @param {number} [Param.member_limit] - The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
   * @param {boolean} [Param.creates_join_request] - True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified
   * @returns the edited invite link as a ChatInviteLink object
   */
  ctx.editChatInviteLink({chat_id:?, invite_link:? ...})

   /**
   * Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights
   *
   * https://core.telegram.org/bots/api#revokechatinvitelink
   * @param {object} Param - Object Parameter to revoke chat invite link
   * @param {string} Param.chat_id - Unique identifier of the target chat or username of the target channel
   * @param {string} Param.invite_link - The invite link to revoke
   * @returns the revoked invite link as ChatInviteLink object
   */
  ctx.revokeChatInviteLink({chat_id:?, invite_link:?})

    /**
   * Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right
   *
   * https://core.telegram.org/bots/api#approvechatjoinrequest
   * @param {object} Param - Object Parameter to Approve chat join request
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {number} Param.user_id - Unique identifier of the target user
   * @returns True on success
   */
  ctx.approveChatJoinRequest({chat_id:?, user_id:?})

    /**
   * Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right
   *
   * https://core.telegram.org/bots/api#declinechatjoinrequest
   * @param {object} Param - Object Parameter to decline chat join request
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {number} Param.user_id - Unique identifier of the target user
   * @returns True on success
   */
  ctx.declineChatJoinRequest({chat_id:?, user_id:?})

    /**
   * Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights
   *
   * https://core.telegram.org/bots/api#setchatphoto
   * @param {object} Param - Object Parameter to set chat photo
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {string} Param.photo - New chat photo, uploaded using multipart/form-data
   * @returns True on success
   */
  ctx.setChatPhoto({chat_id:?, photo:?})

    /**
   * Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights
   *
   * https://core.telegram.org/bots/api#deletechatphoto
   * @param {object} Param - Object Parameter to delete chat photo
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @returns True on success
   */
  ctx.deleteChatPhoto({chat_id:?})

    /**
   * Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights
   *
   * https://core.telegram.org/bots/api#setchattitle
   * @param {object} Param - Object Parameter to set chat title
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {string} Param.title - New chat title, 1-255 characters
   * @returns True on success
   */
  ctx.setChatTitle({chat_id:?, title:?})

    /**
   * Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights
   *
   * https://core.telegram.org/bots/api#setchatdescription
   * @param {object} Param - Object Parameter to set chat description
   * @param {string} Param.chat_id - 	Unique identifier for the target chat or username of the target channel
   * @param {string} [Param.description] - New chat description, 0-255 characters
   * @returns True on success
   */
  ctx.setChatDescription({chat_id:?,...})

    /**
   * Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel
   *
   * https://core.telegram.org/bots/api#pinchatmessage
   * @param {object} Param - Object Parameter to pin chat message
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {number} Param.message_id - Identifier of a message to pin
   * @param {boolean} [Param.disable_notification ]- Pass True if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats
   * @returns True on success
   */
  ctx.pinChatMessage({chat_id:?, message_id:?,...})

    /**
   * Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel
   *
   * https://core.telegram.org/bots/api#unpinchatmessage
   * @param {object} Param - Object Parameter to unpin chat message
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {number} [Param.message_id] - Identifier of a message to unpin. If not specified, the most recent pinned message
   * @returns True on success
   */
  ctx.unpinChatMessage({chat_id:?, ...})

   /**
   * Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel
   *
   * https://core.telegram.org/bots/api#unpinallchatmessages
   * @param {object} Param - Object Parameter to unpin all chat message
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @returns True on success
   */
  ctx.unpinAllChatMessages({chat_id:?})

   /**
   * Use this method for your bot to leave a group, supergroup or channel
   *
   * https://core.telegram.org/bots/api#unpinallchatmessages
   * @param {object} Param - Object Parameter to leave Chat
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @returns True on success
   */
  ctx.leaveChat({chat_id:?})

    /**
   * Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.)
   *
   * https://core.telegram.org/bots/api#getchat
   * @param {object} Param - Object Parameter to get Chat
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @returns a Chat object on success
   */
  ctx.getChat({chat_id:?})

    /**
   * Use this method to get a list of administrators in a chat, which aren't bots
   *
   * https://core.telegram.org/bots/api#getchatadministrators
   * @param {object} Param - Object Parameter to get Chat administrators
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @returns an Array of ChatMember objects
   */
  ctx.getChatAdministrators({chat_id:?})

    /**
   * Use this method to get the number of members in a chat
   *
   * https://core.telegram.org/bots/api#getchatmembercount
   * @param {object} Param - Object Parameter to get member count
   * @param {string} chat_id - Unique identifier for the target chat or username of the target channel
   * @returns number on success
   */
  ctx.getChatMemberCount({chat_id:?})

  /**
   * Use this method to get information about a member of a chat
   *
   * https://core.telegram.org/bots/api#getchatmember
   * @param {object} Param - Object Parameter to get chat member
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {number} Param.user_id - Unique identifier of the target user
   * @returns a ChatMember object on success
   */
  ctx.getChatMember({chat_id:?, user_id:?})

   /**
   * Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method
   *
   * https://core.telegram.org/bots/api#setchatstickerset
   * @param {object} Param - Object Parameter to set chat sticker set
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target supergroup
   * @param {string} Param.sticker_set_name - Name of the sticker set to be set as the group sticker set
   * @returns True on success
   */
  ctx.setChatStickerSet({chat_id:?, sticker_set_name:?})

   /**
   * Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method
   *
   * https://core.telegram.org/bots/api#deletechatstickerset
   * @param {object} Param - Object Parameter to delete chat sticker set
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @returns True on success
   */
  ctx.deleteChatStickerSet({chat_id:?})

    /**
   * Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned
   *
   * https://core.telegram.org/bots/api#answercallbackquery
   * @param {object} Param - Object Parameter to answer callback query
   * @param {string} Param.callback_query_id - Unique identifier for the query to be answered
   * @param {string} [Param.text] - Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters
   * @param {boolean} [Param.show_alert] - If True, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false
   * @param {string} [Param.urls] - URL that will be opened by the user's client. If you have created a Game and accepted the conditions via @BotFather, specify the URL that opens your game - note that this will only work if the query comes from a callback_game button
   * Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter
   * @param {number} [Param.cache_time] - The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0
   * @returns True on success
   */
  ctx.answerCallbackQuery({callback_query_id:?,...})

   /**
   * Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, higher level commands will be shown to affected users
   *
   * https://core.telegram.org/bots/api#deletemycommands
   * @param {object} Param - Object Parameter to delete commands
   * @param {object} [Param.scope] - describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault
   * @param {string} [Param.language_code] - A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands
   * @returns True on success
   */
  ctx.deleteMyCommands({...})


  /**
   * Use this method to get the current list of the bot's commands for the given scope and user language
   *
   * https://core.telegram.org/bots/api#getmycommands
   *
   * @param {object} [Param.scope] - describing scope of users. Defaults to BotCommandScopeDefault
   * @param {string} [Param.language_code] - A two-letter ISO 639-1 language code or an empty string
   * @returns an Array of BotCommand objects. If commands aren't set, an empty list is returned
   */
  ctx.getMyCommands({...})

  /**
   * Use this method to change the bot's menu button in a private chat, or the default menu button
   *
   * https://core.telegram.org/bots/api#setchatmenubutton
   * @param {object} Param - Object Parameter to set chat menu button
   * @param {number} [Param.chat_id] - Unique identifier for the target private chat. If not specified, default bot's menu button will be changed
   * @param {object} [Param.menu_button] - object for the bot's new menu button. Defaults to MenuButtonDefault
   * @returns True on success
   */
  ctx.setChatMenuButton({...})

   /**
   * Use this method to get the current value of the bot's menu button in a private chat, or the default menu button
   *
   * https://core.telegram.org/bots/api#getchatmenubutton
   * @param {object} Param - Object Parameter to get chat menu button
   * @param {number} [Param.chat_id] - Unique identifier for the target private chat. If not specified, default bot's menu button will be returned
   * @returns MenuButton on success
   */
  ctx.getChatMenuButton({...})

   /**
   * Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels. These rights will be suggested to users, but they are are free to modify the list before adding the bot
   *
   * https://core.telegram.org/bots/api#setmydefaultadministratorrights
   * @param {object} Param - Object Parameter to set default administrator rights
   * @param {object} [Param.rights] - object describing new default administrator rights. If not specified, the default administrator rights will be cleared
   * @param {boolean} [Param.for_channels] - Pass True to change the default administrator rights of the bot in channels. Otherwise, the default administrator rights of the bot for groups and supergroups will be changed
   * @returns True on success
   */
  ctx.setMyDefaultAdministratorRights({...})

    /**
   * Use this method to get the current default administrator rights of the bot
   *
   * https://core.telegram.org/bots/api#getmydefaultadministratorrights
   * @param {object} Param - Object Parameter to get default administrator rights
   * @param {boolean} [Param.for_channels] - Pass True to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned
   * @returns ChatAdministratorRights on success
   */
  ctx.getMyDefaultAdministratorRights({...})

   /**
   * Use this method to send invoices
   *
   * https://core.telegram.org/bots/api#sendinvoice
   * @param {object} Param - Object Parameter to send invoice
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {string} Param.title - Product name, 1-32 characters
   * @param {string} Param.description - Product description, 1-255 characters
   * @param {string} Param.payload - Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes
   * @param {string} Param.provider_token - Payment provider token, obtained via @BotFather
   * @param {string} Param.currency - Three-letter ISO 4217 currency code
   * @param {object} [Param.prices] - list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)
   * @param {object} [Param.reply_markup] - object for an inline keyboard. If empty, one 'Pay total price' button will be shown. If not empty, the first button must be a Pay button
   * @param {number} [Param.max_tip_amount] - The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0
   * @param {object} [Param.suggested_tip_amounts] - array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount
   * @param {string} [Param.start_parameter] - Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot (instead of a Pay button), with the value used as the start parameter
   * @param {string} [Param.provider_data] - data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider
   * @param {string} [Param.photo_url] - URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for
   * @param {number} [Param.photo_size] - Photo size in bytes
   * @param {number} [Param.photo_width] - Photo width
   * @param {number} [Param.photo_height] - Photo height
   * @param {boolean} [Param.need_name] - Pass True if you require the user's full name to complete the order
   * @param {boolean} [Param.need_phone_number] - Pass True if you require the user's phone number to complete the order
   * @param {boolean} [Param.need_email] - Pass True if you require the user's email address to complete the order
   * @param {boolean} [Param.need_shipping_address] - Pass True if you require the user's shipping address to complete the order
   * @param {boolean} [Param.send_phone_number_to_provider] - Pass True if the user's phone number should be sent to provider
   * @param {boolean} [Param.send_email_to_provider] - Pass True if the user's email address should be sent to provider
   * @param {boolean} [Param.is_flexible] - Pass True if the final price depends on the shipping method
   * @param {boolean} [Param.disable_notification] - Sends the message silently. Users will receive a notification with no sound
   * @param {boolean} [Param.protect_content] - Protects the contents of the sent message from forwarding and saving
   * @param {number} [Param.reply_to_message_id] - If the message is a reply, ID of the original message
   * @param {boolean} [Param.allow_sending_without_reply] - Pass True if the message should be sent even if the specified replied-to message is not found
   * @returns the sent Message
   */
  ctx.sendInvoice({chat_id:?, title:?, description:?, payload:?, provider_token:?, currency:?, ...})

   /**
   * Use this method to create a link for an invoice
   *
   * https://core.telegram.org/bots/api#function createinvoicelink(
   * @param {object} Param - Object Parameter to create invoice link
   * @param {string} Param.title - Product name, 1-32 characters
   * @param {string} Param.description - Product description, 1-255 characters
   * @param {string} Param.payload - Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes
   * @param {string} Param.provider_token - Payment provider token, obtained via @BotFather
   * @param {string} Param.currency - Three-letter ISO 4217 currency code
   * @param {object} Param.prices - list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)
   * @param {number} [Param.max_tip_amount] - The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0
   * @param {object} [Param.suggested_tip_amounts] - array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount
   * @param {string} [Param.provider_data] - data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider
   * @param {string} [Param.photo_url] - URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for
   * @param {number} [Param.photo_size] - Photo size in bytes
   * @param {number} [Param.photo_width] - Photo width
   * @param {number} [Param.photo_height] - Photo height
   * @param {boolean} [Param.need_name] - Pass True if you require the user's full name to complete the order
   * @param {boolean} [Param.need_phone_number] - Pass True if you require the user's phone number to complete the order
   * @param {boolean} [Param.need_email] - Pass True if you require the user's email address to complete the order
   * @param {boolean} [Param.need_shipping_address] - Pass True if you require the user's shipping address to complete the order
   * @param {boolean} [Param.send_phone_number_to_provider] - Pass True if the user's phone number should be sent to provider
   * @param {boolean} [Param.send_email_to_provider] - Pass True if the user's email address should be sent to provider
   * @param {boolean} [Param.is_flexible] - Pass True if the final price depends on the shipping method
   * @returns the created invoice link as String on success
   */
  ctx.createInvoiceLink(chat_id:?, title:?, description:?, payload:?, provider_token:?, currency:?,prices:?, ...)

     /**
   * If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries
   *
   * https://core.telegram.org/bots/api#answershippingquery
   * @param {object} Param - Object Parameter to answer shipping query
   * @param {string} Param.shipping_query_id - Unique identifier for the query to be answered
   * @param {boolean} Param.ok - Pass True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible)
   * @param {object} [Param.shipping_options] - Required if ok is True. A JSON-serialized array of available shipping options
   * @param {string} [Param.error_message] - Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user
   * @returns True On success
   */
  ctx.answerShippingQuery({shipping_query_id:?, ok:?, ...})

   /**
   * Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query. Use this method to respond to such pre-checkout queries
   *
   * https://core.telegram.org/bots/api#answerprecheckoutquery
   * @param {object} Param - Object Parameter to answer pre checkout query
   * @param {string} Param.shipping_query_id - Unique identifier for the query to be answered
   * @param {boolean} Param.ok - Specify True if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use False if there are any problems
   * @param {string} [Param.error_message] - Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user
   * @returns True On success
   */
  ctx.answerPreCheckoutQuery({shipping_query_id:?, ok:?, ...})

   /**
   * Reply Message anywhere
   * @param {string|number} Message - message to reply
   * @param {object} Param - Object Parameter to send message
   * @param {number} [Param.message_thread_id] - Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   * @param {object} [Param.reply_markup] - object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user
   * @param {string} [Param.parse_mode] - Mode for parsing entities in the message text
   * @param {object} [Param.entities] - list of special entities that appear in message text, which can be specified instead of parse_mode
   * @param {boolean} [Param.disable_web_page_preview] - Disables link previews for links in this message
   * @param {boolean} [Param.disable_notification] - Sends the message silently. Users will receive a notification with no sound
   * @param {boolean} [Param.protect_content] - Protects the contents of the sent message from forwarding and saving
   * @param {number} [Param.reply_to_message_id] - If the message is a reply, ID of the original message
   * @param {boolean} [Param.allow_sending_without_reply] - Pass True, if the message should be sent even if the specified replied-to message is not found
   * @returns the sent Message
   */
  ctx.reply(Message, {...})

    /**
   * Reply Message With HTML anywhere
   * @param {string|number} Message
   * @param {object} Param - Object Parameter to send message
   * @param {number} [Param.message_thread_id] - Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   * @param {object} [Param.reply_markup] - object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user
   * @param {object} [Param.entities] - list of special entities that appear in message text, which can be specified instead of parse_mode
   * @param {boolean} [Param.disable_web_page_preview] - Disables link previews for links in this message
   * @param {boolean} [Param.disable_notification] - Sends the message silently. Users will receive a notification with no sound
   * @param {boolean} [Param.protect_content] - Protects the contents of the sent message from forwarding and saving
   * @param {number} [Param.reply_to_message_id] - If the message is a reply, ID of the original message
   * @param {boolean} [Param.allow_sending_without_reply] - Pass True, if the message should be sent even if the specified replied-to message is not found
   * @returns the sent Message
   */
  ctx.replyWithHtml(Message,{...})

   /**
   * Reply Message With Markdown anywhere
   * @param {string|number} Message
   * @param {object} Param - Object Parameter to send message
   * @param {number} [Param.message_thread_id] - Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   * @param {object} [Param.reply_markup] - object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user
   * @param {object} [Param.entities] - list of special entities that appear in message text, which can be specified instead of parse_mode
   * @param {boolean} [Param.disable_web_page_preview] - Disables link previews for links in this message
   * @param {boolean} [Param.disable_notification] - Sends the message silently. Users will receive a notification with no sound
   * @param {boolean} [Param.protect_content] - Protects the contents of the sent message from forwarding and saving
   * @param {number} [Param.reply_to_message_id] - If the message is a reply, ID of the original message
   * @param {boolean} [Param.allow_sending_without_reply] - Pass True, if the message should be sent even if the specified replied-to message is not found
   * @returns the sent Message
   *
   */
  ctx.replyWithMarkdown(Message, {...})

    /**
   * Reply With Photo
   * @param {string} photo - Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20
   * @param {object} Param - Object Parameter to send photo
   * @param {number} [Param.message_thread_id] - Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   * @param {string} [Param.parse_mode] - Mode for parsing entities in the photo caption
   * @param {string} [Param.caption] - Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing
   * @param {object} [Param.reply_markup] - object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user
   * @param {object} [Param.caption_entities] - list of special entities that appear in the caption, which can be specified instead of parse_mode
   * @param {boolean} [Param.disable_notification] - Sends the message silently. Users will receive a notification with no sound
   * @param {boolean} [Param.protect_content] - Protects the contents of the sent message from forwarding and saving
   * @param {number} [Param.reply_to_message_id] - If the message is a reply, ID of the original message
   * @param {boolean} [Param.allow_sending_without_reply] - Pass True if the message should be sent even if the specified replied-to message is not found
   * @returns the sent Message
   */
  ctx.replyWithPhoto(photo, {...})

   /**
   * Reply with chat action
   * @param {string} Action
   */
  ctx.replyWithChatAction(Action)

    /**
   * Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers
   *
   * https://core.telegram.org/bots/api#sendsticker
   * @param {object} Param - Object Parameter to send sticker
   * @param {string} Param.chat_id - Unique identifier for the target chat or username of the target channel
   * @param {string} Param.sticker - Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP file from the Internet, or upload a new one using multipart/form-data
   * @param {number} [Param.message_thread_id] - Unique identifier for the target message thread (topic) of the forum; for forum supergroups only
   * @param {object} [Param.reply_markup] - object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user
   * @param {boolean} [Param.disable_notification] - Sends the message silently. Users will receive a notification with no sound
   * @param {boolean} [Param.protect_content] - Protects the contents of the sent message from forwarding and saving
   * @param {number} [Param.reply_to_message_id] - If the message is a reply, ID of the original message
   * @param {boolean} [Param.allow_sending_without_reply] - Pass True if the message should be sent even if the specified replied-to message is not found
   * @returns the sent Message
   */
  ctx.sendSticker({chat_id:?, sticker:?, ...})

   /**
   * Use this method to get a sticker set
   *
   * https://core.telegram.org/bots/api#getstickerset
   * @param {object} Param - Object Parameter to get sticker set
   * @param {string} Param.name - Name of the sticker set
   * @returns StickerSet object
   */
  ctx.getStickerSet({name:?})

    /**
   * Use this method to get information about custom emoji stickers by their identifiers
   * @param {object} Param - Object Parameter to get custom emoji stickers
   * @param {object} Param.custom_emoji_ids - List of custom emoji identifiers. At most 200 custom emoji identifiers can be specified
   * @returns Array of Sticker objects
   */
  ctx.getCustomEmojiStickers({custom_emoji_ids:?})

    /**
   * Use this method to upload a .PNG file with a sticker for later use in createNewStickerSet and addStickerToSet methods (can be used multiple times)
   *
   * https://core.telegram.org/bots/api#uploadstickerfile
   * @param {object} Param - Object Parameter to upload sticker file
   * @param {number} Param.user_id - User identifier of sticker file owner
   * @param {string} Param.png_sticker - PNG image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px
   * @returns the uploaded File on success
   */
  ctx.uploadStickerFile({user_id:?, png_sticker:?})

   /**
   * Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. You must use exactly one of the fields png_sticker, tgs_sticker, or webm_sticker
   *
   * https://core.telegram.org/bots/api#createnewstickerset
   * @param {object} Param - Object Parameter to create new sticker set
   * @param {number} Param.user_id - User identifier of created sticker set owner
   * @param {string} Param.name - Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only English letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in "_by_<bot_username>". <bot_username> is case insensitive. 1-64 characters
   * @param {string} Param.title - Sticker set title, 1-64 characters
   * @param {string} Param.emojis - One or more emoji corresponding to the sticker
   * @param {string} [Param.png_sticker] - PNG image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data
   * @param {string} [Param.tgs_sticker] - TGS animation with the sticker, uploaded using multipart/form-data
   * @param {string} [Param.webm_sticker] - WEBM video with the sticker, uploaded using multipart/form-data
   * @param {string} [Param.sticker_type] - Type of stickers in the set, pass “regular” or “mask”. Custom emoji sticker sets can't be created via the Bot API at the moment. By default, a regular sticker set is created
   * @param {object} [Param.mask_position] - object for position where the mask should be placed on faces
   * @returns True on success
   */
  ctx.createNewStickerSet({user_id:?, name:?, title:?,emojis:?,...})

   /**
   * Use this method to add a new sticker to a set created by the bot. You must use exactly one of the fields png_sticker, tgs_sticker, or webm_sticker. Animated stickers can be added to animated sticker sets and only to them. Animated sticker sets can have up to 50 stickers. Static sticker sets can have up to 120 stickers
   *
   * https://core.telegram.org/bots/api#addstickertoset
   * @param {object} Param - Object Parameter to add sticker to set
   * @param {number} Param.user_id - User identifier of sticker set owner
   * @param {string} Param.name - Sticker set name
   * @param {string} Param.emojis - One or more emoji corresponding to the sticker
   * @param {string} [Param.png_sticker] - PNG image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data
   * @param {string} [Param.tgs_sticker] - TGS animation with the sticker, uploaded using multipart/form-data
   * @param {string} [Param.webm_sticker] - WEBM video with the sticker, uploaded using multipart/form-data
   * @param {object} [Param.mask_position] - object for position where the mask should be placed on faces
   * @returns
   */
  ctx.addStickerToSet({user_id:?, name:?, emojis:?,...})

    /**
   * Use this method to move a sticker in a set created by the bot to a specific position
   *
   * https://core.telegram.org/bots/api#setstickerpositioninset
   * @param {object} Param - Object Parameter to set sticker position in set
   * @param {string} [Param.sticker] - File identifier of the sticker
   * @param {number} [Param.position] - New sticker position in the set, zero-based
   * @returns True on success
   */
  ctx.setStickerPositionInSet({...})

   /**
   * Use this method to delete a sticker from a set created by the bot
   *
   * https://core.telegram.org/bots/api#deletestickerfromset
   * @param {object} Param - Object Parameter to delete sticker from set
   * @param {string} [Param.sticker] - File identifier of the sticker
   * @returns True on success
   */
  ctx.deleteStickerFromSet({...})

   /**
   * Use this method to set the thumbnail of a sticker set. Animated thumbnails can be set for animated sticker sets only. Video thumbnails can be set only for video sticker sets only
   * @param {object} Param - Object Parameter to set sticker set thumb
   * @param {string} Param.name - Sticker set name
   * @param {number} [Param.user_id] - User identifier of the sticker set owner
   * @param {string} [Param.thumb] - A PNG image with the thumbnail, must be up to 128 kilobytes in size and have width and height exactly 100px, or a TGS animation with the thumbnail up to 32 kilobytes in size
   * @returns True on success
   */
  ctx.setStickerSetThumb({name:?,...})

    /**
   * Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned
   * https://core.telegram.org/bots/api#editmessagetext
   * @param {object} Param - Object Parameter to edit message text
   * @param {string} [Param.chat_id] - Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel
   * @param {number} [Param.message_id] - Required if inline_message_id is not specified. Identifier of the message to edit
   * @param {number} [Param.inline_message_id] - Required if chat_id and message_id are not specified. Identifier of the inline message
   * @param {string} Param.text - New text of the message, 1-4096 characters after entities parsing
   * @param {string} [Param.parse_mode] - Mode for parsing entities in the message text
   * @param {object} [Paramreply_markup] - object for an inline keyboard
   * @param {object} [Param.entities] - list of special entities that appear in message text, which can be specified instead of parse_mode
   * @param {boolean} [Param.disable_web_page_preview] - Disables link previews for links in this message
   */
  ctx.editMessageText({chat_id:?, message_id:?, text:?,...})

   /**
   * Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned
   * https://core.telegram.org/bots/api#editmessagecaption
   * @param {object} Param - Object Parameter to edit message caption
   * @param {string} [Param.chat_id] - Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel
   * @param {number} [Param.message_id] - Required if inline_message_id is not specified. Identifier of the message to edit
   * @param {number} [Param.inline_message_id] - Required if chat_id and message_id are not specified. Identifier of the inline message
   * @param {string} [Param.caption] - New caption of the message, 0-1024 characters after entities parsing
   * @param {string} [Param.parse_mode] - Mode for parsing entities in the message caption
   * @param {object} [Param.reply_markup] - object for an inline keyboard
   * @param {object} [Param.caption_entities] - list of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  ctx.editMessageCaption({chat_id:?, message_id:?, caption:?,...})

    /**
   * Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned
   * https://core.telegram.org/bots/api#editmessagemedia
   * @param {object} Param - Object Parameter to edit message media
   * @param {string} Param.media - object for a new media content of the message
   * @param {string} [Param.chat_id] - Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel
   * @param {number} [Param.message_id] - Required if inline_message_id is not specified. Identifier of the message to edit
   * @param {number} [Param.inline_message_id] - Required if chat_id and message_id are not specified. Identifier of the inline message
   * @param {object} [Param.reply_markup] - object for a new inline keyboard
   */
  ctx.editMessageMedia({media?, chat_id:?, message_id:?,...})

  /**
   * Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned
   * https://core.telegram.org/bots/api#editmessagereplymarkup
   * @param {object} Param - Object Parameter to edit message reply markup
   * @param {string} [Param.chat_id] - Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel
   * @param {number} [Param.message_id] - Required if inline_message_id is not specified. Identifier of the message to edit
   * @param {number} [Param.inline_message_id] - Required if chat_id and message_id are not specified. Identifier of the inline message
   * @param {object} [Param.reply_markup] - object for an inline keyboard
   */
  ctx.editMessageReplyMarkup({chat_id:?, message_id:?, reply_markup:?,...})

  /**
   * Use this method to delete a message, including service messages
   * https://core.telegram.org/bots/api#deletemessage
   * @param {object} Param - Object Parameter to delete message
   * @param {string} [Param.chat_id] - Unique identifier for the target chat or username of the target channel
   * @param {number} [Param.message_id] - Identifier of the message to delete
   */
  ctx.deleteMessage({...})


```
