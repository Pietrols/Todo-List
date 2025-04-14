import { elements } from "./domController.js";
import * as appLogic from "../logic/appLogic.js";
import { renderProjectList } from "./projectRenderer.js";
import { renderTodoList } from "./todoRenderer.js";

export function setupEventListeners() {
  elements.addProjectBtn.addEventListener("click", () => {
    const trimmedName = elements.newProjectNameInput.value.trim();
    if (trimmedName) {
      const newProject = appLogic.addProject(trimmedNamename);
      if (newProject) {
        elements.newProjectNameInput.value = "";
        renderProjectList(
          appLogic.getAllProjects(),
          appLogic.getCurrentProject()?.id
        );
      }
    }
  });

  elements.newProjectName.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      elements.addProjectBtn.click();
    }
  });
  elements.projectList.addEventListener("click", (event) => {
    const li = event.target.closest(".project-list-item");
    const clickDelete = event.target.classList.contains("delete-project-btn");
    if (li && !clickDelete) {
      const projectId = li.dataset.projectId;
      appLogic.setCurrentProject(projectId);
      renderProjectList(appLogic.getAllProjects(), projectId); // Use the NEW projectId
      renderTodoList(appLogic.getCurrentProject());
    }
    if (clickDelete) {
      const projectId = event.target.dataset.projectId;
      if (confirm("Are you sure you want to delete?")) {
        if (appLogic.deleteProject(projectId)) {
          const currentProject = appLogic.getCurrentProject(); // Get potentially reset project
          renderProjectList(appLogic.getAllProjects(), currentProject?.id);
          renderTodoList(currentProject);
        }
      }
    }
  });

  elements.addTodoBtn.addEventListener("click", () => {
    domController.showTodoModal(null);
  });
  elements.closeButton.addEventListener("click", () => {
    domController.hideTodoModal();
  });
  elements.todoFormModal.addEventListener("click", (event) => {
    if (event.target === elements.todoFormModal) domController.hideTodoModal();
  });
  elements.todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const todoId = elements.todoIdInput.value;
    const todoData = {
      title: elements.todoTitle.value.trim(),
      description: elements.todoDescription.value.trim(),
      dueDate: elements.todoDueDate.value,
      priority: elements.todoPriority.value,
      notes: elements.todoNotes.value.trim(),
    };

    let success = false;
    if (todoId) {
      success = appLogic.updateTodo(todoId, todoData);
    } else {
      success = appLogic.addTodoToCurrentProject(todoData);
    }
    if (success) {
      domController.hideTodoModal();
      renderTodoList(appLogic.getCurrentProject());
    } else {
      alert("Failed to save todo.");
    }
  });

  elements.todoList.addEventListener("click", (event) => {
    const li = event.target.closest("li[data-todo-id]");
    if (!li) {
      return;
    }
    const todoId = li.dataset.todoId;
    if (event.target.classList.contains("todo-complete-checkbox")) {
      appLogic.toggleTodoComplete(todoId);
      renderTodoList(appLogic.getCurrentProject());
    }
    if (event.target.classList.contains("edit-todo-btn")) {
      const todo = appLogic.getCurrentProject()?.getTodoById(todoId);
      if (todo) domController.showTodoModal(todo);
    }
    if (event.target.classList.contains("delete-todo-btn")) {
      if (confirm("Are you sure you want to delete this todo?")) {
        appLogic.deleteTodo(todoId);
        renderTodoList(appLogic.getCurrentProject());
      }
    }
  });
}
