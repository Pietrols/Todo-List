import { elements } from "./domController.js";

const DEFAULT_PROJECT_ID = "default-inbox";

function renderProjectList(projects, currentProjectId) {
  elements.projectList.innerHTML = "";
  if (projects.length === 0) {
    elements.projectList.innerHTML = "<li>No projects yet.</li>";
    return;
  }
  projects.forEach((project) => {
    const li = document.createElement("li");
    li.textContent = project.name;
    li.dataset.projectId = project.id;
    li.classList.add("project-list-item");
    if (project.id === currentProjectId) {
      li.classList.add("active");
    }
    if (project.id !== DEFAULT_PROJECT_ID) {
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Del";
      deleteButton.classList.add("delete-project-btn");
      deleteButton.dataset.projectId = project.id;
      li.appendChild(deleteButton);
    }
    elements.projectList.appendChild(li);
  });
}

export { renderProjectList };
