
class ChatManager {

  constructor(token) {
    this.token = token
  }

  getOperations() {
    const self = this;
    return {
      banChatMember: (objParam) => self.banChatMember(objParam),
      unbanChatMember: (objParam) => self.unbanChatMember(objParam),
      restrictChatMember: (objParam) => self.restrictChatMember(objParam),
      promoteChatMember: (objParam) => self.promoteChatMember(objParam),
      setChatAdministratorCustomTitle: (objParam) => self.setChatAdministratorCustomTitle(objParam),
      banChatSenderChat: (objParam) => self.banChatSenderChat(objParam),
      unbanChatSenderChat: (objParam) => self.unbanChatSenderChat(objParam),
      setChatPermissions: (objParam) => self.setChatPermissions(objParam),
      exportChatInviteLink: (objParam) => self.exportChatInviteLink(objParam),
      createChatInviteLink: (objParam) => self.createChatInviteLink(objParam),
      editChatInviteLink: (objParam) => self.editChatInviteLink(objParam),
      revokeChatInviteLink: (objParam) => self.revokeChatInviteLink(objParam),
      approveChatJoinRequest: (objParam) => self.approveChatJoinRequest(objParam),
      declineChatJoinRequest: (objParam) => self.declineChatJoinRequest(objParam),
      setChatPhoto: (objParam) => self.setChatPhoto(objParam),
      deleteChatPhoto: (objParam) => self.deleteChatPhoto(objParam),
      setChatTitle: (objParam) => self.setChatTitle(objParam),
      setChatDescription: (objParam) => self.setChatDescription(objParam),
      pinChatMessage: (objParam) => self.pinChatMessage(objParam),
      unpinChatMessage: (objParam) => self.unpinChatMessage(objParam),
      unpinAllChatMessages: (objParam) => self.unpinAllChatMessages(objParam),
      leaveChat: (objParam) => self.leaveChat(objParam),
      getChat: (objParam) => self.getChat(objParam),
      getChatAdministrators: (objParam) => self.getChatAdministrators(objParam),
      getChatMemberCount: (objParam) => self.getChatMemberCount(objParam),
      getChatMember: (objParam) => self.getChatMember(objParam),
      setChatStickerSet: (objParam) => self.setChatStickerSet(objParam),
      deleteChatStickerSet: (objParam) => self.deleteChatStickerSet(objParam),
      setChatMenuButton: (objParam) => self.setChatMenuButton(objParam),
      getChatMenuButton: (objParam) => self.getChatMenuButton(objParam),
      getUserChatBoosts: (objParam) => self.getUserChatBoosts(objParam),
    }
  }

  banChatMember(objParam) {
    return Utils.apiRequest(this.token, "banChatMember", objParam);
  }


  unbanChatMember(objParam) {
    return Utils.apiRequest(this.token, "unbanChatMember", objParam);
  }

  restrictChatMember(objParam) {
    return Utils.apiRequest(this.token, "restrictChatMember", objParam);
  }


  promoteChatMember(objParam) {
    return Utils.apiRequest(this.token, "promoteChatMember", objParam);
  }


  setChatAdministratorCustomTitle(objParam) {
    return Utils.apiRequest(this.token, "setChatAdministratorCustomTitle", objParam);
  }


  banChatSenderChat(objParam) {
    return Utils.apiRequest(this.token, "banChatSenderChat", objParam);
  }

  unbanChatSenderChat(objParam) {
    return Utils.apiRequest(this.token, "unbanChatSenderChat", objParam);
  }


  setChatPermissions(objParam) {
    return Utils.apiRequest(this.token, "setChatPermissions", objParam);
  }


  exportChatInviteLink(objParam) {
    return Utils.apiRequest(this.token, "exportChatInviteLink", objParam);
  }

  createChatInviteLink(objParam) {
    return Utils.apiRequest(this.token, "createChatInviteLink", objParam);
  }


  editChatInviteLink(objParam) {
    return Utils.apiRequest(this.token, "editChatInviteLink", objParam);
  }


  revokeChatInviteLink(objParam) {
    return Utils.apiRequest(this.token, "revokeChatInviteLink", objParam);
  }


  approveChatJoinRequest(objParam) {
    return Utils.apiRequest(this.token, "approveChatJoinRequest", objParam);
  }


  declineChatJoinRequest(objParam) {
    return Utils.apiRequest(this.token, "declineChatJoinRequest", objParam);
  }


  setChatPhoto(objParam) {
    return Utils.apiRequest(this.token, "setChatPhoto", objParam);
  }


  deleteChatPhoto(objParam) {
    return Utils.apiRequest(this.token, "deleteChatPhoto", objParam);
  }


  setChatTitle(objParam) {
    return Utils.apiRequest(this.token, "setChatTitle", objParam);
  }

  setChatDescription(objParam) {
    return Utils.apiRequest(this.token, "setChatDescription", objParam);
  }


  pinChatMessage(objParam) {
    return Utils.apiRequest(this.token, "pinChatMessage", objParam);
  }


  unpinChatMessage(objParam) {
    return Utils.apiRequest(this.token, "unpinChatMessage", objParam);
  }


  unpinAllChatMessages(objParam) {
    return Utils.apiRequest(this.token, "unpinAllChatMessages", objParam);
  }


  leaveChat(objParam) {
    return Utils.apiRequest(this.token, "leaveChat", objParam);
  }

  getChat(objParam) {
    return Utils.apiRequest(this.token, "getChat", objParam);
  }

  getChatAdministrators(objParam) {
    return Utils.apiRequest(this.token, "getChatAdministrators", objParam);
  }

  getChatMemberCount(objParam) {
    return Utils.apiRequest(this.token, "getChatMemberCount", objParam);
  }

  getChatMember(objParam) {
    return Utils.apiRequest(this.token, "getChatMember", objParam);
  }

  setChatStickerSet(objParam) {
    return Utils.apiRequest(this.token, "setChatStickerSet", objParam);
  }

  deleteChatStickerSet(objParam) {
    return Utils.apiRequest(this.token, "deleteChatStickerSet", objParam);
  }

  setChatMenuButton(objParam) {
    return Utils.apiRequest(this.token, "setChatMenuButton", objParam);
  }

  getChatMenuButton(objParam) {
    return Utils.apiRequest(this.token, "getChatMenuButton", objParam);
  }

  getUserChatBoosts(objParam) {
    return Utils.apiRequest(this.token, 'getUserChatBoosts', objParam)
  }

}