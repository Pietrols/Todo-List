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

export {
  getAllProjects,
  getCurrentProject,
  initialize,
  addProject,
  deleteProject,
};
