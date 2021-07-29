import OutlookValidator from './OutlookValidator';
test('alerts that the login page is fake', () => {
  const outlook = new OutlookValidator();
  document.body.innerHTML = `
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Sign in to your Microsoft account</title>
<body>
<form>
<input placeholder="">
<input placeholder="">
</form>
</body>
</html>`;
  const isSafe = outlook.handle(
    document.querySelector('html')?.outerHTML.toLocaleLowerCase() || ''
  );
  expect(isSafe).toBe(false);
});

test("don't alert on normal pages", () => {
  const outLookValidator = new OutlookValidator();
  document.body.innerHTML = `
      <title>A News About Microsoft</title>
      <h1>Im a good page</h1>
      </body>
    </html>
  `;
  const isSafe = outLookValidator.handle(
    document.querySelector('html')?.outerHTML.toLocaleLowerCase() || ''
  );
  expect(isSafe).toBe(true);
});
test("don't alert on non-suspicious login pages", () => {
  const gnstagramValidator = new OutlookValidator();
  document.body.innerHTML = `
    <html>
      <body>
      <h1>Login To Your Account</h1>
      <input type=text>
      <input type=text>
      </body>
    </html>
  `;
  const isSafe = gnstagramValidator.handle(
    document.querySelector('html')?.outerHTML.toLocaleLowerCase() || ''
  );
  expect(isSafe).toBe(true);
});
