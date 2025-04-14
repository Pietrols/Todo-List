const elements = {};

function initializeUI() {
  elements.projectList = document.getElementById("project-list");
  elements.newProjectName = document.getElementById("new-project-name");
  elements.addProjectBtn = document.getElementById("add-project-btn");
  elements.currentProjectTitle = document.getElementById(
    "current-project-title"
  );
  elements.todoList = document.getElementById("todo-list");
  elements.addTodoBtn = document.getElementById("add-todo-btn");
  elements.todoFormModal = document.getElementById("todo-form-modal");
  elements.todoForm = document.getElementById("todo-form");
  elements.todoFormTitle = document.getElementById("todo-form-title");
  elements.todoIdInput = document.getElementById("todo-id-input");
  elements.todoTitle = document.getElementById("todo-title");
  elements.todoDescription = document.getElementById("todo-description");
  elements.todoDueDate = document.getElementById("todo-dueDate");
  elements.todoPriority = document.getElementById("todo-priority");
  elements.todoNotes = document.getElementById("todo-notes");
  elements.saveTodoBtn = document.getElementById("save-todo-btn");
  elements.closeButton = document.querySelector(".close-button");
}

function showTodoModal(todo = null) {
  elements.todoForm.reset();
  if (todo) {
    elements.todoFormTitle.textContent = "Edit Todo";
    elements.todoIdInput.value = todo.id;
    elements.todoTitle.value = todo.title || "";
    elements.todoDescription.value = todo.description || "";
    elements.todoNotes.value = todo.notes || "";
    elements.todoPriority.value = todo.priority;
    elements.todoDueDate.value = todo.dueDate;
  } else {
    elements.todoFormTitle.textContent = "Add New Todo";
    elements.todoIdInput.value = "";
  }
  elements.todoFormModal.style.display = "block";
}

function hideTodoModal() {
  elements.todoFormModal.style.display = "none";
  elements.todoForm.reset();
  elements.todoIdInput.value = "";
}

export { elements, initializeUI, showTodoModal, hideTodoModal };
