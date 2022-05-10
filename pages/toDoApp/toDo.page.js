class ToDoPage {
  get toDoField() {
    const selector = 'body > section > div > header > input';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get toDoItem1() {
    const selector = 'body > section > div > section > ul > li > div > label';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  // Row starts at one
  async todoItemByRow(row) {
    const selector = `body > section > div > section > ul > li:nth-child(${row}) > div > label`;
    await $(selector).waitForDisplayed();
    const todoItem = await $(selector);
    return todoItem;
  }
  get todoItems() {
    const selector = `body > section > div > section > ul > li > div > label`;
    return $$(selector);
  }
  get todoItemDeleteButtons() {
    const selector = `body > section > div > section > ul > li > div > button`;
    return $$(selector);
  }
  async todoDeleteButtonByRow(row) {
    const selector = `body > section > div > section > ul > li:nth-child(${row}) > div > button`;
    await $(selector).waitForDisplayed();
    const todoItem = await $(selector);
    return todoItem;
  }
  get cancelToggle1() {
    const selector = 'body > section > div > section > ul > li > div > button';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  get completeToggle1() {
    const selector = 'body > section > div > section > ul > li > div > input';
    $(selector).waitForDisplayed();
    return $(selector);
  }
  async createTodo(val) {
    await this.toDoField.setValue(val);
    await browser.keys('Enter');
  }
}
module.exports = new ToDoPage();
