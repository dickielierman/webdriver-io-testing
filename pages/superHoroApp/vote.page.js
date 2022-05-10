class VotePage {
  get title() {
    const selector = 'body > div.container-fluid > div:nth-child(6) > div > h4';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  // radios
  get xmenItem() {
    const selector = '#heroMovieRadio1';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get avengersItem() {
    const selector = '#heroMovieRadio2';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get deadpoolItem() {
    const selector = '#heroMovieRadio3';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get spidermanItem() {
    const selector = '#heroMovieRadio4';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get ironmanItem() {
    const selector = '#heroMovieRadio5';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  // radio labels
  get xmenItemLabel() {
    const selector = 'label[for="heroMovieRadio1"]';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get avengersItemLabel() {
    const selector = 'label[for="heroMovieRadio2"]';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get deadpoolItemLabel() {
    const selector = 'label[for="heroMovieRadio3"]';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get spidermanItemLabel() {
    const selector = 'label[for="heroMovieRadio4"]';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get ironmanItemLabel() {
    const selector = 'label[for="heroMovieRadio5"]';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  // submit button
  get submitBtn() {
    const selector = '#vote-form > button';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  //vote labels
  get xmenVoteLabel() {
    const selector = '#movieName1';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get avengersVoteLabel() {
    const selector = '#movieName2';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get deadpoolVoteLabel() {
    const selector = '#movieName3';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get spidermanVoteLabel() {
    const selector = '#movieName4';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get ironmanVoteLabel() {
    const selector = '#movieName5';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  // vote counts
  get xmenVoteCount() {
    const selector = '#movieVotes1';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get avengersVoteCount() {
    const selector = '#movieVotes2';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get deadpoolVoteCount() {
    const selector = '#movieVotes3';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get spidermanVoteCount() {
    const selector = '#movieVotes4';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get ironmanVoteCount() {
    const selector = '#movieVotes5';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get thanksForVoting() {
    const selector = '#vote-alert';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get voteForm() {
    const selector = '#vote-form';
    $(selector).waitForDisplayed();
    return $(selector);
  }
}

module.exports = new VotePage();
