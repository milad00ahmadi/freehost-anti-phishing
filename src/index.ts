import BankGatewayValidator from './validators/BankGatewayValidtor/BankGatewayValidator';
import InstagramValidor from './validators/InstagramValidator/InstagramValidator';

const bankValidator = new BankGatewayValidator();
const instagramValidtor = new InstagramValidor();

bankValidator.setNext(instagramValidtor);
const checker = () => {
  let pageContent: string | undefined = new XMLSerializer().serializeToString(
    document
  );

  // tmamae character haye ـ ro hazf mikonim. in kar
  // az in ke karbar kalame درگاه ro be sorate درگـاه benevise jologiri mikone
  pageContent = pageContent?.replace(/ـ/g, '');
  // har safhe hatman bayad tage HTML  ya body ro dashte bashe ta ma betoonim
  // checkesh konim baraye hamin agar pagi in ro nadasht karbar ro redirect
  // mikonim be google.com
  if (pageContent) {
    bankValidator.handle(pageContent);
  } else {
    window.location.href = 'https://google.com';
  }
};
checker();
// check page on a interval
setTimeout(checker, 10000);
