class EmailManager {
  constructor() {
    // Initialization code here, if needed
  }

  /**
   * Send an email using the provided details.
   * 
   * @param {string} recipient - The email address of the recipient.
   * @param {string} subject - The subject of the email.
   * @param {string} body - The body of the email.
   * @param {object} options - Optional parameters such as htmlBody, cc, bcc, etc.
   */
  sendEmail(recipient, subject, body, options) {
    try {
      // Use MailApp or GmailApp based on your preference
      // This example uses MailApp for simplicity
      MailApp.sendEmail({
        to: recipient,
        subject: subject,
        body: body,
        ...options // Spread operator to include optional parameters like htmlBody
      });

      // Log or handle successful email sending
      console.log(`Email successfully sent to ${recipient}`);
      return true;
    } catch (error) {
      // Log or handle the error
      console.error(`Failed to send email to ${recipient}: ${error}`);
      throw new Error(`EmailManager: Failed to send email. ${error.message}`);
    }
  }

  getOperations() {
    const self = this; // Capture the current instance context
    return {
      sendEmail: (recipient, subject, body, options) => self.sendEmail(recipient, subject, body, options),
    };
  }

}

