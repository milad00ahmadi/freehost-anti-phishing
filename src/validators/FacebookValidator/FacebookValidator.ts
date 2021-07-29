import BaseValidator from '../BaseValidator';
import { keywords } from './keywords';

class FacebookValidator extends BaseValidator {
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
      this.increaseScore(2);
    }
    // B) checke matn haye mashkook
    for (const suspiciousText of keywords) {
      if (content.toLocaleLowerCase().search(suspiciousText.keyword) > 0) {
        this.increaseScore(suspiciousText.score);
      }
    }

    return this.getScore() < 10;
  }
}
export default FacebookValidator;
