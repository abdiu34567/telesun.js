/**
 * When keyboards are clicked
 *
 * @param {object} apiResponse - apiResponse
 * @returns id | callback_data | callbackQueryId | msg_id | username | text
 */
function CallbackContent(apiResponse) {
  return {
    id: apiResponse.callback_query.from.id,
    callback_data: apiResponse.callback_query.data,
    callbackQueryId: apiResponse.callback_query.id,
    msg_id: apiResponse.callback_query.message.message_id,
    username: apiResponse.callback_query.from.username,
    text: apiResponse.callback_query.message.text,
  }
}

/**
 * on querying inline
 *
 * @param {object} apiResponse
 * @returns id | firstName | callbackQueryId | queryId | query | offset
 */
function InlineContents(apiResponse) {
  return {
    id: apiResponse.inline_query.from.id,
    firstName: apiResponse.inline_query.from.first_name,
    queryId: apiResponse.inline_query.id,
    query: apiResponse.inline_query.query,
    offset: apiResponse.inline_query.offset,
  }
}

/**
 * when any text sent
 *
 * @param {object} apiResponse
 * @returns name | text | id | queryId | username | msgid
 */
function TextContents(apiResponse) {
  return {
    name: apiResponse.message.from.first_name,
    text: apiResponse.message.text,
    id: apiResponse.message.from.id,
    username: apiResponse.message.from.username,
    msgid: apiResponse.message.message_id,
  }
}

/**
 * when user share contact
 *
 * @param {object} apiResponse
 * @returns name | contact | id | username | msgid
 */
function ContactContents(apiResponse) {
  return {
    name: apiResponse.message.from.first_name,
    contact: apiResponse.message.contact.phone_number,
    id: apiResponse.message.from.id,
    username: apiResponse.message.from.username,
    msgid: apiResponse.message.message_id,
  }
}

/**
 * when user upload photo
 *
 * @param {object} apiResponse
 * @returns name | photo | id | username | msgid
 */
function PhotoContents(apiResponse) {
  return {
    name: apiResponse.message.from.first_name,
    photo: apiResponse.message.photo[0].file_id,
    id: apiResponse.message.from.id,
    username: apiResponse.message.from.username,
    msgid: apiResponse.message.message_id,
  }
}
