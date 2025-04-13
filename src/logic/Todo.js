export default class Todo {
  constructor(
    title,
    description,
    dueDate,
    priority,
    notes = "",
    isComplete = false,
    projectId = null,
    id = Date.now().toString()
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.isComplete = isComplete;
    this.id = id;
    this.projectId = projectId;
  }

  toggleComplete() {
    this.isComplete = !this.isComplete;
  }

  updateDetails({ title, description, dueDate, priority, notes }) {
    if (title !== undefined) {
      this.title = title;
    }
    if (description !== undefined) {
      this.description = description;
    }
    if (dueDate !== undefined) {
      this.dueDate = dueDate;
    }
    if (priority !== undefined) {
      this.priority = priority;
    }
    if (notes !== undefined) {
      this.notes = notes;
    }
  }
}
