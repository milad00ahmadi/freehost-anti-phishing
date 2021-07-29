import GmailValidator from '~/validators/GmailValidator/GmailValidator';
import BankGatewayValidator from '~/validators/BankGatewayValidator/BankGatewayValidator';
import InstagramValidor from '~/validators/InstagramValidator/InstagramValidator';
import AlertModalView from '~/views/alert-modal.component';
import OutlookValidator from '~/validators/OutlookValidator/OutlookValidator';
import "~/assets/scss/app.scss";
import FacebookValidator from './validators/FacebookValidator/FacebookValidator';

const bankValidator = new BankGatewayValidator();
const instagramValidtor = new InstagramValidor();
const gmailValidator = new GmailValidator();
const outlookValidator = new OutlookValidator();
const facebookValidator = new FacebookValidator();

let isShowed = false;

const checker = () => {
  bankValidator
    .setNext(instagramValidtor)
    .setNext(gmailValidator)
    .setNext(outlookValidator)
    .setNext(facebookValidator);

  let pageContent: string | undefined = new XMLSerializer().serializeToString(
    document
  );

  pageContent = pageContent?.replace(/ـ/g, '');
  pageContent = pageContent?.replace(/(\n|\r\n)+/g, '');

  if (pageContent) {
    const isSafe = bankValidator.handle(pageContent);
    if (!isSafe && !isShowed) {
      isShowed = true;
      AlertModalView.render();
    }

  } else {
    window.location.href = 'https://google.com';
  }
};
checker();
// check page on a interval
setTimeout(checker, 15000);
