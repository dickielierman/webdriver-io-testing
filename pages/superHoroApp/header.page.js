class HeaderPage {
  get expander() {
    // Returns the navigation expander button
    const selector = 'body > div.row > div > nav > button';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get logoutLink() {
    // Returns the logout link
    const selector = '#navbarSupportedContent > ul > li:nth-child(4) > a';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get linkLink() {
    // Returns the "Link" link
    const selector = '#navbarSupportedContent > ul > li:nth-child(2) > a';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get heroFactsLink() {
    // Returns the hero facts dropdown trigger
    const selector = '#navbarDropdown';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get wolverineOption() {
    // Returns wolverine option in hero facts
    const selector = '#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(1)';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get spidermanOption() {
    // Returns spiderman option in hero facts
    const selector = '#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(2)';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get searchField() {
    // Returns the search field
    const selector = '#search-box';
    return $(selector);
  }
  get searchButton() {
    // Returns the search button
    const selector = '#search-form > button';
    return $(selector);
  }
  // modal stuff
  get wolverineModalWindow() {
    // Returns wolverine modal window
    const selector = '#wolverineModal > div > div';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get wolverineModalTitleText() {
    // Returns wolverine modal window title
    const selector = '#wolverineModalLabel';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get wolverineModalContentText() {
    // Returns wolverine modal window text
    const selector = '#wolverineModal > div > div > div.modal-body';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get wolverineModalCloseButton() {
    // Returns wolverine modal window close btn
    const selector = '#wolverineModal > div > div > div.modal-footer > button';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get spidermanModalWindow() {
    // Returns spiderman modal window
    const selector = '#spidermanModal > div > div';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get spidermanModalTitleText() {
    // Returns spiderman modal window title
    const selector = '#spidermanModalLabel';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get spidermanModalContentText() {
    // Returns spiderman modal window text
    const selector = '#spidermanModal > div > div > div.modal-body';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get spidermanModalCloseButton() {
    // Returns spiderman modal window close btn
    const selector = '#spidermanModal > div > div > div.modal-footer > button';
    $(selector).waitForDisplayed();
    return $(selector);
  }
}

module.exports = new HeaderPage();
