class BotInfoManager {

  constructor(token) {
    this.token = token
  }

  getOperations() {
    const self = this;
    return {
      getWebhookInfo: () => self.getWebhookInfo(),
      deleteMyCommands: (objParam) => self.deleteMyCommands(objParam),
      setMyCommands: (objParam) => self.setMyCommands(objParam),
      getMyCommands: (objParam) => self.getMyCommands(objParam),
      setMyName: (objParam) => self.setMyName(objParam),
      getMyName: (objParam) => self.getMyName(objParam),
      setMyDescription: (objParam) => self.setMyDescription(objParam),
      getMyDescription: (objParam) => self.getMyDescription(objParam),
      setMyShortDescription: (objParam) => self.setMyShortDescription(objParam),
      getMyShortDescription: (objParam) => self.getMyShortDescription(objParam),
      setMyDefaultAdministratorRights: (objParam) => self.setMyDefaultAdministratorRights(objParam),
      getMyDefaultAdministratorRights: (objParam) => self.getMyDefaultAdministratorRights(objParam),
      getMe: () => self.getMe(),
      logOut: () => self.logOut(),
      close: () => self.close(),
    }
  }

  getWebhookInfo() {
    return Utils.apiRequest(
      this.token,
      "getWebhookInfo"
    )
  };

  deleteMyCommands(objParam) {
    return Utils.apiRequest(this.token, "deleteMyCommands", objParam);
  }

  setMyCommands(objParam) {
    return Utils.apiRequest(this.token, "setMyCommands", objParam);
  }

  getMyCommands(objParam) {
    return Utils.apiRequest(this.token, "getMyCommands", objParam);
  }

  setMyName(objParam) {
    return Utils.apiRequest(this.token, 'setMyName', objParam)
  }

  getMyName(objParam) {
    return Utils.apiRequest(this.token, 'getMyName', objParam)
  }

  setMyDescription(objParam) {
    return Utils.apiRequest(this.token, 'setMyDescription', objParam)
  }

  getMyDescription(objParam) {
    return Utils.apiRequest(this.token, 'getMyDescription', objParam)
  }


  setMyShortDescription(objParam) {
    return Utils.apiRequest(this.token, 'setMyShortDescription', objParam)
  }

  getMyShortDescription(objParam) {
    return Utils.apiRequest(this.token, 'getMyShortDescription', objParam)
  }


  setMyDefaultAdministratorRights(objParam) {
    return Utils.apiRequest(this.token, "setMyDefaultAdministratorRights", objParam);
  }

  getMyDefaultAdministratorRights(objParam) {
    return Utils.apiRequest(this.token, "getMyDefaultAdministratorRights", objParam);
  }

  getMe() {
    return Utils.apiRequest(this.token, "getMe")
  }

  logOut() {
    return Utils.apiRequest(this.token, "logOut")
  }

  close() {
    return Utils.apiRequest(this.token, "close");
  }

}
