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
}
