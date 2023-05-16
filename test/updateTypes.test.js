const UPDATE_TYPES = {
  VALID_BOT_TOKEN: "your bot token",
  URL: "your deployed url from apps script",

  deleteWebhook() {
    const Api = deleteWebhook(this.VALID_BOT_TOKEN);
    if (
      Api.description === "Webhook is already deleted" ||
      "Webhook was deleted"
    ) {
      Logger.log(Test_Constants().TEST_TITLES.deleteWebhook);
    }
  },

  getUpdates() {
    const Api = getUpdates(this.VALID_BOT_TOKEN);
    if (Api.result[0] && Api.result[0].update_id)
      Logger.log(Test_Constants().TEST_TITLES.getUpdates);
  },

  setWebHook() {
    const Api = setWebHook(this.VALID_BOT_TOKEN, { url: this.URL });
    if (Api.description === "Webhook was set") {
      Logger.log(Test_Constants().TEST_TITLES.setWebHook);
    }
  },

  getWebhookInfo() {
    const Api = getWebhookInfo(this.VALID_BOT_TOKEN, { url: this.URL });
    if (Api.ok) {
      Logger.log(Test_Constants().TEST_TITLES.getWebhookInfo);
    }
  },
};
