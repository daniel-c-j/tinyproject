import { uid } from "uid/secure";

export class Project {
  constructor(
    id = null,
    title = "",
    desc = null,
    dateAdded = Date.now(),
    dueDate = null,
    task = []
  ) {
    this.id = id || uid(8);
    this.title = title;
    this.desc = desc;
    this.dateAdded = dateAdded;
    this.dueDate = dueDate;
    this.task = task;
  }
}
