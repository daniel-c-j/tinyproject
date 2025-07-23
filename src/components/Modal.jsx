import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, children }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) return dialog.current.showModal();
    dialog.current.close();
  }, [open]);

  return createPortal(
    <dialog className="min-w-60 right-0" ref={dialog}>
      {open ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}
