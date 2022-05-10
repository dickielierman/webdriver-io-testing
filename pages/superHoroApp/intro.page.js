class IntroPage {
  get heading() {
    const selector = 'body > div.container-fluid > div:nth-child(1) > h1';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get image() {
    const selector = 'body > div.container-fluid > div:nth-child(2) > img';
    $(selector).waitForDisplayed();
    return $(selector);
  }
}

module.exports = new IntroPage();
