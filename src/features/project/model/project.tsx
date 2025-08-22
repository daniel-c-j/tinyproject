import { uid } from "uid";


class TaskItem {
  id: string;
  value: string;
  constructor(
    id = uid(8), value: string) {
    this.id = id;
    this.value = value;
  }


  toJSON() { return { ...this }; }

}


class Project {
  id: string;
  title: string;
  desc: string | null;
  dateAdded: number;
  dueDate: number | null;
  task: TaskItem[];

  constructor(
    id = uid(8),
    title = "",
    desc: string | null = null,
    dateAdded = Date.now(),
    dueDate: number | null = null,
    task: TaskItem[] = []
  ) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.dateAdded = dateAdded;
    this.dueDate = dueDate;
    this.task = task;
  }

  toJSON() { return { ...this }; }
}

export { Project, TaskItem };