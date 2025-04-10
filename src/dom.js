// Function to render todos
export function renderTodos() {
  const todoContainer = document.getElementById("todo-cards-container");
  todoContainer.innerHTML = "";

  todoList.forEach(({ id, title, date, description }) => {
    todoContainer.innerHTML += `
          <div class="todo" data-id="${id}">
            <p><strong>Title:</strong> ${title}</p>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Date:</strong> ${date}</p>
            <img src="./images/check_box.svg" alt="checkbox">
            <button class="btn edit-btn" data-id="${id}">Edit</button>
            <button class="btn delete-btn" data-id="${id}">Delete</button>
          </div>
        `;
  });
}
