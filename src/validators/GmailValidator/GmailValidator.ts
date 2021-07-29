import { keywords } from './keywords';
import BaseValidator from '~/validators/BaseValidator';

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
      this.increaseScore(3);
    }
    // B) checke matn haye mashkook

    for (const keyword of keywords) {
      if (content.toLocaleLowerCase().search(keyword.keyword) > 0) {
        this.increaseScore(keyword.score);
      }
    }

    return this.getScore() < 10;
  }
}
export default GmailValidator;
