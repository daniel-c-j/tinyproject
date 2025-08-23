import SideBar from "../sidebar/SideBar";
import QuickMenu from "../quickmenu/QuickMenu";
import ThemeButton from "../../features/theme/components/ThemeButton";
import { Outlet } from "react-router";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { currentTheme } from "../../features/theme/themeSlice";
import { useAppSelector } from "../../redux/hook";

export default function BaseLayoutWrapper() {
  return (
    <Provider store={store}>
      <BaseLayout />
    </Provider>
  );
}

export function BaseLayout() {
  const theme = useAppSelector(currentTheme);

  return (
    <div className="base" data-theme={theme}>
      <SideBar className="sidebar in-slide-right-slow" />

      <div className="body in-slide-up">
        <Outlet />
      </div>

      <QuickMenu className="quick-menu in-slide-left-fast">
        <ThemeButton />
      </QuickMenu>
    </div>
  );
}
