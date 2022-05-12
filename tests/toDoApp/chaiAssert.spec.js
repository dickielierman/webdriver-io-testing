const TodoPage = require('../../pages/toDoApp/toDo.page');
const assert = require('chai').assert;

describe('Chai test suite: Assert', () => {
  beforeEach(async () => {
    await browser.url('');
    await browser.maximizeWindow();
  });
  it('should create todos', async () => {
    assert.equal(await TodoPage.toDoTitle.getText(), 'todos');
  });
});
