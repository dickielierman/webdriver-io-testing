class HeaderPage {
  get expander() {
    const selector = 'body > div.row > div > nav > button';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get logoutLink() {
    const selector = '#navbarSupportedContent > ul > li:nth-child(4) > a';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get linkLink() {
    const selector = '#navbarSupportedContent > ul > li:nth-child(2) > a';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get heroFactsLink() {
    const selector = '#navbarDropdown';
    $(selector).waitForDisplayed();
    return $(selector);
  }

  get wolverineOption() {
    const selector = '#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(1)';
    $(selector).waitForDisplayed();
    return $(selector);
  }

  get spidermanOption() {
    const selector = '#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(2)';
    $(selector).waitForDisplayed();
    return $(selector);
  }

  get searchField() {
    const selector = '#search-box';
    return $(selector);
  }

  get searchButton() {
    const selector = '#search-form > button';
    return $(selector);
  }

  // modal stuff

  get wolverineModalWindow() {
    const selector = '#wolverineModal > div > div';
    $(selector).waitForDisplayed();
    return $(selector);
  }

  get wolverineModalTitleText() {
    const selector = '#wolverineModalLabel';
    $(selector).waitForDisplayed();
    return $(selector);
  }

  get wolverineModalContentText() {
    const selector = '#wolverineModal > div > div > div.modal-body';
    $(selector).waitForDisplayed();
    return $(selector);
  }

  get wolverineModalCloseButton() {
    const selector = '#wolverineModal > div > div > div.modal-footer > button';
    $(selector).waitForDisplayed();
    return $(selector);
  }

  get spidermanModalWindow() {
    const selector = '#spidermanModal > div > div';
    $(selector).waitForDisplayed();
    return $(selector);
  }

  get spidermanModalTitleText() {
    const selector = '#spidermanModalLabel';
    $(selector).waitForDisplayed();
    return $(selector);
  }

  get spidermanModalContentText() {
    const selector = '#spidermanModal > div > div > div.modal-body';
    $(selector).waitForDisplayed();
    return $(selector);
  }

  get spidermanModalCloseButton() {
    const selector = '#spidermanModal > div > div > div.modal-footer > button';
    $(selector).waitForDisplayed();
    return $(selector);
  }
}

module.exports = new HeaderPage();
