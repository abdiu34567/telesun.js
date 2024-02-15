const TEST_CHAT_MANAGER = {
  run() {
    this.testChatManager();
  },

  testChatManager() {
    // Replace the real Utils.apiRequest with the mock version
    var originalApiRequest = Utils.apiRequest;
    Utils.apiRequest = MockUtils.apiRequest;

    var token = "sample_bot_token";
    var chatManager = new ChatManager(token);

    // Test banChatMember
    var banChatMemberParams = { chat_id: "12345", user_id: "67890" };
    chatManager.banChatMember(banChatMemberParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "banChatMember",
        objParam: banChatMemberParams,
      },
      "banChatMember"
    );

    // Test unbanChatMember
    var unbanChatMemberParams = { chat_id: "12345", user_id: "67890" };
    chatManager.unbanChatMember(unbanChatMemberParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "unbanChatMember",
        objParam: unbanChatMemberParams,
      },
      "unbanChatMember"
    );

    // Test restrictChatMember
    var restrictChatMemberParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.restrictChatMember(restrictChatMemberParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "restrictChatMember",
        objParam: restrictChatMemberParams,
      },
      "restrictChatMember"
    );

    // Test promoteChatMember
    var promoteChatMemberParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.promoteChatMember(promoteChatMemberParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "promoteChatMember",
        objParam: promoteChatMemberParams,
      },
      "promoteChatMember"
    );

    // Test setChatAdministratorCustomTitle
    var setChatAdministratorCustomTitleParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.setChatAdministratorCustomTitle(
      setChatAdministratorCustomTitleParams
    );
    validateApiRequestCall(
      {
        botToken: token,
        method: "setChatAdministratorCustomTitle",
        objParam: setChatAdministratorCustomTitleParams,
      },
      "setChatAdministratorCustomTitle"
    );

    // Test banChatSenderChat
    var banChatSenderChatParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.banChatSenderChat(banChatSenderChatParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "banChatSenderChat",
        objParam: banChatSenderChatParams,
      },
      "banChatSenderChat"
    );

    // Test unbanChatSenderChat
    var unbanChatSenderChatParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.unbanChatSenderChat(unbanChatSenderChatParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "unbanChatSenderChat",
        objParam: unbanChatSenderChatParams,
      },
      "unbanChatSenderChat"
    );

    // Test setChatPermissions
    var setChatPermissionsParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.setChatPermissions(setChatPermissionsParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "setChatPermissions",
        objParam: setChatPermissionsParams,
      },
      "setChatPermissions"
    );

    // Test exportChatInviteLink
    var exportChatInviteLinkParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.exportChatInviteLink(exportChatInviteLinkParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "exportChatInviteLink",
        objParam: exportChatInviteLinkParams,
      },
      "exportChatInviteLink"
    );

    // Test createChatInviteLink
    var createChatInviteLinkParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.createChatInviteLink(createChatInviteLinkParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "createChatInviteLink",
        objParam: createChatInviteLinkParams,
      },
      "createChatInviteLink"
    );

    // Test editChatInviteLink
    var editChatInviteLinkParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.editChatInviteLink(editChatInviteLinkParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "editChatInviteLink",
        objParam: editChatInviteLinkParams,
      },
      "editChatInviteLink"
    );

    // Test revokeChatInviteLink
    var revokeChatInviteLinkParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.revokeChatInviteLink(revokeChatInviteLinkParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "revokeChatInviteLink",
        objParam: revokeChatInviteLinkParams,
      },
      "revokeChatInviteLink"
    );

    // Test approveChatJoinRequest
    var approveChatJoinRequestParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.approveChatJoinRequest(approveChatJoinRequestParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "approveChatJoinRequest",
        objParam: approveChatJoinRequestParams,
      },
      "approveChatJoinRequest"
    );

    // Test declineChatJoinRequest
    var declineChatJoinRequestParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.declineChatJoinRequest(declineChatJoinRequestParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "declineChatJoinRequest",
        objParam: declineChatJoinRequestParams,
      },
      "declineChatJoinRequest"
    );

    // Test setChatPhoto
    var setChatPhotoParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.setChatPhoto(setChatPhotoParams);
    validateApiRequestCall(
      { botToken: token, method: "setChatPhoto", objParam: setChatPhotoParams },
      "setChatPhoto"
    );

    // Test deleteChatPhoto
    var deleteChatPhotoParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.deleteChatPhoto(deleteChatPhotoParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "deleteChatPhoto",
        objParam: deleteChatPhotoParams,
      },
      "deleteChatPhoto"
    );

    // Test setChatTitle
    var setChatTitleParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.setChatTitle(setChatTitleParams);
    validateApiRequestCall(
      { botToken: token, method: "setChatTitle", objParam: setChatTitleParams },
      "setChatTitle"
    );

    // Test setChatDescription
    var setChatDescriptionParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.setChatDescription(setChatDescriptionParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "setChatDescription",
        objParam: setChatDescriptionParams,
      },
      "setChatDescription"
    );

    // Test pinChatMessage
    var pinChatMessageParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.pinChatMessage(pinChatMessageParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "pinChatMessage",
        objParam: pinChatMessageParams,
      },
      "pinChatMessage"
    );

    // Test unpinChatMessage
    var unpinChatMessageParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.unpinChatMessage(unpinChatMessageParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "unpinChatMessage",
        objParam: unpinChatMessageParams,
      },
      "unpinChatMessage"
    );

    // Test unpinAllChatMessages
    var unpinAllChatMessagesParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.unpinAllChatMessages(unpinAllChatMessagesParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "unpinAllChatMessages",
        objParam: unpinAllChatMessagesParams,
      },
      "unpinAllChatMessages"
    );

    // Test leaveChat
    var leaveChatParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.leaveChat(leaveChatParams);
    validateApiRequestCall(
      { botToken: token, method: "leaveChat", objParam: leaveChatParams },
      "leaveChat"
    );

    // Test getChat
    var getChatParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.getChat(getChatParams);
    validateApiRequestCall(
      { botToken: token, method: "getChat", objParam: getChatParams },
      "getChat"
    );

    // Test getChatAdministrators
    var getChatAdministratorsParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.getChatAdministrators(getChatAdministratorsParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "getChatAdministrators",
        objParam: getChatAdministratorsParams,
      },
      "getChatAdministrators"
    );

    // Test getChatMemberCount
    var getChatMemberCountParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.getChatMemberCount(getChatMemberCountParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "getChatMemberCount",
        objParam: getChatMemberCountParams,
      },
      "getChatMemberCount"
    );

    // Test getChatMember
    var getChatMemberParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.getChatMember(getChatMemberParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "getChatMember",
        objParam: getChatMemberParams,
      },
      "getChatMember"
    );

    // Test setChatStickerSet
    var setChatStickerSetParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.setChatStickerSet(setChatStickerSetParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "setChatStickerSet",
        objParam: setChatStickerSetParams,
      },
      "setChatStickerSet"
    );

    // Test deleteChatStickerSet
    var deleteChatStickerSetParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.deleteChatStickerSet(deleteChatStickerSetParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "deleteChatStickerSet",
        objParam: deleteChatStickerSetParams,
      },
      "deleteChatStickerSet"
    );

    // Test setChatMenuButton
    var setChatMenuButtonParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.setChatMenuButton(setChatMenuButtonParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "setChatMenuButton",
        objParam: setChatMenuButtonParams,
      },
      "setChatMenuButton"
    );

    // Test getChatMenuButton
    var getChatMenuButtonParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.getChatMenuButton(getChatMenuButtonParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "getChatMenuButton",
        objParam: getChatMenuButtonParams,
      },
      "getChatMenuButton"
    );

    // Test getUserChatBoosts
    var getUserChatBoostsParams = {
      chat_id: "12345",
      user_id: "67890",
      permissions: { can_send_messages: false },
    };
    chatManager.getUserChatBoosts(getUserChatBoostsParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "getUserChatBoosts",
        objParam: getUserChatBoostsParams,
      },
      "getUserChatBoosts"
    );

    // ... Similarly, you can add more tests for other methods ...

    Logger.log("✅ All tests for ChatManager passed!");

    // Restore the original Utils.apiRequest
    Utils.apiRequest = originalApiRequest;
  },
};
