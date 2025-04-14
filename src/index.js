import "./style.css";
import * as appLogic from "./logic/appLogic.js";
import * as domController from "./ui/domController.js";
import { renderProjectList } from "./ui/projectRenderer.js";
import { renderTodoList } from "./ui/todoRenderer.js";
import { setupEventListeners } from "./ui/eventListeners.js";

document.addEventListener("DOMContentLoaded", () => {
  appLogic.initialize();
  domController.initializeUI();

  const initialProjects = appLogic.getAllProjects();
  const initialCurrentProject = appLogic.getCurrentProject();

  renderProjectList(initialProjects, initialCurrentProject?.id);
  renderTodoList(initialCurrentProject);

  setupEventListeners();
  console.log("App Ready.");
});
