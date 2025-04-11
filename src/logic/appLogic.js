import { loadState } from "./storage.js";
import { Project } from "./Project.js";

let projects = [];
let currentProjectId = null;

export function initialize() {
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
