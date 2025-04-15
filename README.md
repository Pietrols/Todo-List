# Todo-List

Taking on the famous todo list with vanilla js.
A simple, yet functional web-based Todo List application built with vanilla JavaScript, HTML, and CSS. This project allows users to manage tasks organized into different projects, with data persistence using the browser's `localStorage`.

This project was built step-by-step as a learning exercise focusing on JavaScript modules, DOM manipulation, data modeling, persistence, and event handling.

## Features

- **Project Management:**
  - Create new projects (lists) for organizing todos.
  - View all created projects.
  - Delete projects (except for the default "Inbox").
  - A default "Inbox" project is created automatically if no projects exist.
- **Todo Management:**
  - Add new todos to the currently selected project.
  - Assign properties to todos: Title, Description, Due Date, Priority (Low, Medium, High), Notes.
  - View todos listed within their respective projects.
  - Mark todos as complete or incomplete using a checkbox.
  - Edit existing todo details (Title, Description, Due Date, Priority, Notes).
  - Delete individual todos.
- **Data Persistence:**
  - All projects and todos are saved automatically to the browser's `localStorage`.
  - Data persists even after closing the browser tab or window.
  - Data is loaded automatically when the application starts.
- **Dynamic UI:**
  - The user interface updates dynamically without requiring full page reloads when projects or todos are added, deleted, or updated.
  - The currently selected project is highlighted.
  - Todos display their title, due date (formatted), and priority visually. Completed todos are visually distinct (e.g., strikethrough).

## Technologies Used

- HTML5
- CSS3 (Basic styling applied)
- Vanilla JavaScript (ES6+ features including Modules, Classes, Arrow Functions)
- [date-fns](https://date-fns.org/): For reliable date parsing and formatting.
- Webpack (Assumed development environment for module bundling)
- Browser `localStorage` API
