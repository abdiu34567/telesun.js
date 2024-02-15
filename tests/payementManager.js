const TEST_PAYEMENT_MANAGER = {
  run() {
    this.testPaymentManager();
  },

  testPaymentManager() {
    // Replace the real Utils.apiRequest with the mock version
    var originalApiRequest = Utils.apiRequest;
    Utils.apiRequest = MockUtils.apiRequest;

    var token = "sample_bot_token";
    var paymentManager = new PayementManager(token);

    // Test sendInvoice
    var sendInvoiceParams = {
      chat_id: "12345",
      title: "Product",
      description: "Product Description",
      payload: "ProductPayload",
      provider_token: "ProviderToken",
      currency: "USD",
      prices: [{ label: "Product", amount: 1000 }],
    };
    paymentManager.sendInvoice(sendInvoiceParams);
    validateApiRequestCall(
      { botToken: token, method: "sendInvoice", objParam: sendInvoiceParams },
      "sendInvoice"
    );

    // Test createInvoiceLink
    var createInvoiceLinkParams = {
      title: "Product",
      description: "Product Description",
      payload: "ProductPayload",
      provider_token: "ProviderToken",
      currency: "USD",
      prices: [{ label: "Product", amount: 1000 }],
    };
    paymentManager.createInvoiceLink(createInvoiceLinkParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "createInvoiceLink",
        objParam: createInvoiceLinkParams,
      },
      "createInvoiceLink"
    );

    // Test answerShippingQuery
    var answerShippingQueryParams = {
      shipping_query_id: "query_id_12345",
      ok: true,
      shipping_options: [
        {
          id: "option_1",
          title: "Option 1",
          prices: [{ label: "Shipping", amount: 300 }],
        },
      ],
    };
    paymentManager.answerShippingQuery(answerShippingQueryParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "answerShippingQuery",
        objParam: answerShippingQueryParams,
      },
      "answerShippingQuery"
    );

    // Test answerPreCheckoutQuery
    var answerPreCheckoutQueryParams = {
      pre_checkout_query_id: "pre_checkout_query_id_12345",
      ok: true,
    };
    paymentManager.answerPreCheckoutQuery(answerPreCheckoutQueryParams);
    validateApiRequestCall(
      {
        botToken: token,
        method: "answerPreCheckoutQuery",
        objParam: answerPreCheckoutQueryParams,
      },
      "answerPreCheckoutQuery"
    );

    Logger.log("✅ All tests for PayementManager passed!");

    // Restore the original Utils.apiRequest
    Utils.apiRequest = originalApiRequest;
  },
};
