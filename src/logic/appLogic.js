import { loadState, saveState } from "./storage.js";
import { Project } from "./Project.js";

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

export { getAllProjects, getCurrentProject, initialize };

function addProject(name) {
  if (!name || name.trim() === "") {
    alert("Project name cannot be empty.");
    return null;
  }
  if (projects.some(project.name.toLowerCase() === name.trim().toLowerCase())) {
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
  // Find the project to delete
  const projectIndex = projects.findIndex(
    (project) => project.id === projectId
  );

  if (projectIndex === -1) {
    return false;
  }

  const isDeletingCurrentProject = currentProjectId === projectId;
  projects.splice(projectIndex, 1);

  if (isDeletingCurrentProject && projects.length > 0) {
    currentProjectId = projects[0].id;
  }
  saveState(projects);
  return true;
}
