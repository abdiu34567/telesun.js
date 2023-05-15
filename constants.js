/**
 * Constants used in the Telegram bot library.
 * @namespace Constants
 */
const Constants = {
  /**
   * The base URL for the Telegram API.
   * @type {string}
   * @memberof Constants
   */
  TELEGRAM_API_URL: "https://api.telegram.org/bot",


  /**
  * The value representing the next middleware.
  * @type {number}
  * @memberof Constants
  */
  NEXT_MIDDLEWARE: 1,

  /**
    * The value representing the next middleware.
    * @type {Object}
    * @memberof Constants
    */
  ALLOWED_UPDATES: ["message", "edited_message",
    "channel_post", "edited_channel_post",
    "inline_query", "chosen_inline_result",
    "callback_query", "shipping_query",
    "pre_checkout_query", "poll",
    "poll_answer", "my_chat_member",
    "chat_member", "chat_join_request"],

  /**
    * The value representing the next middleware.
    * @type {number}
    * @memberof Constants
    */
  NEW_REQUEST_UPDATE: -1,
}
