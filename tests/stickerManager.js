const TEST_STICKER_MANAGER = {
  run() {
    this.testStickerManager();
  },

  testStickerManager() {
    // Replace the real Utils.apiRequest with the mock version
    var originalApiRequest = Utils.apiRequest;
    Utils.apiRequest = MockUtils.apiRequest;

    var token = "sample_bot_token";
    var stickerManager = new StickerManager(token);

    // Test sendSticker
    var sendStickerParams = { chat_id: "12345", sticker: "sticker_file_id" };
    stickerManager.sendSticker(sendStickerParams);
    var expectedSendStickerParams = {
      botToken: token,
      method: "sendSticker",
      objParam: sendStickerParams,
    };
    validateApiRequestCall(expectedSendStickerParams, "sendSticker");

    // Test getStickerSet
    var getStickerSetParams = { name: "sticker_set_name" };
    stickerManager.getStickerSet(getStickerSetParams);
    var expectedGetStickerSetParams = {
      botToken: token,
      method: "getStickerSet",
      objParam: getStickerSetParams,
    };
    validateApiRequestCall(expectedGetStickerSetParams, "getStickerSet");

    // Test uploadStickerFile
    var uploadStickerFileParams = { user_id: "12345", png_sticker: "file_id" };
    stickerManager.uploadStickerFile(uploadStickerFileParams);
    var expectedUploadStickerFileParams = {
      botToken: token,
      method: "uploadStickerFile",
      objParam: uploadStickerFileParams,
    };
    validateApiRequestCall(
      expectedUploadStickerFileParams,
      "uploadStickerFile"
    );

    // Test getCustomEmojiStickers
    var getCustomEmojiStickersParams = {
      user_id: "12345",
      png_sticker: "file_id",
    };
    stickerManager.getCustomEmojiStickers(getCustomEmojiStickersParams);
    var expectedgetCustomEmojiStickersParams = {
      botToken: token,
      method: "getCustomEmojiStickers",
      objParam: getCustomEmojiStickersParams,
    };
    validateApiRequestCall(
      expectedgetCustomEmojiStickersParams,
      "getCustomEmojiStickers"
    );

    // Test createNewStickerSet
    var createNewStickerSetParams = {
      user_id: "12345",
      png_sticker: "file_id",
    };
    stickerManager.createNewStickerSet(createNewStickerSetParams);
    var expectedcreateNewStickerSetParams = {
      botToken: token,
      method: "createNewStickerSet",
      objParam: createNewStickerSetParams,
    };
    validateApiRequestCall(
      expectedcreateNewStickerSetParams,
      "createNewStickerSet"
    );

    // Test addStickerToSet
    var addStickerToSetParams = { user_id: "12345", png_sticker: "file_id" };
    stickerManager.addStickerToSet(addStickerToSetParams);
    var expectedaddStickerToSetParams = {
      botToken: token,
      method: "addStickerToSet",
      objParam: addStickerToSetParams,
    };
    validateApiRequestCall(expectedaddStickerToSetParams, "addStickerToSet");

    // Test setStickerPositionInSet
    var setStickerPositionInSetParams = {
      user_id: "12345",
      png_sticker: "file_id",
    };
    stickerManager.setStickerPositionInSet(setStickerPositionInSetParams);
    var expectedsetStickerPositionInSetParams = {
      botToken: token,
      method: "setStickerPositionInSet",
      objParam: setStickerPositionInSetParams,
    };
    validateApiRequestCall(
      expectedsetStickerPositionInSetParams,
      "setStickerPositionInSet"
    );

    // Test deleteStickerFromSet
    var deleteStickerFromSetParams = {
      user_id: "12345",
      png_sticker: "file_id",
    };
    stickerManager.deleteStickerFromSet(deleteStickerFromSetParams);
    var expecteddeleteStickerFromSetParams = {
      botToken: token,
      method: "deleteStickerFromSet",
      objParam: deleteStickerFromSetParams,
    };
    validateApiRequestCall(
      expecteddeleteStickerFromSetParams,
      "deleteStickerFromSet"
    );

    // Test setStickerEmojiList
    var setStickerEmojiListParams = {
      user_id: "12345",
      png_sticker: "file_id",
    };
    stickerManager.setStickerEmojiList(setStickerEmojiListParams);
    var expectedsetStickerEmojiListParams = {
      botToken: token,
      method: "setStickerEmojiList",
      objParam: setStickerEmojiListParams,
    };
    validateApiRequestCall(
      expectedsetStickerEmojiListParams,
      "setStickerEmojiList"
    );

    // Test setStickerKeywords
    var setStickerKeywordsParams = { user_id: "12345", png_sticker: "file_id" };
    stickerManager.setStickerKeywords(setStickerKeywordsParams);
    var expectedsetStickerKeywordsParams = {
      botToken: token,
      method: "setStickerKeywords",
      objParam: setStickerKeywordsParams,
    };
    validateApiRequestCall(
      expectedsetStickerKeywordsParams,
      "setStickerKeywords"
    );

    // Test setStickerMaskPosition
    var setStickerMaskPositionParams = {
      user_id: "12345",
      png_sticker: "file_id",
    };
    stickerManager.setStickerMaskPosition(setStickerMaskPositionParams);
    var expectedsetStickerMaskPositionParams = {
      botToken: token,
      method: "setStickerMaskPosition",
      objParam: setStickerMaskPositionParams,
    };
    validateApiRequestCall(
      expectedsetStickerMaskPositionParams,
      "setStickerMaskPosition"
    );

    // Test setStickerSetTitle
    var setStickerSetTitleParams = { user_id: "12345", png_sticker: "file_id" };
    stickerManager.setStickerSetTitle(setStickerSetTitleParams);
    var expectedsetStickerSetTitleParams = {
      botToken: token,
      method: "setStickerSetTitle",
      objParam: setStickerSetTitleParams,
    };
    validateApiRequestCall(
      expectedsetStickerSetTitleParams,
      "setStickerSetTitle"
    );

    // Test setStickerSetThumbnail
    var setStickerSetThumbnailParams = {
      user_id: "12345",
      png_sticker: "file_id",
    };
    stickerManager.setStickerSetThumbnail(setStickerSetThumbnailParams);
    var expectedsetStickerSetThumbnailParams = {
      botToken: token,
      method: "setStickerSetThumbnail",
      objParam: setStickerSetThumbnailParams,
    };
    validateApiRequestCall(
      expectedsetStickerSetThumbnailParams,
      "setStickerSetThumbnail"
    );

    // Test setCustomEmojiStickerSetThumbnail
    var setCustomEmojiStickerSetThumbnailParams = {
      user_id: "12345",
      png_sticker: "file_id",
    };
    stickerManager.setCustomEmojiStickerSetThumbnail(
      setCustomEmojiStickerSetThumbnailParams
    );
    var expectedsetCustomEmojiStickerSetThumbnailParams = {
      botToken: token,
      method: "setCustomEmojiStickerSetThumbnail",
      objParam: setCustomEmojiStickerSetThumbnailParams,
    };
    validateApiRequestCall(
      expectedsetCustomEmojiStickerSetThumbnailParams,
      "setCustomEmojiStickerSetThumbnail"
    );

    // Test deleteStickerSet
    var deleteStickerSetParams = { user_id: "12345", png_sticker: "file_id" };
    stickerManager.deleteStickerSet(deleteStickerSetParams);
    var expecteddeleteStickerSetParams = {
      botToken: token,
      method: "deleteStickerSet",
      objParam: deleteStickerSetParams,
    };
    validateApiRequestCall(expecteddeleteStickerSetParams, "deleteStickerSet");

    // ... Similarly, you can add more tests for other methods ...

    Logger.log("✅ All tests for StickerManager passed!");

    // Restore the original Utils.apiRequest
    Utils.apiRequest = originalApiRequest;
  },
};
