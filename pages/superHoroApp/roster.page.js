class RosterPage {
  get instructions() {
    // returns instructions text
    const selector = 'body > div.container-fluid > div:nth-child(3) > div > p';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get heading() {
    // returns heading text
    const selector = 'body > div.container-fluid > div:nth-child(4) > h3';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get heroList() {
    // returns hero list
    const selector = '#hero-list';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get rosterItems() {
    // returns roster items
    const selector = '#hero-list > li';
    return $$(selector);
  }
  get newItem() {
    // returns new item (6th item really)
    const selector = '#hero-list > li:nth-child(6)';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get heroInputLabel() {
    // returns hero input label
    const selector = 'label[for="heroInput"]';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get heroInputField() {
    // returns hero input field
    const selector = '#heroInput';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get heroSubmit() {
    // returns hero submit btn
    const selector = '#addHero-form > button';
    $(selector).waitForDisplayed();
    return $(selector);
  }

  async addHero(hero) {
    // adds a hero
    await this.heroInputField.setValue(hero);
    await this.heroSubmit.click();
  }
}

module.exports = new RosterPage();
