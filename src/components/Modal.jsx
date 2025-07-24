import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, children }) {
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
      className={`fixed top-[50%] left-[50%] -translate-[50%] w-[32vw] max-w-[32vw] max-h-[32vh] overflow-y-auto rounded-lg transition ${
        open ? "slide-up-realfast" : "slide-down-realfast"
      }`}
    >
      {childAppear ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}
