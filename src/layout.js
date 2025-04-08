import image from "./images/add_circle_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

export function createlayout() {
  //Main Wrapper
  const wrapperDiv = document.createElement("div");
  wrapperDiv.setAttribute("id", "app");
  document.body.appendChild(wrapperDiv);

  // Sidebar
  const sidebar = document.createElement("aside");
  sidebar.setAttribute("id", "sidebar");
  wrapperDiv.appendChild(sidebar);

  const sidebarHeader = document.createElement("h2");
  sidebarHeader.textContent = "My Todos";
  sidebar.appendChild(sidebarHeader);

  const addNoteImg = document.createElement("img");
  addNoteImg.src = image;
  addNoteImg.setAttribute("id", "add-note-button");
  sidebar.appendChild(addNoteImg);

  const todoTitlesList = document.createElement("ul");
  todoTitlesList.id = "todo-nav-list";
  sidebar.appendChild(todoTitlesList);

  // Main content
  const main = document.createElement("div");
  main.setAttribute("id", "main");
  wrapperDiv.appendChild(main);

  const mainHeader = document.createElement("h1");
  mainHeader.textContent = "TODO";
  main.appendChild(mainHeader);

  const addNoteButton = document.createElement("button");
  addNoteButton.id = "main-add-btn";
  addNoteButton.textContent = "Add Note";
  main.appendChild(addNoteButton);

  const todoCards = document.createElement("div");
  todoCards.id = "todo-cards-container";
  main.appendChild(todoCards);

  // Popup overlay
  const popup = document.createElement("div");
  popup.id = "popup-overlay";
  popup.setAttribute("class", "hidden");
  document.body.appendChild(popup);

  const popupForm = document.createElement("form");
  popupForm.setAttribute("class", "task-form hidden");
  popupForm.id = "todo-form";
  popup.appendChild(popupForm);

  // Title input
  const todoTitleInput = document.createElement("input");
  todoTitleInput.id = "title";
  todoTitleInput.setAttribute("type", "text");
  todoTitleInput.setAttribute("placeholder", "Title");
  todoTitleInput.setAttribute("class", "form-control");
  todoTitleInput.required = true;
  popupForm.appendChild(todoTitleInput);

  const todoTitleLabel = document.createElement("label");
  todoTitleLabel.setAttribute("for", "title");
  todoTitleLabel.setAttribute("class", "task-form-label");
  todoTitleLabel.textContent = "Title: ";
  popupForm.appendChild(todoTitleLabel);

  //Date input
  const todoDateInput = document.createElement("input");
  todoDateInput.id = "date";
  todoDateInput.setAttribute("type", "text");
  todoDateInput.setAttribute("placeholder", "Title");
  todoDateInput.setAttribute("class", "form-control");
  todoDateInput.required = true;
  popupForm.appendChild(todoDateInput);

  const todoDateLabel = document.createElement("label");
  todoDateLabel.setAttribute("for", "date");
  todoDateLabel.setAttribute("class", "task-form-label");
  todoDateLabel.textContent = "Date: ";
  popupForm.appendChild(todoDateLabel);

  // Description input
  const todoDescriptionInput = document.createElement("textarea");
  todoDescriptionInput.id = "description";
  todoDescriptionInput.setAttribute = ("placeholder", "Title");
  todoDescriptionInput.setAttribute = ("class", "form-control");
  todoDescriptionInput.required = true;
  popupForm.appendChild(todoDescriptionInput);

  const todoDescriptionLabel = document.createElement("label");
  todoDescriptionLabel.setAttribute("for", "description");
  todoDescriptionLabel.setAttribute("class", "task-form-label");
  todoDescriptionLabel.textContent = "Description: ";
  popupForm.appendChild(todoDescriptionLabel);

  const formAddButton = document.createElement("button");
  formAddButton.id = "form-add";
  formAddButton.textContent = "Add";
  popupForm.appendChild(formAddButton);

  const formDeleteButton = document.createElement("button");
  formDeleteButton.id = "form-add";
  formDeleteButton.textContent = "Delete";
  popupForm.appendChild(formDeleteButton);

  const formCloseButton = document.createElement("button");
  formCloseButton.id = "form-close";
  formCloseButton.textContent = "Close";
  formCloseButton.type = "button";
  popupForm.appendChild(formCloseButton);
}
