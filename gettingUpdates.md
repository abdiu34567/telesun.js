## Getting Updates

There is 2 ways to get updates from your bot

> - [Webhook](https://github.com/abdiu34567/telesun.js/blob/main/WebHooks.md)
> - [Polling](https://github.com/abdiu34567/telesun.js/blob/main/LongPolling.md)

How To Use :

```js
/**
 * Use this method to receive incoming updates using long polling (wiki)
 *
 * https://core.telegram.org/bots/api#getupdates
 * @param {object} [Param] - Object Parameter to get Updates
 * @param {array}  [Param.allowed_updates]  - list of the update types you want your bot to receive. For example, specify [“message”, “edited_channel_post”, “callback_query”] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member (default). If not specified, the previous setting will be used. Please note that this parameter doesn't affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time
 * @param {number} [Param.offset] - Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will forgotten
 * @param {number} [Param.limit] - Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100
 * @param {number} [Param.timeout] - Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only
 * @returns an Array of Update objects
 */
Bot.getUpdates({...})

/**
 * Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case of an unsuccessful request, we will give up after a reasonable amount of attempts.
 * If you'd like to make sure that the webhook was set by you, you can specify secret data in the parameter secret_token. If specified, the request will contain a header “X-Telegram-Bot-Api-Secret-Token” with the secret token as content
* https://core.telegram.org/bots/api#setwebhook
* @param {object} Param - Object Parameter to set webhook
* @param {string} Param.url - HTTPS URL to send updates to. Use an empty string to remove webhook integration
* @param {string} [Param.certificate] - Upload your public key certificate so that the root certificate in use can be checked
* @param {string} [Param.ip_address] - The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS
* @param {integer} [Param.max_connections] - The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40. Use lower values to limit the load on your bot's server, and higher values to increase your bot's throughput
* @param {array} [Param.allowed_updates] - list of the update types you want your bot to receive. For example, specify [“message”, “edited_channel_post”, “callback_query”] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member (default). If not specified, the previous setting will be used.
Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time
* @param {boolean} [Param.drop_pending_updates] -  Pass True to drop all pending updates
* @param {string} [Param.secret_token] - A secret token to be sent in a header “X-Telegram-Bot-Api-Secret-Token” in every webhook request, 1-256 characters. Only characters A-Z, a-z, 0-9, _ and - are allowed. The header is useful to ensure that the request comes from a webhook set by you
* @Returns True on success
*/
Bot.setWebHook({url:?,...})

/**
 * Use this method to remove webhook integration if you decide to switch back to getUpdates
 * https://core.telegram.org/bots/api#deletewebhook
 * @param {object} [Param] - Object Parameter to delete webhook
 * @param {boolean} [Param.drop_pending_updates] - Pass True to drop all pending updates
 * @Returns True on success
 */
Bot.deleteWebhook({...})

/**
 * Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates
 *
 * https://core.telegram.org/bots/api#getwebhookinfo
 * @returns an object with the url field empty
 */
Bot.getWebhookInfo()
```
