import InstagramValidator from './InstagramValidator';
test('alerts that the instagram login page is fake', () => {
  const instagramValidator = new InstagramValidator();
  document.body.innerHTML = `
    <html>
      <body>
      <h1>Instagram</h1>
      <input type="text">
      <input type="text">
      </body>
    </html>
  `;
  const isPhishing = instagramValidator.handle(document.querySelector('html')?.outerHTML.toLocaleLowerCase() || '');

  expect(isPhishing).toBe(false);
});

test("don't alert on normal pages", () => {
  const instagramValidator = new InstagramValidator();
  document.body.innerHTML = `
   
      <h1>Im a good page</h1>
      </body>
    </html>
  `;
  const isPhishing = instagramValidator.handle(document.querySelector('html')?.outerHTML.toLocaleLowerCase() || '');
  expect(isPhishing).toBe(true);
});
test("don't alert on non-suspicious login pages", () => {
  const instagramValidator = new InstagramValidator();
  document.body.innerHTML = `
    <html>
      <body>
      <h1>Im a good login page</h1>
      <input type=text>
      <input type=text>
      </body>
    </html>
  `;
  const isPhishing = instagramValidator.handle(document.querySelector('html')?.outerHTML.toLocaleLowerCase() || '');
  expect(isPhishing).toBe(true);
});
