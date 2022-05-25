// import '~/assets/scss/app.scss';
import styles from './alert-modal.component.scss';
const template = require('./alert-modal.component.pug?pug-compile');

class AlertModalView {
  static render(): void {
    
    const locals = {
      isRtl: process.env.RTL == 'true',
      continueAnywayButtonText: process.env.CONTINUE_ANYWAY,
      backButtonText: process.env.BACK_BUTTON,
      warningMessage: process.env.WARNING_MESSAGE,
      warningMessageTitle: process.env.WARNING_MESSAGE_TITLE,
      styles: styles,
    };
    const html = template(locals);
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
