import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { themeData } from "../theme/themeSlice";

export default function Modal({ open, children }) {
  const theme = useSelector((state) => state.theme.val);

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
