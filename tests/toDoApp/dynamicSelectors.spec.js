const TodoPage = require('../../pages/toDoApp/toDo.page');
const assert = require('assert');

describe('Todo test suite', () => {
  beforeEach(async () => {
    await browser.url('');
  });
  it('should create todos', async () => {
    const todoList = ['Thing one', 'another thing', 'a third thing', 'We should do a total of four things'];
    for (let i = 0; i < todoList.length; i++) {
      await TodoPage.createTodo(todoList[i]);
      const elem = await TodoPage.todoItemByRow(i + 1);
      assert.equal(await elem.getText(), todoList[i], 'Entered and displayed values dont match');
    }

    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i] === 'another thing') {
        const labelElem = await TodoPage.todoItemByRow(i + 1);
        await labelElem.moveTo(0, 0);
        const deleteElem = await TodoPage.todoDeleteButtonByRow(i + 1);
        await deleteElem.click();
      }
    }
  });

  it('should create todos and work with list of elements', async () => {
    const todoList = ['Job One', 'Job Two', 'Job Three', 'Job Four'];
    for (let i = 0; i < todoList.length; i++) {
      await TodoPage.createTodo(todoList[i]);
    }
    // const listItems = await TodoPage.todoItems();
    const jobOneElem = await TodoPage.todoItems[todoList.indexOf('Job One')];
    await jobOneElem.moveTo(0, 0);
    const delJobOneElem = await TodoPage.todoItemDeleteButtons[todoList.indexOf('Job One')];
    await delJobOneElem.click();
    await browser.pause(5000);
  });
  it('should loop through elements backwards', async () => {
    const todoList = ['Job One', 'Job Two', 'Job Three', 'Job Four'];
    for (let i = 0; i < todoList.length; i++) {
      await TodoPage.createTodo(todoList[i]);
    }
    await browser.pause(1000);
    for (let i = todoList.length; i > 0; i--) {
      const jobOneElem = await TodoPage.todoItems[i - 1];
      await jobOneElem.moveTo(0, 0);
      const delJobOneElem = await TodoPage.todoItemDeleteButtons[i - 1];
      await delJobOneElem.click();
    }
  });
  it.only('should loop through elements and verify', async () => {
    const todoList = ['Job One', 'Job Two', 'Job Three', 'Job Four'];
    for (let i = 0; i < todoList.length; i++) {
      await TodoPage.createTodo(todoList[i]);
    }
    await browser.pause(1000);
    for (let i = 0; i < todoList.length; i++) {
      const elem = await TodoPage.todoItemByRow(i + 1);
      assert.equal(await elem.getText(), todoList[i], 'Entered and displayed values dont match');
    }
  });
});
