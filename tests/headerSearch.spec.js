const LoginPage = require('../pages/login.page');
const HeaderPageObj = require('../pages/header.page');
const assert = require('assert');

// const assert = require('assert');

describe('Header test suite', () => {
  beforeEach(async () => {
    await browser.url('/');
    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.btnSubmit.click();
    assert.equal(await LoginPage.overlay.isDisplayed(), false, 'Login overlay is still displayed');
  });

  it('should search for wolverine', async () => {
    await HeaderPageObj.expander.click();
    // await $('#navbarSupportedContent').waitForDisplayed();
    await HeaderPageObj.searchField.waitForClickable();
    await HeaderPageObj.searchField.setValue('wolverine');
    await HeaderPageObj.searchButton.waitForClickable();
    await HeaderPageObj.searchButton.click();
    assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(await browser.getAlertText(), 'Wolverine is awesome!', 'Alert is not equal');
    await browser.acceptAlert();
    assert.equal(await browser.isAlertOpen(), false, 'Alert is still open');
  });

  it('should search for something other than wolverine and fail', async () => {
    await HeaderPageObj.expander.click();
    await HeaderPageObj.searchField.waitForClickable();
    await HeaderPageObj.searchField.setValue('spider-boy');
    await HeaderPageObj.searchButton.waitForClickable();
    await HeaderPageObj.searchButton.click();
    assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(await browser.getAlertText(), `Your search for spider-boy returned 0 reults. Try something else.`, 'Alert is not equal');
    await browser.acceptAlert();
    assert.equal(await browser.isAlertOpen(), false, 'Alert is still open');
  });
});
