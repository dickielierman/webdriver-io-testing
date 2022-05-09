const LoginPage = require('../pages/login.page');
const RosterPage = require('../pages/roster.page');
const assert = require('assert');

describe('Roster test suite', () => {
  beforeEach(async () => {
    await browser.url('/');
    await LoginPage.emailField.setValue('1@2.com');
    await LoginPage.passwordField.setValue('password');
    await LoginPage.rememberMe.click();
    await LoginPage.btnSubmit.click();
    assert.equal(await LoginPage.overlay.isDisplayed(), false, 'Login overlay is still displayed');
  });
  it('should have default values', async () => {
    assert.equal(
      await RosterPage.instructions.getText(),
      `Imagine that you are tasked with building a team of Superheros to save the world. We have given you a few heroes to start with. Add as many heroes as you would like to round out your dream team.`,
      'Instructions are incorrect'
    );
    assert.equal(await RosterPage.heading.getText(), `Build Your Superhero Roster:`, 'Heading is incorrect');
    assert.equal(await RosterPage.wolverineItem.getText(), `Wolverine`, 'Wolverine is incorrect');
    assert.equal(await RosterPage.ironManItem.getText(), `Iron Man`, 'Iron Man is incorrect');
    assert.equal(await RosterPage.deadpoolItem.getText(), `Deadpool`, 'Deadpool is incorrect');
    assert.equal(await RosterPage.thorItem.getText(), `Thor`, 'Thor is incorrect');
    assert.equal(await RosterPage.spiderManItem.getText(), `Spider-Man`, 'Spiderman is incorrect');
    assert.equal(await RosterPage.heroInputLabel.getText(), `ADD A SUPERHERO`, 'Add hero label is incorrect');
    assert.equal(await RosterPage.heroInputField.getValue(), ``, 'Add hero field is not empty');
  });
  it('should add new hero', async () => {
    const newHero = 'Cave-Man';
    await RosterPage.heroInputField.setValue(newHero);
    await RosterPage.heroSubmit.click();
    assert.equal(await RosterPage.newItem.getText(), newHero, `${newHero} not listed`);
  });
});
