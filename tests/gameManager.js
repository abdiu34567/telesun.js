const TEST_GAME_MANAGER = {
  run() {
    this.testGameManager();
  },

  testGameManager() {
    // Replace the real Utils.apiRequest with the mock version
    var originalApiRequest = Utils.apiRequest;
    Utils.apiRequest = MockUtils.apiRequest;

    var token = "sample_bot_token";
    var gameManager = new GameManager(token);

    // Test sendGame
    var sendGameParams = { chat_id: "12345", game_short_name: "my_game" };
    gameManager.sendGame(sendGameParams);
    validateApiRequestCall(
      { botToken: token, method: "sendGame", objParam: sendGameParams },
      "sendGame"
    );

    // Test setGameScore
    var setGameScoreParams = { user_id: "12345", score: 100 };
    gameManager.setGameScore(setGameScoreParams);
    validateApiRequestCall(
      { botToken: token, method: "setGameScore", objParam: setGameScoreParams },
      "setGameScore"
    );

    // Test getGameHighScores
    var getGameHighScoresParams = { user_id: "12345" };
    gameManager.getGameHighScores(getGameHighScoresParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "getGameHighScores",
        objParam: getGameHighScoresParams,
      },
      "getGameHighScores"
    );

    Logger.log("✅ All tests for GameManager passed!");

    // Restore the original Utils.apiRequest
    Utils.apiRequest = originalApiRequest;
  },
};
