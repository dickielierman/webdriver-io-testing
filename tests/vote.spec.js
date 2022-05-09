const LoginPage = require('../pages/login.page');
const VotePage = require('../pages/vote.page');
const assert = require('assert');

describe('Voting test suite', () => {
  beforeEach(async () => {
    await browser.url('/');
    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.rememberMe.click();
    await LoginPage.btnSubmit.click();
    assert.equal(await LoginPage.overlay.isDisplayed(), false, 'Login overlay is still displayed');
  });
  it('should increment vote', async () => {
    let originalVoteCount = Number(await VotePage.avengersVoteCount.getText());
    await VotePage.avengersItem.click();
    await VotePage.submitBtn.click();
    assert.equal(await VotePage.thanksForVoting.isDisplayed(), true, 'Thank you text not displayed');
    assert.equal(Number(await VotePage.avengersVoteCount.getText()), originalVoteCount + 1, 'The vote count was incorrect');
    console.log();
  });
});
