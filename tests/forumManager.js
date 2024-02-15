const TEST_FORUM_MANAGER = {
  run() {
    this.testForumManager();
  },

  testForumManager() {
    // Replace the real Utils.apiRequest with the mock version
    var originalApiRequest = Utils.apiRequest;
    Utils.apiRequest = MockUtils.apiRequest;

    var token = "sample_bot_token";
    var forumManager = new ForumManager(token);

    // Test getForumTopicIconStickers
    var getForumTopicIconStickersParams = { forum_topic_id: "12345" };
    forumManager.getForumTopicIconStickers(getForumTopicIconStickersParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "getForumTopicIconStickers",
        objParam: getForumTopicIconStickersParams,
      },
      "getForumTopicIconStickers"
    );

    // Test createForumTopic
    var createForumTopicParams = {
      title: "New Topic",
      description: "Description",
    };
    forumManager.createForumTopic(createForumTopicParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "createForumTopic",
        objParam: createForumTopicParams,
      },
      "createForumTopic"
    );

    // Test editForumTopic
    var editForumTopicParams = {
      forum_topic_id: "12345",
      title: "Edited Topic",
    };
    forumManager.editForumTopic(editForumTopicParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "editForumTopic",
        objParam: editForumTopicParams,
      },
      "editForumTopic"
    );

    // Test closeForumTopic
    var closeForumTopicParams = {
      forum_topic_id: "12345",
      title: "Edited Topic",
    };
    forumManager.closeForumTopic(closeForumTopicParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "closeForumTopic",
        objParam: closeForumTopicParams,
      },
      "closeForumTopic"
    );

    // Test reopenForumTopic
    var reopenForumTopicParams = {
      forum_topic_id: "12345",
      title: "Edited Topic",
    };
    forumManager.reopenForumTopic(reopenForumTopicParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "reopenForumTopic",
        objParam: reopenForumTopicParams,
      },
      "reopenForumTopic"
    );

    // Test editForumTopic
    var deleteForumTopicParams = {
      forum_topic_id: "12345",
      title: "Edited Topic",
    };
    forumManager.deleteForumTopic(deleteForumTopicParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "deleteForumTopic",
        objParam: deleteForumTopicParams,
      },
      "deleteForumTopic"
    );

    // Test unpinAllForumTopicMessages
    var unpinAllForumTopicMessagesParams = {
      forum_topic_id: "12345",
      title: "Edited Topic",
    };
    forumManager.unpinAllForumTopicMessages(unpinAllForumTopicMessagesParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "unpinAllForumTopicMessages",
        objParam: unpinAllForumTopicMessagesParams,
      },
      "unpinAllForumTopicMessages"
    );

    // Test editGeneralForumTopic
    var editGeneralForumTopicParams = {
      forum_topic_id: "12345",
      title: "Edited Topic",
    };
    forumManager.editGeneralForumTopic(editGeneralForumTopicParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "editGeneralForumTopic",
        objParam: editGeneralForumTopicParams,
      },
      "editGeneralForumTopic"
    );

    // Test closeGeneralForumTopic
    var closeGeneralForumTopicParams = {
      forum_topic_id: "12345",
      title: "Edited Topic",
    };
    forumManager.closeGeneralForumTopic(closeGeneralForumTopicParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "closeGeneralForumTopic",
        objParam: closeGeneralForumTopicParams,
      },
      "closeGeneralForumTopic"
    );

    // Test reopenGeneralForumTopic
    var reopenGeneralForumTopicParams = {
      forum_topic_id: "12345",
      title: "Edited Topic",
    };
    forumManager.reopenGeneralForumTopic(reopenGeneralForumTopicParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "reopenGeneralForumTopic",
        objParam: reopenGeneralForumTopicParams,
      },
      "reopenGeneralForumTopic"
    );

    // Test hideGeneralForumTopic
    var hideGeneralForumTopicParams = {
      forum_topic_id: "12345",
      title: "Edited Topic",
    };
    forumManager.hideGeneralForumTopic(hideGeneralForumTopicParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "hideGeneralForumTopic",
        objParam: hideGeneralForumTopicParams,
      },
      "hideGeneralForumTopic"
    );

    // Test unhideGeneralForumTopic
    var unhideGeneralForumTopicParams = {
      forum_topic_id: "12345",
      title: "Edited Topic",
    };
    forumManager.unhideGeneralForumTopic(unhideGeneralForumTopicParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "unhideGeneralForumTopic",
        objParam: unhideGeneralForumTopicParams,
      },
      "unhideGeneralForumTopic"
    );

    // Test unpinAllGeneralForumTopicMessages
    var unpinAllGeneralForumTopicMessagesParams = {
      forum_topic_id: "12345",
      title: "Edited Topic",
    };
    forumManager.unpinAllGeneralForumTopicMessages(
      unpinAllGeneralForumTopicMessagesParams
    );
    validateApiRequestCall(
      {
        botToken: token,
        method: "unpinAllGeneralForumTopicMessages",
        objParam: unpinAllGeneralForumTopicMessagesParams,
      },
      "unpinAllGeneralForumTopicMessages"
    );

    // ... Similarly, you can add more tests for other methods ...
    Logger.log("✅ All tests for ForumManager passed!");

    // Restore the original Utils.apiRequest
    Utils.apiRequest = originalApiRequest;
  },
};
