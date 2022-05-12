const TodoPage = require('../../pages/toDoApp/toDo.page');
const should = require('chai').should();

describe('Chai test suite: Should', () => {
  beforeEach(async () => {
    await browser.url('');
    await browser.maximizeWindow();
  });
  it('should create todos', async () => {
    (await TodoPage.toDoTitle.getText()).should.equal('todos');
  });
});
