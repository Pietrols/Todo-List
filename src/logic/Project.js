import Todo from "./Todo.js";
export class Project {
  constructor(name, id = Date.now().toString(), todos = []) {
    this.name = name;
    this.id = id;
    this.todos = todos;
  }

  addTodo(todoInstance) {
    if (todoInstance instanceof Todo) {
      this.todos.push(todoInstance);
      todoInstance.projectId = this.id;
    }
  }

  removeTodo(todoId) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }

  getTodoById(todoId) {
    return this.todos.find((todo) => todo.id === todoId);
  }
}
