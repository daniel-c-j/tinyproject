export default class ProjectStorage {
  static key = "userProjects";

  static store(projects) {
    try {
      localStorage.setItem(ProjectStorage.key, JSON.stringify(projects));
    } catch (err) {
      console.log(err);
    }
  }

  static retrieve() {
    try {
      const data = localStorage.getItem(ProjectStorage.key);
      return JSON.parse(data) ?? [];
    } catch (err) {
      console.log(err);
      return [];
    }
  }
}
