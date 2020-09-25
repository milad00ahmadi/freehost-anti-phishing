import BaseValidator from '../BaseValidator';

class InstagramValidator extends BaseValidator {
  public handle(content: string): boolean {
    if (this.checkPage(content)) {
      if (!this.nextValidator) return true;
      return this.nextValidator.handle(content);
    }
    this.alertUser();
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
      { keyword: 'instagram', score: 2 },
      { keyword: 'اینستگرام', score: 2 },
      { keyword: 'اینستاگرام', score: 2 },
      { keyword: 'اینستا', score: 2 },
      { keyword: "don't have an account?", score: 2 },
      { keyword: 'or', score: 1 },
      { keyword: 'forgot password?', score: 1 },
      { keyword: 'log in', score: 1 },
      { keyword: 'login', score: 1 },
    ];
    const verySuspiciousTexts = [
      'فالور رایگان',
      'لایک رایگان',
      'فالوور رایگان',
      'فالوور خرید',
      'خرید فالوور',
      'free like',
      'free followers',
      'شارژ رایگان',
      'اینترنت رایگان',
    ];

    for (const suspiciousText of suspiciousTexts) {
      if (content.toLocaleLowerCase().search(suspiciousText.keyword) > 0) {
        this.increaseScore(suspiciousText.score);
      }
    }
    for (const suspiciousText of verySuspiciousTexts) {
      if (content.toLocaleLowerCase().search(suspiciousText) > 0) {
        this.increaseScore(10);
      }
    }

    return this.getScore() < 7;
  }
}
export default InstagramValidator;
