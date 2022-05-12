const TodoPage = require('../../pages/toDoApp/toDo.page');

describe('Todo test suite: Looping', () => {
  beforeEach(async () => {
    await browser.url('');
    await browser.maximizeWindow();
  });
  it('should create todos', async () => {
    const todoList = ['Thing one', 'another thing', 'a third thing', 'We should do a total of four things'];
    for (let i = 0; i < todoList.length; i++) {
      await TodoPage.createTodo(todoList[i]);
    }
  });
  it.only('should create 100 todos', async () => {
    for (let i = 0; i < 100; i++) {
      await TodoPage.createTodo(`Item: ${i + 1}`);
    }
  });
});
