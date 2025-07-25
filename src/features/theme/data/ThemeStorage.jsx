import themeData from "../context/ThemeData";

export default class ThemeStorage {
  static key = "theme";
  static defaultTheme = themeData.light;

  static store(projects) {
    try {
      localStorage.setItem(ThemeStorage.key, JSON.stringify(projects));
    } catch (err) {
      console.log(err);
    }
  }

  static retrieve() {
    try {
      const data = localStorage.getItem(ThemeStorage.key);
      return JSON.parse(data) ?? ThemeStorage.defaultTheme;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
}
