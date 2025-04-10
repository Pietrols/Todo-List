const todoList = [];

class Todo {
  constructor(title, description, date) {
    this.title = title;
    this.id = crypto.randomUUID();
    this.date = date;
    this.description = description;
    this.completed = false;
  }

  // Method to handle complete status
  toggleCompleteStatus() {
    this.completed = !this.completed;
  }
}

// Function to add todo
export function addTodo(title, description, date) {
  const newTodo = new Todo(title, description, date);
  todoList.push(newTodo);
}

// Function to remove a todo by id
export function removeTodo(todoId) {
  const todoIndex = todoList.findIndex((todo) => todo.id === todoId);
  if (todoIndex !== -1) {
    todoList.splice(todoIndex, 1);
  }
}

// Function to toggle completed status
export function toggleTodoComplete(todoId) {
  const todoIndex = todoList.findIndex((todo) => todo.id === todoId);
  if (todoIndex !== -1) {
    const todo = todoList[todoIndex];
    todo.toggleCompleteStatus();
  }
}

// Function to update todo
export function updateTodo(newTitle, newDescription, newDate, todoId) {
  const todoIndex = todoList.findIndex((todo) => todo.id === todoId);
  if (todoIndex !== -1) {
    todoList[todoIndex].title = newTitle;
    todoList[todoIndex].description = newDescription;
    todoList[todoIndex].date = newDate;
  }
}
