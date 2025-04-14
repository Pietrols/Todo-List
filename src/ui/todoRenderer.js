import { format, parseISO, isValid } from "date-fns";
import { elements } from "./domController.js";

function renderTodoList(project) {
  if (!project) {
    elements.currentProjectTitle.textContent = "Select a project";
    elements.todoList.innerHTML = "";
    return;
  }
  elements.currentProjectTitle.textContent = project.name;
  if (project === null || project.todos.length === 0) {
    elements.todoList.textContent = "Project is empty.";
    return;
  }

  project.todos.forEach((todo) => {
    const li = document.createElement("li");
    li.dataset.todoId = todo.id;
    if (todo.isComplete) {
      li.classList.add("completed");
    }
    let formattedDate = "no date"; //Default value
    try {
      // 1. Parse the string. Adding time helps ensure consistent local date parsing.
      const dateObject = parseISO(todo.dueDate + "T00:00:00");

      // 2. Validate the result
      if (isValid(dateObject)) {
        // 3. Format it if valid (e.g., "Apr 15, 2025")
        formattedDate = format(dateObject, "MMM dd, yyyy");
      } else {
        formattedDate = "Invalid Date"; // Handle invalid input string
      }
    } catch (e) {
      // Catch any unexpected errors during parsing/formatting
      console.error("Error processing date:", todo.dueDate, e);
      formattedDate = "Date Error";
    }
    li.innerHTML = `
    <div class="todo-summary">
        <input type="checkbox" class="todo-complete-checkbox" ${
          todo.isComplete ? "checked" : ""
        }>
        <span>${todo.title}</span>
    </div>
    <div class="todo-details-summary">
        <span class="todo-due-date">${formattedDate}</span>
        <span class="todo-priority priority-${todo.priority}">${
      todo.priority
    }</span>
    </div>
    <div class="todo-controls">
        <button class="edit-todo-btn" title="Edit Todo">✏️</button>
        <button class="delete-todo-btn" title="Delete Todo">🗑️</button>
    </div>
`;
    elements.todoList.appendChild(li);
  });
}

export { renderTodoList };
