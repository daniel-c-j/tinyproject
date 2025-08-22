import SideBar from "../sidebar/SideBar";
import QuickMenu from "../quickmenu/QuickMenu";
import ThemeButton from "../../features/theme/components/ThemeButton";
import { Outlet } from "react-router";
import { Provider, useSelector } from "react-redux";
import store from "../../redux/store";
import { themeData } from "../../features/theme/themeSlice";

export default function BaseLayoutWrapper() {
  return (
    <Provider store={store}>
      <BaseLayout />
    </Provider>
  );
}

export function BaseLayout() {
  const theme = useSelector((state) => state.theme.val);

  return (
    <div className="base" data-theme={theme === themeData.dark && "dark"}>
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
