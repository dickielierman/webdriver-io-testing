const LoginPage = require('../../pages/superHoroApp/login.page');
const HeaderPage = require('../../pages/superHoroApp/header.page');
const IntroPage = require('../../pages/superHoroApp/intro.page');
const RosterPage = require('../../pages/superHoroApp/roster.page');
const VotePage = require('../../pages/superHoroApp/vote.page');
const assert = require('assert');
describe('Smoke test suite', () => {
  describe('Login Page', () => {
    it('should verify static elements for login', async () => {
      await browser.url('/');
      assert.equal(await LoginPage.headerTitle.isDisplayed(), true, 'LoginPage.headerTitle not displayed');
      assert.equal(await LoginPage.emailLabel.isDisplayed(), true, 'LoginPage.emailLabel not displayed');
      assert.equal(await LoginPage.emailField.isDisplayed(), true, 'LoginPage.emailField not displayed');
      assert.equal(await LoginPage.passwordLabel.isDisplayed(), true, 'LoginPage.passwordLabel not displayed');
      assert.equal(await LoginPage.passwordField.isDisplayed(), true, 'LoginPage.passwordField not displayed');
      assert.equal(await LoginPage.rememberMeLabel.isDisplayed(), true, 'LoginPage.rememberMeLabel not displayed');
      assert.equal(await LoginPage.rememberMe.isDisplayed(), true, 'LoginPage.rememberMe not displayed');
      assert.equal(await LoginPage.btnSubmit.isDisplayed(), true, 'LoginPage.btnSubmit not displayed');
    });
  });
  describe('Main Page', () => {
    beforeEach(async () => {
      await browser.url('/');
      await LoginPage.login('1@2.com', 'password', false);
    });
    it('should verify static elements for header', async () => {
      assert.equal(await HeaderPage.expander.isDisplayed(), true, 'HeaderPage.expander not displayed');
      await HeaderPage.expander.click();
      assert.equal(await HeaderPage.linkLink.isDisplayed(), true, 'HeaderPage.linkLink not displayed');
      assert.equal(await HeaderPage.heroFactsLink.isDisplayed(), true, 'HeaderPage.heroFactsLink not displayed');
      await HeaderPage.heroFactsLink.waitForClickable();
      await HeaderPage.heroFactsLink.click();
      await HeaderPage.wolverineOption.waitForClickable();
      assert.equal(await HeaderPage.wolverineOption.isDisplayed(), true, 'HeaderPage.wolverineOption not displayed');
      assert.equal(await HeaderPage.spidermanOption.isDisplayed(), true, 'HeaderPage.spidermanOption not displayed');
      assert.equal(await HeaderPage.logoutLink.isDisplayed(), true, 'HeaderPage.logoutLink not displayed');
      assert.equal(await HeaderPage.searchField.isDisplayed(), true, 'HeaderPage.searchField not displayed');
      assert.equal(await HeaderPage.searchButton.isDisplayed(), true, 'HeaderPage.searchButton not displayed');
    });
    it('should verify static elements for intro', async () => {
      // test intro
      assert.equal(await IntroPage.heading.isDisplayed(), true, 'IntroPage.heading not displayed');
      assert.equal(await IntroPage.image.isDisplayed(), true, 'IntroPage.image not displayed');
    });
    it('should verify static elements for roster', async () => {
      assert.equal(await RosterPage.instructions.isDisplayed(), true, 'RosterPage.instructions not displayed');
      assert.equal(await RosterPage.heading.isDisplayed(), true, 'RosterPage.heading not displayed');
      assert.equal(await RosterPage.wolverineItem.isDisplayed(), true, 'RosterPage.wolverineItem not displayed');
      assert.equal(await RosterPage.ironManItem.isDisplayed(), true, 'RosterPage.ironManItem not displayed');
      assert.equal(await RosterPage.deadpoolItem.isDisplayed(), true, 'RosterPage.deadpoolItem not displayed');
      assert.equal(await RosterPage.thorItem.isDisplayed(), true, 'RosterPage.thorItem not displayed');
      assert.equal(await RosterPage.spiderManItem.isDisplayed(), true, 'RosterPage.spiderManItem not displayed');
      assert.equal(await RosterPage.heroInputLabel.isDisplayed(), true, 'RosterPage.heroInputLabel not displayed');
      assert.equal(await RosterPage.heroInputField.isDisplayed(), true, 'RosterPage.heroInputField not displayed');
      assert.equal(await RosterPage.heroSubmit.isDisplayed(), true, 'RosterPage.heroSubmit not displayed');
    });
    it('should verify static elements for vote', async () => {
      assert.equal(await VotePage.voteForm.isDisplayed(), true, 'VotePage.voteForm not displayed');
      assert.equal(await VotePage.xmenItemLabel.isDisplayed(), true, 'VotePage.xmenItemLabel not displayed');
      assert.equal(await VotePage.xmenItem.isDisplayed(), true, 'VotePage.xmenItem not displayed');
      assert.equal(await VotePage.avengersItemLabel.isDisplayed(), true, 'VotePage.avengersItemLabel not displayed');
      assert.equal(await VotePage.avengersItem.isDisplayed(), true, 'VotePage.avengersItem not displayed');
      assert.equal(await VotePage.deadpoolItemLabel.isDisplayed(), true, 'VotePage.deadpoolItemLabel not displayed');
      assert.equal(await VotePage.deadpoolItem.isDisplayed(), true, 'VotePage.deadpoolItem not displayed');
      assert.equal(await VotePage.spidermanItemLabel.isDisplayed(), true, 'VotePage.spidermanItemLabel not displayed');
      assert.equal(await VotePage.spidermanItem.isDisplayed(), true, 'VotePage.spidermanItem not displayed');
      assert.equal(await VotePage.ironmanItemLabel.isDisplayed(), true, 'VotePage.ironmanItemLabel not displayed');
      assert.equal(await VotePage.ironmanItem.isDisplayed(), true, 'VotePage.ironmanItem not displayed');
      assert.equal(await VotePage.submitBtn.isDisplayed(), true, 'VotePage.submitBtn not displayed');
      assert.equal(await VotePage.xmenVoteLabel.isDisplayed(), true, 'VotePage.xmenVoteLabel not displayed');
      assert.equal(await VotePage.xmenVoteCount.isDisplayed(), true, 'VotePage.xmenVoteCount not displayed');
      assert.equal(await VotePage.avengersVoteLabel.isDisplayed(), true, 'VotePage.avengersVoteLabel not displayed');
      assert.equal(await VotePage.avengersVoteCount.isDisplayed(), true, 'VotePage.avengersVoteCount not displayed');
      assert.equal(await VotePage.deadpoolVoteLabel.isDisplayed(), true, 'VotePage.deadpoolVoteLabel not displayed');
      assert.equal(await VotePage.deadpoolVoteCount.isDisplayed(), true, 'VotePage.deadpoolVoteCount not displayed');
      assert.equal(await VotePage.spidermanVoteLabel.isDisplayed(), true, 'VotePage.spidermanVoteLabel not displayed');
      assert.equal(await VotePage.spidermanVoteCount.isDisplayed(), true, 'VotePage.spidermanVoteCount not displayed');
      assert.equal(await VotePage.ironmanVoteLabel.isDisplayed(), true, 'VotePage.ironmanVoteLabel not displayed');
      assert.equal(await VotePage.ironmanVoteCount.isDisplayed(), true, 'VotePage.ironmanVoteCount not displayed');
    });
  });
});
