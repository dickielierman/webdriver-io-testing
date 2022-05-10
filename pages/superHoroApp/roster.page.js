class RosterPage {
  get instructions() {
    const selector = 'body > div.container-fluid > div:nth-child(3) > div > p';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get heading() {
    const selector = 'body > div.container-fluid > div:nth-child(4) > h3';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get heroList() {
    const selector = '#hero-list';
    $(selector).waitForDisplayed();
    return $(selector);
  }

  get rosterItems() {
    const selector = '#hero-list > li';
    return $$(selector);
  }
  get newItem() {
    const selector = '#hero-list > li:nth-child(6)';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get heroInputLabel() {
    const selector = 'label[for="heroInput"]';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get heroInputField() {
    const selector = '#heroInput';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get heroSubmit() {
    const selector = '#addHero-form > button';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  async addHero(hero) {
    await this.heroInputField.setValue(hero);
    await this.heroSubmit.click();
  }
}

module.exports = new RosterPage();
