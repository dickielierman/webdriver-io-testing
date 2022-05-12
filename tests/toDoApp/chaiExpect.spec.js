const TodoPage = require('../../pages/toDoApp/toDo.page');
const expect = require('chai').expect;

describe('Chai test suite: Expect', () => {
  beforeEach(async () => {
    await browser.url('');
    await browser.maximizeWindow();
  });
  it('should create todos', async () => {
    expect(await TodoPage.toDoTitle.getText()).to.be.equal('todos');
  });
});
