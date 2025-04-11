export class Project {
  constructor(name, id = Date.now().toString(), todos = []) {
    this.name = name;
    this.id = id;
    this.todos = todos;
  }
}
