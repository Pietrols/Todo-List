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

  elements.newProjectNameInput.addEventListener("keypress", (event) => {
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
}
