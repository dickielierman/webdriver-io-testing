const TodoPage = require('../../pages/toDoApp/toDo.page');
describe('Todo test suite: Main', () => {
  beforeEach(async () => {
    await browser.url('');
    await browser.maximizeWindow();
  });
  it('should enter and double click edit the item value', async () => {
    const val4 = 'The Message';
    const val5 = 'The other message';
    await TodoPage.toDoField.setValue(val4);
    assert.equal(await TodoPage.toDoField.getValue(), val4, 'Not Equal');
    await browser.keys('Enter');
    assert.equal(await TodoPage.toDoItem1.isDisplayed(), true, 'Item not displayed 1st try');
    assert.equal(await TodoPage.toDoItem1.getText(), val4, 'Not Equal After 1st try');
    await TodoPage.toDoItem1.moveTo(0, 0);
    await TodoPage.toDoItem1.doubleClick();
    await browser.keys(['Control', 'a']);
    await browser.keys(['Control', 'x']);
    await browser.keys(val5);
    await browser.keys('Enter');
    assert.equal(await TodoPage.toDoItem1.isDisplayed(), true, 'Item not displayed 2nd try');
    assert.equal(await TodoPage.toDoItem1.getText(), val5, 'Not Equal After 2nd try');
    await browser.pause(5000);
  });
  it('should enter values with setValue', async () => {
    const val1 = 'hello';
    await TodoPage.toDoField.setValue(val1);
    assert.equal(await TodoPage.toDoField.getValue(), val1, 'Not Equal');
  });
  it('should enter values using keys', async () => {
    const val2 = 'hello';
    await TodoPage.toDoField.click();
    await browser.keys(val2);
    assert.equal(await TodoPage.toDoField.getValue(), val2, 'Not Equal');
    await browser.keys(['Control', 'a']);
    await browser.keys(['Control', 'x']);
    await browser.keys(['Control', 'v']);
    await browser.keys('Enter');
  });
  it('should enter and delete value', async () => {
    const val3 = 'hello';
    await TodoPage.toDoField.setValue(val3);
    assert.equal(await TodoPage.toDoField.getValue(), val3, 'Not Equal');
    await browser.keys('Enter');
    assert.equal(await TodoPage.toDoItem1.isDisplayed(), true, 'Item not displayed');
    await TodoPage.toDoItem1.moveTo(0, 0);
    await TodoPage.cancelToggle1.click();
  });
});
