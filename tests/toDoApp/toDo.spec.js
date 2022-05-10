const TodoPage = require('../../pages/toDoApp/toDo.page');
const assert = require('assert');

describe('Todo test suite', () => {
  beforeEach(async () => {
    await browser.url('');
  });
  it.skip('should enter values with setValue', async () => {
    const val = 'hello';
    await TodoPage.toDoField.setValue(val);
    assert.equal(await TodoPage.toDoField.getValue(), val, 'Not Equal');
  });
  it.skip('should enter values using keys', async () => {
    const val = 'hello';
    await TodoPage.toDoField.click();
    await browser.keys(val);
    assert.equal(await TodoPage.toDoField.getValue(), val, 'Not Equal');
    await browser.keys(['Control', 'a']);
    await browser.keys(['Control', 'x']);
    await browser.keys(['Control', 'v']);
    await browser.keys('Enter');
  });
  it.skip('should enter and delete value', async () => {
    const val = 'hello';
    await TodoPage.toDoField.setValue(val);
    assert.equal(await TodoPage.toDoField.getValue(), val, 'Not Equal');
    await browser.keys('Enter');
    assert.equal(await TodoPage.toDoItem1.isDisplayed(), true, 'Item not displayed');
    await TodoPage.toDoItem1.moveTo(0, 0);
    await TodoPage.cancelToggle1.click();
  });

  it('should enter and double click edit the item value', async () => {
    const val = 'The Message';
    const val2 = 'The other message';
    await TodoPage.toDoField.setValue(val);
    assert.equal(await TodoPage.toDoField.getValue(), val, 'Not Equal');
    await browser.keys('Enter');
    assert.equal(await TodoPage.toDoItem1.isDisplayed(), true, 'Item not displayed');
    assert.equal(await TodoPage.toDoItem1.getText(), val, 'Not Equal After');
    await TodoPage.toDoItem1.moveTo(0, 0);
    await TodoPage.toDoItem1.doubleClick();
    await browser.keys(['Control', 'a']);
    await browser.keys(['Control', 'x']);
    await browser.keys(val2);
    await browser.keys('Enter');
    assert.equal(await TodoPage.toDoItem1.isDisplayed(), true, 'Item not displayed');
    assert.equal(await TodoPage.toDoItem1.getText(), val2, 'Not Equal After');
  });
});
