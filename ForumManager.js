class ForumManager {
  constructor(token) {
    this.token = token
  }

  getOperations() {
    const self = this;
    return {
      getForumTopicIconStickers: (objParam) => self.getForumTopicIconStickers(objParam),
      createForumTopic: (objParam) => self.createForumTopic(objParam),
      editForumTopic: (objParam) => self.editForumTopic(objParam),
      closeForumTopic: (objParam) => self.closeForumTopic(objParam),
      reopenForumTopic: (objParam) => self.reopenForumTopic(objParam),
      deleteForumTopic: (objParam) => self.deleteForumTopic(objParam),
      unpinAllForumTopicMessages: (objParam) => self.unpinAllForumTopicMessages(objParam),
      editGeneralForumTopic: (objParam) => self.editGeneralForumTopic(objParam),
      closeGeneralForumTopic: (objParam) => self.closeGeneralForumTopic(objParam),
      reopenGeneralForumTopic: (objParam) => self.reopenGeneralForumTopic(objParam),
      hideGeneralForumTopic: (objParam) => self.hideGeneralForumTopic(objParam),
      unhideGeneralForumTopic: (objParam) => self.unhideGeneralForumTopic(objParam),
      unpinAllGeneralForumTopicMessages: (objParam) => self.unpinAllGeneralForumTopicMessages(objParam),
    }
  }

  getForumTopicIconStickers(objParam) {
    return Utils.apiRequest(this.token, "getForumTopicIconStickers", objParam)
  }


  createForumTopic(objParam) {
    return Utils.apiRequest(this.token, "createForumTopic", objParam)
  }


  editForumTopic(objParam) {
    return Utils.apiRequest(this.token, "editForumTopic", objParam)
  }


  closeForumTopic(objParam) {
    return Utils.apiRequest(this.token, "closeForumTopic", objParam)
  }


  reopenForumTopic(objParam) {
    return Utils.apiRequest(this.token, 'reopenForumTopic', objParam)
  }


  deleteForumTopic(objParam) {
    return Utils.apiRequest(this.token, "deleteForumTopic", objParam)
  }


  unpinAllForumTopicMessages(objParam) {
    return Utils.apiRequest(this.token, 'unpinAllForumTopicMessages', objParam)
  }


  editGeneralForumTopic(objParam) {
    return Utils.apiRequest(this.token, 'editGeneralForumTopic', objParam)
  }

  closeGeneralForumTopic(objParam) {
    return Utils.apiRequest(this.token, 'closeGeneralForumTopic', objParam)
  }

  reopenGeneralForumTopic(objParam) {
    return Utils.apiRequest(this.token, 'reopenGeneralForumTopic', objParam)
  }

  hideGeneralForumTopic(objParam) {
    return Utils.apiRequest(this.token, 'hideGeneralForumTopic', objParam)
  }

  unhideGeneralForumTopic(objParam) {
    return Utils.apiRequest(this.token, 'unhideGeneralForumTopic', objParam)
  }

  unpinAllGeneralForumTopicMessages(objParam) {
    return Utils.apiRequest(this.token, "unpinAllGeneralForumTopicMessages", objParam)
  }

}
