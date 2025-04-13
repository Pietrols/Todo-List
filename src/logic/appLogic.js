import { loadState, saveState } from "./storage.js";
import { Project } from "./Project.js";

const DEFAULT_PROJECT_ID = "default-inbox";

let projects = [];
let currentProjectId = null;

function initialize() {
  projects = loadState();
  console.log("Loaded projects:", projects);

  if (projects.length === 0) {
    console.log("No projects found, creating default Inbox project.");
    const defaultProjectName = "Inbox";
    const defaultProjectId = "default-inbox";

    const defaultProject = new Project(defaultProjectName, defaultProjectId);

    projects.push(defaultProject);
  }
  if (projects.length > 0) {
    currentProjectId = projects[0].id;
  } else {
    currentProjectId = null;
    console.error("Error: No projects available after initialization!");
  }
  console.log("Initialization complete.");
  console.log("Current projects:", projects);
  console.log("Current project ID:", currentProjectId);
}

function getAllProjects() {
  return [...projects];
}

function getCurrentProject() {
  return projects.find((project) => project.id === currentProjectId);
}

function addProject(name) {
  if (!name || name.trim() === "") {
    alert("Project name cannot be empty.");
    return null;
  }
  if (
    projects.some(
      (project) => project.name.toLowerCase() === name.trim().toLowerCase()
    )
  ) {
    alert("Project name already exists.");
    return null;
  }
  const newProject = new Project(name.trim());
  projects.push(newProject);
  saveState(projects);
  return newProject;
}

function deleteProject(projectId) {
  if (projects.length <= 1) {
    alert("You cannot delete the last project.");
    return false;
  }
  if (projectId === DEFAULT_PROJECT_ID) {
    alert("You cannot delete this project.");
    return false;
  }
  projects = projects.filter((project) => project.id !== projectId);
  if (currentProjectId === projectId) {
    currentProjectId = DEFAULT_PROJECT_ID;
  }
  saveState(projects);
  return true;
}

function addTodoToCurrentProject(todoData) {
  const currentProject = getCurrentProject();
  if (!currentProject) {
    console.error("Cannot add todo: No current project selected.");
    return false;
  }
  if (!todoData || !todoData.title || !todoData.dueDate || !todoData.priority) {
    alert("Todo requires at least a title, due date and priority.");
    return false;
  }
  const newTodo = new Todo(
    todoData.title,
    todoData.description || "",
    todoData.dueDate,
    todoData.priority,
    todoData.notes || ""
  );
  currentProject.addTodo(newTodo);
  saveState(projects);
  return true;
}

function deleteTodo(todoId) {
  const currentProject = getCurrentProject();
  if (!currentProject) {
    return false;
  }
  currentProject.removeTodo(todoId);
  saveState(projects);
  return true;
}

function updateTodo(todoId, updatedData) {
  const currentProject = getCurrentProject();
  if (!currentProject) {
    console.error("Cannot update todo: No current project selected.");
    return false;
  }
  const todoToUpdate = currentProject.getTodoById(todoId);
  if (!todoToUpdate) {
    console.error(
      `Cannot update todo: Todo with ID ${todoId} not found in project ${currentProject.name}.`
    );
    return false;
  }
  todoToUpdate.updateDetails(updatedData);
  saveState(projects);
  return true;
}

function toggleTodoComplete(todoId) {
  const currentProject = getCurrentProject();
  if (!currentProject) {
    console.error("Cannot toggle todo: No current project selected.");
    return false;
  }
  const todoToToggle = currentProject.getTodoById(todoId);

  if (todoToToggle) {
    todoToToggle.toggleComplete();
    saveState(projects);
    return true;
  } else {
    console.error(
      `Cannot toggle todo: Todo with ID ${todoId} not found in project ${currentProject.name}.`
    );
    return false; // Return false for failure
  }
}

export {
  getAllProjects,
  getCurrentProject,
  initialize,
  addProject,
  deleteProject,
  addTodoToCurrentProject,
  deleteTodo,
  updateTodo,
  toggleTodoComplete,
};
