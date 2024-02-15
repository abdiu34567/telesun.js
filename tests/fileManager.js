const TEST_FILE_MANAGER = {
  run() {
    this.testFileManager();
  },

  testFileManager() {
    // Replace the real Utils.apiRequest with the mock version
    var originalApiRequest = Utils.apiRequest;
    Utils.apiRequest = MockUtils.apiRequest;

    var token = "sample_bot_token";
    var fileManager = new FileManager(token);

    // Test getUserProfilePhotos
    var getUserProfilePhotosParams = { user_id: "12345" };
    fileManager.getUserProfilePhotos(getUserProfilePhotosParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "getUserProfilePhotos",
        objParam: getUserProfilePhotosParams,
      },
      "getUserProfilePhotos"
    );

    // Test getFile
    var getFileParams = { file_id: "file_id_12345" };
    fileManager.getFile(getFileParams);
    validateApiRequestCall(
      { botToken: token, method: "getFile", objParam: getFileParams },
      "getFile"
    );

    Logger.log("✅ All tests for FileManager passed!");

    // Restore the original Utils.apiRequest
    Utils.apiRequest = originalApiRequest;
  },
};
