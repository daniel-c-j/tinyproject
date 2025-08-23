import { uid } from "uid";

class TaskItem {
  id: string;
  value: string;

  constructor(id: string | null = null, value: string) {
    this.id = id === null ? uid(8) : id;
    this.value = value;
  }
}


class Project {
  id: string;
  title: string;
  desc: string | null;
  dateAdded: number;
  dueDate: string | null;
  task: TaskItem[];

  copyWith(
    overrides: Partial<{
      id: string;
      title: string;
      desc: string | null;
      dateAdded: number;
      dueDate: string | null;
      task: TaskItem[];
    }>
  ): Project {
    return new Project(
      overrides.id !== undefined ? overrides.id : this.id,
      overrides.title !== undefined ? overrides.title : this.title,
      overrides.desc !== undefined ? overrides.desc : this.desc,
      overrides.dateAdded !== undefined ? overrides.dateAdded : this.dateAdded,
      overrides.dueDate !== undefined ? overrides.dueDate : this.dueDate,
      overrides.task !== undefined ? overrides.task : this.task
    );
  }

  constructor(
    id: string | null = null,
    title = "",
    desc: string | null = null,
    dateAdded = Date.now(),
    dueDate: string | null = null,
    task: TaskItem[] = []
  ) {
    this.id = id === null ? uid(8) : id;
    this.title = title;
    this.desc = desc;
    this.dateAdded = dateAdded;
    this.dueDate = dueDate;
    this.task = task;
  }


}

export { Project, TaskItem };