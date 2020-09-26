import { CONTACT_EMAIL, COMPANY } from '../config';
import Mustache from 'mustache';
import template from '../views/alert-modal.html';

class AlertModalView {
  static render(): void {
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

export default AlertModalView;
