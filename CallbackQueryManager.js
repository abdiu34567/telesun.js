class CallbackQueryManager {
  constructor(token) {
    this.token = token
  }

  getOperations() {
    const self = this;
    return {
      answerCallbackQuery: (objParam) => self.answerCallbackQuery(objParam),
    }
  }

  answerCallbackQuery(objParam) {
    return Utils.apiRequest(this.token, "answerCallbackQuery", objParam)
  }
}
