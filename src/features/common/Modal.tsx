import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useAppSelector } from "../../redux/hook";
import { currentTheme } from "../theme/themeSlice";

export default function Modal({ open, children }: { open: boolean, children: ReactNode }) {
  const theme = useAppSelector(currentTheme);

  // This hook tells the children when should appear, meanwhile the
  // open parameter tells when the animation should execute.
  const [childAppear, setChildAppear] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      setChildAppear(true);

      if (import.meta.env.TEST) return;
      dialog.current!.showModal();
      return;
    }

    const delay = setTimeout(() => {
      setChildAppear(false);

      if (import.meta.env.TEST) return;
      dialog.current!.close();
    }, 300);

    return () => clearTimeout(delay);
  }, [open]);

  return <dialog
    ref={dialog}
    data-theme={theme}
    className={
      "modal" + (open ? " in-slide-up-realfast" : " out-slide-down-realfast")
    }
  >
    {childAppear ? children : null}
  </dialog>;

  return createPortal(
    <dialog
      ref={dialog}
      data-theme={theme}
      className={
        "modal" + (open ? " in-slide-up-realfast" : " out-slide-down-realfast")
      }
    >
      {childAppear ? children : null}
    </dialog>,
    document.getElementById("modal") as Element
  );
}
