class GameManager {
  constructor(token) {
    this.token = token
  }

  getOperations() {
    const self = this;
    return {
      sendGame: (objParam) => self.sendGame(objParam),
      setGameScore: (objParam) => self.setGameScore(objParam),
      getGameHighScores: (objParam) => self.getGameHighScores(objParam),
    }
  }

  sendGame(objParam) {
    return Utils.apiRequest(this.token, "sendGame", objParam);
  }


  setGameScore(objParam) {
    return Utils.apiRequest(this.token, "setGameScore", objParam);
  }


  getGameHighScores(objParam) {
    return Utils.apiRequest(this.token, "getGameHighScores", objParam);
  }
}

