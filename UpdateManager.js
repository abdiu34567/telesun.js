class UpdateManager {
  static setUpdate(update) {
    if (!update) {
      throw new TelesunError(
        "FAILED_TO_GET_UPDATE",
        ERRORS.FAILED_TO_GET_UPDATE
      );
    }
    this.update = update;
  }

  static getOperations() {
    const self = this;
    return {
      update: self.update,
      messageUpdate: () => self.messageUpdate(),
      editedMessageUpdate: () => self.editedMessageUpdate(),
      channelPostUpdate: () => self.channelPostUpdate(),
      editedChannelPostUpdate: () => self.editedChannelPostUpdate(),
      inlineQueryUpdate: () => self.inlineQueryUpdate(),
      chosenInlineResultUpdate: () => self.chosenInlineResultUpdate(),
      callbackQueryUpdate: () => self.callbackQueryUpdate(),
      shippingQueryUpdate: () => self.shippingQueryUpdate(),
      preCheckoutQueryUpdate: () => self.preCheckoutQueryUpdate(),
      pollUpdate: () => self.pollUpdate(),
      pollAnswerUpdate: () => self.pollAnswerUpdate(),
      myChatMemberUpdate: () => self.myChatMemberUpdate(),
      chatMemberUpdate: () => self.chatMemberUpdate(),
      chatJoinRequestUpdate: () => self.chatJoinRequestUpdate(),
      messageReactionUpdate: () => self.messageReactionUpdate(),
      messageReactionCountUpdate: () => self.messageReactionCountUpdate(),
      chatBoostUpdate: () => self.chatBoostUpdate(),
      removedChatBoostUpdate: () => self.removedChatBoostUpdate(),
      updateType: () => self.updateType(),
      chat: () => self.chat(),
      from: () => self.from(),
      message: () => self.message(),
      chatId: () => self.chatId(),
      userId: () => self.userId(),
      messageId: () => self.messageId(),
    };
  }

  static messageUpdate() {
    return this.getUpdateOfType("message", this.update);
  }

  // ============ UNTASTED ================
  static editedMessageUpdate() {
    return this.getUpdateOfType("edited_message", this.update);
  }

  static channelPostUpdate() {
    return this.getUpdateOfType("channel_post", this.update);
  }

  static editedChannelPostUpdate() {
    return this.getUpdateOfType("edited_channel_post", this.update);
  }

  // =========================================

  static inlineQueryUpdate() {
    return this.getUpdateOfType("inline_query", this.update);
  }

  static chosenInlineResultUpdate() {
    return this.getUpdateOfType("chosen_inline_result", this.update);
  }

  static callbackQueryUpdate() {
    return this.getUpdateOfType("callback_query", this.update);
  }

  static shippingQueryUpdate() {
    return this.getUpdateOfType("shipping_query", this.update);
  }

  static preCheckoutQueryUpdate() {
    return this.getUpdateOfType("pre_checkout_query", this.update);
  }

  static pollUpdate() {
    return this.getUpdateOfType("poll", this.update);
  }

  static pollAnswerUpdate() {
    return this.getUpdateOfType("poll_answer", this.update);
  }

  //======================== UNTASTED ====================

  static myChatMemberUpdate() {
    return this.getUpdateOfType("my_chat_member", this.update);
  }

  //====================================================

  static chatMemberUpdate() {
    return this.getUpdateOfType("chat_member", this.update);
  }

  static chatJoinRequestUpdate() {
    return this.getUpdateOfType("chat_join_request", this.update);
  }

  static messageReactionUpdate() {
    return this.getUpdateOfType("message_reaction", this.update);
  }

  static messageReactionCountUpdate() {
    return this.getUpdateOfType("message_reaction_count", this.update);
  }

  static chatBoostUpdate() {
    return this.getUpdateOfType("chat_boost", this.update);
  }

  static removedChatBoostUpdate() {
    return this.getUpdateOfType("removed_chat_boost", this.update);
  }

  //return object of update
  static getUpdateOfType(type) {
    if (!this.update) {
      throw new TelesunError(
        "FAILED_TO_GET_UPDATE",
        ERRORS.FAILED_TO_GET_UPDATE
      );
    }

    if (!type) {
      throw new TelesunError("UNKNOWN_UPDATE_TYPE", ERRORS.UNKNOWN_UPDATE_TYPE);
    }

    if (this.update[type]) {
      return this.update[type];
    }

    return undefined;
  }

  //return the name of update type
  static updateType() {
    if (
      !this.update ||
      typeof this.update !== "object" ||
      !this.update.update_id
    ) {
      throw new TelesunError(
        "INVALID_UPDATE_OBJECT",
        ERRORS.INVALID_UPDATE_OBJECT
      );
    }

    const updateType = CONFIG.ALLOWED_UPDATES.find(
      (type) => type in this.update
    );

    if (!updateType) {
      throw new TelesunError("UNKNOWN_UPDATE_TYPE", ERRORS.UNKNOWN_UPDATE_TYPE);
    }

    return updateType;
  }

  /**
   * Update types that includes `chat` object are:
   * `message`
   * `edited_message`
   * `channel_post`
   * `edited_channel_post`
   * `message_reaction`
   * `message_reaction_count`
   * `callback_query`
   * `chat_member`
   * `my_chat_member`
   * `chat_join_request`
   * `chat_boost`
   * `removed_chat_boost`
   */
  static chat() {
    /** Update types that includes `chat` object are:*/
    const types = [
      "message",
      "edited_message",
      "channel_post",
      "edited_channel_post",
      "message_reaction",
      "message_reaction_count",
      "callback_query",
      "chat_member",
      "my_chat_member",
      "chat_join_request",
      "chat_boost",
      "removed_chat_boost",
    ];

    let updateContent = undefined;

    for (const type of types) {
      updateContent = this.getUpdateOfType(type);
      if (updateContent) {
        break;
      }
    }

    if (updateContent) {
      //Except callback_query update other
      //updated directly contain `chat` object
      const chat = updateContent.chat || updateContent.message?.chat;

      //some update type doesn't include `chat` object
      if (chat) {
        return chat;
      }
    }

    return undefined;
  }

  /**
   * Update types that includes `from` object are:
   * message
   * edited_message
   * channel_post
   * edited_channel_post
   * inline_query,
   * chosen_inline_result
   * callback_query
   * shipping_query
   * pre_checkout_query
   * chat_member
   * my_chat_member
   * chat_join_request,
   */
  static from() {
    const types = [
      "message",
      "edited_message",
      "channel_post",
      "edited_channel_post",
      "inline_query",
      "chosen_inline_result",
      "callback_query",
      "pre_checkout_query",
      "shipping_query",
      "chat_member",
      "my_chat_member",
      "chat_join_request",
    ];

    let updateContent = undefined;

    for (const type of types) {
      updateContent = this.getUpdateOfType(type);
      if (updateContent) {
        break;
      }
    }

    if (updateContent) {
      const from = updateContent.from;
      if (from) {
        return from;
      }
    }

    return undefined;
  }

  /**
   * Update types that includes `message` object are:
   * `message`
   * `edited_message`
   * `channel_post`
   * `edited_channel_post`
   * `callback_query`
   */
  static message() {
    const types = [
      "message",
      "edited_message",
      "channel_post",
      "edited_channel_post",
      "callback_query",
    ];

    let updateContent = undefined;

    for (const type of types) {
      updateContent = this.getUpdateOfType(type);
      if (updateContent) {
        break;
      }
    }

    if (updateContent) {
      //callback_query will optionally include
      //nested `message` object.
      const message = this.update.message || this.update;
      if (message) return message;
    }

    return undefined;
  }

  static chatId() {
    const chat = this.chat();
    if (!chat || !chat.id) {
      throw new TelesunError("CHAT_NOT_FOUND", ERRORS.CHAT_NOT_FOUND);
    }
    return chat.id;
  }

  static userId() {
    const user = this.from();
    if (!user || !user.id) {
      throw new TelesunError("USER_NOT_FOUND", ERRORS.USER_NOT_FOUND);
    }
    return user.id;
  }

  /**
   * Update types that includes `message_id` field are:
   * message
   * edited_message
   * channel_post
   * edited_channel_post
   * callback_query
   * message_reaction
   * `message_reaction_count`
   */
  static messageId() {
    const types = [
      "message",
      "edited_message",
      "channel_post",
      "edited_channel_post",
      "callback_query",
      "message_reaction",
      "message_reaction_count",
    ];

    let updateContent = undefined;

    for (const type of types) {
      updateContent = this.getUpdateOfType(type);
      if (updateContent) {
        break;
      }
    }

    if (updateContent) {
      return updateContent.message?.message_id || updateContent.message_id;
    }
  }
}
