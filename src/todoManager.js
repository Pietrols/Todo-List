class TaskManager {
  constructor(title, id, description, date, completed) {
    this.title = title;
    this.id = id;
    this.date = date;
    this.description = description;
    this.completed = completed;
  }

  todoList = [];

  addTodo = () => {};
}
