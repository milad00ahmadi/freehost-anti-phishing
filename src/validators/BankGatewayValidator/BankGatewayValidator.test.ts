import BankGatewayValidator from './BankGatewayValidator';
test('alert that the payment page is fake', () => {
  const bankGatewayValidator = new BankGatewayValidator();
  document.body.innerHTML = `

      <h1>شماره کارت</h1>
      <h1>تاریخ انقضا</h1>
      <input type="text">
      <input type="text">
      <input type="text">
      <input type="text">
      
  `;
  const result = bankGatewayValidator.handle(
    document.querySelector('html')?.outerHTML.toLocaleLowerCase() || ''
  );
  expect(result).toBe(true);
});

test("don't alert on non-suspicious pages", () => {
  const bankGatewayValidator = new BankGatewayValidator();
  document.body.innerHTML = `
      <h1>I am a good page</h1>
  `;
  const result = bankGatewayValidator.handle(
    document.querySelector('html')?.outerHTML.toLocaleLowerCase() || 'in'
  );
  expect(result).toBe(true);
});
