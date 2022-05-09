const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');
const assert = require('assert');

describe('Login test suite', () => {
  beforeEach(async () => {
    await browser.url('/');
    browser.setWindowRect(0, 0, 1080, 1080);
  });
  it('should display error when password is missing', async () => {
    await LoginPage.emailField.setValue('test@test.com');
    await LoginPage.btnSubmit.click();
    assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(await browser.getAlertText(), 'Please enter an email and password', 'Alert is not equal');
    await browser.acceptAlert();
    assert.equal(await browser.isAlertOpen(), false, 'Alert is still open');
  });
  it('should display error when email is missing', async () => {
    await LoginPage.passwordField.setValue('blah');
    await LoginPage.btnSubmit.click();
    assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(await browser.getAlertText(), 'Please enter an email and password', 'Alert is not equal');
    await browser.acceptAlert();
    assert.equal(await browser.isAlertOpen(), false, 'Alert is still open');
  });
  it('should display error when email and password are missing', async () => {
    await LoginPage.btnSubmit.click();
    assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(await browser.getAlertText(), 'Please enter an email and password', 'Alert is not equal');
    await browser.acceptAlert();
    assert.equal(await browser.isAlertOpen(), false, 'Alert is still open');
  });
  it('should display error when email is incorrect', async () => {
    await LoginPage.emailField.setValue('test@test.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.btnSubmit.click();
    assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(await browser.getAlertText(), 'Invalid email and password', 'Alert is not equal');
    await browser.acceptAlert();
    assert.equal(await browser.isAlertOpen(), false, 'Alert is still open');
  });
  it('should display error when password is incorrect', async () => {
    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('asdf');
    await LoginPage.btnSubmit.click();
    assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(await browser.getAlertText(), 'Invalid email and password', 'Alert is not equal');
    await browser.acceptAlert();
    assert.equal(await browser.isAlertOpen(), false, 'Alert is still open');
  });
  it('should display error when password case is incorrect', async () => {
    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('Password');
    await LoginPage.btnSubmit.click();
    assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(await browser.getAlertText(), 'Invalid email and password', 'Alert is not equal');
    await browser.acceptAlert();
    assert.equal(await browser.isAlertOpen(), false, 'Alert is still open');
  });
  it('should login with valid credentials', async () => {
    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.btnSubmit.click();
    assert.equal(await LoginPage.overlay.isDisplayed(), false, 'Overlay is still displayed');
  });
  it('should remember login creds', async () => {
    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.rememberMe.click();
    await LoginPage.btnSubmit.click();
    assert.equal(await LoginPage.overlay.isDisplayed(), false, 'Overlay is still displayed');
    await HeaderPage.logoutLink.click();
    assert.equal(await LoginPage.overlay.isDisplayed(), true, 'Overlay is not displayed');
    assert.equal(await LoginPage.emailField.getValue(), '1@2.com', `Email didn't match`);
    assert.equal(await LoginPage.rememberMe.isSelected(), true, `Remember me was not checked`);
  });
});
