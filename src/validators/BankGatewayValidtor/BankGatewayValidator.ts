import BaseValidator from '../BaseValidator';

class BankGatewayValidator extends BaseValidator {
  score = 0;
  private pageString = '';

  public handle(content: string): boolean {
    this.pageString = content;
    this.checkForCardNumber()
      .checkForPayAndExpiryText()
      .checkForCancelAndAmountText()
      .checkForCVV2AndVirtualKeyBoardText()
      .checkForTextsAmountAndAcceptor()
      .checkForInputs();

    if (this.score < 3) {
      if (!this.nextValidator) return true;
      return this.nextValidator.handle(content);
    }
    
    this.alertUser();
    return false;
  }

  checkForCardNumber(): BankGatewayValidator {
    let cardNumber = this.pageString.search('شماره کارت');

    if (cardNumber < 0) {
      cardNumber = this.pageString.search('شماره كارت');
    }
    if (cardNumber >= 0) {
      this.increaseScore();
    }
    return this;
  }

  checkForPayAndExpiryText(): BankGatewayValidator {
    const payText = this.pageString.search('پرداخت');
    if (payText >= 0) {
      this.increaseScore();
    }
    let expiryText = this.pageString.search('تاریخ انقضا');
    if (expiryText < 0) {
      expiryText = this.pageString.search('تاریخ انقضای کارت');
    }
    if (expiryText < 0) {
      expiryText = this.pageString.search('تاريخ انقضاي کارت');
    }
    if (expiryText >= 0) {
      this.increaseScore();
    }
    return this;
  }

  checkForCancelAndAmountText(): BankGatewayValidator {
    const cancelText = this.pageString.search('انصراف');
    if (cancelText >= 0) {
      this.increaseScore();
    }
    return this;
  }

  checkForCVV2AndVirtualKeyBoardText(): BankGatewayValidator {
    let CVV2Text = this.pageString.search('CVV2');
    let virtualKeyboardText = this.pageString.search('صفحه‌کلید');

    if (CVV2Text < 0) {
      CVV2Text = this.pageString.search('cvv2');
    }
    if (virtualKeyboardText < 0) {
      virtualKeyboardText = this.pageString.search('صفحه‌کليد'); // ي
    }

    if (virtualKeyboardText < 0) {
      virtualKeyboardText = this.pageString.search('کيبرد'); // ي
    }

    if (virtualKeyboardText < 0) {
      virtualKeyboardText = this.pageString.search('کیبرد');
    }

    if (virtualKeyboardText < 0) {
      virtualKeyboardText = this.pageString.search('کيبورد'); // ي
    }

    if (virtualKeyboardText < 0) {
      virtualKeyboardText = this.pageString.search('کیبورد');
    }

    if (virtualKeyboardText < 0) {
      virtualKeyboardText = this.pageString.search('صفحه کليد'); // ي
    }

    if (virtualKeyboardText < 0) {
      virtualKeyboardText = this.pageString.search('صفحه کلید');
    }
    if (CVV2Text >= 0) {
      this.increaseScore();
    }
    if (virtualKeyboardText >= 0) {
      this.increaseScore(6);
    }
    return this;
  }

  checkForTextsAmountAndAcceptor(): BankGatewayValidator {
    const amountText = this.pageString.search('مبلغ');

    const acceptorText = this.pageString.search('پذیرنده');

    if (amountText >= 0) {
      this.increaseScore();
    }

    if (acceptorText >= 0) {
      this.increaseScore();
    }
    return this;
  }

  checkForInputs(): BankGatewayValidator {
    const inputs = document.getElementsByTagName('input');
    const inputsArray = Array.prototype.slice.call(inputs);
    if (inputsArray.length >= 4) {
      this.increaseScore(10)
    }
    return this;
  }
}
export default BankGatewayValidator;
