const TodoPage = require('../../pages/toDoApp/toDo.page');
// const assert = require('assert');

describe('Todo test suite', () => {
  beforeEach(async () => {
    await browser.url('');
  });
  it('should create todos', async () => {
    const todoList = ['Thing one', 'another thing', 'a third thing', 'We should do a total of four things'];
    for (let i = 0; i < todoList.length; i++) {
      await TodoPage.createTodo(todoList[i]);
    }
    await browser.pause(5000);
  });
  it.only('should create 100 todos', async () => {
    for (let i = 0; i < 100; i++) {
      await TodoPage.createTodo(`Item: ${i + 1}`);
    }
    await browser.pause(5000);
  });
});
