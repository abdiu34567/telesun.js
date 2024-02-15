class MessageManager {

  constructor(token) {
    this.token = token
  }

  getOperations() {
    const self = this;
    return {
      reply: (text, objParam) => self.reply(text, objParam),
      replyWithHtml: (text, objParam) => self.replyWithHtml(text, objParam),
      replyWithMarkdown: (text, objParam) => self.replyWithMarkdown(text, objParam),
      replyWithPhoto: (photo, objParam) => self.replyWithPhoto(photo, objParam),
      replyWithChatAction: (action, objParam) => self.replyWithChatAction(action, objParam),
      replyWithEditedMessage: (text, objParam) => self.replyWithEditedMessage(text, objParam),

      sendMessage: (objParam) => self.sendMessage(objParam),
      forwardMessage: (objParam) => self.forwardMessage(objParam),
      forwardMessages: (objParam) => self.forwardMessages(objParam),
      copyMessage: (objParam) => self.copyMessage(objParam),
      copyMessages: (objParam) => self.copyMessages(objParam),
      sendPhoto: (objParam) => self.sendPhoto(objParam),
      sendAudio: (objParam) => self.sendAudio(objParam),
      sendDocument: (objParam) => self.sendDocument(objParam),
      sendVideo: (objParam) => self.sendVideo(objParam),
      sendAnimation: (objParam) => self.sendAnimation(objParam),
      sendVoice: (objParam) => self.sendVoice(objParam),
      sendVideoNote: (objParam) => self.sendVideoNote(objParam),
      sendMediaGroup: (objParam) => self.sendMediaGroup(objParam),
      sendLocation: (objParam) => self.sendLocation(objParam),
      sendVenue: (objParam) => self.sendVenue(objParam),
      sendContact: (objParam) => self.sendContact(objParam),
      sendPoll: (objParam) => self.sendPoll(objParam),
      stopPoll: (objParam) => self.stopPoll(objParam),
      sendDice: (objParam) => self.sendDice(objParam),
      sendChatAction: (objParam) => self.sendChatAction(objParam),
      setMessageReaction: (objParam) => self.setMessageReaction(objParam),
      deleteMessage: (objParam) => self.deleteMessage(objParam),
      deleteMessages: (objParam) => self.deleteMessages(objParam),
      editMessageText: (objParam) => self.editMessageText(objParam),
      editMessageCaption: (objParam) => self.editMessageCaption(objParam),
      editMessageMedia: (objParam) => self.editMessageMedia(objParam),
      editMessageReplyMarkup: (objParam) => self.editMessageReplyMarkup(objParam),
      stopMessageLiveLocation: (objParam) => self.stopMessageLiveLocation(objParam),
      editMessageLiveLocation: (objParam) => self.editMessageLiveLocation(objParam),
    }
  }

  reply(text, objParam) {
    Utils.validateRequiredParams(text, "text")

    return this.sendMessage({
      chat_id: UpdateManager.chatId(),
      text, ...objParam
    })
  }

  replyWithHtml(text, objParam) {
    Utils.validateRequiredParams(text, "text")

    return this.sendMessage({
      chat_id: UpdateManager.chatId(),
      parse_mode: "HTML",
      text, ...objParam
    })
  }

  replyWithMarkdown(text, objParam) {
    Utils.validateRequiredParams(text, "text")

    return this.sendMessage({
      chat_id: UpdateManager.chatId(),
      parse_mode: "MarkdownV2",
      text, ...objParam
    })
  }

  replyWithPhoto(photo, objParam) {
    Utils.validateRequiredParams(photo, "photo")

    return this.sendPhoto({
      chat_id: UpdateManager.chatId(),
      photo, ...objParam
    })
  }

  replyWithChatAction(action, objParam) {
    Utils.validateRequiredParams(action, "action")

    return this.sendChatAction({
      action, ...objParam,
      chat_id: UpdateManager.chatId()
    })
  }

  replyWithEditedMessage(text, objParam) {
    Utils.validateRequiredParams(text, "text")
    return this.editMessageText({
      text, ...objParam,
      chat_id: UpdateManager.chatId(),
      message_id: UpdateManager.messageId()
    });
  }


  sendMessage(objParam) {
    return Utils.apiRequest(this.token, "sendMessage", objParam);
  }

  forwardMessage(objParam) {
    return Utils.apiRequest(this.token, "forwardMessage", objParam);
  }

  forwardMessages(objParam) {
    return Utils.apiRequest(this.token, "forwardMessages", objParam)
  }

  copyMessage(objParam) {
    return Utils.apiRequest(this.token, "copyMessage", objParam);
  }

  copyMessages(objParam) {
    return Utils.apiRequest(this.token, "copyMessages", objParam)
  }

  sendPhoto(objParam) {
    return Utils.apiRequest(this.token, "sendPhoto", objParam);
  }

  sendAudio(objParam) {
    return Utils.apiRequest(this.token, "sendAudio", objParam);
  }

  sendDocument(objParam) {
    return Utils.apiRequest(this.token, "sendDocument", objParam);
  }

  sendVideo(objParam) {
    return Utils.apiRequest(this.token, "sendVideo", objParam);
  }

  sendAnimation(objParam) {
    return Utils.apiRequest(this.token, "sendAnimation", objParam);
  }

  sendVoice(objParam) {
    return Utils.apiRequest(this.token, "sendVoice", objParam);
  }


  sendVideoNote(objParam) {
    return Utils.apiRequest(this.token, "sendVideoNote", objParam);
  }


  sendMediaGroup(objParam) {
    return Utils.apiRequest(this.token, "sendMediaGroup", objParam);
  }

  sendLocation(objParam) {
    return Utils.apiRequest(this.token, "sendLocation", objParam);
  }

  sendVenue(objParam) {
    return Utils.apiRequest(this.token, "sendVenue", objParam);
  }

  sendContact(objParam) {
    return Utils.apiRequest(this.token, "sendContact", objParam);
  }

  sendPoll(objParam) {
    return Utils.apiRequest(this.token, "sendPoll", objParam);
  }

  stopPoll(objParam) {
    return Utils.apiRequest(this.token, 'stopPoll', objParam)
  }

  sendDice(objParam) {
    return Utils.apiRequest(this.token, "sendDice", objParam);
  }

  sendChatAction(objParam) {
    return Utils.apiRequest(this.token, "sendChatAction", objParam);
  }

  setMessageReaction(objParam) {
    return Utils.apiRequest(this.token, "setMessageReaction", objParam)
  }

  deleteMessage(objParam) {
    return Utils.apiRequest(this.token, "deleteMessage", objParam);
  }

  deleteMessages(objParam) {
    return Utils.apiRequest(this.token, 'deleteMessages', objParam)
  }

  editMessageText(objParam) {
    return Utils.apiRequest(this.token, "editMessageText", objParam);
  }

  editMessageCaption(objParam) {
    return Utils.apiRequest(this.token, "editMessageCaption", objParam);
  }

  editMessageMedia(objParam) {
    return Utils.apiRequest(this.token, "editMessageMedia", objParam);
  }

  editMessageReplyMarkup(objParam) {
    return Utils.apiRequest(this.token, "editMessageReplyMarkup", objParam);
  }

  stopMessageLiveLocation(objParam) {
    return Utils.apiRequest(this.token, "stopMessageLiveLocation", objParam);
  }

  editMessageLiveLocation(objParam) {
    return Utils.apiRequest(this.token, "editMessageLiveLocation", objParam);
  }

}