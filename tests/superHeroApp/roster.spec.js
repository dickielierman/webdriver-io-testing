const LoginPage = require('../../pages/superHoroApp/login.page');
const RosterPage = require('../../pages/superHoroApp/roster.page');
const assert = require('assert');

describe('Roster test suite', () => {
  beforeEach(async () => {
    await browser.url('/');
    await LoginPage.login('1@2.com', 'password', false);
    assert.equal(await LoginPage.overlay.isDisplayed(), false, 'Login overlay is still displayed');
  });
  it('should have default values', async () => {
    assert.equal(
      await RosterPage.instructions.getText(),
      `Imagine that you are tasked with building a team of Superheros to save the world. We have given you a few heroes to start with. Add as many heroes as you would like to round out your dream team.`,
      'Instructions are incorrect'
    );
    assert.equal(await RosterPage.heading.getText(), `Build Your Superhero Roster:`, 'Heading is incorrect');
    assert.equal(await RosterPage.rosterItems[0].getText(), `Wolverine`, 'Wolverine is incorrect');
    assert.equal(await RosterPage.rosterItems[1].getText(), `Iron Man`, 'Iron Man is incorrect');
    assert.equal(await RosterPage.rosterItems[2].getText(), `Deadpool`, 'Deadpool is incorrect');
    assert.equal(await RosterPage.rosterItems[3].getText(), `Thor`, 'Thor is incorrect');
    assert.equal(await RosterPage.rosterItems[4].getText(), `Spider-Man`, 'Spiderman is incorrect');
    assert.equal(await RosterPage.heroInputLabel.getText(), `ADD A SUPERHERO`, 'Add hero label is incorrect');
    assert.equal(await RosterPage.heroInputField.getValue(), ``, 'Add hero field is not empty');
  });
  it('should add new hero', async () => {
    const newHero = 'Cave-Man';
    await RosterPage.addHero(newHero);
    assert.equal(await RosterPage.rosterItems[5].getText(), newHero, `${newHero} not listed`);
  });
  it('should add multiple heroes', async () => {
    const heroes = ['Cave-Man', 'Ant-Man', 'Greg From Shipping'];
    const origCount = await RosterPage.rosterItems.length;
    for (let i = 0; i < heroes.length; i++) {
      await RosterPage.addHero(heroes[i]);
    }
    for (let i = 0; i < heroes.length; i++) {
      assert.equal(await RosterPage.rosterItems[i + origCount].getText(), heroes[i], 'new hero is incorrect');
    }
  });
});
