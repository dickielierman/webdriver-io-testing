class IntroPage {
  get heading() {
    // Returns the header
    const selector = 'body > div.container-fluid > div:nth-child(1) > h1';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get image() {
    // Returns the image
    const selector = 'body > div.container-fluid > div:nth-child(2) > img';
    $(selector).waitForDisplayed();
    return $(selector);
  }
}

module.exports = new IntroPage();
