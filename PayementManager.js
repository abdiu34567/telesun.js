
class PayementManager {

  constructor(token) {
    this.token = token
  }

  getOperations() {
    const self = this;
    return {
      sendInvoice: (objParam) => self.sendInvoice(objParam),
      createInvoiceLink: (objParam) => self.createInvoiceLink(objParam),
      answerShippingQuery: (objParam) => self.answerShippingQuery(objParam),
      answerPreCheckoutQuery: (objParam) => self.answerPreCheckoutQuery(objParam),
    }
  }

  sendInvoice(objParam) {
    return Utils.apiRequest(this.token, "sendInvoice", objParam);
  }


  createInvoiceLink(objParam) {
    return Utils.apiRequest(this.token, "createInvoiceLink", objParam);
  }


  answerShippingQuery(objParam) {
    return Utils.apiRequest(this.token, "answerShippingQuery", objParam);
  }


  answerPreCheckoutQuery(objParam) {
    return Utils.apiRequest(this.token, "answerPreCheckoutQuery", objParam);
  }
}
