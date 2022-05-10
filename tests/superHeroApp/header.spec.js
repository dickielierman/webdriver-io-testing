const LoginPage = require('../../pages/superHoroApp/login.page');
const HeaderPageObj = require('../../pages/superHoroApp/header.page');
const assert = require('assert');

// const assert = require('assert');

describe('Header test suite', () => {
  beforeEach(async () => {
    await browser.url('/');
    await LoginPage.login('1@2.com', 'password', false);
    assert.equal(await LoginPage.overlay.isDisplayed(), false, 'Login overlay is still displayed');
  });
  it('should redirect to new site', async () => {
    await HeaderPageObj.expander.click();
    await HeaderPageObj.linkLink.waitForDisplayed();
    await HeaderPageObj.linkLink.click();
    assert.equal(await browser.getUrl(), 'https://glitchitsystem.com/', ``);
  });
  it('should open read and close wolverine modal', async () => {
    await HeaderPageObj.expander.click();
    await HeaderPageObj.heroFactsLink.waitForClickable();
    await HeaderPageObj.heroFactsLink.click();
    await HeaderPageObj.wolverineOption.waitForClickable();
    await HeaderPageObj.wolverineOption.click();
    await HeaderPageObj.wolverineModalWindow.waitForDisplayed();
    assert.equal(await HeaderPageObj.wolverineModalWindow.isDisplayed(), true, 'Modal is not displayed');
    assert.equal(await HeaderPageObj.wolverineModalTitleText.getText(), 'Wolverine Fact', 'Title is not correct');
    assert.equal(
      await HeaderPageObj.wolverineModalContentText.getText(),
      'Wolverine made his first comic book appearance in 1974.',
      'Content is not correct'
    );
    await HeaderPageObj.wolverineModalCloseButton.click();
    await HeaderPageObj.wolverineModalWindow.waitForDisplayed({ reverse: true });
    assert.equal(await HeaderPageObj.wolverineModalWindow.isDisplayed(), false, 'Modal is displayed');
  });

  it('should open read and close spiderman modal', async () => {
    await HeaderPageObj.expander.click();
    await HeaderPageObj.heroFactsLink.waitForClickable();
    await HeaderPageObj.heroFactsLink.click();
    await HeaderPageObj.spidermanOption.waitForClickable();
    await HeaderPageObj.spidermanOption.click();
    await HeaderPageObj.spidermanModalWindow.waitForDisplayed();
    assert.equal(await HeaderPageObj.spidermanModalWindow.isDisplayed(), true, 'Modal is not displayed');
    assert.equal(await HeaderPageObj.spidermanModalTitleText.getText(), 'Spider-Man Fact', 'Title is not correct');
    assert.equal(
      await HeaderPageObj.spidermanModalContentText.getText(),
      'Spider-man was created by Stan Lee and Steve Ditko and first appeared in 1962.',
      'Content is not correct'
    );
    await HeaderPageObj.spidermanModalCloseButton.click();
    await HeaderPageObj.spidermanModalWindow.waitForDisplayed({ reverse: true });
    assert.equal(await HeaderPageObj.spidermanModalWindow.isDisplayed(), false, 'Modal is displayed');
  });

  it('should test logout no credintials', async () => {
    await HeaderPageObj.expander.click();
    await HeaderPageObj.logoutLink.waitForClickable();
    await HeaderPageObj.logoutLink.click();
    assert.equal(await LoginPage.overlay.isDisplayed(), true, 'Overlay is not displayed');
    assert.equal(await LoginPage.emailField.getValue(), '', `Email didn't match`);
    assert.equal(await LoginPage.rememberMe.isSelected(), false, `Remember me was checked`);
  });
});
