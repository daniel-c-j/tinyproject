import { v4 as uuidv4 } from "uuid";
import { getCurrentFormattedDate } from "../../../util/formatDate";

export class Project {
  constructor(
    id = null,
    title = "",
    desc = null,
    dateAdded = getCurrentFormattedDate(),
    dueDate = null,
    task = []
  ) {
    this.id = id || uuidv4();
    this.title = title;
    this.desc = desc;
    this.dateAdded = dateAdded;
    this.dueDate = dueDate;
    this.task = task;
  }
}
