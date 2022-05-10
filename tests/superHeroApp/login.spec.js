const LoginPage = require('../../pages/superHoroApp/login.page');
const HeaderPage = require('../../pages/superHoroApp/header.page');
const assert = require('assert');

describe('Login test suite', () => {
  beforeEach(async () => {
    await browser.url('/');
    browser.setWindowRect(0, 0, 1080, 1080);
  });
  it('should display error when password is missing', async () => {
    await LoginPage.login('test@test.com', '', false);
    assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(await browser.getAlertText(), 'Please enter an email and password', 'Alert is not equal');
    await browser.acceptAlert();
    assert.equal(await browser.isAlertOpen(), false, 'Alert is still open');
  });
  it('should display error when email is missing', async () => {
    await LoginPage.login('', 'blah', false);
    assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(await browser.getAlertText(), 'Please enter an email and password', 'Alert is not equal');
    await browser.acceptAlert();
    assert.equal(await browser.isAlertOpen(), false, 'Alert is still open');
  });
  it('should display error when email and password are missing', async () => {
    await LoginPage.login('', '', false);
    assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(await browser.getAlertText(), 'Please enter an email and password', 'Alert is not equal');
    await browser.acceptAlert();
    assert.equal(await browser.isAlertOpen(), false, 'Alert is still open');
  });
  it('should display error when email is incorrect', async () => {
    await LoginPage.login('test@test.com', 'password', false);
    assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(await browser.getAlertText(), 'Invalid email and password', 'Alert is not equal');
    await browser.acceptAlert();
    assert.equal(await browser.isAlertOpen(), false, 'Alert is still open');
  });
  it('should display error when password is incorrect', async () => {
    await LoginPage.login('1@2.com', 'asdf', false);
    assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(await browser.getAlertText(), 'Invalid email and password', 'Alert is not equal');
    await browser.acceptAlert();
    assert.equal(await browser.isAlertOpen(), false, 'Alert is still open');
  });
  it('should display error when password case is incorrect', async () => {
    await LoginPage.login('1@2.com', 'Password', false);
    assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(await browser.getAlertText(), 'Invalid email and password', 'Alert is not equal');
    await browser.acceptAlert();
    assert.equal(await browser.isAlertOpen(), false, 'Alert is still open');
  });
  it('should login with valid credentials', async () => {
    await LoginPage.login('1@2.com', 'password', false);
    assert.equal(await LoginPage.overlay.isDisplayed(), false, 'Overlay is still displayed');
  });
  it('should remember login creds', async () => {
    await LoginPage.login('1@2.com', 'password', true);
    assert.equal(await LoginPage.overlay.isDisplayed(), false, 'Overlay is still displayed');
    await HeaderPage.logoutLink.click();
    assert.equal(await LoginPage.overlay.isDisplayed(), true, 'Overlay is not displayed');
    assert.equal(await LoginPage.emailField.getValue(), '1@2.com', `Email didn't match`);
    assert.equal(await LoginPage.rememberMe.isSelected(), true, `Remember me was not checked`);
  });
});
