import { useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ThemeContext } from "../features/theme/context/ThemeContext";
import themeData from "../features/theme/context/ThemeData";

export default function Modal({ open, children }) {
  const { theme } = useContext(ThemeContext);

  // This hook tells the children when should appear, meanwhile the
  // open parameter tells when the animation should execute.
  const [childAppear, setChildAppear] = useState(false);
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      setChildAppear(true);
      return dialog.current.showModal();
    }

    const delay = setTimeout(() => {
      setChildAppear(false);
      dialog.current.close();
    }, 300);

    return () => clearTimeout(delay);
  }, [open]);

  return createPortal(
    <dialog
      ref={dialog}
      data-theme={theme === themeData.dark && "dark"}
      className={
        "modal" + (open ? " in-slide-up-realfast" : " out-slide-down-realfast")
      }
    >
      {childAppear ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}
