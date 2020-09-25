import Validator from '../contracts/Validator';
import { CONTACT_EMAIL, COMPANY } from '../config';
import Mustache from 'mustache';
import template from '../views/alert-modal.html';

abstract class BaseValidator implements Validator {
  protected nextValidator: Validator | null = null;
  protected score = 0;

  public getScore(): number {
    return this.score;
  }

  public setNext(validator: Validator): Validator {
    this.nextValidator = validator;
    return validator;
  }

  public handle(content: string): boolean {
    if (this.nextValidator) {
      return this.nextValidator.handle(content);
    }
    return false;
  }

  public increaseScore(incrementBy = 1): void {
    this.score += incrementBy;
  }

  alertUser(): void {
    const html = Mustache.render(template, {
      contactEmail: CONTACT_EMAIL,
      companyName: COMPANY,
    });
    const bodyElement = document.querySelector('body') as HTMLElement;
    const htmlElement = document.querySelector('html') as HTMLElement;
    const divElement = document.querySelectorAll('div')[0] as HTMLElement;
    if (bodyElement) {
      document
        .querySelectorAll('body')[0]
        .insertAdjacentHTML('beforeend', html);
      return;
    }
    if (htmlElement) {
      document
        .querySelectorAll('body')[0]
        .insertAdjacentHTML('beforeend', html);
      return;
    }
    if (divElement) {
      document
        .querySelectorAll('body')[0]
        .insertAdjacentHTML('beforeend', html);
      return;
    }
  }
}

export default BaseValidator;
