class InlineQueryManager {

  constructor(token) {
    this.token = token
  }

  getOperations() {
    const self = this;
    return {
      answerInlineQuery: (objParam) => self.answerInlineQuery(objParam),
      answerWebAppQuery: (objParam) => self.answerWebAppQuery(objParam),
    }
  }

  answerInlineQuery(objParam) {
    return Utils.apiRequest(this.token, "answerInlineQuery", objParam);
  }

  answerWebAppQuery(objParam) {
    return Utils.apiRequest(this.token, "answerWebAppQuery", objParam);
  }

}

