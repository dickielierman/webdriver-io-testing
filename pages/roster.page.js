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

  // each hero in list
  get wolverineItem() {
    const selector = '#hero-list > li:nth-child(1)';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get ironManItem() {
    const selector = '#hero-list > li:nth-child(2)';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get deadpoolItem() {
    const selector = '#hero-list > li:nth-child(3)';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get thorItem() {
    const selector = '#hero-list > li:nth-child(4)';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get spiderManItem() {
    const selector = '#hero-list > li:nth-child(5)';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get newItem() {
    const selector = '#hero-list > li:nth-child(6)';
    $(selector).waitForDisplayed();
    return $(selector);
  }

  // end heroes

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
}

module.exports = new RosterPage();
