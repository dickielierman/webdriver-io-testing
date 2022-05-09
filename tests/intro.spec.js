const LoginPage = require('../pages/login.page');
const IntroPage = require('../pages/intro.page');
const assert = require('assert');

describe('Intro test suite', () => {
  beforeEach(async () => {
    await browser.url('/');
    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.rememberMe.click();
    await LoginPage.btnSubmit.click();
    assert.equal(await LoginPage.overlay.isDisplayed(), false, 'Login overlay is still displayed');
  });
  it('should display the correct heading', async () => {
    assert.equal(await IntroPage.heading.getText(), 'Superhero Roster', 'Header is incorrect');
  });
  it('should display the correct image', async () => {
    assert.equal(await IntroPage.image.getProperty('src'), `http://localhost:8080/images/superhero.png`, 'Image is incorrect');
    assert.equal(await IntroPage.image.getProperty('alt'), `Superhero Image`, 'Image alt is incorrect');
  });
});
