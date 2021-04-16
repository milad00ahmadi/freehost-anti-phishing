import BaseValidator from '../BaseValidator';

class GmailValidator extends BaseValidator {
  public handle(content: string): boolean {
    if (this.checkPage(content)) {
      if (!this.nextValidator) return true;
      return this.nextValidator.handle(content);
    }
    return false;
  }

  checkPage(content: string): boolean {
    // A) checke tedade input ha
    const inputs = document.getElementsByTagName('input');
    const inputsArray = Array.prototype.slice.call(inputs);

    if (inputsArray.length >= 2) {
      this.increaseScore(5);
    }
    // B) checke matn haye mashkook
    const suspiciousTexts = [
      { keyword: 'google account', score: 1 },
      { keyword: 'email or phone', score: 2 },
      { keyword: 'privacy', score: 1 },
      { keyword: 'next', score: 1 },
      { keyword: 'create account', score: 1 },
      { keyword: 'ورود به سیستم', score: 2 },
      { keyword: 'رفتن به Gmail', score: 3 },
      {
        keyword:
          'رایانه شما نیست؟ برای ورود به سیستم به‌طور خصوصی، از حالت «مهمان» استفاده کنید',
        score: 1,
      },
      { keyword: 'ایمیلتان را فراموش کرده‌اید؟', score: 1 },
      { keyword: 'راهنما', score: 1 },
      { keyword: 'حریم خصوصی', score: 1 },
    ];
    const verySuspiciousTexts = ['with your Google Account', 'رفتن به Gmail'];

    for (const suspiciousText of suspiciousTexts) {
      if (content.toLocaleLowerCase().search(suspiciousText.keyword) > 0) {
        this.increaseScore(suspiciousText.score);
      }
    }
    

    for (const suspiciousText of verySuspiciousTexts) {
      if (content.toLocaleLowerCase().search(suspiciousText) > 0) {
        this.increaseScore(3);
      }
    }

    return this.getScore() < 12;
  }
}
export default GmailValidator;
