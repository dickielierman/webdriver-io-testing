const LoginPage = require('../../pages/superHoroApp/login.page');
const IntroPage = require('../../pages/superHoroApp/intro.page');
const assert = require('assert');
describe('Intro test suite', () => {
  beforeEach(async () => {
    await browser.url('/');
    await LoginPage.login('1@2.com', 'password', false);
    assert.equal(await LoginPage.overlay.isDisplayed(), false, 'Login overlay is still displayed');
  });
  it('should display the correct heading', async () => {
    assert.equal(await IntroPage.heading.getText(), 'Superhero Roster', 'Header is incorrect');
  });
  it('should display the correct image', async () => {
    assert.equal(await IntroPage.image.getProperty('src'), `http://localhost:3000/images/superhero.png`, 'Image is incorrect');
    assert.equal(await IntroPage.image.getProperty('alt'), `Superhero Image`, 'Image alt is incorrect');
  });
});
